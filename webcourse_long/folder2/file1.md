# index.html

*(Η βασική δομή της εφαρμογής. Περιέχει τη φόρμα εισαγωγής και το "κοντέινερ" όπου θα εμφανιστούν οι πληροφορίες του καιρού.)*

```html
<!DOCTYPE html>
<html lang="el">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Εφαρμογή Καιρού</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="app-container">
        <header>
            <h1>Εφαρμογή Καιρού</h1>
        </header>
        
        <main>
            <form id="city-form">
                <input type="text" id="city-input" placeholder="π.χ. Αθήνα, Θεσσαλονίκη..." required>
                <button type="submit">Αναζήτηση</button>
            </form>

            <div id="weather-display" class="hidden">
                <h2 id="city-name"></h2>
                <div class="weather-main">
                    <img id="weather-icon" src="" alt="Εικονίδιο καιρού">
                    <p id="temperature"></p>
                </div>
                <p id="weather-description"></p>
            </div>

            <div id="loading-spinner" class="hidden"></div>
        </main>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

Λήψη: [index.html](index.html)

source: `{{ page.path }}`
