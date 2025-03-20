// (() => {
    // if (document.getElementById("askHelpButton")) return;

    // // Load chat history from localStorage
    // let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

    // Create the "Ask Help!" button
    // const askHelpButton = document.createElement("button");
    // askHelpButton.id = "askHelpButton";
    // askHelpButton.innerText = "🧠 Ask Help!";
    // askHelpButton.style.position = "fixed";
    // askHelpButton.style.bottom = "20px";
    // askHelpButton.style.right = "20px";
    // askHelpButton.style.background = "linear-gradient(45deg, #FF7E5F, #FEB47B)";
    // askHelpButton.style.color = "#fff";
    // askHelpButton.style.border = "none";
    // askHelpButton.style.padding = "12px 18px";
    // askHelpButton.style.borderRadius = "12px";
    // askHelpButton.style.fontSize = "16px";
    // askHelpButton.style.cursor = "pointer";
    // askHelpButton.style.transition = "all 0.3s ease-in-out";
    // askHelpButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
    // askHelpButton.style.zIndex = "10000";
    // askHelpButton.style.transform = "scale(0.9)";
    // askHelpButton.setAttribute("aria-label", "Ask for help from Agilan AI");

    // // Hover and Grow Effect
    // askHelpButton.onmouseover = () => {
    //     askHelpButton.style.background = "#FF5733";
    //     askHelpButton.style.transform = "scale(1.1)";
    // };
    // askHelpButton.onmouseout = () => {
    //     askHelpButton.style.background = "linear-gradient(45deg, #FF7E5F, #FEB47B)";
    //     askHelpButton.style.transform = "scale(0.9)";
    // };

    // document.body.appendChild(askHelpButton);

    // let assistantContainer = null;

    // // Function to toggle AI chat
    // const toggleAssistant = () => {
    //     if (assistantContainer) {
    //         document.body.removeChild(assistantContainer);
    //         assistantContainer = null;
    //         localStorage.setItem("chatOpen", "false");
    //     } else {
    //         createAssistant();
    //         localStorage.setItem("chatOpen", "true");
    //     }
    // };

    // askHelpButton.onclick = toggleAssistant;

    // function createAssistant() {
    //     assistantContainer = document.createElement("div");
    //     assistantContainer.id = "aiAssistantContainer";
    //     assistantContainer.style.position = "fixed";
    //     assistantContainer.style.bottom = "80px";
    //     assistantContainer.style.right = "20px";
    //     assistantContainer.style.width = "400px";
    //     assistantContainer.style.background = "rgba(0, 123, 255, 0.85)";
    //     assistantContainer.style.color = "white";
    //     assistantContainer.style.border = "2px solid white";
    //     assistantContainer.style.borderRadius = "20px";
    //     assistantContainer.style.boxShadow = "0px 6px 15px rgba(255, 255, 255, 0.5)";
    //     assistantContainer.style.zIndex = "9999";
    //     assistantContainer.style.padding = "12px";
    //     assistantContainer.style.fontFamily = "'Arial', sans-serif";
    //     assistantContainer.style.display = "flex";
    //     assistantContainer.style.flexDirection = "column";
    //     assistantContainer.style.gap = "12px";
    //     assistantContainer.style.backdropFilter = "blur(12px)";
    //     assistantContainer.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
    //     assistantContainer.style.transform = "translateY(20px)";
    //     assistantContainer.style.opacity = "0";

    //     setTimeout(() => {
    //         assistantContainer.style.transform = "translateY(0)";
    //         assistantContainer.style.opacity = "1";
    //     }, 10);

    //     const assistantHeader = document.createElement("div");
    //     assistantHeader.style.background = "#001F3F";
    //     assistantHeader.style.color = "white";
    //     assistantHeader.style.padding = "14px";
    //     assistantHeader.style.fontSize = "18px";
    //     assistantHeader.style.fontWeight = "bold";
    //     assistantHeader.style.textAlign = "center";
    //     assistantHeader.style.borderRadius = "18px 18px 0 0";
    //     assistantHeader.style.display = "flex";
    //     assistantHeader.style.justifyContent = "space-between";
    //     assistantHeader.style.alignItems = "center";

    //     const title = document.createElement("span");
    //     title.innerText = "💡 Agilan AI";

    //     const closeButton = document.createElement("button");
    //     closeButton.innerText = "❌";
    //     closeButton.style.background = "transparent";
    //     closeButton.style.border = "none";
    //     closeButton.style.color = "white";
    //     closeButton.style.cursor = "pointer";
    //     closeButton.style.fontSize = "18px";
    //     closeButton.setAttribute("aria-label", "Close chat");

    //     closeButton.onclick = toggleAssistant;

    //     assistantHeader.appendChild(title);
    //     assistantHeader.appendChild(closeButton);

    //     const aiResponse = document.createElement("div");
    //     aiResponse.id = "aiResponse";
    //     aiResponse.style.background = "#F0F8FF";
    //     aiResponse.style.color = "#333";
    //     aiResponse.style.padding = "12px";
    //     aiResponse.style.borderRadius = "8px";
    //     aiResponse.style.minHeight = "120px";
    //     aiResponse.style.maxHeight = "250px";
    //     aiResponse.style.overflowY = "auto";
    //     aiResponse.style.fontSize = "14px";
    //     aiResponse.style.border = "1px solid white";

    //     const loadChatHistory = () => {
    //         aiResponse.innerHTML = chatHistory.map(chat => `
    //             <div style="margin-bottom: 10px;">
    //                 <p><strong>You:</strong> ${chat.user}</p>
    //                 ${chat.code ? `
    //                     <div style="background: #000; padding: 10px; border-radius: 6px; margin-bottom: 10px;">
    //                         <pre style="font-family: 'Courier New', monospace; margin: 0; color: #fff;">${chat.code}</pre>
    //                     </div>
    //                 ` : ""}
    //                 ${chat.explanation ? `
    //                     <div style="background: #e8f4f8; padding: 10px; border-radius: 6px;">
    //                         <p><strong>Explanation:</strong> ${chat.explanation}</p>
    //                     </div>
    //                 ` : ""}
    //             </div>
    //         `).join("");
    //     };
    //     loadChatHistory();

    //     const inputBox = document.createElement("input");
    //     inputBox.type = "text";
    //     inputBox.placeholder = "Ask Agilan AI...";
    //     inputBox.style.padding = "10px";
    //     inputBox.style.border = "2px solid white";
    //     inputBox.style.borderRadius = "6px";
    //     inputBox.style.width = "calc(100% - 20px)";
    //     inputBox.style.fontSize = "14px";
    //     inputBox.style.background = "#D4F1F4";
    //     inputBox.style.color = "#000";
    //     inputBox.setAttribute("aria-label", "Type your question here");

    //     const sendButton = document.createElement("button");
    //     sendButton.innerText = "Send";
    //     sendButton.style.padding = "10px";
    //     sendButton.style.background = "#007BFF";
    //     sendButton.style.color = "white";
    //     sendButton.style.border = "none";
    //     sendButton.style.borderRadius = "6px";
    //     sendButton.style.cursor = "pointer";
    //     sendButton.style.fontSize = "14px";
    //     sendButton.setAttribute("aria-label", "Send message");

    //     const clearButton = document.createElement("button");
    //     clearButton.innerText = "Clear Chat";
    //     clearButton.style.padding = "10px";
    //     clearButton.style.background = "#FF4444";
    //     clearButton.style.color = "white";
    //     clearButton.style.border = "none";
    //     clearButton.style.borderRadius = "6px";
    //     clearButton.style.cursor = "pointer";
    //     clearButton.style.fontSize = "14px";
    //     clearButton.setAttribute("aria-label", "Clear chat history");

    //     const saveButton = document.createElement("button");
    //     saveButton.innerText = "Save Chat";
    //     saveButton.style.padding = "10px";
    //     saveButton.style.background = "#28A745";
    //     saveButton.style.color = "white";
    //     saveButton.style.border = "none";
    //     saveButton.style.borderRadius = "6px";
    //     saveButton.style.cursor = "pointer";
    //     saveButton.style.fontSize = "14px";
    //     saveButton.setAttribute("aria-label", "Save chat to file");

    //     // Send message
    //     sendButton.onclick = async () => {
    //         const userQuery = inputBox.value.trim();
    //         if (!userQuery) return;

    //         aiResponse.innerHTML += `<p><strong>You:</strong> ${userQuery}</p>`;
    //         sendButton.disabled = true;
    //         sendButton.innerText = "Sending...";

    //         try {
    //             chrome.runtime.sendMessage({ type: "fetchAIResponse", query: userQuery }, (response) => {
    //                 if (chrome.runtime.lastError) {
    //                     throw new Error(chrome.runtime.lastError.message);
    //                 }
    //                 const aiReply = response.reply || "I'm thinking, but couldn't find an answer!";
    //                 const code = response.code || null;
    //                 const explanation = response.explanation || null;
    //                 chatHistory.push({ user: userQuery, ai: aiReply, code, explanation });
    //                 localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
    //                 aiResponse.innerHTML += `
    //                     <div style="margin-bottom: 10px;">
    //                         <p><strong>Agilan AI:</strong> ${aiReply}</p>
    //                         ${code ? `
    //                             <div style="background: #000; padding: 10px; border-radius: 6px; margin-bottom: 10px;">
    //                                 <pre style="font-family: 'Courier New', monospace; margin: 0; color: #fff;">${code}</pre>
    //                             </div>
    //                         ` : ""}
    //                         ${explanation ? `
    //                             <div style="background: #e8f4f8; padding: 10px; border-radius: 6px;">
    //                                 <p><strong>Explanation:</strong> ${explanation}</p>
    //                             </div>
    //                         ` : ""}
    //                     </div>
    //                 `;
    //                 aiResponse.scrollTop = aiResponse.scrollHeight;
    //             });
    //         } catch (error) {
    //             aiResponse.innerHTML += `<p><strong>Error:</strong> ${error.message}</p>`;
    //         } finally {
    //             sendButton.disabled = false;
    //             sendButton.innerText = "Send";
    //         }
    //         inputBox.value = "";
    //     };

    //     // Clear chat history
    //     clearButton.onclick = () => {
    //         chatHistory = [];
    //         localStorage.removeItem("chatHistory");
    //         aiResponse.innerHTML = "";
    //     };

    //     // Save chat to file
    //     saveButton.onclick = () => {
    //         const chatText = chatHistory.map(chat => `You: ${chat.user}\nAgilan AI: ${chat.ai}`).join("\n\n");
    //         const blob = new Blob([chatText], { type: "text/plain" });
    //         const url = URL.createObjectURL(blob);
    //         const a = document.createElement("a");
    //         a.href = url;
    //         a.download = "AgilanAI_ChatHistory.txt";
    //         a.click();
    //         URL.revokeObjectURL(url);
    //     };

    //     // Enter key support
    //     inputBox.addEventListener("keypress", (e) => {
    //         if (e.key === "Enter") {
    //             sendButton.click();
    //         }
    //     });

    //     // Append elements
    //     assistantContainer.appendChild(assistantHeader);
    //     assistantContainer.appendChild(aiResponse);
    //     assistantContainer.appendChild(inputBox);
    //     assistantContainer.appendChild(sendButton);
    //     assistantContainer.appendChild(clearButton);
    //     assistantContainer.appendChild(saveButton);

    //     document.body.appendChild(assistantContainer);
    //     inputBox.focus();
    // }

    // Restore chat state on page load
