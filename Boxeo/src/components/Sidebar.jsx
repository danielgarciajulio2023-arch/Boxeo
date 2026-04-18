import React from "react";

export default function Sidebar() {
  const menuItems = [
    { name: "Panel General", icon: "📊" },
    { name: "Productos", icon: "🥊" },
    { name: "Categorías", icon: "📦" },
    { name: "Estadísticas", icon: "📈" },
    { name: "Configuración", icon: "⚙️" },
  ];

  return (
    <aside className="sidebar">
      <ul>
        {menuItems.map((item, i) => (
          <li key={i} className={i === 0 ? "active" : ""}>
            <span className="icon">{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <button className="logout-btn">Cerrar sesión</button>
    </aside>
  );
}
