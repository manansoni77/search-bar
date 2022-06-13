const { Router } = require('express')
const User = require('../../models/User')

const router = Router();

router.get('/', async (req, res) => {
  console.log('GET')
  try {
    const user = await User.find()
    console.log(user)
    if (!user) throw new Error('No user')
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/', async (req, res) => {
  console.log(req.body)
  const new_user = new User(req.body)
  try {
    const user = await new_user.save()
    if (!user) throw new Error('Something went wrong while saving user')
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.post('/search/', async (req, res) => {
  query = req.body.query
  console.log(query)
  const regexp = new RegExp(req.body.query, 'i')
  try {
    const users = await User.find({ 'name': regexp })
    console.log(users)
    users.forEach(user => {
      user.name = user.name.replace(regexp, function (str) { return '<mark>' + str + '</mark>' });
    })
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router