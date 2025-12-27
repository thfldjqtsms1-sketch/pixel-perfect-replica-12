import { Layout } from '@/components/Layout';
import { HeroSection, StatsSection, BusinessSection, ScheduleSection, NewsSection } from '@/components/home/HomeSections';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>오션스타 | 해운 물류 네트워크의 새로운 가치</title>
        <meta name="description" content="오션스타는 고속화물페리, 크루즈 여객, 국제특송, 창고보관 등 종합 해운 물류 서비스를 제공합니다. 35년 전통의 신뢰와 혁신." />
      </Helmet>
      <Layout>
        <HeroSection />
        <StatsSection />
        <BusinessSection />
        <ScheduleSection />
        <NewsSection />
      </Layout>
    </>
  );
};

export default Home;
