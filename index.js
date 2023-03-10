function introduction(name) {
    const string = `Hi, my name is ${name}.`
    return string
}    

function introductionWithLanguage(name, language) {
    const string = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return string
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    const string = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return string
}
