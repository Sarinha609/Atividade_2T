import express from "express"

const port = 8080
const app = express()

app.use("/", express.static("../cadastro/dist"))

 app.get("/" , (req, res) => {
     res.json({ resposta: "Oi tudo bem?"})
 })

 app.listen(port, () => console.log (`⚡servidor rodando na porta ${port}`))