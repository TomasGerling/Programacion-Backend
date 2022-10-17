const fs = require('fs')

class Contenedor {
    constructor(productName) {
    this.productName = productName
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
    async getByID(id) {
    try {
        const data = await fs.promises.readFile(this.productName, "utf-8")
        const jsonData = JSON.parse(data)
        const elementofiltrado = jsonData.find(item => item.id == id)
        if (elementofiltrado == undefined) {
        return null
        } else {
            return elementofiltrado
        }
        } catch (error) {
        throw new Error(error)
    }
}
    async getAll() {
        try {
        const data = await fs.promises.readFile(this.productName, "utf-8")
        const jsonData = JSON.parse(data)
        return jsonData
        } catch (error) {
        throw new Error(error)
        }
    }
    async deleteById(id) {
    try {
        const data = await fs.promises.readFile(this.productName, "utf-8")
        const jsonData = JSON.parse(data)
        const elementoFiltrado = jsonData.filter(item => item.id == id)
        if (elementoFiltrado == undefined) {
        console.error("no hay nada")
        } else {
        const newArray = jsonData.filter(item => item.id != id)
        for (let i = 0; i < newArray.length; i++) {
            newArray[i] = { ...newArray[i], id: (i + 1) }
        }
        await fs.promises.writeFile(this.productName, JSON.stringify(newArray, null, 2))

    }
    } catch (error) {
        throw new Error(error)
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

const container = new Contenedor('productos.txt')

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
