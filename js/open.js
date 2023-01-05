function rules() {
    var elhtml = document.querySelector('.rules')
    if (elhtml.innerHTML === "How many people can play?") {
        elhtml.innerHTML = "Most escape room games have a maximum capacity of 6 to 8 players. There are certainly outliers out there, especially if you are in a densely populated city or tourist destination. For those larger more touristy venues you may see as many as 12 players required at a minimum!";
    } else {
        elhtml.innerHTML = "How many people can play?"

    }

}
function rules2() {
    var elhtml = document.querySelector('.rules2')
    if (elhtml.innerHTML === "How long do they take?") {
        elhtml.innerHTML = "Our Play Anytime Escape Games take around 60-90 minutes on average. However, there is no time limit to complete your game.";
    } else {
        elhtml.innerHTML = "How long do they take?"

    }

}
function rules3() {
    var elhtml = document.querySelector('.rules3')
    if (elhtml.innerHTML === "What age is best for escape rooms?") {
        elhtml.innerHTML = "You will find that most Escape Rooms will accept children of all ages, but with a recommended minimum age of 10 years old for maximum engagement and understanding.";
    } else {
        elhtml.innerHTML = "What age is best for escape rooms?"

    }

}