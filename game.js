// Audio Helper (Web Audio API for sound effects without external files)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playSound(type) {
  if (!audioCtx) return;
  if (audioCtx.state === 'suspended') { audioCtx.resume(); }
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  const now = audioCtx.currentTime;
  if (type === 'correct') {
    // Bunyi "Pandai!" / Positif (dua nada naik)
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.15);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'wrong') {
    // Bunyi "Cuba Lagi!" / Negatif (nada turun)
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.2);
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  }
}

// Initial Loading & Tips
const tips = [
  '💡 Combo 20x memberi rocket boost!',
  '💡 Pet boleh memulihkan nyawa!',
  '💡 Cari portal tersembunyi!',
  '💡 Guardian memberi Crystal istimewa!',
  '💡 Setiap planet ada 20 stage!'
];
document.getElementById('loading-tip').textContent = tips[Math.floor(Math.random() * tips.length)];
setTimeout(() => {
  document.getElementById('loading-screen').classList.add('fade-out');
  setTimeout(() => document.getElementById('loading-screen').style.display = 'none', 500);
}, 1800);

// Starfield & Nebula
(function(){
  const sf = document.getElementById('starfield');
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.setProperty('--dur', (Math.random() * 3 + 2) + 's');
    s.style.animationDelay = Math.random() * 3 + 's';
    const size = (Math.random() * 2.5 + .5) + 'px';
    s.style.width = s.style.height = size;
    sf.appendChild(s);
  }
  for (let i = 0; i < 3; i++) {
    const ss = document.createElement('div');
    ss.className = 'shooting-star';
    ss.style.top = Math.random() * 40 + '%';
    ss.style.right = Math.random() * 30 + '%';
    ss.style.animationDelay = (Math.random() * 8 + i * 5) + 's';
    sf.appendChild(ss);
  }
})();

(function(){
  const nl = document.getElementById('nebula-layer');
  const colors = ['rgba(124,58,237,.15)', 'rgba(6,182,212,.1)', 'rgba(251,191,36,.08)', 'rgba(244,114,182,.1)'];
  for (let i = 0; i < 5; i++) {
    const p = document.createElement('div');
    p.className = 'nebula-particle';
    p.style.width = p.style.height = (Math.random() * 200 + 100) + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.background = colors[i % colors.length];
    nl.appendChild(p);
  }
})();

// Game State & Interactive Stage Engine
let gameState = {
  lives: 5,
  combo: 0,
  stars: 3,
  coins: 12450,
  score: 0,
  currentQuestionIndex: 0,
  activeQuestions: [],
  timer: 15,
  timerInterval: null
};

function closeModal() { document.getElementById('welcome-modal').classList.add('hidden'); }
function resumeAdventure() { document.getElementById('resume-prompt').classList.add('hidden'); showScreen('stage-demo'); }
function dismissResume() { document.getElementById('resume-prompt').classList.add('hidden'); }

function showReward(items, text) {
  const overlay = document.getElementById('reward-overlay');
  const container = document.getElementById('reward-items');
  container.innerHTML = '';
  items.forEach((item, i) => {
    const d = document.createElement('div');
    d.className = 'text-3xl diamond-fly';
    d.style.animationDelay = (i * .2) + 's';
    d.textContent = item;
    container.appendChild(d);
  });
  document.getElementById('reward-text').textContent = text;
  overlay.classList.remove('hidden');
}
function closeReward() { document.getElementById('reward-overlay').classList.add('hidden'); }

function showLevelUp(detail) {
  document.getElementById('levelup-detail').textContent = detail;
  document.getElementById('levelup-overlay').classList.remove('hidden');
  const cc = document.getElementById('confetti-container');
  cc.innerHTML = '';
  const colors = ['#7c3aed', '#06b6d4', '#fbbf24', '#f472b6', '#10b981'];
  for (let i = 0; i < 30; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + '%';
    c.style.top = '-10px';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = (Math.random() * .5) + 's';
    cc.appendChild(c);
  }
}
function closeLevelUp() { document.getElementById('levelup-overlay').classList.add('hidden'); }

function closeCutscene() { document.getElementById('cutscene-overlay').classList.add('hidden'); }

function celebrate(msg) {
  const t = document.createElement('div');
  t.className = 'fixed top-5 left-1/2 -translate-x-1/2 z-[60] section-card text-center';
  t.innerHTML = '<div class="text-2xl">🎆🏆🎉</div><div class="text-sm font-bold text-yellow-300">' + msg + '</div>';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1200);
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');
  const navMap = { home: 0, galaxy: 1, subject: 2, shop: 3, more: 4 };
  document.querySelectorAll('.nav-item').forEach((n, i) => {
    n.classList.toggle('active', i === (navMap[id] ?? -1));
  });
  window.scrollTo(0, 0);
}
function navTo(id) { showScreen(id); }

