topic = 1;
audience = 0;
genre = 1;


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
            "What to do if you are caught in a hurricane",
            "Identify why global warming is a serious issue",
            "Describe how gravity works",
            "Discuss humanity's plans to go to Mars",
            "How to start daytrading stocks",
            "How to become politically active in your community",
            "How to steal cookies from the cookie jar without getting caught",
            "How to milk a cow",
            "The ethical considerations of cloning",
            "The safety of GMO foods",
            "The origin story of your favorite comic book character",
            "The impact of renewable energy on jobs in the United States",
            "How to win at Monopoly (or another board game of your choice)",
            "The ethics of pirating music/software online",
            "Things to consider when buying a new car",
            "How to sew a skirt",
            "How to contour your makeup (my wife says this is a thing - don't ask me)",
            "Preparing your dog for a dog show",
            "Preparing for a major examination",
            "How to choose a diet",
            "How to choose a location for a first date",
            "How to break up with someone you've been dating for more than a year",
            "How to meditate",
            "Choosing a major in college",
            "How to put out an electrical fire",
            "How to shear a sheep",
            "How to make your favorite recipe",
            "Choosing where to throw your birthday party",
            "How to drive a stick shift",
            "Choosing a roommate",
             "How to avoid awkward conversations",
             "How to break the ice",
             "How to do your taxes",
             "Safely removing a venomous snake from your home",
             "Prove that the Loch Ness Monster is real",
             "How to choose a sherpa for your next mountain climbing adventure",
             "Selecting the perfect Valentine's Day present",
             "How to throw a perfect spiral",
             "Current fashion trends",
             "Tipping culture outside of America",
             "How to roast a chicken",
             "The unspoken rules of public transportation etiquette",
             "A description of how Saturn got its rings",
             "A primer on the big bang theory (not the TV show)",
             "How atomic energy works",
             "How to tame a tiger",
             "Why video games are a good hobby",
             "How to compose a piece of music",
             "Choosing a travel destination"
            ]
audienceList = ["Your boss",
                    "Your teacher",
                    "Your best friend",
                    "A five year old child",
                    "An alien from outer space",
                    "Your grandmother",
                    "President of the United States",
                    "Someone who doesn't even know what your topic is",
                    "A hermit who hasn't left their house in fifty years",
                    "An expert in the field",
                    "A talking horse, i.e., Mr. Ed",
                    "A strict rule-follower",
                    "A lazy good-for-nothing",
                    "Batman (or the Joker)",
                    "A potential employer",
                    "A favorite book character",
                    "Your future self",
                    "A historical figure",
                    "A climate change skeptic",
                    "A Nobel laureate in Physics",
                    "A famous artist",
                    "A child in the year 2100",
                    "An artificial intelligence",
                    "An astronaut on the International Space Station",
                    "A 19th century immigrant to America",
                    "The CEO of a major tech company",
                    "A character from a classic fairy tale",
                    "A famous sports personality",
                    "A teenager from the 1960s",
                    "A young wizard attending Hogwarts",
                    "A survivor in a post-apocalyptic world",
                    "A local government official",
                    "A famous inventor",
                    "A prehistoric cave person",
                    "An Olympic athlete",
                    "A bestselling author",
                    "A chef in a 5-star restaurant",
                    "A ghost haunting an old mansion",
                    "A knight from the Middle Ages",
                    "A character from their favorite video game",
                    "A child prodigy",
                    "A time traveler from the future",
                    "A soldier during World War II",
                    "A movie director",
                    "A superhero without powers",
                    "A character from a dystopian novel",
                    "A scientist discovering a new species",
                    "A pirate from the Golden Age of Piracy",
                    "A zookeeper at a magical zoo",
                    "A Victorian era detective",
                    "A famous explorer or adventurer"];


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

function lockAudience() {
    if (audience == 0) {
        audience = 1;
    }
    else {
        audience = 0;
    }
}

function lockTopic() {
    if (topic == 0) {
        topic = 1;
    }
    else {
        topic = 0;
    }
}

function lockGenre() {
    if (genre == 0) {
        genre = 1;
    }
    else {
        genre = 0;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

function shuffle() {
    topicLength = topicList.length;
    audienceLength = audienceList.length;
    genreLength = genreList.length;
    if (topic == 0) {
            xTopic = getRandomInt(topicLength);
            document.getElementById("shufTopic").innerHTML = topicList[xTopic];
        }
    if (audience == 0) {
            xAudience = getRandomInt(audienceLength);
            document.getElementById("shufAudience").innerHTML = audienceList[xAudience];
        }
    if (genre == 0) {
            xGenre = getRandomInt(genreLength);
            document.getElementById("shufGenre").innerHTML = genreList[xGenre];   
        }
}
