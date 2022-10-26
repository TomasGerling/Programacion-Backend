const fs = require('fs')

class Container {
    constructor(productName) {
        this.productName = `./storage/${productName}`
        this.count = 0
    }
    save(producto) {
    const productos = fs.readFileSync(this.productName,'utf-8')
    const parsedProductos = JSON.parse(productos)

    let idMaximo = 0

    if (parsedProductos.length == 0) {
        Object.assign(producto, {
            id: 1
        })
        parsedProductos.push(producto)
        fs.writeFileSync(this.productName, JSON.stringify(parsedProductos, null, 2))
        return 1
    } else {
        parsedProductos.forEach(i => {
        if (i.id > idMaximo) {
            idMaximo = i.id
        }
    })
    Object.assign(producto, {
        id: idMaximo + 1
    })
    parsedProductos.push(producto)
        fs.writeFileSync(this.productName, JSON.stringify(parsedProductos, null, 2))
        return (idMaximo + 1)
    }
    }

    async getById(id) {
        try {
            let data = await fs.promises.readFile(this.productName, "utf-8")
            data = JSON.parse(data)
            let product = data.find(pro => pro.id == id)
            if (product) {
                return product
            } else {
                return null
            }
        } catch (error) {
            console.error(error)
        }
    }

    async putByID(id) {
        try {
            let data = await fs.promises.readFile(this.productName, "utf-8")
            data = JSON.parse(data)
            let product = data.find(pro => pro.id == id)
            if (product) {
                product = {
                    ...product,
                    ...prop
                }
                data = data.map(prod => {
                    if (prod.id==product.id) {
                        prod = product
                    }
                    return prod
                })
                data = JSON.stringify(data,null,3)
                await fs.promises.writeFile(this.productName, data)
                return product
            } else {
                return null
            }
        } catch (error) {
            console.error(error)
        }
    }

    async getAll() {
        try {
            let data = await fs.promises.readFile(this.productName, "utf-8")
            data = JSON.parse(data)
            if (data.length>0) {
                return data
            } else {
                return null
            }
        } catch (error) {
            console.error(error)
        }
    }

    async deleteById(id) {
        try {
            let data = await fs.promises.readFile(this.productName, "utf-8")
            data = JSON.parse(data)
            let product = data.find(pro => pro.id == id)
            if (product) {
                data = data.filter(pro => pro.id != id)
                data = JSON.stringify(data,null,3)
                await fs.promises.writeFile(this.productName, data)
                return data
            } else {
                return null
            }            
        } catch (error) {
            console.error(error)
        }
    }

    async deleteAll() {
        try {
            const arrayVacio = []
            await fs.promises.writeFile(this.productName, JSON.stringify(arrayVacio, null, 2))

        } catch (error) {
            throw new Error
        }
    }
}

const container = new Container('./productos.txt')

console.log(container.save({
    title: "Mesa Rectangular",
    price: 400,
}))
console.log(container.save({
    title: "Mesa de escritorio",
    price: 540,
}))
console.log(container.save({
    title: "Mesa ratona",
    price: 1600,
}));

module.exports=Container
