interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  image?: string;
}

const SITE_NAME = '파흐드103';
const SITE_TITLE = '파흐드103 | FAHRD 103';
const DEFAULT_IMAGE = '/images/fahrd-103.jpeg';

const routeSeo: Record<string, SeoMeta> = {
  '/': {
    title: '파흐드103 | FAHRD 103',
    description: '안중 카페 파흐드103. 스페셜티 커피, 디저트, 아늑한 공간을 소개합니다.',
    keywords: '파흐드103, 안중카페, 평택카페, 스페셜티커피, 디저트카페',
    image: '/images/fahrd-103.jpeg',
  },
  '/menu': {
    title: '메뉴 | 파흐드103',
    description: '파흐드103의 커피, 논커피, 에이드, 디저트 메뉴를 확인해보세요.',
    keywords: '파흐드103 메뉴, 안중 카페 메뉴, 시그니처 라떼, 바스크 치즈케이크',
    image: '/images/coffee.jpg',
  },
  '/about': {
    title: '소개 | 파흐드103',
    description: '파흐드103의 공간 철학과 카페 스토리를 소개합니다.',
    keywords: '파흐드103 소개, 안중 카페, 카페 인테리어, 카페 스토리',
    image: '/images/atmos.jpeg',
  },
  '/gallery': {
    title: '갤러리 | 파흐드103',
    description: '파흐드103의 공간과 메뉴 사진을 갤러리에서 만나보세요.',
    keywords: '파흐드103 갤러리, 카페 사진, 안중 카페 이미지',
    image: '/images/fahrd-103.jpeg',
  },
  '/visit': {
    title: '오시는 길 | 파흐드103',
    description: '파흐드103 위치, 영업시간, 주차안내와 지도 길찾기를 제공합니다.',
    keywords: '파흐드103 위치, 안중 카페 위치, 평택 카페 길찾기',
    image: '/images/fahrd-103.jpeg',
  },
};

const upsertMetaByName = (name: string, content: string): void => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const upsertMetaByProperty = (property: string, content: string): void => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

const upsertCanonical = (href: string): void => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export const applySeo = (path: string): void => {
  const meta = routeSeo[path] || routeSeo['/'];
  const title = meta.title || SITE_TITLE;
  const image = meta.image || DEFAULT_IMAGE;
  const url = `${window.location.origin}${path === '/' ? '/' : `/#${path}`}`;

  document.title = title;

  upsertMetaByName('description', meta.description);
  upsertMetaByName('keywords', meta.keywords);
  upsertMetaByName('robots', 'index,follow');

  upsertMetaByProperty('og:type', 'website');
  upsertMetaByProperty('og:site_name', SITE_NAME);
  upsertMetaByProperty('og:title', title);
  upsertMetaByProperty('og:description', meta.description);
  upsertMetaByProperty('og:image', image);
  upsertMetaByProperty('og:url', url);

  upsertMetaByName('twitter:card', 'summary_large_image');
  upsertMetaByName('twitter:title', title);
  upsertMetaByName('twitter:description', meta.description);
  upsertMetaByName('twitter:image', image);

  upsertCanonical(url);
};
