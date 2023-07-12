//aca voy a crear el array de los productos. 
const productos = [
    { id: "1", nombre: "mate", precio: 500, stock: 10, img: "../public/img/mate.jpg", idCategorias: "1" },
    { id: "2", nombre: "juguetes", precio: 200, stock: 10, img: "../public/img/cochecito.jpg", idCategorias: "2" },
    { id: "3", nombre: "muñecos", precio: 1000, stock: 10, img: "../public/img/muñeco-de-shakira.jpg", idCategorias: "3" },
    { id: "4", nombre: "llaveros", precio: 150, stock: 10, img: "../public/img/llavero.jpg", idCategorias: "4" },
]
//voy a crear esta funcion para los productos. 
export const getProductos = () => {
    return new Promise(() => {
        resolve(productos);
    }, 100)
}
//voy a crear una funcion similar a la anterior pero esta vez es para que me regrese un solo item.
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const productos = productos.find(prod => prod.id === id);
            resolve(productos);
        }, 100)
    })
}
//voy a crear una funcion que me va a retornar un array de una categoria especifica. 
export const getProductosPorCategorias = (idCategorias) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const productosCategorias = productosCategorias.filter(prod => prod.idCategorias === idCategorias);
            resolve(productosCategorias);
        }, 100)
    })
}