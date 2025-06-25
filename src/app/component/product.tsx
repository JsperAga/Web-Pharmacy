export default function Product() {
  const products = [
    { name: 'Hair', description: 'Shampoo, conditioner, and hair oils', icon: '/images/product_02.png' },
    { name: 'Soap', description: 'Natural and scented soaps', icon: '/images/product_03.png' },
    { name: 'Food', description: 'Healthy snacks and supplements', icon: '/images/product_04.png' },
  ];

  return (
    <div className="store-container">
      <h1 className="store-title">Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.name} className="product-card">
            <img src={product.icon} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button className="buy-button">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
