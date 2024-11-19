// Questions Array with Explanations
const questions = [
  {
    question: "Which one is the lie?",
    answers: [
      "Phishing emails often mimic trusted organizations.",
      "It's safe to click on links from recognized senders.",
      "Hovering over a link reveals its actual URL."
    ],
    lieIndex: 1,
    explanation: "Even if the sender is recognized, links should always be verified to avoid phishing attacks."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Password managers help generate strong passwords.",
      "Reusing the same password improves security.",
      "Password123 is commonly used."
    ],
    lieIndex: 1,
    explanation: "Reusing passwords increases vulnerability; always use unique passwords for each account."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "The WannaCry ransomware targeted only Windows systems.",
      "Stuxnet was the first known cyber weapon.",
      "The Colonial Pipeline attack was carried out by a state-sponsored group."
    ],
    lieIndex: 2,
    explanation: "The Colonial Pipeline attack was executed by a criminal group, not a state-sponsored one."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "A firewall blocks unauthorized access to a network.",
      "Antivirus software prevents phishing attacks.",
      "Multi-factor authentication adds extra security."
    ],
    lieIndex: 1,
    explanation: "Antivirus software doesn't prevent phishing attacks; it mainly protects against malware."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "VPNs encrypt internet traffic.",
      "Public Wi-Fi networks are always secure.",
      "A strong password reduces the risk of breaches."
    ],
    lieIndex: 1,
    explanation: "Public Wi-Fi networks are generally insecure, making users vulnerable to attacks."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "SQL injection is a type of cyberattack.",
      "DDoS attacks overwhelm a system with traffic.",
      "Ransomware attacks only target government systems."
    ],
    lieIndex: 2,
    explanation: "Ransomware attacks target various sectors, including individuals and businesses."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Social engineering involves manipulating people.",
      "Clicking unknown links can lead to malware.",
      "Malware can only spread through USB drives."
    ],
    lieIndex: 2,
    explanation: "Malware can spread through multiple means, including email attachments and websites."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "SSL certificates secure websites.",
      "HTTP is more secure than HTTPS.",
      "Two-factor authentication increases security."
    ],
    lieIndex: 1,
    explanation: "HTTPS is more secure than HTTP as it encrypts the data between client and server."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Phishing can occur via email, phone, or SMS.",
      "Antivirus software eliminates all malware risks.",
      "Employees are often the weakest link in cybersecurity."
    ],
    lieIndex: 1,
    explanation: "Antivirus software reduces risk but cannot eliminate all malware threats."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Zero-day exploits target unknown vulnerabilities.",
      "A botnet consists of compromised devices.",
      "Only large companies are targeted by hackers."
    ],
    lieIndex: 2,
    explanation: "Hackers target organizations of all sizes, not just large companies."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Cybersecurity training can prevent attacks.",
      "Regular software updates help patch vulnerabilities.",
      "Once hacked, an organization cannot recover."
    ],
    lieIndex: 2,
    explanation: "Organizations can recover from attacks with proper incident response plans."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Encryption turns data into unreadable code.",
      "Passwords should be shared for convenience.",
      "Public key cryptography uses two keys."
    ],
    lieIndex: 1,
    explanation: "Passwords should never be shared; each user should have their own."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Firewalls protect networks from unauthorized access.",
      "Malware is harmless to a system’s performance.",
      "Intrusion detection systems monitor network traffic."
    ],
    lieIndex: 1,
    explanation: "Malware can severely affect a system's performance and security."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Spyware tracks user activity secretly.",
      "Adware displays unwanted advertisements.",
      "Trojan horses spread via phishing emails only."
    ],
    lieIndex: 2,
    explanation: "Trojan horses can spread through other means, such as fake software downloads."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Brute force attacks try all password combinations.",
      "Passwords should contain at least 6 characters.",
      "Password managers store passwords securely."
    ],
    lieIndex: 1,
    explanation: "Passwords should ideally be longer than 6 characters for better security."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Cybersecurity is a one-time implementation.",
      "Regular audits improve cybersecurity posture.",
      "Penetration testing helps identify weaknesses."
    ],
    lieIndex: 0,
    explanation: "Cybersecurity is an ongoing process, not a one-time setup."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Ransomware encrypts user files.",
      "Cyberattacks can only occur from external threats.",
      "Backups help recover from ransomware attacks."
    ],
    lieIndex: 1,
    explanation: "Cyberattacks can come from both internal and external sources."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Clickjacking tricks users into clicking on unintended links.",
      "Cybersecurity policies are unnecessary in small companies.",
      "Awareness training reduces the risk of social engineering attacks."
    ],
    lieIndex: 1,
    explanation: "Small companies also need cybersecurity policies to protect their assets."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "IoT devices can be vulnerable to attacks.",
      "Strong passwords are the only requirement for security.",
      "Regular patches help keep systems secure."
    ],
    lieIndex: 1,
    explanation: "Security requires a combination of measures beyond just strong passwords."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Hackers often target healthcare systems.",
      "Antivirus software detects 100% of threats.",
      "Cybersecurity is a growing industry."
    ],
    lieIndex: 1,
    explanation: "Antivirus software cannot detect all threats, as new malware emerges constantly."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Firewalls only protect against viruses.",
      "Social engineering attacks manipulate human behavior.",
      "VPNs hide your IP address."
    ],
    lieIndex: 0,
    explanation: "Firewalls protect against unauthorized access, not just viruses."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Cybersecurity includes both physical and digital protection.",
      "Cyberattacks have no financial impact.",
      "Data breaches can lead to identity theft."
    ],
    lieIndex: 1,
    explanation: "Cyberattacks can cause significant financial losses."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Biometric authentication uses physical traits.",
      "Two-factor authentication always uses SMS codes.",
      "Security questions add an extra layer of protection."
    ],
    lieIndex: 1,
    explanation: "Two-factor authentication can use methods other than SMS codes, such as apps."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Ransomware demands payment to unlock files.",
      "Malware can be installed without user knowledge.",
      "All malware requires user action to spread."
    ],
    lieIndex: 2,
    explanation: "Some malware can spread automatically without user action."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Public Wi-Fi is always secure.",
      "VPNs help protect your online activity.",
      "Using strong passwords reduces your risk of hacking."
    ],
    lieIndex: 0,
    explanation: "Public Wi-Fi is generally insecure and should be used cautiously."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Phishing only targets email users.",
      "Phishing can occur over SMS or phone.",
      "Educating users helps reduce phishing attacks."
    ],
    lieIndex: 0,
    explanation: "Phishing can happen across different platforms, not just email."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Zero-day exploits are quickly patched once identified.",
      "Botnets can perform DDoS attacks.",
      "All viruses delete files immediately."
    ],
    lieIndex: 2,
    explanation: "Not all viruses delete files; some steal or corrupt data."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Cybersecurity is only for IT professionals.",
      "Everyone plays a role in cybersecurity.",
      "Security awareness training helps mitigate threats."
    ],
    lieIndex: 0,
    explanation: "Cybersecurity is a shared responsibility, not just for IT professionals."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Backup systems help prevent data loss.",
      "Social engineering attacks rely on human error.",
      "All security breaches are instantly detectable."
    ],
    lieIndex: 2,
    explanation: "Many security breaches go undetected for months or even years."
  },
  {
    question: "Which one is the lie?",
    answers: [
      "Regular software updates prevent vulnerabilities.",
      "Antivirus alone ensures full protection.",
      "Multifactor authentication adds extra security."
    ],
    lieIndex: 1,
    explanation: "Antivirus alone cannot ensure full protection; a layered security approach is essential."
  }
];
let gameFinished = false; // Track if the game has been completed
let currentQuestion = 0;
let score = 0;
let playerName = ''; // Store the player's name
const scoreboard = []; // This array stores all player scores

