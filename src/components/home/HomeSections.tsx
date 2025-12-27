import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Clock, Anchor, ArrowRight, Ship, Package, Warehouse, Settings, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroCruise from '@/assets/hero-cruise.jpg';
import cargoPort from '@/assets/cargo-port.jpg';
import cruiseInterior from '@/assets/cruise-interior.jpg';
import warehouseImg from '@/assets/warehouse.jpg';

// Counter animation hook
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return { count, countRef };
};

// Hero Section
export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroCruise})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,30%,18%,0.85)] via-[hsl(220,25%,25%,0.7)] to-transparent" />
      
      {/* Content */}
      <div className="relative h-full container-custom flex items-center">
        <div className="max-w-2xl pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium mb-4 text-lg"
          >
            OVER THE NETWORK
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            CREATE NEW
            <br />
            <span className="text-primary">VALUES</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed"
          >
            고객을 위한 새로운 가치를 만들어 가기 위해
            <br />
            오션스타는 먼저 생각하고 먼저 움직입니다
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/about">회사 소개 <ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/business">사업 분야</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Stats Section
export const StatsSection = () => {
  const stats = [
    { icon: Calendar, number: 35, unit: 'YEARS', label: '오션스타 창립 35주년', sublabel: 'SINCE 1990. 07. 12' },
    { icon: Users, number: 1553942, unit: '명', label: '오션스타 오사카 크루즈페리', sublabel: '부산-오사카 총 승객수' },
    { icon: Clock, number: 40, unit: 'HOURS', label: '오션스타코리아랜드브릿지', sublabel: '한-중-일 리드타임' },
    { icon: Anchor, number: 7361, unit: '항차', label: '연안 & 국제 크루즈', sublabel: '정통 크루즈 운항 횟수' },
  ];

  return (
    <section className="py-20 bg-[hsl(220,15%,96%)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">At a Glance</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            해운과 물류를 넘어 네트워크를 통해 새로운 가치를 창조해 가는 오션스타
            <br />
            오션스타의 도전과 혁신은 오늘도 계속되고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const { count, countRef } = useCounter(stat.number);
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-panstar-sm hover:shadow-panstar-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div ref={countRef} className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {count.toLocaleString()}
                  <span className="text-lg ml-1">{stat.unit}</span>
                </div>
                <p className="font-medium text-foreground text-sm">{stat.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sublabel}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Business Area Section
export const BusinessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const businessAreas = [
    {
      id: 'ferry',
      title: '고속화물페리',
      icon: Ship,
      image: cargoPort,
      description: '팬스타는 고속 Ro-Ro 페리를 이용한 해상운송으로 신속한 선적 및 하역, 내륙운송을 제공합니다.',
      features: ['신속한 선적 및 하역', '내륙운송 연계', '한-일간 Door to Door'],
    },
    {
      id: 'cruise',
      title: '크루즈 여객',
      icon: Anchor,
      image: cruiseInterior,
      description: '국내 최초, 대한민국에서 탄생한 5성급 크루즈로 최상의 휴식과 힐링을 제공합니다.',
      features: ['5성급 프리미엄 서비스', '사우나, 테라피룸', 'VIP 전용 공간'],
    },
    {
      id: 'express',
      title: '국제특송',
      icon: Package,
      image: cargoPort,
      description: '당일통관, 일관물류시스템으로 더 빨라진 한·중·일 국제특송화물 서비스를 제공합니다.',
      features: ['당일 통관 시스템', '일관 물류 서비스', 'E-Commerce 최적화'],
    },
    {
      id: 'warehouse',
      title: '창고보관',
      icon: Warehouse,
      image: warehouseImg,
      description: '부산항 신항 자유무역지역에 위치한 물류센터에서 고부가가치 물류서비스를 제공합니다.',
      features: ['자유무역지역 혜택', '고부가가치 작업', '실시간 감독 시스템'],
    },
    {
      id: 'tech',
      title: '친환경 선박기술',
      icon: Leaf,
      image: cargoPort,
      description: 'Ballast Water Management System, SOx Scrubber 등 친환경 선박기술을 제공합니다.',
      features: ['BWMS 설치', 'SOx Scrubber', '3D스캔 설계'],
    },
    {
      id: 'equipment',
      title: '자동차정비기기',
      icon: Settings,
      image: warehouseImg,
      description: '자동차 정비기기 시장 리더, 글로벌 정비브랜드 HESHBON의 제품을 공급합니다.',
      features: ['X-TYPE 리프트', '타이어 휠 밸런스', '휠 얼라인먼트'],
    },
  ];

  const currentBusiness = businessAreas[activeIndex];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Business Area</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            오션스타는 무한한 가능성의 바다에서 최초의 길을 만들어 왔습니다
            <br />
            그리고 이제 고객을 위한 최고를 만들어 갑니다.
          </p>
        </motion.div>

        {/* Business Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {businessAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <button
                key={area.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeIndex === index
                    ? 'bg-primary text-primary-foreground shadow-panstar-orange'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                {area.title}
              </button>
            );
          })}
        </div>

        {/* Business Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            key={currentBusiness.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{currentBusiness.title}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{currentBusiness.description}</p>
            <ul className="space-y-3 mb-6">
              {currentBusiness.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" asChild>
              <Link to={`/business/${currentBusiness.id}`}>자세히 보기 <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </motion.div>

          <motion.div
            key={`img-${currentBusiness.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-panstar-lg">
              <img 
                src={currentBusiness.image} 
                alt={currentBusiness.title}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,30%,18%,0.6)] to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setActiveIndex((prev) => (prev === 0 ? businessAreas.length - 1 : prev - 1))}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveIndex((prev) => (prev === businessAreas.length - 1 ? 0 : prev + 1))}
            className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Schedule Section
export const ScheduleSection = () => {
  const ships = [
    { name: 'OCEANSTAR DREAM', route: '부산 → 오사카' },
    { name: 'OCEANSTAR GENIE', route: '부산 → 쓰루가' },
    { name: 'OCEANSTAR MIRACLE', route: '연안 크루즈' },
  ];

  return (
    <section className="py-20 bg-[hsl(220,30%,18%)] text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule</h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              오션스타 고속화물페리는 빠르고 안전함은 물론,
              <br />
              뛰어난 정시성을 자랑합니다.
              <br />
              주요 선박의 운항일정을 간편하게 확인해 보세요.
            </p>
            
            <div className="space-y-4">
              {ships.map((ship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div>
                    <h4 className="font-semibold">{ship.name}</h4>
                    <p className="text-sm text-white/60">{ship.route}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </motion.div>
              ))}
            </div>

            <Button variant="hero" className="mt-8" asChild>
              <Link to="/schedule">운항 일정 보기</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-8"
          >
            <div className="text-center mb-6">
              <span className="text-6xl font-bold text-primary">1101</span>
              <p className="text-white/60 mt-2">2025년 12월 운항 예정</p>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-sm">
              {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                <div key={day} className="text-white/50 py-2">{day}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i}
                  className={`py-2 rounded ${
                    [3, 7, 12, 18, 24, 28].includes(i + 1) 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-white/70 hover:bg-white/10'
                  } cursor-pointer transition-colors`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// News Section
export const NewsSection = () => {
  const news = [
    {
      type: '보도자료',
      title: '부산에 국내 최대 연안유람선 떴다...오션스타그룹, 2,500톤급 그레이스호 취항',
      date: '2025. 12. 03',
      featured: true,
    },
    { title: '오션스타 미라클호 신규 취항에 따른 특별기획 점검 안내', date: '2025-06-18' },
    { title: '오션스타 미라클호 점검 및 개선 작업에 따른 대체 선박의 운항 안내', date: '2025-06-14' },
    { title: '미라클호 입항 지연 및 운항 일정 안내 (2025.4.17.)', date: '2025-04-17' },
    { title: '오션스타 미라클크루즈 4월 GRAND OPEN', date: '2025-03-12' },
  ];

  return (
    <section className="py-20 bg-[hsl(220,15%,96%)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            오늘보다 내일이 더 새로운 오션스타의 최신 정보를 제공해 드립니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/media/press" className="block bg-white rounded-xl overflow-hidden shadow-panstar-sm hover:shadow-panstar-md transition-all group">
              <div className="relative h-48 bg-gradient-to-br from-primary to-orange-400">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Ship className="w-16 h-16 text-white/30" />
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                  {news[0].type}
                </span>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {news[0].title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{news[0].date}</p>
              </div>
            </Link>
          </motion.div>

          {/* News List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 bg-white rounded-xl p-6 shadow-panstar-sm"
          >
            <h3 className="font-semibold text-lg mb-4">공지사항</h3>
            <div className="space-y-4">
              {news.slice(1).map((item, index) => (
                <Link
                  key={index}
                  to="/support/notice"
                  className="block group"
                >
                  <p className="text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                </Link>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-6" asChild>
              <Link to="/support/notice">더보기</Link>
            </Button>
          </motion.div>

          {/* Recruit CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Link 
              to="/recruit" 
              className="block h-full bg-gradient-to-br from-[hsl(220,30%,18%)] to-[hsl(220,25%,25%)] rounded-xl p-6 text-white hover:shadow-panstar-lg transition-all group"
            >
              <h3 className="text-xl font-bold mb-2">Recruit</h3>
              <p className="text-2xl font-bold text-primary mb-4">오션스타 채용안내</p>
              <p className="text-white/70 text-sm mb-8">
                오션스타와 함께 성장할 인재를 찾습니다.
                <br />
                새로운 도전을 시작하세요.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                채용공고확인
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
