// Renders Work, Archive and Circle from data.js. Each block runs only on its page.

const person = Object.fromEntries(PEOPLE.map(p => [p.id, p]));
const itemsOf = id => ITEMS.filter(i => i.people.includes(id));
const itemUrl = i => `${i.kind === "work" ? "work" : "archive"}.html#${i.id}`;
const personLink = id => `<a class="link" href="circle.html#${id}">${person[id].name}</a>`;

// Work and Archive: same catalogue, filtered by data-kind on the container
const archive = document.querySelector(".archive");
if (archive) {
  const items = ITEMS.filter(i => i.kind === archive.dataset.kind);
  archive.innerHTML = items.map(i => `
    <article class="card" id="${i.id}" data-type="${i.type}">
      <img src="assets/img/placeholder.svg" alt="[Image: ${i.title}]">
      <div class="card-body">
        <div class="meta">${i.type} · ${i.date} · ${i.place} <span class="id">${i.id}</span></div>
        <h2>${i.title}</h2>
        <p>${i.text}</p>
        <div class="people">With ${i.people.map(personLink).join(", ")}</div>
      </div>
    </article>`).join("");

  const types = [...new Set(items.map(i => i.type))];
  const filters = document.querySelector(".filters");
  filters.innerHTML = [["all", "All"], ...types.map(t => [t, t])]
    .map(([f, label], n) => `<button type="button" data-f="${f}" aria-pressed="${n === 0}">${label}</button>`).join("");

  filters.addEventListener("click", e => {
    const f = e.target.dataset.f;
    if (!f) return;
    filters.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b === e.target));
    archive.querySelectorAll(".card").forEach(c => {
      c.hidden = !(f === "all" || c.dataset.type === f);
    });
  });

  // Cards are rendered after load, so the browser can't jump to #D-001 by itself.
  const target = location.hash && document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView();
}

// Circle
const svg = document.querySelector(".graph svg");
if (svg) {
  const W = 800, H = 620, R = 230;
  const others = PEOPLE.filter(p => p.id !== "george");
  const pos = { george: [W / 2, H / 2] };
  // ponytail: fixed ring layout in data.js order (grouped by place: Bucharest, Paris, Buenos Aires).
  // Switch to a force layout (d3-force) if the circle grows past ~25 people.
  others.forEach((p, n) => {
    const a = (n / others.length) * 2 * Math.PI - Math.PI / 2;
    pos[p.id] = [W / 2 + R * Math.cos(a), H / 2 + R * Math.sin(a)];
  });

  const edges = others.flatMap(p => [["george", p.id], ...(p.knows || []).map(k => [p.id, k])]);
  const line = ([a, b]) => `<line data-a="${a}" data-b="${b}" x1="${pos[a][0]}" y1="${pos[a][1]}" x2="${pos[b][0]}" y2="${pos[b][1]}"/>`;
  const node = p => {
    const [x, y] = pos[p.id], r = p.id === "george" ? 16 : 10;
    return `<g class="node${p.id === "george" ? " center" : ""}" data-id="${p.id}" tabindex="0" role="button" aria-label="${p.name}">
      <circle cx="${x}" cy="${y}" r="${r}"/>
      <text x="${x}" y="${y + r + 20}">${p.name}</text>
      <text class="sub" x="${x}" y="${y + r + 36}">${p.place}</text>
    </g>`;
  };
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.innerHTML = edges.map(line).join("") + PEOPLE.map(node).join("");

  const panel = document.querySelector(".panel");
  const select = id => {
    const p = person[id] || person.george;
    svg.querySelectorAll(".node").forEach(n => n.classList.toggle("on", n.dataset.id === p.id));
    svg.querySelectorAll("line").forEach(l => l.classList.toggle("on", l.dataset.a === p.id || l.dataset.b === p.id));
    const items = itemsOf(p.id);
    const known = edges.filter(e => e.includes(p.id) && !e.includes("george")).map(e => e.find(x => x !== p.id));
    panel.innerHTML = `
      <p class="label muted">${p.role}</p>
      <h2>${p.name}</h2>
      <p class="muted">${p.place} · ${p.years}</p>
      <hr class="rule">
      <p>${p.relation}</p>
      ${items.length ? `<p class="label">Works &amp; documents</p><ul>${items.map(i =>
        `<li><a class="link" href="${itemUrl(i)}">${i.title}</a> <span class="muted">(${i.type}, ${i.date})</span></li>`).join("")}</ul>` : ""}
      ${known.length ? `<p class="label">Also connected to</p><p>${known.map(personLink).join(", ")}</p>` : ""}`;
  };

  svg.addEventListener("click", e => {
    const n = e.target.closest(".node");
    if (n) location.hash = n.dataset.id;
  });
  svg.addEventListener("keydown", e => {
    const n = e.target.closest(".node");
    if (n && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); location.hash = n.dataset.id; }
  });
  addEventListener("hashchange", () => select(location.hash.slice(1)));
  select(location.hash.slice(1));
}