function startGame() {
  const nameInput = document.getElementById('player-name').value;
  if (!nameInput.trim()) {
    alert("Please enter your name to start!");
    return;
  }

  playerName = nameInput.trim();
  document.getElementById('name-input').style.display = 'none'; // Hide name input
  document.getElementById('game').style.display = 'block'; // Show game area
  loadQuestion();
}

function loadQuestion() {
  const questionEl = document.getElementById('question');
  const progressEl = document.getElementById('progress');
  const progressBarEl = document.getElementById('progress-bar');
  const buttons = document.querySelectorAll('.answer');
  const resultEl = document.getElementById('result');

  if (currentQuestion >= questions.length) {
    endGame();
    return;
  }

  const q = questions[currentQuestion];
  progressEl.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
  questionEl.textContent = q.question;

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
  requestAnimationFrame(() => {
    progressBarEl.style.width = `${progressPercentage}%`;
  });

  buttons.forEach((button, index) => {
    button.textContent = q.answers[index];
    button.style.display = 'block';
    button.onclick = () => checkAnswer(index);
  });

  resultEl.textContent = ''; // Clear feedback
}

function checkAnswer(index) {
  const resultEl = document.getElementById('result');
  const q = questions[currentQuestion];

  if (index === q.lieIndex) {
    resultEl.innerHTML = `✅ Correct! That's the lie.<br><strong>Explanation:</strong> ${q.explanation}`;
    score++;
  } else {
    resultEl.innerHTML = `❌ Wrong! The lie was: "${q.answers[q.lieIndex]}".<br><strong>Explanation:</strong> ${q.explanation}`;
  }

  currentQuestion++;
  setTimeout(loadQuestion, 3000); // Adjust delay for feedback
}

