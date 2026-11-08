// Single source of truth for the Archive and the Circle.
// Everything in [brackets] is placeholder content.

const PEOPLE = [
  {
    id: "george", name: "George Teodorescu", role: "Sculptor, draughtsman, architect",
    place: "Romania · France · Argentina", years: "1915–1952",
    relation: "Select a name in the circle to see how their path crossed George Teodorescu's, and which works and documents bear witness to it.",
  },
  {
    id: "teacher", name: "[Teacher]", role: "[Professor of sculpture]", place: "Bucharest", years: "[18xx–19xx]",
    relation: "[Placeholder: first teacher at the School of Fine Arts.]",
    knows: ["architect"],
  },
  {
    id: "architect", name: "[Architect]", role: "[Architect]", place: "Bucharest", years: "[19xx–19xx]",
    relation: "[Placeholder: shared architectural projects.]",
  },
  {
    id: "brancusi", name: "Constantin Brâncuși", role: "Sculptor", place: "Paris", years: "1876–1957",
    relation: "[Placeholder: how they met, how often they saw each other, what George took from the studio in Impasse Ronsin.]",
    knows: ["painter"],
  },
  {
    id: "painter", name: "[Painter]", role: "[Painter]", place: "Paris", years: "[19xx–19xx]",
    relation: "[Placeholder: friend from Montparnasse, regular correspondent.]",
    knows: ["poet"],
  },
  {
    id: "poet", name: "[Poet]", role: "[Poet, critic]", place: "Paris", years: "[19xx–19xx]",
    relation: "[Placeholder: wrote the text for an exhibition catalogue.]",
  },
  {
    id: "gallerist", name: "[Gallerist]", role: "[Gallery owner]", place: "Buenos Aires", years: "[19xx–19xx]",
    relation: "[Placeholder: organised his exhibition in Buenos Aires.]",
    knows: ["critic"],
  },
  {
    id: "critic", name: "[Critic]", role: "[Art critic]", place: "Buenos Aires", years: "[19xx–19xx]",
    relation: "[Placeholder: reviewed his work in the Argentine press.]",
  },
];

// kind: "work" | "document". type drives the filters. added (YYYY-MM-DD) feeds "Recently added" on Home.
const ITEMS = [
  { id: "W-001", added: "2026-01-10", kind: "work", type: "Sculpture", title: "[Untitled form]", date: "[c. 1938]", place: "Paris",
    text: "[Placeholder: stone, dimensions, current location.]", people: ["brancusi"] },
  { id: "W-002", added: "2026-01-10", kind: "work", type: "Drawing", title: "[Study for a figure]", date: "[1940]", place: "Paris",
    text: "[Placeholder: ink on paper.]", people: ["painter"] },
  { id: "W-003", added: "2026-01-10", kind: "work", type: "Architecture", title: "[House project]", date: "[1936]", place: "Bucharest",
    text: "[Placeholder: plans and elevations.]", people: ["architect", "teacher"] },
  { id: "W-004", added: "2026-09-04", kind: "work", type: "Sculpture", title: "[Head]", date: "[1949]", place: "Buenos Aires",
    text: "[Placeholder: bronze.]", people: ["gallerist"] },
  { id: "D-001", added: "2026-10-12", kind: "document", type: "Letter", title: "[Letter to a friend in Paris]", date: "[12 March 1947]", place: "Paris",
    text: "[Placeholder: two handwritten pages, private collection.]", people: ["painter"] },
  { id: "D-002", added: "2026-01-10", kind: "document", type: "Photograph", title: "[In the studio]", date: "[c. 1939]", place: "Paris",
    text: "[Placeholder: gelatin silver print.]", people: ["brancusi"] },
  { id: "D-003", added: "2026-06-15", kind: "document", type: "Press", title: "[Exhibition review]", date: "[1950]", place: "Buenos Aires",
    text: "[Placeholder: newspaper clipping.]", people: ["critic", "gallerist"] },
  { id: "D-004", added: "2026-01-10", kind: "document", type: "Letter", title: "[Catalogue preface]", date: "[1946]", place: "Paris",
    text: "[Placeholder: typescript with handwritten corrections.]", people: ["poet"] },
  { id: "D-005", added: "2026-01-10", kind: "document", type: "Photograph", title: "[Class portrait]", date: "[1934]", place: "Bucharest",
    text: "[Placeholder: School of Fine Arts.]", people: ["teacher"] },
];
