const genAPI = (userInput, callback) => {
  fetch(`https://${API_HOME}/gen?text=${userInput}`, {
      headers: {
          'ngrok-skip-browser-warning': 'true'
      },
      method: 'GET',
  }).then((response) => response.text())
  .then(callback)
}