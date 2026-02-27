import React from "react";
import { ShieldCheck, Heart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="section hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="badge">Мисия: Финална права</div>
          <h1 className="hero-title">
            Вчера. Днес. Утре. <br />
            <span className="blue-text">Спартак завинаги!</span>
          </h1>
          <p className="hero-subtitle">
            Въпреки изкуственото забавяне и опитите за саботаж, ние сме на
            финалната права. Остават последните вноски, за да изчистим старите
            задължения и да осигурим бъдещето на нашата детско-юношеска школа.
          </p>
          <div className="hero-btns">
            <a href="#donate" className="btn btn-primary">
              Дарете Сега
            </a>
            <a href="#mission" className="btn btn-outline">
              Нашата Мисия
            </a>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <ShieldCheck className="feature-icon" />
            <h3>Стабилност</h3>
            <p>Изчистване на стари дългове за спокоен път напред.</p>
          </div>
          <div className="feature-item">
            <Users className="feature-icon" />
            <h3>Общност</h3>
            <p>1000 дарители, обединени в името на Спартак.</p>
          </div>
          <div className="feature-item">
            <Heart className="feature-icon" />
            <h3>Бъдеще</h3>
            <p>Всички нови приходи отиват директно за отбора и школата.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
