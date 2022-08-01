const db = require('../db')
const Villager = require('../models/villager')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const villager = async (props) => {

   Villager.collection.drop()

    const villagers = [
        {
            
            name: "Ace",
            description:"Jock, Bird",
            image:'https://dodo.ac/np/images/thumb/6/61/Ace%27s_Poster_NH_Texture.png/64px-Ace%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Admiral",
            description:"Cranky, Bird",
            image:'https://dodo.ac/np/images/thumb/0/02/Admiral%27s_Poster_NH_Texture.png/64px-Admiral%27s_Poster_NH_Texture.png',
            reviews: []
        }, {
            
            name: "Agent S",
            description:"Peppy, Squirrel",
            image:'https://dodo.ac/np/images/thumb/9/9e/Agent_S%27s_Poster_NH_Texture.png/64px-Agent_S%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Agnes",
            description:"Big-Sister, Pig",
            image:'https://dodo.ac/np/images/thumb/8/8e/Agnes%27s_Poster_NH_Texture.png/64px-Agnes%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Al",
            description:"Lazy, Gorilla",
            image:'https://dodo.ac/np/images/thumb/2/21/Al%27s_Poster_NH_Texture.png/64px-Al%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Alfonso",
            description:"Lazy, Alligator",
            image:'https://dodo.ac/np/images/thumb/f/fd/Alfonso%27s_Poster_NH_Texture.png/64px-Alfonso%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Alli",
            description:"Snooty, Alligator",
            image:'https://dodo.ac/np/images/thumb/7/72/Alli%27s_Poster_NH_Texture.png/64px-Alli%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Agent S",
            description:"Peppy, Squirrel",
            image:'https://dodo.ac/np/images/thumb/9/9e/Agent_S%27s_Poster_NH_Texture.png/64px-Agent_S%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Amelia",
            description:"Snooty, Eagle",
            image:'https://dodo.ac/np/images/thumb/c/cb/Amelia%27s_Poster_NH_Texture.png/64px-Amelia%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Anabelle",
            description:"Peppy, Anteater",
            image:'https://dodo.ac/np/images/thumb/c/cb/Anabelle%27s_Poster_NH_Texture.png/64px-Anabelle%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Anchovy",
            description:"Lazy, Bird",
            image:'https://dodo.ac/np/images/thumb/f/fe/Anchovy%27s_Poster_NH_Texture.png/64px-Anchovy%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Angus",
            description:"Cranky, Bull",
            image:'https://dodo.ac/np/images/thumb/e/e8/Angus%27s_Poster_NH_Texture.png/64px-Angus%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Anicotti",
            description:"Peppy, Mouse",
            image:'https://dodo.ac/np/images/thumb/2/2b/Anicotti%27s_Poster_NH_Texture.png/64px-Anicotti%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Ankha",
            description:"Snooty, Cat",
            image:'https://dodo.ac/np/images/thumb/5/5e/Ankha%27s_Poster_NH_Texture.png/64px-Ankha%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Annalisa",
            description:"Normal, Anteater",
            image:'https://dodo.ac/np/images/thumb/1/10/Annalisa%27s_Poster_NH_Texture.png/64px-Annalisa%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Annalise",
            description:"Snooty, Horse",
            image:'https://dodo.ac/np/images/thumb/1/19/Annalise%27s_Poster_NH_Texture.png/64px-Annalise%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Antonio",
            description:"Jock, Anteater",
            image:'https://dodo.ac/np/images/thumb/6/67/Antonio%27s_Poster_NH_Texture.png/64px-Antonio%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Apollo",
            description:"Cranky, Eagle",
            image:'https://dodo.ac/np/images/thumb/8/82/Apollo%27s_Poster_NH_Texture.png/64px-Apollo%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Apple",
            description:"Peppy, Hamster",
            image:'https://dodo.ac/np/images/thumb/7/76/Apple%27s_Poster_NH_Texture.png/64px-Apple%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Astrid",
            description:"Snooty, Kangaroo",
            image:'https://dodo.ac/np/images/thumb/d/d8/Astrid%27s_Poster_NH_Texture.png/64px-Astrid%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Audie",
            description:"Peppy, Wolf",
            image:'https://dodo.ac/np/images/thumb/4/46/Audie%27s_Poster_NH_Texture.png/64px-Audie%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Aurora",
            description:"Normal, Penguin",
            image:'https://dodo.ac/np/images/thumb/2/2b/Aurora%27s_Poster_NH_Texture.png/64px-Aurora%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Ava",
            description:"Normal, Chicken",
            image:'https://dodo.ac/np/images/thumb/6/6d/Ava%27s_Poster_NH_Texture.png/64px-Ava%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Avery",
            description:"Cranky, Eagle",
            image:'https://dodo.ac/np/images/thumb/5/59/Avery%27s_Poster_NH_Texture.png/64px-Avery%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Axel",
            description:"Jock, Elephant",
            image:'https://dodo.ac/np/images/thumb/7/7c/Axel%27s_Poster_NH_Texture.png/64px-Axel%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Azalea",
            description:"Snooty, Rhinoceros",
            image:'https://dodo.ac/np/images/thumb/d/dc/Azalea%27s_Poster_NH_Texture.png/64px-Azalea%27s_Poster_NH_Texture.png',
            reviews: []
        },
        {
            
            name: "Baabara",
            description:"Snooty, Sheep",
            image:'https://dodo.ac/np/images/thumb/8/8b/Baabara%27s_Poster_NH_Texture.png/64px-Baabara%27s_Poster_NH_Texture.png',
            reviews: []
        },
        
            
        
        
    ]
    await Villager.insertMany(villagers)
    console.log('Populated Villagers!')
}



const run = async () => {
    db.dropDatabase()
    await villager()
    db.close()
    
}
run()