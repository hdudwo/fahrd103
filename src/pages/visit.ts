import { renderNav, navStyles } from '../components/nav.ts';
import { renderFooter, footerStyles } from '../components/footer.ts';

const visitStyles = `
  ${navStyles}
  ${footerStyles}

  .visit-hero {
    padding: 160px clamp(24px, 5vw, 80px) 80px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .visit-hero::after {
    content: 'VISIT';
    position: absolute;
    top: 100px;
    right: clamp(24px, 5vw, 80px);
    font-family: var(--font-display);
    font-size: clamp(4rem, 12vw, 10rem);
    font-weight: 300;
    color: rgba(44, 24, 16, 0.03);
    letter-spacing: 0.1em;
    pointer-events: none;
  }

  .visit-overline {
    font-family: var(--font-display);
    font-size: 0.8rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 16px;
  }

  .visit-title {
    font-family: var(--font-serif-kr);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: var(--espresso);
    margin-bottom: 16px;
  }

  .visit-subtitle {
    font-size: 0.95rem;
    color: var(--warm-gray);
    font-weight: 300;
    line-height: 1.7;
  }

  /* Map */
  .visit-map {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 80px) 80px;
  }

  .visit-map-container {
    width: 100%;
    aspect-ratio: 21/9;
    background: linear-gradient(135deg, #D8CBB8 0%, #C4B49C 50%, #B0A08A 100%);
    position: relative;
    overflow: hidden;
  }

  .visit-map-embed {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  .visit-map-container::after {
    content: '';
    position: absolute;
    inset: 12px;
    border: 1px solid rgba(44, 24, 16, 0.08);
    pointer-events: none;
  }

  .visit-map-actions {
    margin-top: 16px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .visit-map-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 16px;
    border: 1px solid rgba(44, 24, 16, 0.16);
    color: var(--espresso);
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    background: white;
    transition: all 0.3s var(--ease-out-expo);
  }

  .visit-map-link:hover {
    background: var(--espresso);
    color: var(--cream);
    border-color: var(--espresso);
  }

  /* Info Grid */
  .visit-info {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px clamp(24px, 5vw, 80px) 120px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 64px;
  }

  .visit-card {
    padding: 48px;
    border: 1px solid rgba(44, 24, 16, 0.06);
    background: white;
    transition: all 0.5s var(--ease-out-expo);
  }

  .visit-card:hover {
    box-shadow: 0 12px 48px rgba(44, 24, 16, 0.06);
    border-color: var(--caramel);
  }

  .visit-card-icon {
    font-size: 1.8rem;
    margin-bottom: 20px;
    display: block;
  }

  .visit-card-label {
    font-family: var(--font-display);
    font-size: 0.72rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 8px;
  }

  .visit-card-title {
    font-family: var(--font-serif-kr);
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--espresso);
    margin-bottom: 20px;
  }

  .visit-card-body {
    font-size: 0.9rem;
    line-height: 1.9;
    color: var(--text-secondary);
    font-weight: 300;
  }

  .visit-card-body strong {
    font-weight: 500;
    color: var(--espresso);
  }

  .visit-card-divider {
    width: 30px;
    height: 1px;
    background: var(--caramel);
    margin: 16px 0;
    opacity: 0.5;
  }

  /* Hours Table */
  .hours-table {
    width: 100%;
    margin-top: 8px;
  }

  .hours-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid rgba(44, 24, 16, 0.04);
  }

  .hours-row:last-child {
    border-bottom: none;
  }

  .hours-day {
    font-family: var(--font-serif-kr);
    font-weight: 400;
    color: var(--espresso);
    font-size: 0.9rem;
  }

  .hours-time {
    font-family: var(--font-display);
    color: var(--mocha);
    font-size: 0.9rem;
  }

  .hours-closed {
    color: var(--terracotta);
    font-size: 0.82rem;
    letter-spacing: 0.05em;
  }

  /* Directions Section */
  .visit-directions {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 80px) 120px;
  }

  .visit-directions-title {
    font-family: var(--font-serif-kr);
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--espresso);
    margin-bottom: 48px;
    text-align: center;
  }

  .directions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .direction-item {
    text-align: center;
    padding: 40px 24px;
    background: var(--cream);
    transition: all 0.4s var(--ease-out-expo);
  }

  .direction-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(44, 24, 16, 0.06);
  }

  .direction-icon {
    font-size: 2rem;
    margin-bottom: 16px;
    display: block;
  }

  .direction-label {
    font-family: var(--font-display);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--caramel);
    margin-bottom: 12px;
  }

  .direction-text {
    font-family: var(--font-serif-kr);
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.8;
    font-weight: 300;
  }

  /* CTA */
  .visit-cta {
    background: var(--espresso);
    padding: 80px clamp(24px, 5vw, 80px);
    text-align: center;
  }

  .visit-cta-text {
    font-family: var(--font-serif-kr);
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    color: var(--cream);
    font-weight: 300;
    line-height: 1.8;
    margin-bottom: 32px;
  }

  .visit-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 14px 40px;
    border: 1px solid var(--cream);
    color: var(--cream);
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    transition: all 0.4s var(--ease-out-expo);
    cursor: pointer;
  }

  .visit-cta-btn:hover {
    background: var(--cream);
    color: var(--espresso);
  }

  @media (max-width: 768px) {
    .visit-info {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .directions-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }

    .visit-map-container {
      aspect-ratio: 16/9;
    }
  }
`;

