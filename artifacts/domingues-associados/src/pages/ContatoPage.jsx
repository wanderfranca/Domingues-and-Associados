import React, { useState } from 'react';
import { siteConfig } from '../data/siteData';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [emailPrepared, setEmailPrepared] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      setError('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    const subject = formData.assunto.trim() || `Contato pelo site - ${formData.nome.trim()}`;
    const body = [
      `Nome: ${formData.nome.trim()}`,
      `E-mail: ${formData.email.trim()}`,
      '',
      formData.mensagem.trim(),
    ].join('\n');

    setEmailPrepared(true);
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
              Contato
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
              {/* Address Header */}
              <div style={{ marginBottom: '25px' }}>
                <h5 style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#333333',
                  margin: '0 0 10px 0',
                  lineHeight: '24px'
                }}>
                  Domingues &amp; Associados Advocacia Empresarial
                </h5>

                <p style={{ margin: 0, lineHeight: '22px' }}>
                  Rua México, 21, Sala 1301 – Centro<br />
                  CEP RJ, 20031-144 – Rio de Janeiro – RJ<br />
                  Tel.:{' '}
                  <a 
                    title="Fazer ligação" 
                    href="tel:+552138685091" 
                    style={{ color: '#cdb122', textDecoration: 'none' }}
                  >
                    +55 21 3868-5091
                  </a>
                </p>
              </div>

              {/* Instructions */}
              <p style={{ marginBottom: '25px' }}>
                Preencha os campos abaixo. O botão abrirá uma mensagem no seu aplicativo de e-mail para você revisar e enviar.
              </p>

              {/* Contact Form (CF7 styling) */}
              <div style={{ maxWidth: '650px', marginBottom: '45px' }}>
                {emailPrepared ? (
                  <div style={{
                    padding: '16px 20px',
                    border: '2px solid #cdb122',
                    backgroundColor: '#fffcf0',
                    color: '#333333',
                    borderRadius: '2px'
                  }}>
                    <strong style={{ color: '#cdb122', display: 'block', marginBottom: '6px', fontSize: '15px' }}>
                      Conclua o envio no seu aplicativo de e-mail.
                    </strong>
                    Se ele não abrir, envie sua mensagem para{' '}
                    <a href={`mailto:${siteConfig.email}`} style={{ color: '#8a7610' }}>
                      {siteConfig.email}
                    </a>.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="wpcf7-form">
                    {error && (
                      <div style={{
                        padding: '10px 15px',
                        backgroundColor: '#ffebeb',
                        border: '1px solid #f5c6cb',
                        color: '#721c24',
                        marginBottom: '15px',
                        borderRadius: '2px'
                      }}>
                        {error}
                      </div>
                    )}

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                        Seu nome (obrigatório)
                      </label>
                      <input
                        type="text"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '8px 10px',
                          border: '1px solid #cccccc',
                          borderRadius: '2px',
                          fontFamily: '"Libre Franklin", sans-serif',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                        Seu e-mail (obrigatório)
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '8px 10px',
                          border: '1px solid #cccccc',
                          borderRadius: '2px',
                          fontFamily: '"Libre Franklin", sans-serif',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                        Assunto
                      </label>
                      <input
                        type="text"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '8px 10px',
                          border: '1px solid #cccccc',
                          borderRadius: '2px',
                          fontFamily: '"Libre Franklin", sans-serif',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>
                        Sua mensagem
                      </label>
                      <textarea
                        name="mensagem"
                        required
                        rows={6}
                        value={formData.mensagem}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '8px 10px',
                          border: '1px solid #cccccc',
                          borderRadius: '2px',
                          fontFamily: '"Libre Franklin", sans-serif',
                          fontSize: '14px',
                          outline: 'none',
                          resize: 'vertical',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <input
                      type="submit"
                      value="Abrir e-mail"
                      className="wpcf7-submit"
                      style={{
                        backgroundColor: '#cdb122',
                        color: '#ffffff',
                        border: 'none',
                        padding: '10px 24px',
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        transition: 'background-color 200ms ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d8d68a'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#cdb122'}
                    />
                  </form>
                )}
              </div>

              {/* Separator */}
              <hr style={{ border: 'none', borderTop: '1px solid #eeeeee', margin: '35px 0' }} />

              {/* Google Maps Location */}
              <div style={{ marginTop: '30px' }}>
                <h3 style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#333333',
                  lineHeight: '30px',
                  marginBottom: '15px'
                }}>
                  Nossa localização
                </h3>

                <div style={{
                  border: '1px solid #e0e0e0',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                  height: '450px',
                  overflow: 'hidden'
                }}>
                  <iframe
                    title="Nossa localização - Domingues & Associados"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.295240212759!2d-43.1763585!3d-22.9114178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9981df5a77e847%3A0xa33c8e7fef511bd0!2sR.+M%C3%A9xico%2C+21+-+Centro%2C+Rio+de+Janeiro+-+RJ%2C+20031-144!5e0!3m2!1spt-BR!2sbr!4v1556817363879!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
