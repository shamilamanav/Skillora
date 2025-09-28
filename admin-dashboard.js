// --- FIREBASE CONFIG (Same as your chatbot.js) ---
const firebaseConfig = {
    apiKey: "AIzaSyAIdGHIfVQa-QJdKA-yWOB4pi94MV37Ry8",
    authDomain: "mindpathai.firebaseapp.com",
    projectId: "mindpathai",
    storageBucket: "mindpathai.appspot.com",
    messagingSenderId: "763638702087",
    appId: "1:763638702087:web:0498c59912db7abb768aa2"
};

// --- INITIALIZE FIREBASE & DOM ELEMENTS ---
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const tableBody = document.getElementById('table-body');
const logoutBtn = document.getElementById('logoutBtn');

const ADMIN_EMAIL = 'skilloradashboardentry@gmail.com';

// --- AUTHENTICATION & SECURITY ---
auth.onAuthStateChanged(user => {
    if (!user || user.email !== ADMIN_EMAIL) {
        window.location.href = 'chatbot.html';
    } else {
        listenForUserDataUpdates(); // CHANGED: Call the new real-time listener function
    }
});

// --- DATA FETCHING AND DISPLAY ---
// CHANGED: This function now listens for real-time updates instead of fetching once.
function listenForUserDataUpdates() {
    db.collection('users').onSnapshot(async (usersSnapshot) => {
        tableBody.innerHTML = ''; // Clear the table on every update

        for (const userDoc of usersSnapshot.docs) {
            const userData = userDoc.data();
            const userId = userDoc.id;

            if (userData.email === ADMIN_EMAIL) continue;

            // Fetch chat and review data for each user
            const chatsSnapshot = await db.collection('users').doc(userId).collection('chats').get();
            let topIntelligences = 'N/A';
            let scores = {}; // Store scores for the result button
            let hasResult = false;

            for (const chatDoc of chatsSnapshot.docs) {
                const chatData = chatDoc.data();
                if (chatData.progress && chatData.progress.topIntelligences && chatData.progress.topIntelligences.length > 0) {
                    topIntelligences = chatData.progress.topIntelligences.join(', ');
                    scores = chatData.progress.scores; // Save the scores object
                    hasResult = true;
                    break;
                }
            }

            const reviewsSnapshot = await db.collection('reviews').where('userId', '==', userId).limit(1).get();
            let reviewText = 'No review given';
            if (!reviewsSnapshot.empty) {
                reviewText = reviewsSnapshot.docs[0].data().reviewText;
            }

            // Create and append the table row
            const row = document.createElement('tr');
            
            // NEW: Prepare data for the result button
            const resultData = {
                name: userData.name || 'Unknown',
                labels: hasResult ? topIntelligences.split(', ') : [],
                scores: hasResult ? topIntelligences.split(', ').map(key => scores[key.trim()]) : []
            };
            const encodedData = btoa(JSON.stringify(resultData));

            // --- FIND AND REPLACE this block in admin-dashboard.js ---

// --- FIND AND REPLACE this block in admin-dashboard.js ---

row.innerHTML = `
    <td>${userData.name || 'Unknown'}</td>
    <td>${userData.email || 'Unknown'}</td>
    <td class="intelligence-cell">${topIntelligences}</td>
    <td class="review-cell">${reviewText}</td>
    <td class="actions-cell">
        ${hasResult ? `<button class="view-result-btn" data-result='${encodedData}'>View Result</button>` : 'No Result'}
    </td>
`;
            tableBody.appendChild(row);
        }
    }, error => {
        console.error("Error listening for user data:", error);
        tableBody.innerHTML = '<tr><td colspan="5">Failed to load data. See console for errors.</td></tr>';
    });
}

logoutBtn.addEventListener('click', () => {
    // 1. This correctly signs the user out of Firebase
    auth.signOut().then(() => {
        // 2. After sign-out is successful, this correctly redirects to chatbot.html
        window.location.href = 'introduction.html';
    });
});

// NEW: Event listener for all "View Result" buttons using event delegation
tableBody.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('view-result-btn')) {
        const encodedData = e.target.dataset.result;
        if (encodedData) {
            window.open(`results.html?data=${encodedData}`, '_blank');
        }
    }
});