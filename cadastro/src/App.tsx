import './App.css'
import TabDadosDeEndereco from './pages/TabDadosDeEndereco'

function Zeka() {
  async function testeDeRequisicao() {
    const req = await fetch("/api")
    const res = await req.text()
    console.log(res)
    
  }
  return  <button onClick={testeDeRequisicao}>Teste</button>
}


export default function () {

  return <>
    <Zeka />
    <TabDadosDeEndereco />
  </>
}