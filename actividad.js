const fs = require('fs')

class Contenedor{
    constructor(name){
        this.name = name
    }

    save(producto){
        const productos = fs.readFileSync(`${this.name}.txt`, 'utf-8')
        const parsedProductos = JSON.parse(productos);
        let idMax = 0
        if(parsedProductos.length == 0){
            Object.assign(producto, {
                id: 1
            })
            parsedProductos.push(producto)
            fs.writeFileSync(`${this.name}.txt`, JSON.stringify(parsedProductos, null, 2))
            return 1
        }else{
            parsedProductos.forEach(i => {
                if(i.id > idMax){
                    idMax = i.id
                }
            })
            Object.assign(producto, {
                id: idMax + 1
            })
            parsedProductos.push(producto)
            fs.writeFileSync(`${this.name}.txt`, JSON.stringify(parsedProductos, null, 2))
            return (idMax + 1)
        }

    }

    async deleteById(id){
        try{
            const datos = await fs.promises.readFile(this.nombreArchivo,"utf-8")

            const arrayDatos = await JSON.parse(datos);
            
            const resultadoFiltro = arrayDatos.filter((item) => item.id !== id);

            fs.promises.writeFile(this.nombreArchivo, JSON.stringify(resultadoFiltro))
        } catch (error){
            throw new Error(error)
        }
    }
    deleteAll(){
        try{
            fs.writeFileSync(`${this.name}.txt`, "")
        } catch (error){
            throw new Error(error)
        }
    }
}
const products = [{
    ID:1,
    name:"Mesa redonda",
    price:200
},
{
    ID:2,
    name: "Mesa triangular",
    price:200
},
{
    ID:3,
    name:"Mesa cuadrada",
    price:200
}]
let newProduct= [{
    name: "Mesa rectangular",
    price: 200
}]
const container = new Contenedor('productos')

// console.log(container.save({
//     name: "Libro2",
//     price: 22.32
// }))

// console.log(container.save({
//     name: "Libro54",
//     price: 21.32
// }))
