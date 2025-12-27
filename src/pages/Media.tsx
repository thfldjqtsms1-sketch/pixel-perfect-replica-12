import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight } from 'lucide-react';
import heroCruise from '@/assets/hero-cruise.jpg';
import cargoPort from '@/assets/cargo-port.jpg';
import cruiseInterior from '@/assets/cruise-interior.jpg';

const pressReleases = [
  { id: 1, title: '부산에 국내 최대 연안유람선 떴다...오션스타그룹, 2,500톤급 그레이스호 취항', date: '2025.12.03', image: heroCruise },
  { id: 2, title: '오션스타, 친환경 선박 기술로 IMO 환경규제 대응 선도', date: '2025.09.15', image: cargoPort },
  { id: 3, title: '오션스타 미라클 크루즈, 고객 만족도 98% 달성', date: '2025.07.22', image: cruiseInterior },
  { id: 4, title: '한-일 해상물류 혁신, 오션스타 고속페리 18시간 운송 실현', date: '2025.05.10', image: cargoPort },
];

const Media = () => {
  const { category } = useParams<{ category?: string }>();
  const activeCategory = category || 'press';

  return (
    <>
      <Helmet>
        <title>미디어센터 | 오션스타</title>
        <meta name="description" content="오션스타의 최신 보도자료와 홍보영상을 확인하세요." />
      </Helmet>
      <Layout>
        <section className="relative h-[300px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroCruise})` }} />
          <div className="absolute inset-0 bg-[hsl(220,30%,18%,0.8)]" />
          <div className="relative h-full container-custom flex items-center justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">미디어센터</h1>
              <p className="text-white/70">오션스타의 최신 소식을 전합니다</p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-primary">
            <div className="container-custom py-3 flex items-center gap-2 text-sm text-primary-foreground">
              <Link to="/" className="hover:underline">홈</Link><span>/</span><span>미디어센터</span>
            </div>
          </div>
        </section>

        <section className="bg-white border-b">
          <div className="container-custom flex gap-1 py-2">
            {[{ id: 'press', label: '보도자료' }, { id: 'video', label: '홍보영상' }, { id: 'gallery', label: '갤러리' }].map((tab) => (
              <Link key={tab.id} to={`/media/${tab.id}`}
                className={`px-6 py-3 font-medium rounded-lg transition-colors ${activeCategory === tab.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-muted'}`}>
                {tab.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-6">
              {pressReleases.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-panstar-sm hover:shadow-panstar-md transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {activeCategory === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Media;
