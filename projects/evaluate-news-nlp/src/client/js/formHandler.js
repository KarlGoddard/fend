function handleSubmit(event) {

    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("urlinput").value;

    //Client.inputCheck(formText)

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
        document.getElementById('results').innerHTML = 'agreement = ' + res.agreement;
        document.getElementById('results1').innerHTML = 'subjectivity = ' + res.subjectivity;
  })
}

export { handleSubmit }
