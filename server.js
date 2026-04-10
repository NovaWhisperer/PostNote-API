require("dotenv").config()

const connectToDB = require("./src/db/db")
connectToDB()

const noteModel = require("./src/models/note.model")

const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>Notes App Launch Successfully </h1>")
})

app.post("/notes", async (req, res) => {
    const { title, content } = req.body
    // console.log(title, content);

    await noteModel.create({
        title, content
    })

    res.json({
        message: "Note created successfully"
    })
})

app.get("/notes", async (req, res) => {
    const notes = await noteModel.find()

    res.json({
        message: "Notes fetch successfuly",
        notes
    })
})

app.delete("/notes/:id", async (req, res) => {
    const noteId = req.params.id

    await noteModel.findOneAndDelete({
        _id: noteId
    })

    res.json({
        message: "Note deleted successfully"
    })
})

app.patch("/notes/:id", async (req, res) => {
    const noteId = req.params.id
    const { title } = req.body

    await noteModel.findOneAndUpdate(
        {
            _id: noteId
        },
        {
            title: title
        }
    )

    res.json({
        message:"Note updated successfully"
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})

