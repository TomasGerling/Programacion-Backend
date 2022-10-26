const Container = require('./Container')

const Stock = new Container('./productos.txt')

const newProduct = async () => {
    try {
        
            await Stock.save({
                title: "Mesa Rectangular",
                price: 400,
            })
            await Stock.save({
                title: "Mesa de escritorio",
                price: 540,
            })
            await Stock.save({
                title: "Mesa ratona",
                price: 1600,
            })

        }catch (error) {
            console.log(error);
        }
    }


module.exports = Stock
