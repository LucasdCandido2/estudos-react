import React from "react";
import { useCalculator } from "../context/CalculatorContext";

export function ModeSelector() {
    const { mode, switchMode } = useCalculator();

    return (
        <div>
            <button onClick={() => switchMode("common")}>Comum</button>
            <button onClick={() => switchMode("scientific")}>Cientifica</button>
            <button onClick={() => switchMode("financial")}>Financeira</button>
            <p>Modo atual: {mode}</p>
        </div>
    );
}