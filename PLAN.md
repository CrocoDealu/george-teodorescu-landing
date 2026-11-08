# George Teodorescu (1915–1952): site plan

A static site about the life and work of George Teodorescu. The visitor should feel
they have walked into a European art archive, where each document opens another page
of a life that deserves to be recovered.

Primary language: **English**. No build step: open `index.html` in a browser or serve the folder.

## Sitemap

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero (portrait, signature, quote), entry cards, recently added works and documents |
| Life | `life.html` | Timeline of his life: Romania, Paris, Buenos Aires |
| Work | `work.html` | His works (sculpture, drawing, architecture), filterable by type |
| Archive | `archive.html` | Documents (letters, photographs, press), filterable by type |
| Circle | `circle.html` | Interactive graph of his relationships. Each tie leads to works and documents |
| Contact | `contact.html` | Contact, and a call for anyone holding letters, photographs or works |

## Decisions (open for discussion)

1. **Three main sections: Life / Work / Archive.** Work holds his works and Archive
   holds the documents about him. Both pages render from the same list, split by `kind`, so every
   item keeps a stable ID (`W-001`, `D-001`) that other pages link to (`work.html#W-001`,
   `archive.html#D-001`).
2. **"Network" is called "Circle"** ("His Circle"). Alternatives: *Constellation*,
   *Connections*, *Friends & Collaborators*, *Correspondents*.
3. **No separate news page.** New findings are archive items: each has an `added` date and
   Home shows the three newest. Add a "Journal" page if exhibitions or articles need a home.
4. **One data file** (`js/data.js`) holds the people, works and documents. Work, Archive
   and the Circle graph all render from it, so the links between people, works and
   documents live in one place.
5. **No framework, no dependencies.** The graph is plain SVG with a little JavaScript.
   The only external resources are Google Fonts.

## Data model (`js/data.js`)

```js
people: { id, name, role, place, years, relation, knows: [personId] }
items:  { id, added, kind: "work"|"document", type, title, date, place, text, people: [personId] }
```

Every person is linked to George. `knows` adds links between other people in the graph.
An item's `people` list puts it in that person's Circle panel and links the card back to them.
To add something to the site, add a row here.

## Design

Taken from the reference mock-up:

- **Palette:** paper `#F4F0E9`, card `#FAF8F4`, ink `#1E1A16`, muted `#5E554B`,
  rule `#DDD4C6`, bronze accent `#7B6146`.
- **Type:** Cormorant Garamond (display), EB Garamond (body), letter-spaced small caps for labels.
- **Images:** sepia / black-and-white archive photographs, thin rules, a lot of whitespace.

## Content needed from the client

- [ ] Portrait photograph (high resolution) → `assets/img/portrait.jpg`
- [ ] Signature, ideally a scanned SVG/PNG with a transparent background → replace `assets/img/signature.svg`
- [ ] Life story: text and dates
- [ ] List of works and documents, with scans and captions/credits
- [ ] List of people and the nature of each relationship
- [ ] Contact e-mail address
- [ ] Image rights / credits

Every image currently points to `assets/img/placeholder.svg`; the `alt` text says what belongs there.
Placeholder copy is marked with `[placeholder]`.

## Later (not built yet)

- Translations (RO / FR / ES). Add when the English content is final.
- Site search. Add once the archive holds more than ~50 items.
- Contact form. Needs a form backend (Formspree, Netlify Forms…). For now a `mailto:` link.
- Single page per archive item. Add when items get long texts or several scans.
