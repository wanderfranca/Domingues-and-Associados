import React, { useState, useMemo } from 'react';
import { postsData } from '../data/siteData';

const POSTS_PER_PAGE = 10;

export default function NoticiasPage({ navigate }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts
  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) return postsData;
    const term = searchTerm.toLowerCase();
    return postsData.filter(post => 
      post.title.toLowerCase().includes(term) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(term)) ||
      (post.content && post.content.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return {
      day: String(d.getDate()).padStart(2, '0'),
      month: months[d.getMonth()] || 'Mês',
      year: d.getFullYear()
    };
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
            marginBottom: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px'
          }}>
            <h1 className="entry-title" style={{
              margin: 0,
              fontFamily: 'Roboto, sans-serif',
              fontSize: '32px',
              fontWeight: 500,
              color: '#cdb122',
              lineHeight: '36px'
            }}>
              Notícias
            </h1>

            {/* Simple Search Input */}
            <div>
              <input
                type="text"
                placeholder="Pesquisar notícias..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                style={{
                  padding: '6px 12px',
                  border: '1px solid #ccc',
                  borderRadius: '2px',
                  fontFamily: '"Libre Franklin", sans-serif',
                  fontSize: '13px',
                  outline: 'none',
                  width: '240px'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div id="content" className="container">
        <div className="row">
          <div className="main col-md-12" role="main">
            {filteredPosts.length === 0 ? (
              <div style={{ padding: '40px 0', textAlign: 'center', fontFamily: '"Libre Franklin", sans-serif' }}>
                <p>Nenhuma notícia encontrada para "{searchTerm}".</p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="kad-btn kad-btn-primary"
                  style={{ marginTop: '10px' }}
                >
                  Ver Todas as Notícias
                </button>
              </div>
            ) : (
              <div className="home_blog">
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))',
                  gap: '30px',
                  rowGap: '40px'
                }}>
                  {currentPosts.map((post) => {
                    const { day, month, year } = formatDate(post.date);
                    return (
                      <article 
                        key={post.id} 
                        className="blog_item" 
                        style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                      >
                        {/* Square Date Badge */}
                        <div className="postdate" style={{
                          minWidth: '55px',
                          width: '55px',
                          textAlign: 'center',
                          backgroundColor: '#f5f5f5',
                          border: '1px solid #e5e5e5',
                          borderRadius: '2px',
                          padding: '6px 4px',
                          flexShrink: 0
                        }}>
                          <span className="postday" style={{
                            display: 'block',
                            fontSize: '20px',
                            fontWeight: 700,
                            lineHeight: 1,
                            color: '#cdb122',
                            fontFamily: 'Roboto, sans-serif'
                          }}>
                            {day}
                          </span>
                          <span className="postmonth" style={{
                            display: 'block',
                            fontSize: '11px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            color: '#666',
                            marginTop: '2px'
                          }}>
                            {month}
                          </span>
                          <span className="postyear" style={{
                            display: 'block',
                            fontSize: '10px',
                            color: '#999',
                            marginTop: '1px'
                          }}>
                            {year}
                          </span>
                        </div>

                        {/* Title and Excerpt */}
                        <div style={{ flex: 1 }}>
                          <header className="home-blog-header">
                            <h5 className="entry-title" style={{
                              margin: '0 0 8px 0',
                              fontFamily: 'Roboto, sans-serif',
                              fontSize: '17px',
                              lineHeight: '22px',
                              fontWeight: 500
                            }}>
                              <a 
                                href={`/noticias/${post.slug}/`} 
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate(`/noticias/${post.slug}/`);
                                }}
                                style={{
                                  color: '#333333',
                                  textDecoration: 'none',
                                  transition: 'color 150ms ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.color = '#cdb122'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
                              >
                                {post.title}
                              </a>
                            </h5>
                          </header>

                          <div className="entry-content" style={{
                            fontFamily: '"Libre Franklin", sans-serif',
                            fontSize: '13px',
                            lineHeight: '20px',
                            color: '#444444'
                          }}>
                            <p style={{ margin: 0 }}>
                              {post.excerpt ? post.excerpt.slice(0, 160) + '...' : ''}
                            </p>
                            <a 
                              href={`/noticias/${post.slug}/`}
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/noticias/${post.slug}/`);
                              }}
                              style={{
                                color: '#cdb122',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '13px',
                                display: 'inline-block',
                                marginTop: '6px'
                              }}
                              onMouseEnter={(e) => e.currentTarget.style.color = '#d8d68a'}
                              onMouseLeave={(e) => e.currentTarget.style.color = '#cdb122'}
                            >
                              Leia mais &rarr;
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '50px',
                    fontFamily: 'Roboto, sans-serif'
                  }}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => {
                          setCurrentPage(page);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        style={{
                          minWidth: '34px',
                          height: '34px',
                          border: page === currentPage ? '1px solid #cdb122' : '1px solid #ddd',
                          backgroundColor: page === currentPage ? '#cdb122' : '#ffffff',
                          color: page === currentPage ? '#ffffff' : '#444444',
                          fontWeight: 500,
                          fontSize: '13px',
                          borderRadius: '2px',
                          cursor: 'pointer',
                          transition: 'all 150ms ease'
                        }}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
