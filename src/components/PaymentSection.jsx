import React, { useState } from "react";
import { Copy, Check, MapPin, Store, Clock } from "lucide-react";

const PaymentSection = () => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState("");
  const iban = "BG55BGUS91601013246000";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(iban);
      setCopyError("");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy IBAN.", error);
      setCopyError("Копирането не бе успешно. Моля, копирайте IBAN ръчно.");
    }
  };

  return (
    <section
      id="payment"
      className="section payment-section"
      aria-labelledby="payment-title"
    >
      <div className="container">
        <header className="section-header">
          <h2 id="payment-title" className="section-title">
            Как да направите дарение за ФК Спартак Варна
          </h2>
          <p className="section-intro">
            Можете да подкрепите кампанията „Аз съм Спартак“ по банков път или с
            дарение в брой. По-долу ще откриете банковите детайли, указанията за
            основание на плащането и информация за дарение на място във Варна.
          </p>
        </header>

        <div className="payment-grid">
          <div className="bank-details">
            <h3 className="section-title left">Банкови детайли</h3>
            <div id="iban" className="iban-box">
              <div className="iban-label">IBAN:</div>
              <div className="iban-value">{iban}</div>
              <button
                type="button"
                className="copy-btn"
                onClick={copyToClipboard}
                aria-label="Копирай IBAN"
              >
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
            {copyError && <p className="copy-error">{copyError}</p>}

            <div className="payment-info">
              <p>
                <strong>Титуляр:</strong> СНЦ ФК Спартак 1918
              </p>
              <div className="instructions">
                <h4>Основание за плащане:</h4>
                <ul>
                  <li>Дарение „Аз съм Спартак“</li>
                  <li>Три имена на дарителя</li>
                  <li>ЕГН на дарителя (за сертификат)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cash-details">
            <h3 className="section-title left">Дарение в брой</h3>
            <div className="store-info">
              <div className="info-item">
                <Store className="info-icon" aria-hidden="true" />
                <div>
                  <p>
                    <strong>Фен Магазин</strong>
                  </p>
                  <p>ст. „Спартак“, гр. Варна</p>
                </div>
              </div>
              <div className="info-item">
                <Clock className="info-icon" aria-hidden="true" />
                <div>
                  <p>
                    <strong>Работно време</strong>
                  </p>
                  <p>09:00 - 19:00 ч.</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" aria-hidden="true" />
                <div>
                  <p>
                    <strong>Адрес</strong>
                  </p>
                  <address>ул. „Селиолу“ 39, Варна</address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
