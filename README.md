# Quiz Interativo - Curiosidades

Um quiz interativo e divertido sobre conhecimentos gerais, desenvolvido com Next.js e configurado para deploy automático no GitHub Pages.

## 🎮 Funcionalidades

- **25 perguntas** sobre conhecimentos gerais (história, geografia, ciências, cultura)
- **Feedback instantâneo** após cada resposta
- **Indicador de progresso** visual
- **Placar final** com mensagens motivacionais
- **Design responsivo** e lúdico
- **Deploy automático** no GitHub Pages

## 🚀 Como usar

### Para jogar online
Acesse: `https://[seu-usuario].github.io/quiz-interativo`

### Para desenvolvimento local

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/[seu-usuario]/quiz-interativo.git
cd quiz-interativo
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Execute em modo de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📦 Deploy no GitHub Pages

### Configuração automática:

1. **Fork ou clone** este repositório
2. **Ative o GitHub Pages** nas configurações do repositório:
   - Vá em Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
3. **Push para a branch main** - o deploy acontece automaticamente via GitHub Actions

### Configuração manual:

1. Edite o `next.config.mjs` e substitua `quiz-interativo` pelo nome do seu repositório
2. Faça commit e push das alterações
3. O GitHub Actions fará o build e deploy automaticamente

## 🎨 Personalização

### Modificar perguntas:
Edite o arquivo `data/questions.ts` para adicionar, remover ou modificar perguntas.

### Alterar cores e estilo:
As cores estão configuradas no Tailwind CSS. Principais classes usadas:
- Azul: `blue-400`, `blue-500`, `blue-600`
- Amarelo: `yellow-300`, `yellow-400`, `yellow-500`
- Verde: `green-400`, `green-500`, `green-600`
- Roxo: `purple-400`, `purple-500`, `purple-600`

## 🛠️ Tecnologias utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hospedagem

## 📱 Responsividade

O quiz é totalmente responsivo e funciona perfeitamente em:
- 📱 Smartphones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Monitores grandes

## 🎯 Estrutura do projeto

\`\`\`
quiz-interativo/
├── app/
│   ├── page.tsx          # Página inicial
│   ├── quiz/
│   │   └── page.tsx      # Página do quiz
│   └── layout.tsx        # Layout principal
├── components/
│   └── quiz-game.tsx     # Componente principal do quiz
├── data/
│   └── questions.ts      # Banco de perguntas
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions
└── next.config.mjs       # Configuração do Next.js
\`\`\`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Adicionar novas perguntas
- Melhorar o design
- Corrigir bugs
- Sugerir novas funcionalidades

## 📞 Suporte

Se encontrar algum problema ou tiver sugestões, abra uma [issue](https://github.com/[seu-usuario]/quiz-interativo/issues) no GitHub.

---

Feito com ❤️ e muito ☕
