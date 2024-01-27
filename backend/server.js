import express from "express"

const app = express()

app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "The Programmer's Dilemma",
            content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 2,
            title: "Coffee Time",
            content: "Why do Java developers wear glasses? Because they don't see sharp!"
        },
        {
            id: 3,
            title: "Math Joke",
            content: "Why was the equal sign so humble? It knew it wasn't less than or greater than anyone else!"
        },
        {
            id: 4,
            title: "Vegetarian Vampire",
            content: "Why did the vegetarian vampire become a vegan? Because biting necks is too mainstream!"
        },
        {
            id: 5,
            title: "Physics Class",
            content: "Why did the physics teacher break up with the biology teacher? There was no chemistry!"
        }
    ];
    res.send(jokes)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})