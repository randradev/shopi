/** 
 *Función que calcula el precio total de una nueva orden
 *@param {Array} products | cartProduct: Array de objetos
 *@returns {numer} Precio total
 *
*/

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}