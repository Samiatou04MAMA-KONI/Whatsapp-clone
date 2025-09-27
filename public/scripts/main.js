console.log("✅ main.js chargé !");

// ====================
// Données des discussions
// ====================
const discussionsData = {
    'chat-line': {
        name: 'Line',
        avatar: '/images/line.jpeg',
        messages: [
            { text: 'Salut ! Comment ça va ?', sender: 'contact', time: '14:30' },
            { text: 'Ça va bien merci ! Et toi ?', sender: 'me', time: '14:32' },
            { text: 'Super ! On se voit ce soir ?', sender: 'contact', time: '14:35' }
        ]
    },
    'chat-georges': {
        name: 'Georges',
        avatar: '/images/georges.jpeg',
        messages: [
            { text: 'Tu as vu le match hier ?', sender: 'contact', time: '20:15' },
            { text: 'Oui ! Quel match incroyable !', sender: 'me', time: '20:18' }
        ]
    },
    'chat-carine': {
        name: 'Carine',
        avatar: '/images/carine.jpeg',
        messages: [
            { text: 'N\'oublie pas notre rendez-vous demain', sender: 'contact', time: '16:45' },
            { text: 'Bien sûr, à quelle heure déjà ?', sender: 'me', time: '16:50' },
            { text: 'À 14h au café habituel', sender: 'contact', time: '16:52' }
        ]
    },
    'chat-marie-paul': {
        name: 'Marie',
        avatar: '/images/marie-paul.jpeg',
        messages: [
            { text: 'Merci pour ton aide aujourd\'hui !', sender: 'contact', time: '18:20' }
        ]
    },
    'chat-vital': {
        name: 'Vital',
        avatar: '/images/vital.jpeg',
        messages: [
            { text: 'La réunion est reportée à vendredi', sender: 'contact', time: '09:30' },
            { text: 'Parfait, merci pour l\'info', sender: 'me', time: '09:35' }
        ]
    },
    'chat-sid': {
        name: 'Sid',
        avatar: '/images/sid.jpeg',
        messages: [
            { text: 'Tu viens à la fête samedi ?', sender: 'contact', time: '15:10' }
        ]
    },
    'chat-gaelle': {
        name: 'Gaelle',
        avatar: '/images/gaelle.jpeg',
        messages: [
            { text: 'J\'ai trouvé le livre que tu cherchais', sender: 'contact', time: '12:45' },
            { text: 'Génial ! Où l\'as-tu trouvé ?', sender: 'me', time: '12:50' }
        ]
    },
    'chat-maya': {
        name: 'Maya',
        avatar: '/images/maya.jpeg',
        messages: [
            { text: 'Le projet avance bien !', sender: 'contact', time: '11:20' }
        ]
    },
    'chat-carl': {
        name: 'Carl',
        avatar: '/images/carl.jpeg',
        messages: [
            { text: 'On mange ensemble ce midi ?', sender: 'contact', time: '10:30' }
        ]
    },
    'chat-toni': {
        name: 'Toni',
        avatar: '/images/toni.jpeg',
        messages: [
            { text: 'Bonne journée !', sender: 'contact', time: '08:00' },
            { text: 'Merci, toi aussi !', sender: 'me', time: '08:15' }
        ]
    },
    'chat-danielle': {
        name: 'Danielle',
        avatar: '/images/danielle.jpeg',
        messages: [
            { text: 'Tu as pu terminer tous les devoir demandés pas le prof?', sender: 'contact', time: '14:43' },
            { text: 'Oui oui merci de demander et de ton coté?', sender: 'me', time: '14:46' }
        ]
    }
};

// Variable pour stocker la discussion active
let currentChat = null;

