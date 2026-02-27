import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import DonationInfo from "./components/DonationInfo";
import PaymentSection from "./components/PaymentSection";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <main className={`app-content ${isLoading ? "hidden" : "visible"}`}>
        <Hero />
        <DonationInfo />
        <PaymentSection />

        <footer className="footer">
          <div className="container">
            <p>© 2026 Спартачко. Всички права запазени.</p>
            <p className="dev-challenge">Semper 1918 Fidelis</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
