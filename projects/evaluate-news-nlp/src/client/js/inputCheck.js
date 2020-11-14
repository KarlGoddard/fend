function inputChecker(url) {
    console.log("::: Running check valid input :::", url);

    const regcheck = /http/i;

    if(regcheck.test(url)) {
        alert("it passes!");
        console.log("it passed");
        console.log(checkurl);
    } else {
      console.log('else statement');
    }
}

export { inputChecker }
