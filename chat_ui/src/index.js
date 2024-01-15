const ICON_URL = "./assets/icon.jpg"

// TODO: ngrokから発行されたURLを設定する
const API_HOME = ""
let isWaiting = false

function sendMessage() {
    if (isWaiting) {
        alert('返信待ちです')
        return
    }

    const inputBox = document.getElementById("msg-input")
    const inputText = inputBox.value

    if(! inputBox.value){
        alert('テキストを入力してください')
        return
    }

    const messageElms = document.getElementById("chat-area")

    const userMsgElm = createUserElm(inputText)
    messageElms.appendChild(userMsgElm)

    const botMsgElm = createBotElm(".....", ICON_URL)
    messageElms.appendChild(botMsgElm)

    const gen_callback = data => {
        const botMsgText = cleanResText(data)
        botMsgElm.getElementsByClassName("msg")[0].textContent = botMsgText
        scrollTop(messageElms)
        isWaiting = false
    }
    isWaiting = true
    genAPI(inputText, gen_callback)

    scrollTop(messageElms)

    inputBox.value = ""
}

window.addEventListener('keydown', (ev) => {
    if (ev.shiftKey) {
        if (ev.code === "Enter") {
            sendMessage()
        }
    }
})

window.onload = () => {
    const submitButton = document.getElementById("submit-button")
    submitButton.addEventListener('click', sendMessage)
}