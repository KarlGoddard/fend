function handleSubmit(event) {

    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('txt').value

    Client.checkForName(formText)

    //document.getElementById('results').innerHTML = 'Your input was ' + formText

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    fetch('http://localhost:8081/tbc',{
      method: "POST",
      dataType: "TEXT",
      credentials: "same-origin",
      headers: {
      "Content-Type": "text/plain",
      },
      body: formText,
    });
    try {
      const newData = await response.json();
      return newData;
      console.log('it worked');
    } catch (error) {
      console.log('it did not work');
    }
    //   .then(res => res.json())
    //   .then(function(res) {
    //       document.getElementById('results').innerHTML = 'it worked'
    // })
}

export { handleSubmit }
