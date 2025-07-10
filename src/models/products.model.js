import fs from "fs"
import path from "path"

const __dirname = import.meta.__dirname;

const Filepath = path.join(__dirname, './products.json');
const json = fs.readFileSync(Filepath, 'utf-8');
const products = JSON.parse(json);

console.log(products);

export const getAllProductos = () => {
    return products
}