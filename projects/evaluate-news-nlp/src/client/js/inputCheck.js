function inputChecker(url) {
    console.log("::: Running check valid input :::", url);

//regcheck devised to ensure the url starts with http: or https:
    const regcheck = /^(http|https):/;

//if passes regcheck, then the APIcall is made.
//true or false also dictate the status or retry notification that is posted
    if(regcheck.test(url)) {
      return true;
    } else {
      return false;
    }

}

export { inputChecker }
