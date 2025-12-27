import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Ship, Anchor, Package, Warehouse, Leaf, Settings, Check, Clock, Shield, Truck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import cargoPort from '@/assets/cargo-port.jpg';
import cruiseInterior from '@/assets/cruise-interior.jpg';
import warehouseImg from '@/assets/warehouse.jpg';

const businessData = {
  ferry: {
    title: '고속화물페리',
    subtitle: '일본 산업중심도시 직항',
    icon: Ship,
    image: cargoPort,
    description: '오션스타는 고속 Ro-Ro 페리를 이용한 해상운송으로 신속한 선적 및 하역, 내륙운송, 현지 통관면허를 보유하고 있는 일본 현지법인을 통해 일관해상운송체계를 구축하였습니다.',
    features: [
      { icon: Clock, title: 'HOT DELIVERY SERVICE', desc: '최단 수송 시간으로 운항하여 익일 오전 수입지 입항' },
      { icon: Truck, title: 'ROLL-ON & ROLL-OFF', desc: '빠른 선적 및 하역으로 다음날 오전에 바로 배송' },
      { icon: Shield, title: '안전한 운송', desc: '컨테이너 없이 선내 직접 선적으로 안전하게 운송' },
    ],
    stats: [
      { label: '리드타임', value: '18시간' },
      { label: '주간 운항', value: '14회' },
      { label: '운항 노선', value: '2개' },
    ],
  },
  cruise: {
    title: '크루즈 여객',
    subtitle: '5성급 프리미엄 크루즈',
    icon: Anchor,
    image: cruiseInterior,
    description: '국내 최초, 대한민국에서 탄생한 5성급 크루즈. 오션스타 미라클 크루즈가 최상의 휴식과 힐링을 위한 다양한 편의시설과 VIP 고객 전용 공간을 제공합니다.',
    features: [
      { icon: Check, title: '프리미엄 시설', desc: '사우나, 테라피룸, 야외수영장 등 완비' },
      { icon: Check, title: 'VIP 전용 공간', desc: '고급스러운 프라이빗 라운지 제공' },
      { icon: Check, title: '미식 경험', desc: '프리미엄 레스토랑에서 특별한 식사' },
    ],
    stats: [
      { label: '총 승객수', value: '155만명+' },
      { label: '운항 횟수', value: '7,361회' },
      { label: '고객 만족도', value: '98%' },
    ],
  },
  express: {
    title: '국제특송',
    subtitle: 'PIEX - 한·중·일 국제특송',
    icon: Package,
    image: cargoPort,
    description: '당일통관, 일관물류시스템으로 더 빨라진 한·중·일 국제특송화물 서비스. 고속화물페리를 주축으로 하는 신개념 국제해상특송서비스 PIEX가 E-Commerce를 더 확장시킵니다.',
    features: [
      { icon: Clock, title: '당일 통관', desc: '신속한 통관 처리로 배송 시간 단축' },
      { icon: Truck, title: '일관 물류', desc: '포장부터 배송까지 원스톱 서비스' },
      { icon: Shield, title: '실시간 추적', desc: '화물 위치 실시간 확인 가능' },
    ],
    stats: [
      { label: '일일 처리량', value: '10,000+' },
      { label: '배송 정확도', value: '99.5%' },
      { label: '서비스 국가', value: '3개국' },
    ],
  },
  warehouse: {
    title: '창고보관',
    subtitle: '부산항 신항 자유무역지역',
    icon: Warehouse,
    image: warehouseImg,
    description: '부산항 신항 자유무역지역에 위치한 오션스타신항국제물류센터는 화주와 선주, 입주업체의 조세 혜택으로 물류 경쟁력을 제공하고 있습니다.',
    features: [
      { icon: Check, title: '조세 혜택', desc: '자유무역지역 입주 기업 세제 혜택' },
      { icon: Check, title: '고부가가치 작업', desc: '조립, 분해, 가공, 수리, 재포장 등' },
      { icon: Check, title: '실시간 관리', desc: '책임 전담자 배치 및 실시간 보고' },
    ],
    stats: [
      { label: '창고 면적', value: '50,000㎡' },
      { label: '보관 용량', value: '100만 CBM' },
      { label: '입주 업체', value: '50+' },
    ],
  },
  tech: {
    title: '친환경 선박기술',
    subtitle: 'BWMS & SOx Scrubber',
    icon: Leaf,
    image: cargoPort,
    description: 'Ballast Water Management System, SOx Scrubber 등 친환경 선박기술 제공. 전문 기술을 가진 엔지니어 및 판매영업팀이 다양한 설치 경험을 바탕으로 전 세계의 조선소와 선주를 지원합니다.',
    features: [
      { icon: Check, title: '3D 스캔 설계', desc: '기본설계부터 상세설계까지 자체 진행' },
      { icon: Check, title: '도면 승인', desc: '국제 규격에 맞는 도면 승인 획득' },
      { icon: Check, title: '설치 감독', desc: '전문 엔지니어의 현장 설치 감독' },
    ],
    stats: [
      { label: '설치 실적', value: '200+' },
      { label: '전문 인력', value: '50명' },
      { label: '글로벌 파트너', value: '30+' },
    ],
  },
  equipment: {
    title: '자동차정비기기',
    subtitle: '글로벌 정비브랜드 HESHBON',
    icon: Settings,
    image: warehouseImg,
    description: '자동차 정비기기 시장 리더, 글로벌 정비브랜드 HESHBON. 오션스타엔터프라이즈는 국내 최초로 X-TYPE 리프트를 개발하였고 검증된 기술력을 바탕으로 세계 40여 개국에 판매망을 구축했습니다.',
    features: [
      { icon: Check, title: 'X-TYPE 리프트', desc: '국내 최초 개발, 특허 기술 적용' },
      { icon: Check, title: '타이어 장비', desc: '휠 밸런스, 탈착기, 얼라인먼트' },
      { icon: Check, title: '글로벌 인증', desc: 'CE, UL 등 국제 안전 인증 획득' },
    ],
    stats: [
      { label: '수출국', value: '40+' },
      { label: '제품 종류', value: '100+' },
      { label: '특허', value: '30+' },
    ],
  },
};

