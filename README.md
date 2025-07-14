# Axel Frontend

Axel Frontend é uma aplicação web moderna desenvolvida em Next.js 15 com TypeScript, React 19 e Tailwind CSS, oferecendo uma interface intuitiva e responsiva para interação com o assistente virtual Axel AI. O projeto integra autenticação, chat inteligente, sistema de pagamentos, dashboard administrativo, sistema de animações personalizável e muito mais, com foco em experiência do usuário e performance.

## 🚀 Tecnologias Principais

- **Next.js 15** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS 4** (Styling)
- **Redux Toolkit** (Gerenciamento de estado)
- **React Hook Form** + Zod (Formulários e validação)
- **Radix UI** (Componentes acessíveis)
- **Framer Motion** (Animações)
- **Axios** (Requisições HTTP)
- **Chart.js** (Gráficos e analytics)
- **Husky** + ESLint + Prettier (Qualidade de código)
- **Next-themes** (Tema claro/escuro)
- **Redux Persist** (Persistência de estado)

## 📁 Estrutura de Pastas (/app)

```
app/
├── _api/                 # Serviços de API (AI, usuário, etc.)
├── _components/          # Componentes reutilizáveis
│   ├── AnimatedCard.tsx  # Card com animações
│   ├── AnimatedButton.tsx # Botão com animações
│   └── ThemeToggle.tsx   # Toggle de tema
├── _constants/           # Constantes e configurações
├── _data/                # Dados estáticos (planos, recursos, etc.)
├── _examples/            # Exemplos de uso da IA
├── _forms/               # Hooks e schemas de formulários
├── _lib/                 # Utilitários e hooks customizados
│   └── hooks/
│       └── useAnimations.ts # Hook para gerenciar animações
├── admin/                # Rotas somente admin pode entrar
├── callback/             # Página de callback OAuth
├── chat-axel/            # Interface principal do chat
├── checkout/             # Sistema de pagamentos
├── login/                # Autenticação
├── profile/              # Perfil do usuário
├── register/             # Cadastro
├── settings/             # Configurações do usuário
│   └── _components/
│       ├── AppearanceInterface.tsx # Configurações de aparência
│       ├── PrivacySecurity.tsx     # Privacidade e dados
│       └── ConfirmDialog.tsx       # Diálogo de confirmação
├── store/                # Redux store e slices
│   └── slice/
│       ├── appearance/   # Configurações de aparência
│       ├── auth/         # Autenticação
│       ├── chat/         # Conversas
│       ├── personality/  # Personalidade do assistente
│       ├── voice/        # Configurações de voz
│       └── usage/        # Controle de uso
├── types/                # Tipos TypeScript
├── provider/             # Providers da aplicação
└── globals.css           # Estilos globais
```

## 🧩 Principais Funcionalidades

### 🤖 Chat Inteligente

- Interface de chat moderna, responsiva e **centralizada na tela**
- Saudação inicial personalizada: "Olá, [nome]! como posso te ajudar?", centralizada e com animação de digitação
- Texto de saudação estilizado (tamanho grande e negrito)
- Histórico de conversas persistente
- Exemplos de perguntas para iniciar conversas
- Indicadores de limite de uso
- Integração com IA para respostas inteligentes
- **Novo**: Controle de exibição do avatar do assistente
- **Novo**: Sistema de animações personalizável

### 🎨 Sistema de Animações

- **Animações Controláveis**: Ativar/desativar através das configurações
- **Componentes Animados**: Cards, botões e elementos com animações suaves
- **Hook Personalizado**: `useAnimations()` para gerenciar animações
- **Framer Motion**: Animações fluidas e performáticas
- **Respeito à Acessibilidade**: Suporte a preferências de movimento reduzido

### ⚙️ Configurações Avançadas

- **Tema Dinâmico**: Claro, escuro ou sistema
- **Animações**: Controle total sobre animações da interface
- **Avatar do Assistente**: Mostrar/ocultar avatar nas conversas
- **Configurações de Voz**: Controle de síntese de voz
- **Personalidade**: Ajustes no comportamento do assistente

### 🔐 Sistema de Autenticação

- Login tradicional e social (Google, Facebook)
- Cadastro com verificação de e-mail
- Recuperação de senha
- Perfil de usuário personalizável
- Proteção de rotas

### 💳 Sistema de Pagamentos

- Integração com MercadoPago
- Múltiplos métodos de pagamento (cartão, boleto, PIX)
- Planos flexíveis (Free, Mensal, Anual)
- Controle de limites por plano
- Histórico de transações

### 📊 Dashboard Administrativo

- Visão geral do sistema
- Gestão de usuários
- Monitoramento de pagamentos
- Logs e analytics
- Interface responsiva para desktop e mobile

### 🗂️ Gerenciamento de Dados

- **Exportação de Dados**: Download completo de conversas e configurações
- **Limpeza de Histórico**: Remoção segura de todos os dados
- **Backup Automático**: Formato JSON estruturado
- **Confirmação Segura**: Diálogos de confirmação para ações destrutivas

### 🎨 Interface Moderna

- Design system consistente
- Tema claro/escuro dinâmico
- Animações suaves e personalizáveis
- Componentes acessíveis
- Responsivo para todos os dispositivos

## 🏗️ Componentes Principais

### Chat Interface

