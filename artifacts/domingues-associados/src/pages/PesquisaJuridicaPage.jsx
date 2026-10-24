import React from 'react';

export default function PesquisaJuridicaPage({ navigate }) {
  const categories = [
    {
      title: 'Legislação:',
      links: [
        { title: 'Planalto', url: 'https://legislacao.planalto.gov.br/legisla/legislacao.nsf/fraWeb?OpenFrameSet&Frame=frmWeb2&Src=/legisla/legislacao.nsf%2FFrmConsultaWeb1%3FOpenForm%26AutoFramed' },
        { title: 'Alerj - Assembléia Legislativa do Estado do Rio de Janeiro', url: 'http://www.alerj.rj.gov.br/processo2.htm' },
        { title: 'Câmara dos Vereadores do Rio de Janeiro', url: 'http://www.camara.rj.gov.br/' }
      ]
    },
    {
      title: 'Legislação Específica:',
      links: [
        { labelPrefix: 'Trabalhista: ', title: 'TST - Tribunal Superior do Trabalho', url: 'http://www.tst.jus.br/legislacao' },
        { labelPrefix: 'Transportes: ', title: 'ANTT - Agência Nacional de Transportes Terrestres', url: 'http://www.antt.gov.br/' },
        { labelPrefix: 'Trânsito: ', title: 'Denatran - Departamento Nacional de Trânsito', url: 'http://www.denatran.gov.br/resolucoes.htm' },
        { labelPrefix: 'Consumidor: ', title: 'ProconRJ - Proteção e Defesa do Consumidor', url: 'http://www.procon.rj.gov.br/' }
      ]
    },
    {
      title: 'Jurisprudência:',
      links: [
        { title: 'STF - Supremo Tribunal Federal', url: 'http://www.stf.jus.br/portal/jurisprudencia/pesquisarJurisprudencia.asp' },
        { title: 'STJ - Superior Tribunal de Justiça', url: 'http://www.stj.jus.br/SCON' },
        { title: 'TST - Tribunal Superior do Trabalho. Unificada dos TRT\'s', url: 'http://www.tst.jus.br/jurisprudencia' },
        { title: 'CJF - Conselho da Justiça Federal. Todos os TRF\'s', url: 'https://www.cjf.jus.br/' },
        { title: 'TJRJ - Tribunal de Justiça do Estado do Rio de Janeiro', url: 'http://www.tjrj.jus.br/' },
        { title: 'TJSP - Tribunal de Justiça do Estado de São Paulo', url: 'http://esaj.tjsp.jus.br/cjsg/consultaCompleta.do?f=1' },
        { title: 'TJRS - Tribunal de Justiça do Estado do Rio Grande do Sul', url: 'http://www.tjrs.jus.br/' },
        { title: 'TJPR - Tribunal de Justiça do Estado do Paraná', url: 'http://www.tjpr.jus.br/jurisprudencia' }
      ]
    },
    {
      title: 'Súmulas:',
      links: [
        { title: 'STF - Supremo Tribunal Federal', url: 'http://www.stf.jus.br/portal/cms/verTexto.asp?servico=jurisprudenciaSumula' },
        { title: 'STJ - Supremo Tribunal de Justiça', url: 'http://www.stj.jus.br/SCON/sumanot/?vPortalArea=1184' },
        { title: 'TST - Tribunal Superior do Trabalho', url: 'http://www.tst.jus.br/sumulas' },
        { title: 'TJRJ - Tribunal de Justiça do Estado do Rio de Janeiro', url: 'http://www.tjrj.jus.br/' }
      ]
    },
    {
      title: 'Doutrinas:',
      links: [
        { title: 'Jus Navigandi', url: 'http://jus.com.br/revista' },
        { title: 'Boletim Jurídico', url: 'http://www.boletimjuridico.com.br/doutrina' },
        { title: 'Âmbito Jurídico', url: 'http://www.ambito-juridico.com.br/site/?n_link=revista_juridica' },
        { title: 'Saraiva Jur', url: 'http://www.saraivajur.com.br' },
        { title: 'Gen Jurídico - O seu portal jurídico', url: 'http://genjuridico.com' },
        { title: 'Revista dos Tribunais', url: 'http://www.rtonline.com.br/' }
      ]
    }
  ];

  return (
    <div className="virtue-page-wrapper" style={{ backgroundColor: '#ffffff', minHeight: '600px', paddingBottom: '60px' }}>
      {/* Virtue Theme Page Header */}
      <div id="pageheader" className="titleclass">
        <div className="container">
          <div className="page-header" style={{
            borderTop: '1px solid rgba(0,0,0,0.06)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            paddingTop: '12px',
            paddingBottom: '12px',
            marginTop: '15px',
            marginBottom: '30px'
          }}>
            <h1 className="entry-title" style={{
              margin: 0,
              fontFamily: 'Roboto, sans-serif',
              fontSize: '32px',
              fontWeight: 500,
              color: '#cdb122',
              lineHeight: '36px'
            }}>
              Pesquisa Jurídica
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="content" className="container">
        <div className="row">
          <div className="main col-md-12" role="main">
            <article className="entry-content" style={{
              fontFamily: '"Libre Franklin", sans-serif',
              fontSize: '14px',
              lineHeight: '22px',
              color: '#000000'
            }}>
              {/* Centered Large Featured Image */}
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <img 
                  className="aligncenter wp-image-597 size-large"
                  src="/uploads/2017/08/pesquisa-juridica-1024x650.jpg" 
                  alt="Pesquisa Jurídica" 
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'inline-block',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
                  }}
                />
              </div>

              {/* Intro Narrative */}
              <p style={{ marginBottom: '25px', textAlign: 'justify' }}>
                Selecionamos uma coleção com os principais links de informações jurídicas úteis aos profissionais da área, procurando direcioná-los às páginas de pesquisa e índices de legislação de cada entidade.
              </p>

              {/* Categorized Lists */}
              {categories.map((cat, idx) => (
                <div key={idx} style={{ marginBottom: '25px' }}>
                  <h4 style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#333333',
                    lineHeight: '26px',
                    margin: '0 0 10px 0'
                  }}>
                    {cat.title}
                  </h4>

                  <ul style={{ paddingLeft: '24px', margin: 0, lineHeight: '24px' }}>
                    {cat.links.map((link, lIdx) => (
                      <li key={lIdx} style={{ marginBottom: '4px' }}>
                        {link.labelPrefix && <b>{link.labelPrefix}</b>}
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            color: '#cdb122',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = '#d8d68a';
                            e.currentTarget.style.textDecoration = 'underline';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = '#cdb122';
                            e.currentTarget.style.textDecoration = 'none';
                          }}
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
