// const calcularSumaTotal = ( ...precios ) => {
//     return num1+num2
// };

// calcularSumaTotal(100, 500, 50)

const calcularSumaTotal = ( ...precios ) => {
    let total = 0;

    precios.forEach((precio) => {
        total = total + precio;
    })

    return total;
};

console.log( calcularSumaTotal(100, 60, 21));