//     if (localStorage.getItem("chatOpen") === "true") {
//         createAssistant();
//     }
// })();
// (() => {
//     if (document.getElementById("askHelpButton")) return;

//     // Load chat history from localStorage
//     let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];

//     // Create the "Ask Help!" button
//     const askHelpButton = document.createElement("button");
//     askHelpButton.id = "askHelpButton";
//     askHelpButton.innerText = "🧠 Ask Help!";
//     askHelpButton.style.position = "fixed";
//     askHelpButton.style.bottom = "20px";
//     askHelpButton.style.right = "20px";
//     askHelpButton.style.background = "linear-gradient(45deg, #FF7E5F, #FEB47B)";
//     askHelpButton.style.color = "#fff";
//     askHelpButton.style.border = "none";
//     askHelpButton.style.padding = "12px 18px";
//     askHelpButton.style.borderRadius = "12px";
//     askHelpButton.style.fontSize = "16px";
//     askHelpButton.style.cursor = "pointer";
//     askHelpButton.style.transition = "all 0.3s ease-in-out";
//     askHelpButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
//     askHelpButton.style.zIndex = "10000";
//     askHelpButton.style.transform = "scale(0.9)";
//     askHelpButton.setAttribute("aria-label", "Ask for help from Agilan AI");

//     // Hover and Grow Effect
//     askHelpButton.onmouseover = () => {
//         askHelpButton.style.background = "#FF5733";
//         askHelpButton.style.transform = "scale(1.1)";
//     };
//     askHelpButton.onmouseout = () => {
//         askHelpButton.style.background = "linear-gradient(45deg, #FF7E5F, #FEB47B)";
//         askHelpButton.style.transform = "scale(0.9)";
//     };

