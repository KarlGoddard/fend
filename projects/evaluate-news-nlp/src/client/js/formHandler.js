function handleSubmit(event) {

    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("txtinput").value;

    //Client.checkForName(formText)

    //console.log(formText)

    document.getElementById('results').innerHTML = 'Your input was ' + formText

    console.log("::: Form Submitted :::")

    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })

    fetch('http://localhost:8081/analysis',{
    method: "POST",
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'text/plain'
    },
    body: formText
  })
    .then((res) => res.json())
    .then(function(res) {
        document.getElementById('results1').innerHTML = res.status.remaining_credits;
  })
}

export { handleSubmit }
