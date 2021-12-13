const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()

app.use(helmet())

app.use(bodyParser.json())

app.use(cors())

app.use(morgan('combined'))

app.get('/', async (req, res) => {
	res.send('hello')
})

// app.post('/ads', async (req, res) => {
//     const insertedId = await insertAd(req.body.ad)
//     if (insertedId) {
//         res.json({
// 					response: {
// 						added: true,
// 						id: insertedId,
// 					},
// 				})
//     }
//     else {
//         res.json({
//             response: {
//                 added: false,
//                 id: null
//             }
//         })
//     }
// })

app.listen(3002, async () => {
	console.log('listening on port 3002')
})