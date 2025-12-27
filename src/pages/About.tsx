import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Eye, Award, Users, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import heroCruise from '@/assets/hero-cruise.jpg';
import cruiseInterior from '@/assets/cruise-interior.jpg';

const About = () => {
  const values = [
    { icon: Target, title: '도전', description: '새로운 가치 창조를 위한 끊임없는 도전' },
    { icon: Eye, title: '혁신', description: '변화를 두려워하지 않는 혁신적 사고' },
    { icon: Award, title: '신뢰', description: '고객과의 약속을 지키는 신뢰 경영' },
    { icon: Users, title: '상생', description: '함께 성장하는 동반자적 파트너십' },
  ];

  const milestones = [
    { year: '1990', event: '오션스타 설립' },
    { year: '1995', event: '부산-오사카 페리 취항' },
    { year: '2000', event: '국제특송 서비스 시작' },
    { year: '2010', event: '신항 물류센터 개설' },
    { year: '2015', event: '5성급 크루즈 도입' },
    { year: '2020', event: '친환경 선박기술 사업 진출' },
    { year: '2024', event: '미라클 크루즈 취항' },
  ];

  return (
    <>
      <Helmet>
        <title>회사소개 | 오션스타</title>
        <meta name="description" content="1990년 설립된 오션스타는 35년간 해운과 물류 분야에서 새로운 가치를 창조해 왔습니다." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative h-[400px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroCruise})` }}
          />
          <div className="absolute inset-0 bg-[hsl(220,30%,18%,0.8)]" />
          <div className="relative h-full container-custom flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">오션스타 소개</h1>
              <p className="text-white/70">해운과 물류를 넘어 새로운 가치를 창조합니다</p>
            </motion.div>
          </div>
          {/* Breadcrumb */}
          <div className="absolute bottom-0 left-0 right-0 bg-primary">
            <div className="container-custom py-3 flex items-center gap-2 text-sm text-primary-foreground">
              <Link to="/" className="hover:underline">홈</Link>
              <span>/</span>
              <span>오션스타 소개</span>
              <span>/</span>
              <span className="font-medium">회사소개</span>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-primary">OVER THE NETWORK</span>
                  <br />
                  CREATE NEW VALUES
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  1990년 설립 이래, 오션스타는 한-일 해상운송의 새로운 지평을 열어왔습니다.
                  고속화물페리를 통한 물류 혁신부터 5성급 크루즈 서비스까지,
                  우리는 항상 고객에게 최고의 가치를 제공하기 위해 노력해 왔습니다.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  오늘날 오션스타는 단순한 해운회사를 넘어, 종합 물류 네트워크 기업으로 성장했습니다.
                  부산항 신항의 물류센터, 국제특송 서비스, 친환경 선박기술까지
                  다양한 사업 영역에서 혁신을 이어가고 있습니다.
                </p>
                <Button variant="hero" asChild>
                  <Link to="/about/history">연혁 보기 <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src={cruiseInterior} 
                  alt="오션스타 크루즈 내부"
                  className="rounded-2xl shadow-panstar-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-[hsl(220,15%,96%)]">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 가치</h2>
              <p className="text-muted-foreground">오션스타를 이끄는 네 가지 핵심 가치</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 text-center shadow-panstar-sm hover:shadow-panstar-md transition-all hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">연혁</h2>
              <p className="text-muted-foreground">35년간의 도전과 혁신의 역사</p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white rounded-lg p-4 shadow-panstar-sm inline-block">
                      <span className="text-primary font-bold text-lg">{milestone.year}</span>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Network */}
        <section className="py-20 bg-[hsl(220,30%,18%)] text-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">글로벌 네트워크</h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  오션스타는 한국, 일본, 중국을 연결하는 해상 물류 네트워크를 구축하고 있습니다.
                  부산, 오사카, 쓰루가를 잇는 정기 항로와 함께 40여 개국에 수출하는 글로벌 기업으로 성장했습니다.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">7</div>
                    <div className="text-sm text-white/60">계열사</div>
                  </div>
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">40+</div>
                    <div className="text-sm text-white/60">수출국</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-white/60">임직원</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-8"
              >
                {/* Simple Map Visualization */}
                <div className="relative aspect-video">
                  <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse" />
                  <div className="absolute top-1/4 left-1/4 text-xs text-white mt-5">부산</div>
                  
                  <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute top-1/3 right-1/3 text-xs text-white mt-5">오사카</div>
                  
                  <div className="absolute top-1/5 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-1/5 right-1/4 text-xs text-white mt-5">쓰루가</div>
                  
                  {/* Connecting lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ stroke: 'hsl(28, 95%, 53%)', strokeWidth: 1, fill: 'none' }}>
                    <line x1="25%" y1="25%" x2="66%" y2="33%" strokeDasharray="4 4" />
                    <line x1="25%" y1="25%" x2="75%" y2="20%" strokeDasharray="4 4" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
