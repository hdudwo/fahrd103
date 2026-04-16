type RouteHandler = () => string;

interface Route {
  path: string;
  handler: RouteHandler;
}

const routes: Route[] = [];

export const registerRoute = (path: string, handler: RouteHandler): void => {
  routes.push({ path, handler });
};

export const navigate = (path: string): void => {
  window.location.hash = path;
};

export const getCurrentPath = (): string => {
  return window.location.hash.slice(1) || '/';
};

export const initRouter = (renderTarget: HTMLElement): void => {
  const render = (): void => {
    const path = getCurrentPath();
    const route = routes.find(r => r.path === path);

    if (route) {
      renderTarget.innerHTML = route.handler();
    } else {
      const homeRoute = routes.find(r => r.path === '/');
      if (homeRoute) {
        renderTarget.innerHTML = homeRoute.handler();
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    initRevealObserver();
    bindPageEvents();
  };

  window.addEventListener('hashchange', render);
  render();
};

const initRevealObserver = (): void => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .stagger').forEach((el) => {
    observer.observe(el);
  });
};

const bindPageEvents = (): void => {
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const path = (el as HTMLElement).dataset.nav;
      if (path) navigate(path);
    });
  });

  // Mobile menu toggle
  const burger = document.querySelector('.nav-burger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      burger.classList.toggle('active');
    });

    mobileMenu.querySelectorAll('[data-nav]').forEach((el) => {
      el.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.classList.remove('active');
      });
    });
  }
};
