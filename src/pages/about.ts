import { renderNav, navStyles } from '../components/nav.ts';
import { renderFooter, footerStyles } from '../components/footer.ts';

const aboutStyles = `
  ${navStyles}
  ${footerStyles}

  .about-hero {
    min-height: 70vh;
    display: flex;
    align-items: center;
    background: linear-gradient(170deg, var(--cream) 0%, var(--milk) 60%);
    padding: 160px clamp(24px, 5vw, 80px) 80px;
    position: relative;
    overflow: hidden;
  }

  .about-hero::after {
    content: 'ABOUT';
    position: absolute;
    bottom: -30px;
    right: clamp(24px, 5vw, 80px);
    font-family: var(--font-display);
    font-size: clamp(5rem, 15vw, 14rem);
    font-weight: 300;
    color: rgba(44, 24, 16, 0.03);
    letter-spacing: 0.05em;
    pointer-events: none;
    line-height: 1;
  }

  .about-hero-inner {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .about-hero-text {
    position: relative;
    z-index: 1;
  }

  .about-overline {
    font-family: var(--font-display);
    font-size: 0.8rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 20px;
  }

  .about-hero-title {
    font-family: var(--font-serif-kr);
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    font-weight: 300;
    color: var(--espresso);
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .about-hero-desc {
    font-size: 0.95rem;
    line-height: 1.9;
    color: var(--text-secondary);
    font-weight: 300;
  }

  .about-hero-visual {
    aspect-ratio: 4/5;
    background: linear-gradient(145deg, #C9B99A 0%, #A89070 100%);
    position: relative;
    overflow: hidden;
  }

  .about-hero-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .about-hero-visual::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 24px;
    right: -24px;
    bottom: -24px;
    border: 1px solid var(--caramel);
    opacity: 0.2;
  }

  .about-hero-visual::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(44, 24, 16, 0.14), rgba(44, 24, 16, 0));
    pointer-events: none;
  }

  /* Story */
  .about-story {
    padding: 120px clamp(24px, 5vw, 80px);
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .about-story-label {
    font-family: var(--font-display);
    font-size: 0.78rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 32px;
  }

  .about-story-text {
    font-family: var(--font-serif-kr);
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    line-height: 2.2;
    color: var(--text-secondary);
    font-weight: 300;
  }

  .about-story-divider {
    width: 40px;
    height: 1px;
    background: var(--caramel);
    margin: 48px auto;
  }

  /* Values */
  .about-values {
    padding: 100px clamp(24px, 5vw, 80px);
    background: var(--cream);
  }

  .about-values-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-values-title {
    font-family: var(--font-serif-kr);
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 300;
    color: var(--espresso);
    text-align: center;
    margin-bottom: 64px;
  }

  .about-values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  }

  .about-value {
    text-align: center;
    padding: 48px 32px;
    background: var(--milk);
    border: 1px solid rgba(44, 24, 16, 0.04);
    transition: all 0.5s var(--ease-out-expo);
  }

  .about-value:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 48px rgba(44, 24, 16, 0.08);
  }

  .about-value-num {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--caramel);
    margin-bottom: 20px;
    opacity: 0.6;
  }

  .about-value-title {
    font-family: var(--font-serif-kr);
    font-size: 1.15rem;
    font-weight: 400;
    color: var(--espresso);
    margin-bottom: 16px;
  }

  .about-value-desc {
    font-size: 0.88rem;
    line-height: 1.8;
    color: var(--warm-gray);
    font-weight: 300;
  }

  /* Concept */
  .about-concept {
    padding: 120px clamp(24px, 5vw, 80px);
    max-width: 1200px;
    margin: 0 auto;
  }

  .about-concept-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 80px;
    align-items: center;
  }

  .about-concept-visual {
    aspect-ratio: 16/10;
    background: linear-gradient(135deg, #D8CBB8 0%, #BFA98F 50%, #A89070 100%);
    position: relative;
    overflow: hidden;
  }

  .about-concept-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .about-concept-visual::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(44, 24, 16, 0.14), rgba(44, 24, 16, 0));
    pointer-events: none;
  }

  .about-concept-label {
    font-family: var(--font-display);
    font-size: 0.78rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 16px;
  }

  .about-concept-title {
    font-family: var(--font-serif-kr);
    font-size: clamp(1.4rem, 2.5vw, 1.8rem);
    font-weight: 300;
    color: var(--espresso);
    margin-bottom: 24px;
    line-height: 1.6;
  }

  .about-concept-desc {
    font-size: 0.92rem;
    line-height: 1.9;
    color: var(--text-secondary);
    font-weight: 300;
  }

  /* Barista */
  .about-barista {
    padding: 100px clamp(24px, 5vw, 80px);
    background: var(--espresso);
    color: var(--cream);
  }

  .about-barista-inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .about-barista-label {
    font-family: var(--font-display);
    font-size: 0.78rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--latte);
    margin-bottom: 32px;
  }

  .about-barista-quote {
    font-family: var(--font-serif-kr);
    font-size: clamp(1.2rem, 2.5vw, 1.6rem);
    font-weight: 300;
    line-height: 2;
    color: var(--cream);
    margin-bottom: 32px;
    position: relative;
  }

  .about-barista-quote::before {
    content: '"';
    font-family: var(--font-display);
    font-size: 5rem;
    color: var(--terracotta);
    display: block;
    line-height: 1;
    margin-bottom: 8px;
    opacity: 0.4;
  }

  .about-barista-name {
    font-family: var(--font-display);
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    color: var(--caramel);
  }

  @media (max-width: 768px) {
    .about-hero-inner {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .about-hero-visual {
      max-height: 350px;
    }

    .about-values-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }

    .about-concept-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
`;