// ====================
// Affichage d’un chat
// ====================
function displayChat(chatId) {
    const chatContainer = document.querySelector('.chat');
    const discussionData = discussionsData[chatId];
    if (!discussionData) return;

    currentChat = chatId;

    // En-tête du chat
    const chatHeader = `
        <div class="chat-header" style="display:flex; justify-content:space-between; width:100%;">
            <div style="display:flex;align-items:center;gap:10px;">
                <i class="fa-solid fa-comment-dots"></i>
                <img src="${discussionData.avatar}" alt="${discussionData.name}" width="40" height="40" style="border-radius:50%;">
                <h3 style="font-size:16px;color:#333;">${discussionData.name}</h3>
            </div>
            <div style="display:flex;align-items:center;gap:15px;font-size:18px;color:#555;">
                <i class="fa-solid fa-video" style="cursor:pointer;font-size:17px;"></i>
                <i class="fa-solid fa-phone" style="cursor:pointer;font-size:17px;"></i>
                <i class="fa-solid fa-magnifying-glass" style="cursor:pointer;font-size:17px;"></i>
            </div>
        </div>
    `;

    // Messages
    const messagesHtml = discussionData.messages.map(message => `
        <div class="message ${message.sender}" style="margin-bottom:10px;display:flex;${message.sender === 'me' ? 'justify-content:flex-end;' : 'justify-content:flex-start;'}">
            <div style="max-width:50%;padding:8px 12px;border-radius:15px;${message.sender === 'me'
                ? 'background-color:#dcf8c6;margin-left:30%;'
                : 'background-color:white;margin-right:30%;box-shadow:0 1px 2px rgba(0,0,0,0.1);'}">
                <p style="margin:0;font-size:14px;line-height:1.4;word-break:break-all;overflow-wrap:break-word;white-space:pre-wrap;">${message.text}</p>
                <span style="font-size:11px;color:#999;float:right;margin-top:2px;">${message.time}</span>
            </div>
        </div>
    `).join('');

    // Zone de saisie
    const inputArea = `
        <div class="chat-input" style="display:flex;align-items:center;gap:10px;padding:10px 0;width:100%;">
            <button style="background:none;border:none;cursor:pointer;font-size:16px;color:#555;"><i class="fa-regular fa-face-smile"></i></button>
            <button style="background:none;border:none;cursor:pointer;font-size:14px;color:#555;margin-left:8px;"><i class="fa-solid fa-paperclip"></i></button>
            <input type="text" id="message-input" placeholder="Tapez un message..." style="flex:1;padding:10px 15px;border:none;border-radius:20px;outline:none;font-size:14px;">
            <button id="send-button" style="background-color:#fefefe;color:rgb(69,69,69);border:none;padding:10px 15px;border-radius:50%;cursor:pointer;display:none;align-items:center;justify-content:center;"><i class="fa-solid fa-paper-plane"></i></button>
            <button id="voice-button" style="background-color:#fefefe;color:rgb(69,69,69);border:none;padding:10px 15px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-microphone"></i></button>
        </div>
    `;

    // Injecter dans le conteneur
    chatContainer.innerHTML = `
        ${chatHeader}
        <div class="messages-container" style="flex:1;overflow-y:auto;padding:10px 20px;height:85%;">${messagesHtml}</div>
        ${inputArea}
    `;

    // Bouton retour sur mobile
    addCommentIconListener();

    // Événements messages
    setupMessageInput();
}

// ====================
// Retour en mode mobile
// ====================
function addCommentIconListener() {
    const commentIcon = document.querySelector(".chat-header .fa-comment-dots");
    const discussionsDiv = document.querySelector(".discussions");
    const chatContainer = document.querySelector(".chat");

    if (!commentIcon || !discussionsDiv || !chatContainer) return;

    commentIcon.addEventListener("click", () => {
        if (window.innerWidth <= 670) {
            discussionsDiv.style.display = "block";
            chatContainer.style.display = "none";
            discussionsDiv.scrollIntoView({ behavior: "smooth" });
        }
    });
}

// ====================
// Input et envoi message
// ====================
function setupMessageInput() {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const voiceButton = document.getElementById('voice-button');
    if (!messageInput || !sendButton) return;

    messageInput.addEventListener('input', (e) => {
        const hasText = e.target.value.trim().length > 0;
        sendButton.style.display = hasText ? 'flex' : 'none';
        voiceButton.style.display = hasText ? 'none' : 'block';
    });

    const sendMessage = () => {
        const messageText = messageInput.value.trim();
        if (!messageText || !currentChat) return;

        const currentTime = new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

        discussionsData[currentChat].messages.push({ text: messageText, sender: 'me', time: currentTime });

        messageInput.value = '';
        sendButton.style.display = 'none';
        if (voiceButton) voiceButton.style.display = 'block';

        displayChat(currentChat);
        renderDiscussionsList();

        setTimeout(() => {
            const messagesContainer = document.querySelector('.messages-container');
            if (messagesContainer) messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 100);
    };

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });

    messageInput.focus();
}

