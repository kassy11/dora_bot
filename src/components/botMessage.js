const createBotElm = (text, iconURL) => {
    const msgElm = document.createElement("li")
    msgElm.classList.add("msg-box")

    const icon = document.createElement("img")
    icon.classList.add("img-circle")
    icon.src = iconURL

    const msgP = document.createElement("p")
    msgP.classList.add("msg")
    msgP.textContent = text

    msgElm.appendChild(icon)
    msgElm.appendChild(msgP)
    
    return msgElm
}