import React, { useState } from "react";

export function CalculatorFinancial() {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [time, setTime] = useState("");
    const [result, setResult] = useState("");

    const calculateCompoundInterest = () => {
        if(!principal || !rate || !time){
            setResult("Por favor, preencha todos os campos!");
            return;
        }
        const r = parseFloat(rate) / 100;
        const t = parseFloat(time);
        const p = parseFloat(principal);
        const compoundInterest = p * Math.pow(1 + r, t);
        setResult(`Montante: R$ ${compoundInterest.toFixed(2)}`);
    };

    return (
        <div>
            <h2>Calculadora Financeira</h2>
            <div>
                <label>Principal (R$):</label>
                <input
                    type="number"
                    value="{principal}"
                    onChange={(e) => setPrincipal(e.target.value)}
                    placeholder="Ex: 1000"
                />
            </div>
            <div>
                <label>Taxa de Juros (%):</label>
                <input
                    type="number"
                    value="rate"
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="Ex: 5"
                />
            </div>
            <div>
                <label>Tempo (anos):</label>
                <input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Ex: 2"
                />
            </div>
            <button onClick={calculateCompoundInterest}>Calcular</button>
            <h3>{result}</h3>
        </div>
    );
}