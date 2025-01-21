import React, { useState } from "react";

export function CalculatorScientific() {
    const [display, setDisplay] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
              const result = eval(display.replace(/sin|cos|tan|sqrt/g, (match) => `Math.${match}`));
              setDisplay(result.toString());
            } catch {
              setDisplay("Erro");
            }
          } else if (value === "C") {
            setDisplay("");
          } else {
            setDisplay(display + value);
          }
    };

    return (
        <div>
        <input type="text" value={display} readOnly />
        <div>
            {[
            "7", "8", "9", "/", "sin(", "cos(", "tan(", "sqrt(",
            "4", "5", "6", "*", "(", ")", "^", "π",
            "1", "2", "3", "-", "C", "0", "=", "+",
            ].map((btn) => (
            <button key={btn} onClick={() => handleClick(btn === "π" ? Math.PI : btn)}>
                {btn}
            </button>
            ))}
        </div>
        </div>
    );
}