const ProductCard = ({ name, stock, price, discipline }) => {

  // Lógica para determinar el nivel de urgencia

  const stockStatus = stock < 5 ? "crítico" : stock < 15 ? "bajo" : "óptimo";
 
  return (
<div className={`product-card status-${stockStatus}`}>
<div className="card-header">
<span className="discipline-tag">{discipline}</span>
<span className={`status-dot ${stockStatus}`}></span>
</div>
<h3 className="product-name">{name}</h3>
<div className="product-info">
<div className="price-tag">${price}</div>
<div className="stock-info">
<span>Stock</span>
<strong className={stockStatus}>{stock}</strong>
</div>
</div>

      {/* Barra de progreso visual del stock */}
<div className="stock-bar-container">
<div 

          className={`stock-bar-fill ${stockStatus}`} 

          style={{ width: `${Math.min(stock * 5, 100)}%` }}
></div>
</div>
</div>

  );

};
 