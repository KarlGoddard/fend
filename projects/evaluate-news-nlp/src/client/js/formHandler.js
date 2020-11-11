function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('txt').value

    Client.checkForName(formText)

    document.getElementById('results').innerHTML = 'Your input was ' + formText

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results1').innerHTML = res.message
    })
}

export { handleSubmit }
