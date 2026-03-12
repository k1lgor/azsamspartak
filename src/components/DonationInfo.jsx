import React from "react";

const DonationInfo = () => {
  return (
    <section
      id="donate"
      className="section donation-info"
      aria-labelledby="donation-title"
    >
      <div className="container">
        <header className="section-header">
          <h2 id="donation-title" className="section-title">
            Дарителски пакети и възможности за подкрепа
          </h2>
          <p className="section-intro">
            Изберете най-подходящия начин да подкрепите ФК Спартак Варна. Всеки
            принос към кампанията „Аз съм Спартак“ подпомага устойчивото
            развитие на клуба и изгражда по-силна общност около него.
          </p>
        </header>

        <div className="info-grid">
          <div className="info-column">
            <h3 className="tier-title">🔹 Дарителска карта – €200</h3>
            <ul className="tier-list">
              <li>Персонална карта „Аз съм Спартак“</li>
              <li>Удостоверение и сертификат за дарение</li>
              <li>Обявяване на официалната страница на клуба</li>
            </ul>
          </div>

          <div className="info-column premium-text">
            <h3 className="tier-title gold">
              🔹 Премиум дарителска карта – €500
            </h3>
            <ul className="tier-list">
              <li>Персонална карта „Аз съм Спартак“</li>
              <li>Удостоверение и сертификат за дарение</li>
              <li>Публикуване със специални благодарности</li>
              <li>Вписване на Стената на дарителите</li>
              <li>
                5 години безплатна сезонна карта (всяка година нова карта)
              </li>
              <li>
                Включване със „златни букви" в следващата книга за историята
              </li>
            </ul>
          </div>
        </div>

        <div className="free-donation-text">
          <p>
            Отваряме и възможност за <strong>свободно дарение</strong> в размер
            по избор. Всеки дарител със свободно дарение също ще получи
            удостоверение и ще бъде вписан на Стената на дарителите. Така можете
            да подкрепите кампанията с удобна за вас сума и да останете част от
            общността зад ФК Спартак Варна.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationInfo;