function endGame() {
  const questionEl = document.getElementById('question');
  const resultEl = document.getElementById('result');
  const scoreboardEl = document.getElementById('scoreboard');

  questionEl.textContent = `Game Over! Your final score is ${score}/${questions.length}.`;

  if (score < 20) {
    initiatePrank(); // Trigger prank for low scores
  } else {
    resultEl.innerHTML = `<button onclick="restartGame()">Restart Game</button>`;
  }

  // Prevent multiple entries by using the gameFinished flag
  if (!gameFinished) {
    const existingEntryIndex = scoreboard.findIndex(entry => entry.name === playerName);

    if (existingEntryIndex === -1) {
      scoreboard.push({ name: playerName, score: score }); // New player entry
    } else {
      scoreboard[existingEntryIndex].score = score; // Update score for existing player
    }

    localStorage.setItem('scoreboard', JSON.stringify(scoreboard)); // Save to LocalStorage
    gameFinished = true; // Mark the game as finished
  }

  updateScoreboardDisplay();
  scoreboardEl.style.display = 'block'; // Show scoreboard
}



function initiatePrank() {
  const resultEl = document.getElementById('result');
  let countdown = 10;

  resultEl.innerHTML = `Your operating system will be deleted in <span id="countdown">${countdown}</span> seconds...`;

  const interval = setInterval(() => {
    countdown--;
    document.getElementById('countdown').textContent = countdown;

    if (countdown <= 0) {
      clearInterval(interval);
      resultEl.innerHTML = "😂 Just kidding! You're safe. Better luck next time!<br><button onclick='restartGame()'>Restart Game</button>";
    }
  }, 1000);
}



function restartGame() {
  currentQuestion = 0;
  score = 0;
  gameFinished = false; // Reset gameFinished for the new session
  document.getElementById('game').style.display = 'none';
  document.getElementById('scoreboard').style.display = 'none';
  document.getElementById('name-input').style.display = 'block'; // Show name input again
  document.getElementById('result').textContent = ''; // Clear result message
}




function clearScoreboard() {
  if (confirm("Are you sure you want to clear all scores? This action cannot be undone.")) {
    scoreboard.length = 0;
    localStorage.removeItem('scoreboard'); // Clear LocalStorage
    updateScoreboardDisplay();
    alert("Scoreboard cleared successfully!");
  }
}

function updateScoreboardDisplay() {
  const scoreListEl = document.getElementById('score-list');
  scoreListEl.innerHTML = scoreboard
    .map((entry) => `<li>${entry.name}: ${entry.score}/${questions.length}</li>`)
    .join('');
}

// Load scoreboard from LocalStorage on page load
window.onload = () => {
  const savedScoreboard = JSON.parse(localStorage.getItem('scoreboard')) || [];
  scoreboard.push(...savedScoreboard); // Load saved scores
  updateScoreboardDisplay();
};