//     document.body.appendChild(askHelpButton);

//     let assistantContainer = null;

//     // Function to toggle AI chat
//     const toggleAssistant = () => {
//         if (assistantContainer) {
//             document.body.removeChild(assistantContainer);
//             assistantContainer = null;
//             localStorage.setItem("chatOpen", "false");
//         } else {
//             createAssistant();
//             localStorage.setItem("chatOpen", "true");
//         }
//     };

//     askHelpButton.onclick = toggleAssistant;

//     function createAssistant() {
//         assistantContainer = document.createElement("div");
//         assistantContainer.id = "aiAssistantContainer";
//         assistantContainer.style.position = "fixed";
//         assistantContainer.style.bottom = "80px";
//         assistantContainer.style.right = "20px";
//         assistantContainer.style.width = "400px";
//         assistantContainer.style.background = "rgba(0, 123, 255, 0.85)";
//         assistantContainer.style.color = "white";
//         assistantContainer.style.border = "2px solid white";
//         assistantContainer.style.borderRadius = "20px";
//         assistantContainer.style.boxShadow = "0px 6px 15px rgba(255, 255, 255, 0.5)";
//         assistantContainer.style.zIndex = "9999";
//         assistantContainer.style.padding = "12px";
//         assistantContainer.style.fontFamily = "'Arial', sans-serif";
//         assistantContainer.style.display = "flex";
//         assistantContainer.style.flexDirection = "column";
//         assistantContainer.style.gap = "12px";
//         assistantContainer.style.backdropFilter = "blur(12px)";
//         assistantContainer.style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
//         assistantContainer.style.transform = "translateY(20px)";
//         assistantContainer.style.opacity = "0";

