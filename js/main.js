// === GAME STATE ===
let state = {
    screen: 'menu', subject: '', grade: 0, category: '',
    lives: 3, coins: 0, score: 0, level: 1, playerName: '', pendingMode: '',
    questionIndex: 0, timer: 15, timerInterval: null,
    enemyHp: 100, 
    enemies: [
        {name:'Robot Genius',sprite:'🤖'},
        {name:'Alien Matematik',sprite:'👽'},
        {name:'Monster Kartun',sprite:'👾'},
        {name:'Pengawal Gerbang',sprite:'🐉'}
    ],
    currentEnemy: 0,
    // Duel
    duelRound: 0, duelHeroScore: 0, duelEnemyScore: 0,
    duelEnemies: [
        {name:'Robot Genius',sprite:'🤖'},
        {name:'Alien Matematik',sprite:'👽'},
        {name:'Kucing Bijak',sprite:'🐱'}
    ],
    currentDuelEnemy: 0,
    // Squad
    squadPower: 0, bossHp: 100, squadMembers: []
};

const bonusUnlockCoins = 4000;

function goTo(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('screen-' + screen).classList.add('active');
    state.screen = screen;
    if (['solo-battle','duel','squad','victory','defeat','draw','celebration'].includes(screen)) updatePlayerGreetings();
}

function updatePlayerGreetings() {
    const name = state.playerName || 'Pemain';
    document.getElementById('menu-greeting').textContent = state.playerName ? `Selamat datang, ${name}!` : '';
    ['solo','duel','squad','victory','defeat','draw','celebration'].forEach(id => {
        const el = document.getElementById(id + '-player-greeting');
        if (el) el.textContent = `Semangat, ${name}!`;
    });
}

function playBattleIntro(onComplete) {
    goTo('battle-intro');
    setTimeout(onComplete, 2200);
}

function beginMode(mode) {
    if (state.playerName) {
        playBattleIntro(() => {
            if (mode === 'solo') goTo('mode-select');
            if (mode === 'duel') startDuel();
            if (mode === 'squad') startSquad();
        });
        return;
    }
    state.pendingMode = mode;
    document.getElementById('name-prompt').textContent = '';
    document.getElementById('player-name-input').value = '';
    goTo('name-entry');
    setTimeout(() => document.getElementById('player-name-input').focus(), 50);
}

function submitPlayerName(event) {
    event.preventDefault();
    const input = document.getElementById('player-name-input');
    const name = input.value.trim();
    if (!name) {
        document.getElementById('name-prompt').textContent = 'Sila masukkan nama kamu dahulu 😊';
        input.focus();
        return;
    }
    state.playerName = name;
    updatePlayerGreetings();
    const mode = state.pendingMode;
    state.pendingMode = '';
    playBattleIntro(() => {
        if (mode === 'solo') goTo('mode-select');
        else if (mode === 'duel') startDuel();
        else if (mode === 'squad') startSquad();
    });
}

document.getElementById('name-form').addEventListener('submit', submitPlayerName);

function startSquad() {
    state.squadMembers = [];
    state.squadPower = 0;
    state.bossHp = 100;
    document.getElementById('squad-battle-area').classList.add('hidden');
    goTo('squad');
}

function selectSubject(sub) {
    state.subject = sub;
    renderGradeSelect();
    goTo('grade-select');
}

function renderGradeSelect() {
    const c = document.getElementById('grade-buttons');
    c.innerHTML = '';
    for (let i = 1; i <= 6; i++) {
        const btn = document.createElement('button');
        btn.className = 'game-card bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-white font-bold shadow-lg';
        btn.textContent = 'Darjah ' + i;
        btn.onclick = () => { 
            state.grade = i; 
            if (i === 1) { renderCategorySelect(); goTo('category-select'); } 
            else if (i === 2) { renderCategorySelect2(); goTo('category-select-2'); } 
            else if (i === 3) { renderCategorySelect3(); goTo('category-select-3'); } 
            else { startSoloBattle(); } 
        };
        c.appendChild(btn);
    }
}

function renderCategorySelect() {
    renderCategoryButtons('category-buttons', gradeCategories[1]);
    renderBonusCategoryButtons(1);
}

function renderCategorySelect2() {
    renderCategoryButtons('category-buttons-2', gradeCategories[2]);
    renderBonusCategoryButtons(2);
}

function renderCategorySelect3() {
    renderCategoryButtons('category-buttons-3', gradeCategories[3]);
    renderBonusCategoryButtons(3);
}

