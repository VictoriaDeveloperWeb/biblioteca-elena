// ════════════════════════════════════════════════════════════════════════
// DATOS DE LIBROS
// ════════════════════════════════════════════════════════════════════════
const BOOKS_DATA = {
  va1:    { title:'La Bendición Oficial del Cielo #1', author:'Mo Xiang Tong Xiu', bg:'#0a0a1a', accent:'#aaccff' },
  va2:    { title:'La Bendición Oficial del Cielo #2', author:'Mo Xiang Tong Xiu', bg:'#0a0a1a', accent:'#aaccff' },
  va3a:   { title:'La Bendición Oficial del Cielo #3', author:'Mo Xiang Tong Xiu', bg:'#0a0a1a', accent:'#aaccff' },
  'va-s1':{ title:'Vampire Academy #1 — Academia de Vampiros', author:'Richelle Mead', bg:'#110000', accent:'#cc2222' },
  'va-s2':{ title:'Vampire Academy #2 — Sangre Fría', author:'Richelle Mead', bg:'#110000', accent:'#cc2222' },
  va3b:   { title:'Vampire Academy #3 — Bendecida por las Sombras', author:'Richelle Mead', bg:'#110000', accent:'#cc2222' },
  va4:    { title:'Vampire Academy #4 — Promesa de Sangre', author:'Richelle Mead', bg:'#110000', accent:'#cc2222' },
  va5:    { title:'Vampire Academy #5 — Vínculo de Espíritu', author:'Richelle Mead', bg:'#110000', accent:'#cc2222' },
  va6:    { title:'Vampire Academy #6 — El Último Sacrificio', author:'Richelle Mead', bg:'#110000', accent:'#cc2222' },
  bb1:    { title:'Black Bird Academy — Muerte a la Oscuridad', author:'Stella', bg:'#1a1a00', accent:'#ddcc00' },
  tw1:    { title:'Crepúsculo', author:'Stephenie Meyer', bg:'#0a0a0a', accent:'#eeeeee' },
  tw2:    { title:'Luna Nueva', author:'Stephenie Meyer', bg:'#00001a', accent:'#6699ff' },
  tw3:    { title:'Eclipse', author:'Stephenie Meyer', bg:'#1a0000', accent:'#ff6666' },
  tw4:    { title:'Amanecer', author:'Stephenie Meyer', bg:'#0a0a1a', accent:'#aabbff' },
  tw5:    { title:'Sol de Medianoche', author:'Stephenie Meyer', bg:'#1a1200', accent:'#ffdd44' },
};

const NUMS = [
  'Uno','Dos','Tres','Cuatro','Cinco','Seis','Siete','Ocho','Nueve','Diez',
  'Once','Doce','Trece','Catorce','Quince','Dieciséis','Diecisiete','Dieciocho',
  'Diecinueve','Veinte','Veintiuno','Veintidós','Veintitrés','Veinticuatro',
  'Veinticinco','Veintiséis','Veintisiete','Veintiocho','Veintinueve','Treinta',
  'Treinta y uno','Treinta y dos','Treinta y tres','Treinta y cuatro',
  'Treinta y cinco','Treinta y seis'
];

// Genera capítulos numerados. audioDir: carpeta de audios (audios/<audioDir>/capNN.m4a)
function numCaps(n, opts = {}) {
  const { withProlog = false, audioDir = null } = opts;
  const caps = [];
  if (withProlog) {
    caps.push({ id:'p', name:'Prólogo', audio: audioDir ? `audios/${audioDir}/cap00.m4a` : null });
  }
  for (let i = 0; i < n; i++) {
    const num = i + 1;
    caps.push({
      id: 'c'+num,
      name: NUMS[i],
      audio: audioDir ? `audios/${audioDir}/cap${String(num).padStart(2,'0')}.m4a` : null,
    });
  }
  return caps;
}

