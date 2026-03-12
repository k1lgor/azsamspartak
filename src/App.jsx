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
      <main id="main-content" className="app-content" aria-busy={isLoading}>
        <Hero />
        <DonationInfo />
        <PaymentSection />

        <footer className="footer">
          <div className="container">
            <p>
              © {new Date().getFullYear()} Кампания „Аз съм Спартак“ · ФК
              Спартак Варна
            </p>
            <p className="dev-challenge">Semper 1918 Fidelis</p>
          </div>
        </footer>
      </main>

      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
    </>
  );
}

export default App;
