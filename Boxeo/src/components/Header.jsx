import logo from '../assets/logo.webp';
 
const Header = () => {
  const adminName = "Harold Rodriguez";
  return (
<header className="main-header">
<div className="header-left">
<img src={logo} alt="StrikeStock Logo" className="logo" />
<input type="text" placeholder="Buscar en inventario..." className="search-input" />
</div>
<div className="header-right">
<div className="user-info">
<span>Bienvenido, <strong>{adminName}</strong></span>
<span className="role-tag">Admin</span>
</div>
<button className="btn-logout">Salir</button>
</div>
</header>
  );
};
export default Header;