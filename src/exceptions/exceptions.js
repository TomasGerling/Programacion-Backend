class ProductNotFoundException extends Error {
    constructor() {
        super('Producto no encontrado')
    }
}

class ProductEmptyEntity extends Error {
    constructor() {
        super('Bad request. Product must contains all props.')
    }
}

module.exports = {
    ProductNotFoundException,
    ProductEmptyEntity,
}