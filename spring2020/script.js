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

audienceList = ["Your boss",
                "Your teacher",
                "Your best friend",
                "Your a five year old child",
                "An alien from outer space",
                "Your grandmother",
                "President of the United States",
                "Someone who knows absolutely nothing about the topic",
                "A caveman",
                "A hermit who hasn't left their house in fifty years",
                "An expert in the field",
                "A talking horse, i.e., Mr. Ed",
                "A strict rule-follower",
                "A lazy good-for-nothing",
                "Batman (or the Joker)"]

genreList = ["Poem",
            "A dramatic production (or musical)",
            "Epic",
            "YouTube Video",
            "Podcast",
            "Narrative",
            "Essay",
            "Business Letter",
            "Documentary",
            "Collage",
            "Song",
            "Web Page",
            "Video Game"]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

function shuffle() {
    topicLength = topicList.length;
    audienceLength = audienceList.length;
    genreLength = genreList.length;
    xTopic = getRandomInt(topicLength);
    xAudience = getRandomInt(audienceLength);
    xGenre = getRandomInt(genreLength);
    document.getElementById("shufTopic").innerHTML = topicList[xTopic];
    document.getElementById("shufAudience").innerHTML = audienceList[xAudience];
    document.getElementById("shufGenre").innerHTML = genreList[xGenre];
}
