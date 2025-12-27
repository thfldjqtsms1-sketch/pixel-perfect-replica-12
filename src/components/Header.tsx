import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Ship, Phone, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  {
    label: '오션스타 소개',
    path: '/about',
    submenu: [
      { label: '회사소개', path: '/about' },
      { label: 'CEO 인사말', path: '/about/ceo' },
      { label: '연혁', path: '/about/history' },
      { label: '조직도', path: '/about/organization' },
    ]
  },
  {
    label: '사업분야',
    path: '/business',
    submenu: [
      { label: '고속화물페리', path: '/business/ferry' },
      { label: '크루즈 여객', path: '/business/cruise' },
      { label: '국제특송', path: '/business/express' },
      { label: '창고보관', path: '/business/warehouse' },
    ]
  },
  {
    label: '고객지원',
    path: '/support',
    submenu: [
      { label: '공지사항', path: '/support/notice' },
      { label: '자주묻는 질문', path: '/support/faq' },
      { label: '1:1 문의', path: '/support/inquiry' },
    ]
  },
  {
    label: '미디어센터',
    path: '/media',
    submenu: [
      { label: '보도자료', path: '/media/press' },
      { label: '홍보영상', path: '/media/video' },
      { label: '갤러리', path: '/media/gallery' },
    ]
  },
  {
    label: '인재채용',
    path: '/recruit',
    submenu: [
      { label: '채용안내', path: '/recruit' },
      { label: '채용공고', path: '/recruit/jobs' },
    ]
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const headerBg = isScrolled || !isHome
    ? 'bg-white shadow-panstar-sm'
    : 'bg-transparent';

  const textColor = isScrolled || !isHome
    ? 'text-foreground'
    : 'text-white';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Ship className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className={`text-xl font-bold tracking-tight ${textColor}`}>
                  Ocean<span className="text-primary">Star</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setActiveSubmenu(item.path)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-4 py-2 font-medium transition-colors flex items-center gap-1 ${textColor} hover:text-primary`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === item.path ? 'rotate-180' : ''}`} />
                  </Link>
                  
                  <AnimatePresence>
                    {activeSubmenu === item.path && item.submenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-white rounded-lg shadow-panstar-lg py-2 min-w-[200px]">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="hero" size="sm" className="gap-2">
                <Package className="w-4 h-4" />
                e SHIPPING
              </Button>
              <Button variant="ghost" size="sm" className={`${textColor} gap-1`}>
                FAMILY SITE
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 ${textColor}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <div className="container-custom py-4">
                {navItems.map((item) => (
                  <div key={item.path} className="border-b last:border-b-0">
                    <button
                      className="w-full flex items-center justify-between py-3 font-medium text-foreground"
                      onClick={() => setActiveSubmenu(activeSubmenu === item.path ? null : item.path)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === item.path ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeSubmenu === item.path && item.submenu && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-muted"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="pt-4">
                  <Button variant="hero" className="w-full gap-2">
                    <Package className="w-4 h-4" />
                    e SHIPPING
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating Quick Links - Only on Home */}
      {isHome && (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
          <motion.a
            href="#"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-20 h-20 rounded-full bg-muted/80 backdrop-blur-sm flex flex-col items-center justify-center gap-1 hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <Package className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground" />
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary-foreground">국제특송</span>
            <span className="text-xs text-muted-foreground group-hover:text-primary-foreground">예약/조회</span>
          </motion.a>
          <motion.a
            href="#"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="w-20 h-20 rounded-full bg-muted/80 backdrop-blur-sm flex flex-col items-center justify-center gap-1 hover:bg-primary hover:text-primary-foreground transition-colors group"
          >
            <Ship className="w-6 h-6 text-muted-foreground group-hover:text-primary-foreground" />
            <span className="text-xs font-medium text-muted-foreground group-hover:text-primary-foreground">크루즈</span>
            <span className="text-xs text-muted-foreground group-hover:text-primary-foreground">예약/조회</span>
          </motion.a>
        </div>
      )}
    </>
  );
};
