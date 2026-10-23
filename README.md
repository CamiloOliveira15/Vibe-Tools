# Vibe Tools ⚡

Hub interativo de recursos, prompts de sistema, snippets de código, skills e workflows desenhados para acelerar fluxos de trabalho com IA e **Vibe Coding**.

---

## 🚀 Funcionalidades

- **Catálogo de Recursos:** Prompts de sistema de engenharia sênior/staff, snippets de código (`.cursorrules`, auth, ORM), skills de code review e workflows de agentes (LangGraph, etc.).
- **Filtros e Busca Inteligente:** Filtro rápido por tipo (Prompt, Snippet, Skill, Workflow), categorias e tags dinâmicas.
- **Exportação do Projeto em ZIP:** Permite baixar o código-fonte compactado em `.zip` diretamente pelo navegador.
- **Modo Standalone:** Inclui versão `vibe-standalone.html` em HTML/CSS/JS puro sem dependência de build.
- **Gerenciador de Tags:** Criação, edição e exclusão de tags globais em tempo real.
- **Modo Claro / Escuro:** Interface adaptada para ambos os temas.

---

## 🛠️ Tecnologias

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Lucide Icons**
- **Motion (Framer Motion)**
- **JSZip**

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ (recomendado Node 20+)
- npm ou pnpm

### Passos
1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse `http://localhost:3000` no navegador.

3. Para verificar tipos (TypeScript):
   ```bash
   npm run lint
   ```

4. Para gerar a build de produção:
   ```bash
   npm run build
   ```

---

## 🌐 Publicação na Vercel

O projeto está 100% configurado para deploy instantâneo na Vercel (`vercel.json` incluso).

### Opção 1: Via GitHub (Recomendado)
1. Certifique-se de que as alterações estão comitadas no GitHub (`main`).
2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**.
3. Selecione o repositório `Vibe-Tools`.
4. A Vercel detectará automaticamente o preset **Vite**:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Clique em **Deploy**. A cada novo `git push`, a Vercel atualizará o site automaticamente!

### Opção 2: Via Vercel CLI
```bash
npx vercel
```
Siga as instruções do terminal para vincular à sua conta e publicar.
