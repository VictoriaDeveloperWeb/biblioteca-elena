# 📚 Biblioteca de Elena

App web (PWA) — estantería pixel art interactiva de audiolibros narrados,
instalable en el móvil, publicada con GitHub Pages.

## 🗂️ Estructura del repo

```
biblioteca/
├── .github/workflows/deploy.yml   ← publica en GitHub Pages en cada push a main
├── index.html
├── manifest.json                  ← config de la PWA instalable
├── sw.js                          ← service worker (caché / uso offline)
├── css/style.css
├── js/app.js                      ← libros, capítulos, mapeo de audios
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
├── img/estanteria.png             ← el dibujo
└── audios/
    └── Vampire Academy/           ← coloca aquí los .m4a de Academia de Vampiros
```

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub y sube esta carpeta tal cual
   (puede ser repo público o privado; Pages funciona en ambos si tienes
   GitHub Pro, o público si tienes cuenta gratuita).
2. En GitHub: **Settings → Pages → Source → "GitHub Actions"**
   (no "Deploy from a branch" — el workflow ya incluido se encarga de todo).
3. Haz push a la rama `main`. El workflow `deploy.yml` se ejecuta solo
   y publica la app en `https://<tu-usuario>.github.io/<nombre-repo>/`.
4. Cada vez que hagas push a `main`, se vuelve a publicar automáticamente.

Puedes ver el progreso del deploy en la pestaña **Actions** del repo.

## 🎧 Cómo colocar tus audios

La carpeta `audios/Vampire Academy/` está vacía en el repo (solo tiene un
`.gitkeep` para que Git no la borre). Antes de subir tus archivos,
**renómbralos exactamente así**:

| Tu archivo actual                | Renómbralo a |
|-----------------------------------|--------------|
| Cap 1 vampire academy.m4a         | `cap01.m4a`  |
| Cap 2 vampire academy.m4a         | `cap02.m4a`  |
| Capitulo 3 vampire academy.m4a    | `cap03.m4a`  |
| Capítulo 4 vampire academy.m4a    | `cap04.m4a`  |
| Capítulo 5 vampire academy.m4a    | `cap05.m4a`  |
| Vampire Academy cap 6.m4a         | `cap06.m4a`  |
| Vampire Academy capítulo 7.m4a    | `cap07.m4a`  |
| Vampire Academy Cap 8.m4a         | `cap08.m4a`  |
| *(pendiente)*                     | `cap09.m4a`  |
| Capitulo 10 vampire academy.m4a   | `cap10.m4a`  |
| Vampire academy cap 11.m4a        | `cap11.m4a`  |
| Vampire Academy cap 12.m4a        | `cap12.m4a`  |
| Vampire Academy cap 13.m4a        | `cap13.m4a`  |
| Vampire Academy cap 14.m4a        | `cap14.m4a`  |
| Vampire Academy Cap 15.m4a        | `cap15.m4a`  |
| Vampire Academy Cap 16.m4a        | `cap16.m4a`  |
| Vampire Academy Cap 17.m4a        | `cap17.m4a`  |
| Cap 18 Vampire Academy.m4a        | `cap18.m4a`  |
| *(pendiente)*                     | `cap19.m4a`  |
| Cap 20 Vampire Academy.m4a        | `cap20.m4a`  |
| Cap 21 Vampire Academy.m4a        | `cap21.m4a`  |
| Cap 22 Vampire Academy.m4a        | `cap22.m4a`  |
| Cap 23 Vampire Academy.m4a        | `cap23.m4a`  |
| Cap 24 vampire academy.m4a        | `cap24.m4a`  |

Una vez renombrados, mételos en `audios/Vampire Academy/` y haz
`git add` + `commit` + `push`. El capítulo aparecerá automáticamente
reproducible en la app (el código en `js/app.js` ya espera esos nombres
exactos). Los capítulos 9 y 19 quedan pendientes hasta que los grabes;
mientras tanto se muestran con un botón de subida manual.

### Comandos git típicos

```bash
git clone https://github.com/<tu-usuario>/<nombre-repo>.git
cd <nombre-repo>
# copia/renombra tus audios dentro de audios/Vampire Academy/
git add audios/
git commit -m "Añadir audios de Academia de Vampiros"
git push
```

## 🖥️ Probarla en local antes de publicar

Los navegadores bloquean la carga de audio si abres `index.html` con
doble clic (protocolo `file://`). Sirve la carpeta con un servidor local:

```bash
cd biblioteca
python3 -m http.server 8000
```

Y abre `http://localhost:8000` en el navegador.

## 📖 Libros y capítulos ya cargados

| Libro | Capítulos | Audio |
|---|---|---|
| La Bendición Oficial del Cielo #1–3 | Prólogo + 1–51 | — |
| Academia de Vampiros (VA #1) | 1–24 | ✅ mapeado |
| Sangre Fría (VA #2) | Prólogo + 1–23 | — |
| Bendecida por las Sombras (VA #3) | 1–29 | — |
| Promesa de Sangre (VA #4) | Prólogo + 1–30 | — |
| Vínculo de Espíritu (VA #5) | 1–27 | — |
| El Último Sacrificio (VA #6) | 1–36 | — |
| Black Bird Academy | Prólogo + 1–46 | — |
| Crepúsculo | 1–24 + Epílogo | — |
| Luna Nueva | Prefacio + 1–4 | — |
| Eclipse, Amanecer, Sol de Medianoche | *pendiente* | — |

Para libros sin "Audio: ✅", la app muestra un botón de subida manual
(↑) por capítulo: funciona en cualquier sesión pero no se guarda
permanentemente. Cuando definas su carpeta de audios igual que con
Vampire Academy, dímelo y actualizo `js/app.js` con el mapeo.

## 🛠️ Stack

HTML + CSS + JS vanilla, sin frameworks ni build step. Fuente pixel:
[Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P).
PWA con `manifest.json` + `sw.js` (instalable, caché de assets,
funciona offline tras la primera carga, excepto audios no descargados
aún).
