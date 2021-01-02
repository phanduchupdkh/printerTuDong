const express = require('express')
const fs = require('fs')

var cors = require('cors')
const app = express()

app.use(cors())
const port = 3000

var BARCODE = './public/barcode.pdf';
var PHIEUKHAM = './public/phieukham.pdf';

app.use(express.static('public'))

app.get('/barcode', (req, res) => {
try {
  fs.readFileSync(BARCODE, 'utf-8')
} catch (e) {
	console.log('......................................................................................')
res.status(404).send('Not found');
}
  res.send('Hello World!')
})

app.get('/phieukham', (req, res) => {
try {
  fs.readFileSync(PHIEUKHAM, 'utf-8')
} catch (e) {
	console.log('......................................................................................')
res.status(404).send('Not found');
}
  res.send('Hello World!')
})

app.get('/deletebarcode', (req, res) => {
  try {
  fs.unlinkSync(BARCODE);
  } catch (e) {console.log('loi')} 
  res.send('Hello World!')
})

app.get('/deletephieukham', (req, res) => {
  try {
  fs.unlinkSync(PHIEUKHAM);
  } catch (e){console.log('loi')} 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
