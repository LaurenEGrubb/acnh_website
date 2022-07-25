const { mainModule } = require('process')
const db = require('../db')
const { Rating, Review } = require('../models')
const Villager = require('../models/villager')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const villager = async () => {

    Villager.Collection.drop()

    const villagers = [
        {
            _id: "a",
            name: "a",
            type:"a",
            reviews: [a],
            rating: [a],
        },
        {
            _id: "b",
            name: "b",
            type:"b",
            reviews: [b],
            rating: [b],
        },
        {
            _id: "c",
            name: "c",
            type:"c",
            reviews: [c],
            rating: [c],
        },
        {
            _id: "d",
            name: "d",
            type:"d",
            reviews: [d],
            rating: [d],
        },
        {
            _id: "e",
            name: "e",
            type:"e",
            reviews: [e],
            rating: [e],
        },
    ]
    await Villager.insertMany(villagers)
    console.log('Populated Villagers!')
}

const run = async () => {
    await main()
    db.close()
    await villager()
}
run()