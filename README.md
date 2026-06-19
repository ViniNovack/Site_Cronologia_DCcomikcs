# 🦇 DC Comics — Timeline

> *"The Dark Knight. The Man of Steel. The Amazon Warrior. One Universe. One Timeline."*

An **interactive web application** that charts the most important sagas in the history of the DC Comics universe — from the Golden Age origins of Superman to the Rebirth era — with cinematic visuals, Wikipedia-powered comic covers, and a fully animated horizontal timeline.

---

## 🗂️ Table of Contents

- [🎯 Overview](#-overview)
- [🛠️ Technologies Used](#️-technologies-used)
- [✨ Features](#-features)
- [🦸 Sagas Covered](#-sagas-covered)
- [⚙️ How It Works](#️-how-it-works)
- [🌐 Wikipedia API Integration](#-wikipedia-api-integration)
- [🃏 Card & Timeline System](#-card--timeline-system)
- [🔍 Modal System](#-modal-system)
- [🎨 Era Color System](#-era-color-system)
- [♿ Accessibility](#-accessibility)
- [📁 Project Structure](#-project-structure)
- [▶️ How to Run](#️-how-to-run)
- [👥 Author](#-author)

---

## 🎯 Overview

The DC Timeline is a single-page web application built with **vanilla HTML, CSS and JavaScript** — no frameworks, no dependencies. It presents the most important DC Comics sagas across six distinct eras in an immersive horizontal timeline, where each card links to a detailed modal with story summary, key events, universe consequences and the original creative team.

---

## 🛠️ Technologies Used

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Wikipedia API](https://img.shields.io/badge/Wikipedia_API-000000?style=for-the-badge&logo=wikipedia&logoColor=white)
![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

**Fonts:** `Bebas Neue` (display headings) · `Inter` (body text)

> Zero external JS libraries or frameworks — pure vanilla web stack.

---

## ✨ Features

### 🏠 Hero Section
- Full-viewport landing with the **DC COMICS** title in Bebas Neue at `clamp(5rem, 15vw, 13rem)`
- Layered **radial gradient background** simulating depth with DC blue, red and gold glows
- Subtle **CSS grid overlay** for a cinematic, comic-book-panel feel
- Animated **scroll hint indicator** that bobs up and down via `@keyframes bob`
- A decorative gradient bolt (`--dc-blue` → `--dc-gold`) below the title

### 📌 Sticky Era Navigation
- A `position: sticky; top: 0` navbar with **glassmorphism effect** (`backdrop-filter: blur(16px)`)
- Filter pills for each era — clicking one **hides all cards** that don't belong to that era and highlights the active pill
- Horizontally scrollable on mobile with hidden scrollbar (`scrollbar-width: none`)

### 🃏 Horizontal Timeline
- An infinite horizontal track with a **centered gradient line** running through it
- Cards **alternate above and below** the line using `nth-child(even/odd)` CSS selectors with `translateY`
- Each card has a **vertical connector** and a **glowing dot** on the timeline line, both colored by era
- Smooth **spring-physics hover animation** via `cubic-bezier(0.34, 1.56, 0.64, 1)` — cards "bounce" slightly on hover
- Wikipedia cover images load **asynchronously after the cards render**, replacing emoji fallbacks without layout shift

### 🔍 Modal Details
- Clicking any card opens a **full-detail modal** with: era badge, year, title, cover image, story summary, key events list, universe consequences, and original creative team credits
- Modal animates in with a **scale + translateY spring transition**
- Cover image loads asynchronously inside the modal, showing an emoji placeholder while fetching

### 🔎 Era Filtering
- Clicking an era pill calls `renderCards(filter)` which **re-renders the entire card list** showing only the matching era
- "All Eras" pill resets to show everything

---

## 🦸 Sagas Covered

The timeline spans **6 eras** and covers the most significant stories in DC history:

| 📅 Year | 📖 Saga | 🏷️ Era |
|---|---|---|
| 1938 | A Origem do Superman | 🟡 Era de Ouro |
| 1939 | A Origem do Batman | 🟡 Era de Ouro |
| 1941 | A Origem da Mulher-Maravilha | 🟡 Era de Ouro |
| 1956 | O Surgimento do Flash | ⚪ Era de Prata |
| 1960 | Surgimento da Liga da Justiça | ⚪ Era de Prata |
| 1970 | GL/GA: O Espantalho de Deus | 🟤 Era de Bronze |
| 1971 | O Quarto Mundo de Jack Kirby | 🟤 Era de Bronze |
| 1985 | Crise nas Infinitas Terras | 🔵 Era Moderna |
| + more | Additional sagas across all eras | All eras |

Each saga entry in `script.js` is a JavaScript object with the following structure:

```javascript
{
  id: 1,
  year: "1938",
  era: "golden",
  eraLabel: "Era de Ouro",
  title: "A Origem do Superman",
  wikiSlug: "Action_Comics_1",   // Exact Wikipedia article title for API fetch
  fallbackIcon: "🦸",            // Shown while image loads or if fetch fails
  summary: "...",                // Full story summary shown in modal
  events: ["...", "..."],        // Key events rendered as a bullet list
  consequences: "...",           // Impact on the DC universe shown in modal
  writers: "..."                 // Original creative team credits
}
```

---

## ⚙️ How It Works

The application flow on page load:

```
1. renderCards("all") → loops through sagas[], creates card DOM elements, appends to #timelineCards
2. For each card: fetchWikiImage(wikiSlug) is called asynchronously
3. If Wikipedia returns an image URL → replaces emoji with <img> tag (no layout shift)
4. setupFilters() → attaches click listeners to all .era-pill buttons
5. Era pill click → calls renderCards(filter) to rebuild the visible card list
6. Card click → openModal(saga) → populates modal fields, fetches image again for the larger cover
```

---

## 🌐 Wikipedia API Integration

The most technically interesting feature of the project. Each saga has a `wikiSlug` — the exact title of its Wikipedia article in English. `fetchWikiImage()` queries the **Wikipedia REST API** to retrieve the article's thumbnail:

```javascript
async function fetchWikiImage(slug) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`;
  try {
    const res  = await fetch(url);
    const data = await res.json();
    // Wikipedia returns the thumbnail under data.thumbnail.source
    return data?.thumbnail?.source ?? null;
  } catch {
    return null;       // On any failure, null triggers the emoji fallback
  }
}
```

Key design decisions:
- **Cards render immediately** with emoji icons — images are fetched after and swapped in, so the user sees content instantly with no blank placeholders
- **`onerror` handler on every `<img>`** — if the image URL later breaks or fails to load, the emoji is restored automatically:
```javascript
onerror="this.parentElement.innerHTML='<span class=\"card-cover-emoji\">${saga.fallbackIcon}</span>'"
```
- **`loading="lazy"`** is set on all card images to defer loading until they're near the viewport

---

## 🃏 Card & Timeline System

Cards alternate above and below the central line using pure CSS — no JavaScript positioning needed:

```css
/* Even cards go UP, odd cards go DOWN */
.card:nth-child(even) { transform: translateY(-140px); }
.card:nth-child(odd)  { transform: translateY(140px);  }

/* Hover: move a little further + scale up */
.card:nth-child(even):hover { transform: translateY(-148px) scale(1.04); }
.card:nth-child(odd):hover  { transform: translateY(148px)  scale(1.04); }
```

Each card uses `::before` and `::after` pseudo-elements for the connector and dot:
- `::before` — a vertical 2px line connecting the card to the timeline
- `::after` — a 12px circle on the timeline line, colored and glowing with the era's color

The era color is passed as a **CSS custom property per card**, set dynamically in JavaScript:

```javascript
card.style.setProperty("--card-era-color", color);
```

This allows the connector, dot, glow, border hover and year text to all inherit the correct era color without any additional JS logic.

---

## 🔍 Modal System

The modal opens with a two-step animation driven entirely by CSS classes:

```css
/* Default state — invisible and offset */
.modal-overlay {
  opacity: 0;
  pointer-events: none;
}
.modal {
  transform: translateY(24px) scale(0.97);
}

/* Open state — JS adds .open class */
.modal-overlay.open { opacity: 1; pointer-events: all; }
.modal-overlay.open .modal {
  transform: translateY(0) scale(1);
  /* transition uses spring cubic-bezier for a natural feel */
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

The modal can be closed in **three ways**, all handled in `script.js`:
```javascript
// 1. Close button click
document.getElementById("modalClose").addEventListener("click", closeModal);

// 2. Click outside the modal (on the overlay backdrop)
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeModal();   // only if clicking the overlay itself
});

// 3. Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
```

When open, `document.body.style.overflow = "hidden"` prevents the page from scrolling behind the modal.

---

## 🎨 Era Color System

Every visual element — card borders, connectors, dots, glows, era badges, year labels — derives its color from a single `eraColors` object in `script.js`:

```javascript
const eraColors = {
  golden:  "var(--golden)",   // #FFD700 — Gold
  silver:  "var(--silver)",   // #C0C0C0 — Silver
  bronze:  "var(--bronze)",   // #CD7F32 — Bronze
  modern:  "var(--modern)",   // #0057FF — DC Blue
  new52:   "var(--new52)",    // #00C7FF — Cyan
  rebirth: "var(--rebirth)",  // #FF6B00 — Orange
};
```

All color values are defined as **CSS custom properties** in `:root` inside `style.css`, keeping design tokens centralized. Changing an era's color requires updating only one line in the CSS file.

---

## ♿ Accessibility

The project includes several accessibility considerations:
- All cards have `tabindex="0"`, `role="button"` and `aria-label` with title and year — fully keyboard navigable
- Cards respond to both `click` and `keydown` (`Enter` / `Space`) to open the modal
- The modal has `role="dialog"` and `aria-modal="true"`
- `aria-hidden` is toggled on the overlay between `"true"` and `"false"` on open/close
- Focus is moved to the close button when the modal opens: `setTimeout(() => modalClose.focus(), 350)`
- A `@media (prefers-reduced-motion: reduce)` block disables all animations for users who prefer it

---

## 📁 Project Structure

| 📄 File | 📖 Description |
|---|---|
| `index.html` | Page structure — hero, sticky nav, timeline container, modal skeleton, footer |
| `style.css` | All styles — CSS variables, hero, timeline, cards, modal, animations, responsiveness |
| `script.js` | All logic — saga data, Wikipedia API fetch, card rendering, modal system, era filters |

---

## ▶️ How to Run

No build tools or dependencies required. Just open the file in a browser:

```bash
# Clone the repository
git clone https://github.com/ViniNovack/Site_Cronologia_DCcomikcs.git

# Open in browser
open index.html
```

> ⚠️ The Wikipedia API is fetched directly from the browser. An **internet connection is required** to load the comic cover images. If offline, emoji fallbacks are shown automatically.

---

## 👥 Author

<div align="center">

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ViniNovack">
        <img src="https://github.com/ViniNovack.png" width="100px" style="border-radius: 50%;" alt="ViniNovack"/>
        <br/>
        <sub><b>Vinicius Novack</b></sub>
      </a>
      <br/>
      <a href="https://github.com/ViniNovack">
        <img src="https://img.shields.io/badge/ViniNovack-181717?style=flat-square&logo=github&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>

*Made with 💙 and a love for DC Comics*

</div>
