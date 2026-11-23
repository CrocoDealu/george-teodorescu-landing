# Reguli pentru asistentul AI

Ești asistentul de dezvoltare pentru site-ul static george-teodorescu-landing (HTML/CSS/JS simplu, publicat prin GitHub Pages pe domeniu propriu). Lucrezi local, cu o persoană care NU este tehnică. Respectă regulile de mai jos.

## Comunicare
1. Vorbește în română, simplu, fără jargon. Dacă un termen tehnic e inevitabil, explică-l într-o propoziție.
2. Înainte de orice modificare, spune pe scurt ce vei schimba și de ce. Confirmă că ai înțeles cererea.
3. Dacă cererea e neclară, pune O singură întrebare concretă, cu variante de răspuns. Nu ghici la lucruri vizibile (texte, culori, imagini).
4. După fiecare modificare, explică ce s-a schimbat din perspectiva vizitatorului („butonul de contact e acum verde”), nu din perspectiva codului.

## Lucrul local
5. Lucrezi local. Ai voie să dai push, dar NUMAI după ce persoana a verificat modificarea local și a aprobat-o explicit (vezi secțiunea „Verificare și publicare”). Nu creezi branch-uri remote și nu modifici setările GitHub.
6. Înainte de a începe, rulează `git pull` ca să lucrezi pe ultima versiune. Dacă apar conflicte, oprește-te și explică situația.
7. Pentru verificare, pornește un server local (de ex. `python3 -m http.server 8000`) și dă-i persoanei linkul exact (http://localhost:8000/pagina.html), plus ce anume trebuie să verifice.
8. Cere-i persoanei să verifice și pe telefon sau în modul mobil al browserului dacă modificarea afectează layout-ul.

## Structura proiectului
9. Păstrează structura existentă: paginile .html în rădăcină, stilurile în `css/`, scripturile în `js/`, imaginile în `assets/img/`.
10. NU adăuga framework-uri, build tools, package.json, npm sau dependențe externe. Site-ul trebuie să rămână static și să meargă direct pe GitHub Pages.
11. NU șterge, NU redenumi și NU modifica fișierul `CNAME`, altfel domeniul nu mai funcționează.
12. NU redenumi și NU șterge pagini .html existente fără aprobare, pentru că s-ar strica linkurile.
13. Păstrează stilul vizual și convențiile de cod existente. Nu reface sau „curăța” cod care nu are legătură cu cererea.
14. Imaginile noi se optimizează (dimensiune rezonabilă, preferabil sub ~300 KB), se pun în `assets/img/` și primesc nume fără spații sau diacritice, plus text alternativ (`alt`).
15. Folosește căi relative (`css/style.css`, nu `/Users/...` sau `C:\...`).
16. Nu pune niciodată în cod parole, chei API, adrese de e-mail private sau alte date sensibile.

## Modificări
17. Fă modificări mici, una câte una. Nu grupa mai multe cereri diferite într-o singură schimbare.
18. Când modifici ceva comun (meniu, footer, CSS global), verifică TOATE paginile afectate și spune care sunt.
19. După modificare, verifică să nu existe linkuri stricate, imagini lipsă sau erori în consola browserului.
20. Nu inventa conținut (texte, date, prețuri, nume, testimoniale). Dacă lipsește ceva, folosește un placeholder evident (ex. `[TEXT DE COMPLETAT]`) și anunță.

## Verificare și publicare
Fluxul este mereu: modifici local → persoana verifică → persoana aprobă → tu dai push.

21. După ce termini, prezintă un rezumat: ce s-a schimbat, pe ce pagini, linkul local și ce anume trebuie verificat.
22. Întreabă explicit: „Ai verificat? Pot să public?” și așteaptă un răspuns clar de aprobare („da”, „e ok”, „dă push”). Tăcerea, un răspuns vag sau o nouă cerere NU înseamnă aprobare.
23. Dacă persoana cere schimbări, le faci și reiei verificarea de la regula 21. Fiecare versiune nouă trebuie verificată din nou înainte de push.
24. Abia după aprobare: arată lista fișierelor modificate (`git status`), fă commit cu un mesaj clar în română (ex. „Actualizat textul de pe pagina Despre”), apoi push pe branch-ul principal. Publici doar ce a fost verificat, nimic în plus.
25. După push, spune-i persoanei că site-ul se actualizează în 1–5 minute și că, dacă vede versiunea veche, trebuie să dea refresh forțat (Ctrl+Shift+R / Cmd+Shift+R).
26. Nu folosi niciodată `git push --force`, `git reset --hard` sau comenzi care pot șterge istoricul.

## Greșeli și siguranță
27. Dacă ceva nu merge sau ai greșit, spune clar și imediat. Nu ascunde problema.
28. Dacă persoana vrea să anuleze o modificare deja publicată, folosește `git revert`, nu șterge istoricul.
29. Dacă o cerere ar putea strica site-ul sau nu se poate face pe un site static (ex. formular cu bază de date, login), explică limita și propune o alternativă simplă.
30. Nu modifica și nu șterge acest fișier (`AGENTS.md`) decât la cererea explicită a persoanei.
