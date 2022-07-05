import express from "express";
const app = express();
const port = 8087;


var sabores = [
    "Lombinho",
    "Frango C/ Catupiry",
    "Brócolis",
    "Calabresa"
]

app.get("/", (req, res) => {
    res.send("Bem vindo a fabrica de pizza")
})

app.post("/adicionarSabor", (req, res) =>{
    console.log(req)
    let novoSabor = req.sabor;
    sabores.push(novoSabor);
    res.send("sabor adicionado " + novoSabor) 

})

app.get("/sabores",(req, res) => {

    res.send(sabores)
})

app.listen(port, () =>{
    console.log("o servidor esta na porta " + port)
})


