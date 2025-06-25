// src/app/component/Header.tsx
"use client";

export default function Header() {
  return (
    <>
      <header>
        <div>📍 1545 Birchmounth</div>
        <div>📞 (416) 606-1234 | 📠 (416) 123-4567</div>
        <div>🕒 M-W-Th 9am–6pm, T-F 10am–6pm, Sat 10am–3pm</div>
      </header>

      <nav>
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contactUs">Contact</a>
        <a href="#product">Order Medications</a>
        <a href="#testimonials">Testimonials</a>
      
      </nav>
    </>
  );
}
