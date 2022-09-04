const chatBody= document.querySelector(".chat-body");
const txtInput= document.querySelector("#txtinput")
const send= document.querySelector(".send")

send.addEventListener("click", () => UserMessage())
txtInput.addEventListener("keyup", (e) => {
    if(e.keyCode === 13) {
        UserMessage()
    }
})
const UserMessage = () => {
   const userInput= txtInput.value;
   MessageEle(userInput,"user")
   txtInput.value= ""
   setTimeout(() => {
    renderChatResponse(userInput)
   },1000)
}

const renderChatResponse = (userInput) => {
    const res = chatResponse(userInput)
    MessageEle(res)
}

const MessageEle = (txt,type) => {
    let clasName= "user-message";
    if(type !== "user"){
        clasName = "chatbot-message"
    }
     const messageEle = document.createElement("div")
     const txtNode= document.createTextNode(txt);
     messageEle.classList.add(clasName)
     messageEle.append(txtNode)
     chatBody.append(messageEle )
}


const chatResponse = (userInput) => {
    return responseObj[userInput]=== undefined ? "Please try something" : responseObj[userInput]
}