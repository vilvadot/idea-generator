const {API_URI} = process.env

fetch(`${API_URI}`)
.then(res => {
  return res.json()
})
.then(body => {
  console.log(body.message)
})