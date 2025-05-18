const metodosPago = ["tarjeta", "paypal", "QR", "efectivo"];

const metodoUsuario = "criptoMonedas";

if (metodosPago.includes(metodoUsuario)) {
    console.log("Metodo aceptado.")
} else {
    console.log("Metodo no valido.")
}