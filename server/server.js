const express = require('express')
const app = express()
const port = 5000;
const cors = require('cors');

// cors is middleware for cross-origin requests
const corsOptions = {
  origin: "*"
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/comments', (req, res) => {
  const commentTexts = ['hello', 'this', 'comments are from', 'the server']
  res.json({ commentTexts });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})