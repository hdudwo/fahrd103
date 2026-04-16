export const navStyles = `
  .nav {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    z-index: 1000;
    padding: 0 clamp(24px, 5vw, 80px);
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(250, 247, 242, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(44, 24, 16, 0.06);
    transition: all 0.4s var(--ease-out-expo);
  }

  .nav.scrolled {
    height: 60px;
    box-shadow: 0 2px 20px rgba(44, 24, 16, 0.06);
  }

  .nav-logo {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--espresso);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-logo-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--terracotta);
    display: inline-block;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 36px;
  }

  .nav-link {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 400;
    letter-spacing: 0.08em;
    color: var(--text-secondary);
    cursor: pointer;
    position: relative;
    padding: 4px 0;
    transition: color 0.3s;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background: var(--terracotta);
    transition: width 0.4s var(--ease-out-expo);
  }

  .nav-link:hover {
    color: var(--espresso);
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .nav-burger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    padding: 4px;
    z-index: 1001;
  }

  .nav-burger span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: var(--espresso);
    transition: all 0.3s var(--ease-out-expo);
    transform-origin: center;
  }

  .nav-burger.active span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }

  .nav-burger.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-burger.active span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  .nav-mobile {
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100vh;
    background: var(--milk);
    z-index: 999;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s var(--ease-out-expo);
  }

  .nav-mobile.open {
    opacity: 1;
    pointer-events: all;
  }

  .nav-mobile .nav-link {
    font-size: 1.2rem;
    font-family: var(--font-serif-kr);
    letter-spacing: 0.12em;
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }

    .nav-burger {
      display: flex;
    }

    .nav-mobile {
      display: flex;
    }
  }
`;

export const renderNav = (): string => `
  <nav class="nav">
    <div class="nav-logo" data-nav="/">
      <span class="nav-logo-dot"></span>
      FAHRD 103
    </div>
    <div class="nav-links">
      <span class="nav-link" data-nav="/">홈</span>
      <span class="nav-link" data-nav="/menu">메뉴</span>
      <span class="nav-link" data-nav="/about">소개</span>
      <span class="nav-link" data-nav="/gallery">갤러리</span>
      <span class="nav-link" data-nav="/visit">방문</span>
    </div>
    <div class="nav-burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="nav-mobile">
      <span class="nav-link" data-nav="/">홈</span>
      <span class="nav-link" data-nav="/menu">메뉴</span>
      <span class="nav-link" data-nav="/about">소개</span>
      <span class="nav-link" data-nav="/gallery">갤러리</span>
      <span class="nav-link" data-nav="/visit">방문</span>
    </div>
  </nav>
`;
