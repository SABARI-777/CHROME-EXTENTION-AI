const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const multer = require("multer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/api/chat", async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ error: "Message is required." });
    }

    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=AIzaSyDsFkICst8Gg7SWVVvry0NuX90OhxBQ7dk",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: userMessage }] }]
                })
            }
        );

        const data = await response.json();
        const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that.";

        res.json({ reply: aiReply });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to connect to AI API." });
    }
});

app.post("/api/upload", upload.single("file"), async (req, res) => {
    try {
        const fileContent = req.file.buffer.toString();
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=AIzaSyDsFkICst8Gg7SWVVvry0NuX90OhxBQ7dk",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Analyze this file content: ${fileContent}` }] }]
                })
            }
        );

        const data = await response.json();
        const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process the file.";
        res.json({ reply: aiReply });
    } catch (error) {
        console.error("Error during file upload:", error);
        res.status(500).json({ error: "Failed to process the uploaded file." });
    }
});

app.post("/api/translate", async (req, res) => {
    const { text, target } = req.body;
    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=AIzaSyDsFkICst8Gg7SWVVvry0NuX90OhxBQ7dk",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Translate "${text}" to ${target}.` }] }]
                })
            }
        );

        const data = await response.json();
        const translation = data.candidates?.[0]?.content?.parts?.[0]?.text || "Translation failed.";
        res.json({ translation: translation });
    } catch (error) {
        console.error("Error during translation:", error);
        res.status(500).json({ error: "Failed to translate." });
    }
});

app.post("/api/clarify", async (req, res) => {
    const { error } = req.body;
    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=AIzaSyDsFkICst8Gg7SWVVvry0NuX90OhxBQ7dk",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: `Explain this error: ${error}` }] }]
                })
            }
        );

        const data = await response.json();
        const clarification = data.candidates?.[0]?.content?.parts?.[0]?.text || "Clarification failed.";
        res.json({ clarification: clarification });
    } catch (error) {
        console.error("Error during clarification:", error);
        res.status(500).json({ error: "Failed to clarify." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
