// content.js
(() => {
    if (document.getElementById("askHelpButton")) return;

    let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

    const askHelpButton = document.createElement("button");
    askHelpButton.id = "askHelpButton";
    askHelpButton.innerText = "🧠 Ask Help!";
    askHelpButton.style.position = "fixed";
    askHelpButton.style.bottom = "20px";
    askHelpButton.style.right = "20px";
    askHelpButton.style.background = "linear-gradient(45deg, #FF7E5F, #FEB47B)";
    askHelpButton.style.color = "#fff";
    askHelpButton.style.border = "none";
    askHelpButton.style.padding = "10px 15px";
    askHelpButton.style.borderRadius = "8px";
    askHelpButton.style.fontSize = "14px";
    askHelpButton.style.cursor = "pointer";
    askHelpButton.style.transition = "all 0.3s ease-in-out";
    askHelpButton.style.boxShadow = "0 3px 8px rgba(0, 0, 0, 0.3)";
    askHelpButton.style.zIndex = "10000";
    askHelpButton.style.transform = "scale(0.95)";

    askHelpButton.onmouseover = () => {
        askHelpButton.style.background = "#FF5733";
        askHelpButton.style.transform = "scale(1)";
    };
    askHelpButton.onmouseout = () => {
        askHelpButton.style.background = "linear-gradient(45deg, #FF7E5F, #FEB47B)";
        askHelpButton.style.transform = "scale(0.95)";
    };

    document.body.appendChild(askHelpButton);

    let assistantContainer = null;

    const toggleAssistant = () => {
        if (assistantContainer) {
            document.body.removeChild(assistantContainer);
            assistantContainer = null;
            localStorage.setItem("chatOpen", "false");
        } else {
            createAssistant();
            localStorage.setItem("chatOpen", "true");
        }
    };

    askHelpButton.onclick = toggleAssistant;

    function createAssistant() {
        assistantContainer = document.createElement("div");
        assistantContainer.id = "aiAssistantContainer";
        assistantContainer.style.position = "fixed";
        assistantContainer.style.bottom = "80px";
        assistantContainer.style.right = "20px";
        assistantContainer.style.width = "450px";
        assistantContainer.style.background = "#282c34";
        assistantContainer.style.color = "white";
        assistantContainer.style.border = "1px solid #555";
        assistantContainer.style.borderRadius = "15px";
        assistantContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.6)";
        assistantContainer.style.zIndex = "9999";
        assistantContainer.style.padding = "15px";
        assistantContainer.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
        assistantContainer.style.display = "flex";
        assistantContainer.style.flexDirection = "column";
        assistantContainer.style.gap = "10px";
        assistantContainer.style.backdropFilter = "blur(12px)";
        assistantContainer.style.transition = "transform 0.2s ease-in-out, opacity 0.2s ease-in-out";
        assistantContainer.style.transform = "translateY(15px)";
        assistantContainer.style.opacity = "0";

        setTimeout(() => {
            assistantContainer.style.transform = "translateY(0)";
            assistantContainer.style.opacity = "1";
        }, 50);

        const assistantHeader = document.createElement("div");
        assistantHeader.style.background = "#383e4a";
        assistantHeader.style.color = "white";
        assistantHeader.style.padding = "12px";
        assistantHeader.style.fontSize = "18px";
        assistantHeader.style.fontWeight = "600";
        assistantHeader.style.textAlign = "center";
        assistantHeader.style.borderRadius = "15px 15px 0 0";
        assistantHeader.style.display = "flex";
        assistantHeader.style.justifyContent = "space-between";
        assistantHeader.style.alignItems = "center";

        const title = document.createElement("span");
        title.innerText = "💡 CHRIS AI";

        const closeButton = document.createElement("button");
        closeButton.innerText = "❌";
        closeButton.style.background = "transparent";
        closeButton.style.border = "none";
        closeButton.style.color = "white";
        closeButton.style.cursor = "pointer";
        closeButton.style.fontSize = "18px";
        closeButton.setAttribute("aria-label", "Close chat");

        closeButton.onclick = toggleAssistant;

        assistantHeader.appendChild(title);
        assistantHeader.appendChild(closeButton);

        const aiResponse = document.createElement("div");
        aiResponse.id = "aiResponse";
        aiResponse.style.background = "#202329";
        aiResponse.style.color = "#d1d5db";
        aiResponse.style.padding = "10px";
        aiResponse.style.borderRadius = "6px";
        aiResponse.style.minHeight = "150px";
        aiResponse.style.maxHeight = "300px";
        aiResponse.style.overflowY = "auto";
        aiResponse.style.fontSize = "14px";
        aiResponse.style.border = "1px solid #444";

        const loadChatHistory = () => {
            aiResponse.innerHTML = chatHistory.map(chat =>
                `<div style="margin-bottom: 10px;">
                    <p style="color:#9ca3af;"><strong>You:</strong> ${chat.user}</p>
                    ${chat.code ?
                        `<div style="background: #1e1e1e; padding: 10px; border-radius: 4px; margin-bottom: 10px;">
                            <pre style="font-family: 'Courier New', monospace; margin: 0; color: #d4d4d4; font-size:12px">${chat.code}</pre>
                        </div>`
                        : ""}
                    ${chat.explanation ?
                        `<div style="background: #272c34; padding: 10px; border-radius: 4px;">
                            <p style="color:#d1d5db;"><strong>Explanation:</strong> ${chat.explanation}</p>
                        </div>`
                        : ""}
                    ${chat.ai ?
                        `<p style="color:#a8b2c1;"><strong>Agilan AI:</strong> ${chat.ai}</p>` : ""}
                </div>`
            ).join("");
        };
        loadChatHistory();

        const inputBox = document.createElement("input");
        inputBox.type = "text";
        inputBox.placeholder = "Ask Agilan AI...";
        inputBox.style.padding = "10px";
        inputBox.style.border = "1px solid #555";
        inputBox.style.borderRadius = "4px";
        inputBox.style.width = "calc(100% - 22px)";
        inputBox.style.fontSize = "14px";
        inputBox.style.background = "#383e4a";
        inputBox.style.color = "#d1d5db";
        inputBox.setAttribute("aria-label", "Type your question here");

        const sendButton = document.createElement("button");
        sendButton.innerText = "Send";
        sendButton.style.padding = "10px 18px";
        sendButton.style.background = "#007BFF";
        sendButton.style.color = "white";
        sendButton.style.border = "none";
        sendButton.style.borderRadius = "4px";
        sendButton.style.cursor = "pointer";
        sendButton.style.fontSize = "14px";
        sendButton.setAttribute("aria-label", "Send message");
        sendButton.style.marginRight = "2px";

        const clearButton = document.createElement("button");
        clearButton.innerText = "Clear";
        // 
        clearButton.style.padding = "10px 18px";
        clearButton.style.background = "#FF4444";
        clearButton.style.color = "white";
        clearButton.style.border = "none";
        clearButton.style.borderRadius = "4px";
        clearButton.style.cursor = "pointer";
        clearButton.style.fontSize = "14px";
        clearButton.setAttribute("aria-label", "Clear chat history");
        clearButton.style.marginRight = "2px";

        const saveButton = document.createElement("button");
        saveButton.innerText = "Save";
        saveButton.style.padding = "10px 18px";
        saveButton.style.background = "#28A745";
        saveButton.style.color = "white";
        saveButton.style.border = "none";
        saveButton.style.borderRadius = "4px";
        saveButton.style.cursor = "pointer";
        saveButton.style.fontSize = "14px";
        saveButton.setAttribute("aria-label", "Save chat to file");
        saveButton.style.marginRight = "2px";

        const searchButton = document.createElement("button");
        searchButton.innerText = "🔍";
        searchButton.style.padding = "10px 18px";
        searchButton.style.background = "#4CAF50";
        searchButton.style.color = "white";
        searchButton.style.border = "none";
        searchButton.style.borderRadius = "4px";
        searchButton.style.cursor = "pointer";
        searchButton.style.fontSize = "14px";
        searchButton.setAttribute("aria-label", "Search the web");
        searchButton.style.marginRight = "2px";

        searchButton.onclick = () => {
            const query = inputBox.value.trim();
            if (query) {
                window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
            }
        };

        sendButton.onclick = async () => {
            const userQuery = inputBox.value.trim();
            if (!userQuery) return;

            aiResponse.innerHTML += `<p style="color:#9ca3af;"><strong>You:</strong> ${userQuery}</p>`;
            sendButton.disabled = true;
            sendButton.innerText = "Sending...";

            try {
                chrome.runtime.sendMessage({ type: "fetchAIResponse", query: userQuery }, (response) => {
                    if (chrome.runtime.lastError) {
                        throw new Error(chrome.runtime.lastError.message);
                    }
                    const aiReply = response.reply || "I'm thinking, but couldn't find an answer!";
                    const code = response.code || null;
                    const explanation = response.explanation || null;
                    chatHistory.push({ user: userQuery, ai: aiReply, code, explanation });
                    localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
                    aiResponse.innerHTML +=
                        `<div style="margin-bottom: 10px;">
                            <p style="color:#a8b2c1;"><strong>Agilan AI:</strong> ${aiReply}</p>
                            ${code ?
                                `<div style="background: #1e1e1e; padding: 10px; border-radius: 4px; margin-bottom: 10px;">
                                    <pre style="font-family: 'Courier New', monospace; margin: 0; color: #d4d4d4; font-size: 12px;">${code}</pre>
                                </div>`
                                : ""}
                            ${explanation ?
                                `<div style="background: #272c34; padding: 10px; border-radius: 4px;">
                                    <p style="color:#d1d5db;"><strong>Explanation:</strong> ${explanation}</p>
                                </div>`
                                : ""}
                        </div>`;
                    aiResponse.scrollTop = aiResponse.scrollHeight;
                });
            } catch (error) {
                aiResponse.innerHTML += `<p style="color:red;"><strong>Error:</strong> ${error.message}</p>`;
            } finally {
                sendButton.disabled = false;
                sendButton.innerText = "Send";
            }
            inputBox.value = "";
        };

        clearButton.onclick = () => {
            chatHistory = [];
            localStorage.removeItem("chatHistory");
            aiResponse.innerHTML = "";
        };

        saveButton.onclick = () => {
            const chatText = chatHistory.map(chat => `You: ${chat.user}\nAgilan AI: ${chat.ai}`).join("\n\n");
            const blob = new Blob([chatText], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "AgilanAI_ChatHistory.txt";
            a.click();
            URL.revokeObjectURL(url);
        };

        inputBox.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                sendButton.click();
            }
        });

        // File Upload
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.style.display = "none";
        fileInput.onchange = async () => {
            const file = fileInput.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await fetch("http://localhost:5000/api/upload", {
                    method: "POST",
                    body: formData,
                });
                const data = await response.json();
                aiResponse.innerHTML += `<p style="color:#a8b2c1;"><strong>Agilan AI:</strong> ${data.reply}</p>`;
            } catch (error) {
                aiResponse.innerHTML += `<p style="color:red;"><strong>Error:</strong> ${error.message}</p>`;
            }
        };

        const uploadButton = document.createElement("button");
        uploadButton.innerText = "📁";
        uploadButton.style.padding = "10px 18px";
        uploadButton.style.background = "#673AB7";
        uploadButton.style.color = "white";
        uploadButton.style.border = "none";
        uploadButton.style.borderRadius = "4px";
        uploadButton.style.cursor = "pointer";
        uploadButton.style.fontSize = "14px";
        uploadButton.setAttribute("aria-label", "Upload File");
        uploadButton.style.marginRight = "2px";

        uploadButton.onclick = () => fileInput.click();

        //Translation
        const targetLang = document.createElement("input");
        targetLang.type = "text";
        targetLang.placeholder = "Lang";
        targetLang.style.padding = "10px";
        targetLang.style.border = "1px solid #555";
        targetLang.style.borderRadius = "4px";
        targetLang.style.fontSize = "14px";
        targetLang.style.background = "#383e4a";
        targetLang.style.color = "#d1d5db";
        targetLang.setAttribute("aria-label", "Target Language");
        targetLang.style.marginRight = "2px";

        const translateButton = document.createElement("button");
        translateButton.innerText = "🌐";
        translateButton.style.padding = "10px 18px";
        translateButton.style.background = "#3F51B5";
        translateButton.style.color = "white";
        translateButton.style.border = "none";
        translateButton.style.borderRadius = "4px";
        translateButton.style.cursor = "pointer";
        translateButton.style.fontSize = "14px";
        translateButton.setAttribute("aria-label", "Translate");

        translateButton.onclick = async () => {
            const text = inputBox.value;
            const target = targetLang.value;
            try {
                const response = await fetch("http://localhost:5000/api/translate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ text, target }),
                });
                const data = await response.json();
                aiResponse.innerHTML += `<p style="color:#a8b2c1;"><strong>Translation:</strong> ${data.translation}</p>`;
            } catch (error) {
                aiResponse.innerHTML += `<p style="color:red;"><strong>Error:</strong> ${error.message}</p>`;
            }
        };

        // Error Clarification
        const clarifyButton = document.createElement("button");
        clarifyButton.innerText = "🔍 Clarify";
        clarifyButton.style.padding = "10px 18px";
        clarifyButton.style.background = "#FFC107";
        clarifyButton.style.color = "#222";
        clarifyButton.style.border = "none";
        clarifyButton.style.borderRadius = "4px";
        clarifyButton.style.cursor = "pointer";
        clarifyButton.style.fontSize = "14px";
        clarifyButton.setAttribute("aria-label", "Clarify Error");

        clarifyButton.onclick = async () => {
            const errorText = inputBox.value;
            try {
                const response = await fetch("http://localhost:5000/api/clarify", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ error: errorText }),
                });
                const data = await response.json();
                aiResponse.innerHTML += `<p style="color:#a8b2c1;"><strong>Clarification:</strong> ${data.clarification}</p>`;
            } catch (error) {
                aiResponse.innerHTML += `<p style="color:red;"><strong>Error:</strong> ${error.message}</p>`;
            }
        };

        const buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.flexWrap = "wrap";
        buttonContainer.style.gap = "5px";

        assistantContainer.appendChild(assistantHeader);
        assistantContainer.appendChild(aiResponse);
        assistantContainer.appendChild(inputBox);
        buttonContainer.appendChild(sendButton);
        buttonContainer.appendChild(uploadButton);
        buttonContainer.appendChild(fileInput);
        buttonContainer.appendChild(targetLang);
        buttonContainer.appendChild(translateButton);
        buttonContainer.appendChild(clarifyButton);
        buttonContainer.appendChild(searchButton);
        buttonContainer.appendChild(clearButton);
        buttonContainer.appendChild(saveButton);
        assistantContainer.appendChild(buttonContainer);

        document.body.appendChild(assistantContainer);
        inputBox.focus();
    }

    if (localStorage.getItem("chatOpen") === "true") {
        createAssistant();
    }
})();

        