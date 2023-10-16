const createUserElm = (text) => {
    const msgElm = document.createElement("li")
    msgElm.classList.add("msg-box", "msg-box-user")

    const msgP = document.createElement("p")
    msgP.classList.add("msg", "msg-user")
    msgP.textContent = text

    msgElm.appendChild(msgP)

    return msgElm
}