- `ChatMessages`: Exibição de mensagens com controle de avatar
- `InputChatAxel`: Campo de entrada com validação
- `ExampleQuestions`: Sugestões de perguntas
- `HeaderChatAxel`: Cabeçalho do chat
- `LimitWarning`: Avisos de limite de uso

### Sistema de Animações

- `AnimatedCard`: Card com animações automáticas
- `AnimatedButton`: Botão com diferentes tipos de animação
- `useAnimations`: Hook para gerenciar animações
- `ThemeToggle`: Toggle de tema com animações

### Configurações

- `AppearanceInterface`: Configurações de aparência e tema
- `PrivacySecurity`: Gerenciamento de dados e privacidade
- `ConfirmDialog`: Diálogo de confirmação reutilizável
- `GeneralSettings`: Configurações gerais do sistema

### Sistema de Pagamentos

- `CreditCardForm`: Formulário de cartão
- `PixPayment`: Pagamento via PIX
- `BoletoPayment`: Pagamento via boleto
- `PaymentMethodSelector`: Seleção de método
- `OrderSummary`: Resumo do pedido

### Dashboard

- `VisaoGeral`: Métricas e analytics
- `Usuarios`: Gestão de usuários
- `Pagamentos`: Monitoramento de pagamentos
- `LogsESistema`: Logs e status do sistema

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do frontend
cd axel

# Instale as dependências
npm install
```

### Configuração

Crie um arquivo `.env.local` na raiz do projeto:

```env
# API Backend
NEXT_PUBLIC_API_URL=http://localhost:3001

# Outras configurações
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse a aplicação
# http://localhost:3000
```

### Build e Deploy

```bash
# Build para produção
npm run build

# Inicie o servidor de produção
npm start

# Lint do código
npm run lint
```

## 🔑 Rotas Principais

- `/` - Página inicial com landing page
- `/login` - Autenticação
- `/register` - Cadastro de usuário
- `/chat-axel` - Interface principal do chat
- `/settings` - Configurações do usuário
- `/dashboard` - Painel administrativo
- `/profile` - Perfil do usuário
- `/checkout` - Sistema de pagamentos
- `/payment` - Processamento de pagamentos
- `/success` - Confirmação de pagamento

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:

- **Desktop**: Interface completa com sidebar
- **Tablet**: Layout adaptativo
- **Mobile**: Interface mobile-first com navegação otimizada

## 🎯 Funcionalidades Avançadas

### Sistema de Planos

- **Axel Lite (Free)**: Acesso básico limitado
- **Axel Plus (Mensal)**: R$25,90/mês - Recursos ilimitados
- **Axel Pro (Anual)**: R$249,90/ano - Recursos premium

### Recursos por Categoria

- **Produtividade**: Documentos, tarefas, relatórios
- **Educação**: Explicações, lições, pesquisas
- **Tecnologia**: Programação, debugging, automação
- **Idiomas**: Tradução, ensino, correção
- **Criatividade**: Brainstorming, conteúdo, design
- **Análise**: Dados, insights, relatórios

### Sistema de Animações

- **Tipos de Animação**: Scale, slide, fade
- **Controle Granular**: Ativar/desativar por componente
- **Performance**: Animações otimizadas
- **Acessibilidade**: Respeita preferências do usuário

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build para produção
npm run start        # Servidor de produção
npm run lint         # Verificação de código
```

### Convenções

- Commits seguem Conventional Commits
- Código validado com ESLint
- Formatação automática com Prettier
- Husky para hooks de git

### Estrutura de Estado (Redux)

- **Auth**: Autenticação e usuário
- **Chat**: Conversas e mensagens
- **Payment**: Pagamentos e planos
- **Usage**: Controle de uso
- **Appearance**: Configurações de aparência e animações
- **Voice**: Configurações de voz
- **Personality**: Personalidade do assistente
- **Sidebar**: Estado da navegação

## 🎨 Design System

### Componentes UI

- Botões, inputs, cards
- Modais e dialogs
- Navegação e tabs
- Feedback e notificações
- Gráficos e charts

### Temas

- Suporte a tema claro/escuro dinâmico
- Cores consistentes
- Tipografia padronizada
- Espaçamentos uniformes

### Animações

- Transições suaves
- Micro-interações
- Estados de hover/focus
- Animações de entrada/saída

## 📊 Performance

- **Next.js 15**: Otimizações automáticas
- **Image Optimization**: Otimização de imagens
- **Code Splitting**: Carregamento sob demanda
- **Caching**: Redux Persist para estado
- **Lazy Loading**: Componentes carregados quando necessário
- **Animações Otimizadas**: Framer Motion com performance

## 🔒 Segurança

- Validação de formulários com Zod
- Proteção de rotas autenticadas
- Sanitização de dados
- HTTPS em produção
- Tokens JWT seguros
- Confirmação para ações destrutivas

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Outras Plataformas

- Netlify
- Railway
- AWS Amplify
- Docker

## 📚 Observações

- O projeto é facilmente extensível para novos recursos
- Arquitetura modular permite manutenção simples
- Integração completa com o backend Axel
- Sistema de planos flexível e escalável
- Interface moderna e acessível
- Sistema de animações personalizável
- Gerenciamento completo de dados do usuário

## 🏆 Autores

- **Aldair Rocha**
- **André Nunes**
- **Eduardo Muller**
- **Lucas Alves**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

**Axel AI** - Seu assistente virtual inteligente! 🤖✨
