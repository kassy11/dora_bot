const ICON_URL = "./assets/icon.jpg"
const API_HOME = "acb2-35-243-159-241.ngrok-free.app"
let isWaiting = false

function sendMessage() {
    if (isWaiting) {
        alert('返信待ちです')
        return
    }

    // 入力ボックスの値取得
    const inputBox = document.getElementById("msg-input")
    const inputText = inputBox.value

    if(! inputBox.value){
        alert('テキストを入力してください')
        return
    }

    const messageElms = document.getElementById("chat-area")

    // ユーザーメッセージの追加
    const userMsgElm = createUserElm(inputText)
    messageElms.appendChild(userMsgElm)

    // ボットメッセージの追加
    const botMsgElm = createBotElm(".....", ICON_URL)
    messageElms.appendChild(botMsgElm)

    // gpt-APIと通信
    const gen_callback = data => {
        const botMsgText = cleanResText(data)
        // 返ってきたメッセージで置換
        botMsgElm.getElementsByClassName("msg")[0].textContent = botMsgText
        scrollTop(messageElms)
        isWaiting = false
    }
    isWaiting = true
    genAPI(inputText, gen_callback)

    scrollTop(messageElms)

    inputBox.value = ""
}

// key event
window.addEventListener('keydown', (ev) => {
    if (ev.shiftKey) {
        if (ev.code === "Enter") {
            sendMessage()
        }
    }
})

// 画面ロード完了時
window.onload = () => {
    // 送信機能を付与
    const submitButton = document.getElementById("submit-button")
    submitButton.addEventListener('click', sendMessage)
}