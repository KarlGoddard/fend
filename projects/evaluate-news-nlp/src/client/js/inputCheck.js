function inputChecker(url) {
    console.log("::: Running check valid input :::", url);

    const regcheck = '^(http|https)://';

    if(regcheck.test(url)) {
        alert("it passes!");
        return true;
    } else {
      alert("it fails!");
      return false;
    }
console.log('result was ' + regcheck.test(url));
}

export { inputChecker }
