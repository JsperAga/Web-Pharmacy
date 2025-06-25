export default function Services() {
  const service = [
    { name: 'Order ahead of time', description: 'Order ahead of time' },
    { name: 'Free Blister Packaging', description: 'Free Blister Packaging' },
    { name: 'Quality medication', description: 'Quality medication' },
  ];

  return (
    <div className="store-container">
      <h1 className="store-title">Services</h1>
      <div className="product-grid">
        {service.map((service) => (
          <div key={service.name} className="product-card">
            <div className="product-image">📦</div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button className="buy-button">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
