  # Busca Centro

  O **Busca Centro** é um sistema para ajudar cidadãos a encontrarem lojas, produtos e serviços no centro da cidade com mais rapidez. A aplicação também aproxima comerciantes do público, permitindo que seus estabelecimentos sejam divulgados e apareçam no mapa.

  ## Proposta

  O sistema foi pensado especialmente para:

  - cidadãos que frequentam ou querem conhecer o centro;
  - jovens que precisam de ajuda para se localizar;
  - pessoas que desejam encontrar um produto ou loja sem perder tempo;
  - comerciantes que querem divulgar seus negócios e alcançar novos clientes.

  Ao pesquisar o que deseja, o cidadão poderá visualizar os locais disponíveis, receber uma rota até eles e acumular pontos ao utilizar a plataforma. Dessa forma, o Busca Centro combina descoberta, orientação e incentivo à circulação no comércio local.

  ## Funcionalidades

  ### Para cidadãos

  - criação de conta e login;
  - busca por lojas, produtos e serviços;
  - visualização de estabelecimentos no mapa;
  - criação de rotas com base nos locais e produtos desejados;
  - favoritos e histórico de locais visitados;
  - acúmulo de pontos pelo uso do sistema;
  - gerenciamento do perfil e da senha;
  - escolha entre tema claro, escuro ou definido pelo sistema.

  ### Para comerciantes

  - criação de conta de comerciante;
  - divulgação do estabelecimento e dos produtos;
  - presença no mapa para facilitar a descoberta pelos cidadãos;
  - possibilidade de alcançar pessoas que já estão procurando seus produtos ou serviços.

  > O frontend atualmente conta com as telas de autenticação, cadastro de usuários e comerciantes, dashboard protegido e perfil. Busca, mapa, rotas, pontos e gerenciamento completo de estabelecimentos fazem parte da proposta de evolução do produto.

  ## Tecnologias

  - [React](https://react.dev/) 19
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vite.dev/)
  - [React Router](https://reactrouter.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Axios](https://axios-http.com/)
  - [React Hook Form](https://react-hook-form.com/)
  - [Zod](https://zod.dev/)
  - [Lucide React](https://lucide.dev/)

  ## Requisitos

  - Node.js 20 ou superior;
  - npm 10 ou superior;
  - acesso à API utilizada pela aplicação, configurada conforme o ambiente.

  ## Instalação

  Clone este repositório, acesse a pasta do projeto e instale as dependências:

  ```bash
  git clone URL_DO_REPOSITORIO
  cd buscaCentroFront
  npm install
  ```

  Caso o projeto utilize variáveis de ambiente, crie um arquivo `.env` na raiz com as configurações necessárias para a API. Consulte a implementação em `src/lib/Axios.ts` para verificar os nomes esperados.

  ## Scripts disponíveis

  ```bash
  # Inicia o servidor de desenvolvimento
  npm run dev

  # Gera a versão de produção
  npm run build

  # Executa o lint
  npm run lint

  # Visualiza a versão de produção localmente
  npm run preview
  ```

  Depois de executar `npm run dev`, abra a URL exibida pelo Vite no terminal.

  ## Estrutura principal

  ```text
  src/
  ├── components/       Componentes reutilizáveis e layouts
  ├── contexts/         Contexto e provedor de autenticação
  ├── hooks/            Hooks personalizados
  ├── lib/              Configuração de serviços externos, como Axios
  ├── pages/            Páginas de login, cadastro, dashboard e perfil
  ├── routes/           Rotas públicas e protegidas
  ├── services/         Serviços de comunicação com a API
  └── types/            Tipos e contratos TypeScript
  ```

  ## Fluxo de acesso

  1. O visitante acessa a tela de login.
  2. Usuários novos podem criar uma conta comum ou uma conta de comerciante.
  3. Após a autenticação, o usuário acessa o dashboard.
  4. Áreas privadas, como dashboard e perfil, são protegidas por rota.
  5. No perfil, o usuário pode alterar a senha e personalizar o tema da aplicação.

  ## Status

  O projeto está em desenvolvimento. A fundação de autenticação e gerenciamento de perfil está disponível, enquanto os módulos de mapa, busca, rotas, pontos e catálogo de comerciantes continuam em evolução.


© 2026 Daniel Quintela. Todos os direitos reservados.

O uso, cópia, modificação ou redistribuição deste código depende de autorização expressa do autor.