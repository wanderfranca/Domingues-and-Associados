import React from 'react';

export default function QuemSomosPage({ navigate }) {
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
              Quem somos
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
              {/* Centered Large Hero Image */}
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <img 
                  className="aligncenter wp-image-365 size-large"
                  src="/uploads/2017/07/quem-somos-1024x596.jpg" 
                  alt="Instalações Domingues Advogados Associados" 
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'inline-block',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.12)'
                  }}
                />
              </div>

              {/* Main Narrative Paragraphs */}
              <p style={{ marginBottom: '18px', textAlign: 'justify' }}>
                Somos um escritório que optou em ter como objetivo o <strong>máximo de profissionalismo</strong>, para alcançar o máximo de eficiência intelectual e prática. Com este ideal de gestão, nos propomos a executar o trabalho jurídico de forma empresarial, sem abrir mão da moderna tecnologia, com o propósito de garantir a confiança dos nossos clientes.
              </p>

              <p style={{ marginBottom: '18px', textAlign: 'justify' }}>
                Essa visão e a vasta experiência de seus sócios fazem de <strong>DOMINGUES ADVOGADOS ASSOCIADOS</strong> uma empresa que agrega conhecimento na área acadêmica, bancária, trabalhista, previdenciária, consumidor, meio ambiente, responsabilidade civil e empresarial. Com isso tornamos o escritório dinâmico, permitindo oferecer aos nossos clientes suporte técnico-jurídico nestas especialidades, além de atuarmos com eficiência em atividades como auditoria financeira e fiscal, assessoria empresarial e consultoria tributária.
              </p>

              <p style={{ marginBottom: '18px', textAlign: 'justify' }}>
                Nossos clientes contam com uma empresa de advocacia moderna, que atende as suas necessidades mantendo a sinergia com a realidade jurídica. Essa característica nos permite atuar junto aos Tribunais e à administração pública de forma singular, caracterizando a nossa marca registrada: proporcionar aos nossos clientes, um serviço de excelência, cujo binômio está fundado na ética e na eficiência.
              </p>

              <p style={{ marginBottom: '30px', textAlign: 'justify' }}>
                É um serviço com essas credenciais e proporcionado de forma personalizada que destaca nosso escritório no segmento jurídico do Rio de Janeiro, executado por um time de <strong>13 advogados especializados</strong>, que possuem ampla experiência em todas as nossas áreas de atuação. Uma equipe de cerca de <strong>30 profissionais</strong>, dentre estagiários de Direito e funcionários administrativos garantem o suporte necessário. Todo o quadro de colaboradores está em permanente ampliação da qualificação e capacitação profissionais.
              </p>

              {/* Separator Line */}
              <hr style={{ border: 'none', borderTop: '1px solid #eeeeee', margin: '35px 0' }} />

              {/* Perfil Section Header */}
              <h3 style={{
                fontFamily: 'Roboto, sans-serif',
                fontSize: '24px',
                fontWeight: 500,
                color: '#333333',
                lineHeight: '30px',
                marginBottom: '15px'
              }}>
                Perfil
              </h3>

              <p style={{ marginBottom: '25px', textAlign: 'justify' }}>
                O sucesso do <strong>DOMINGUES ADVOGADOS ASSOCIADOS</strong> foi conquistado e vem sendo concretizado ao longo dos anos, como resultado do trabalho de uma equipe de profissionais afinados com os objetivos da empresa e em constante atualização, por meio de cursos e treinamentos. Mas, DOMINGUES ADVOGADOS ASSOCIADOS é, em primeiro lugar, resultado de um projeto muito bem planejado por seu sócio fundador, que temos orgulho em apresentar:
              </p>

              {/* Two Column Layout: Bio & Founder Photo */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                alignItems: 'start',
                marginTop: '20px'
              }}>
                {/* Column 1: Bio */}
                <div style={{ flex: '2' }}>
                  <h4 style={{
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#cdb122',
                    lineHeight: '26px',
                    margin: '0 0 5px 0'
                  }}>
                    Robson Domingues de Oliveira
                  </h4>

                  <div style={{ marginBottom: '15px', color: '#555555', fontWeight: 'bold', fontSize: '13px' }}>
                    OAB RJ 76.481
                  </div>

                  <p style={{ marginBottom: '14px', textAlign: 'justify' }}>
                    Mestre em Direito das Relações Econômicas pela Universidade Gama Filho desde 2001. O título de sua defesa de Mestrado foi: <em>“A Responsabilidade Civil das empresas de transportes de passageiros em ônibus urbanos”</em>. Formou-se Bacharel em Direito em 1991 e Bacharel em Ciências Contábeis em 1987.
                  </p>

                  <p style={{ marginBottom: '14px', textAlign: 'justify' }}>
                    Marcou sua trajetória profissional inicial como sócio do escritório de Advocacia Empresarial Aragão & Domingues Advogados Associados. Atuou como professor da Graduação e Pós-graduação em Direito do Centro Universitário Augusto Motta/RJ, professor de MBA da Fundação Getúlio Vargas – FGV/RJ e atualmente é membro da diretoria da 58ª subseção da OAB/RJ.
                  </p>

                  <p style={{ marginBottom: '14px', textAlign: 'justify' }}>
                    Ministrou diversos seminários na área de direito empresarial, com foco em questões gerenciais, responsabilidade civil e questões jurídicas no transporte coletivo.
                  </p>

                  <p style={{ marginBottom: '14px', textAlign: 'justify' }}>
                    Publicou diversos artigos em publicações jurídicas, com destaque para o artigo <em>“O Leasing”</em>, na Revista Jurídica da Sociedade de Ensino Superior Augusto Motta.
                  </p>
                </div>

                {/* Column 2: Photo */}
                <div style={{ textAlign: 'center' }}>
                  <img 
                    className="alignnone wp-image-553 size-full"
                    src="/uploads/2017/08/luciano-corte-500px.jpg" 
                    alt="Dr. Robson Domingues de Oliveira" 
                    style={{
                      maxWidth: '100%',
                      width: '320px',
                      height: 'auto',
                      display: 'inline-block',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      border: '1px solid #e0e0e0'
                    }}
                  />
                  <div style={{
                    marginTop: '8px',
                    fontSize: '12px',
                    color: '#777777',
                    fontStyle: 'italic'
                  }}>
                    Dr. Robson Domingues de Oliveira — Sócio Fundador
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
