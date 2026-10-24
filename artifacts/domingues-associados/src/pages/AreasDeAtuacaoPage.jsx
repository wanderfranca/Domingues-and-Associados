import React, { useState } from 'react';
import { practiceAreas } from '../data/siteData';

export default function AreasDeAtuacaoPage({ navigate }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAreas = practiceAreas.filter(area => 
    area.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    area.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Especialidades
            </h1>

            <div>
              <input
                type="text"
                placeholder="Filtrar especialidades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              rowGap: '40px'
            }}>
              {filteredAreas.map((area) => {
                const targetUrl = area.wp_slug ? `/${area.wp_slug}/` : `/${area.slug}/`;
                return (
                  <div 
                    key={area.slug} 
                    style={{
                      border: '1px solid #e5e5e5',
                      borderRadius: '2px',
                      overflow: 'hidden',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Featured Image */}
                    <div style={{ height: '180px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                      <img 
                        src={area.image} 
                        alt={area.title} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h4 style={{
                        margin: '0 0 10px 0',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '18px',
                        lineHeight: '24px',
                        fontWeight: 500
                      }}>
                        <a 
                          href={targetUrl}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(targetUrl);
                          }}
                          style={{
                            color: '#333333',
                            textDecoration: 'none'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.color = '#cdb122'}
                          onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}
                        >
                          {area.title}
                        </a>
                      </h4>

                      <p style={{
                        fontFamily: '"Libre Franklin", sans-serif',
                        fontSize: '13px',
                        lineHeight: '20px',
                        color: '#555555',
                        flex: 1,
                        marginBottom: '16px'
                      }}>
                        {area.summary}
                      </p>

                      <div>
                        <a 
                          href={targetUrl}
                          onClick={(e) => {
                            e.preventDefault();
                            navigate(targetUrl);
                          }}
                          className="kad-btn kad-btn-primary"
                          style={{
                            display: 'inline-block',
                            padding: '6px 14px',
                            fontSize: '12px'
                          }}
                        >
                          Saiba mais &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
