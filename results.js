// --- FIREBASE CONFIG (Same as your other JS files) ---
const firebaseConfig = {
    apiKey: "AIzaSyAIdGHIfVQa-QJdKA-yWOB4pi94MV37Ry8",
    authDomain: "mindpathai.firebaseapp.com",
    projectId: "mindpathai",
    storageBucket: "mindpathai.appspot.com",
    messagingSenderId: "763638702087",
    appId: "1:763638702087:web:0498c59912db7abb768aa2"
};

// --- INITIALIZE FIREBASE ---
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const ADMIN_EMAIL = 'skilloradashboardentry@gmail.com';

// --- NEW: AUTHENTICATION AND BACK BUTTON LOGIC ---
auth.onAuthStateChanged(user => {
    const backBtn = document.getElementById('backBtn');
    
    // If a user is logged in, show the back button and make it work
    if (user) {
        backBtn.style.display = 'block'; // Make the button visible

        backBtn.addEventListener('click', () => {
            // Check if the logged-in user is the admin
            if (user.email === ADMIN_EMAIL) {
                // If admin, go to the admin dashboard
                window.location.href = 'admin-dashboard.html';
            } else {
                // If a regular user, go to the chatbot
                window.location.href = 'chatbot.html';
            }
        });
    }
});


// --- ORIGINAL LOGIC FOR DISPLAYING RESULTS ---
document.addEventListener('DOMContentLoaded', () => {
    const intelligenceDescriptions = {
        "Linguistic": "High sensitivity to the spoken and written word, and the ability to learn languages.",
        "Logical-Mathematical": "The ability to analyze problems logically, carry out mathematical operations, and investigate issues scientifically.",
        "Spatial": "The potential to recognize and use the patterns of wide space and more confined areas.",
        "Bodily-Kinesthetic": "The potential of using one's whole body or parts of the body to solve problems.",
        "Musical": "Skill in the performance, composition, and appreciation of musical patterns.",
        "Interpersonal": "The capacity to understand the intentions, motivations, and desires of other people.",
        "Intrapersonal": "The capacity to understand oneself, to appreciate one's feelings, fears and motivations.",
        "Naturalistic": "Expertise in the recognition and classification of the numerous species of an environment.",
        "Existential": "The sensitivity and capacity to tackle deep questions about human existence."
    };

    try {
        const params = new URLSearchParams(window.location.search);
        const encodedData = params.get('data');

        if (!encodedData) {
            document.getElementById('userName').textContent = "No data found!";
            return;
        }

        const decodedData = atob(encodedData);
        const resultsData = JSON.parse(decodedData);
        
        const { name, labels, scores } = resultsData;

        document.getElementById('userName').textContent = name;
        
        const detailsContainer = document.getElementById('intelligence-details');
        labels.forEach(label => {
            const item = document.createElement('div');
            item.className = 'intelligence-item';
            
            const title = document.createElement('h3');
            title.textContent = label;
            
            const description = document.createElement('p');
            description.textContent = intelligenceDescriptions[label] || "No description available.";
            
            item.appendChild(title);
            item.appendChild(description);
            detailsContainer.appendChild(item);
        });

        const ctx = document.getElementById('resultsChart').getContext('2d');
        const chartColors = ['#7C3AED', '#14B8A6', '#F97316'];

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Intelligence Score',
                    data: scores,
                    backgroundColor: chartColors,
                    borderColor: chartColors,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: { legend: { display: false } },
                scales: {
                    y: { ticks: { color: '#f0f4f8', font: { size: 14 } } },
                    x: { ticks: { color: '#f0f4f8' } }
                }
            }
        });

    } catch (error) {
        console.error("Error parsing results data:", error);
        document.getElementById('userName').textContent = "Error loading results.";
    }
});