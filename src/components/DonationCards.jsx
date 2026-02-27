import React from "react";
import { CreditCard, Award, Star, CheckCircle2 } from "lucide-react";

const DonationCards = () => {
  return (
    <section id="donate" className="section donation-section">
      <div className="container">
        <h2 className="section-title">
          Дарителска Кампания{" "}
          <span className="blue-text">„Аз съм Спартак“</span>
        </h2>

        <div className="cards-grid">
          {/* Standard Card */}
          <div className="donation-card">
            <div className="card-header">
              <CreditCard className="card-icon" />
              <div className="card-price">200 €</div>
            </div>
            <h3 className="card-title">Дарителска карта</h3>
            <ul className="card-perks">
              <li>
                <CheckCircle2 className="perk-icon" /> Персонална карта „Аз съм
                Спартак“
              </li>
              <li>
                <CheckCircle2 className="perk-icon" /> Удостоверение и
                сертификат
              </li>
              <li>
                <CheckCircle2 className="perk-icon" /> Обявяване на офиц.
                страница
              </li>
            </ul>
            <a href="#iban" className="card-btn">
              Избери Карта
            </a>
          </div>

          {/* Premium Card */}
          <div className="donation-card premium">
            <div className="premium-badge">Препоръчано</div>
            <div className="card-header">
              <Award className="card-icon gold" />
              <div className="card-price gold">500 €+</div>
            </div>
            <h3 className="card-title">Премиум дарителска карта</h3>
            <ul className="card-perks">
              <li>
                <Star className="perk-icon gold" /> Вписване на Стената на
                дарителите
              </li>
              <li>
                <Star className="perk-icon gold" /> 5 години безплатна сезонна
                карта
              </li>
              <li>
                <Star className="perk-icon gold" /> Вписване със „златни букви"
                в историята
              </li>
              <li>
                <Star className="perk-icon gold" /> Специални благодарности
              </li>
            </ul>
            <a href="#iban" className="card-btn premium-btn">
              Стани Премиум Дарител
            </a>
          </div>
        </div>

        <div className="free-donation">
          <p>
            Възможност за свободно дарение в размер по избор. Всеки дарител ще
            получи удостоверение и ще бъде вписан на Стената на дарителите.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationCards;
