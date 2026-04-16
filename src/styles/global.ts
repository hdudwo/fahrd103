export const injectGlobalStyles = (): void => {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      --espresso: #2C1810;
      --dark-roast: #3D261C;
      --mocha: #5C3D2E;
      --caramel: #A67B5B;
      --latte: #D4A574;
      --cream: #F5EDE3;
      --milk: #FAF7F2;
      --sage: #8B9D77;
      --sage-light: #A8B896;
      --terracotta: #C4755B;
      --warm-gray: #9E958C;
      --text-primary: #2C1810;
      --text-secondary: #5C3D2E;
      --text-muted: #9E958C;

      --font-display: 'Cormorant Garamond', serif;
      --font-serif-kr: 'Noto Serif KR', serif;
      --font-body: 'Noto Sans KR', sans-serif;

      --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
      --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
    }

    *, *::before, *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
    }

    body {
      font-family: var(--font-body);
      color: var(--text-primary);
      background: var(--milk);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body::before {
      content: '';
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: 9999;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 256px 256px;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    img {
      max-width: 100%;
      display: block;
    }

    ul, ol {
      list-style: none;
    }

    button {
      border: none;
      background: none;
      cursor: pointer;
      font-family: inherit;
      color: inherit;
    }

    /* Page transition */
    #page-content {
      animation: pageIn 0.8s var(--ease-out-expo) both;
    }

    @keyframes pageIn {
      from {
        opacity: 0;
        transform: translateY(24px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Reveal animation */
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.9s var(--ease-out-expo), transform 0.9s var(--ease-out-expo);
    }

    .reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Stagger children */
    .stagger > * {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.7s var(--ease-out-expo), transform 0.7s var(--ease-out-expo);
    }

    .stagger.visible > *:nth-child(1) { transition-delay: 0.05s; }
    .stagger.visible > *:nth-child(2) { transition-delay: 0.12s; }
    .stagger.visible > *:nth-child(3) { transition-delay: 0.19s; }
    .stagger.visible > *:nth-child(4) { transition-delay: 0.26s; }
    .stagger.visible > *:nth-child(5) { transition-delay: 0.33s; }
    .stagger.visible > *:nth-child(6) { transition-delay: 0.40s; }
    .stagger.visible > *:nth-child(7) { transition-delay: 0.47s; }
    .stagger.visible > *:nth-child(8) { transition-delay: 0.54s; }
    .stagger.visible > *:nth-child(9) { transition-delay: 0.61s; }

    .stagger.visible > * {
      opacity: 1;
      transform: translateY(0);
    }

    /* Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
    }

    ::-webkit-scrollbar-track {
      background: var(--cream);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--caramel);
      border-radius: 3px;
    }

    /* Selection */
    ::selection {
      background: var(--latte);
      color: var(--espresso);
    }
  `;
  document.head.appendChild(style);
};
