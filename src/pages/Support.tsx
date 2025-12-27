import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronDown, Search, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useToast } from '@/hooks/use-toast';
import heroCruise from '@/assets/hero-cruise.jpg';

const notices = [
  { id: 1, title: '오션스타 미라클호 신규 취항에 따른 특별기획 점검 안내', date: '2025-06-18', views: 1234 },
  { id: 2, title: '오션스타 미라클호 점검 및 개선 작업에 따른 대체 선박의 운항 안내', date: '2025-06-14', views: 987 },
  { id: 3, title: '미라클호 입항 지연 및 운항 일정 안내 (2025.4.17.)', date: '2025-04-17', views: 856 },
  { id: 4, title: '오션스타 미라클크루즈 4월 GRAND OPEN', date: '2025-03-12', views: 2341 },
  { id: 5, title: '주주 우대 제도 안내', date: '2025-02-03', views: 1567 },
  { id: 6, title: '2025년 설 연휴 운항 일정 안내', date: '2025-01-20', views: 1890 },
  { id: 7, title: '신년 인사 - 2025년에도 함께해 주세요', date: '2025-01-02', views: 1456 },
  { id: 8, title: '연말 특별 이벤트 당첨자 발표', date: '2024-12-28', views: 2567 },
];

const faqs = [
  {
    question: '크루즈 예약은 어떻게 하나요?',
    answer: '홈페이지의 크루즈 예약 메뉴를 통해 원하시는 날짜와 객실을 선택하여 예약하실 수 있습니다. 또는 고객센터(051-123-4567)로 연락주시면 상담 후 예약 도와드립니다.',
  },
  {
    question: '화물 배송 추적은 어디서 할 수 있나요?',
    answer: 'e-SHIPPING 메뉴에서 운송장 번호를 입력하시면 실시간으로 화물 위치를 확인하실 수 있습니다.',
  },
  {
    question: '취소 및 환불 정책은 어떻게 되나요?',
    answer: '출발 7일 전: 전액 환불, 출발 3-6일 전: 80% 환불, 출발 1-2일 전: 50% 환불, 출발 당일: 환불 불가입니다. 자세한 사항은 이용약관을 참조해 주세요.',
  },
  {
    question: '반려동물 동반 승선이 가능한가요?',
    answer: '현재 반려동물 동반 승선은 제한되어 있습니다. 다만, 안내견의 경우 사전 신청을 통해 동반 승선이 가능합니다.',
  },
  {
    question: '선내에서 Wi-Fi 사용이 가능한가요?',
    answer: '미라클 크루즈에서는 유료 Wi-Fi 서비스를 제공하고 있습니다. 승선 후 안내데스크에서 이용권을 구매하실 수 있습니다.',
  },
];

const Support = () => {
  const { category } = useParams<{ category?: string }>();
  const activeCategory = category || 'notice';
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const tabs = [
    { id: 'notice', label: '공지사항' },
    { id: 'faq', label: '자주묻는 질문' },
    { id: 'inquiry', label: '1:1 문의' },
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: '문의가 접수되었습니다',
      description: '담당자가 확인 후 빠른 시일 내에 답변드리겠습니다.',
    });
  };

  return (
    <>
      <Helmet>
        <title>고객지원 | 오션스타</title>
        <meta name="description" content="오션스타 고객지원 - 공지사항, FAQ, 1:1 문의를 통해 도움을 받으세요." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative h-[300px] overflow-hidden">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">고객지원</h1>
              <p className="text-white/70">궁금한 점이 있으시면 언제든 문의해 주세요</p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-primary">
            <div className="container-custom py-3 flex items-center gap-2 text-sm text-primary-foreground">
              <Link to="/" className="hover:underline">홈</Link>
              <span>/</span>
              <span>고객지원</span>
              <span>/</span>
              <span className="font-medium">{tabs.find(t => t.id === activeCategory)?.label}</span>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="bg-white border-b">
          <div className="container-custom">
            <div className="flex gap-1 py-2">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={`/support/${tab.id}`}
                  className={`px-6 py-3 font-medium rounded-lg transition-colors ${
                    activeCategory === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container-custom">
            {/* Notice List */}
            {activeCategory === 'notice' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Search */}
                <div className="flex gap-2 mb-8 max-w-md mx-auto">
                  <Input
                    placeholder="검색어를 입력하세요"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="default">
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                {/* List */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-12 bg-[hsl(220,15%,96%)] px-4 py-3 text-sm font-medium text-muted-foreground">
                    <div className="col-span-1 text-center">번호</div>
                    <div className="col-span-7">제목</div>
                    <div className="col-span-2 text-center">날짜</div>
                    <div className="col-span-2 text-center">조회</div>
                  </div>
                  {notices.map((notice) => (
                    <Link
                      key={notice.id}
                      to={`/support/notice/${notice.id}`}
                      className="grid grid-cols-12 px-4 py-4 border-t hover:bg-muted/50 transition-colors"
                    >
                      <div className="col-span-1 text-center text-muted-foreground">{notice.id}</div>
                      <div className="col-span-7 font-medium text-foreground hover:text-primary transition-colors">
                        {notice.title}
                      </div>
                      <div className="col-span-2 text-center text-sm text-muted-foreground">{notice.date}</div>
                      <div className="col-span-2 text-center text-sm text-muted-foreground">{notice.views.toLocaleString()}</div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-8">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`w-10 h-10 rounded ${
                        page === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* FAQ */}
            {activeCategory === 'faq' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto"
              >
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-muted/50 transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-bold">Q</span>
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 pb-4">
                          <div className="flex gap-3 p-4 bg-muted rounded-lg">
                            <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">A</span>
                            <p className="text-muted-foreground">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Inquiry Form */}
            {activeCategory === 'inquiry' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
              >
                {/* Contact Info */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">전화 문의</p>
                    <p className="text-sm text-muted-foreground">051-123-4567</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">이메일 문의</p>
                    <p className="text-sm text-muted-foreground">contact@oceanstar.co.kr</p>
                  </div>
                  <div className="bg-muted rounded-lg p-4 text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-medium">운영시간</p>
                    <p className="text-sm text-muted-foreground">평일 09:00-18:00</p>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">이름 *</label>
                      <Input placeholder="이름을 입력하세요" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">연락처 *</label>
                      <Input placeholder="010-0000-0000" required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">이메일 *</label>
                    <Input type="email" placeholder="email@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">문의 유형</label>
                    <select className="w-full h-10 px-3 border rounded-md bg-background">
                      <option>크루즈 예약</option>
                      <option>화물 운송</option>
                      <option>국제특송</option>
                      <option>기타 문의</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">제목 *</label>
                    <Input placeholder="문의 제목을 입력하세요" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">문의 내용 *</label>
                    <Textarea placeholder="문의 내용을 상세히 작성해 주세요" rows={6} required />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="privacy" required className="rounded" />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>
                  <Button variant="hero" size="lg" className="w-full" type="submit">
                    문의하기
                  </Button>
                </form>
              </motion.div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Support;
