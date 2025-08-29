import { FaPlusCircle } from 'react-icons/fa';
import logo from '../assets/logo.svg';



const elements = [
  { name: "Text", icon: <FaPlusCircle /> },
  { name: "Email", icon: <FaPlusCircle /> },
  { name: "Checkbox", icon: <FaPlusCircle /> },
  { name: "Date", icon: <FaPlusCircle /> }
];

export const Sidebar = ({ onAdd }) => (
  <div className="sidebar">
    <div style={{ marginBottom: "2rem", display: "flex", alignItems: "center", gap: "12px" }}>
     <img src={logo} alt="Logo" style={{ height: "32px", width: "32px", objectFit: "contain" }} />
      <h2 style={{ margin: 0 }}>WebBuild</h2>
    </div>
    <h3>Form Elements</h3>
    {elements.map((el) => (
      <button key={el.name} onClick={() => onAdd(el.name)}>
        {el.icon} {el.name}
      </button>
    ))}
  </div>
);
