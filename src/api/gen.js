const genAPI = (sendPrompt, callback, max_new_tokens = 64) => {
    fetch(`https://${API_HOME}/gen?text=${sendPrompt}&max_new_tokens=${max_new_tokens}`, {
        headers: {
            'ngrok-skip-browser-warning': 'true'
        },
        method: 'GET',
    }).then((response) => response.text())
    .then(callback)
}