function renderBonusCategoryButtons(grade) {
    const id = 'bonus-category-buttons-' + grade;
    const c = document.getElementById(id);
    if (!c) return;
    c.innerHTML = '';
    const unlocked = state.coins >= bonusUnlockCoins;
    document.getElementById('bonus-progress-' + grade).textContent = `Coin: ${Math.min(state.coins, bonusUnlockCoins)}/${bonusUnlockCoins}`;
    gradeCategories[grade].forEach((category) => {
        const btn = document.createElement('button');
        btn.className = unlocked ? 'game-card bg-gradient-to-br from-emerald-500 to-cyan-500 p-4 text-white font-bold text-sm shadow-lg' : 'game-card bg-gray-700/70 p-4 text-gray-300 font-bold text-sm shadow-lg opacity-70';
        btn.textContent = unlocked ? '🔓 ' + category : '🔒 ' + category;
        btn.onclick = () => {
            if (!unlocked) {
                document.getElementById('bonus-progress-' + grade).textContent = `🔒 Perlu ${bonusUnlockCoins} Coin untuk buka kategori ini! (${Math.min(state.coins, bonusUnlockCoins)}/${bonusUnlockCoins})`;
                return;
            }
            state.category = category;
            startSoloBattle();
        };
        c.appendChild(btn);
    });
}

function renderCategoryButtons(id, categories) {
    const colors = ['from-yellow-400 to-orange-500','from-pink-400 to-rose-500','from-blue-400 to-cyan-500','from-green-400 to-emerald-500','from-purple-400 to-violet-500','from-red-400 to-orange-500'];
    const c = document.getElementById(id);
    c.innerHTML = '';
    categories.forEach((category, index) => {
        const btn = document.createElement('button');
        btn.className = `game-card bg-gradient-to-br ${colors[index]} p-5 text-white font-black text-sm shadow-lg min-h-20`;
        btn.textContent = category;
        btn.onclick = () => { state.category = category; startSoloBattle(); };
        c.appendChild(btn);
    });
}

// === SOLO BATTLE ===
function startSoloBattle() {
    state.lives = 3; state.coins = 0; state.score = 0; state.level = 1;
    state.questionIndex = 0; state.enemyHp = 100; state.currentEnemy = 0;
    goTo('solo-battle');
    updateHUD();
    updateEnemy();
    loadQuestion();
}

function updateHUD() {
    [1, 2, 3].forEach(grade => {
        const progress = document.getElementById('bonus-progress-' + grade);
        if (progress) progress.textContent = `Coin: ${Math.min(state.coins, bonusUnlockCoins)}/${bonusUnlockCoins}`;
        if (document.getElementById('bonus-category-buttons-' + grade)) renderBonusCategoryButtons(grade);
    });
    document.getElementById('hud-lives').textContent = state.lives;
    document.getElementById('hud-coins').textContent = state.coins;
    document.getElementById('hud-score').textContent = state.score;
    document.getElementById('hud-level').textContent = state.level;
    document.getElementById('progress-bar').style.width = (state.questionIndex / 100 * 100) + '%';
}

function updateEnemy() {
    const e = state.enemies[state.currentEnemy % state.enemies.length];
    document.getElementById('enemy-sprite').textContent = e.sprite;
    document.getElementById('enemy-name').textContent = e.name;
    document.getElementById('enemy-hp').style.width = state.enemyHp + '%';
}

function loadQuestion() {
    clearInterval(state.timerInterval);
    if (!sampleQuestions.length) {
        document.getElementById('solo-question-progress').textContent = '1/100';
        document.getElementById('question-text').textContent = 'Soalan untuk kategori ini akan datang tidak lama lagi 😊';
        document.getElementById('options-grid').innerHTML = '<p class="col-span-2 text-gray-600 font-bold">Belum ada soalan. Pilih kategori lain atau cuba lagi nanti!</p>';
        return;
    }
    document.getElementById('solo-question-progress').textContent = `${state.questionIndex + 1}/100`;
    state.timer = 15;
    document.getElementById('hud-timer').textContent = 15;
    const q = sampleQuestions[state.questionIndex % sampleQuestions.length];
    document.getElementById('question-text').textContent = q.q;
    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'p-3 rounded-xl font-bold text-white ' + ['bg-blue-500','bg-green-500','bg-orange-500','bg-purple-500'][i];
        btn.textContent = String.fromCharCode(65+i) + '. ' + opt;
        btn.onclick = () => answerQuestion(i, q.answer);
        grid.appendChild(btn);
    });
    state.timerInterval = setInterval(() => {
        state.timer--;
        document.getElementById('hud-timer').textContent = state.timer;
        if (state.timer <= 0) { clearInterval(state.timerInterval); answerQuestion(-1, q.answer); }
    }, 1000);
}

