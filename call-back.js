function welcomeMessage(name, greetHandler) {
    // console.log(greetHandler);
    greetHandler(name)
}
function greetMorning(name) {
    console.log('Good Morning', name)
}
function greetAfternoon(name) {
    console.log('Good Afeternoon', name)
}
welcomeMessage('shahadad', greetMorning)
welcomeMessage('rohid', greetAfternoon)