// ════════════════════════════════════════════════════════════════════════
// CAPÍTULOS
// ════════════════════════════════════════════════════════════════════════
const CHAPTERS_DATA = {
  // ── La Bendición Oficial del Cielo ──────────────────────────────────────
  va1: [
    { id:'p',   name:'Prólogo' },
    { id:'c1',  name:'Cap 1: El inmortal chatarrero entrando por tercera vez a la capital celestial' },
    { id:'c2',  name:'Cap 2: Tres bufones: Discusión nocturna sobre el templo del Gigante Yang' },
    { id:'c3',  name:'Cap 3: El fantasma toma una esposa; el Príncipe Heredero se monta en el palanquín nupcial' },
    { id:'c4',  name:'Cap 4: Un templo oculto en las montañas y el bosque de cadáveres colgantes' },
    { id:'c5',  name:'Cap 5: El fantasma vestido de rojo y la quema de los templos literarios y de la guerra' },
    { id:'c6',  name:'Cap 6: Ropajes más rojos que el arce, piel más blanca que la nieve' },
    { id:'c7',  name:'Cap 7: Charlas en el templo del Bodhisattva, cuentos astutos sobre el paso de la Media Luna' },
    { id:'c8',  name:'Cap 8: Acortando distancias, perdidos en la tormenta de arena' },
    { id:'c9',  name:'Cap 9: La noche cae sobre el Pozo de los Pecadores' },
    { id:'c10', name:'Cap 10: El Maestro del viento de blanco, rugen tormentas de arena de la nada' },
    { id:'c11', name:'Cap 11: Tanteando al Rey Fantasma, el Príncipe Heredero quiere saber la verdad' },
  ],
  va2: [
    { id:'c12', name:'Cap 12: En el templo de Shenwu, el Príncipe Heredero conoce al Príncipe Heredero' },
    { id:'c13', name:'Cap 13: Al entrar en el Mercado Fantasma, el Príncipe Heredero se encuentra con el Rey Fantasma' },
    { id:'c14', name:'Cap 14: Admirando a Lluvia de Sangre con el corazón lleno de afecto' },
    { id:'c15', name:'Cap 15: Asuntos de Xianle en la casa de la Alegría Suprema' },
    { id:'c16', name:'Cap 16: Expedición nocturna a la casa de la Alegría Suprema con suerte prestada' },
    { id:'c17', name:'Cap 17: La casa de la Alegría Suprema se reduce a cenizas. El segundo advenimiento de Fang Xin' },
    { id:'c18', name:'Cap 18: El malvado cultivador del reino. La masacre del banquete dorado' },
    { id:'c19', name:'Cap 19: La furia de Nan Yang. Pelea a puñetazos con Xuan Xhen' },
    { id:'c20', name:'Cap 20: El asalto al palacio de Xianle. Un breve saludo para asustar a los dioses' },
    { id:'c21', name:'Cap 21: Dados hábiles para proteger a alguien' },
    { id:'c22', name:'Cap 22: Lo que es verdad y lo que es mentira: una situación sin remedio' },
    { id:'c23', name:'Cap 23: En la guarida del caníbal, el Rey Fantasma se enfrenta a los oficiales del cielo' },
    { id:'c24', name:'Cap 24: En busca del pasado. Regreso al monte Taicang.' },
    { id:'c25', name:'Cap 25: Un breve atisbo de belleza en la avenida Shenwu' },
    { id:'c26', name:'Cap 26: La perla roja perdida. Atrayendo sin saberlo una mirada envidiosa' },
    { id:'c27', name:'Cap 27: Ascender es humano, descender también' },
  ],
  va3a: [
    { id:'c28', name:'Cap 28: Recogiendo ofrendas, un palurdo conoce al Príncipe Heredero' },
    { id:'c29', name:'Cap 29: La estatua dorada se viene abajo, el palurdo entierra a su difunto hijo' },
    { id:'c30', name:'Cap 30: El dios de los cielos observa los asuntos terrenales' },
    { id:'c31', name:'Cap 31: Encuentro en el reino mortal, buscando flores bajo la lluvia' },
    { id:'c32', name:'Cap 32: Lluvia escasa, el Maestro de la lluvia presta su sombrero' },
    { id:'c33', name:"Cap 33: El cierre de las puertas de la capital imperial: la supervivencia de los refugiados de Yong'an en peligro" },
    { id:'c34', name:'Cap 34: Xianle se sume en el caos, el Príncipe Heredero regresa al reino mortal' },
    { id:'c35', name:"Cap 35: Reprimiendo a Yong'an, el Príncipe Heredero se une al campo de batalla" },
    { id:'c36', name:'Cap 36: Sobre la pendiente Beizi, el Príncipe Heredero cae en una trampa' },
    { id:'c37', name:'Cap 37: Pueblo de las Delicias, un cuerpo firme como el oro se resiste ante el deseo' },
    { id:'c38', name:'Cap 38: Desde el corazón del bosque Buyou, la plaga de los rostros emerge' },
    { id:'c39', name:'Cap 39: La figura dorada se esfuerza por evitar un desastre celestial' },
    { id:'c40', name:'Cap 40: Juro que jamás lo olvidaré. ¡Jamás!' },
    { id:'c41', name:'Cap 41: Banquete de Medio otoño, Batalla de los Farolillos contemplando la luna' },
    { id:'c42', name:'Cap 42: El templo de Liandeng ilumina infinitamente la prolongada noche' },
    { id:'c43', name:'Cap 43: Embarazada del mal, una complicación nueva e imprevista' },
    { id:'c44', name:'Cap 44: Mi mente está en caos, pero nunca admitiré que mi corazón también lo está' },
    { id:'c45', name:'Cap 45: Componiendo poesía, una fragancia añadida por un par de mangas rojas' },
    { id:'c46', name:'Cap 46: Un extraño truco para abrir las puertas, el espíritu fetal es robado' },
    { id:'c47', name:'Cap 47: Enfrentamientos impetuosos, nadie admite la verdad a pesar de sus risas nerviosas' },
    { id:'c48', name:'Cap 48: Luchando por aprobación, Eming compite contra Ruoye' },
    { id:'c49', name:'Cap 49: El estofado del buen Príncipe Heredero para recibir a sus inesperadas visitas' },
    { id:'c50', name:'Cap 50: El Inmortal de elocuencia simple, aguafiestas de las celebraciones' },
    { id:'c51', name:'Cap 51: Tres dioses, un fantasma y un Inmortal de paradero desconocido (Primera parte)' },
  ],

  // ── Vampire Academy ──────────────────────────────────────────────────────
  'va-s1': numCaps(24, { audioDir: 'Vampire Academy' }),    // Academia de Vampiros: TIENE audios
  'va-s2': numCaps(23, { withProlog: true }),                // Sangre Fría: Prólogo + 23
  va3b:    numCaps(29),                                       // Bendecida por las Sombras: 29
  va4:     numCaps(30, { withProlog: true }),                 // Promesa de Sangre: Prólogo + 30
  va5:     numCaps(27),                                       // Vínculo de Espíritu: 27
  va6:     numCaps(36),                                       // El Último Sacrificio: 36

  // ── Black Bird Academy ───────────────────────────────────────────────────
  bb1: [
    { id:'p', name:'Prólogo' },
    ...numCaps(46),
  ],

  // ── Crepúsculo ───────────────────────────────────────────────────────────
  tw1: [
    { id:'c1',  name:'Capítulo 1: Primer encuentro' },
    { id:'c2',  name:'Capítulo 2: Libro abierto' },
    { id:'c3',  name:'Capítulo 3: El prodigio' },
    { id:'c4',  name:'Capítulo 4: Las invitaciones' },
    { id:'c5',  name:'Capítulo 5: Grupo Sanguíneo' },
    { id:'c6',  name:'Capítulo 6: Cuentos de miedo' },
    { id:'c7',  name:'Capítulo 7: Pesadilla' },
    { id:'c8',  name:'Capítulo 8: Port Angeles' },
    { id:'c9',  name:'Capítulo 9: Teoría' },
    { id:'c10', name:'Capítulo 10: Interrogatorios' },
    { id:'c11', name:'Capítulo 11: Complicaciones' },
    { id:'c12', name:'Capítulo 12: Juegos malabares' },
    { id:'c13', name:'Capítulo 13: Confesiones' },
    { id:'c14', name:'Capítulo 14: Mente vs Cuerpo' },
    { id:'c15', name:'Capítulo 15: Los Cullen' },
    { id:'c16', name:'Capítulo 16: Carlisle' },
    { id:'c17', name:'Capítulo 17: El partido' },
    { id:'c18', name:'Capítulo 18: La caza' },
    { id:'c19', name:'Capítulo 19: Despedidas' },
    { id:'c20', name:'Capítulo 20: Impaciencia' },
    { id:'c21', name:'Capítulo 21: La llamada' },
    { id:'c22', name:'Capítulo 22: El juego del escondite' },
    { id:'c23', name:'Capítulo 23: El ángel' },
    { id:'c24', name:'Capítulo 24: Punto muerto' },
    { id:'ep',  name:'Epílogo: Una ocasión especial' },
  ],

  // ── Luna Nueva ───────────────────────────────────────────────────────────
  tw2: [
    { id:'p',  name:'Prefacio' },
    { id:'c1', name:'Capítulo 1: La fiesta' },
    { id:'c2', name:'Capítulo 2: Los puntos' },
    { id:'c3', name:'Capítulo 3: El final' },
    { id:'c4', name:'Capítulo 4: El despertar' },
  ],

  // ── Eclipse, Amanecer, Sol de Medianoche: pendientes de capítulos ───────
  // tw3, tw4, tw5: se añaden dinámicamente desde la UI
};