//         setTimeout(() => {
//             assistantContainer.style.transform = "translateY(0)";
//             assistantContainer.style.opacity = "1";
//         }, 10);

//         const assistantHeader = document.createElement("div");
//         assistantHeader.style.background = "#001F3F";
//         assistantHeader.style.color = "white";
//         assistantHeader.style.padding = "14px";
//         assistantHeader.style.fontSize = "18px";
//         assistantHeader.style.fontWeight = "bold";
//         assistantHeader.style.textAlign = "center";
//         assistantHeader.style.borderRadius = "18px 18px 0 0";
//         assistantHeader.style.display = "flex";
//         assistantHeader.style.justifyContent = "space-between";
//         assistantHeader.style.alignItems = "center";

//         const title = document.createElement("span");
//         title.innerText = "💡 Agilan AI";

//         const closeButton = document.createElement("button");
//         closeButton.innerText = "❌";
//         closeButton.style.background = "transparent";
//         closeButton.style.border = "none";
//         closeButton.style.color = "white";
//         closeButton.style.cursor = "pointer";
//         closeButton.style.fontSize = "18px";
//         closeButton.setAttribute("aria-label", "Close chat");

//         closeButton.onclick = toggleAssistant;

//         assistantHeader.appendChild(title);
//         assistantHeader.appendChild(closeButton);

