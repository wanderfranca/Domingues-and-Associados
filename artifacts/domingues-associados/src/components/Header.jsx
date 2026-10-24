import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

export default function Header({ currentPath, navigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [noticiasSubOpen, setNoticiasSubOpen] = useState(false);

  const handleNav = (path) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setNoticiasSubOpen(false);
    navigate(path);
  };

  const especialidades = [
    { title: 'Área Cível', path: '/area-civel-2/' },
    { title: 'Assessoria Empresarial', path: '/assessoria-empresarial/' },
    { title: 'Direito Administrativo', path: '/assessoria-no-direito-administrativo/' },
    { title: 'Atendimento a Frotas', path: '/atendimento-a-frotas/' },
    { title: 'Correspondente Jurídico', path: '/correspondente-juridico-2/' },
    { title: 'Área Criminal', path: '/area-criminal/' },
    { title: 'Área Trabalhista', path: '/area-trabalhista-2/' },
    { title: 'Área Tributária', path: '/area-tributaria/' },
    { title: 'Recuperação do FGTS', path: '/recuperacao-de-creditos-do-fgts/' },
    { title: 'Revisão de Valores de IPTU', path: '/revisao-de-valores-cobrados-de-iptu/' },
    { title: 'Mensalidades Escolares', path: '/cobranca-de-mensalidades-escolares/' },
    { title: 'Tribunais Superiores', path: '/atuacao-nos-tribunais-superiores/' }
  ];

  const noticiasCategories = [
    { title: 'STF', filter: 'stf' },
    { title: 'TST', filter: 'tst' },
    { title: 'STJ', filter: 'stj' },
    { title: 'TSE', filter: 'tse' },
    { title: 'JFRJ', filter: 'jfrj' },
    { title: 'MTb', filter: 'mtb' }
  ];

  const [mobileEspecialidadesOpen, setMobileEspecialidadesOpen] = useState(false);
  const [mobileNoticiasOpen, setMobileNoticiasOpen] = useState(false);

  return (
    <header className="banner headerclass">
      <div className="container header-container">
        {/* Left: Logo */}
        <div className="kad-header-left">
          <div id="logo" className="logocase">
            <a 
              href="/" 
              onClick={(e) => { e.preventDefault(); handleNav('/'); }}
              className="brand logofont"
              title="Domingues & Associados Advocacia Empresarial"
            >
              <div id="thelogo">
                <img 
                  src="/uploads/2017/08/Logo_domingues_e_associados_horizontal_v3_curvas-2.png" 
                  alt="Domingues & Associados" 
                  className="kad-standard-logo" 
                />
              </div>
            </a>
          </div>
        </div>

        {/* Right: Main Navigation Menu (Desktop) */}
        <div className="kad-header-right">
          <nav id="nav-main" className="clearfix">
            <ul id="menu-principal" className="sf-menu">
              {/* 1. Quem somos */}
              <li className={currentPath.includes('quem-somos') ? 'active' : ''}>
                <a href="/quem-somos-2/" onClick={(e) => { e.preventDefault(); handleNav('/quem-somos-2/'); }}>
                  <span>Quem somos</span>
                </a>
              </li>

              {/* 2. Especialidades Dropdown */}
              <li 
                className={`dropdown-parent ${currentPath.includes('area') || currentPath.includes('assessoria') || currentPath.includes('frotas') || currentPath.includes('fgts') || currentPath.includes('iptu') || currentPath.includes('escolares') || currentPath.includes('tribunais') ? 'active' : ''}`}
                onMouseEnter={() => setOpenDropdown('especialidades')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a 
                  href="#especialidades" 
                  onClick={(e) => { e.preventDefault(); }}
                  className="dropdown-toggle"
                >
                  <span>Especialidades</span>
                  <ChevronDown size={13} style={{ marginLeft: '4px' }} />
                </a>

                {openDropdown === 'especialidades' && (
                  <ul className="sub-menu sf-dropdown-menu">
                    {especialidades.map(item => (
                      <li key={item.path}>
                        <a 
                          href={item.path} 
                          onClick={(e) => { e.preventDefault(); handleNav(item.path); }}
                        >
                          <span>{item.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* 3. Pesquisa */}
              <li className={currentPath.includes('pesquisa') ? 'active' : ''}>
                <a href="/pesquisa-juridica/" onClick={(e) => { e.preventDefault(); handleNav('/pesquisa-juridica/'); }}>
                  <span>Pesquisa</span>
                </a>
              </li>

              {/* 4. Notícias Dropdown */}
              <li 
                className={`dropdown-parent ${currentPath.startsWith('/noticias') ? 'active' : ''}`}
                onMouseEnter={() => setOpenDropdown('noticias')}
                onMouseLeave={() => { setOpenDropdown(null); setNoticiasSubOpen(false); }}
              >
                <a 
                  href="/noticias/" 
                  onClick={(e) => { e.preventDefault(); handleNav('/noticias/'); }}
                  className="dropdown-toggle"
                >
                  <span>Notícias</span>
                  <ChevronDown size={13} style={{ marginLeft: '4px' }} />
                </a>

                {openDropdown === 'noticias' && (
                  <ul className="sub-menu sf-dropdown-menu">
                    <li>
                      <a href="/noticias/" onClick={(e) => { e.preventDefault(); handleNav('/noticias/'); }}>
                        <span>Artigos</span>
                      </a>
                    </li>
                    <li 
                      className="has-sub-level"
                      onMouseEnter={() => setNoticiasSubOpen(true)}
                      onMouseLeave={() => setNoticiasSubOpen(false)}
                      style={{ position: 'relative' }}
                    >
                      <a 
                        href="/noticias/" 
                        onClick={(e) => { e.preventDefault(); handleNav('/noticias/'); }}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                      >
                        <span>Notícias Jurídicas</span>
                        <ChevronRight size={13} />
                      </a>

                      {noticiasSubOpen && (
                        <ul className="sub-menu sub-menu-nested">
                          {noticiasCategories.map(cat => (
                            <li key={cat.filter}>
                              <a 
                                href={`/noticias?cat=${cat.filter}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleNav(`/noticias?cat=${cat.filter}`);
                                }}
                              >
                                <span>{cat.title}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              {/* 5. Contato */}
              <li className={currentPath === '/contato/' || currentPath === '/contato' ? 'active' : ''}>
                <a href="/contato/" onClick={(e) => { e.preventDefault(); handleNav('/contato/'); }}>
                  <span>Contato</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Nav Toggle Button */}
          <button 
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Alternar Menu"
          >
            <span className="kad-navbtn">
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </span>
            <span className="kad-menu-name">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer (Optimized for Smartphones) */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-menu-list">
            <li>
              <a 
                href="/quem-somos-2/" 
                className={`mobile-nav-link ${currentPath.includes('quem-somos') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/quem-somos-2/'); }}
              >
                Quem somos
              </a>
            </li>

            {/* Accordion Especialidades */}
            <li className="mobile-accordion-item">
              <button 
                type="button"
                className="mobile-accordion-btn"
                onClick={() => setMobileEspecialidadesOpen(!mobileEspecialidadesOpen)}
              >
                <span>Especialidades</span>
                <ChevronDown 
                  size={18} 
                  style={{ 
                    transition: 'transform 200ms ease',
                    transform: mobileEspecialidadesOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }} 
                />
              </button>
              {mobileEspecialidadesOpen && (
                <div className="mobile-submenu">
                  {especialidades.map(item => (
                    <a 
                      key={item.path} 
                      href={item.path} 
                      className={`mobile-sublink ${currentPath === item.path ? 'active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleNav(item.path); }}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li>
              <a 
                href="/pesquisa-juridica/" 
                className={`mobile-nav-link ${currentPath.includes('pesquisa') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/pesquisa-juridica/'); }}
              >
                Pesquisa
              </a>
            </li>

            {/* Accordion Notícias */}
            <li className="mobile-accordion-item">
              <button 
                type="button"
                className="mobile-accordion-btn"
                onClick={() => setMobileNoticiasOpen(!mobileNoticiasOpen)}
              >
                <span>Notícias</span>
                <ChevronDown 
                  size={18} 
                  style={{ 
                    transition: 'transform 200ms ease',
                    transform: mobileNoticiasOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }} 
                />
              </button>
              {mobileNoticiasOpen && (
                <div className="mobile-submenu">
                  <a 
                    href="/noticias/" 
                    className="mobile-sublink"
                    onClick={(e) => { e.preventDefault(); handleNav('/noticias/'); }}
                  >
                    Todos os Artigos
                  </a>
                  {noticiasCategories.map(cat => (
                    <a 
                      key={cat.filter} 
                      href={`/noticias?cat=${cat.filter}`}
                      className="mobile-sublink"
                      onClick={(e) => { e.preventDefault(); handleNav(`/noticias?cat=${cat.filter}`); }}
                    >
                      Notícias {cat.title}
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li>
              <a 
                href="/contato/" 
                className={`mobile-nav-link ${currentPath.includes('contato') ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleNav('/contato/'); }}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
