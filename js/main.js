/* =========================================================
   Neil Christopher M. Rodas | portfolio
   EDIT HERE: your contact details. Leave "" to hide a row.
   ========================================================= */
const CONFIG = {
  email: "neilchrstphrrodas@gmail.com",
  phone: "",                              // e.g. "+63 9XX XXX XXXX"
  linkedin: "https://www.linkedin.com/in/neil-rodas-00b184441/",
  github: "https://github.com/neil-christopher",
  resume: "assets/Neil-Rodas-Resume.pdf",
  googleSkills: "https://www.skills.google/public_profiles/29ba403f-38e6-41ca-88d0-9d8d23655f21",
};

/* ---------- Projects ---------- */
const PROJECTS = [
  {
    title: "GreenEdge: Offline Community Relay Hub",
    full: "A Green Edge Computing-Based Communication Relay Hub via Secured Offline Public Soft Access Point Channel for Community Information Services",
    cat: "Capstone · IoT", year: "2025–26",
    short: "A solar-powered, offline Wi-Fi node that keeps Barangay Marinig, Cabuyao (64,310 residents) informed when typhoons cut power and signal.",
    points: [
      "Arduino Uno + WeMos ESP32 edge node on a 30W solar panel and 12V 10Ah LiFePO₄ battery.",
      "SoftAP with Captive Portal and WPA2/WPA3, covering about 50–100 m, with AES-128 and role-based access.",
      "Resident mobile app (shared by on-site QR code) plus a browser-based admin web app for announcements, emergency assets and forms.",
    ],
    tags: ["ESP32", "Arduino", "SoftAP", "AES-128", "Solar"],
  },
  {
    title: "CipherWeave: Hybrid Cipher Research",
    full: "Performance, Entropy Analysis, and Brute-Force Resilience of a Transposition-Fibonacci Spiral Hybrid Cipher with Caesar Shift Keying",
    cat: "Research · Security", year: "Co-author",
    short: "Layers Caesar Shift, Columnar Transposition and a keyed Fibonacci Spiral, then measures keyspace, entropy and speed.",
    points: [
      "Implemented and benchmarked in Python.",
      "Maximum keyspace of about 30 bits, far below the 128-bit standard.",
      "Entropy moved only from 3.3869 to 3.4586 bits/char; throughput near 2 MB/s.",
    ],
    tags: ["Python", "Cryptography", "Entropy"],
  },
  {
    title: "Parkúa: QR Parking for MMCL",
    full: "Implementation of Parking Tracking Application and QR Code Scanning to MMCL Student Parking Area",
    cat: "Project Plan · QA · Figma", year: "2025",
    short: "QR-based student verification at the gate plus real-time, sensor-based parking vacancy, designed as a student app and a guard dashboard.",
    points: [
      "Served as Quality Assurance in a five-person team.",
      "Planned for May–September 2025 with a ₱102,000 budget.",
      "Clickable Figma prototype covering the student app (slot availability, e-ticket, notifications) and the security-guard dashboard.",
    ],
    tags: ["QR Code", "IoT", "QA", "Figma"],
    demo: "projects/parkua/index.html", badge: "Prototype", demoLabel: "Try the prototype →",
  },
  {
    title: "Tenant Information System (RentEase)",
    full: "Development of a Tenant Information System for S&E Apartments",
    cat: "Web System · Analysis · Figma", year: "2025",
    short: "Replaces manual tenant records for a real apartment property, with separate tenant and landlord apps.",
    points: [
      "Requirements gathered through interviews and observation.",
      "ASP.NET (.NET Framework) with a normalized relational database.",
      "Figma prototype: tenants pay rent and file requests; landlords manage units, billing and reminders.",
    ],
    tags: ["ASP.NET", "Database", "SDLC", "Figma"],
    demo: "projects/tenant-system/index.html", badge: "Prototype", demoLabel: "Try the prototype →",
  },
  {
    title: "Artelier",
    full: "VisionaryAtelier",
    cat: "Mobile MVP · UX · Figma", year: "135 screens",
    short: "An AI-free art platform where artists build a virtual atelier, showcase work and take commissions.",
    points: [
      "Full Figma prototype with artist and customer journeys: onboarding, building an atelier, memberships, auctions, commissions and social posting.",
      "Designed with Denzel Arciaga and Arjay Pangilinan.",
    ],
    tags: ["Figma", "Mobile", "Interaction design"],
    demo: "projects/artelier/index.html", badge: "Prototype", demoLabel: "Try the prototype →",
  },
  {
    title: "Duo-Able",
    cat: "Co-op Game · Kotlin", year: "Machine Problem",
    short: "A two-device co-op puzzle game: each player sees different clues, so you have to talk to win.",
    points: [
      "Built in Kotlin with Jetpack Compose: three rounds (slider lock, radio-and-piano melody, story order) and a victory timer.",
      "Custom Canvas sliders with drag gestures; screen flow modelled with a sealed class.",
      "Planned first as a Figma wireframe.",
    ],
    tags: ["Kotlin", "Jetpack Compose", "Canvas", "Game design"],
    demo: "projects/duoable/index.html",
    source: "assets/source/Duo-Able-source.zip",
    links: [["View the wireframe", "projects/duoable-design/index.html"]],
  },
  {
    title: "Hotel Reservation System",
    cat: "Desktop App · C# WinForms", year: "Machine Problem",
    short: "Book rooms, find reservations by reference number, edit or remove them, and check guests out.",
    points: [
      "Main Menu, Book a Room and Check Out forms built in C# Windows Forms (.NET Framework).",
      "Reservations kept in a Dictionary keyed by an auto-generated reference no. (HTL-date-random) and saved to a text file.",
      "Validation for required fields, an 11-digit phone number, dates not in the past and a selected room type.",
      "Sortable ListView; selecting a row loads the booking for update or removal.",
    ],
    tags: ["C#", "WinForms", "File I/O", "Dictionary"],
    demo: "projects/hotel-reservation/index.html",
    source: "assets/source/Hotel-Reservation-source.zip",
  },
  {
    title: "Burger Builder",
    full: "IT140P OBE",
    cat: "Mobile App · Kotlin", year: "OBE",
    short: "Tap ingredients to stack a burger between the buns and watch the price update.",
    points: [
      "Object-oriented Kotlin: a Priceable interface, an abstract BurgerComponent class and an Ingredient subclass.",
      "Horizontal RecyclerView ingredient tray; layers inserted under the top bun; reset keeps the buns.",
    ],
    tags: ["Kotlin", "OOP", "RecyclerView"],
    demo: "projects/burger-builder/index.html",
    source: "assets/source/Burger-Builder-source.zip",
  },
  {
    title: "Poison Game",
    cat: "Mobile Game · Kotlin", year: "Machine Problem",
    short: "A two-player pass-and-play card game: avoid the two hidden poisons, collect the most candy.",
    points: [
      "Jetpack Compose with Material 3: a name entry screen, a 4×4 LazyVerticalGrid and a Game Over dialog.",
      "Immutable game state with data classes; turns, scoring and win checks.",
    ],
    tags: ["Kotlin", "Jetpack Compose", "Material 3"],
    demo: "projects/poison-game/index.html",
    source: "assets/source/Poison-Game-source.zip",
  },
  {
    title: "Face Change App",
    cat: "Mobile App · Xamarin.Android", year: "Machine Problem",
    short: "Roll a random cartoon face, scramble it into four parts, then tap each part to rebuild it.",
    points: [
      "Built in C# with Xamarin.Android: an ImageView, two Buttons and four ImageButtons.",
      "A 100 ms Timer cycles faces on Roll; Start randomizes the four face parts.",
      "Tapping a part swaps its image, using six faces split into 24 drawable pieces.",
    ],
    tags: ["C#", "Xamarin", "Android", "Timer"],
    demo: "projects/face-change/index.html",
    source: "assets/source/Face-Change-App-source.zip",
  },
];

