import { Link } from 'react-router-dom';
import { Ship, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { label: '회사소개', path: '/about' },
    { label: 'CEO 인사말', path: '/about/ceo' },
    { label: '연혁', path: '/about/history' },
    { label: '조직도', path: '/about/organization' },
  ],
  business: [
    { label: '고속화물페리', path: '/business/ferry' },
    { label: '크루즈 여객', path: '/business/cruise' },
    { label: '국제특송', path: '/business/express' },
    { label: '창고보관', path: '/business/warehouse' },
  ],
  support: [
    { label: '공지사항', path: '/support/notice' },
    { label: '자주묻는 질문', path: '/support/faq' },
    { label: '1:1 문의', path: '/support/inquiry' },
    { label: '채용안내', path: '/recruit' },
  ],
  familySite: [
    { label: '오션스타엔터프라이즈', path: '#' },
    { label: '오션스타크루즈', path: '#' },
    { label: '오션스타물류센터', path: '#' },
    { label: '오션스타국제특송', path: '#' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-[hsl(220,30%,18%)] text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Contact */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Ship className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Ocean<span className="text-primary">Star</span>
              </span>
            </Link>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>부산광역시 중구 중앙대로 27<br />오션스타빌딩 12층</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>051-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>contact@oceanstar.co.kr</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">회사소개</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">사업분야</h4>
            <ul className="space-y-2">
              {footerLinks.business.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">고객지원</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Family Site */}
          <div>
            <h4 className="font-semibold mb-4 text-white">패밀리 사이트</h4>
            <ul className="space-y-2">
              {footerLinks.familySite.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
            <Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">이용약관</Link>
            <span className="hidden md:inline">|</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">사이트맵</Link>
          </div>
          <p className="text-xs text-white/50 text-center md:text-right">
            © 2024 OceanStar. All rights reserved. Since 1990.
          </p>
        </div>
      </div>
    </footer>
  );
};
