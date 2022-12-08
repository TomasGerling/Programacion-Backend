import ContenedorMongo from "../../contenedores/ContenedorMongoDB.js";

class ProductClass extends ContenedorMongo{
constructor(){
    super('products')
}
}
 export default ProductClass;