/* ---------- Milestones (oldest first) ---------- */
const TIMELINE = [
  ["2023", "Started BSIT at Mapúa MCL and joined a Game Jam"],
  ["AY 2023–24", "Dean's Lister"],
  ["AY 2024–25", "Dean's Lister"],
  ["Nov 2025", "Completed CCNA: Switching, Routing & Wireless Essentials"],
  ["AY 2025–26", "Dean's Lister, and started the GreenEdge capstone"],
  ["Feb 2026", "Completed 5 Google Project Management courses"],
  ["Feb–Mar 2026", "Earned 13 Google Cloud skill badges"],
  ["Next", "Looking for my first role in IT"],
];

/* ---------- Certificates, grouped by issuer ---------- */
const SB = "https://www.skills.google/public_profiles/29ba403f-38e6-41ca-88d0-9d8d23655f21/badges/";
const CERT_GROUPS = [
  { name: "Google Cloud", mark: "GC", color: "#3b74d9", verb: "Verify", items: [
    ["Cloud Security Risks: Identify and Protect Against Threats", "Skill badge · Mar 2026", SB + "23270929"],
    ["Detect, Respond, and Recover from Cloud Cybersecurity Attacks", "Skill badge · Mar 2026", SB + "23269699"],
    ["Put It All Together: Prepare for a Cloud Security Analyst Job", "Skill badge · Mar 2026", SB + "23268806"],
    ["Build a Secure Google Cloud Network", "Skill badge · Mar 2026", SB + "23133720"],
    ["Implementing Cloud Load Balancing for Compute Engine", "Skill badge · Mar 2026", SB + "23263639"],
    ["Prepare Data for ML APIs on Google Cloud", "Skill badge · Mar 2026", SB + "23265889"],
    ["Set Up an App Dev Environment on Google Cloud", "Skill badge · Mar 2026", SB + "23265008"],
    ["Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud", "Course · Mar 2026", SB + "23168235"],
    ["Google Cloud Computing Foundations: Networking & Security in Google Cloud", "Course · Mar 2026", SB + "23127227"],
    ["Google Cloud Computing Foundations: Infrastructure in Google Cloud", "Course · Mar 2026", SB + "22794778"],
    ["Google Cloud Computing Foundations: Cloud Computing Fundamentals", "Course · Mar 2026", SB + "22700105"],
    ["Strategies for Cloud Security Risk Management", "Course · Feb 2026", SB + "22514840"],
    ["Introduction to Security Principles in Cloud Computing", "Course · Feb 2026", CONFIG.googleSkills],
  ]},
  { name: "Google Project Management · Coursera", mark: "PM", color: "#b7791f", verb: "Verify", items: [
    ["Foundations of Project Management", "Feb 2026", "https://coursera.org/verify/M9HZ30MHAYAJ"],
    ["Project Initiation: Starting a Successful Project", "Feb 2026", "https://coursera.org/verify/P4FDDUZC1FUN"],
    ["Project Planning: Putting It All Together", "Feb 2026", "https://coursera.org/verify/2XJE508XAABV"],
    ["Project Execution: Running the Project", "Feb 2026", "https://coursera.org/verify/4F6H2CYWNY9V"],
    ["Agile Project Management", "Feb 2026", "https://coursera.org/verify/QGWTTWN4LWFZ"],
  ]},
  { name: "Cisco Networking Academy", mark: "CS", color: "#1b8fbd", verb: "View", items: [
    ["CCNA: Switching, Routing, and Wireless Essentials", "Nov 2025", "assets/certificates/ccna-srwe.pdf"],
  ]},
  { name: "Seminars", mark: "SM", color: "#6b7280", verb: "View", items: [
    ["Data Security in Computer Programming Languages", "Ethel Programming Services · Feb 2026", "assets/certificates/data-security-webinar.pdf"],
    ["Architecting the Future with Decentralization: An Introduction to Blockchain", "JPCS Mapúa MCL · Feb 2025", "assets/certificates/blockchain-seminar.pdf"],
  ]},
];
const PREVIEW = 6; // certificates shown per group before "Show all"

