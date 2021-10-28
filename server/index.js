
const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const authenticate = require('./middlewares/authMiddleware')

const bcrypt = require('bcryptjs')

const models = require('./models')

const salt = 10

require('dotenv').config()

app.use(cors())
app.use(express.json())


app.post('/api/register', async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    const firstName = req.body.firstName
    const lastName = req.body.lastName

    const persistedUser = await models.User.findOne({
        where: {
            username: username
        }
    })

    if (persistedUser == null) {
        bcrypt.hash(password, salt, async (error, hash) => {
            console.log(hash)
            if (error) {
                res.json({ message: "Something Went Wrong!!!" })
            } else {
                const user = models.User.build({
                    username: username,
                    password: hash,
                    first_name: firstName,
                    last_name: lastName
                })

                let savedUser = await user.save()
                if (savedUser != null) {
                    res.json({ success: true })
                }
            }
        })
    } else {
        res.json({ message: " Sorry This UserName Already Exists." })

    }
})



app.post('/api/login', async (req, res) => {

    const username = req.body.username
    const password = req.body.password

    let user = await models.User.findOne({
        where: {
            username: username,

        }
    })
    if (user != null) {
        bcrypt.compare(password, user.password, (error, result) => {
            if (result) {
                const token = jwt.sign({ username: username }, process.env.JWT_SECRET_KEY)
                res.json({ success: true, token: token, username : username })
            }else {
                res.json({ success: false, message: 'Not Authenticated' })
            }
        })
        }else {
            res.json({message: "Username Incorrect"})
        }
    
})




app.get('/api/videogames', authenticate,  async (req, res) => {
    let games = await models.Games.findAll()
    res.json(games)
})

app.post('/api/videogames',async (req, res) => {
    const title = req.body.title
    const genre = req.body.genre
    const description = req.body.description
    //const gameID = req.body.gameID

    const game = models.Games.build({
        title: title,
        genre: genre,
        description: description
        //gameID: gameID
    })

    let savedGame = await game.save()
    if (savedGame != null) {
        res.json({ success: true })
    }
})

app.delete('/api/videogames/:gameId', (req, res) => {

    const gameId = parseInt(req.params.gameId)

    models.Games.destroy({
        where: {
            id: gameId
        }
    }).then(_ => {
        res.json({ success: true })
    })

})





app.listen(8080, () => {
    console.log('Server Is Running....')
})
