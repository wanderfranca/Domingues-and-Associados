# Domingues & Associados Advocacia Empresarial — React Web App

Aplicação web moderna desenvolvida em React + Vite, convertida a partir da base histórica em WordPress do escritório Domingues & Associados Advocacia Empresarial.

## 🚀 Como Executar

Dentro da pasta `react-app`:

```bash
# Instalar dependências (já instaladas)
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build otimizado de produção
npm run build

# Visualizar o build de produção localmente
npm run preview
```

O servidor local é iniciado em: **http://localhost:5173/**

---

## 📁 Estrutura do Projeto

- **`src/data/siteData.js`**: Banco de dados estruturado com todas as informações institucionais, 12 áreas de atuação, diretório de pesquisa jurídica e os 204 artigos de notícias migrados do WordPress.
- **`src/components/`**:
  - `TopBar.jsx`: Barra superior com telefone, endereço, OAB RJ 76.481 e atalho WhatsApp.
  - `Header.jsx`: Topo fixo com logo vetorizado em alta resolução, navegação e dropdown das 12 áreas.
  - `Footer.jsx`: Rodapé corporativo com links, contato e notas de conformidade OAB.
  - `FloatingWhatsApp.jsx`: Botão flutuante para atendimento direto.
- **`src/pages/`**:
  - `HomePage.jsx`: Página inicial com carrossel dinâmico, estatísticas, 12 especialidades e notícias recentes.
  - `QuemSomosPage.jsx`: Apresentação institucional e biografia do sócio fundador Dr. Robson Domingues de Oliveira.
  - `AreasDeAtuacaoPage.jsx`: Diretório com busca em tempo real das 12 áreas.
  - `AreaDetailPage.jsx`: Páginas detalhadas de cada especialidade com lista de serviços e CTA.
  - `PesquisaJuridicaPage.jsx`: Portal de pesquisa com links para Planalto, STF, STJ, TST, Súmulas e Doutrina.
  - `NoticiasPage.jsx`: Acervo completo com os 204 artigos jurídicos com paginação e busca instantânea.
  - `NoticiaDetailPage.jsx`: Leitor de artigo completo com formatação, data e artigos relacionados.
  - `ContatoPage.jsx`: Formulário com validação, telefones, WhatsApp e Google Maps embutido.
- **`public/uploads/`**: Contém todos os 1.490 arquivos de mídia originais (fotos, logotipos e banners).
