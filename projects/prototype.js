/* Clickable prototype viewer for screens exported from Figma.
   Reads prototype.json: { flows: [{name, start}], screens: [{id, name, section, w, h, img, overlay, hotspots: [{x,y,w,h,type,target,url,timeout}]}] } */
(function () {
  const mount = document.getElementById("proto");
  const src = mount.dataset.src || "prototype.json";

  fetch(src).then((r) => r.json()).then(init).catch(() => {
    mount.innerHTML = `<p class="proto-error">Couldn't load the prototype. If you opened this file directly, run it through a local server (VS Code Live Server) or the published site.</p>`;
  });

  function init(data) {
    const byId = new Map(data.screens.map((s) => [s.id, s]));
    let flow = data.flows[0];
    let history = [], current = null, overlay = null, timers = [], showSpots = false;

    mount.innerHTML = `
      <div class="proto-bar">
        <div class="proto-flows" role="tablist">${data.flows.map((f, i) => `<button data-flow="${i}" class="${i ? "" : "on"}">${f.name}</button>`).join("")}</div>
        <div class="proto-tools">
          <button data-act="back" title="Back (←)">← Back</button>
          <button data-act="restart" title="Restart flow">Restart</button>
          <label class="proto-check"><input type="checkbox" data-act="spots"> Show hotspots</label>
          <button data-act="screens">All screens</button>
        </div>
      </div>
      <div class="proto-stage"><div class="proto-device"><div class="proto-viewport"></div></div></div>
      <p class="proto-caption"><span class="proto-name"></span><span class="proto-count"></span></p>
      <div class="proto-drawer" hidden><div class="proto-drawer-head"><b>All screens</b><button data-act="close-drawer" aria-label="Close">✕</button></div><div class="proto-grid"></div></div>`;

    const stage = mount.querySelector(".proto-stage");
    const device = mount.querySelector(".proto-device");
    const viewport = mount.querySelector(".proto-viewport");
    const nameEl = mount.querySelector(".proto-name");
    const countEl = mount.querySelector(".proto-count");
    const drawer = mount.querySelector(".proto-drawer");

    // Device size comes from the flow's first screen (e.g. 375×812); taller screens scroll.
    let devW = 375, devH = 812;
    function fit() {
      const avail = Math.min(stage.clientWidth, 460);
      const maxH = Math.max(420, window.innerHeight - 170);
      const scale = Math.min(1, avail / devW, maxH / devH);
      device.style.setProperty("--w", devW + "px");
      device.style.setProperty("--h", devH + "px");
      device.style.setProperty("--s", scale);
      stage.style.height = devH * scale + 24 + "px";
    }
    addEventListener("resize", fit);

    function screenEl(s, isOverlay) {
      const el = document.createElement("div");
      el.className = isOverlay ? "proto-overlay-card" : "proto-screen";
      el.style.width = s.w + "px"; el.style.height = s.h + "px";
      el.innerHTML = `<img src="${s.img}" alt="${esc(s.name)}" width="${s.w}" height="${s.h}" draggable="false">` +
        s.hotspots.filter((h) => !h.timeout).map((h, i) => `<button class="proto-hot" data-i="${i}" style="left:${h.x}px;top:${h.y}px;width:${Math.max(h.w, 12)}px;height:${Math.max(h.h, 12)}px" aria-label="${h.type === "back" ? "Back" : "Go to next screen"}"></button>`).join("");
      const spots = s.hotspots.filter((h) => !h.timeout);
      el.addEventListener("click", (e) => {
        const b = e.target.closest(".proto-hot");
        if (b) { e.stopPropagation(); act(spots[+b.dataset.i]); return; }
        flash();
      });
      return el;
    }

    function clearTimers() { timers.forEach(clearTimeout); timers = []; }
    function schedule(s) {
      for (const h of s.hotspots) if (h.timeout && h.target) timers.push(setTimeout(() => act(h), Math.max(400, h.timeout)));
    }

    function show(id, push = true) {
      const s = byId.get(id); if (!s) return;
      clearTimers(); closeOverlay(false);
      if (push && current) history.push(current.id);
      current = s;
      viewport.innerHTML = "";
      const scroller = document.createElement("div"); scroller.className = "proto-scroll";
      scroller.appendChild(screenEl(s, false));
      viewport.appendChild(scroller);
      nameEl.textContent = s.name;
      countEl.textContent = s.section && s.section !== "Page 1" ? ` · ${s.section}` : "";
      schedule(s);
      mount.querySelector('[data-act="back"]').disabled = !history.length;
    }

    function openOverlay(id) {
      const s = byId.get(id); if (!s) return;
      closeOverlay(false);
      const wrap = document.createElement("div"); wrap.className = "proto-overlay";
      const card = screenEl(s, true);
      const sc = Math.min(1, (devW - 16) / s.w, (devH - 16) / s.h);
      card.style.transform = `scale(${sc})`;
      wrap.appendChild(card);
      wrap.addEventListener("click", (e) => { if (e.target === wrap) closeOverlay(); });
      viewport.appendChild(wrap);
      overlay = { s, wrap };
      nameEl.textContent = `${current.name} › ${s.name}`;
      schedule(s);
    }
    function closeOverlay(updateName = true) {
      if (!overlay) return;
      overlay.wrap.remove(); overlay = null;
      if (updateName && current) nameEl.textContent = current.name;
    }

    function act(h) {
      if (h.type === "url" && h.url) { window.open(h.url, "_blank", "noopener"); return; }
      if (h.type === "close") { closeOverlay(); return; }
      if (h.type === "back") { if (overlay) closeOverlay(); else back(); return; }
      if (h.type === "overlay") { openOverlay(h.target); return; }
      if (h.type === "navigate") show(h.target);
    }
    function back() { if (history.length) show(history.pop(), false); }

    function flash() {
      if (showSpots) return;
      mount.classList.add("proto-flash");
      clearTimeout(flash.t); flash.t = setTimeout(() => mount.classList.remove("proto-flash"), 700);
    }

    function startFlow(i) {
      flow = data.flows[i];
      const s = byId.get(flow.start);
      devW = s.w; devH = Math.min(s.h, Math.round(s.w * 2.2));
      if (s.h < s.w * 1.6) devH = s.h;
      history = []; current = null; fit(); show(flow.start, false);
      mount.querySelectorAll("[data-flow]").forEach((b) => b.classList.toggle("on", +b.dataset.flow === i));
    }

    // Toolbar
    mount.querySelector(".proto-bar").addEventListener("click", (e) => {
      const f = e.target.closest("[data-flow]"); if (f) return startFlow(+f.dataset.flow);
      const a = e.target.closest("[data-act]"); if (!a) return;
      if (a.dataset.act === "back") overlay ? closeOverlay() : back();
      if (a.dataset.act === "restart") startFlow(data.flows.indexOf(flow));
      if (a.dataset.act === "screens") openDrawer();
    });
    mount.querySelector('[data-act="spots"]').addEventListener("change", (e) => { showSpots = e.target.checked; mount.classList.toggle("proto-spots", showSpots); });
    addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "Backspace") { if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return; overlay ? closeOverlay() : back(); }
      if (e.key === "Escape") { if (!drawer.hidden) drawer.hidden = true; else closeOverlay(); }
    });

    // All-screens drawer
    function openDrawer() {
      const grid = drawer.querySelector(".proto-grid");
      if (!grid.childElementCount) {
        const groups = new Map();
        data.screens.forEach((s) => { const g = s.section || "Screens"; if (!groups.has(g)) groups.set(g, []); groups.get(g).push(s); });
        grid.innerHTML = [...groups].map(([g, arr]) => `<h4>${esc(g)}</h4><div class="proto-thumbs">${arr.map((s) => `<button data-id="${s.id}" title="${esc(s.name)}"><img loading="lazy" src="${s.img}" alt=""><span>${esc(s.name)}</span></button>`).join("")}</div>`).join("");
        grid.addEventListener("click", (e) => {
          const b = e.target.closest("[data-id]"); if (!b) return;
          drawer.hidden = true;
          const s = byId.get(b.dataset.id);
          if (s.overlay && current) openOverlay(s.id); else show(s.id);
        });
      }
      drawer.hidden = false;
    }
    drawer.querySelector('[data-act="close-drawer"]').addEventListener("click", () => (drawer.hidden = true));

    startFlow(0);
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
})();