const Business = () => {
  const { category } = useParams<{ category?: string }>();
  const activeCategory = category || 'ferry';
  const currentBusiness = businessData[activeCategory as keyof typeof businessData] || businessData.ferry;
  const Icon = currentBusiness.icon;

  const tabs = [
    { id: 'ferry', label: '고속화물페리', icon: Ship },
    { id: 'cruise', label: '크루즈 여객', icon: Anchor },
    { id: 'express', label: '국제특송', icon: Package },
    { id: 'warehouse', label: '창고보관', icon: Warehouse },
    { id: 'tech', label: '친환경 선박기술', icon: Leaf },
    { id: 'equipment', label: '자동차정비기기', icon: Settings },
  ];

  return (
    <>
      <Helmet>
        <title>{currentBusiness.title} | 사업분야 | 오션스타</title>
        <meta name="description" content={currentBusiness.description} />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative h-[400px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentBusiness.image})` }}
          />
          <div className="absolute inset-0 bg-[hsl(220,30%,18%,0.8)]" />
          <div className="relative h-full container-custom flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">사업분야</h1>
              <p className="text-white/70">오션스타의 다양한 사업 영역을 소개합니다</p>
            </motion.div>
          </div>
          {/* Breadcrumb */}
          <div className="absolute bottom-0 left-0 right-0 bg-primary">
            <div className="container-custom py-3 flex items-center gap-2 text-sm text-primary-foreground">
              <Link to="/" className="hover:underline">홈</Link>
              <span>/</span>
              <span>사업분야</span>
              <span>/</span>
              <span className="font-medium">{currentBusiness.title}</span>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="bg-white border-b sticky top-16 lg:top-20 z-30">
          <div className="container-custom">
            <div className="flex overflow-x-auto gap-1 py-2 scrollbar-hide">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <Link
                    key={tab.id}
                    to={`/business/${tab.id}`}
                    className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap text-sm font-medium rounded-lg transition-colors ${
                      activeCategory === tab.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    {tab.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container-custom">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Title */}
              <div className="text-center mb-12">
                <h2 className="text-primary text-3xl md:text-4xl font-bold mb-2">{currentBusiness.title}</h2>
                <p className="text-xl text-foreground">{currentBusiness.subtitle}</p>
              </div>

              {/* Description */}
              <div className="max-w-4xl mx-auto text-center mb-16">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {currentBusiness.description}
                </p>
              </div>

              {/* Image & Features */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="relative rounded-2xl overflow-hidden shadow-panstar-lg">
                  <img 
                    src={currentBusiness.image} 
                    alt={currentBusiness.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>

                <div className="space-y-6">
                  {currentBusiness.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <FeatureIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                {currentBusiness.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center bg-[hsl(220,15%,96%)] rounded-xl p-6"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/support/inquiry">문의하기 <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Business;
