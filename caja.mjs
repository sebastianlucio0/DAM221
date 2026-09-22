// caja.mjs
export const listaDePedidos = [];

export function agregarPedido(producto, precio) {
    listaDePedidos.push({ nombreAComprar: producto, costo: precio });
    console.log(`Se agregó ${producto} de $${precio}`);
}

export function calcularTotales(tasaIVA = 0.16) {
    // 1. reduce() suma los costos desestructurando { costo } de cada elemento
    const subtotal = listaDePedidos.reduce((acumulado, { costo }) => acumulado + costo, 0);

    // 2. Cálculos de IVA y Total
    const iva = subtotal * tasaIVA;
    const total = subtotal + iva;

    return {
        subtotal,
        iva,
        total
    };
}