//         const aiResponse = document.createElement("div");
//         aiResponse.id = "aiResponse";
//         aiResponse.style.background = "#F0F8FF";
//         aiResponse.style.color = "#333";
//         aiResponse.style.padding = "12px";
//         aiResponse.style.borderRadius = "8px";
//         aiResponse.style.minHeight = "120px";
//         aiResponse.style.maxHeight = "250px";
//         aiResponse.style.overflowY = "auto";
//         aiResponse.style.fontSize = "14px";
//         aiResponse.style.border = "1px solid white";

//         const loadChatHistory = () => {
//             aiResponse.innerHTML = chatHistory.map(chat => `
//                 <div style="margin-bottom: 10px;">
//                     <p><strong>You:</strong> ${chat.user}</p>
//                     ${chat.code ? `
//                         <div style="background: #000; padding: 10px; border-radius: 6px; margin-bottom: 10px;">
//                             <pre style="font-family: 'Courier New', monospace; margin: 0; color: #fff;">${chat.code}</pre>
//                         </div>
//                     ` : ""}
//                     ${chat.explanation ? `
//                         <div style="background: #e8f4f8; padding: 10px; border-radius: 6px;">
//                             <p><strong>Explanation:</strong> ${chat.explanation}</p>
//                         </div>
//                     ` : ""}
//                 </div>
//             `).join("");
//         };
//         loadChatHistory();

//         const inputBox = document.createElement("input");
//         inputBox.type = "text";
//         inputBox.placeholder = "Ask Agilan AI...";
//         inputBox.style.padding = "10px";
//         inputBox.style.border = "2px solid white";
//         inputBox.style.borderRadius = "6px";
//         inputBox.style.width = "calc(100% - 20px)";
//         inputBox.style.fontSize = "14px";
//         inputBox.style.background = "#D4F1F4";
//         inputBox.style.color = "#000";
//         inputBox.setAttribute("aria-label", "Type your question here");

//         const sendButton = document.createElement("button");
//         sendButton.innerText = "Send";
//         sendButton.style.padding = "10px";
//         sendButton.style.background = "#007BFF";
//         sendButton.style.color = "white";
//         sendButton.style.border = "none";
//         sendButton.style.borderRadius = "6px";
//         sendButton.style.cursor = "pointer";
//         sendButton.style.fontSize = "14px";
//         sendButton.setAttribute("aria-label", "Send message");

//         const autoCorrectButton = document.createElement("button");
//         autoCorrectButton.innerText = "Auto Correct";
//         autoCorrectButton.style.padding = "10px";
//         autoCorrectButton.style.background = "#FFC107";
//         autoCorrectButton.style.color = "white";
//         autoCorrectButton.style.border = "none";
//         autoCorrectButton.style.borderRadius = "6px";
//         autoCorrectButton.style.cursor = "pointer";
//         autoCorrectButton.style.fontSize = "14px";
//         autoCorrectButton.setAttribute("aria-label", "Auto correct input");

//         const clearButton = document.createElement("button");
//         clearButton.innerText = "Clear Chat";
//         clearButton.style.padding = "10px";
//         clearButton.style.background = "#FF4444";
//         clearButton.style.color = "white";
//         clearButton.style.border = "none";
//         clearButton.style.borderRadius = "6px";
//         clearButton.style.cursor = "pointer";
//         clearButton.style.fontSize = "14px";
//         clearButton.setAttribute("aria-label", "Clear chat history");

//         const saveButton = document.createElement("button");
//         saveButton.innerText = "Save Chat";
//         saveButton.style.padding = "10px";
//         saveButton.style.background = "#28A745";
//         saveButton.style.color = "white";
//         saveButton.style.border = "none";
//         saveButton.style.borderRadius = "6px";
//         saveButton.style.cursor = "pointer";
//         saveButton.style.fontSize = "14px";
//         saveButton.setAttribute("aria-label", "Save chat to file");

