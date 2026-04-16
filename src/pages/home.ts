import { renderNav, navStyles } from '../components/nav.ts';
import { renderFooter, footerStyles } from '../components/footer.ts';

const homeStyles = `
  ${navStyles}
  ${footerStyles}

  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: linear-gradient(160deg, var(--cream) 0%, var(--milk) 40%, #EDE5DA 100%);
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 60vw;
    height: 60vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(196, 117, 91, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -5%;
    width: 40vw;
    height: 40vw;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(139, 157, 119, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero-inner {
    text-align: center;
    padding: 0 24px;
    position: relative;
    z-index: 1;
  }

  .hero-overline {
    font-family: var(--font-display);
    font-size: 0.85rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 24px;
    font-weight: 400;
    opacity: 0;
    animation: fadeUp 1s 0.3s var(--ease-out-expo) forwards;
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 10vw, 8rem);
    font-weight: 300;
    color: var(--espresso);
    line-height: 1;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
    opacity: 0;
    animation: fadeUp 1.2s 0.5s var(--ease-out-expo) forwards;
  }

  .hero-title-kr {
    font-family: var(--font-serif-kr);
    font-size: clamp(1.5rem, 4vw, 2.8rem);
    font-weight: 300;
    color: var(--mocha);
    margin-bottom: 32px;
    letter-spacing: 0.15em;
    opacity: 0;
    animation: fadeUp 1.2s 0.7s var(--ease-out-expo) forwards;
  }

  .hero-desc {
    font-size: 1rem;
    color: var(--text-muted);
    font-weight: 300;
    line-height: 1.8;
    max-width: 420px;
    margin: 0 auto 48px;
    opacity: 0;
    animation: fadeUp 1s 0.9s var(--ease-out-expo) forwards;
  }

  .hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 14px 36px;
    border: 1px solid var(--espresso);
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    color: var(--espresso);
    cursor: pointer;
    transition: all 0.4s var(--ease-out-expo);
    opacity: 0;
    animation: fadeUp 1s 1.1s var(--ease-out-expo) forwards;
  }

  .hero-cta:hover {
    background: var(--espresso);
    color: var(--cream);
  }

  .hero-cta-arrow {
    transition: transform 0.4s var(--ease-out-expo);
  }

  .hero-cta:hover .hero-cta-arrow {
    transform: translateX(4px);
  }

  .hero-scroll {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    color: var(--warm-gray);
    opacity: 0;
    animation: fadeUp 1s 1.4s var(--ease-out-expo) forwards;
  }

  .hero-scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, var(--caramel), transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
    50% { opacity: 1; transform: scaleY(1); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Featured Section */
  .featured {
    padding: 120px clamp(24px, 5vw, 80px);
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-label {
    font-family: var(--font-display);
    font-size: 0.8rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 16px;
    font-weight: 400;
  }

  .section-title {
    font-family: var(--font-serif-kr);
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 300;
    color: var(--espresso);
    margin-bottom: 60px;
    line-height: 1.5;
  }

  .featured-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .featured-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .featured-card-img {
    aspect-ratio: 3/4;
    background: linear-gradient(135deg, var(--cream) 0%, #E8DED2 100%);
    transition: transform 0.7s var(--ease-out-expo);
    position: relative;
    overflow: hidden;
  }

  .featured-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.7s var(--ease-out-expo);
  }

  .featured-card-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(44, 24, 16, 0.15) 0%, transparent 50%);
  }

  .featured-card:hover .featured-card-img img {
    transform: scale(1.04);
  }

  .featured-card-info {
    padding: 20px 0;
  }

  .featured-card-name {
    font-family: var(--font-serif-kr);
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--espresso);
    margin-bottom: 6px;
  }

  .featured-card-desc {
    font-size: 0.82rem;
    color: var(--warm-gray);
    font-weight: 300;
  }

  /* Atmosphere Band */
  .atmos {
    padding: 100px 0;
    background: var(--cream);
    position: relative;
    overflow: hidden;
  }

  .atmos::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 120px,
      rgba(44, 24, 16, 0.02) 120px,
      rgba(44, 24, 16, 0.02) 121px
    );
    pointer-events: none;
  }

  .atmos-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 80px);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .atmos-text {
    position: relative;
    z-index: 1;
  }

  .atmos-quote {
    font-family: var(--font-serif-kr);
    font-size: clamp(1.3rem, 2.5vw, 1.8rem);
    font-weight: 300;
    line-height: 1.9;
    color: var(--espresso);
    margin-bottom: 24px;
  }

  .atmos-quote::before {
    content: '"';
    font-family: var(--font-display);
    font-size: 4rem;
    color: var(--terracotta);
    display: block;
    line-height: 1;
    margin-bottom: 8px;
    opacity: 0.6;
  }

  .atmos-author {
    font-size: 0.85rem;
    color: var(--warm-gray);
    letter-spacing: 0.1em;
  }

  .atmos-visual {
    aspect-ratio: 4/5;
    background: linear-gradient(145deg, #D4C4B0 0%, #BFA98F 100%);
    position: relative;
    overflow: hidden;
  }

  .atmos-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .atmos-visual::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(44, 24, 16, 0.15), rgba(44, 24, 16, 0));
    pointer-events: none;
  }

  .atmos-visual::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 1px solid var(--caramel);
    opacity: 0.3;
    pointer-events: none;
  }

  /* Info Band */
  .info-band {
    padding: 100px clamp(24px, 5vw, 80px);
    max-width: 1200px;
    margin: 0 auto;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  }

  .info-item {
    text-align: center;
    padding: 40px 24px;
    border: 1px solid rgba(44, 24, 16, 0.06);
    transition: all 0.4s var(--ease-out-expo);
  }

  .info-item:hover {
    border-color: var(--caramel);
    box-shadow: 0 8px 40px rgba(44, 24, 16, 0.06);
  }

  .info-icon {
    font-family: var(--font-display);
    font-size: 2rem;
    color: var(--terracotta);
    margin-bottom: 20px;
  }

  .info-label {
    font-family: var(--font-display);
    font-size: 0.78rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--caramel);
    margin-bottom: 12px;
  }

  .info-value {
    font-family: var(--font-serif-kr);
    font-size: 1rem;
    color: var(--espresso);
    line-height: 1.7;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .featured-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
    }

    .atmos-inner {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .info-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }
  }
`;

