import { renderNav, navStyles } from '../components/nav.ts';
import { renderFooter, footerStyles } from '../components/footer.ts';

interface GalleryItem {
  title: string;
  category: string;
  gradient: string;
  image: string;
  thumb?: string;
  span?: string;
}

const galleryItems: GalleryItem[] = [
  { title: '카페 외관', category: 'SPACE', gradient: 'linear-gradient(135deg, #C9B99A 0%, #A89070 100%)', image: '/images/fahrd-103.jpeg', thumb: '/images/fahrd-103-thumb.jpg', span: 'wide' },
  { title: '시그니처 라떼', category: 'DRINK', gradient: 'linear-gradient(135deg, #D4A574 0%, #B8845A 100%)', image: '/images/coffee.jpg', thumb: '/images/coffee-thumb.jpg' },
  { title: '원목 테이블', category: 'INTERIOR', gradient: 'linear-gradient(135deg, #8B7355 0%, #6B5B43 100%)', image: '/images/atmos.jpeg', thumb: '/images/atmos-thumb.jpg' },
  { title: '바스크 치즈케이크', category: 'DESSERT', gradient: 'linear-gradient(135deg, #E8D5B7 0%, #C4A882 100%)', image: '/images/bread.webp' },
  { title: '수제 에이드', category: 'BREWING', gradient: 'linear-gradient(135deg, #3D261C 0%, #2C1810 100%)', image: '/images/ade.webp' },
];

const categories = ['전체', ...Array.from(new Set(galleryItems.map((item) => item.category)))];

const getSrcSet = (item: GalleryItem): string => (
  item.thumb ? `${item.thumb} 640w, ${item.image} 1400w` : `${item.image} 1200w`
);

const getSizes = (item: GalleryItem): string => {
  if (item.span === 'wide') {
    return '(max-width: 768px) 100vw, 66vw';
  }

  return '(max-width: 768px) 50vw, 33vw';
};

const galleryStyles = `
  ${navStyles}
  ${footerStyles}

  .gallery-hero {
    padding: 160px clamp(24px, 5vw, 80px) 60px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .gallery-hero::after {
    content: 'GALLERY';
    position: absolute;
    top: 100px;
    right: clamp(24px, 5vw, 80px);
    font-family: var(--font-display);
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 300;
    color: rgba(44, 24, 16, 0.03);
    letter-spacing: 0.1em;
    pointer-events: none;
  }

  .gallery-overline {
    font-family: var(--font-display);
    font-size: 0.8rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--terracotta);
    margin-bottom: 16px;
  }

  .gallery-title {
    font-family: var(--font-serif-kr);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 300;
    color: var(--espresso);
    margin-bottom: 16px;
  }

  .gallery-desc {
    font-size: 0.95rem;
    color: var(--warm-gray);
    font-weight: 300;
  }

  /* Filter */
  .gallery-filters {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 80px) 48px;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .gallery-filter {
    padding: 8px 20px;
    font-family: var(--font-display);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    color: var(--warm-gray);
    border: 1px solid rgba(44, 24, 16, 0.1);
    cursor: pointer;
    transition: all 0.3s var(--ease-out-expo);
    background: transparent;
  }

  .gallery-filter:hover,
  .gallery-filter.active {
    background: var(--espresso);
    color: var(--cream);
    border-color: var(--espresso);
  }

  /* Grid */
  .gallery-grid {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 80px) 120px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    grid-auto-flow: dense;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 1;
  }

  .gallery-item.wide {
    grid-column: span 2;
    aspect-ratio: 2/1;
  }

  .gallery-item.tall {
    grid-row: span 2;
    aspect-ratio: auto;
  }

  .gallery-item-bg {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.7s var(--ease-out-expo);
  }

  .gallery-item-bg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .gallery-item:hover .gallery-item-bg {
    transform: scale(1.06);
  }

  .gallery-item-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(44, 24, 16, 0.7) 0%, rgba(44, 24, 16, 0) 60%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 24px;
    opacity: 0;
    transition: opacity 0.4s var(--ease-out-expo);
  }

  .gallery-item:hover .gallery-item-overlay {
    opacity: 1;
  }

  .gallery-item-cat {
    font-family: var(--font-display);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    color: var(--latte);
    margin-bottom: 4px;
  }

  .gallery-item-title {
    font-family: var(--font-serif-kr);
    font-size: 1.1rem;
    color: white;
    font-weight: 300;
  }

  /* Lightbox */
  .lightbox {
    position: fixed;
    inset: 0;
    z-index: 2000;
    background: rgba(44, 24, 16, 0.92);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s;
    cursor: pointer;
  }

  .lightbox.open {
    opacity: 1;
    pointer-events: all;
  }

  .lightbox-content {
    width: 70vw;
    max-width: 800px;
    aspect-ratio: 4/3;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    transform: scale(0.9);
    transition: transform 0.5s var(--ease-out-expo);
  }

  .lightbox.open .lightbox-content {
    transform: scale(1);
  }

  .lightbox-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
    display: block;
  }

  .lightbox-title {
    font-family: var(--font-serif-kr);
    font-size: 1.2rem;
    color: var(--cream);
    font-weight: 300;
  }

  .lightbox-close {
    position: absolute;
    top: 32px;
    right: 32px;
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--cream);
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s;
    background: none;
    border: none;
  }

  .lightbox-close:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .gallery-grid {
      grid-template-columns: 1fr 1fr;
    }

    .gallery-item.wide {
      grid-column: span 2;
    }

    .lightbox-content {
      width: 90vw;
    }
  }

  @media (max-width: 480px) {
    .gallery-grid {
      grid-template-columns: 1fr;
    }

    .gallery-item.wide {
      grid-column: span 1;
      aspect-ratio: 16/9;
    }

    .gallery-item.tall {
      grid-row: span 1;
      aspect-ratio: 1;
    }
  }
`;

