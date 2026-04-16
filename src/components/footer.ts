export const footerStyles = `
  .footer {
    background: var(--espresso);
    color: var(--cream);
    padding: 80px clamp(24px, 5vw, 80px) 40px;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr;
    gap: 48px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-brand {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 16px;
    letter-spacing: 0.04em;
  }

  .footer-brand-sub {
    font-size: 0.85rem;
    color: var(--caramel);
    line-height: 1.7;
    font-weight: 300;
  }

  .footer-heading {
    font-family: var(--font-display);
    font-size: 0.9rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--latte);
    margin-bottom: 20px;
    font-weight: 400;
  }

  .footer-link {
    display: block;
    font-size: 0.85rem;
    color: var(--warm-gray);
    margin-bottom: 12px;
    cursor: pointer;
    transition: color 0.3s;
    font-weight: 300;
  }

  .footer-link:hover {
    color: var(--cream);
  }

  .footer-divider {
    max-width: 1200px;
    margin: 48px auto 0;
    padding-top: 24px;
    border-top: 1px solid rgba(245, 237, 227, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footer-copy {
    font-size: 0.75rem;
    color: var(--warm-gray);
    font-weight: 300;
    letter-spacing: 0.04em;
  }

  .footer-socials {
    display: flex;
    gap: 20px;
  }

  .footer-social {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(245, 237, 227, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    color: var(--warm-gray);
    transition: all 0.3s;
    cursor: pointer;
  }

  .footer-social:hover {
    border-color: var(--latte);
    color: var(--cream);
    background: rgba(245, 237, 227, 0.05);
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr 1fr;
      gap: 36px;
    }

    .footer-divider {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }
  }

  @media (max-width: 480px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export const renderFooter = (): string => `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">파흐드103</div>
        <div class="footer-brand-sub">
          안중의 작은 쉼터에서<br />
          정성스러운 한 잔을 드립니다.
        </div>
      </div>
      <div>
        <div class="footer-heading">Pages</div>
        <span class="footer-link" data-nav="/">홈</span>
        <span class="footer-link" data-nav="/menu">메뉴</span>
        <span class="footer-link" data-nav="/about">소개</span>
        <span class="footer-link" data-nav="/gallery">갤러리</span>
      </div>
      <div>
        <div class="footer-heading">Hours</div>
        <span class="footer-link">월–금 10:00 – 21:00</span>
        <span class="footer-link">토–일 10:00 – 22:00</span>
        <span class="footer-link">매주 화요일 정기휴무</span>
      </div>
      <div>
        <div class="footer-heading">Contact</div>
        <span class="footer-link">경기도 평택시 안중읍</span>
        <span class="footer-link">Instagram @fahrd103</span>
      </div>
    </div>
    <div class="footer-divider">
      <div class="footer-copy">© 2026 파흐드103. All rights reserved.</div>
      <div class="footer-socials">
        <div class="footer-social">IG</div>
        <div class="footer-social">KK</div>
      </div>
    </div>
  </footer>
`;
