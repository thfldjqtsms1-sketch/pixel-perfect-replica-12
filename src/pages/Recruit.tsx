import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Briefcase, Users, Heart, ArrowRight } from 'lucide-react';
import heroCruise from '@/assets/hero-cruise.jpg';

const jobs = [
  { id: 1, title: '해운사업본부 경력사원 모집', department: '해운사업본부', type: '경력', deadline: '2025-01-15' },
  { id: 2, title: '크루즈 서비스 승무원 채용', department: '크루즈사업부', type: '신입/경력', deadline: '2025-01-20' },
  { id: 3, title: '물류센터 관리자 채용', department: '물류사업부', type: '경력', deadline: '상시채용' },
  { id: 4, title: 'IT개발팀 프론트엔드 개발자', department: 'IT사업본부', type: '경력', deadline: '2025-01-31' },
];

const Recruit = () => {
  return (
    <>
      <Helmet>
        <title>인재채용 | 오션스타</title>
        <meta name="description" content="오션스타와 함께 성장할 인재를 찾습니다. 채용 공고를 확인하세요." />
      </Helmet>
      <Layout>
        <section className="relative h-[400px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroCruise})` }} />
          <div className="absolute inset-0 bg-[hsl(220,30%,18%,0.8)]" />
          <div className="relative h-full container-custom flex items-center justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">인재채용</h1>
              <p className="text-white/70 text-xl">오션스타와 함께 새로운 도전을 시작하세요</p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-primary">
            <div className="container-custom py-3 flex items-center gap-2 text-sm text-primary-foreground">
              <Link to="/" className="hover:underline">홈</Link><span>/</span><span className="font-medium">인재채용</span>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[{ icon: Briefcase, title: '도전', desc: '새로운 영역을 개척하는 도전 정신' },
                { icon: Users, title: '협력', desc: '함께 성장하는 팀워크 문화' },
                { icon: Heart, title: '열정', desc: '최고를 향한 끊임없는 열정' }].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="bg-[hsl(220,15%,96%)] rounded-xl p-8 text-center">
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">채용 공고</h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <motion.div key={job.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="flex items-center justify-between p-6 bg-white rounded-xl shadow-panstar-sm hover:shadow-panstar-md transition-all group cursor-pointer">
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{job.title}</h3>
                    <div className="flex gap-3 mt-2 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span>|</span>
                      <span>{job.type}</span>
                      <span>|</span>
                      <span>마감: {job.deadline}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg">지원하기</Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Recruit;
