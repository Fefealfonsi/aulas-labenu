import Garagem from "./Componentes/Garagem/Garagem";
import { GlobalStyle } from "./GlobalStyle";
export default function App() {
  const nome = "Miranda";

  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  return (
    <div >
      <GlobalStyle/>
      <Garagem nome={nome} mensagemAprentacao={apresentaGaragem} />
    </div>
  );
}