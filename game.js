// Status Permainan
let hp = 5;
let coin = 0;
let level = 1;
let correctAnswer = 0;
let consecutiveWins = 0;

// Elemen DOM
const elHp = document.getElementById('hp');
const elCoin = document.getElementById('coin');
const elLevel = document.getElementById('level');
const elQuestion = document.getElementById('math-question');
const elMessage = document.getElementById('message');
const heroSprite = document.getElementById('hero');
const enemySprite = document.getElementById('enemy');

// Jana Soalan Baru
function generateQuestion() {
    let num1, num2, type;
    
    // Tahap kesukaran berdasarkan level (Darjah 1 - Asas)
    if (level < 3) {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        type = '+';
        correctAnswer = num1 + num2;
    } else {
        num1 = Math.floor(Math.random() * 20) + 10;
        num2 = Math.floor(Math.random() * 10) + 1;
        type = '-';
        correctAnswer = num1 - num2;
    }

    elQuestion.textContent = `${num1} ${type} ${num2} = ?`;
    generateChoices();
}

function generateChoices() {
    let choices = [correctAnswer];
    
    // Hasilkan 3 jawapan salah yang logik (dekat dengan jawapan betul)
    while (choices.length < 4) {
        let wrongAnswer = correctAnswer + (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
        if (!choices.includes(wrongAnswer) && wrongAnswer >= 0) {
            choices.push(wrongAnswer);
        }
    }

    // Kocok kedudukan butang (Shuffle)
    choices.sort(() => Math.random() - 0.5);

    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`btn-${i}`);
        btn.textContent = choices[i];
        btn.value = choices[i];
    }
}

// Periksa Jawapan
function checkAnswer(btnIndex) {
    if (hp <= 0) return; // Permainan dah tamat

    const selectedAnswer = parseInt(document.getElementById(`btn-${btnIndex}`).value);

    if (selectedAnswer === correctAnswer) {
        // JAWAPAN BETUL
        heroAttack();
        coin += 10;
        consecutiveWins += 1;
        
        if (consecutiveWins % 5 === 0) {
            coin += 50; // Bonus Streak
            elMessage.textContent = "🔥 Bonus Streak! +50 Coin!";
            elMessage.style.color = "orange";
        } else {
            elMessage.textContent = "⚔️ Serangan Berjaya!";
            elMessage.style.color = "green";
        }

        // Sistem Naik Level
        if (coin > level * 100) {
            level++;
            elMessage.textContent = `🎉 Tahniah! Naik ke Level ${level}!`;
        }

    } else {
        // JAWAPAN SALAH
        enemyAttack();
        hp -= 1;
        consecutiveWins = 0;
        elMessage.textContent = "💥 Alamak! Jawapan Salah. Anda Diserang!";
        elMessage.style.color = "red";

        if (hp <= 0) {
            elMessage.textContent = "💀 GAME OVER! Refresh untuk cuba lagi.";
            disableButtons();
        }
    }

    updateStats();
    if (hp > 0) {
        setTimeout(generateQuestion, 1500); // Soalan seterusnya selepas 1.5 saat
    }
}

// Animasi & Kesan
function heroAttack() {
    heroSprite.classList.add('attack-right');
    enemySprite.classList.add('shake');
    setTimeout(() => {
        heroSprite.classList.remove('attack-right');
        enemySprite.classList.remove('shake');
    }, 300);
}

function enemyAttack() {
    enemySprite.classList.add('attack-left');
    heroSprite.classList.add('shake');
    setTimeout(() => {
        enemySprite.classList.remove('attack-left');
        heroSprite.classList.remove('shake');
    }, 300);
}

function updateStats() {
    elHp.textContent = hp;
    elCoin.textContent = coin;
    elLevel.textContent = level;
}

function disableButtons() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(`btn-${i}`).disabled = true;
    }
}

// Mulakan Permainan
generateQuestion();
