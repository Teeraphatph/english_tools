import chatBotService from "./chatbotservice.js";
const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");
const loadingEle=document.querySelector(".loading");

send.addEventListener("click",()=> renderUserMessage());

txtInput.addEventListener("keyup" , (event) => {
    if(event.keyCode === 13) {
        renderUserMessage();
    }
});


const renderUserMessage = () => {
    const userInput = txtInput.value;
    renderMessageEle(userInput, "user");
    txtInput.value="";
    toggleLoading(false);
    renderChatbotResponse(userInput);

};

const renderChatbotResponse = (userInput) => {
    const res = getChatbotResponse(userInput);
};

const renderMessageEle = (txt, type) => {
    let className = "user-message";
    
    const messageEle = document.createElement("div");
    const txtNode = document.createTextNode(txt);
    
    messageEle.append(txtNode);

    if(type !== "user"){
        className = "chatbot-message";
        messageEle.classList.add(className);
        const BotResponseContainer = document.createElement("div");
        BotResponseContainer.classList.add("bot-response-container");
        const botImg = document.createElement("img");
        botImg.setAttribute("src","code/Untitled-1.png");
        BotResponseContainer.append(botImg);
        BotResponseContainer.append(messageEle);
        chatBody.append(BotResponseContainer);
    }else{
        messageEle.classList.add(className);
        chatBody.append(messageEle);
    }

    
};

const getChatbotResponse = (userInput) => {
    chatBotService
    .getBotResponse(userInput)
    .then((response)=>{
        renderMessageEle(response);
        setScrollPosition();
        toggleLoading(true);
    })
    .catch(error=>{
        toggleLoading(true);
    });
};

const setScrollPosition = () => {
    if(chatBody.scrollHeight > 0){
        chatBody.scrollTop=chatBody.scrollHeight;
    }
};

const toggleLoading=(show)=>loadingEle.classList.toggle("hide", show);
