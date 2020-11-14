function inputCheck(zzz) {
    console.log("::: Running checkForName :::", zzz);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(zzz)) {
        alert("Welcome, Captain!")
    }
}

export { inputCheck }
