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
            
            name: "Alice",
            description:"Normal, Koala",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/9/96/NH-Alice_poster.png/revision/latest/scale-to-width-down/100?cb=20200522013639',
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
        {
            
            name: "Bam",
            description:"Jock, Deer",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/b/b2/NH-Bam_poster.png/revision/latest/scale-to-width-down/100?cb=20200522020326',
            reviews: []
        },
        {
            name: "Bangle",
            description:"Peppy, Tiger",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Bangle_poster.png/revision/latest/scale-to-width-down/100?cb=20200410183706',
            reviews: []
        },
        {
            name: "Barold",
            description:"Lazy, Cub",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/9/99/NH-Barold_poster.png/revision/latest/scale-to-width-down/100?cb=20200522020415',
            reviews: []
        },
        {
            name: "Bea",
            description:"Normal, Dog",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/c/ca/NH-Bea_poster.png/revision/latest/scale-to-width-down/100?cb=20200522020603',
            reviews: []
        },
        {
            name: "Beardo",
            description:"Smug, Bear",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/c/c7/NH-Beardo_poster.png/revision/latest/scale-to-width-down/100?cb=20200522020636',
            reviews: []
        },
        {
            name: "Beau",
            description:"Lazy, Deer",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/2/2a/NH-Beau_poster.png/revision/latest/scale-to-width-down/100?cb=20200522020451',
            reviews: []
        },
        {
            name: "Becky",
            description:"Snooty, Chicken",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/e/ec/NH-Becky_poster.png/revision/latest/scale-to-width-down/100?cb=20200522020704',
            reviews: []
        },
        {
            name: "Benedict",
            description:"Lazy, Chicken",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/0/0e/NH-Benedict_poster.png/revision/latest/scale-to-width-down/100?cb=20200522020807',
            reviews: []
        },
        {
            name: "Benjamin",
            description:"Lazy, Dog",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/5/5f/NH-Benjamin_poster.png/revision/latest/scale-to-width-down/100?cb=20200522021534',
            reviews: []
        },
        {
            name: "Bertha",
            description:"Normal, Hippo",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/3/3f/NH-Bertha_poster.png/revision/latest/scale-to-width-down/100?cb=20200522021717',
            reviews: []
        },
        {
            name: "Bianca",
            description:"Peppy, Tiger",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/e/e2/NH-Bianca_poster.png/revision/latest/scale-to-width-down/100?cb=20200410183555',
            reviews: []
        },
        {
            name: "Biff",
            description:"Jock, Hippo",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/2/2c/NH-Biff_poster.png/revision/latest/scale-to-width-down/100?cb=20200522022022',
            reviews: []
        },
        
        {
            name: "Big Top",
            description:"Lazy, Elephant",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/c/ca/NH-Big_Top_poster.png/revision/latest/scale-to-width-down/100?cb=20200522022102',
            reviews: []
        },
        
        {
            name: "Bill",
            description:"Jock, Duck",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/4/4c/NH-Bill_poster.png/revision/latest/scale-to-width-down/100?cb=20200522022341',
            reviews: []
        },
        
        {
            name: "Billy",
            description:"Jock, Goat",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/d/d3/NH-Billy_poster.png/revision/latest/scale-to-width-down/100?cb=20200522022646',
            reviews: []
        },
        
        {
            name: "Biskit",
            description:"Lazy, Dog",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/c/c8/NH-Biskit_poster.png/revision/latest/scale-to-width-down/100?cb=20200522023459',
            reviews: []
        },
        
        {
            name: "Bitty",
            description:"Snooty, Hippo",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/7/7c/NH-Bitty_poster.png/revision/latest/scale-to-width-down/100?cb=20200522023552',
            reviews: []
        },
        
        {
            name: "Blaire",
            description:"Snooty, Squirrel",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/f/f3/NH-Blaire_poster.png/revision/latest/scale-to-width-down/100?cb=20200410184330',
            reviews: []
        },
        
        {
            name: "Blanche",
            description:"Snooty, Ostrich",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/18/NH-Blanche_poster.png/revision/latest/scale-to-width-down/100?cb=20200410191641',
            reviews: []
        },
        
        {
            name: "Bluebear",
            description:"Peppy, Cub",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/5/50/NH-Bluebear_poster.png/revision/latest/scale-to-width-down/100?cb=20200522023616',
            reviews: []
        },
        
        {
            name: "Bob",
            description:"Lazy, Cat",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/14/NH-Bob_poster.png/revision/latest/scale-to-width-down/100?cb=20200410181927',
            reviews: []
        },
        {
            name: "Bonbon",
            description:"Peppy, Rabbit",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/7/75/NH-Bonbon_poster.png/revision/latest/scale-to-width-down/100?cb=20200410185137',
            reviews: []
        },
        {
            name: "Bones",
            description:"Lazy, Dog",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/12/NH-Boomer_poster.png/revision/latest/scale-to-width-down/100?cb=20200410190457',
            reviews: []
        },
        {
            name: "Boomer",
            description:"Lazy, Penguin",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/12/NH-Boomer_poster.png/revision/latest/scale-to-width-down/100?cb=20200410190457',
            reviews: []
        },
        {
            name: "Boone",
            description:"Jock, Gorilla",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/9/9c/NH-Boone_poster.png/revision/latest/scale-to-width-down/100?cb=20200522023703',
            reviews: []
        },
        {
            name: "Boots",
            description:"Jock, Alligator",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/f/f3/NH-Boots_poster.png/revision/latest/scale-to-width-down/100?cb=20200522023756',
            reviews: []
        },
        {
            name: "Boris",
            description:"Cranky, Pig",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/5/54/NH-Boris_poster.png/revision/latest/scale-to-width-down/100?cb=20200410190014',
            reviews: []
        },
        {
            name: "Bob",
            description:"Lazy, Cat",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/14/NH-Bob_poster.png/revision/latest/scale-to-width-down/100?cb=20200410181927',
            reviews: []
        },
        {
            name: "Bob",
            description:"Lazy, Cat",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/14/NH-Bob_poster.png/revision/latest/scale-to-width-down/100?cb=20200410181927',
            reviews: []
        },
        {
            name: "Bob",
            description:"Lazy, Cat",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/14/NH-Bob_poster.png/revision/latest/scale-to-width-down/100?cb=20200410181927',
            reviews: []
        },
        {
            name: "Bob",
            description:"Lazy, Cat",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/14/NH-Bob_poster.png/revision/latest/scale-to-width-down/100?cb=20200410181927',
            reviews: []
        },
        {
            name: "Bob",
            description:"Lazy, Cat",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/14/NH-Bob_poster.png/revision/latest/scale-to-width-down/100?cb=20200410181927',
            reviews: []
        },
        {
            name: "Bob",
            description:"Lazy, Cat",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/14/NH-Bob_poster.png/revision/latest/scale-to-width-down/100?cb=20200410181927',
            reviews: []
        },
        {
            name: "Bob",
            description:"Lazy, Cat",
            image:'https://static.wikia.nocookie.net/animalcrossing/images/1/14/NH-Bob_poster.png/revision/latest/scale-to-width-down/100?cb=20200410181927',
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