import Course from "../components/Course";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import { useEffect } from "react";




const Layout = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 50%;
        background: linear-gradient(to right, #9333ea, #2563eb);
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }
      .nav-link:hover::after {
        width: 100%;
      }
      html {
        scroll-behavior: smooth;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar/>
      <main className="pt-16">
        <Hero/>
        <Feature />
        <Course />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;