// ════════════════════════════════════════════════════════════════════════
// MAPEO MANUAL DE AUDIOS — Academia de Vampiros (carpeta "Vampire Academy")
// Nombres de archivo EXACTOS a usar al renombrar tus .m4a.
// (capítulos 9 y 19 no estaban en tu carpeta: quedan pendientes de subir)
// ════════════════════════════════════════════════════════════════════════
const VA1_AUDIO_FILES = {
  c1:  'cap01.m4a',  // Cap 1 vampire academy
  c2:  'cap02.m4a',  // Cap 2 vampire academy
  c3:  'cap03.m4a',  // Capitulo 3 vampire academy
  c4:  'cap04.m4a',  // Capítulo 4 vampire academy
  c5:  'cap05.m4a',  // Capítulo 5 vampire academy
  c6:  'cap06.m4a',  // Vampire Academy cap 6
  c7:  'cap07.m4a',  // Vampire Academy capítulo 7
  c8:  'cap08.m4a',  // Vampire Academy Cap 8
  c9:  'cap09.m4a',
  c10: 'cap10.m4a',  // Capitulo 10 vampire academy
  c11: 'cap11.m4a',  // Vampire academy cap 11
  c12: 'cap12.m4a',  // Vampire Academy cap 12
  c13: 'cap13.m4a',  // Vampire Academy cap 13
  c14: 'cap14.m4a',  // Vampire Academy cap 14
  c15: 'cap15.m4a',  // Vampire Academy Cap 15
  c16: 'cap16.m4a',  // Vampire Academy Cap 16
  c17: 'cap17.m4a',  // Vampire Academy Cap 17
  c18: 'cap18.m4a',  // Cap 18 Vampire Academy
  c19: 'cap19.m4a',  // Cap 19 Vampire Academy
  c20: 'cap20.m4a',  // Cap 20 Vampire Academy
  c21: 'cap21.m4a',  // Cap 21 Vampire Academy
  c22: 'cap22.m4a',  // Cap 22 Vampire Academy
  c23: 'cap23.m4a',  // Cap 23 Vampire Academy
  c24: 'cap24.m4a',  // Cap 24 vampire academy
};

