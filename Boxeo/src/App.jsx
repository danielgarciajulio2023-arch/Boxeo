import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
 
export default function App() {
  return (
<div className="dashboard">
<Header />
<div className="main-content">
<Sidebar />
<section className="content">
<h2>Bienvenido al Dashboard</h2>
<p>Este es el espacio principal de la aplicación.</p>
</section>
</div>
<Footer />
</div>
  );
}