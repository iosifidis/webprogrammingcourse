# style.css

*(Το styling που κάνει την εφαρμογή να φαίνεται καθαρή, μοντέρνα και responsive. Περιλαμβάνει και ένα απλό spinner για την ώρα της φόρτωσης.)*

```css
/* --- Basic Resets & Body Styles --- */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

/* --- App Container --- */
.app-container {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 90%;
    max-width: 450px;
    text-align: center;
}

header h1 {
    margin-bottom: 1.5rem;
    color: #333;
    font-weight: 700;
}

/* --- Form Styles --- */
#city-form {
    display: flex;
    margin-bottom: 2rem;
}

#city-input {
    flex-grow: 1;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 8px 0 0 8px;
    font-size: 1rem;
    outline: none;
}
#city-input:focus {
    border-color: #007bff;
}

#city-form button {
    padding: 0.8rem 1rem;
    border: none;
    background: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0 8px 8px 0;
    transition: background-color 0.3s;
}

#city-form button:hover {
    background: #0056b3;
}

/* --- Weather Display --- */
#weather-display {
    animation: fadeIn 0.5s ease-in-out;
}

#city-name {
    margin-bottom: 1rem;
    font-size: 2rem;
}

.weather-main {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
}

#temperature {
    font-size: 3.5rem;
    font-weight: 700;
    margin-left: 1rem;
}

#weather-icon {
    width: 100px;
    height: 100px;
}

#weather-description {
    font-size: 1.2rem;
    text-transform: capitalize;
}

/* --- Utility & Animation --- */
.hidden {
    display: none;
}

#loading-spinner {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #007bff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: 20px auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}

```

Λήψη: [style.css](style.css)

source: `{{ page.path }}`
