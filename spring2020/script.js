topicList = ["Buy a horse",
            "Buy a house",
            "Eat a dick",
            "Monkey around"]

audienceList = ["Your auntie",
                "Your uncle",
                "Your daddy",
                "Your momma"]

genreList = ["Shopping list",
            "Poem",
            "Musical",
            "Epic"]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

function shuffle() {
    xTopic = getRandomInt(4);
    xAudience = getRandomInt(4);
    xGenre = getRandomInt(4);
    document.getElementById("shufTopic").innerHTML = topicList[xTopic];
    document.getElementById("shufAudience").innerHTML = audienceList[xAudience];
    document.getElementById("shufGenre").innerHTML = genreList[xGenre];
}