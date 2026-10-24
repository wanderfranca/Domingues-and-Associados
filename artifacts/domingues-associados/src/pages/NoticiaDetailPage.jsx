import React from 'react';
import { localizeImportedMedia, postsData } from '../data/siteData';

export default function NoticiaDetailPage({ slug, navigate }) {
  const post = postsData.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="virtue-page-wrapper" style={{ backgroundColor: '#ffffff', minHeight: '600px', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="entry-title" style={{ color: '#cdb122', fontFamily: 'Roboto, sans-serif' }}>
            Notícia Não Encontrada
          </h1>
          <p style={{ marginTop: '20px', fontFamily: '"Libre Franklin", sans-serif', fontSize: '14px' }}>
            O artigo solicitado não foi localizado ou foi removido.
          </p>
          <a 
            href="/noticias/" 
            onClick={(e) => { e.preventDefault(); navigate('/noticias/'); }}
            className="kad-btn kad-btn-primary"
            style={{ display: 'inline-block', marginTop: '20px' }}
          >
            &larr; Voltar para o Índice de Notícias
          </a>
        </div>
      </div>
    );
  }

  const postDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  // Paragraph splitting for clean display
  const content = localizeImportedMedia(post.content);
  const paragraphs = content
    .split(/\n+/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

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
              fontSize: '30px',
              fontWeight: 500,
              color: '#cdb122',
              lineHeight: '36px'
            }}>
              {post.title}
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
              lineHeight: '24px',
              color: '#000000',
              maxWidth: '850px'
            }}>
              {/* Meta Date */}
              <div style={{
                color: '#777777',
                fontSize: '13px',
                fontStyle: 'italic',
                marginBottom: '25px',
                paddingBottom: '10px',
                borderBottom: '1px solid #f0f0f0'
              }}>
                Publicado em: <strong>{postDate}</strong> • Domingues & Associados Advocacia Empresarial
              </div>

              {/* Post Paragraphs */}
              <div style={{ textAlign: 'justify' }}>
                {paragraphs.map((p, idx) => {
                  if (p.startsWith('<') && p.endsWith('>')) {
                    return <div key={idx} dangerouslySetInnerHTML={{ __html: p }} style={{ marginBottom: '16px' }} />;
                  }
                  return (
                    <p key={idx} style={{ marginBottom: '16px' }}>
                      {p}
                    </p>
                  );
                })}
              </div>

              {/* Back to news button */}
              <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
                <a 
                  href="/noticias/" 
                  onClick={(e) => { e.preventDefault(); navigate('/noticias/'); }}
                  className="kad-btn kad-btn-primary"
                  style={{ display: 'inline-block' }}
                >
                  &larr; Voltar para todas as Notícias
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