function answerQuestion(selected, correct) {
    clearInterval(state.timerInterval);
    const fb = document.getElementById('feedback-text');
    if (selected === correct) {
        fb.textContent = '✨ PANDAI! ✨';
        fb.className = 'text-2xl font-black text-center h-8 mb-2 text-yellow-300';
        state.coins += 10; state.score += 10;
        state.enemyHp -= 25;
        document.getElementById('enemy-sprite').classList.add('shake');
        setTimeout(() => document.getElementById('enemy-sprite').classList.remove('shake'), 400);
        if (state.enemyHp <= 0) {
            state.currentEnemy++;
            state.enemyHp = 100;
            state.level++;
            if (state.currentEnemy >= state.enemies.length) { goTo('victory'); return; }
            updateEnemy();
        }
    } else {
        fb.textContent = '❌ CUBA LAGI!';
        fb.className = 'text-2xl font-black text-center h-8 mb-2 text-red-400';
        state.coins = Math.max(0, state.coins - 5);
        state.lives--;
        if (state.lives <= 0) { goTo('defeat'); return; }
    }
    updateHUD();
    state.questionIndex++;
    setTimeout(() => { fb.textContent = ''; loadQuestion(); }, 1200);
}

// === DUEL MODE ===
function startDuel() {
    state.duelRound = 1; state.duelHeroScore = 0; state.duelEnemyScore = 0;
    state.currentDuelEnemy = Math.floor(Math.random() * state.duelEnemies.length);
    goTo('duel');
    updateDuelUI();
    loadDuelQuestion();
}

function updateDuelUI() {
    const e = state.duelEnemies[state.currentDuelEnemy];
    document.getElementById('duel-enemy-sprite').textContent = e.sprite;
    document.getElementById('duel-enemy-name').textContent = e.name;
    document.getElementById('duel-round').textContent = state.duelRound;
    document.getElementById('duel-hero-score').textContent = state.duelHeroScore;
    document.getElementById('duel-enemy-score').textContent = state.duelEnemyScore;
}

function loadDuelQuestion() {
    document.getElementById('duel-question-progress').textContent = `${state.duelRound}/3`;
    
    if(!sampleQuestions.length) return; // Pelindung jika soalan tiada
    
    const q = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
    document.getElementById('duel-question-text').textContent = q.q;
    const grid = document.getElementById('duel-options');
    grid.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'p-3 rounded-xl font-bold text-white ' + ['bg-blue-500','bg-green-500','bg-orange-500','bg-purple-500'][i];
        btn.textContent = String.fromCharCode(65+i) + '. ' + opt;
        btn.onclick = () => duelAnswer(i, q.answer);
        grid.appendChild(btn);
    });
}

function duelAnswer(selected, correct) {
    if (selected === correct) { state.duelHeroScore++; }
    else { state.duelEnemyScore++; }
    state.duelRound++;
    updateDuelUI();
    if (state.duelRound > 3) {
        if (state.duelHeroScore > state.duelEnemyScore) goTo('victory');
        else if (state.duelHeroScore < state.duelEnemyScore) goTo('defeat');
        else goTo('draw');
        return;
    }
    setTimeout(loadDuelQuestion, 800);
}

// === SQUAD MODE ===
function selectSquadMember(member) {
    if (!state.squadMembers.includes(member)) state.squadMembers.push(member);
    if (state.squadMembers.length >= 2) {
        state.squadPower = 0; state.bossHp = 100;
        document.getElementById('squad-battle-area').classList.remove('hidden');
        loadSquadQuestion();
    }
}

function loadSquadQuestion() {
    document.getElementById('squad-question-progress').textContent = `${Math.min(Math.floor(state.squadPower / 25) + 1, 100)}/100`;
    
    if(!sampleQuestions.length) return; // Pelindung jika soalan tiada
    
    const q = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
    document.getElementById('squad-question-text').textContent = q.q;
    const grid = document.getElementById('squad-options');
    grid.innerHTML = '';
    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'p-3 rounded-xl font-bold text-white ' + ['bg-blue-500','bg-green-500','bg-orange-500','bg-purple-500'][i];
        btn.textContent = String.fromCharCode(65+i) + '. ' + opt;
        btn.onclick = () => squadAnswer(i, q.answer);
        grid.appendChild(btn);
    });
}

function squadAnswer(selected, correct) {
    if (selected === correct) {
        state.squadPower += 25;
        state.bossHp -= 25;
    }
    document.getElementById('squad-power').textContent = state.squadPower;
    document.getElementById('boss-hp').style.width = Math.max(0, state.bossHp) + '%';
    if (state.bossHp <= 0) { goTo('celebration'); state.squadMembers = []; return; }
    setTimeout(loadSquadQuestion, 800);
}

function playAgain() {
    if (state.screen === 'victory' || state.screen === 'defeat') startSoloBattle();
    else startDuel();
}

// Inisialisasi ikon Lucide
lucide.createIcons();
