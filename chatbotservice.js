const responseObj = {
    hello: "Hey! How are you doing",
    hey: "hey bro",
    today: new Date().toDateString(),
    Today: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
    Time: new Date().toLocaleTimeString(),
    Timetoday: new Date().toLocaleTimeString(),
    Hello: "Hey! How are you doing",
    HELLO: "Hey! How are you doing",
    Hey: "hey bro",HEY: "hey bro", 
    "hi you good ?": "I'm fine, thank you",
    "hi you good": "I'm fine, thank you",
    "i'm fine i need help":"what do you want help ?",
    "im fine i need help":"what do you want help ?",
    "i am fine i need help":"what do you want help ?",
    
};

const fetchResponse = (userInput) => {
        return new Promise((res, reject) => {
            try{
                setTimeout(() => {
                    res(responseObj[userInput]);
                }, 800);
            }
            catch(error){
                reject(error);
            }
        });
};
const chatBotService={
    getBotResponse(userInput){
     return fetchResponse(userInput);
    },
};
export default chatBotService;