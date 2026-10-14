# Neil Christopher M. Rodas: Web Portfolio

Plain HTML + CSS + JavaScript. No frameworks, no build step.

```
neil-portfolio/
├── index.html            ← page structure
├── css/style.css         ← all styling (colors are at the top in :root)
├── js/main.js            ← CONFIG (your links) + all content data + interactions
└── assets/
    ├── certificates/     ← your certificate PDFs (opened from the site)
    ├── source/           ← downloadable C# source of the demo projects
    └── Neil-Rodas-Resume.pdf
projects/
├── demo.css, prototype.js  ← shared styles + the clickable Figma prototype viewer
├── hotel-reservation/      ← web version of the C# WinForms app
├── face-change/            ← web version of the Xamarin Android app
├── poison-game/            ← web version of the Kotlin Compose game
├── duoable/                ← web version of the Kotlin co-op game (two phones)
├── burger-builder/         ← web version of the Kotlin OOP burger app
├── parkua/                 ← clickable Figma prototype (screens/ + prototype.json)
├── tenant-system/          ← clickable Figma prototype
├── artelier/               ← clickable Figma prototype
└── duoable-design/         ← clickable Figma wireframe
```

## 1. Open it in VS Code
1. Unzip the folder.
2. In VS Code, choose **File → Open Folder…** and select `neil-portfolio`.
3. Install the **Live Server** extension (by Ritwick Dey).
4. Right-click `index.html` and choose **Open with Live Server**. The site opens in your browser and reloads every time you save.

## 2. Make it yours (5 minutes)
Open `js/main.js`. Everything you need is at the top:
- `CONFIG.email`: the email shown in Contact (currently neilchrstphrrodas@gmail.com).
- `CONFIG.phone`, `CONFIG.linkedin`, `CONFIG.github`: fill these in, or leave them as `""` to hide the button.
- Projects, milestones and certificates are plain lists (`PROJECTS`, `TIMELINE`, `CERT_GROUPS`), so you can add or edit entries without touching HTML.

## 3. Publish it free (anyone can open the link)

### Option A: GitHub Pages (recommended, free link like `username.github.io`)
1. Create a free GitHub account, then click **New repository**.
   - Name it `<your-username>.github.io` to get the short link, or any name such as `portfolio`.
   - Set it to **Public**.
2. Click **uploading an existing file** and drag in **everything inside** the `neil-portfolio` folder (so `index.html` is at the top level). Then click **Commit changes**.
3. Go to **Settings → Pages**. Under *Branch*, pick `main` and `/ (root)`, then click **Save**.
4. Wait about 1 minute. Your site is live at `https://<your-username>.github.io/` (or `https://<your-username>.github.io/portfolio/`).

From VS Code you can also use the **Source Control** tab (Ctrl+Shift+G) and choose **Publish to GitHub**.

### Option B: Netlify Drop (no account needed to try)
Go to **app.netlify.com/drop** and drag the whole `neil-portfolio` folder onto the page. You get a link in seconds. Create a free account to keep it permanently and rename the URL.

## Note on the prototypes
The Figma prototypes load `prototype.json` with `fetch`, so open the site through **Live Server** or the published link. Double-clicking `index.html` from your file explorer will not load them.

## What's on the page
A clean, editorial single page:
- **Intro:** large name, short summary, résumé button and a facts panel (school, honors, focus).
- **Work:** numbered project rows; click one to expand its details. Five apps have **Try it live** web versions with source downloads, and four Figma designs are **clickable prototypes**.
- **Skills:** three columns.
- **Milestones:** a step timeline from 2023 to now.
- **Certificates:** grouped by issuer, with links to verify each one.
- **Contact:** labeled rows, with a copy button for your email.

It includes a light/dark toggle and works on phones and desktops.

Your one-page résumé is at `assets/Neil-Rodas-Resume.pdf`. Replace that file whenever you update your résumé.
