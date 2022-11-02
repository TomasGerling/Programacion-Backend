const configEjs = (app) => {
    app.set('view engine', 'ejs')
    app.set('views', './views/ejs')
}

module.exports = configEjs