export const renderAbout = (): string => `
  <style>${aboutStyles}</style>
  ${renderNav()}

  <div id="page-content">
    <section class="about-hero">
      <div class="about-hero-inner">
        <div class="about-hero-text reveal">
          <div class="about-overline">Our Story</div>
          <h1 class="about-hero-title">
            작은 공간에서 시작된<br />
            큰 이야기
          </h1>
          <p class="about-hero-desc">
            파흐드103은 안중의 조용한 거리에 자리 잡은 스페셜티 커피 전문점입니다.
            '파흐드'는 독일어로 '여행'을 뜻하며, 커피 한 잔과 함께하는 작은 여행 같은
            경험을 선사하고자 합니다.
          </p>
        </div>
        <div class="about-hero-visual reveal">
          <img
            src="/images/atmos.jpeg"
            srcset="/images/atmos-thumb.jpg 640w, /images/atmos.jpeg 1400w"
            sizes="(max-width: 768px) 100vw, 45vw"
            alt="파흐드103 공간 이미지"
            loading="lazy"
            decoding="async" />
        </div>
      </div>
    </section>

    <section class="about-story">
      <div class="about-story-label reveal">Philosophy</div>
      <p class="about-story-text reveal">
        우리는 단순히 커피를 팔지 않습니다.<br />
        한 잔의 커피가 만들어지기까지의 여정 —<br />
        농장에서의 정성, 로스팅의 섬세함,<br />
        그리고 추출의 순간까지.<br />
        그 모든 과정을 존중하며,<br />
        손님에게 진정한 한 잔을 드리고 싶습니다.
      </p>
      <div class="about-story-divider"></div>
    </section>

    <section class="about-values">
      <div class="about-values-inner">
        <h2 class="about-values-title reveal">파흐드103이 소중히 여기는 것들</h2>
        <div class="about-values-grid stagger">
          <div class="about-value">
            <div class="about-value-num">01</div>
            <div class="about-value-title">원두에 대한 고집</div>
            <div class="about-value-desc">
              산지별 특성을 살린 싱글 오리진과
              자체 블렌딩으로 최상의 맛을
              추구합니다.
            </div>
          </div>
          <div class="about-value">
            <div class="about-value-num">02</div>
            <div class="about-value-title">공간의 온도</div>
            <div class="about-value-desc">
              따뜻한 조명, 편안한 음악,
              자연 소재의 인테리어로
              쉼이 있는 공간을 만듭니다.
            </div>
          </div>
          <div class="about-value">
            <div class="about-value-num">03</div>
            <div class="about-value-title">지역과 함께</div>
            <div class="about-value-desc">
              안중 지역사회와 함께 성장하며,
              동네 카페만의 따뜻한 정을
              나누고 싶습니다.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-concept">
      <div class="about-concept-grid">
        <div class="about-concept-visual reveal">
          <img
            src="/images/fahrd-103.jpeg"
            srcset="/images/fahrd-103-thumb.jpg 640w, /images/fahrd-103.jpeg 1400w"
            sizes="(max-width: 768px) 100vw, 55vw"
            alt="파흐드103 인테리어"
            loading="lazy"
            decoding="async" />
        </div>
        <div class="reveal">
          <div class="about-concept-label">Interior Concept</div>
          <h2 class="about-concept-title">
            자연과 빈티지가<br />
            어우러지는 공간
          </h2>
          <p class="about-concept-desc">
            파흐드103의 공간은 원목과 콘크리트, 따뜻한 조명이
            조화를 이루는 인더스트리얼 빈티지 컨셉입니다.
            넓은 창으로 들어오는 자연광과 곳곳에 놓인 식물들이
            편안하고 아늑한 분위기를 만들어냅니다.
            혼자서도, 함께여도 편안한 공간을 지향합니다.
          </p>
        </div>
      </div>
    </section>

    <section class="about-barista">
      <div class="about-barista-inner reveal">
        <div class="about-barista-label">From the Barista</div>
        <div class="about-barista-quote">
          커피는 사람과 사람을 잇는 다리입니다.
          파흐드103에서 내리는 모든 한 잔에는
          여러분의 하루가 조금 더 따뜻해지길 바라는
          마음을 담고 있습니다.
        </div>
        <div class="about-barista-name">파흐드103 바리스타</div>
      </div>
    </section>
  </div>

  ${renderFooter()}
`;
