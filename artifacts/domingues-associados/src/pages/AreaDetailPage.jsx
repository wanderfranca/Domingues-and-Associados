import React from 'react';
import { practiceAreas } from '../data/siteData';

export default function AreaDetailPage({ slug, navigate }) {
  // Normalize slug matching (handles both wp_slug and standard slug)
  const area = practiceAreas.find(a => a.slug === slug || a.wp_slug === slug);

  if (!area) {
    return (
      <div className="virtue-page-wrapper" style={{ backgroundColor: '#ffffff', minHeight: '600px', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="entry-title" style={{ color: '#cdb122', fontFamily: 'Roboto, sans-serif' }}>
            Especialidade Não Encontrada
          </h1>
          <p style={{ marginTop: '20px', fontFamily: '"Libre Franklin", sans-serif', fontSize: '14px' }}>
            A especialidade jurídica solicitada não foi localizada.
          </p>
          <a 
            href="/" 
            onClick={(e) => { e.preventDefault(); navigate('/'); }}
            className="kad-btn kad-btn-primary"
            style={{ display: 'inline-block', marginTop: '20px' }}
          >
            Voltar para a Página Inicial
          </a>
        </div>
      </div>
    );
  }

  // Render specific content depending on area
  const renderAreaContent = () => {
    switch (area.slug) {
      case 'area-trabalhista':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Somos especialistas em cálculos trabalhistas, prestando consultoria e assessoria preventiva e contenciosa, damos todo o suporte legal para pessoas físicas e jurídicas.
            </p>

            <h5 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: 500, color: '#333333', marginTop: '25px', marginBottom: '12px' }}>
              Para o empregado:
            </h5>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              <li>Análise dos motivos da rescisão e documentos;</li>
              <li>Cálculos do Termo de Rescisão do Contrato de Trabalho;</li>
              <li>Haveres na rescisão: descanso semanal remunerado – DSR, horas extras, prêmios, gratificações, adicional noturno e outros;</li>
              <li>Demissão a pedido do empregado;</li>
              <li>Orientação ao empregado demitido;</li>
              <li>Horas extraordinárias, intervalo intrajornada e interjornada;</li>
              <li>Pagamento de salários “Por Fora” e Participação nos Lucros e Rendimentos (PLR);</li>
              <li>Acidentes de trabalho e doença profissional;</li>
              <li>Desvio de função, acúmulo de função e equiparação salarial;</li>
              <li>Dano moral, assédio moral e assédio sexual;</li>
              <li>Justa causa no empregador e reversão de justa causa indevida.</li>
            </ul>

            <h5 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: 500, color: '#333333', marginTop: '25px', marginBottom: '12px' }}>
              Para sua empresa:
            </h5>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              <li>Defesa trabalhista contestação;</li>
              <li>Contratos de Trabalho padrão e específicos;</li>
              <li>Análise de admissões e demissões dos funcionários;</li>
              <li>Orientação para adequação legal ou elaboração de Políticas Internas da Empresa;</li>
              <li>Orientações para demissões coletivas;</li>
              <li>Consultoria trabalhista com foco na solução de problemas judiciais e extrajudiciais já existentes e prevenção de futuros problemas.</li>
            </ul>
          </>
        );

      case 'area-tributaria':
        return (
          <>
            <h5 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: 500, color: '#333333', marginTop: '15px', marginBottom: '10px' }}>
              Prescrição e Decadência:
            </h5>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              <li>Expurgos de dívidas tributárias federais, estaduais e municipais, em relação à decadência/prescrição de valores não cobrados efetivamente, ou cobrados, mas com prazos perdidos pelos órgãos, não só em relação à súmula vinculante n.º 08 do Supremo Tribunal Federal (STF), como em relação aos tributos em geral, dentro dos ditames do Código Tributário Nacional.</li>
            </ul>

            <h5 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: 500, color: '#333333', marginTop: '20px', marginBottom: '10px' }}>
              Defesas Administrativas:
            </h5>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              <li>Autuações na esfera administrativa federal, estadual e municipal, com o objetivo de solucionar o passivo tributário, evitando com esse procedimento que a matéria chegue à esfera judicial.</li>
            </ul>

            <h5 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: 500, color: '#333333', marginTop: '20px', marginBottom: '10px' }}>
              Contencioso Fiscal:
            </h5>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              <li>Defesas de execuções fiscais e autuações nas esferas federal, estadual e municipal.</li>
            </ul>

            <h5 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '18px', fontWeight: 500, color: '#333333', marginTop: '20px', marginBottom: '10px' }}>
              Consultoria Tributária:
            </h5>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              <li>Planejamentos tributários visando, dentro da legalidade, minimizar os efeitos da carga tributária;</li>
              <li>Pareceres fiscais, compensação tributária, defesas em execuções fiscais, recursos em procedimentos administrativos, processos administrativos referentes a enquadramento de alíquotas de tributos por ocasião do tipo de atividade, inclusive planejamento tributário.</li>
            </ul>
          </>
        );

      case 'atendimento-a-frotas':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              O escritório <strong>DOMINGUES ADVOGADOS ASSOCIADOS</strong> desenvolveu, com sua equipe de especialistas, um moderno, seguro e ágil programa que permite ao frotista visualizar na hora a situação de cada um dos seus veículos e motoristas, junto aos órgãos fiscalizadores (Detrans), tais como:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              {area.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <p style={{ marginTop: '16px', textAlign: 'justify' }}>
              Nossa equipe de estudiosos do tema “trânsito” está apta a encontrar soluções para as mais variadas questões. Este serviço especializado de acompanhamento da frota e motorista gera redução de custos administrativos ao frotista.
            </p>
          </>
        );

      case 'assessoria-empresarial':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              No segmento Empresarial/Comercial atuamos no que tange às áreas de:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              <li>Títulos de crédito, fusão, incorporação e cisão de empresas;</li>
              <li>Alienação de estabelecimento comercial, ações renovatórias e revisionais de locação comercial;</li>
              <li>Responsabilidade civil das instituições financeiras, cobrança para bancos (execuções, reintegração de posse, busca e apreensão, contestação em direito do consumidor e ações revisionais de cláusula de contrato bancário);</li>
              <li>Responsabilidade civil das empresas de transporte de cargas e passageiros;</li>
              <li>Responsabilidade civil médica;</li>
              <li>Cobrança para empresas privadas (duplicatas, notas promissórias, contratos de venda e serviços e mensalidades escolares);</li>
              <li>Direito falimentar e societário;</li>
              <li>Análise, confecção e pareceres em contratos comerciais em geral;</li>
              <li>Defesas em reclamações trabalhistas, dentre outros temas que compõem esse segmento de atuação;</li>
              <li>Dissolução de sociedade.</li>
            </ul>
          </>
        );

      case 'area-civel':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              É uma das mais amplas do Direito e abrange Responsabilidade Civil, Contratos, Consumidor, Bancário, Direito das Coisas, Das Pessoas, Das Sucessões, dentre outros. Executamos as ações nas relações Cíveis voltadas para:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              <li>Confecção e pareceres de contratos nacionais e internacionais;</li>
              <li>Obrigações;</li>
              <li>Responsabilidade civil (atuando na defesa das empresas em ações de acidentes envolvendo ônibus urbanos e rodoviários e caminhões, responsabilidade civil médica e relações bancárias);</li>
              <li>Direito das coisas (posse e propriedade, usucapião, etc.);</li>
              <li>Sucessões (arrolamentos, inventários e partilhas);</li>
              <li>Direito do consumidor (atuando na defesa das empresas nas relações de consumo).</li>
            </ul>
          </>
        );

      case 'assessoria-no-direito-administrativo':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Atuamos no segmento de Assessoria Administrativa no que diz respeito à Lei federal 8.666/93 (Lei de Licitações) e Nova Lei de Licitações.
            </p>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Executamos o acompanhamento das relações entre comprador e fornecedor, realizando todo o processo licitatório, seus recursos e impugnações, assim como os processos administrativos originários de outras matérias perante os órgãos de controle.
            </p>
          </>
        );

      case 'correspondente-juridico':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Prestação de serviços jurídicos de correspondência nas diversas especialidades do escritório, com advocacia de apoio e espaço local para atendimento de escritórios e departamentos jurídicos de outros estados, atendendo em todo o Estado do Rio de Janeiro no âmbito do TRT da 1ª Região, Varas Cíveis e Juizados Especiais:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              <li>Realização de audiências;</li>
              <li>Cópia de processos;</li>
              <li>Protocolização de peças;</li>
              <li>Elaboração de peças;</li>
              <li>Carta precatória;</li>
              <li>Certidões em geral;</li>
              <li>Cálculo e recolhimento de custas judiciais;</li>
              <li>Carga de processos e despachos de petições com juízes;</li>
              <li>Sustentação oral;</li>
              <li>Acompanhamento processual.</li>
            </ul>
          </>
        );

      case 'area-criminal':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Atuação especializada na área criminal com foco específico em:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              {area.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </>
        );

      case 'recuperacao-de-creditos-do-fgts':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Atuamos com ampla qualificação e expertise nas questões envolvendo o FGTS junto à Caixa Econômica Federal, em situações de parcelamento e de recuperação de créditos.
            </p>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Nosso escritório tem uma equipe especializada, com experiência de atuação junto à Caixa Econômica Federal e conhecimento de todos os procedimentos para que sua empresa possa regularizar seus débitos de FGTS com mais eficiência e resultado.
            </p>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Atualmente o devedor pode utilizar os pagamentos de valores referentes ao FGTS feitos em acordos trabalhistas para amortizar sua dívida já negociada na Caixa pelo valor total do débito. Entenda melhor: é garantido ao empregador o abatimento na dívida não só dos valores pagos aos empregados nos acordos judiciais, mas sim o abatimento de toda a dívida com o FGTS referente a estes empregados, a qual o acordo judicial dá quitação.
            </p>
          </>
        );

      case 'revisao-de-valores-cobrados-de-iptu':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Atuamos na revisão dos valores cobrados pela Prefeitura do Rio de Janeiro a título de IPTU, adequando a tipologia hoje adotada pelo ente tributante, objetivando desta forma reduzir os valores cobrados atualmente.
            </p>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              O serviço tem sua ênfase em empresas que possuam em suas instalações galpões, estacionamentos, telheiros, escritórios, entrada de veículos por ruas principais, dentre outras revisões.
            </p>
          </>
        );

      case 'cobranca-de-mensalidades-escolares':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Disponibilizamos um espaço físico totalmente preparado para executar tal atividade, contando com um programa de informática especializado e desenvolvido para realizar o atendimento em âmbito amigável.
            </p>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Uma equipe de profissionais amplamente treinados para o desenvolvimento desta atividade atuam a partir de um sistema de cobrança de mensalidades em atraso a instituições de ensino superior.
            </p>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              No caso de necessidades mais específicas, disponibilizamos o suporte do departamento jurídico que tem atuação decisiva quando existe necessidade de que a cobrança seja judicial.
            </p>
          </>
        );

      case 'atuacao-nos-tribunais-superiores':
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              Atuamos de forma ampla nos tribunais superiores – Supremo Tribunal Federal (STF), Superior Tribunal de Justiça (STJ) e Tribunal Superior do Trabalho (TST) – com a confecção de recursos, sustentação oral e despachos.
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              {area.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </>
        );

      default:
        return (
          <>
            <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
              {area.summary}
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '20px', lineHeight: '24px' }}>
              {area.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </>
        );
    }
  };

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
              {area.title}
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
              {area.image && (
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      display: 'inline-block',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
                    }}
                  />
                </div>
              )}

              {/* Exact Area Text & Lists */}
              {renderAreaContent()}

              {/* Contact Reference Note */}
              <div style={{
                marginTop: '40px',
                padding: '16px 20px',
                backgroundColor: '#fbfbfb',
                borderLeft: '4px solid #cdb122',
                fontFamily: '"Libre Franklin", sans-serif',
                fontSize: '14px'
              }}>
                Para mais detalhes ou para agendar uma consulta sobre <strong>{area.title}</strong>, entre em{' '}
                <a 
                  href="/contato/" 
                  onClick={(e) => { e.preventDefault(); navigate('/contato/'); }}
                  style={{ color: '#cdb122', fontWeight: 'bold' }}
                >
                  contato conosco
                </a>.
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
