document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleChatbot");
    const botContainer = document.getElementById("bot-container");

    const isChatbotOpen = localStorage.getItem("chatbotOpen") === "true";

    if (isChatbotOpen) {
        botContainer.style.display = "block";
        toggleButton.innerText = "Close AI Bot";
    } else {
        botContainer.style.display = "none";
        toggleButton.innerText = "Open AI Bot";
    }

    toggleButton.addEventListener("click", function () {
        if (botContainer.style.display === "none") {
            botContainer.style.display = "block";
            toggleButton.innerText = "Close AI Bot";
            localStorage.setItem("chatbotOpen", "true");
        } else {
            botContainer.style.display = "none";
            toggleButton.innerText = "Open AI Bot";
            localStorage.setItem("chatbotOpen", "false");
        }
    });
});