import React, { useState, useCallback } from "react";
import Hero from "./components/Hero";
import DonationInfo from "./components/DonationInfo";
import PaymentSection from "./components/PaymentSection";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <main className={`app-content ${isLoading ? "hidden" : "visible"}`}>
        <Hero />
        <DonationInfo />
        <PaymentSection />

        <footer className="footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Спартачко. Всички права запазени.</p>
            <p className="dev-challenge">Semper 1918 Fidelis</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
