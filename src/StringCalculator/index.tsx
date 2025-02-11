import React, { useState } from "react";
import  StringCalculatorLogic  from "./CalculatorLogic.ts";


interface Styles {
  container: React.CSSProperties;
  input: React.CSSProperties;
  button: React.CSSProperties;
  error: React.CSSProperties;
}

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>("");
  const calculator = new StringCalculatorLogic();

  const handleCalculate = (): void => {
    try {
      setError("");
      const sum = calculator.add(input);
      setResult(sum);
    } catch (err) {
      setResult(null);
      debugger
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2>String Calculator</h2>
      <input
        type="text"
        placeholder="Enter numbers"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleCalculate} style={styles.button}>
        Calculate
      </button>
      {result !== null && <h3>Result: {result}</h3>}
      {error && <h3 style={styles.error}>{error}</h3>}
    </div>
  );
};

// Basic Styling
const styles: Styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
  },
  input: {
    width: "80%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default StringCalculator;