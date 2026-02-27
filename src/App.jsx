import React from "react";
import Hero from "./components/Hero";
import DonationCards from "./components/DonationCards";
import PaymentSection from "./components/PaymentSection";

function App() {
  return (
    <main className="app-content">
      <Hero />
      <DonationCards />
      <PaymentSection />

      <footer className="footer">
        <div className="container">
          <p>© 2026 ФК Спартак Варна. Всички права запазени.</p>
          <p className="dev-challenge">
            Built for the DEV Weekend Challenge #Community
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