// Aplica las rutas de audio reales al libro va-s1
CHAPTERS_DATA['va-s1'].forEach(ch => {
  const file = VA1_AUDIO_FILES[ch.id];
  ch.audio = file ? `audios/Vampire Academy/${file}` : null;
});

// ════════════════════════════════════════════════════════════════════════
// ESTADO
// ════════════════════════════════════════════════════════════════════════
const state = {
  book: null,
  extraChapters: {},
  uploadedAudio: {},   // capítulos sin audio incluido, subidos manualmente en sesión
  audio: null,
  playing: null,
  pendingKey: null,
};

function getChapters(id) {
  if (CHAPTERS_DATA[id]) return CHAPTERS_DATA[id];
  if (!state.extraChapters[id]) state.extraChapters[id] = [
    { id:'ch1', name:'Capítulo 1' },
    { id:'ch2', name:'Capítulo 2' },
    { id:'ch3', name:'Capítulo 3' },
  ];
  return state.extraChapters[id];
}

function resolveAudioSrc(key, ch) {
  if (state.uploadedAudio[key]) return state.uploadedAudio[key];
  if (ch.audio) return encodeURI(ch.audio);
  return null;
}

// ════════════════════════════════════════════════════════════════════════
// NAVEGACIÓN ESTANTERÍA
// ════════════════════════════════════════════════════════════════════════
document.querySelectorAll('.book-zone').forEach(z => {
  z.addEventListener('click', () => openBook(z.dataset.book));
});

