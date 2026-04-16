import { renderNav, navStyles } from '../components/nav.ts';
import { renderFooter, footerStyles } from '../components/footer.ts';

interface MenuItem {
  name: string;
  eng: string;
  price: string;
  desc?: string;
  tag?: string;
}

interface MenuCategory {
  title: string;
  titleEng: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: '커피',
    titleEng: 'COFFEE',
    items: [
      { name: '아메리카노', eng: 'Americano', price: '4,500', desc: '깔끔한 싱글 오리진' },
      { name: '카페라떼', eng: 'Café Latte', price: '5,000', desc: '부드러운 우유와 에스프레소' },
      { name: '카푸치노', eng: 'Cappuccino', price: '5,000', desc: '풍성한 우유 거품' },
      { name: '바닐라 라떼', eng: 'Vanilla Latte', price: '5,500', desc: '마다가스카르 바닐라빈' },
      { name: '카라멜 마끼아또', eng: 'Caramel Macchiato', price: '5,500' },
      { name: '시그니처 라떼', eng: 'Signature Latte', price: '6,000', desc: '파흐드 시그니처 블렌딩', tag: 'BEST' },
      { name: '콜드브루', eng: 'Cold Brew', price: '5,000', desc: '18시간 저온 추출' },
      { name: '콜드브루 라떼', eng: 'Cold Brew Latte', price: '5,500' },
      { name: '에스프레소', eng: 'Espresso', price: '3,500' },
      { name: '플랫 화이트', eng: 'Flat White', price: '5,000' },
    ],
  },
  {
    title: '논커피',
    titleEng: 'NON-COFFEE',
    items: [
      { name: '녹차 라떼', eng: 'Green Tea Latte', price: '5,500', desc: '국내산 유기농 말차' },
      { name: '초코 라떼', eng: 'Chocolate Latte', price: '5,500' },
      { name: '고구마 라떼', eng: 'Sweet Potato Latte', price: '5,500' },
      { name: '딸기 라떼', eng: 'Strawberry Latte', price: '6,000', tag: 'SEASONAL' },
      { name: '허브티', eng: 'Herbal Tea', price: '5,000', desc: '캐모마일 / 페퍼민트 / 루이보스' },
      { name: '얼그레이', eng: 'Earl Grey', price: '4,500' },
    ],
  },
  {
    title: '에이드 & 스무디',
    titleEng: 'ADE & SMOOTHIE',
    items: [
      { name: '레몬 에이드', eng: 'Lemon Ade', price: '5,500' },
      { name: '자몽 에이드', eng: 'Grapefruit Ade', price: '5,500' },
      { name: '패션후르츠 에이드', eng: 'Passion Fruit Ade', price: '6,000', tag: 'NEW' },
      { name: '망고 스무디', eng: 'Mango Smoothie', price: '6,000' },
      { name: '베리 스무디', eng: 'Berry Smoothie', price: '6,000' },
    ],
  },
  {
    title: '디저트',
    titleEng: 'DESSERT',
    items: [
      { name: '바스크 치즈케이크', eng: 'Basque Cheesecake', price: '6,500', desc: '매일 아침 직접 굽는', tag: 'BEST' },
      { name: '티라미수', eng: 'Tiramisu', price: '6,500' },
      { name: '당근 케이크', eng: 'Carrot Cake', price: '6,000' },
      { name: '크로플', eng: 'Croffle', price: '4,500', desc: '바삭한 크루아상 와플' },
      { name: '스콘', eng: 'Scone', price: '4,000', desc: '플레인 / 얼그레이' },
      { name: '마들렌', eng: 'Madeleine', price: '3,000' },
      { name: '휘낭시에', eng: 'Financier', price: '3,000' },
    ],
  },
];

const renderMenuItems = (items: MenuItem[]): string =>
  items
    .map(
      (item) => `
    <div class="menu-item">
      <div class="menu-item-header">
        <div class="menu-item-left">
          <span class="menu-item-name">${item.name}</span>
          ${item.tag ? `<span class="menu-tag">${item.tag}</span>` : ''}
        </div>
        <span class="menu-item-dots"></span>
        <span class="menu-item-price">₩${item.price}</span>
      </div>
      <div class="menu-item-sub">
        <span class="menu-item-eng">${item.eng}</span>
        ${item.desc ? `<span class="menu-item-desc">— ${item.desc}</span>` : ''}
      </div>
    </div>
  `
    )
    .join('');