// --- SISTEM STAGE & SOALAN INTERAKTIF SEBENAR ---
function startInteractiveStage() {
  const darjah = document.getElementById('select-darjah').value;
  const subjek = document.getElementById('select-subjek').value;
  
  // Ambil soalan dari questions.js, jika tiada ambil fallback darjah1 matematik
  let pool = questions[darjah]?.[subjek] || questions.darjah1.matematik;
  // Acak & ambil 10 soalan
  gameState.activeQuestions = [...pool].sort(() => 0.5 - Math.random()).slice(0, 10);
  gameState.currentQuestionIndex = 0;
  gameState.combo = 0;
  gameState.score = 0;
  gameState.lives = 5;
  
  document.getElementById('stage-setup-card').classList.add('hidden');
  document.getElementById('stage-game-area').classList.remove('hidden');
  
  loadQuestion();
}

function loadQuestion() {
  clearInterval(gameState.timerInterval);
  if (gameState.currentQuestionIndex >= gameState.activeQuestions.length || gameState.lives <= 0) {
    endInteractiveStage();
    return;
  }
  
  gameState.timer = 15;
  updateGameUI();
  
  const q = gameState.activeQuestions[gameState.currentQuestionIndex];
  document.getElementById('question-text').textContent = q.soalan;
  document.getElementById('btn-A').textContent = "A. " + q.A;
  document.getElementById('btn-B').textContent = "B. " + q.B;
  document.getElementById('btn-C').textContent = "C. " + q.C;
  document.getElementById('btn-D').textContent = "D. " + q.D;
  
  // Mula timer 15 saat
  gameState.timerInterval = setInterval(() => {
    gameState.timer--;
    document.getElementById('game-timer').textContent = "⏱️ " + gameState.timer + "s";
    if (gameState.timer <= 0) {
      clearInterval(gameState.timerInterval);
      handleWrongAnswer("Masa Tamat!");
    }
  }, 1000);
}

function checkAnswer(selectedOpt) {
  clearInterval(gameState.timerInterval);
  const q = gameState.activeQuestions[gameState.currentQuestionIndex];
  
  if (selectedOpt === q.jawapan) {
    playSound('correct');
    gameState.combo++;
    gameState.score += 10;
    gameState.coins += 10;
    celebrate("🎉 BETUL! Pandai!");
  } else {
    playSound('wrong');
    handleWrongAnswer("Salah! Cuba Lagi!");
    return;
  }
  
  gameState.currentQuestionIndex++;
  setTimeout(() => loadQuestion(), 1000);
}

function handleWrongAnswer(msg) {
  gameState.lives--;
  gameState.combo = 0;
  playSound('wrong');
  celebrate("❌ " + msg);
  
  if (gameState.lives <= 0) {
    setTimeout(() => {
      alert("💔 Stage Failed! Nyawa habis.");
      resetStageUI();
    }, 1000);
  } else {
    gameState.currentQuestionIndex++;
    setTimeout(() => loadQuestion(), 1200);
  }
}

function updateGameUI() {
  document.getElementById('game-lives').textContent = '❤️'.repeat(gameState.lives) + '🖤'.repeat(5 - gameState.lives);
  document.getElementById('game-progress').textContent = `Soalan ${gameState.currentQuestionIndex + 1}/10`;
  document.getElementById('game-combo').textContent = `🔥 Combo: ${gameState.combo}`;
  document.getElementById('game-score').textContent = `🪙 Coin: ${gameState.score}`;
  document.getElementById('coin-display').textContent = gameState.coins.toLocaleString();
}

function endInteractiveStage() {
  clearInterval(gameState.timerInterval);
  document.getElementById('stage-game-area').classList.add('hidden');
  document.getElementById('stage-setup-card').classList.remove('hidden');
  
  showReward(['🪙', '💎', '⭐', '🏆'], `🏆 STAGE COMPLETE!\nMarkah: ${gameState.score} | +50 XP | +1 Crystal`);
  setTimeout(() => {
    showLevelUp('Express Ranger Naik Pangkat!');
  }, 1800);
}

function resetStageUI() {
  document.getElementById('stage-game-area').classList.add('hidden');
  document.getElementById('stage-setup-card').classList.remove('hidden');
}

// Lucky Spin
let spinAngle = 0;
function spinWheel() {
  const wheel = document.getElementById('spin-wheel');
  spinAngle += 1440 + Math.random() * 720;
  wheel.style.transform = 'rotate(' + spinAngle + 'deg)';
  const rewards = ['🪙 500 Coin!', '💎 10 Diamond!', '⚡ Energy x5!', '🐾 Pet Egg!', '⭐ 200 XP!'];
  setTimeout(() => {
    const r = rewards[Math.floor(Math.random() * rewards.length)];
    const el = document.getElementById('spin-result');
    el.textContent = '🎉 ' + r;
    el.classList.remove('hidden');
    celebrate(r);
  }, 3200);
}

// Neon btn glow effect
document.querySelectorAll('.neon-btn').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty('--x', ((e.clientX - rect.left) / rect.width * 100) + '%');
    btn.style.setProperty('--y', ((e.clientY - rect.top) / rect.height * 100) + '%');
  });
});

lucide.createIcons();