/* ---------- Helpers ---------- */
const $ = (s) => document.querySelector(s);
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
};

/* ---------- Theme ---------- */
const root = document.documentElement;
root.dataset.theme = store.get("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
$("#theme").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  store.set("theme", root.dataset.theme);
});

const header = $(".top");
addEventListener("scroll", () => header.classList.toggle("is-scrolled", scrollY > 8), { passive: true });

/* ---------- Work ---------- */
$("#workCount").textContent = `${PROJECTS.length} projects`;
$("#projects").innerHTML = PROJECTS.map((p) => `
  <li><details>
    <summary>
      <span>
        <span class="r-title">${p.title}${p.demo ? ` <span class="live">${p.badge || "Live demo"}</span>` : ""}</span>
        <span class="r-short">${p.short}</span>
        <span class="r-mobile">${[p.cat, p.year].filter(Boolean).join(" · ")}</span>
      </span>
      <span class="r-meta">${p.cat}${p.year ? `<br>${p.year}` : ""}</span>
      <span class="r-icon" aria-hidden="true"></span>
    </summary>
    <div class="r-body">
      ${p.full ? `<p class="r-short" style="margin:0 0 10px"><em>${p.full}</em></p>` : ""}
      ${p.points.length ? `<ul>${p.points.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}
      <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      ${p.demo || p.source ? `<div class="r-links">
        ${p.demo ? `<a class="btn btn--solid" href="${p.demo}">${p.demoLabel || "Try it live →"}</a>` : ""}
        ${(p.links || []).map(([l, u]) => `<a class="btn" href="${u}">${l}</a>`).join("")}
        ${p.source ? `<a class="btn" href="${p.source}" download>Download source</a>` : ""}
      </div>` : ""}
    </div>
  </details></li>`).join("");

/* ---------- Milestones ---------- */
$("#timeline").innerHTML = TIMELINE.map(([w, t]) => `<li><span class="when">${w}</span><span class="what">${t}</span></li>`).join("");

/* ---------- Certificates ---------- */
const total = CERT_GROUPS.reduce((n, g) => n + g.items.length, 0);
$("#certCount").textContent = `${total} total`;
$("#certGroups").innerHTML = CERT_GROUPS.map((g, gi) => `
  <div class="group">
    <h3>${g.name} <b>${g.items.length}</b></h3>
    <ul class="c-list">
      ${g.items.map(([name, meta, url], i) => `
        <li ${i >= PREVIEW ? 'data-extra hidden' : ""}><a class="cert" href="${url}" target="_blank" rel="noopener">
          <span class="c-mark" style="background:${g.color}">${g.mark}</span>
          <span><span class="c-name">${name}</span><span class="c-meta">${meta}</span></span>
          <span class="c-go">${g.verb} ↗</span>
        </a></li>`).join("")}
    </ul>
    ${g.items.length > PREVIEW ? `<button class="more" data-group="${gi}">Show all ${g.items.length}</button>` : ""}
  </div>`).join("");
document.querySelectorAll(".more").forEach((btn) => btn.addEventListener("click", () => {
  const extras = btn.previousElementSibling.querySelectorAll("[data-extra]");
  const opening = extras[0].hidden;
  extras.forEach((li) => (li.hidden = !opening));
  btn.textContent = opening ? "Show fewer" : `Show all ${extras.length + PREVIEW}`;
}));

/* ---------- Contact ---------- */
const rows = [
  CONFIG.email && `<li><div class="row"><span class="k">Email</span><a class="v" href="mailto:${CONFIG.email}" style="display:inline;padding:0;font-size:inherit">${CONFIG.email}</a><button class="copy" id="copyBtn">Copy</button></div></li>`,
  CONFIG.phone && `<li><a href="tel:${CONFIG.phone.replace(/\s/g, "")}"><span class="k">Phone</span><span class="v">${CONFIG.phone}</span><span class="go">↗</span></a></li>`,
  CONFIG.linkedin && `<li><a href="${CONFIG.linkedin}" target="_blank" rel="noopener"><span class="k">LinkedIn</span><span class="v">LinkedIn profile</span><span class="go">↗</span></a></li>`,
  CONFIG.github && `<li><a href="${CONFIG.github}" target="_blank" rel="noopener"><span class="k">Code</span><span class="v">GitHub</span><span class="go">↗</span></a></li>`,
  `<li><a href="${CONFIG.googleSkills}" target="_blank" rel="noopener"><span class="k">Badges</span><span class="v">Google Skills profile</span><span class="go">↗</span></a></li>`,
  CONFIG.resume && `<li><a href="${CONFIG.resume}" target="_blank" rel="noopener"><span class="k">Résumé</span><span class="v">One-page PDF</span><span class="go">↗</span></a></li>`,
].filter(Boolean);
$("#contactList").innerHTML = rows.join("");
const copyBtn = $("#copyBtn");
if (copyBtn) copyBtn.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(CONFIG.email); copyBtn.textContent = "Copied"; }
  catch { copyBtn.textContent = "Copy failed"; }
  setTimeout(() => (copyBtn.textContent = "Copy"), 1600);
});
if (!CONFIG.resume) $("#resumeBtn").remove(); else $("#resumeBtn").href = CONFIG.resume;
$("#year").textContent = new Date().getFullYear();
