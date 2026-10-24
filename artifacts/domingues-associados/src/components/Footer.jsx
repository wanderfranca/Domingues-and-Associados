import React from 'react';

export default function Footer() {
  return (
    <footer id="containerfooter" className="footerclass">
      <div className="container">
        <div className="row" style={{ alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          {/* Col 1: White Logo */}
          <div style={{ flex: '1 1 300px', maxWidth: '380px', marginBottom: '20px' }}>
            <img 
              src="/uploads/2017/07/texto-domingues-associados-branco-1.png" 
              alt="Domingues & Associados" 
              style={{ width: '280px', height: 'auto' }}
            />
          </div>

          {/* Col 2: Text Address */}
          <div style={{ flex: '1 1 300px', maxWidth: '380px', marginBottom: '20px' }}>
            <div className="textwidget" style={{ color: '#ffffff', fontSize: '13px', lineHeight: '22px' }}>
              <p style={{ margin: 0, color: '#ffffff' }}>
                Rua México, 21, Sala 1301 – Centro<br />
                CEP 20031-144 – Rio de Janeiro – RJ<br />
                Tel.: <a title="Fazer ligação" href="tel:+552138685091" style={{ color: '#ffffff', fontWeight: 600 }}>+55 21 3868-5091</a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer credits bar */}
        <div className="footercredits">
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Domingues &amp; Associados - Site criado por{' '}
            <a 
              href="https://www.instagram.com/wander.wr/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram Wander França"
            >
              Wander França
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
