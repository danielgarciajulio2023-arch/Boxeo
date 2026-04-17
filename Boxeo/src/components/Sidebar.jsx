const Sidebar = () => {
  const disciplines = ['Boxeo', 'MMA', 'Muay Thai', 'BJJ', 'Karate'];
 
  return (
<aside className="sidebar">
<div className="sidebar-brand">
<h2>Strike<span>Stock</span></h2>
</div>
<nav>
<ul>
          {disciplines.map((item, index) => (
<li key={index} className="nav-item">
              {item}
</li>
          ))}
</ul>
</nav>
<div className="admin-status">
<span className="dot"></span> Modo Admin
</div>
</aside>
  );
};
export default Sidebar;