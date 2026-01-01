import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-wrapper">

          {/* Newsletter Section */}
          <div className="newsletter">
            <h3 className="brand">Tech-Shop</h3>
            <p className="newsletter-text">
              Subscribe to our Email alerts to receive early discount offers,
              and new products info.
            </p>

            <input
              type="email"
              placeholder="Email Address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
            />

            <button
              onClick={handleSubscribe}
              className="subscribe-btn"
            >
              Subscribe
            </button>
          </div>

          {/* Footer Links */}
          <div className="footer-links">

            {/* Help */}
            <div>
              <h4 className="footer-title">Help</h4>
              <ul>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#track">Track Order</a></li>
                <li><a href="#cancel">Cancel Order</a></li>
                <li><a href="#return">Return Order</a></li>
                <li><a href="#warranty">Warranty Info</a></li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h4 className="footer-title">Policies</h4>
              <ul>
                <li><a href="#return-policy">Return Policy</a></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#sitemap">Sitemap</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="footer-title">Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#service">Service Centres</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#affiliates">Affiliates</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
 