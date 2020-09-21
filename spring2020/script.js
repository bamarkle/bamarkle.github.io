topicList = ["How to play Dungeons & Dragons",
            "How to shop for a horse",
            "How to remove a stain from a white shirt",
            "How to bathe a cat without bloodshed",
            "How to fold a fitted sheet",
            "How to hang glide",
            "How to cook the perfect steak",
            "How to change the oil in your car",
            "How to play quidditch",
            "How to simply walk into Mordor",
            "How to safely rub a grizzly bear's tummy",
            "How to skip class without getting penalized",
            "How to appreciate death metal music",
            "The importance of dental hygiene",
            "The influence of Sesame Street on American children",
            "The positive effects of social media",
            "The connections between religion and hip hop music",
            "Prove that bigfoot is real",
            "How to fly an airplane",
            "Proper lasagna preparation",
            "How to avoid a speeding a ticket",
            "How to play fantasy football",
            "How to get into mountain climbing",
            "How to appreciate video games as an artistic medium",
            "The best way to cook a steak",
            "First aid for a sports injury",
            "What to do if you are caught in a hurricane"
           ]

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
