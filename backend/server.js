const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

mongoose.connect(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)

const userSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true }
})

const Users = mongoose.model('User', userSchema)

app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName, email, department } = req.body
        

        const existingUser = await Users.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const newUser = await Users.create({ firstName, lastName, email, department})
        return res.status(200).json({message: 'User created successfully', user: newUser})
    } catch (error) {
        console.log('Error in adding user: ', error.message)
        return res.status(500).json({message: 'Error while inserting user'})
    }

})


app.get('/users', async (req, res) => {
    try {
        const user = await Users.find()
        return res.status(200).json({user})
    } catch (error) {
        console.log('Error while fetching users: ', error.message)
        return res.status(500).json({message: error.message})
    }
})

app.get('/users/:id', async(req, res) => {
    try {
        const {id} = req.params
        const user = await Users.findById(id)
        if(!user) return res.status(200).json({message: 'User not Found'})
        res.status(200).json({user})
    } catch (error) {
        console.log('Error while fetching user: ', error.message)
        return res.status(500).json({message: error.message})
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const {id} = req.params 
        const {firstName, lastName, email, department} = req.body 
       
        const updateUser = await Users.findByIdAndUpdate(id,
            {firstName, lastName, email, department},
            { new: true}
        )
         

        if(!updateUser){
            return res.status(400).json({message: 'User not found'}) 
        }
        
        return res.status(200).json({message: 'User updated'})
    } catch (error) {
        console.log('Error while editing user: ', error.message)
        return res.status(500).json({message: error.message})
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const {id} = req.params 
        const deletedUser = await Users.findByIdAndDelete(id)
        
        if(!deletedUser){
            return res.status(400).json({message: 'User not found'})
        }

        return res.status(200).json({message: 'User deleted'})
    } catch (error) {
        console.log('Error While deleting user: ', error.message)
        return res.status(500).json({message: error.message})
    }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))