const app = require('./app')

const PORT = process.env.PORT || 8000
app.set('port', PORT)

app.listen(PORT, () => {
    console.log(`Server up and running on port ` + app.get('port'));
})
