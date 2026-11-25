// Single source of truth for the Archive and the Circle.
// Everything in [brackets] is placeholder content.

const PEOPLE = [
  {
    id: "george", name: "George Teodorescu", role: "Sculptor",
    place: "România · Franța · Argentina", years: "1915–1952",
    relation: "Selectează un nume din cerc pentru a vedea legătura cu George Teodorescu și lucrările sau documentele care o atestă.",
  },
  {
    id: "teacher", name: "[Profesor]", role: "[Profesor de sculptură]", place: "București", years: "[18xx–19xx]",
    relation: "[Text de completat: primul profesor la Școala de Arte Frumoase.]",
    knows: ["architect"],
  },
  {
    id: "architect", name: "[Arhitect]", role: "[Arhitect]", place: "București", years: "[19xx–19xx]",
    relation: "[Text de completat: cum li s-au intersectat drumurile.]",
  },
  {
    id: "brancusi", name: "Constantin Brâncuși", role: "Sculptor", place: "Paris", years: "1876–1957",
    relation: "[Text de completat: cum s-au cunoscut și ce legături au avut.]",
    knows: ["painter"],
  },
  {
    id: "painter", name: "[Pictor]", role: "[Pictor]", place: "Paris", years: "[19xx–19xx]",
    relation: "[Text de completat: prieten din Montparnasse și corespondent constant.]",
    knows: ["poet"],
  },
  {
    id: "poet", name: "[Poet]", role: "[Poet, critic literar]", place: "Paris", years: "[19xx–19xx]",
    relation: "[Text de completat: a scris textul pentru un catalog de expoziție.]",
  },
  {
    id: "gallerist", name: "[Galerist]", role: "[Proprietar de galerie]", place: "Buenos Aires", years: "[19xx–19xx]",
    relation: "[Text de completat: a organizat expoziția lui din Buenos Aires.]",
    knows: ["critic"],
  },
  {
    id: "critic", name: "[Critic]", role: "[Critic de artă]", place: "Buenos Aires", years: "[19xx–19xx]",
    relation: "[Text de completat: a recenzat opera lui în presa argentiniană.]",
  },
];

// kind: "work" | "document". type drives the filters. added (YYYY-MM-DD) feeds "Recently added" on Home.
const ITEMS = [
  { id: "W-001", added: "2026-01-10", kind: "work", type: "Sculptură", title: "[Formă fără titlu]", date: "[cca 1938]", place: "Paris",
    text: "[Text de completat: material, dimensiuni și locul actual.]", people: ["brancusi"] },
  { id: "W-004", added: "2026-09-04", kind: "work", type: "Sculptură", title: "[Cap]", date: "[1949]", place: "Buenos Aires",
    text: "[Text de completat: bronz.]", people: ["gallerist"] },
  { id: "D-001", added: "2026-10-12", kind: "document", type: "Scrisoare", title: "[Scrisoare către un prieten din Paris]", date: "[12 martie 1947]", place: "Paris",
    text: "[Text de completat: două pagini scrise de mână, dintr-o colecție privată.]", people: ["painter"] },
  { id: "D-002", added: "2026-01-10", kind: "document", type: "Fotografie", title: "[În atelier]", date: "[cca 1939]", place: "Paris",
    text: "[Text de completat: fotografie pe hârtie cu gelatină și argint.]", people: ["brancusi"] },
  { id: "D-003", added: "2026-06-15", kind: "document", type: "Presă", title: "[Recenzie a unei expoziții]", date: "[1950]", place: "Buenos Aires",
    text: "[Text de completat: decupaj dintr-un ziar.]", people: ["critic", "gallerist"] },
  { id: "D-004", added: "2026-01-10", kind: "document", type: "Scrisoare", title: "[Prefața catalogului]", date: "[1946]", place: "Paris",
    text: "[Text de completat: dactilogramă cu corecturi de mână.]", people: ["poet"] },
  { id: "D-005", added: "2026-01-10", kind: "document", type: "Fotografie", title: "[Fotografie de clasă]", date: "[1934]", place: "București",
    text: "[Text de completat: Școala de Arte Frumoase.]", people: ["teacher"] },
  { id: "D-006", added: "2026-11-23", kind: "document", type: "Fotografie", title: "George Teodorescu la 12 ani, alături de mama lui", date: "", place: "",
    text: "", image: "assets/img/george-teodorescu-with-mother.jpg", people: [] },
];
