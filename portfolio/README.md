# Portfolio marketing site — UI kit

A single-page personal portfolio in the FOLK voice, populated with **Dhefi Dwicahyani's** real CV. This is the "professional portfolio with funk" surface.

**Run:** open `index.html`. It's an interactive React (Babel-in-browser) prototype.

## Sections / components
| Component | File | Notes |
|---|---|---|
| `Nav` | `components-core.jsx` | Sticky, blurred header. Collapses to a hamburger < 860px. |
| `Brand` | `components-core.jsx` | Mark + `FOLK.` lockup. |
| `Button` | `components-core.jsx` | `primary` / `secondary` / `ghost`. Hard-shadow lift on hover, press-into-shadow on active. |
| `Marquee` | `components-core.jsx` | Ink scrolling band of skills, `✱`-separated. Pauses for reduced-motion. |
| `Hero` | `components-sections.jsx` | Editorial headline + framed photo with status/location badges. |
| `Stats` | `components-sections.jsx` | Four big mono-labelled numbers, accent-rotated. |
| `WorkGrid` | `components-sections.jsx` | Case-study cards (her HR projects), color-rotated thumbs. |
| `About` | `components-sections.jsx` | Bio + photo + skill chips. |
| `Experience` | `components-sections.jsx` | Role timeline with `✱` bullet points. |
| `Achievements` | `components-sections.jsx` | Award + publication cards. |
| `Contact` | `app.jsx` | Dark band, working (fake) form with sent-state, contact links. |
| `Footer` | `components-core.jsx` | Brand + links. |

## Patterns demonstrated
- Kicker → display headline → body → mono-meta rhythm.
- One accent per surface; accents *rotate* across the work grid.
- Hard-offset shadows in the marketing context (vs. soft in the dashboard).
- Scroll-reveal is an *enhancement*: content is visible by default and animates in via `.reveal.in` — never hidden if JS/observer doesn't run (safe for print/PDF).
- Icons: Lucide via CDN, re-initialised after each React render. (Brand icons like `linkedin` were removed from Lucide, so a generic `external-link` stands in — swap if you add a brand set.)

## To reuse
Copy the `.jsx` files + reference `../colors_and_type.css` and `../assets/`. Replace the `WORK`, `STATS`, `EXPERIENCE` data consts at the top of `components-sections.jsx`.
