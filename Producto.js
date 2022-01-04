class Producto {
    constructor(clasificacion, nombre, talle, precio, stock, img) {
        this.clasificacion = clasificacion;
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.cant = 1;
    }
}

let productos = []