import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <section className="content">
          <h2>Resumen General</h2>
          <div className="metrics">
            <div className="card">
              <h3>Ventas del día</h3>
              <p>$1190</p>
            </div>
            <div className="card">
              <h3>Pedidos activos</h3>
              <p>8</p>
            </div>
            <div className="card">
              <h3>Productos agotados</h3>
              <p>3</p>
            </div>
          </div>

          <h3>Órdenes recientes</h3>
          <table className="orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Producto</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td>Cliente A</td>
                <td>Guantes Pro</td>
                <td>En proceso</td>
              </tr>
              <tr>
                <td>002</td>
                <td>Cliente B</td>
                <td>Saco de Boxeo</td>
                <td>Finalizado</td>
              </tr>
              <tr>
                <td>003</td>
                <td>Cliente C</td>
                <td>Protector Bucal</td>
                <td>Pendiente</td>
              </tr>
            </tbody>
          </table>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
