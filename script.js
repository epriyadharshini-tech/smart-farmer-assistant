// ===============================
// SMART FARMER ASSISTANT
// script.js
// ===============================

// Weather Information
function updateWeather() {

    const weather = [
        {
            temp: "30°C",
            humidity: "75%",
            rain: "Moderate Rain Expected"
        },
        {
            temp: "34°C",
            humidity: "60%",
            rain: "Sunny"
        },
        {
            temp: "28°C",
            humidity: "85%",
            rain: "Heavy Rain"
        }
    ];

    let random = Math.floor(Math.random() * weather.length);

    document.getElementById("temperature").innerHTML = weather[random].temp;
    document.getElementById("humidity").innerHTML = weather[random].humidity;
    document.getElementById("rain").innerHTML = weather[random].rain;

}

// Crop Recommendation

function recommendCrop() {

    let soil = document.getElementById("soil").value;

    let crop = "";

    switch (soil) {

        case "Black Soil":
            crop = "Cotton, Soybean";
            break;

        case "Red Soil":
            crop = "Groundnut, Millets";
            break;

        case "Clay Soil":
            crop = "Rice";
            break;

        case "Sandy Soil":
            crop = "Watermelon, Groundnut";
            break;

        default:
            crop = "No Recommendation";

    }

    document.getElementById("cropResult").innerHTML =
        "Recommended Crop : " + crop;

}

// Irrigation

function irrigationAdvice() {

    let moisture = parseInt(document.getElementById("moisture").value);

    let advice = "";

    if (moisture < 30) {

        advice = "Water Immediately";

    }

    else if (moisture < 60) {

        advice = "Water After 1 Day";

    }

    else {

        advice = "No Irrigation Required";

    }

    document.getElementById("waterResult").innerHTML = advice;

}

// Pest Detection (Demo)

function detectPest() {

    let diseases = [

        "Healthy Leaf",

        "Leaf Spot Disease",

        "Bacterial Blight",

        "Powdery Mildew",

        "Stem Rot"

    ];

    let random = Math.floor(Math.random() * diseases.length);

    document.getElementById("pestResult").innerHTML =
        diseases[random];

}

// Fertilizer Recommendation

function fertilizerSuggestion() {

    let crop = document.getElementById("cropName").value.toLowerCase();

    let result = "";

    if (crop == "rice") {

        result = "Use Urea + DAP + Potash";

    }

    else if (crop == "cotton") {

        result = "Use NPK 20:20:20";

    }

    else if (crop == "groundnut") {

        result = "Gypsum + Organic Compost";

    }

    else {

        result = "Consult Agriculture Officer";

    }

    document.getElementById("fertilizerResult").innerHTML = result;

}

// Yield Prediction

function predictYield() {

    let acres = parseFloat(document.getElementById("acres").value);

    let predicted = acres * 22;

    document.getElementById("yieldResult").innerHTML =
        predicted + " Quintals (Estimated)";

}

// AI Chatbot

function sendMessage() {

    let input = document.getElementById("userMessage");

    let message = input.value.toLowerCase();

    let response = "";

    if (message.includes("rice")) {

        response = "Rice grows well in clay soil with regular irrigation.";

    }

    else if (message.includes("cotton")) {

        response = "Cotton requires black soil and warm climate.";

    }

    else if (message.includes("fertilizer")) {

        response = "Use fertilizers based on soil test results.";

    }

    else if (message.includes("rain")) {

        response = "Rain is expected soon. Avoid unnecessary irrigation.";

    }

    else if (message.includes("hello")) {

        response = "Hello Farmer! How can I help you?";

    }

    else {

        response = "Sorry, I don't understand. Please ask another farming question.";

    }

    let chat = document.getElementById("chatBox");

    chat.innerHTML += "<p><b>You:</b> " + message + "</p>";

    chat.innerHTML += "<p><b>Assistant:</b> " + response + "</p>";

    chat.scrollTop = chat.scrollHeight;

    input.value = "";

}

// Clear Chat

function clearChat() {

    document.getElementById("chatBox").innerHTML =
        "<p><b>Assistant:</b> Welcome Farmer!</p>";

}

// Auto Weather Update

window.onload = function () {

    updateWeather();

};
