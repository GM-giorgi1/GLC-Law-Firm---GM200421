/**
 * Smoothly scrolls to a section by ID while accounting for the fixed global navbar height.
 * Returns true if the element was found and scrolled to, false otherwise.
 */
export function scrollToSection(sectionId: string, behavior: ScrollBehavior = 'smooth'): boolean {
  if (typeof window === 'undefined' || !sectionId) return false;
  const el = document.getElementById(sectionId);
  if (!el) return false;

  const navbar = document.querySelector<HTMLElement>('header[data-global-navbar="true"]');
  const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 76;
  const targetTop = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 8;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior,
  });

  return true;
}
