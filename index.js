import "dotenv/config";
import express from 'express'
const app = express()
const port = process.env.PORT || 3001
import cors from 'cors';
import productRouter from "./src/routes/products.router.js";
import { login } from "./src/controllers/auth.controller.js"


app.use(cors())
app.use(express.json());

app.post('/api/login', login);
app.get('/', (req, res) => res.json( {mesage: 'API REST con Firebase!'}));

app.use("/api",productRouter);


app.use((req,res, next)=>{
    res.status(404).json({error: "Not Found"})
});

app.listen(port, () => console.log(`App listening on port http://localhost:${port} !`))