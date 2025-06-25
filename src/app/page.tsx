import Header from './component/header';
import Footer from './component/footer';
import Product from './component/product';
import Services from './component/services';
import ContactUs from './component/contact-us';
import Testimonials from './component/testmonial';
import About from './component/about';

export default function Home() {
  return (
    <>
    <Header />
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Jz Pharmacy</h1>
          <p>Your trusted pharmacy partner in Toronto.</p>
          <div className="buttons">
            <a href="#">Order Now</a>
            <a href="/services">View Services</a>
          </div>
        </div>
        <img src="images/pharmacy-1.jpg" alt="Pharmacy" />
      </section>

      {/* Store Grid Section */}
      <section className="store-container">
        <h2 className="store-title">Our Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <div className="product-image">💊</div>
            <h3>Vitamin C</h3>
            <p>Boost your immune system.</p>
            <button className="buy-button">Buy Now</button>
          </div>

          <div className="product-card">
            <div className="product-image">🩹</div>
            <h3>First Aid Kit</h3>
            <p>Be ready for minor injuries.</p>
            <button className="buy-button">Buy Now</button>
          </div>

          <div className="product-card">
            <div className="product-image">🧴</div>
            <h3>Hand Sanitizer</h3>
            <p>Keep your hands germ-free.</p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </section>
    </main>
    <section id="services"><Services /></section>
    <section id="about"><About /></section>    
    <section id="product"><Product /></section>
    <section id="testimonials"><Testimonials /></section>
    <section id="contactUs"><ContactUs /></section>
    <Footer />
    </>
  );
}
