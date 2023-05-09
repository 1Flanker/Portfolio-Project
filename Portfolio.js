/* This is a random message generator. made only in Javascript and is meant to call a function of and action somone is doing
For example when the function is called, and example output will be (You are "Strving") or imply that you will get a fortune of somthing */

const generatePhrase = () => {

    const phrase = {
        currentEffects: ['You are Strving', 'You have been hit', 'You desperately need sleep'],
        foodPhrase: ['yucky', 'yummy', 'good', 'ok', 'ehh']
    };


    let randomNum = Math.floor(Math.random() * (Object.keys(phrase).length));



    console.log('random number ' + randomNum)
    console.log(Object.keys(phrase).length);
    console.log(Object.keys(phrase.currentEffects).length)


    if (randomNum === 0)
    {
        let randomCurrentEffects = Math.floor(Math.random() * (Object.keys(phrase.currentEffects).length))
        return (phrase.currentEffects[randomCurrentEffects]);
    }
    if (randomNum === 1)
    {
        let randomFoodPhrase = Math.floor(Math.random() * (Object.keys(phrase.foodPhrase).length))
        return (`The food was ${(phrase.foodPhrase[randomFoodPhrase])}`);
    }
}
console.log(generatePhrase());

