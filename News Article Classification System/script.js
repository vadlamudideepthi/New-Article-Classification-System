function classifyNews() {

    let news = document.getElementById("newsText").value.toLowerCase();

    let category = document.getElementById("category");
    let description = document.getElementById("description");

    if (news.trim() === "") {
        category.innerHTML = "⚠️ Please enter a news article";
        description.innerHTML = "";
        return;
    }

    // Category keywords
    let categories = {

        Sports: [
            "cricket", "football", "tennis", "match",
            "player", "team", "goal", "tournament",
            "world cup", "ipl", "sports", "coach"
        ],

        Technology: [
            "technology", "computer", "software", "ai",
            "artificial intelligence", "mobile", "internet",
            "robot", "smartphone", "app", "coding",
            "cyber", "digital"
        ],

        Politics: [
            "government", "election", "minister", "president",
            "prime minister", "politics", "parliament",
            "party", "vote", "leader", "political"
        ],

        Business: [
            "business", "company", "market", "stock",
            "investment", "bank", "money", "economy",
            "profit", "finance", "trade", "startup"
        ],

        Entertainment: [
            "movie", "film", "actor", "actress",
            "music", "song", "cinema", "celebrity",
            "bollywood", "hollywood", "director",
            "entertainment"
        ]
    };

    // Store scores
    let scores = {
        Sports: 0,
        Technology: 0,
        Politics: 0,
        Business: 0,
        Entertainment: 0
    };

    // Check keywords
    for (let categoryName in categories) {

        categories[categoryName].forEach(function(word) {

            if (news.includes(word)) {
                scores[categoryName]++;
            }

        });
    }

    // Find highest score
    let highestScore = 0;
    let detectedCategory = "General News";

    for (let categoryName in scores) {

        if (scores[categoryName] > highestScore) {
            highestScore = scores[categoryName];
            detectedCategory = categoryName;
        }
    }

    // Display result
    if (detectedCategory === "Sports") {

        category.innerHTML = "🏏 Sports";
        description.innerHTML =
            "This article is related to sports and sporting events.";

    } else if (detectedCategory === "Technology") {

        category.innerHTML = "💻 Technology";
        description.innerHTML =
            "This article is related to technology and digital innovations.";

    } else if (detectedCategory === "Politics") {

        category.innerHTML = "🏛️ Politics";
        description.innerHTML =
            "This article is related to politics, government, or elections.";

    } else if (detectedCategory === "Business") {

        category.innerHTML = "💰 Business";
        description.innerHTML =
            "This article is related to business, finance, or the economy.";

    } else if (detectedCategory === "Entertainment") {

        category.innerHTML = "🎬 Entertainment";
        description.innerHTML =
            "This article is related to movies, music, or entertainment.";

    } else {

        category.innerHTML = "📰 General News";
        description.innerHTML =
            "The article does not match a specific category.";
    }
}


// Clear the input
function clearText() {

    document.getElementById("newsText").value = "";

    document.getElementById("category").innerHTML =
        "Category will appear here";

    document.getElementById("description").innerHTML = "";
}