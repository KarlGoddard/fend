function handleSubmit(event) {

    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("urlinput").value;

    if (Client.inputChecker(formText)) {
    document.getElementById('outcome').innerHTML = 'Valid url.  Please wait while we retrieve the analysis';

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
            const ScoreVal = ScoreText(res.score_tag);
            document.getElementById('score').innerHTML = ScoreVal;
            document.getElementById('agreement').innerHTML = res.agreement;
            document.getElementById('subjectivity').innerHTML = res.subjectivity;
            document.getElementById('confidence').innerHTML = res.confidence;
            document.getElementById('irony').innerHTML = res.irony;
            document.getElementById('outcome').innerHTML = 'Analysis Complete';
            return true;
          });

    } else {
    document.getElementById('outcome').innerHTML = 'Unable to analysis the url provided.  Please retry your entry ensuring it is a valid url starting with http: or https:';
    return false;
    }

}

function ScoreText(scoreReturn) {
  if (scoreReturn == 'P+' || scoreReturn == 'P') {
    return 'POSITIVE';
  } else if (scoreReturn == 'N+' || scoreReturn == 'N') {
    return 'NEGATIVE';
  } else {
    return 'NEUTRAL/Non-SENTIMENTAL'
  }
}

export { handleSubmit }
