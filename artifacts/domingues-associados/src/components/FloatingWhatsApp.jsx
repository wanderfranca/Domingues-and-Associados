import React from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '../data/siteData';

export default function FloatingWhatsApp() {
  const url = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=Olá,%20gostaria%20de%20falar%20com%20um%20advogado%20da%20Domingues%20%26%20Associados.`;

  return (
    <aside style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }} aria-label="Atendimento via WhatsApp">
      {/* Tooltip badge */}
      <span className="wa-tooltip" style={{
        backgroundColor: '#0b1a2b',
        color: '#ffffff',
        padding: '0.5rem 0.85rem',
        borderRadius: '20px',
        fontSize: '0.82rem',
        fontWeight: 600,
        boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
        border: '1px solid rgba(74, 222, 128, 0.4)',
        display: 'none',
        whiteSpace: 'nowrap'
      }}>
        Atendimento via WhatsApp
      </span>

      {/* Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Iniciar conversa no WhatsApp"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          transition: 'all 200ms ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          const tip = e.currentTarget.parentElement.querySelector('.wa-tooltip');
          if (tip) tip.style.display = 'block';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          const tip = e.currentTarget.parentElement.querySelector('.wa-tooltip');
          if (tip) tip.style.display = 'none';
        }}
      >
        <MessageSquare size={28} />
      </a>
    </aside>
  );
}