export const renderVisit = (): string => `
  <style>${visitStyles}</style>
  ${renderNav()}

  <div id="page-content">
    <section class="visit-hero">
      <div class="visit-overline reveal">Visit Us</div>
      <h1 class="visit-title reveal">오시는 길</h1>
      <p class="visit-subtitle reveal">파흐드103에서 여러분을 기다립니다.</p>
    </section>

    <section class="visit-map reveal">
      <div class="visit-map-container">
        <iframe
          class="visit-map-embed"
          title="파흐드103 위치"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=%ED%8C%8C%ED%9D%90%EB%93%9C103%20%EC%95%88%EC%A4%91&t=&z=15&ie=UTF8&iwloc=&output=embed">
        </iframe>
      </div>
      <div class="visit-map-actions">
        <a class="visit-map-link" href="https://www.google.com/maps/search/?api=1&query=%ED%8C%8C%ED%9D%90%EB%93%9C103%20%ED%8F%89%ED%83%9D%20%EC%95%88%EC%A4%91" target="_blank" rel="noopener noreferrer">Google 길찾기</a>
        <a class="visit-map-link" href="https://map.naver.com/v5/search/%ED%8C%8C%ED%9D%90%EB%93%9C103" target="_blank" rel="noopener noreferrer">네이버지도 열기</a>
        <a class="visit-map-link" href="https://map.kakao.com/?q=%ED%8C%8C%ED%9D%90%EB%93%9C103%20%EC%95%88%EC%A4%91" target="_blank" rel="noopener noreferrer">카카오맵 열기</a>
      </div>
    </section>

    <section class="visit-info">
      <div class="visit-card reveal">
        <span class="visit-card-icon">⏰</span>
        <div class="visit-card-label">Business Hours</div>
        <div class="visit-card-title">영업시간</div>
        <div class="visit-card-body">
          <div class="hours-table">
            <div class="hours-row">
              <span class="hours-day">월요일</span>
              <span class="hours-time">10:00 – 21:00</span>
            </div>
            <div class="hours-row">
              <span class="hours-day">화요일</span>
              <span class="hours-closed">정기휴무</span>
            </div>
            <div class="hours-row">
              <span class="hours-day">수 – 금</span>
              <span class="hours-time">10:00 – 21:00</span>
            </div>
            <div class="hours-row">
              <span class="hours-day">토 – 일</span>
              <span class="hours-time">10:00 – 22:00</span>
            </div>
          </div>
        </div>
      </div>

      <div class="visit-card reveal">
        <span class="visit-card-icon">📍</span>
        <div class="visit-card-label">Address</div>
        <div class="visit-card-title">주소</div>
        <div class="visit-card-body">
          <strong>경기도 평택시 안중읍</strong>
          <div class="visit-card-divider"></div>
          우편번호: 17900<br />
          전화 문의: Instagram DM
        </div>
      </div>

      <div class="visit-card reveal">
        <span class="visit-card-icon">🅿️</span>
        <div class="visit-card-label">Parking</div>
        <div class="visit-card-title">주차 안내</div>
        <div class="visit-card-body">
          매장 앞 <strong>무료 주차</strong> 가능합니다.<br />
          약 5대 주차 가능하며,<br />
          만차 시 인근 공영주차장을<br />
          이용해 주세요.
        </div>
      </div>

      <div class="visit-card reveal">
        <span class="visit-card-icon">📱</span>
        <div class="visit-card-label">Contact</div>
        <div class="visit-card-title">연락처</div>
        <div class="visit-card-body">
          <strong>Instagram</strong> @fahrd103<br />
          DM으로 문의 및 예약이 가능합니다.
          <div class="visit-card-divider"></div>
          단체 예약은 최소 3일 전<br />
          사전 연락 부탁드립니다.
        </div>
      </div>
    </section>

    <section class="visit-directions reveal">
      <h2 class="visit-directions-title">교통편 안내</h2>
      <div class="directions-grid stagger">
        <div class="direction-item">
          <span class="direction-icon">🚗</span>
          <div class="direction-label">자가용</div>
          <div class="direction-text">
            서해안고속도로 서평택IC에서<br />
            약 15분 거리<br />
            네비게이션 "파흐드103" 검색
          </div>
        </div>
        <div class="direction-item">
          <span class="direction-icon">🚌</span>
          <div class="direction-label">대중교통</div>
          <div class="direction-text">
            안중시외버스터미널 하차 후<br />
            도보 약 10분
          </div>
        </div>
        <div class="direction-item">
          <span class="direction-icon">🚕</span>
          <div class="direction-label">택시</div>
          <div class="direction-text">
            안중역 / 안중터미널에서<br />
            택시 약 5분<br />
            기본요금 내 도착
          </div>
        </div>
      </div>
    </section>

    <section class="visit-cta reveal">
      <div class="visit-cta-text">
        파흐드103에서 따뜻한 한 잔과 함께<br />
        여유로운 시간을 보내세요.
      </div>
      <span class="visit-cta-btn" data-nav="/menu">
        메뉴 보기 →
      </span>
    </section>
  </div>

  ${renderFooter()}
`;