const renderMenuCategories = (): string =>
  menuData
    .map(
      (cat, i) => `
    <div class="menu-category reveal" style="transition-delay: ${i * 0.1}s">
      <div class="menu-category-header">
        <span class="menu-category-eng">${cat.titleEng}</span>
        <h3 class="menu-category-title">${cat.title}</h3>
      </div>
      <div class="menu-items">
        ${renderMenuItems(cat.items)}
      </div>
    </div>
  `
    )
    .join('');

const menuStyles = `
  ${navStyles}
  ${footerStyles}

  .menu-hero {
    padding: 160px clamp(24px, 5vw, 80px) 80px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .menu-hero::after {
    content: 'MENU';
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

  .menu-overline {
    font-family: var(--font-display);
    font-size: 0.8rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 16px;
  }

  .menu-title {
    font-family: var(--font-serif-kr);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: var(--espresso);
    margin-bottom: 16px;
  }

  .menu-subtitle {
    font-size: 0.95rem;
    color: var(--warm-gray);
    font-weight: 300;
    line-height: 1.7;
  }

  .menu-note {
    margin-top: 12px;
    font-size: 0.8rem;
    color: var(--caramel);
    font-style: italic;
  }

  /* Categories */
  .menu-body {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 80px) 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px 80px;
  }

  .menu-category {
    padding-top: 40px;
  }

  .menu-category-header {
    margin-bottom: 32px;
    border-bottom: 1px solid rgba(44, 24, 16, 0.08);
    padding-bottom: 16px;
  }

  .menu-category-eng {
    font-family: var(--font-display);
    font-size: 0.72rem;
    letter-spacing: 0.25em;
    color: var(--caramel);
    display: block;
    margin-bottom: 6px;
  }

  .menu-category-title {
    font-family: var(--font-serif-kr);
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--espresso);
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .menu-item {
    transition: transform 0.3s var(--ease-out-expo);
  }

  .menu-item:hover {
    transform: translateX(4px);
  }

  .menu-item-header {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .menu-item-left {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .menu-item-name {
    font-family: var(--font-serif-kr);
    font-size: 1rem;
    font-weight: 400;
    color: var(--espresso);
    white-space: nowrap;
  }

  .menu-tag {
    font-family: var(--font-display);
    font-size: 0.6rem;
    letter-spacing: 0.12em;
    padding: 2px 8px;
    background: var(--terracotta);
    color: white;
    border-radius: 2px;
    font-weight: 600;
    white-space: nowrap;
  }

  .menu-item-dots {
    flex: 1;
    border-bottom: 1px dotted var(--caramel);
    opacity: 0.4;
    min-width: 20px;
    margin-bottom: 4px;
  }

  .menu-item-price {
    font-family: var(--font-display);
    font-size: 0.95rem;
    color: var(--mocha);
    white-space: nowrap;
    font-weight: 400;
  }

  .menu-item-sub {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 4px;
    flex-wrap: wrap;
  }

  .menu-item-eng {
    font-family: var(--font-display);
    font-size: 0.78rem;
    color: var(--warm-gray);
    font-style: italic;
  }

  .menu-item-desc {
    font-size: 0.78rem;
    color: var(--caramel);
    font-weight: 300;
  }

  @media (max-width: 768px) {
    .menu-body {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }
`;

export const renderMenu = (): string => `
  <style>${menuStyles}</style>
  ${renderNav()}

  <div id="page-content">
    <section class="menu-hero">
      <div class="menu-overline reveal">Our Menu</div>
      <h1 class="menu-title reveal">메뉴</h1>
      <p class="menu-subtitle reveal">정성을 담아 준비한 파흐드103의 메뉴입니다.</p>
      <p class="menu-note reveal">모든 음료는 ICE / HOT 선택 가능합니다.</p>
    </section>

    <section class="menu-body">
      ${renderMenuCategories()}
    </section>
  </div>

  ${renderFooter()}
`;
