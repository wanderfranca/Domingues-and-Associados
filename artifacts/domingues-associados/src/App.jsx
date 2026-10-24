import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import HomePage from './pages/HomePage';
import QuemSomosPage from './pages/QuemSomosPage';
import AreasDeAtuacaoPage from './pages/AreasDeAtuacaoPage';
import AreaDetailPage from './pages/AreaDetailPage';
import PesquisaJuridicaPage from './pages/PesquisaJuridicaPage';
import NoticiasPage from './pages/NoticiasPage';
import NoticiaDetailPage from './pages/NoticiaDetailPage';
import ContatoPage from './pages/ContatoPage';

import { practiceAreas, postsData } from './data/siteData';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  // Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route matching
  const renderPage = () => {
    // Normalise leading/trailing slashes
    let path = currentPath;
    if (path.length > 1 && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    // 1. Home
    if (path === '' || path === '/' || path === '/home' || path === '/home-2' || path === '/home-teste-ali') {
      return <HomePage navigate={navigate} />;
    }

    // 2. Quem Somos (handles both /quem-somos-2 and /quem-somos)
    if (path === '/quem-somos-2' || path === '/quem-somos') {
      return <QuemSomosPage navigate={navigate} />;
    }

    // 3. Pesquisa Jurídica
    if (path === '/pesquisa-juridica' || path === '/pesquisa') {
      return <PesquisaJuridicaPage navigate={navigate} />;
    }

    // 4. Contato
    if (path === '/contato') {
      return <ContatoPage navigate={navigate} />;
    }

    // 5. Especialidades Directory
    if (path === '/areas' || path === '/areas-de-atuacao' || path === '/especialidades') {
      return <AreasDeAtuacaoPage navigate={navigate} />;
    }

    // 6. Direct Practice Areas matching (e.g. /area-civel-2, /area-civel, /assessoria-empresarial, etc.)
    const cleanSlug = path.replace(/^\/areas\//, '').replace(/^\//, '');
    const matchedArea = practiceAreas.find(a => 
      a.slug === cleanSlug || 
      a.wp_slug === cleanSlug ||
      path === `/${a.slug}` ||
      path === `/${a.wp_slug}` ||
      path === `/areas/${a.slug}`
    );
    if (matchedArea) {
      return <AreaDetailPage slug={matchedArea.slug} navigate={navigate} />;
    }

    // 7. Notícias List
    if (path === '/noticias' || path.startsWith('/category/noticias')) {
      return <NoticiasPage navigate={navigate} />;
    }

    // 8. Notícia Detail Page (/noticias/:slug)
    if (path.startsWith('/noticias/')) {
      const slug = path.replace('/noticias/', '');
      return <NoticiaDetailPage slug={slug} navigate={navigate} />;
    }

    // 9. Match post slug directly if path matches a post slug
    const directPost = postsData.find(p => p.slug === cleanSlug);
    if (directPost) {
      return <NoticiaDetailPage slug={directPost.slug} navigate={navigate} />;
    }

    // Default fallback to Home
    return <HomePage navigate={navigate} />;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100dvh', backgroundColor: '#ffffff' }}>
      <TopBar navigate={navigate} />
      <Header currentPath={currentPath} navigate={navigate} />
      
      <main style={{ flexGrow: 1 }}>
        {renderPage()}
      </main>

      <Footer navigate={navigate} />
      <FloatingWhatsApp />
    </div>
  );
}