export const renderHome = (): string => `
  <style>${homeStyles}</style>
  ${renderNav()}

  <section class="hero">
    <div class="hero-inner">
      <div class="hero-overline">Specialty Coffee in Anjung</div>
      <h1 class="hero-title">FAHRD 103</h1>
      <div class="hero-title-kr">파흐드103</div>
      <p class="hero-desc">
        안중의 조용한 골목, 정성스럽게 내린 한 잔의 커피와<br />
        편안한 공간이 당신을 기다립니다.
      </p>
      <span class="hero-cta" data-nav="/menu">
        메뉴 보기
        <span class="hero-cta-arrow">→</span>
      </span>
    </div>
    <div class="hero-scroll">
      <span>SCROLL</span>
      <div class="hero-scroll-line"></div>
    </div>
  </section>

  <section class="featured">
    <div class="reveal">
      <div class="section-label">Signature</div>
      <div class="section-title">파흐드103의 시그니처</div>
    </div>
    <div class="featured-grid stagger">
      <div class="featured-card" data-nav="/menu">
        <div class="featured-card-img">
          <img
            src="/images/coffee.jpg"
            srcset="/images/coffee-thumb.jpg 640w, /images/coffee.jpg 1200w"
            sizes="(max-width: 768px) 100vw, 33vw"
            alt="시그니처 라떼"
            loading="lazy"
            decoding="async" />
        </div>
        <div class="featured-card-info">
          <div class="featured-card-name">시그니처 라떼</div>
          <div class="featured-card-desc">파흐드만의 특별한 블렌딩</div>
        </div>
      </div>
      <div class="featured-card" data-nav="/menu">
        <div class="featured-card-img">
          <img src="/images/bread.webp" alt="빵 메뉴" loading="lazy" />
        </div>
        <div class="featured-card-info">
          <div class="featured-card-name">바스크 치즈케이크</div>
          <div class="featured-card-desc">매일 아침 직접 구운 디저트</div>
        </div>
      </div>
      <div class="featured-card" data-nav="/menu">
        <div class="featured-card-img">
          <img src="/images/ade.webp" alt="수제 에이드" loading="lazy" />
        </div>
        <div class="featured-card-info">
          <div class="featured-card-name">수제 에이드</div>
          <div class="featured-card-desc">제철 과일로 만드는 상큼함</div>
        </div>
      </div>
    </div>
  </section>

  <section class="atmos">
    <div class="atmos-inner">
      <div class="atmos-text reveal">
        <div class="atmos-quote">
          바쁜 일상 속에서 잠시 멈추어,<br />
          천천히 내려지는 커피 한 잔의<br />
          여유를 느껴보세요.
        </div>
        <div class="atmos-author">— 파흐드103</div>
      </div>
      <div class="atmos-visual reveal">
        <img
          src="/images/atmos.jpeg"
          srcset="/images/atmos-thumb.jpg 640w, /images/atmos.jpeg 1400w"
          sizes="(max-width: 768px) 100vw, 45vw"
          alt="파흐드 카페 공간 이미지"
          loading="lazy"
          decoding="async" />
      </div>
    </div>
  </section>

  <section class="info-band">
    <div class="info-grid stagger">
      <div class="info-item">
        <div class="info-icon">⏰</div>
        <div class="info-label">Hours</div>
        <div class="info-value">
          월–금 10:00 – 21:00<br />
          토–일 10:00 – 22:00<br />
          화요일 정기휴무
        </div>
      </div>
      <div class="info-item">
        <div class="info-icon">📍</div>
        <div class="info-label">Location</div>
        <div class="info-value">
          경기도 평택시<br />
          안중읍
        </div>
      </div>
      <div class="info-item">
        <div class="info-icon">☎</div>
        <div class="info-label">Contact</div>
        <div class="info-value">
          Instagram<br />
          @fahrd103
        </div>
      </div>
    </div>
  </section>

  ${renderFooter()}
`;
