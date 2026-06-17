function normalizePath(pathname) {
  return pathname.replace(/\/+$/u, '') || '/';
}

function isPlainClick(event) {
  return (
    event.button === 0 &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey
  );
}

function isSamePageWithoutHash(url) {
  return (
    url.origin === window.location.origin &&
    normalizePath(url.pathname) === normalizePath(window.location.pathname) &&
    url.search === window.location.search &&
    !url.hash
  );
}

function findCategoryLink(target) {
  if (!(target instanceof Element)) {
    return null;
  }

  const link = target.closest('a.menu__link--sublist[href]');
  const row = link?.closest('.menu__list-item-collapsible');
  if (!link || !row || !row.querySelector('.menu__caret')) {
    return null;
  }

  return link;
}

function scrollToChapterStart() {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? 'auto'
    : 'smooth';
  window.scrollTo({top: 0, behavior});
}

function handleSidebarCategoryClick(event) {
  if (event.defaultPrevented || !isPlainClick(event)) {
    return;
  }

  const link = findCategoryLink(event.target);
  if (!link) {
    return;
  }

  const targetUrl = new URL(link.href, window.location.href);
  if (!isSamePageWithoutHash(targetUrl)) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();

  window.history.pushState(null, '', `${targetUrl.pathname}${targetUrl.search}`);
  scrollToChapterStart();
}

let installed = false;

function install() {
  if (installed || typeof document === 'undefined') {
    return;
  }

  document.addEventListener('click', handleSidebarCategoryClick, true);
  installed = true;
}

install();

export function onRouteDidUpdate() {
  install();
}