// ====================
// Sélection d’une discussion
// ====================
function setupDiscussionSelection() {
    const discussionElements = document.querySelectorAll('.list-discussions > div');
    if (discussionElements.length === 0) return;

    discussionElements.forEach(discussionElement => {
        discussionElement.addEventListener('click', () => {
            const discussionP = discussionElement.querySelector('.discussion');
            const chatId = discussionP ? discussionP.getAttribute('data-chat') : null;
            if (!chatId) return;

            discussionElements.forEach(d => d.classList.remove('active-discussion'));
            discussionElement.classList.add('active-discussion');

            // En mode mobile : masquer la liste et montrer le chat
            if (window.innerWidth <= 670) {
                document.querySelector('.discussions').style.display = "none";
                document.querySelector('.chat').style.display = "block";
            }

            displayChat(chatId);
        });
        discussionElement.style.cursor = 'pointer';
    });
}

// ====================
// Recherche discussions
// ====================
function setupSearch() {
    const searchInput = document.getElementById('search');
    const discussionElements = document.querySelectorAll('.list-discussions > div');
    const noResults = document.getElementById('no-results');
    if (!searchInput || discussionElements.length === 0) return;

    const searchContainer = searchInput.parentElement;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        let matchFound = false;

        searchContainer.style.borderBottom = searchTerm.trim().length > 0 ? '2px solid #4caf50' : '1px solid #ccc';

        discussionElements.forEach(element => {
            const discussionNameElement = element.querySelector('.discussion');
            if (discussionNameElement) {
                const discussionName = discussionNameElement.textContent.toLowerCase();
                if (discussionName.includes(searchTerm)) {
                    element.style.display = 'flex';
                    matchFound = true;
                } else {
                    element.style.display = 'none';
                }
            }
        });

        if (noResults) noResults.style.display = matchFound ? 'none' : 'block';
    });
}

// ====================
// Liste des discussions
// ====================
function renderDiscussionsList() {
    const listContainer = document.querySelector('.list-discussions');
    if (!listContainer) return;

    Array.from(listContainer.children).forEach(child => {
        if (child.id !== 'no-results') child.remove();
    });

    Object.entries(discussionsData).forEach(([chatId, data]) => {
        const lastMessage = data.messages.length > 0 ? data.messages[data.messages.length - 1].text : 'Aucun message';
        const preview = lastMessage.length > 30 ? lastMessage.substring(0, 30) + '...' : lastMessage;

        const div = document.createElement('div');
        div.classList.add('discussion-item');
        div.setAttribute('data-chat', chatId);

        div.innerHTML = `
            <img src="${data.avatar}" alt="${data.name}" width="35" height="35" style="border-radius:50%;margin-right:10px;">
            <div>
                <p class="discussion" data-chat="${chatId}" style="margin:0;font-size:15px;color:rgb(69,69,69);">${data.name}</p>
                <span class="last-message" style="font-size:12px;color:#777;">${preview}</span>
            </div>
        `;

        listContainer.appendChild(div);
    });

    setupDiscussionSelection();
}

// ====================
// Initialisation
// ====================
document.addEventListener('DOMContentLoaded', () => {
    renderDiscussionsList();
    setupSearch();

    // Styles injectés
    const style = document.createElement('style');
    style.textContent = `
        .active-discussion { background-color: #e8f5e8 !important; border-radius: 4px; }
        .discussion-item div:hover { background: transparent; }
        .messages-container { background: url('/images/font1.jpg') no-repeat; background-size: cover; background-position: center; padding: 15px; border-radius: 10px; width: 100%; }
        .messages-container::-webkit-scrollbar { width: 3px; }
        .messages-container::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .messages-container::-webkit-scrollbar-thumb { background: #c1c1c1; border-radius: 10px; }
        .messages-container::-webkit-scrollbar-thumb:hover { background: #a8a8a8; }
        .chat-input button:hover { background-color: #128c7e; color: white; }
    `;
    document.head.appendChild(style);
});
window.addEventListener('resize', () => {
    const discussionsDiv = document.querySelector('.discussions');
    const chatContainer = document.querySelector('.chat');  
    if (window.innerWidth > 670) {
        discussionsDiv.style.display = "block";
        chatContainer.style.display = "block";
    }
});
