export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface NavbarPresenterProps {
  navItems: NavItem[];
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}