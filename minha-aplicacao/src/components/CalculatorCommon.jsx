import React, { useState } from "react";

export function CalculatorCommon() {
    const [display, setDisplay] = useState("");

    const handleClick = (value) => {
        if(value === "=") {
            try {
                setDisplay(eval(display).toString());//Calcular resultado
            }catch{
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
            <input type="text" defaultValue={display} readOnly />
            <div>
                {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+" ].map((btn) => (
                    <button key={btn} onClick={() => handleClick(btn)}>
                        {btn}
                    </button>
                ))}
            </div>
        </div>
    );
}