import React, { useState } from "react";
import { Copy, Check, MapPin, Store, Clock } from "lucide-react";

const PaymentSection = () => {
  const [copied, setCopied] = useState(false);
  const iban = "BG55BGUS91601013246000";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="iban" className="section payment-section">
      <div className="container">
        <div className="payment-grid">
          <div className="bank-details">
            <h2 className="section-title left">Банкови Детайли</h2>
            <div className="iban-box" onClick={copyToClipboard}>
              <div className="iban-label">IBAN:</div>
              <div className="iban-value">{iban}</div>
              <button className="copy-btn">
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>

            <div className="payment-info">
              <p>
                <strong>Титуляр:</strong> СНЦ ФК Спартак 1918
              </p>
              <div className="instructions">
                <h3>Основание за плащане:</h3>
                <ul>
                  <li>Дарение „Аз съм Спартак“</li>
                  <li>Три имена на дарителя</li>
                  <li>ЕГН на дарителя (за сертификат)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="cash-details">
            <h2 className="section-title left">Дарение в брой</h2>
            <div className="store-info">
              <div className="info-item">
                <Store className="info-icon" />
                <div>
                  <p>
                    <strong>Фен Магазин</strong>
                  </p>
                  <p>ст. „Спартак“, гр. Варна</p>
                </div>
              </div>
              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <p>
                    <strong>Работно време</strong>
                  </p>
                  <p>09:00 - 19:00 ч.</p>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <p>
                    <strong>Адрес</strong>
                  </p>
                  <p>ул. „Селиолу“ 39, Варна</p>
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
