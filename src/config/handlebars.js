const { create } = require('express-handlebars')

const configHandlebars = (app) => {
    const hbs = create({
        extname: 'hbs',
        defaultLayout: 'main',
        layoutsDir: './views/handlebars/layouts',
    })
    app.engine('hbs', hbs.engine)
    app.set('view engine', 'hbs')
    app.set('views', './views/handlebars')
}

module.exports = configHandlebars