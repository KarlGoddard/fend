function inputChecker(x) {
    console.log("::: Running checkForName :::", x);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(x)) {
        alert("Welcome, Captain!")
    }
}

export { inputChecker }
