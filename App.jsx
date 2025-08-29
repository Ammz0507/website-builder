import './App.css';
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { FormCanvas } from "./components/FormCanvas";

function App() {
  const [fields, setFields] = useState([]);

  const addField = (type) => {
    const newField = {
      label: `${type} Field`,
      type: type.toLowerCase(),
      placeholder: `Enter ${type.toLowerCase()}`
    };
    setFields([...fields, newField]);
  };

  return (
    <div className="builder" style={{display: "flex", gap: "2rem", padding: "2rem"}}>
      <Sidebar onAdd={addField} />
      <FormCanvas fields={fields} />
    </div>
  );
}

export default App;


