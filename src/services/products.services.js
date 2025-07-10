const productos = [
  {id: 1,nombre: "Laptop Dell XPS 15",precio: 1500.00,cantidad: 10  },
  {id: 2,nombre: "Monitor LG UltraWide", precio: 350.50, cantidad: 25 },
  {id: 3, nombre: "Teclado Mecánico HyperX", precio: 99.99,cantidad: 50 },
  {id: 4,nombre: "Mouse Logitech MX Master 3",precio: 75.00,cantidad: 30 },
  {id: 5,nombre: "Disco SSD Samsung 1TB",precio: 120.75, cantidad: 15}
];

export const getAllProducts = () => { return productos}