//         // Auto Correct Functionality
//         const autoCorrect = (text) => {
//             // Simple auto-correct logic (you can replace this with a more advanced library)
//             const corrections = {
//                 "teh": "the",
//                 "wrok": "work",
//                 "adn": "and",
//                 "thnaks": "thanks",
//                 "plz": "please",
//                 "u": "you",
//                 "r": "are",
//                 "btw": "by the way",
//                 "gr8": "great",
//                 "lol": "laugh out loud",
//             };

//             return text
//                 .split(" ")
//                 .map((word) => corrections[word.toLowerCase()] || word)
//                 .join(" ");
//         };

//         // Auto Correct Button Click
//         autoCorrectButton.onclick = () => {
//             const correctedText = autoCorrect(inputBox.value);
//             inputBox.value = correctedText;
//         };

//         // Send message
//         sendButton.onclick = async () => {
//             const userQuery = inputBox.value.trim();
//             if (!userQuery) return;

//             aiResponse.innerHTML += `<p><strong>You:</strong> ${userQuery}</p>`;
//             sendButton.disabled = true;
//             sendButton.innerText = "Sending...";

//             try {
//                 chrome.runtime.sendMessage({ type: "fetchAIResponse", query: userQuery }, (response) => {
//                     if (chrome.runtime.lastError) {
//                         throw new Error(chrome.runtime.lastError.message);
//                     }
//                     const aiReply = response.reply || "I'm thinking, but couldn't find an answer!";
//                     const code = response.code || null;
//                     const explanation = response.explanation || null;
//                     chatHistory.push({ user: userQuery, ai: aiReply, code, explanation });
//                     localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
//                     aiResponse.innerHTML += `
//                         <div style="margin-bottom: 10px;">
//                             <p><strong>Agilan AI:</strong> ${aiReply}</p>
//                             ${code ? `
//                                 <div style="background: #000; padding: 10px; border-radius: 6px; margin-bottom: 10px;">
//                                     <pre style="font-family: 'Courier New', monospace; margin: 0; color: #fff;">${code}</pre>
//                                 </div>
//                             ` : ""}
//                             ${explanation ? `
//                                 <div style="background: #e8f4f8; padding: 10px; border-radius: 6px;">
//                                     <p><strong>Explanation:</strong> ${explanation}</p>
//                                 </div>
//                             ` : ""}
//                         </div>
//                     `;
//                     aiResponse.scrollTop = aiResponse.scrollHeight;
//                 });
//             } catch (error) {
//                 aiResponse.innerHTML += `<p><strong>Error:</strong> ${error.message}</p>`;
//             } finally {
//                 sendButton.disabled = false;
//                 sendButton.innerText = "Send";
//             }
//             inputBox.value = "";
//         };

//         // Clear chat history
//         clearButton.onclick = () => {
//             chatHistory = [];
//             localStorage.removeItem("chatHistory");
//             aiResponse.innerHTML = "";
//         };

//         // Save chat to file
//         saveButton.onclick = () => {
//             const chatText = chatHistory.map(chat => `You: ${chat.user}\nAgilan AI: ${chat.ai}`).join("\n\n");
//             const blob = new Blob([chatText], { type: "text/plain" });
//             const url = URL.createObjectURL(blob);
//             const a = document.createElement("a");
//             a.href = url;
//             a.download = "AgilanAI_ChatHistory.txt";
//             a.click();
//             URL.revokeObjectURL(url);
//         };

//         // Enter key support
//         inputBox.addEventListener("keypress", (e) => {
//             if (e.key === "Enter") {
//                 sendButton.click();
//             }
//         });

//         // Append elements
//         assistantContainer.appendChild(assistantHeader);
//         assistantContainer.appendChild(aiResponse);
//         assistantContainer.appendChild(inputBox);
//         assistantContainer.appendChild(sendButton);
//         assistantContainer.appendChild(autoCorrectButton);
//         assistantContainer.appendChild(clearButton);
//         assistantContainer.appendChild(saveButton);

//         document.body.appendChild(assistantContainer);
//         inputBox.focus();
//     }

//     // Restore chat state on page load
//     if (localStorage.getItem("chatOpen") === "true") {
//         createAssistant();
//     }
// })();
