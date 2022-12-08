const getProductModule = async () => {
    const dataCore = process.env.DATACORE;
    if (dataCore == 'MEMORY') {
        const moduleSource = await import('./productsDao/ProductosDaoMemoria.js');
        return moduleSource.default;
    } else if (dataCore == 'FS') {
        const moduleSource = await import('./productsDao/ProductosDaoFs.js');
        return moduleSource.default;
    } else if (dataCore == 'MONGO') {
        const moduleSource = await import('./productsDao/ProductosDaoMongoDB.js');
        return moduleSource.default;
    } else if (dataCore == 'FIREBASE') {
        const moduleSource = await import('./productsDao/ProductosDaoFirebase.js');
        return moduleSource.default;
    }
}

const productService = async () => {
    const ProductClass = await getProductModule();
    const productService = new ProductClass();
}
export default productService;