# Design Document: FC Spartak Varna Fundraising Landing Page

**Project:** "Az sam Spartak" (I am Spartak) Fundraising Landing Page
**Date:** 2026-02-27
**Goal:** Create a high-converting, premium informational landing page for FC Spartak Varna's final fundraising stretch to clear legacy debts and stabilize the youth academy. This project is also a submission for the DEV Weekend Challenge (Feb 2026).

---

## 1. Overview & Vision
The page will serve as a digital mission statement for the "Az sam Spartak" campaign. It aims to evoke pride, urgency, and transparency. By following the "Wall of Honor" narrative, we will show donors that they are not just giving money, but becoming part of the club's permanent history.

## 2. Target Audience
*   **Local Supporters:** Fans in Varna and Bulgaria.
*   **Global Diaspora:** Spartak fans abroad who want a simple way to contribute.
*   **DEV Community Judges:** Who will evaluate technical execution, UI/UX, and community impact.

## 3. Architecture & Tech Stack
*   **Frontend:** Vite + React (Fast, modern, SEO-friendly).
*   **Styling:** Vanilla CSS (Modern CSS features like Grid, Flexbox, Variable-based design system).
*   **Hosting:** Vercel (Auto-deploy, high performance).
*   **Language:** Bulgarian (Primary content), with SEO metadata optimized for both BG/EN.

## 4. Design System (Brand: FC Spartak Varna)
*   **Colors:**
    *   Primary Blue: `#0055A4` (Official Club Blue)
    *   Dark Navy: `#0A192F` (Deep background for premium feel)
    *   Accent Gold: `#D4AF37` (For Premium Card & "Golden Letters")
    *   White/Off-white: `#F8F9FA` (Typography)
*   **Typography:** Montserrat or Inter (Modern, professional, supports Cyrillic).

## 5. Component Breakdown
### Header / Hero
*   Dynamic navigation (Mission, Cards, Donate).
*   High-impact visual (Stadium/Youth team).
*   Headline: "Вчера. Днес. Утре. Спартак завинаги!"

### Mission Section
*   Narrative block explaining the "Final Stretch" (Финалната права).
*   Emphasis on stability for the youth academy.

### Donation Tiers (Interactive Cards)
*   **Standard (200 €):** Hover effect, listing benefits.
*   **Premium (500 €):** Distinctive border, "Golden Lettering" animation, emphasizing the "Wall of Donors".

### Payment / IBAN Section
*   Clean, copyable IBAN field.
*   Instructions for the "Reason for Payment" (Основание) field.
*   Cash donation info (Fan Shop).

### Footer
*   Contact details, stadium address, social links.
*   DEV Challenge attribution.

## 6. Project Milestones
1.  **Phase 1:** Setup Vite project and Design System (CSS Variables).
2.  **Phase 2:** Implement Hero and Mission sections.
3.  **Phase 4:** Build interactive Donation Cards.
4.  **Phase 5:** Payment section with copy-to-clipboard functionality.
5.  **Phase 6:** Polish, responsiveness, and SEO.
6.  **Phase 7:** Deployment to Vercel and final verification.

---

## 7. Success Criteria
*   **Performance:** 90+ Lighthouse score.
*   **UX:** Intuitive flow, clear CTA, mobile-first.
*   **Impact:** Resonates emotionally with the Bulgarian fan base.
