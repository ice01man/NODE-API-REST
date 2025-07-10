import express from 'express'
const app = express()
const port = 3000
import cors from 'cors';
import productRouter from "./src/routes/products.router.js";


app.use(cors())
app.use(express.json());

app.get('/', (req, res) => res.json( {mesage: 'Hello World!'}));

app.use("/api",productRouter);

app.use((req,res, next)=>{
    res.status(404).json({error: "Not Found"})
});

app.listen(port, () => console.log(`App listening on port http://localhost:${port} !`))