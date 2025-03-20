chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "fetchAIResponse") {
        fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDsFkICst8Gg7SWVVvry0NuX90OhxBQ7dk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: request.query }] }]
            })
        })
            .then(response => response.json())
            .then(data => {
                const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand.";
                sendResponse({ reply });
            })
            .catch(error => {
                sendResponse({ reply: "Error: Could not fetch response." });
            });

        return true;
    }
});