const renderGalleryItems = (): string =>
  galleryItems
    .map(
      (item) => `
    <div class="gallery-item ${item.span || ''}" data-category="${item.category}" data-title="${item.title}" data-image="${item.image}">
      <div class="gallery-item-bg" style="background: ${item.gradient}">
        <img
          src="${item.image}"
          srcset="${getSrcSet(item)}"
          sizes="${getSizes(item)}"
          alt="${item.title}"
          loading="lazy"
          decoding="async" />
      </div>
      <div class="gallery-item-overlay">
        <span class="gallery-item-cat">${item.category}</span>
        <span class="gallery-item-title">${item.title}</span>
      </div>
    </div>
  `
    )
    .join('');

const renderFilterButtons = (): string =>
  categories
    .map(
      (cat, i) => `
    <button class="gallery-filter ${i === 0 ? 'active' : ''}" data-filter="${cat}">${cat === '전체' ? '전체' : cat}</button>
  `
    )
    .join('');

export const renderGallery = (): string => `
  <style>${galleryStyles}</style>
  ${renderNav()}

  <div id="page-content">
    <section class="gallery-hero">
      <div class="gallery-overline reveal">Gallery</div>
      <h1 class="gallery-title reveal">갤러리</h1>
      <p class="gallery-desc reveal">파흐드103의 공간과 메뉴를 사진으로 만나보세요.</p>
    </section>

    <div class="gallery-filters reveal">
      ${renderFilterButtons()}
    </div>

    <section class="gallery-grid stagger">
      ${renderGalleryItems()}
    </section>

    <div class="lightbox" id="lightbox">
      <button class="lightbox-close">✕</button>
      <div class="lightbox-content">
        <img class="lightbox-image" id="lightbox-image" alt="갤러리 미리보기" />
        <span class="lightbox-title" id="lightbox-title"></span>
      </div>
    </div>
  </div>

  ${renderFooter()}
`;

export const initGalleryEvents = (): void => {
  // Filter
  document.querySelectorAll('.gallery-filter').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.gallery-filter').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = (btn as HTMLElement).dataset.filter;
      document.querySelectorAll('.gallery-item').forEach((item) => {
        const el = item as HTMLElement;
        if (filter === '전체' || el.dataset.category === filter) {
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement | null;

  document.querySelectorAll('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      const element = item as HTMLElement;
      const title = element.dataset.title || '';
      const image = element.dataset.image || '';
      if (lightboxTitle) lightboxTitle.textContent = title;
      if (lightboxImage) {
        lightboxImage.src = image;
        lightboxImage.alt = title;
      }
      lightbox?.classList.add('open');
    });
  });

  lightbox?.addEventListener('click', () => {
    lightbox.classList.remove('open');
    if (lightboxImage) lightboxImage.src = '';
  });
};
