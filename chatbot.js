// --- CONSTANTS AND CONFIG ---
const questions = [
    // Linguistic
    {
        "intelligence": "Linguistic",
        "question": "I am good at explaining things and telling stories.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Linguistic",
        "question": "I enjoy reading books, magazines, and articles.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Linguistic",
        "question": "I find it easy to write essays, poems, or letters.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    // Logical-Mathematical
    {
        "intelligence": "Logical-Mathematical",
        "question": "I enjoy solving puzzles, brain teasers, and logical problems.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Logical-Mathematical",
        "question": "I am good at finding patterns and connections between things.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Logical-Mathematical",
        "question": "I am comfortable working with numbers and complex calculations.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    // Spatial
    {
        "intelligence": "Spatial",
        "question": "I can easily visualize objects in three dimensions.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Spatial",
        "question": "I have a good sense of direction and can read maps easily.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Spatial",
        "question": "I am good at putting things together from a diagram (e.g., furniture).",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    // Bodily-Kinesthetic
    {
        "intelligence": "Bodily-Kinesthetic",
        "question": "I enjoy and am good at sports or physical activities.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Bodily-Kinesthetic",
        "question": "I am skilled with my hands and enjoy making things.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Bodily-Kinesthetic",
        "question": "I have good coordination and balance.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    // Musical
    {
        "intelligence": "Musical",
        "question": "I am sensitive to different sounds and musical rhythms.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Musical",
        "question": "I can easily remember tunes and songs.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Musical",
        "question": "I often hum, sing, or tap my foot unconsciously.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    // Interpersonal
    {
        "intelligence": "Interpersonal",
        "question": "I am good at understanding other people's feelings and motivations.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Interpersonal",
        "question": "I enjoy working in groups and collaborate well with others.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Interpersonal",
        "question": "I can sense the mood and dynamics of a group.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    // Intrapersonal
    {
        "intelligence": "Intrapersonal",
        "question": "I am very aware of my own thoughts, emotions, and motivations.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Intrapersonal",
        "question": "I understand my strengths and weaknesses.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Intrapersonal",
        "question": "I am good at setting personal goals and working towards them.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    // Naturalistic
    {
        "intelligence": "Naturalistic",
        "question": "I am good at classifying and categorizing plants, animals, or objects.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Naturalistic",
        "question": "I have a strong interest in biology, ecology, and the natural world.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Naturalistic",
        "question": "I enjoy spending time outdoors and in nature.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    // Existential
    {
        "intelligence": "Existential",
        "question": "I often think about the meaning and purpose of life.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Existential",
        "question": "I am curious about the big questions, like why we are here.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    },
    {
        "intelligence": "Existential",
        "question": "I am open to exploring different spiritual or philosophical beliefs.",
        "options": [
            { "text": "Strongly Disagree", "value": 1 },
            { "text": "Disagree", "value": 2 },
            { "text": "Neutral", "value": 3 },
            { "text": "Agree", "value": 4 },
            { "text": "Strongly Agree", "value": 5 }
        ]
    }
];
const guidanceData = {
  "Linguistic": {
    "study_methods": [
      "Reading out loud.",
      "Taking detailed notes and rewriting them.",
      "Teaching new concepts to others.",
      "Creating stories, poems, or rhymes to remember information.",
      "Participating in debates and discussions."
    ],
    "career_guidance": [
      "Writer / Journalist",
      "Editor / Publisher",
      "Lawyer",
      "Public Speaker",
      "Teacher",
      "Translator",
      "‘Alim (Islamic Scholar)",
      "Qari (Quran Reciter)",
      "Khatib (Sermon Giver)"
    ]
  },
  "Logical-Mathematical": {
    "study_methods": [
      "Using flowcharts and diagrams to organize information.",
      "Finding the logical sequence or pattern in a topic.",
      "Creating and solving puzzles related to the subject matter.",
      "Experimenting with hands-on activities to prove a theory.",
      "Using mind maps to connect ideas logically."
    ],
    "career_guidance": [
      "Computer Programmer / Data Analyst",
      "Scientist / Researcher",
      "Engineer",
      "Accountant",
      "Mathematician",
      "Islamic Finance Specialist",
      "Astronomer (for moon sighting)",
      "Specialist in Fara'id (Islamic Inheritance Law)"
    ]
  },
  "Spatial": {
    "study_methods": [
      "Drawing diagrams, charts, and illustrations.",
      "Using color-coding to highlight key information.",
      "Visualizing concepts in their mind's eye.",
      "Using videos and presentations to learn.",
      "Creating models or dioramas."
    ],
    "career_guidance": [
      "Architect",
      "Graphic Designer",
      "Filmmaker",
      "Pilot / Navigator",
      "Surgeon",
      "Artist",
      "Islamic Calligrapher",
      "Geometric Pattern Designer",
      "Urban Planner for Islamic cities"
    ]
  },
  "Bodily-Kinesthetic": {
    "study_methods": [
      "Building or acting out concepts.",
      "Moving around while studying (e.g., walking or pacing).",
      "Using hands-on materials to learn.",
      "Taking frequent breaks for physical activity.",
      "Engaging in role-playing exercises."
    ],
    "career_guidance": [
      "Athlete / Dancer",
      "Craftsperson / Mechanic",
      "Surgeon",
      "Actor",
      "Firefighter",
      "Physiotherapist",
      "Hajj/Umrah Guide",
      "Artisan (e.g., woodworking, metalworking)"
    ]
  },
  "Musical": {
    "study_methods": [
      "Listening to music while studying.",
      "Creating songs or jingles to remember facts.",
      "Using rhythmic patterns to organize information.",
      "Studying in a quiet environment to avoid musical distractions."
    ],
    "career_guidance": [
      "Musician / Composer",
      "Sound Engineer",
      "Music Teacher",
      "Conductor",
      "DJ / Producer",
      "Muezzin (Caller to Prayer)",
      "Nasheed Artist (Vocalist)",
      "Tajwid Instructor (Art of Quranic Recitation)"
    ]
  },
  "Interpersonal": {
    "study_methods": [
      "Working in study groups.",
      "Discussing ideas and collaborating on projects.",
      "Teaching new skills to a peer.",
      "Using role-playing to understand different perspectives.",
      "Mentoring or tutoring others."
    ],
    "career_guidance": [
      "Counselor / Therapist",
      "Salesperson",
      "Manager / Leader",
      "Politician",
      "Human Resources Specialist",
      "Imam / Community Leader",
      "Qadi (Judge in Islamic Law)",
      "Da'i (One who invites to Islam)",
      "Charity Organizer"
    ]
  },
  "Intrapersonal": {
    "study_methods": [
      "Independent work and self-study.",
      "Setting personal goals and tracking their own progress.",
      "Keeping a journal to reflect on what they've learned.",
      "Engaging in mindfulness and meditation to improve focus."
    ],
    "career_guidance": [
      "Entrepreneur",
      "Philosopher / Theologian",
      "Writer / Novelist",
      "Researcher",
      "Psychologist",
      "Muhaddith (Scholar of Hadith)",
      "Islamic Researcher",
      "Sufi Guide (Shaykh)"
    ]
  },
  "Naturalistic": {
    "study_methods": [
      "Connecting concepts to the natural world (e.g., using a plant's growth to explain a process).",
      "Studying outdoors when possible.",
      "Classifying and organizing information into categories.",
      "Observing natural phenomena."
    ],
    "career_guidance": [
      "Biologist / Ecologist",
      "Veterinarian",
      "Park Ranger / Conservationist",
      "Gardener / Farmer",
      "Geologist",
      "Herbalist / Hakim (Traditional Islamic Medicine)",
      "Environmental Scientist (from an Islamic stewardship perspective)"
    ]
  },
  "Existential": {
    "study_methods": [
      "Engaging in deep philosophical discussions.",
      "Connecting new information to the bigger picture of life.",
      "Reflecting on the purpose and meaning of what they are learning.",
      "Exploring different belief systems."
    ],
    "career_guidance": [
      "Philosopher",
      "Theologian",
      "Religious Leader",
      "Scientist (Theoretical Physics)",
      "Life Coach",
      "Islamic Philosopher",
      "Scholar of Aqeedah (Islamic Creed)",
      "Comparative Religion Scholar"
    ]
  }
}
;

const firebaseConfig = {
    apiKey: "AIzaSyAIdGHIfVQa-QJdKA-yWOB4pi94MV37Ry8",
    authDomain: "mindpathai.firebaseapp.com",
    projectId: "mindpathai",
    storageBucket: "mindpathai.appspot.com",
    messagingSenderId: "763638702087",
    appId: "1:763638702087:web:0498c59912db7abb768aa2"
};

// --- FIREBASE & GLOBAL STATE ---
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
let currentUserId = null;
let activeChatId = null;
let chatStateUnsubscribe = null; 
let currentQuestionIndex = 0, scores = {}, topIntelligences = [], state = "initial";

// --- DOM ELEMENTS ---
const authOverlay = document.getElementById("auth-overlay");
const loginForm = document.getElementById("login-form-content");
const signupForm = document.getElementById("signup-form-content");
const showLoginBtn = document.getElementById("show-login");
const showSignupBtn = document.getElementById("show-signup");
const profileImg = document.getElementById("profile-img");
const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const logoutBtn = document.getElementById("logoutBtn");
const chatWindow = document.getElementById("chatWindow");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const newChatBtn = document.getElementById('newChatBtn');
const sidebarResetBtn = document.getElementById('sidebarResetBtn');
const sidebarHelpBtn = document.getElementById('sidebarHelpBtn');
const chatHistoryList = document.getElementById('chat-history-list');
const hamburger = document.querySelector('.hamburger');
const overlay = document.getElementById('overlay');
const topBarResultBtn = document.getElementById('topBarResultBtn');
const resizer = document.querySelector('.resizer');
const sidebar = document.querySelector('.sidebar');
const chatSection = document.querySelector('.chat-section');

// --- HELPER FUNCTIONS ---
function createChatMessage(isUser, content, customClass = '') {
    const li = document.createElement("li");
    li.className = isUser ? "chat-user" : "chat-bot";
    let messageHtml = '';
    if (!isUser) {
        const theme = document.body.getAttribute('data-theme');
        const logoSrc = theme === 'dark' ? 'gallery/skillsdark1.png' : 'gallery/skills.png';
        messageHtml += `<img class="chat-logo" src="${logoSrc}" alt="MindPath AI">`;
    }
    messageHtml += `<div class="${isUser ? 'chat-user-msg' : 'chat-bot-msg'} ${customClass}">${content}</div>`;
    li.innerHTML = messageHtml;
    return li;
}

function updateResultButtonVisibility() {
    if (topIntelligences && topIntelligences.length > 0) {
        topBarResultBtn.style.display = 'inline-block';
    } else {
        topBarResultBtn.style.display = 'none';
    }
}

async function saveMessageToFirebase(htmlContent, sender) {
    if (!currentUserId || !activeChatId) return;
    try {
        await db.collection('users').doc(currentUserId).collection('chats').doc(activeChatId).collection('messages').add({
            content: htmlContent,
            sender: sender,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    } catch (error) { console.error("Error writing message to Firestore: ", error); }
}

async function sendUserMessage(text) {
    const activeChatItem = document.querySelector(`.chat-history-item.active .chat-title`);
    if (activeChatItem && activeChatItem.textContent === "New Aptitude Test") {
        const truncatedTitle = text.length > 25 ? text.substring(0, 25) + "..." : text;
        await db.collection('users').doc(currentUserId).collection('chats').doc(activeChatId).update({ title: truncatedTitle });
    }
    chatWindow.appendChild(createChatMessage(true, text));
    chatWindow.scrollTop = chatWindow.scrollHeight;
    saveMessageToFirebase(text, 'user');
}

function sendBotMessage(text, optionsHtml = '') {
    const content = text + (optionsHtml ? `<br>${optionsHtml}` : '');
    chatWindow.appendChild(createChatMessage(false, content));
    chatWindow.scrollTop = chatWindow.scrollHeight;
    saveMessageToFirebase(content, 'bot');
}

async function sendMessage() {
    const text = userInput.value.trim();
    if (text === "" || !activeChatId) return;
    sendUserMessage(text);
    userInput.value = "";
    if (state === "reviewMode") {
        userInput.disabled = true;
        sendBtn.disabled = true;
        if (currentUserId) {
            db.collection('reviews').add({ userId: currentUserId, reviewText: text, timestamp: firebase.firestore.FieldValue.serverTimestamp(), chatId: activeChatId });
        }
        setTimeout(() => {
            sendBotMessage("Thank you for your valuable feedback!");
        }, 1000);
    }
}

// --- APTITUDE TEST LOGIC ---
async function saveTestProgress() {
    if (!currentUserId || !activeChatId) return;
    const progress = { currentQuestionIndex, scores, state, topIntelligences };
    await db.collection('users').doc(currentUserId).collection('chats').doc(activeChatId).set({ progress }, { merge: true });
}

function askQuestion(questionIndex) {
    if (questionIndex >= questions.length) {
        simulateTyping(() => {
            sendBotMessage("That's the end of the test! Calculating your results...");
            setTimeout(calculateResults, 2000);
        });
        return;
    }
    const q = questions[questionIndex];
    let optionsHtml = `<div class="options-container">`;
    q.options.forEach(option => {
        optionsHtml += `<button class="option-btn" data-value="${option.value}">${option.text}</button>`;
    });
    optionsHtml += `</div>`;
    simulateTyping(() => sendBotMessage(q.question, optionsHtml));
    state = "quiz";
    saveTestProgress();
}

function calculateResults() {
    const sortedIntelligences = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);
    topIntelligences = sortedIntelligences.slice(0, 3);
    const strongestIntelligence = sortedIntelligences[0];
    let resultMessage = `Your strongest intelligence is <strong>${strongestIntelligence}</strong>.`;
    if (topIntelligences[1]) {
        resultMessage += ` You also show a great aptitude for <strong>${topIntelligences[1]}</strong> intelligence.`;
    }
    sendBotMessage(resultMessage);
    const chartLi = createChatMessage(false, `<canvas id="intelligenceChart" class="bar-chart"></canvas>`);
    chatWindow.appendChild(chartLi);
    setTimeout(() => {
        const ctx = document.getElementById('intelligenceChart')?.getContext('2d');
        if (!ctx) return;
        const topScores = topIntelligences.map(key => scores[key]);
        const gridColor = document.body.getAttribute('data-theme') === 'dark' ? '#374151' : '#e5e7eb';
        const fontColor = document.body.getAttribute('data-theme') === 'dark' ? '#f9fafb' : '#111827';
        const chartColors = ['#7C3AED', '#14B8A6', '#F97316'];
        new Chart(ctx, { type: 'bar', data: { labels: topIntelligences, datasets: [{ label: 'Your Top Intelligences', data: topScores, backgroundColor: chartColors, borderColor: chartColors, borderWidth: 1 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { color: fontColor }, grid: { color: gridColor } }, x: { ticks: { color: fontColor }, grid: { color: gridColor } } } } });
        chatWindow.scrollTop = chatWindow.scrollHeight;
        setTimeout(() => {
            let guidancePrompt = "Would you like to receive personalized study methods and career guidance based on these results?";
            let optionsHtml = `<div class="options-container"><button class="option-btn" data-action="show-guidance">Yes, please</button></div>`;
            sendBotMessage(guidancePrompt, optionsHtml);
            state = "awaiting-guidance-permission";
            saveTestProgress();
        }, 1500);
    }, 500);
    updateResultButtonVisibility(); // Instantly update button visibility
}

function displayGuidance() {
    const createGuidanceHTML = (intelligence) => {
        const data = guidanceData[intelligence];
        if (!data) return '';
        return `
            <div class="guidance-card">
                <button class="copy-guidance-btn">Copy</button>
                <h3>${intelligence} Intelligence</h3>
                <div class="results-grid">
                    <div class="results-section">
                        <h4>Study Methods</h4>
                        <ul>${data.study_methods.map(method => `<li>${method}</li>`).join('')}</ul>
                    </div>
                    <div class="results-section">
                        <h4>Career Guidance</h4>
                        <ul>${data.career_guidance.map(career => `<li>${career}</li>`).join('')}</ul>
                    </div>
                </div>
            </div>`;
    };
    if (topIntelligences[0]) {
        simulateTyping(() => sendBotMessage(createGuidanceHTML(topIntelligences[0]), ''));
    }
    if (topIntelligences[1]) {
        setTimeout(() => {
            simulateTyping(() => sendBotMessage(createGuidanceHTML(topIntelligences[1]), ''));
        }, 2000);
    }
    setTimeout(() => {
        sendBotMessage("I hope this guidance was helpful! Feel free to leave a review below.");
        userInput.disabled = false;
        sendBtn.disabled = false;
        state = "reviewMode";
        saveTestProgress();
    }, 4000);
}

// --- CHAT MANAGEMENT ---
async function createNewChat() {
    if (!currentUserId) return;
    const newChatRef = await db.collection('users').doc(currentUserId).collection('chats').add({
        title: 'New Aptitude Test',
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        progress: { currentQuestionIndex: 0, scores: {}, state: "initial", topIntelligences: [] }
    });
    await loadChatHistory(currentUserId, newChatRef.id);
}

// --- REPLACE this entire function in chatbot.js ---

async function resetCurrentChat() {
    if (!currentUserId || !activeChatId) {
        alert("Please select a chat to reset.");
        return;
    }
    if (!confirm("Are you sure you want to reset this chat? All messages and progress will be deleted.")) {
        return;
    }

    try {
        // 1. Delete all messages in the chat's subcollection
        const messagesRef = db.collection('users').doc(currentUserId).collection('chats').doc(activeChatId).collection('messages');
        const messagesSnapshot = await messagesRef.get();
        const batch = db.batch();
        messagesSnapshot.docs.forEach(doc => batch.delete(doc.ref));
        await batch.commit();

        // 2. Reset the progress and title in the chat document
        await db.collection('users').doc(currentUserId).collection('chats').doc(activeChatId).update({
            title: 'New Aptitude Test',
            progress: { currentQuestionIndex: 0, scores: {}, state: "initial", topIntelligences: [] }
        });

        // --- NEW: Find and delete the user's review from the 'reviews' collection ---
        const reviewsQuery = db.collection('reviews')
                        .where('userId', '==', currentUserId)
                        .where('chatId', '==', activeChatId); // <-- Add this line
        const reviewsSnapshot = await reviewsQuery.get();
        reviewsSnapshot.forEach(doc => {
            doc.ref.delete();
        });
        // --- END OF NEW STEP ---
        
        // 4. Reload the now-empty chat
        await loadChatHistory(currentUserId, activeChatId);

    } catch (error) {
        console.error("Error resetting chat:", error);
        alert("There was an error while resetting the chat.");
    }
}

async function loadChatList(userId) {
    if (chatStateUnsubscribe) chatStateUnsubscribe(); 
    const chatsRef = db.collection('users').doc(userId).collection('chats').orderBy('createdAt', 'desc');
    chatStateUnsubscribe = chatsRef.onSnapshot(async (snapshot) => {
        if (snapshot.empty) {
            await createNewChat();
            return;
        }
        chatHistoryList.innerHTML = '';
        snapshot.forEach(doc => {
            const chat = doc.data();
            const li = document.createElement('li');
            li.className = 'chat-history-item';
            li.dataset.id = doc.id;
            li.innerHTML = `
                <span class="chat-title">${chat.title || 'New Chat'}</span>
                <div class="actions-menu">
                    <button class="menu-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 14a2 2 0 100-4 2 2 0 000 4zM19 14a2 2 0 100-4 2 2 0 000 4zM5 14a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
                        </svg>
                    </button>
                    <div class="dropdown-menu">
                        <button class="dropdown-item result-btn">Result</button>
                        <button class="dropdown-item rename-btn">Rename</button>
                        <button class="dropdown-item delete-btn">Delete</button>
                    </div>
                </div>
            `;
            chatHistoryList.appendChild(li);
        });

        if (!activeChatId || !snapshot.docs.some(doc => doc.id === activeChatId)) {
            const firstChatId = snapshot.docs[0].id;
            await loadChatHistory(userId, firstChatId);
        } else {
            document.querySelector(`.chat-history-item[data-id="${activeChatId}"]`)?.classList.add('active');
        }
    });
}

async function loadChatHistory(userId, chatId) {
    activeChatId = chatId;
    chatWindow.innerHTML = '';
    document.querySelectorAll('.chat-history-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`.chat-history-item[data-id="${chatId}"]`)?.classList.add('active');
    const chatDoc = await db.collection('users').doc(userId).collection('chats').doc(chatId).get();
    const progress = chatDoc.data()?.progress || { currentQuestionIndex: 0, scores: {}, state: "initial", topIntelligences: [] };
    
    currentQuestionIndex = progress.currentQuestionIndex;
    scores = progress.scores;
    state = progress.state;
    topIntelligences = progress.topIntelligences || [];
    
    updateResultButtonVisibility();

    const messagesRef = db.collection('users').doc(userId).collection('chats').doc(chatId).collection('messages').orderBy('timestamp', 'asc');
    const snapshot = await messagesRef.get();

    if (snapshot.empty) {
        sendBotMessage("Hello! I am <strong>Skillora</strong>. Ready to begin your aptitude test?", `<div class="options-container"><button class="option-btn" data-value="yes">Yes</button></div>`);
        userInput.disabled = true;
        sendBtn.disabled = true;
    } else {
        snapshot.forEach(doc => {
            const message = doc.data();
            chatWindow.appendChild(createChatMessage(message.sender === 'user', message.content));
        });
        const isTestInProgress = state === "initial" || state === "quiz" || state === "awaiting-guidance-permission";
        userInput.disabled = isTestInProgress;
        sendBtn.disabled = isTestInProgress;
    }
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// --- USER PROFILE & AUTH ---
function updateProfileInfo(user) {
    const displayName = user.displayName || user.email.split('@')[0];
    const photoURL = user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random&color=fff`;
    profileImg.src = photoURL;
    profileName.textContent = displayName;
    profileEmail.textContent = user.email;
}

auth.onAuthStateChanged(user => {
    if (user) {
        if (user.email === 'skilloradashboardentry@gmail.com') {
            window.location.href = 'admin-dashboard.html';
            return;
        }
        currentUserId = user.uid;
        authOverlay.style.display = 'none';
        updateProfileInfo(user);
        loadChatList(user.uid);
    } else {
        currentUserId = null; 
        activeChatId = null;
        if (chatStateUnsubscribe) chatStateUnsubscribe();
        authOverlay.style.display = 'flex';
        profileName.textContent = 'Not logged in';
        profileEmail.textContent = '';
        profileImg.src = 'gallery/default-avatar.png';
        chatHistoryList.innerHTML = '';
        chatWindow.innerHTML = '';
    }
});

// --- EVENT LISTENERS ---
newChatBtn.addEventListener('click', createNewChat);
sidebarResetBtn.addEventListener('click', resetCurrentChat); 
hamburger.addEventListener('click', () => { sidebar.classList.toggle('show'); overlay.classList.toggle('active'); });
overlay.addEventListener('click', () => { sidebar.classList.remove('show'); overlay.classList.remove('active'); });

chatHistoryList.addEventListener('click', async (e) => {
    const menuButton = e.target.closest('.menu-button');
    if (menuButton) {
        const dropdown = menuButton.nextElementSibling;
        const isActive = dropdown.classList.contains('active');
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
        if (!isActive) {
            dropdown.classList.add('active');
        }
        return;
    }

    const actionButton = e.target.closest('.dropdown-item');
    if (actionButton) {
        const item = e.target.closest('.chat-history-item');
        const chatId = item.dataset.id;
        
        if (actionButton.classList.contains('delete-btn')) {
            if (chatHistoryList.children.length <= 1) {
                alert("You cannot delete your only chat.");
                return;
            }
            if (confirm('Are you sure you want to delete this chat?')) {
                if(activeChatId === chatId) {
                    const nextItem = item.nextElementSibling || item.previousElementSibling;
                    if(nextItem) await loadChatHistory(currentUserId, nextItem.dataset.id);
                }
                await db.collection('users').doc(currentUserId).collection('chats').doc(chatId).delete();
            }
        } else if (actionButton.classList.contains('rename-btn')) {
            const currentTitle = item.querySelector('.chat-title').textContent;
            const newTitle = prompt('Enter new chat title:', currentTitle);
            if (newTitle && newTitle.trim() !== "") {
                await db.collection('users').doc(currentUserId).collection('chats').doc(chatId).update({ title: newTitle.trim() });
            }
        } else if (actionButton.classList.contains('result-btn')) {
             const chatDoc = await db.collection('users').doc(currentUserId).collection('chats').doc(chatId).get();
             const progress = chatDoc.data()?.progress;
             if (progress && progress.state !== 'initial' && progress.scores && Object.keys(progress.scores).length > 0) {
                 const resultsData = {
                     name: auth.currentUser.displayName || auth.currentUser.email,
                     labels: progress.topIntelligences,
                     scores: progress.topIntelligences.map(key => progress.scores[key])
                 };
                 const encodedData = btoa(JSON.stringify(resultsData));
                 window.open(`results.html?data=${encodedData}`, '_blank');
             } else {
                 alert("This test has not been completed yet. Finish the test to see the results.");
             }
        }
        return;
    }
    
    const chatItem = e.target.closest('.chat-history-item');
    if (chatItem && activeChatId !== chatItem.dataset.id) {
        await loadChatHistory(currentUserId, chatItem.dataset.id);
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.actions-menu')) {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
    }
});

topBarResultBtn.addEventListener('click', () => {
    if (topIntelligences && topIntelligences.length > 0) {
        const resultsData = {
            name: auth.currentUser.displayName || auth.currentUser.email,
            labels: topIntelligences,
            scores: topIntelligences.map(key => scores[key])
        };
        const encodedData = btoa(JSON.stringify(resultsData));
        window.open(`results.html?data=${encodedData}`, '_blank');
    } else {
        alert("Result data is not available for this chat.");
    }
});

chatWindow.addEventListener('click', (e) => {
    if (e.target.classList.contains('option-btn')) {
        const target = e.target;
        target.closest('.options-container')?.querySelectorAll('button').forEach(btn => btn.disabled = true);
        sendUserMessage(target.textContent);
        if (state === "initial" && target.dataset.value === 'yes') {
            askQuestion(currentQuestionIndex);
        } else if (state === 'awaiting-guidance-permission' && target.dataset.action === 'show-guidance') {
            displayGuidance();
        } else if (state === 'quiz') {
            const selectedValue = target.dataset.value;
            const currentQuestion = questions[currentQuestionIndex];
            scores[currentQuestion.intelligence] = (scores[currentQuestion.intelligence] || 0) + parseInt(selectedValue);
            currentQuestionIndex++;
            askQuestion(currentQuestionIndex);
        }
    }
    if (e.target.classList.contains('copy-guidance-btn')) {
        const button = e.target;
        const card = button.closest('.guidance-card');
        const title = card.querySelector('h3').textContent;
        const studyMethods = Array.from(card.querySelectorAll('.results-section:first-child ul li')).map(li => `- ${li.textContent}`).join('\n');
        const careers = Array.from(card.querySelectorAll('.results-section:last-child ul li')).map(li => `- ${li.textContent}`).join('\n');
        const textToCopy = `${title}\n\nStudy Methods:\n${studyMethods}\n\nCareer Guidance:\n${careers}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            button.textContent = "Copied!";
            setTimeout(() => { button.textContent = "Copy"; }, 2000);
        });
    }
});

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') sendMessage(); });

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (error) { alert(error.message); }
});

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        await res.user.updateProfile({ displayName: name });
        await db.collection('users').doc(res.user.uid).set({
            name: name,
            email: email
        });
        updateProfileInfo(res.user);
    } catch (error) { 
        alert(error.message); 
    }
}); 

showSignupBtn.addEventListener('click', () => { document.getElementById('login-form').classList.remove('active'); document.getElementById('signup-form').classList.add('active'); });
showLoginBtn.addEventListener('click', () => { document.getElementById('signup-form').classList.remove('active'); document.getElementById('login-form').classList.add('active'); });
logoutBtn.addEventListener('click', () => auth.signOut());
sidebarHelpBtn.addEventListener('click', () => sendBotMessage("I am your MindPath guide. Start a new test and answer the questions. After the test, you'll receive personalized study and career guidance. You can reset any chat to start over."));

document.getElementById("themeToggle").addEventListener("click", () => {
    const newTheme = document.body.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeAssets(newTheme);
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
    updateThemeAssets(savedTheme);
});

function simulateTyping(callback) {
    const li = createChatMessage(false, `<div class="typing-indicator">Analyzing<span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`);
    chatWindow.appendChild(li);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    setTimeout(() => {
        li.remove();
        callback();
    }, 1500);
}

function updateThemeAssets(mode) {
    const logo = document.getElementById("logo");
    const chatLogos = document.querySelectorAll(".chat-logo"); 
    const newSrc = mode === "dark" ? "gallery/skillsdark1.png" : "gallery/skills.png";
    if(logo) logo.src = newSrc;
    chatLogos.forEach(chatLogo => chatLogo.src = newSrc);
    document.getElementById("themeToggle").textContent = mode === "dark" ? "🌙" : "🌞";
}

let isResizing = false;
resizer.addEventListener('mousedown', (e) => { 
    if (window.innerWidth >= 768) { 
        isResizing = true; 
        document.body.style.userSelect = 'none'; 
        document.body.style.cursor = 'col-resize'; 
    } 
});
document.addEventListener('mousemove', (e) => { 
    if (!isResizing) return; 
    let newWidth = e.clientX; 
    if (newWidth < 250) newWidth = 250; 
    if (newWidth > 450) newWidth = 450; 
    sidebar.style.flex = `0 0 ${newWidth}px`;
});
document.addEventListener('mouseup', () => { 
    isResizing = false; 
    document.body.style.userSelect = ''; 
    document.body.style.cursor = ''; 
});