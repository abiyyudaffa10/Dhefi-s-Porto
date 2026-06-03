# Talent / People dashboard — UI kit

The "human-capital template" surface: a people-ops dashboard from the perspective of **Dhefi** as the HR user. App UI, so it uses **soft shadows** (not the marketing hard-offset) — except small kanban cards, which keep a hard shadow to feel grabbable.

**Run:** open `index.html`. Interactive React (Babel-in-browser).

## Screens (click the sidebar to switch)
| Route | Component | What it shows |
|---|---|---|
| Overview | `Overview` (`dash-screens.jsx`) | 4 stat cards, a weekly recruitment bar chart, recent-activity feed, team directory. |
| People | `People` | Filterable employee table (segmented control by employment type), initials avatars, status badges. |
| Candidates | `Pipeline` | Kanban board — Applied → Screening → Interview → Offer. |
| Assessments / Timesheets | `Placeholder` | Intentionally blank (not part of the recreation). |

Clicking any person/candidate opens the **`ProfileDrawer`** (right slide-over with scrim; Esc closes).

## Components
| Component | File |
|---|---|
| `Sidebar`, `Topbar`, `Avatar`, `Badge`, `Icon` | `dash-core.jsx` |
| `StatCard`, `MiniBars`, screens, `ProfileDrawer` | `dash-screens.jsx` |
| `App` (routing + drawer state, Esc handler) | `dash-app.jsx` |

## Patterns
- Dark `--ink-bg` sidebar with paper text; orange active item.
- Soft elevation on cards; hairline borders; warm `--paper-2` app background.
- Avatars are **initials in tinted circles** (deterministic tint by name) — no fake stock photos. Dhefi (the user) uses her real photo.
- Demo roster + pipeline are invented people-ops data; swap the `PEOPLE` / `PIPELINE` consts in `dash-core.jsx`.

## Note
Some screenshot tools (html-to-image) mis-paint the active sidebar highlight and ignore programmatic scroll — the live DOM is correct. Verify in a real browser.
