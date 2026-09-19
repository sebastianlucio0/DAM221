const listaDePedidos = [];
let totalAcumulado = 0;

function agregarPedido(producto, precio) {
    listaDePedidos.push(producto);
    totalAcumulado = totalAcumulado + precio;
    console.log("Se agregó " + producto + " de $" + precio);
}

agregarPedido("Torta", 50);
agregarPedido("Refresco", 25);

console.log("Orden:", listaDePedidos);
console.log("Total a pagar:", totalAcumulado);