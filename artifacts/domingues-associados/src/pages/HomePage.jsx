import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { postsData } from '../data/siteData';

export default function HomePage({ navigate }) {
  // Exact slides extracted from SmartSlider 3 on the live site
  const slides = [
    {
      id: 9,
      title: 'Recuperação de Créditos do FGTS',
      subtitle: [
        '• Parcelamento e recuperação de créditos;',
        '• Amortização de dívidas;',
        '• Regularização de débitos.'
      ],
      bg: '/uploads/2017/08/creditos-fgts.jpg',
      link: '/recuperacao-de-creditos-do-fgts/'
    },
    {
      id: 4,
      title: 'Atendimento a Frotas',
      subtitle: [
        '• Acompanhamento do vencimento da CNH',
        '• Recursos em 1ª e 2ª instâncias',
        '• Ações judiciais visando cancelamento ou reversão de multas'
      ],
      bg: '/uploads/2017/08/atendimento-frotas.jpg',
      link: '/atendimento-a-frotas/'
    },
    {
      id: 1,
      title: 'Área Cível',
      subtitle: [
        '• Responsabilidade Civil;',
        '• Direito do Consumidor;',
        '• Confecção e pareceres de contratos nacionais e internacionais.'
      ],
      bg: '/uploads/2017/08/area-civel.jpg',
      link: '/area-civel-2/'
    },
    {
      id: 2,
      title: 'Assessoria no Direito Administrativo',
      subtitle: [
        '• Acompanhamento das relações entre comprador e fornecedor;',
        '• Processo licitatório;',
        '• Recursos e impugnações;',
        '• Processos administrativos.'
      ],
      bg: '/uploads/2017/07/banner1-teste-1.jpg',
      link: '/assessoria-no-direito-administrativo/'
    },
    {
      id: 3,
      title: 'Assessoria Empresarial',
      subtitle: [
        '• Títulos de crédito, fusão, incorporação e cisão de empresas;',
        '• Alienações;',
        '• Responsabilidade civil;',
        '• Análise de contratos.'
      ],
      bg: '/uploads/2017/07/banner2-teste.jpg',
      link: '/assessoria-empresarial/'
    },
    {
      id: 5,
      title: 'Correspondente Jurídico',
      subtitle: [
        '• Realização de audiências;',
        '• Cópia de processos;',
        '• Acompanhamento processual;',
        '• Certidões em geral.'
      ],
      bg: '/uploads/2017/08/correspondente-juridico.jpg',
      link: '/correspondente-juridico-2/'
    },
    {
      id: 6,
      title: 'Área Criminal',
      subtitle: [
        '• Crimes contra a ordem tributária;',
        '• Crimes contra o sistema financeiro;',
        '• Crimes contra a administração pública;',
        '• Crimes contra o meio ambiente.'
      ],
      bg: '/uploads/2017/08/area-criminal-2.jpg',
      link: '/area-criminal/'
    },
    {
      id: 7,
      title: 'Área Trabalhista',
      subtitle: [
        '• Cálculos trabalhistas;',
        '• Consultoria e assessoria preventiva;',
        '• Acidentes de trabalho;',
        '• Atendemos a empregados e empresas.'
      ],
      bg: '/uploads/2017/08/area-trabalhista.jpg',
      link: '/area-trabalhista-2/'
    },
    {
      id: 8,
      title: 'Área Tributária',
      subtitle: [
        '• Parcelamentos;',
        '• Prescrição e Decadência;',
        '• Defesas Administrativas;',
        '• Contencioso Fiscal;',
        '• Consultoria Tributária.'
      ],
      bg: '/uploads/2017/07/banner4-teste.jpg',
      link: '/area-tributaria/'
    },
    {
      id: 10,
      title: 'Revisão de Valores do IPTU',
      subtitle: [
        'Atuamos na revisão dos valores cobrados pela prefeitura, tendo como objetivo a redução do imposto cobrado.'
      ],
      bg: '/uploads/2017/08/revisao-iptu.jpg',
      link: '/revisao-de-valores-cobrados-de-iptu/'
    },
    {
      id: 11,
      title: 'Cobrança de Mensalidades Escolares',
      subtitle: [
        '• Cobrança de mensalidades em atraso;',
        '• Atendimento em âmbito amigável;',
        '• Suporte jurídico para cobranças judiciais.'
      ],
      bg: '/uploads/2017/07/banner7-teste.jpg',
      link: '/cobranca-de-mensalidades-escolares/'
    },
    {
      id: 12,
      title: 'Atuação nos Tribunais Superiores',
      subtitle: [
        'Atuamos de forma ampla nos tribunais superiores – STF, STJ e TST – com a confecção de recursos, sustentação oral e despachos.'
      ],
      bg: '/uploads/2017/08/tribunais-superiores.jpg',
      link: '/atuacao-nos-tribunais-superiores/'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Touch swipe support for smartphones
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped left -> next
      nextSlide();
    } else if (distance < -50) {
      // Swiped right -> prev
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

  return (
    <div className="home-content">
      {/* ===================================================================
          1. SMART SLIDER 3 CLONE (#banner-rotativo)
          Exact match for attached image:
          - Centered dark box with Title
          - Centered dark box with Subtitle / Bullet Points
          - Centered Gold Button "saiba mais"
          - Smartphone responsive touch swipe and fluid sizing
          =================================================================== */}
      <section 
        id="banner-rotativo" 
        className="smart-slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`smart-slide ${idx === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${s.bg})` }}
          >
            {/* Dark background overlay */}
            <div className="smart-slide-dark-overlay" />

            {/* Exactly Centered Box Structure */}
            <div className="smart-slide-center-box">
              {/* Title Box */}
              <div className="smart-title-wrapper">
                <h2 className="smart-title-text">
                  {s.title === 'Recuperação de Créditos do FGTS' ? (
                    <>
                      Recuperação de Créditos<br className="title-break-desktop" />do FGTS
                    </>
                  ) : (
                    s.title
                  )}
                </h2>
              </div>

              {/* Subtitle / Bullet Points Box */}
              {s.subtitle && s.subtitle.length > 0 && (
                <div className="smart-subtitle-wrapper">
                  <div className="smart-subtitle-text">
                    {s.subtitle.map((line, lIdx) => (
                      <div key={lIdx} className="smart-subtitle-line">
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Centered Button */}
              <div className="smart-btn-wrapper">
                <a
                  href={s.link}
                  onClick={(e) => { e.preventDefault(); navigate(s.link); }}
                  className="smart-gold-btn"
                >
                  saiba mais
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Small Edge Arrow Controls (matching attached image) */}
        <button 
          className="smart-arrow smart-arrow-prev" 
          onClick={prevSlide} 
          aria-label="Slide anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          className="smart-arrow smart-arrow-next" 
          onClick={nextSlide} 
          aria-label="Próximo slide"
        >
          <ChevronRight size={20} />
        </button>
      </section>

      {/* ===================================================================
          2. APRESENTAÇÃO SECTION (#apresentacao)
          =================================================================== */}
      <section id="apresentacao">
        <div className="container">
          <div className="row apresentacao-row">
            {/* Left Column 2/3 (col-sm-8): Gavel image */}
            <div className="apresentacao-col-left">
              <div className="vc_box_shadow">
                <img
                  src="/uploads/2017/07/gavel-computer_1024px.jpg"
                  alt="Domingues & Associados Advocacia"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
            </div>

            {/* Right Column 1/3 (col-sm-4): Text & Button */}
            <div className="apresentacao-col-right">
              <h1 className="apresentacao-title">
                Quem somos
              </h1>
              <p className="apresentacao-text">
                Somos um escritório que optou em ter como objetivo o máximo de profissionalismo, para alcançar o máximo de eficiência intelectual e prática. Com este ideal de gestão, nos propomos a executar o trabalho jurídico de forma empresarial, sem abrir mão da moderna tecnologia, com o propósito de garantir a confiança dos nossos clientes.
              </p>
              <p className="apresentacao-text">
                Essa visão e a vasta experiência de seus sócios fazem uma empresa que agrega conhecimento na área acadêmica, bancária, trabalhista, previdenciária, consumidor, meio ambiente, responsabilidade civil e empresarial.
              </p>
              <div style={{ textAlign: 'center', marginTop: '22px' }}>
                <a
                  href="/quem-somos-2/"
                  onClick={(e) => { e.preventDefault(); navigate('/quem-somos-2/'); }}
                  className="kad-btn kad-btn-primary"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>

          {/* Separator line */}
          <div className="vc_separator" />
        </div>
      </section>

      {/* ===================================================================
          3. ÚLTIMAS NOTÍCIAS SECTION (.home_blog)
          =================================================================== */}
      <section className="home_blog">
        <div className="container">
          <h3 className="hometitle">Últimas Notícias</h3>

          <div className="row">
            {postsData.slice(0, 6).map((post) => {
              const d = new Date(post.date);
              const day = d.getDate();
              const monthYear = `${months[d.getMonth()]} ${d.getFullYear()}`;

              return (
                <div 
                  key={post.id} 
                  className="home-post-col"
                >
                  <article className="clearfix" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      {/* Date Badge */}
                      <div className="postdate">
                        <span className="postday">{day}</span>
                        <span className="postmonth">{monthYear}</span>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1 }}>
                        <header className="home_blog_title">
                          <h4 className="entry-title">
                            <a 
                              href={`/noticias/${post.slug}`}
                              onClick={(e) => { e.preventDefault(); navigate(`/noticias/${post.slug}`); }}
                            >
                              {post.title}
                            </a>
                          </h4>
                        </header>

                        <div className="entry-content">
                          <p style={{ margin: 0 }}>
                            {post.excerpt.slice(0, 150)}...{' '}
                            <a 
                              href={`/noticias/${post.slug}`}
                              onClick={(e) => { e.preventDefault(); navigate(`/noticias/${post.slug}`); }}
                            >
                              Leia mais
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
