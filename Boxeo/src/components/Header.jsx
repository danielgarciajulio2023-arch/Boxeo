import logo from '../assets/logo.webp';
export default function Header() {
  const title = "Dashboard Integrador";
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>{title}</h1>
    </header>
  );}