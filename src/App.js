import { useState } from "react";
import "./App.css";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");
  function calcularIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    if (imc < 18.6) {
      setMensagem("Você está abaixo do peso! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMensagem("Você está no peso ideal! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do peso! Seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 34.9) {
      setMensagem("Cuidado Obesidade! Seu IMC é: " + imc.toFixed(2));
    }
  }
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <div className="area-input">
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso em (kq) Ex: 90"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura em (cm) Ex: 180"
        />
        <button onClick={calcularIMC}>Calcular</button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  );
}
