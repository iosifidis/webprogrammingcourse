// ΣΗΜΑΝΤΙΚΟ: Αντικαταστήστε αυτό με το δικό σας, προσωπικό API Key από το openweathermap.org
const apiKey = 'YOUR_SECRET_API_KEY'; 

// --- Επιλογή Στοιχείων του DOM ---
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city-input');
const weatherDisplay = document.getElementById('weather-display');
const loadingSpinner = document.getElementById('loading-spinner');

// --- Προσθήκη Event Listener στη Φόρμα ---
cityForm.addEventListener('submit', async (event) => {
    // 1. Αποτρέπουμε την προκαθορισμένη συμπεριφορά της φόρμας (ανανέωση σελίδας)
    event.preventDefault();

    // 2. Παίρνουμε την πόλη που έγραψε ο χρήστης και αφαιρούμε τυχόν κενά
    const city = cityInput.value.trim();

    // Αν δεν έχει γράψει τίποτα, δεν κάνουμε κάτι
    if (!city) {
        alert('Παρακαλώ εισάγετε μια πόλη.');
        return;
    }

    // Εμφανίζουμε το spinner και κρύβουμε τις παλιές πληροφορίες
    loadingSpinner.classList.remove('hidden');
    weatherDisplay.classList.add('hidden');
    
    // 3. Καλούμε τη συνάρτηση για να φέρει τα δεδομένα του καιρού
    getWeatherData(city);
});

// --- Συνάρτηση για την κλήση του API ---
async function getWeatherData(city) {
    // Κατασκευάζουμε το URL του API με τις απαραίτητες παραμέτρους
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=el`;

    try {
        const response = await fetch(apiUrl);
        
        // Αν η απάντηση δεν είναι ΟΚ (π.χ. 404 Not Found), δημιουργούμε ένα σφάλμα
        if (!response.ok) {
            throw new Error(`Η πόλη "${city}" δεν βρέθηκε. Δοκιμάστε ξανά.`);
        }
        
        const data = await response.json();
        
        // Αν όλα πήγαν καλά, καλούμε τη συνάρτηση για την εμφάνιση των δεδομένων
        displayWeatherData(data);

    } catch (error) {
        // Αν υπάρξει οποιοδήποτε σφάλμα, το εμφανίζουμε στον χρήστη
        alert(error.message);
        console.error("Fetch Error:", error);
    } finally {
        // Κρύβουμε το spinner σε κάθε περίπτωση (είτε επιτυχία είτε αποτυχία)
        loadingSpinner.classList.add('hidden');
    }
}


// --- Συνάρτηση για την Εμφάνιση των Δεδομένων στο DOM ---
function displayWeatherData(data) {
    // Παίρνουμε τις πληροφορίες που χρειαζόμαστε από το αντικείμενο 'data'
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Ενημερώνουμε τα στοιχεία της σελίδας με τις νέες πληροφορίες
    document.getElementById('city-name').textContent = cityName;
    document.getElementById('temperature').textContent = `${Math.round(temperature)}°C`;
    document.getElementById('weather-description').textContent = description;
    document.getElementById('weather-icon').src = iconUrl;
    document.getElementById('weather-icon').alt = `Εικονίδιο για ${description}`;

    // Εμφανίζουμε το κοντέινερ των πληροφοριών
    weatherDisplay.classList.remove('hidden');
}
