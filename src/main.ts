import { injectGlobalStyles } from './styles/global.ts';
import { registerRoute, initRouter, getCurrentPath } from './router.ts';
import { renderHome } from './pages/home.ts';
import { renderMenu } from './pages/menu.ts';
import { renderAbout } from './pages/about.ts';
import { renderGallery, initGalleryEvents } from './pages/gallery.ts';
import { renderVisit } from './pages/visit.ts';
import { applySeo } from './seo.ts';

// Inject global styles
injectGlobalStyles();

// Register routes
registerRoute('/', renderHome);
registerRoute('/menu', renderMenu);
registerRoute('/about', renderAbout);
registerRoute('/gallery', () => {
  const html = renderGallery();
  requestAnimationFrame(() => {
    initGalleryEvents();
  });
  return html;
});
registerRoute('/visit', renderVisit);

// Init
const app = document.getElementById('app');
if (app) {
  initRouter(app);
  applySeo(getCurrentPath());
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Re-init gallery events on hash change
window.addEventListener('hashchange', () => {
  applySeo(getCurrentPath());
  if (getCurrentPath() === '/gallery') {
    requestAnimationFrame(() => {
      initGalleryEvents();
    });
  }
});