function openBook(id) {
  state.book = id;
  const b = BOOKS_DATA[id];
  const thumb = document.getElementById('panel-book-thumb');
  thumb.style.background = b.bg;
  thumb.style.borderColor = b.accent;
  thumb.style.color = b.accent;
  thumb.textContent = b.title;
  document.getElementById('panel-title-text').textContent = b.title;
  document.getElementById('panel-title-text').style.color = b.accent;
  document.getElementById('panel-author-text').textContent = '— ' + b.author;
  renderChapters();
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePanel() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('overlay').addEventListener('click', function(e) {
  if (e.target === this) closePanel();
});

// ════════════════════════════════════════════════════════════════════════
// RENDER CAPÍTULOS
// ════════════════════════════════════════════════════════════════════════
function renderChapters() {
  const id = state.book;
  const chs = getChapters(id);
  const cont = document.getElementById('chapters-container');
  cont.innerHTML = '';

  chs.forEach((ch, i) => {
    const key = id + '__' + ch.id;
    const src = resolveAudioSrc(key, ch);
    const hasAudio = !!src;
    const isPlaying = state.playing === key;

    const row = document.createElement('div');
    row.className = 'chapter-row' + (isPlaying ? ' active' : '');

    let actionClass = 'ch-action';
    let actionLabel = '↑';
    if (hasAudio)  { actionClass += ' has-audio';  actionLabel = '▶'; }
    if (isPlaying) { actionClass  = 'ch-action is-playing'; actionLabel = '⏸'; }

    row.innerHTML = `
      <span class="ch-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="ch-name-wrap"><span class="ch-name">${ch.name}</span></div>
      <button class="${actionClass}" data-key="${key}" data-name="${ch.name.replace(/"/g,'&quot;')}">${actionLabel}</button>
    `;

    row.querySelector('button').addEventListener('click', e => {
      e.stopPropagation();
      const k = e.currentTarget.dataset.key;
      const n = e.currentTarget.dataset.name;
      const s = resolveAudioSrc(k, ch);
      if (s) { playChapter(k, n, s); }
      else {
        state.pendingKey = k;
        document.getElementById('file-input').value = '';
        document.getElementById('file-input').click();
      }
    });

    if (hasAudio) row.addEventListener('click', () => playChapter(key, ch.name, src));
    cont.appendChild(row);
  });

  const addBtn = document.querySelector('.add-ch-btn');
  if (addBtn) addBtn.style.display = CHAPTERS_DATA[id] ? 'none' : 'block';
}

// ════════════════════════════════════════════════════════════════════════
// SUBIDA MANUAL DE AUDIO (para capítulos sin archivo incluido)
// ════════════════════════════════════════════════════════════════════════
document.getElementById('file-input').addEventListener('change', function() {
  const file = this.files[0];
  if (!file || !state.pendingKey) return;
  state.uploadedAudio[state.pendingKey] = URL.createObjectURL(file);
  state.pendingKey = null;
  renderChapters();
});

function addChapter() {
  const id = state.book;
  const list = state.extraChapters[id] || (state.extraChapters[id] = getChapters(id).slice());
  const n = list.length + 1;
  list.push({ id:'ch'+n, name:'Capítulo '+n, audio: null });
  renderChapters();
}

// ════════════════════════════════════════════════════════════════════════
// REPRODUCTOR
// ════════════════════════════════════════════════════════════════════════
function playChapter(key, name, src) {
  if (state.playing === key) {
    if (state.audio && !state.audio.paused) {
      state.audio.pause();
      document.getElementById('play-pause-btn').textContent = '▶';
    } else if (state.audio) {
      state.audio.play();
      document.getElementById('play-pause-btn').textContent = '⏸';
    }
    return;
  }

  if (state.audio) { state.audio.pause(); state.audio = null; }

  const audio = new Audio(src);
  state.audio  = audio;
  state.playing = key;
  audio.volume  = parseFloat(document.querySelector('input[type=range]').value);
  audio.play().catch(() => {
    document.getElementById('now-playing').innerHTML = '⚠ <span>No se pudo cargar el audio</span>';
  });

  document.getElementById('player').classList.add('visible');
  document.getElementById('track-name').textContent = name;
  document.getElementById('play-pause-btn').textContent = '⏸';

  audio.addEventListener('timeupdate', updateProgress);
  audio.addEventListener('loadedmetadata', () => {
    document.getElementById('t-tot').textContent = fmt(audio.duration);
  });
  audio.addEventListener('ended', () => {
    state.playing = null;
    document.getElementById('play-pause-btn').textContent = '▶';
    document.getElementById('prog-fill').style.width = '0%';
    renderChapters();
  });

  renderChapters();
}

function updateProgress() {
  const a = state.audio;
  if (!a || !a.duration) return;
  document.getElementById('prog-fill').style.width = (a.currentTime / a.duration * 100) + '%';
  document.getElementById('t-cur').textContent = fmt(a.currentTime);
}

function togglePlay() {
  const a = state.audio;
  if (!a) return;
  if (a.paused) { a.play();  document.getElementById('play-pause-btn').textContent = '⏸'; }
  else          { a.pause(); document.getElementById('play-pause-btn').textContent = '▶'; }
}

function skip(s) {
  if (state.audio)
    state.audio.currentTime = Math.max(0, Math.min(state.audio.duration || 0, state.audio.currentTime + s));
}

function seek(e) {
  const a = state.audio;
  if (!a || !a.duration) return;
  const r = e.currentTarget.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  a.currentTime = ((clientX - r.left) / r.width) * a.duration;
}

function setVol(v) { if (state.audio) state.audio.volume = parseFloat(v); }

function fmt(s) {
  if (isNaN(s)) return '0:00';
  return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
}

// ════════════════════════════════════════════════════════════════════════
// PWA: REGISTRO SERVICE WORKER + INSTALACIÓN
// ════════════════════════════════════════════════════════════════════════
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-toast').classList.add('show');
});

function installApp() {
  document.getElementById('install-toast').classList.remove('show');
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt = null;
}

function dismissInstall() {
  document.getElementById('install-toast').classList.remove('show');
}
