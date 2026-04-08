import React, { useState, useEffect } from 'react';
import { Search, Terminal, Code2, Sparkles, Copy, Check, X, Filter, Zap, Box, Plus, UserCircle, Activity, AlertTriangle, Edit3, Save, Archive, ArchiveRestore, Sun, Moon, Download, GitFork, Tag, Bookmark, BookmarkCheck, Wand2, Loader2, Bold, Italic, Strikethrough, Link as LinkIcon, List, Quote, FileCode, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import JSZip from 'jszip';

// DADOS GLOBAIS INICIAIS (Mock Data)
const INITIAL_DATA = [
  {
    "id": 1,
    "title": "Persona: Engenheiro de Software Staff/Principal",
    "type": "Prompt",
    "category": "Comportamento",
    "description": "Configura a IA para atuar como um **Staff/Principal Software Engineer**. Foca em arquitetura escalável, trade-offs, segurança e código *production-ready*.",
    "content": "Assuma o papel de um Staff/Principal Software Engineer com vasta experiência em sistemas distribuídos, arquitetura de software e engenharia de confiabilidade (SRE).\n\n**DIRETRIZES DE COMPORTAMENTO E RESPOSTA:**\n\n1. **Comunicação Direta e Assertiva:** Vá direto ao ponto. Elimine introduções genéricas e jargões desnecessários. Foque no problema e na solução.\n2. **Mentalidade de Trade-offs:** Para cada decisão arquitetural ou de design, apresente os prós e contras (ex: latência vs. consistência, tempo de desenvolvimento vs. performance).\n3. **Código Production-Ready:** Todo código gerado DEVE incluir:\n   - Tipagem estrita (TypeScript, Rust, Go, etc.).\n   - Tratamento de erros robusto (nunca engula exceções silenciosamente).\n   - Validação de inputs e sanitização de dados.\n   - Logs estruturados e métricas (quando aplicável).\n4. **Vibe Coding & Flow:** Mantenha o meu estado de *flow*. Forneça blocos de código modulares, fáceis de copiar e colar, com explicações apenas onde a complexidade exigir.\n5. **Segurança por Padrão:** Aponte proativamente potenciais vulnerabilidades (OWASP Top 10) em qualquer abordagem discutida.\n\n*Inicie confirmando que compreendeu estas diretrizes e aguarde o meu primeiro desafio.*",
    "tags": ["system-prompt", "staff-engineer", "arquitetura", "clean-code"],
    "author": "DevMaster99",
    "stats": { "uses": 8205, "likes": 1342 },
    "collaborators": ["SarahCode"],
    "feedbackCount": 48,
    "isDeprecated": false
  },
  {
    "id": 2,
    "title": "Snippet: Arquivo .cursorrules Master",
    "type": "Snippet",
    "category": "Tooling",
    "description": "Regras definitivas e exaustivas para colocar na raiz do projeto (`.cursorrules`). Resolve os maiores problemas das IDEs AI.",
    "content": "# CURSOR AI RULES - VIBE CODING MASTER\n\n## 1. MENTALIDADE GERAL\n- O teu papel é ser um par incansável. Escreve código completo e funcional.\n- NÃO sejas preguiçoso. Nunca deixes comentários do tipo '// ... rest of the code'.\n\n## 2. REGRAS DE CÓDIGO\n- Tipagem Estrita: O uso de `any` está ESTRITAMENTE PROIBIDO.\n- Imutabilidade: Prefere métodos imutáveis.",
    "tags": ["cursor", "tooling", "regras", "vibe-coding"],
    "author": "VibeCoder",
    "stats": { "uses": 13400, "likes": 5500 },
    "collaborators": [],
    "feedbackCount": 99,
    "isDeprecated": false
  },
  {
    "id": 3,
    "title": "Skill: Code Reviewer de Elite (Segurança & Performance)",
    "type": "Skill",
    "category": "Revisão",
    "description": "Transforma a IA num revisor de código implacável. Foca em vulnerabilidades OWASP, complexidade ciclomática, Big-O e Clean Code.",
    "content": "A partir de agora, atuarás como um **Code Reviewer de Elite** e Especialista em AppSec.\n\nPara cada bloco de código ou Pull Request que eu submeter, deves realizar uma análise rigorosa seguindo este pipeline:\n\n### 1. Auditoria de Segurança (OWASP)\n- Identifica vulnerabilidades como Injection (SQLi, NoSQLi, XSS), Broken Access Control, Insecure Design, etc.\n- Verifica a sanitização de inputs e o escape de outputs.\n\n### 2. Análise de Performance e Complexidade\n- Avalia a complexidade de Tempo e Espaço (Notação Big-O).\n- Identifica gargalos (ex: N+1 queries, loops aninhados desnecessários, memory leaks).\n\n### 3. Qualidade e Manutenibilidade (Clean Code)\n- Avalia a nomenclatura de variáveis/funções, coesão e acoplamento.\n- Verifica a adesão aos princípios SOLID e DRY.\n- Analisa a complexidade ciclomática.\n\n### 4. Output Esperado\nNão sejas verboso. Retorna a tua análise no seguinte formato:\n- 🔴 **Crítico:** [Problemas de segurança ou bugs graves]\n- 🟡 **Aviso:** [Problemas de performance ou code smells]\n- 🔵 **Sugestão:** [Melhorias de legibilidade ou arquitetura]\n- 💻 **Código Refatorado:** [Apresenta a versão otimizada do código, pronta a usar]\n\n*Responde 'Pronto para revisar' para começarmos.*",
    "tags": ["code-review", "owasp", "performance", "clean-code"],
    "author": "SecOps_Alice",
    "stats": { "uses": 1432, "likes": 289 },
    "collaborators": ["Bob_Builder"],
    "feedbackCount": 22,
    "isDeprecated": false
  },
  {
    "id": 4,
    "title": "Workflow: Agente ReAct LangGraph",
    "type": "Workflow",
    "category": "Agentes AI",
    "description": "Configuração completa para produção de um agente cíclico (ReAct) usando **LangGraph**.",
    "content": "import os\nfrom langgraph.graph import StateGraph, START, END\nfrom langgraph.prebuilt import ToolNode, tools_condition\n\n# Definição e Grafo omitidos para brevidade\nworkflow = StateGraph(AgentState)\nworkflow.add_node(\"agent\", call_model)\nworkflow.add_node(\"tools\", ToolNode(tools))\nworkflow.add_edge(START, \"agent\")\napp = workflow.compile()",
    "tags": ["langgraph", "python", "agentes"],
    "author": "AI_Architect",
    "stats": { "uses": 5120, "likes": 1850 },
    "collaborators": [],
    "feedbackCount": 33,
    "isDeprecated": false
  },
  {
    "id": 5,
    "title": "Snippet: Middleware Auth Next.js",
    "type": "Snippet",
    "category": "Backend",
    "description": "Implementação robusta do `middleware.ts` para o Next.js App Router.",
    "content": "import { NextResponse } from 'next/server';\nexport function middleware(request) {\n  const token = request.cookies.get('auth_token')?.value;\n  if (!token) return NextResponse.redirect(new URL('/login', request.url));\n  return NextResponse.next();\n}\nexport const config = { matcher: ['/dashboard/:path*'] };",
    "tags": ["nextjs", "react", "middleware", "auth"],
    "author": "NextJS_Guru",
    "stats": { "uses": 15400, "likes": 6200 },
    "collaborators": [],
    "feedbackCount": 104,
    "isDeprecated": false
  },
  {
    "id": 6,
    "title": "Prompt: Mestre em Pandas & Data Wrangling",
    "type": "Prompt",
    "category": "Data Science",
    "description": "Instrução para a IA gerar código Pandas altamente otimizado, vetorizado e eficiente para manipulação de grandes volumes de dados.",
    "content": "Atue como um Especialista Sênior em Data Science e Engenharia de Dados, com foco absoluto em otimização de performance usando a biblioteca `pandas` em Python.\n\nSempre que eu pedir para manipular um DataFrame, siga estas **REGRAS DE OURO**:\n\n1. **Vetorização Extrema:** NUNCA use `for loops`, `.iterrows()`, `.itertuples()` ou `.apply()` a menos que seja matematicamente impossível vetorizar a operação. Prefira sempre métodos nativos do C/Cython no Pandas.\n2. **Eficiência de Memória:** Sugira o uso de `category` dtypes para strings repetitivas, e faça downcast de tipos numéricos (ex: `float64` para `float32`, `int64` para `int8`) quando apropriado.\n3. **Encadeamento de Métodos (Method Chaining):** Escreva o código usando method chaining (com parênteses) para evitar a criação de variáveis intermediárias desnecessárias e manter o código limpo.\n4. **Explicação Concisa:** Explique brevemente *por que* a sua solução vetorizada é mais rápida que a abordagem ingénua.\n\n**Exemplo do formato de saída esperado:**\n```python\n# Solução Otimizada\nresult_df = (\n    df.assign(new_col=lambda x: x['a'] * x['b'])\n      .query('new_col > 100')\n      .groupby('category', observed=True)['value']\n      .mean()\n)\n```\n\n*Aguarde o meu primeiro DataFrame e o objetivo da manipulação.*",
    "tags": ["python", "pandas", "data-science", "otimização"],
    "author": "DataWrangler",
    "stats": { "uses": 6120, "likes": 1850 },
    "collaborators": [],
    "feedbackCount": 52,
    "isDeprecated": false
  },
  {
    "id": 7,
    "title": "Snippet: Drizzle ORM Setup",
    "type": "Snippet",
    "category": "Backend",
    "description": "Configuração `Type-Safe` do Drizzle ORM para Node.js + PostgreSQL.",
    "content": "import { pgTable, serial, text } from 'drizzle-orm/pg-core';\nimport { drizzle } from 'drizzle-orm/node-postgres';\nimport { Pool } from 'pg';\n\nexport const users = pgTable('users', { id: serial('id').primaryKey(), name: text('name') });\nconst pool = new Pool({ connectionString: process.env.DATABASE_URL });\nexport const db = drizzle(pool);",
    "tags": ["drizzle", "orm", "postgres"],
    "author": "SqlWizard",
    "stats": { "uses": 6200, "likes": 2150 },
    "collaborators": [],
    "feedbackCount": 44,
    "isDeprecated": false
  },
  {
    "id": 8,
    "title": "Prompt: Arquiteto de Software (SOLID & Design Patterns)",
    "type": "Prompt",
    "category": "Arquitetura",
    "description": "Instrui a IA a atuar como um Arquiteto de Software para analisar código legado, identificar violações de SOLID e propor refatorações usando Design Patterns.",
    "content": "Atue como um Arquiteto de Software Sênior especialista em Design Patterns (GoF) e princípios SOLID.\n\nVou fornecer-lhe blocos de código legado. Para cada bloco, espero que você:\n\n1. **Diagnóstico:** Identifique claramente quais princípios SOLID (SRP, OCP, LSP, ISP, DIP) estão sendo violados e porquê.\n2. **Padrões de Design:** Sugira um ou mais Design Patterns (ex: Strategy, Factory, Observer, Decorator) que resolveriam o problema de forma elegante.\n3. **Refatoração:** Apresente o código refatorado. Se a solução exigir múltiplos arquivos/classes, separe-os claramente usando blocos de código distintos com comentários indicando o nome do arquivo (ex: `// user.repository.ts`).\n4. **Testabilidade:** Explique brevemente como a nova arquitetura facilita a criação de testes unitários (ex: injeção de dependências facilitando mocks).\n\n*Responda apenas 'Pronto para refatorar' para começarmos.*",
    "tags": ["solid", "design-patterns", "arquitetura", "refactoring"],
    "author": "UncleBobFan",
    "stats": { "uses": 3400, "likes": 1200 },
    "collaborators": [],
    "feedbackCount": 15,
    "isDeprecated": false
  },
  {
    "id": 9,
    "title": "Snippet: Hook useDebounce",
    "type": "Snippet",
    "category": "Frontend",
    "description": "Custom hook em React para debouncing de inputs e chamadas à API.",
    "content": "import { useState, useEffect } from 'react';\n\nexport function useDebounce<T>(value: T, delay: number): T {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n  useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay);\n    return () => clearTimeout(timer);\n  }, [value, delay]);\n  return debouncedValue;\n}",
    "tags": ["react", "hooks", "performance"],
    "author": "ReactNinja",
    "stats": { "uses": 9800, "likes": 3400 },
    "collaborators": [],
    "feedbackCount": 88,
    "isDeprecated": false
  },
  {
    "id": 10,
    "title": "Skill: DBA Sênior & Otimizador de Queries",
    "type": "Skill",
    "category": "Banco de Dados",
    "description": "Transforma a IA num Administrador de Banco de Dados (DBA) focado em otimização extrema de queries SQL, índices compostos e análise de planos de execução.",
    "content": "A partir de agora, você é um DBA Sênior especializado em PostgreSQL e MySQL, com foco em alta disponibilidade e performance em escala.\n\nQuando eu lhe enviar uma query SQL (e opcionalmente o schema das tabelas), você deve:\n\n1. **Análise de Gargalos:** Identificar potenciais problemas de performance (ex: N+1, Full Table Scans, subqueries correlacionadas ineficientes, falta de paginação baseada em cursor).\n2. **Reescrita da Query:** Fornecer a query SQL otimizada. Use CTEs (Common Table Expressions) para legibilidade se a query for complexa. Evite `SELECT *`.\n3. **Estratégia de Índices:** Sugerir a criação de índices exatos. Especifique o tipo de índice (B-Tree, GIN, GiST, BRIN) e se deve ser um índice composto (cobrindo a query) ou parcial (`WHERE condition`).\n4. **Plano de Execução:** Explicar teoricamente o que esperaríamos ver num `EXPLAIN ANALYZE` antes e depois da otimização (ex: mudança de *Seq Scan* para *Index Only Scan*).\n\n*Responda 'Aguardando a primeira query' para iniciar.*",
    "tags": ["sql", "performance", "dba", "postgres", "otimização"],
    "author": "QueryMaster",
    "stats": { "uses": 2100, "likes": 890 },
    "collaborators": [],
    "feedbackCount": 20,
    "isDeprecated": false
  },
  {
    "id": 11,
    "title": "Workflow: Dockerfile Otimizado Node.js",
    "type": "Workflow",
    "category": "DevOps",
    "description": "Dockerfile Multi-stage build para aplicações Node.js em produção, focando em tamanho reduzido e segurança.",
    "content": "FROM node:18-alpine AS deps\nWORKDIR /app\nCOPY package.json package-lock.json ./\nRUN npm ci\n\nFROM node:18-alpine AS builder\nWORKDIR /app\nCOPY . .\nCOPY --from=deps /app/node_modules ./node_modules\nRUN npm run build\n\nFROM node:18-alpine AS runner\nWORKDIR /app\nENV NODE_ENV production\nCOPY --from=builder /app/dist ./dist\nCOPY --from=builder /app/package.json ./\nRUN npm ci --only=production\n\nUSER node\nEXPOSE 3000\nCMD [\"node\", \"dist/main.js\"]",
    "tags": ["docker", "nodejs", "devops", "security"],
    "author": "ContainerKing",
    "stats": { "uses": 11200, "likes": 4100 },
    "collaborators": [],
    "feedbackCount": 75,
    "isDeprecated": false
  },
  {
    "id": 12,
    "title": "Snippet: Zod Validation API",
    "type": "Snippet",
    "category": "Backend",
    "description": "Validação de schema de entrada no Express usando Zod.",
    "content": "import { z } from 'zod';\nimport { Request, Response, NextFunction } from 'express';\n\nexport const validate = (schema: z.AnyZodObject) => \n  async (req: Request, res: Response, next: NextFunction) => {\n    try {\n      await schema.parseAsync({ body: req.body, query: req.query, params: req.params });\n      return next();\n    } catch (error) {\n      return res.status(400).json(error);\n    }\n  };",
    "tags": ["zod", "express", "typescript", "validation"],
    "author": "TypeSafeDev",
    "stats": { "uses": 5400, "likes": 1800 },
    "collaborators": [],
    "feedbackCount": 33,
    "isDeprecated": false
  },
  {
    "id": 13,
    "title": "Prompt: Mestre em Expressões Regulares (Regex)",
    "type": "Prompt",
    "category": "Tooling",
    "description": "Gera Expressões Regulares (Regex) complexas, otimizadas e seguras (contra ReDoS), acompanhadas de explicações detalhadas e casos de teste.",
    "content": "Atue como um Especialista em Expressões Regulares (Regex).\n\nVou descrever um padrão de texto que preciso encontrar, validar ou extrair. Para cada pedido, forneça:\n\n1. **A Regex Otimizada:** A expressão regular pronta a usar. Especifique se precisa de flags específicas (ex: `/g`, `/i`, `/m`).\n2. **Segurança (ReDoS):** Garanta que a regex não é vulnerável a *Regular Expression Denial of Service* (ReDoS) evitando quantificadores aninhados catastróficos. Confirme isso na sua resposta.\n3. **Explicação Detalhada (Breakdown):** Explique a regex dividindo-a em partes lógicas (grupos de captura, lookaheads/lookbehinds, classes de caracteres).\n4. **Casos de Teste (Test Cases):**\n   - ✅ 3 exemplos de strings que **DÃO MATCH** (e o que é capturado, se aplicável).\n   - ❌ 3 exemplos de strings que **NÃO DÃO MATCH** (edge cases que poderiam falhar numa regex ingénua).\n\n*Qual é o primeiro padrão que precisa de validar?*",
    "tags": ["regex", "segurança", "validação", "tooling"],
    "author": "RegexWizard",
    "stats": { "uses": 8900, "likes": 2200 },
    "collaborators": [],
    "feedbackCount": 41,
    "isDeprecated": false
  },
  {
    "id": 14,
    "title": "Snippet: Tailwind Grid Auto-Fit",
    "type": "Snippet",
    "category": "Frontend",
    "description": "Classe utilitária do Tailwind para criar um grid responsivo perfeito sem media queries.",
    "content": "<div className=\"grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6\">\n  {/* Cards aqui. Eles vão se adaptar automaticamente ao tamanho da tela mantendo o mínimo de 250px */}\n  <div className=\"bg-white p-4 rounded-xl shadow\">Card 1</div>\n  <div className=\"bg-white p-4 rounded-xl shadow\">Card 2</div>\n  <div className=\"bg-white p-4 rounded-xl shadow\">Card 3</div>\n</div>",
    "tags": ["tailwind", "css", "grid", "responsividade"],
    "author": "UI_UX_Lover",
    "stats": { "uses": 12500, "likes": 4800 },
    "collaborators": [],
    "feedbackCount": 66,
    "isDeprecated": false
  },
  {
    "id": 15,
    "title": "Skill: Engenheiro de Prompt Sênior (Meta-Prompting)",
    "type": "Skill",
    "category": "Agentes AI",
    "description": "Transforma a IA num especialista em Prompt Engineering para otimizar, estruturar e refinar os teus próprios prompts usando técnicas avançadas.",
    "content": "Atue como um Engenheiro de Prompt Sênior especialista em LLMs (GPT-4, Claude 3, Gemini). O seu objetivo é pegar nos meus prompts básicos ou rascunhos e transformá-los em prompts de nível de produção.\n\nPara cada prompt que eu enviar, aplique as seguintes técnicas:\n\n1. **Role Prompting:** Defina uma persona clara e hiper-específica.\n2. **Estruturação Clara:** Use Markdown para dividir o prompt em secções: `[CONTEXTO]`, `[OBJETIVO]`, `[REGRAS/RESTRIÇÕES]`, e `[FORMATO DE SAÍDA]`.\n3. **Chain-of-Thought (CoT):** Se a tarefa exigir raciocínio, instrua o modelo a pensar passo a passo antes de dar a resposta final (ex: `<thinking>...</thinking>`).\n4. **Few-Shot Prompting:** Se aplicável, adicione placeholders para exemplos de input/output.\n\n*Devolva apenas o prompt otimizado num bloco de código, pronto a ser copiado. Aguardando o seu primeiro rascunho.*",
    "tags": ["prompt-engineering", "llm", "otimização", "meta-prompting"],
    "author": "AI_Whisperer",
    "stats": { "uses": 4500, "likes": 1600 },
    "collaborators": [],
    "feedbackCount": 27,
    "isDeprecated": false
  },
  {
    "id": 16,
    "title": "Workflow: CI/CD GitHub Actions Node.js",
    "type": "Workflow",
    "category": "DevOps",
    "description": "Pipeline automatizado para rodar linters, testes e build de projetos Node.js no GitHub Actions.",
    "content": "name: Node.js CI\non:\n  push: { branches: [ \"main\" ] }\n  pull_request: { branches: [ \"main\" ] }\n\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v3\n    - name: Use Node.js\n      uses: actions/setup-node@v3\n      with: { node-version: '18.x', cache: 'npm' }\n    - run: npm ci\n    - run: npm run lint\n    - run: npm test\n    - run: npm run build",
    "tags": ["github-actions", "ci-cd", "nodejs", "pipeline"],
    "author": "DevOps_Dan",
    "stats": { "uses": 7800, "likes": 2900 },
    "collaborators": [],
    "feedbackCount": 55,
    "isDeprecated": false
  },
  {
    "id": 17,
    "title": "Snippet: Zustand Global Store",
    "type": "Snippet",
    "category": "Frontend",
    "description": "Setup minimalista de gerenciamento de estado no React usando Zustand (alternativa moderna ao Redux).",
    "content": "import { create } from 'zustand';\n\ninterface UserState {\n  user: { name: string; role: string } | null;\n  isAuthenticated: boolean;\n  login: (userData: any) => void;\n  logout: () => void;\n}\n\nexport const useUserStore = create<UserState>((set) => ({\n  user: null,\n  isAuthenticated: false,\n  login: (userData) => set({ user: userData, isAuthenticated: true }),\n  logout: () => set({ user: null, isAuthenticated: false }),\n}));\n\n// Uso: const { user, login } = useUserStore();",
    "tags": ["react", "zustand", "estado", "frontend"],
    "author": "ReactNinja",
    "stats": { "uses": 8200, "likes": 3100 },
    "collaborators": [],
    "feedbackCount": 42,
    "isDeprecated": false
  },
  {
    "id": 18,
    "title": "Prompt: Mentor Didático (ELI5 - Explain Like I'm 5)",
    "type": "Prompt",
    "category": "Mentoria",
    "description": "Desmistifica conceitos complexos de engenharia de software usando analogias simples do dia a dia, ideal para iniciantes ou para consolidar conhecimento.",
    "content": "Atue como um Mentor de Programação extremamente didático e paciente.\n\nQuero que me explique o conceito de **[INSERIR CONCEITO AQUI, ex: Kubernetes, OAuth2, Event Loop]** seguindo o princípio ELI5 (Explain Like I'm 5).\n\nRegras para a explicação:\n1. **Zero Jargão:** Não use termos técnicos sem os explicar imediatamente a seguir.\n2. **Analogia Central:** Baseie a explicação numa analogia forte do mundo real (ex: um restaurante, uma autoestrada, legos).\n3. **Estrutura:**\n   - **O que é:** Uma frase simples.\n   - **A Analogia:** A história do mundo real.\n   - **Por que é útil:** O problema que resolve na programação.\n4. **Brevidade:** Mantenha a explicação concisa, no máximo 3-4 parágrafos curtos.",
    "tags": ["aprendizado", "eli5", "didática", "mentoria"],
    "author": "TeacherBot",
    "stats": { "uses": 10500, "likes": 5000 },
    "collaborators": [],
    "feedbackCount": 89,
    "isDeprecated": false
  },
  {
    "id": 19,
    "title": "Snippet: Singleton Fetch em Go",
    "type": "Snippet",
    "category": "Backend",
    "description": "Padrão `sync.Once` em Golang para garantir que a conexão com o banco ou inicialização ocorra apenas uma vez.",
    "content": "package database\n\nimport (\n\t\"database/sql\"\n\t\"sync\"\n)\n\nvar (\n\tdbInstance *sql.DB\n\tonce       sync.Once\n)\n\nfunc GetDB() *sql.DB {\n\tonce.Do(func() {\n\t\tdb, err := sql.Open(\"postgres\", \"dsn-here\")\n\t\tif err != nil { panic(err) }\n\t\tdbInstance = db\n\t})\n\treturn dbInstance\n}",
    "tags": ["golang", "go", "singleton", "backend"],
    "author": "GopherPro",
    "stats": { "uses": 2300, "likes": 850 },
    "collaborators": [],
    "feedbackCount": 14,
    "isDeprecated": false
  },
  {
    "id": 20,
    "title": "Skill: Especialista em Performance (Core Web Vitals)",
    "type": "Skill",
    "category": "Frontend",
    "description": "Analisa código frontend e sugere otimizações cirúrgicas focadas em LCP, CLS e INP para atingir pontuações perfeitas no Lighthouse.",
    "content": "Assuma o papel de um Engenheiro de Performance Web obcecado com os Core Web Vitals do Google.\n\nQuando eu fornecer código HTML, React, ou configuração de bundler (Vite/Webpack), analise-o e sugira melhorias focadas em:\n\n1. **LCP (Largest Contentful Paint):** Como otimizar a imagem/texto hero? (ex: `fetchpriority=\"high\"`, preloading, formatos WebP/AVIF).\n2. **CLS (Cumulative Layout Shift):** Identifique elementos sem dimensões explícitas, web fonts causando FOIT/FOUT, ou injeções dinâmicas de conteúdo.\n3. **INP (Interaction to Next Paint):** Sugira formas de reduzir o bloqueio da main thread (ex: *web workers*, `requestIdleCallback`, divisão de tarefas longas).\n4. **Código Corrigido:** Forneça os snippets de código atualizados com as otimizações aplicadas.\n\n*Responda 'Pronto para otimizar' para iniciar.*",
    "tags": ["seo", "performance", "web-vitals", "frontend", "lighthouse"],
    "author": "SEOMaster",
    "stats": { "uses": 3100, "likes": 1050 },
    "collaborators": [],
    "feedbackCount": 26,
    "isDeprecated": false
  },
  {
    "id": 21,
    "title": "Snippet: RAG Chain Simples LangChain",
    "type": "Snippet",
    "category": "Agentes AI",
    "description": "Implementação rápida de um pipeline RAG (Retrieval-Augmented Generation) com LangChain e ChromaDB.",
    "content": "from langchain_community.vectorstores import Chroma\nfrom langchain_openai import OpenAIEmbeddings, ChatOpenAI\nfrom langchain.chains import create_retrieval_chain\nfrom langchain.chains.combine_documents import create_stuff_documents_chain\nfrom langchain_core.prompts import ChatPromptTemplate\n\nvectorstore = Chroma(persist_directory=\"./db\", embedding_function=OpenAIEmbeddings())\nretriever = vectorstore.as_retriever()\n\nprompt = ChatPromptTemplate.from_template(\"Responda baseado no contexto:\\n{context}\\nPergunta: {input}\")\nllm = ChatOpenAI(model=\"gpt-4-turbo\")\n\ndocument_chain = create_stuff_documents_chain(llm, prompt)\nretrieval_chain = create_retrieval_chain(retriever, document_chain)\n\nresponse = retrieval_chain.invoke({\"input\": \"Como configuro o sistema?\"})\nprint(response[\"answer\"])",
    "tags": ["langchain", "rag", "python", "ai"],
    "author": "AI_Architect",
    "stats": { "uses": 6700, "likes": 2300 },
    "collaborators": [],
    "feedbackCount": 38,
    "isDeprecated": false
  },
  {
    "id": 22,
    "title": "Prompt: Criador de Testes Unitários Jest",
    "type": "Prompt",
    "category": "Testes",
    "description": "Gera testes unitários exaustivos cobrindo *happy paths* e *edge cases*.",
    "content": "Vou te passar uma função TypeScript/JavaScript. Quero que você gere um arquivo completo de testes unitários usando Jest.\nRegras:\n1. Crie um `describe` block claro.\n2. Escreva testes para o caminho feliz (Happy Path).\n3. Escreva testes para casos de borda (Edge Cases) e entradas nulas/inválidas.\n4. Use Mocks se a função depender de APIs externas.",
    "tags": ["jest", "testes", "qa", "javascript"],
    "author": "TestDrivenPy",
    "stats": { "uses": 5400, "likes": 1900 },
    "collaborators": [],
    "feedbackCount": 29,
    "isDeprecated": false
  },
  {
    "id": 23,
    "title": "Snippet: Docker Compose Fullstack",
    "type": "Snippet",
    "category": "DevOps",
    "description": "Arquivo docker-compose.yml padrão para rodar Frontend (React), Backend (Node) e Banco de Dados (Postgres).",
    "content": "version: '3.8'\nservices:\n  db:\n    image: postgres:15-alpine\n    environment:\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: password\n      POSTGRES_DB: myapp\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\n  backend:\n    build: ./backend\n    ports:\n      - \"8000:8000\"\n    depends_on:\n      - db\n    environment:\n      DATABASE_URL: postgres://user:password@db:5432/myapp\n\n  frontend:\n    build: ./frontend\n    ports:\n      - \"3000:3000\"\n    depends_on:\n      - backend\n\nvolumes:\n  pgdata:",
    "tags": ["docker-compose", "devops", "infra", "fullstack"],
    "author": "ContainerKing",
    "stats": { "uses": 8900, "likes": 3500 },
    "collaborators": [],
    "feedbackCount": 47,
    "isDeprecated": false
  },
  {
    "id": 24,
    "title": "Skill: Engenheiro de Acessibilidade (a11y)",
    "type": "Skill",
    "category": "UI/UX",
    "description": "Foca a IA em revisar código HTML/React estritamente para normas de acessibilidade WCAG.",
    "content": "Atue como um Especialista em Acessibilidade Web (a11y). Ao receber meu código de interface:\n1. Verifique o contraste de cores.\n2. Garanta que todos os inputs tenham `labels` e imagens tenham `alt` tags significativas.\n3. Verifique a navegação por teclado (`tabindex`, `focus states`).\n4. Garanta o uso correto de `aria-attributes`.\nRetorne o código com as melhorias a11y aplicadas.",
    "tags": ["a11y", "acessibilidade", "frontend", "ui"],
    "author": "InclusiveWeb",
    "stats": { "uses": 1800, "likes": 750 },
    "collaborators": [],
    "feedbackCount": 12,
    "isDeprecated": false
  },
  {
    "id": 25,
    "title": "Workflow: Automação de PR Review com IA",
    "type": "Workflow",
    "category": "Tooling",
    "description": "Script de GitHub Action que usa um modelo de linguagem para sumarizar Pull Requests automaticamente.",
    "content": "name: AI PR Reviewer\non:\n  pull_request:\n    types: [opened, synchronize]\njobs:\n  review:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: PR Review\n        uses: coderabbitai/coderabbit-action@v1\n        with:\n          openai-api-key: ${{ secrets.OPENAI_API_KEY }}\n          prompt: \"Revise as mudanças de código e indique potenciais bugs.\"",
    "tags": ["github-actions", "ai", "review", "pr"],
    "author": "DevOps_Dan",
    "stats": { "uses": 3400, "likes": 1200 },
    "collaborators": [],
    "feedbackCount": 21,
    "isDeprecated": false
  },
  {
    "id": 26,
    "title": "Boas Práticas: Painel de Admin & Branding Dinâmico",
    "type": "Workflow",
    "category": "Produto",
    "description": "Diretriz arquitetural: Toda aplicação B2B/SaaS deve possuir um painel de administração para customização de marca (White-label) sem necessidade de deploy.",
    "content": "### Diretriz de Produto: Branding Dinâmico\n\n**O Problema:** Hardcodar cores, logotipos e tipografia impede a escalabilidade em modelos B2B (SaaS) e gera dependência da equipa de engenharia para mudanças estéticas simples.\n\n**A Solução:**\n1. **Painel de Administração:** Criar uma interface restrita a super-admins ou *tenant owners*.\n2. **Variáveis CSS Dinâmicas:** O frontend deve consumir variáveis CSS (ex: `--primary-color`) injetadas no `:root` via API no momento do carregamento da aplicação.\n3. **Armazenamento:** Guardar as preferências de marca (Logo URL, Primary Color, Secondary Color, Font Family) na base de dados, associadas ao *Tenant* (Inquilino).\n4. **Fallback:** Ter sempre um tema *default* robusto caso a API falhe.\n\n**Benefícios:** Autonomia para o cliente, facilidade de criar instâncias *White-label*, e zero tempo de inatividade (downtime) para atualizações visuais.",
    "tags": ["saas", "white-label", "branding", "boas-praticas"],
    "author": "ProductArchitect",
    "stats": { "uses": 1200, "likes": 450 },
    "collaborators": [],
    "feedbackCount": 15,
    "isDeprecated": false
  },
  {
    "id": 27,
    "title": "Boas Práticas: RBAC Granular & Perfis Dinâmicos",
    "type": "Workflow",
    "category": "Segurança",
    "description": "Diretriz de segurança: Implementação de Controlo de Acesso Baseado em Funções (RBAC) com alta granularidade e criação dinâmica de perfis.",
    "content": "### Diretriz de Segurança: RBAC & Permissões Granulares\n\n**O Problema:** Sistemas com papéis fixos (ex: apenas 'Admin' e 'User') rapidamente se tornam limitantes à medida que a organização do cliente cresce e exige delegação de responsabilidades específicas.\n\n**A Solução:**\n1. **Permissões Atómicas:** Definir permissões granulares no código (ex: `users:read`, `users:write`, `billing:manage`).\n2. **Perfis Dinâmicos (Roles):** Permitir que os administradores criem novos perfis de acesso na interface e atribuam um conjunto específico de permissões atómicas a cada perfil.\n3. **Atribuição:** Os utilizadores são associados a um ou mais perfis, herdando as permissões.\n4. **Middleware/Guards:** O backend e o frontend devem verificar as *permissões atómicas* do utilizador, e não o nome do perfil (ex: verificar `hasPermission('billing:manage')` em vez de `isRole('Financeiro')`).\n\n**Benefícios:** Escalabilidade organizacional, princípio do menor privilégio (Least Privilege) e conformidade com auditorias de segurança (SOC2, ISO 27001).",
    "tags": ["rbac", "segurança", "arquitetura", "boas-praticas"],
    "author": "SecurityGuru",
    "stats": { "uses": 2100, "likes": 890 },
    "collaborators": [],
    "feedbackCount": 32,
    "isDeprecated": false
  },
  {
    "id": 28,
    "title": "Boas Práticas: Audit Logs (Trilhas de Auditoria)",
    "type": "Workflow",
    "category": "Segurança",
    "description": "Diretriz de conformidade: Registo imutável de todas as ações críticas realizadas no sistema para rastreabilidade e resolução de problemas.",
    "content": "### Diretriz de Conformidade: Audit Logs\n\n**O Problema:** Quando ocorre uma falha de segurança, fraude ou erro humano, é impossível determinar a causa raiz sem um histórico detalhado das ações dos utilizadores.\n\n**A Solução:**\n1. **Registo Universal:** Intercetar todas as mutações de estado (POST, PUT, DELETE, PATCH) em rotas sensíveis.\n2. **Estrutura do Log:** Cada registo deve conter:\n   - **Ator:** Quem fez (User ID, IP, User-Agent).\n   - **Ação:** O que fez (ex: `UPDATE_USER_ROLE`).\n   - **Recurso:** Onde fez (Entity ID, Table).\n   - **Timestamp:** Quando fez (UTC).\n   - **Payload:** O estado anterior e o novo estado (Diff).\n3. **Imutabilidade:** Os logs devem ser escritos numa base de dados *append-only* (somente leitura/inserção) ou num serviço externo (ex: AWS CloudTrail, Datadog) para evitar adulteração.\n\n**Benefícios:** Conformidade legal (GDPR, HIPAA), facilidade de *troubleshooting* e dissuasão de comportamentos maliciosos internos.",
    "tags": ["audit", "logs", "segurança", "boas-praticas"],
    "author": "ComplianceOfficer",
    "stats": { "uses": 1500, "likes": 600 },
    "collaborators": [],
    "feedbackCount": 18,
    "isDeprecated": false
  },
  {
    "id": 29,
    "title": "Boas Práticas: Feature Flags (Toggles)",
    "type": "Workflow",
    "category": "DevOps",
    "description": "Diretriz de engenharia: Desacoplar o deploy (colocar código em produção) do release (disponibilizar a funcionalidade aos utilizadores).",
    "content": "### Diretriz de Engenharia: Feature Flags\n\n**O Problema:** Lançamentos de grandes funcionalidades ('Big Bang Releases') são arriscados, causam ansiedade na equipa e dificultam o *rollback* em caso de falha crítica.\n\n**A Solução:**\n1. **Envolver em Flags:** Esconder código novo ou instável atrás de condicionais lógicas (Feature Flags) geridas remotamente.\n2. **Rollout Gradual:** Ativar a funcionalidade primeiro para utilizadores internos (Dogfooding), depois para 10% da base de utilizadores (Canary Release), e finalmente para 100%.\n3. **Testes A/B:** Usar flags para servir diferentes versões de uma interface e medir qual tem melhor conversão.\n4. **Kill Switch:** Se um bug crítico for detetado em produção, a funcionalidade pode ser desativada instantaneamente num painel de controlo, sem necessidade de reverter o código ou fazer um novo deploy.\n\n**Benefícios:** Deploys contínuos e seguros, testes em produção, e redução drástica do tempo médio de recuperação (MTTR).",
    "tags": ["feature-flags", "devops", "deploy", "boas-praticas"],
    "author": "ReleaseManager",
    "stats": { "uses": 3200, "likes": 1400 },
    "collaborators": [],
    "feedbackCount": 45,
    "isDeprecated": false
  }
];

// Mapeamento de ícones e cores por tipo
const TYPE_CONFIG: Record<string, any> = {
  Prompt: { icon: Terminal, color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
  Skill: { icon: Sparkles, color: "text-fuchsia-400", bg: "bg-fuchsia-400/10", border: "border-fuchsia-400/20" },
  Snippet: { icon: Code2, color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
  Workflow: { icon: Box, color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20" }
};

const MarkdownEditor = ({ 
  value, 
  onChange, 
  placeholder, 
  isLightMode, 
  rows = 3, 
  isMono = false 
}: { 
  value: string, 
  onChange: (val: string) => void, 
  placeholder: string, 
  isLightMode: boolean, 
  rows?: number,
  isMono?: boolean
}) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const insertFormat = (prefix: string, suffix: string = '') => {
    if (!textareaRef.current) return;
    const start = textareaRef.current.selectionStart;
    const end = textareaRef.current.selectionEnd;
    const text = textareaRef.current.value;
    const before = text.substring(0, start);
    const selected = text.substring(start, end);
    const after = text.substring(end);

    const newText = `${before}${prefix}${selected || (suffix ? 'texto' : '')}${suffix}${after}`;
    onChange(newText);

    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.setSelectionRange(
          start + prefix.length,
          start + prefix.length + (selected ? selected.length : (suffix ? 5 : 0))
        );
      }
    }, 0);
  };

  return (
    <div className={`border rounded-lg overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all ${isLightMode ? 'bg-white border-slate-300' : 'bg-zinc-900 border-zinc-800'}`}>
      <div className={`flex items-center gap-1 p-1.5 border-b overflow-x-auto custom-scrollbar ${isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-zinc-900/80 border-zinc-800'}`}>
        <button type="button" onClick={() => insertFormat('**', '**')} className={`p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`} title="Negrito" aria-label="Negrito"><Bold className="w-3.5 h-3.5" /></button>
        <button type="button" onClick={() => insertFormat('*', '*')} className={`p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`} title="Itálico" aria-label="Itálico"><Italic className="w-3.5 h-3.5" /></button>
        <button type="button" onClick={() => insertFormat('~~', '~~')} className={`p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`} title="Rasurado" aria-label="Rasurado"><Strikethrough className="w-3.5 h-3.5" /></button>
        <div className={`w-px h-4 mx-1 ${isLightMode ? 'bg-slate-300' : 'bg-zinc-700'}`} />
        <button type="button" onClick={() => insertFormat('`', '`')} className={`p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`} title="Código Inline" aria-label="Código Inline"><Code2 className="w-3.5 h-3.5" /></button>
        <button type="button" onClick={() => insertFormat('```\n', '\n```')} className={`p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`} title="Bloco de Código" aria-label="Bloco de Código"><FileCode className="w-3.5 h-3.5" /></button>
        <div className={`w-px h-4 mx-1 ${isLightMode ? 'bg-slate-300' : 'bg-zinc-700'}`} />
        <button type="button" onClick={() => insertFormat('[', '](url)')} className={`p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`} title="Link" aria-label="Link"><LinkIcon className="w-3.5 h-3.5" /></button>
        <button type="button" onClick={() => insertFormat('- ')} className={`p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`} title="Lista" aria-label="Lista"><List className="w-3.5 h-3.5" /></button>
        <button type="button" onClick={() => insertFormat('> ')} className={`p-1.5 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`} title="Citação" aria-label="Citação"><Quote className="w-3.5 h-3.5" /></button>
      </div>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className={`w-full p-3 text-sm outline-none resize-y custom-scrollbar ${isMono ? 'font-mono' : ''} ${isLightMode ? 'bg-white text-slate-900' : 'bg-zinc-900 text-white'}`}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
};

const TagSelector = ({ 
  selectedTags, 
  onChange, 
  availableTags, 
  isLightMode 
}: { 
  selectedTags: string[], 
  onChange: (tags: string[]) => void, 
  availableTags: string[], 
  isLightMode: boolean 
}) => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredTags = availableTags.filter(t => t.toLowerCase().includes(input.toLowerCase()) && !selectedTags.includes(t));

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      onChange([...selectedTags, tag]);
    }
    setInput("");
    setIsOpen(false);
  };

  const removeTag = (tag: string) => {
    onChange(selectedTags.filter(t => t !== tag));
  };

  return (
    <div className="relative">
      <div className={`flex flex-wrap gap-2 p-2 border rounded-lg min-h-[42px] focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 ${isLightMode ? 'bg-white border-slate-300' : 'bg-zinc-900 border-zinc-800'}`}>
        {selectedTags.map(tag => (
          <span key={tag} className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${isLightMode ? 'bg-indigo-50 text-indigo-700' : 'bg-indigo-500/20 text-indigo-300'}`}>
            #{tag}
            <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-500"><X className="w-3 h-3" /></button>
          </span>
        ))}
        <input 
          type="text" 
          value={input} 
          onChange={e => { setInput(e.target.value); setIsOpen(true); }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className={`flex-1 min-w-[120px] outline-none text-sm bg-transparent ${isLightMode ? 'text-slate-900' : 'text-white'}`}
          placeholder={selectedTags.length === 0 ? "Adicionar tags..." : ""}
          onKeyDown={e => {
            if (e.key === 'Enter' && input.trim()) {
              e.preventDefault();
              const newTag = input.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
              addTag(newTag);
            } else if (e.key === 'Backspace' && !input && selectedTags.length > 0) {
              removeTag(selectedTags[selectedTags.length - 1]);
            }
          }}
        />
      </div>
      {isOpen && filteredTags.length > 0 && (
        <div className={`absolute z-10 w-full mt-1 max-h-48 overflow-y-auto border rounded-lg shadow-lg ${isLightMode ? 'bg-white border-slate-200' : 'bg-zinc-900 border-zinc-800'}`}>
          {filteredTags.map(tag => (
            <button 
              key={tag} 
              type="button"
              onClick={() => addTag(tag)}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${isLightMode ? 'hover:bg-slate-50 text-slate-700' : 'hover:bg-zinc-800 text-zinc-300'}`}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [items, setItems] = useState<any[]>(INITIAL_DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [activeCategory, setActiveCategory] = useState("Todas as Categorias");
  
  // Tags & UI
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showTagsCloud, setShowTagsCloud] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);
  
  // Favoritos / Playbook
  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [showPlaybook, setShowPlaybook] = useState(false);
  
  // Modais
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [copiedId, setCopiedId] = useState<any>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newItemForm, setNewItemForm] = useState({ title: '', type: 'Prompt', category: 'Geral', description: '', content: '', tags: [] as string[] });
  
  // Tag Manager
  const [globalTags, setGlobalTags] = useState<string[]>(Array.from(new Set(INITIAL_DATA.flatMap(item => item.tags))).sort());
  const [isTagManagerOpen, setIsTagManagerOpen] = useState(false);
  const [newTagInput, setNewTagInput] = useState("");
  const [editingTag, setEditingTag] = useState<{old: string, new: string} | null>(null);

  // IA Assitente e Funcionalidades Gemini
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [modalAlert, setModalAlert] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<any>(null);
  const [descMode, setDescMode] = useState<'edit' | 'preview' | 'split'>('edit');
  const [contentMode, setContentMode] = useState<'edit' | 'preview' | 'split'>('edit');

  const handleAddTag = () => {
    const tag = newTagInput.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
    if (tag && !globalTags.includes(tag)) {
      setGlobalTags([...globalTags, tag].sort());
      setNewTagInput("");
    }
  };

  const handleSaveEditTag = () => {
    if (!editingTag) return;
    const newTag = editingTag.new.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-');
    if (newTag && newTag !== editingTag.old) {
      if (globalTags.includes(newTag)) {
        setGlobalTags(globalTags.filter(t => t !== editingTag.old));
      } else {
        setGlobalTags(globalTags.map(t => t === editingTag.old ? newTag : t).sort());
      }
      
      setItems(items.map(item => ({
        ...item,
        tags: item.tags.map((t: string) => t === editingTag.old ? newTag : t)
      })));
      
      if (selectedTags.includes(editingTag.old)) {
        setSelectedTags(selectedTags.map(t => t === editingTag.old ? newTag : t));
      }
    }
    setEditingTag(null);
  };

  const handleDeleteTag = (tagToDelete: string) => {
    setGlobalTags(globalTags.filter(t => t !== tagToDelete));
    setItems(items.map(item => ({
      ...item,
      tags: item.tags.filter((t: string) => t !== tagToDelete)
    })));
    setSelectedTags(selectedTags.filter(t => t !== tagToDelete));
  };

  const toggleBookmark = async (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setBookmarks(prev => prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]);
  };

  const handleUpdateResource = async (id: number, updates: any) => {
    if (updates.tags) {
      const newTags = updates.tags.filter((t: string) => !globalTags.includes(t));
      if (newTags.length > 0) {
        setGlobalTags(prev => [...prev, ...newTags].sort());
      }
    }
    setItems(prevItems => prevItems.map(i => i.id === id ? { ...i, ...updates } : i));
    if (selectedItem?.id === id) setSelectedItem({ ...selectedItem, ...updates });
  };

  // ==========================================
  // FUNÇÕES DE INTEGRAÇÃO COM A API DO GEMINI (Mockadas)
  // ==========================================

  const fetchAI = async (prompt: string, delay = 2000): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resposta simulada da IA para: ${prompt.substring(0, 30)}...`);
      }, delay);
    });
  };

  // FEATURE 1: Gerar Recurso Automaticamente
  const handleAIGenerate = async () => {
    if (!newItemForm.title.trim()) {
      setModalAlert("Escreve um Título primeiro para a IA saber o que gerar.");
      setTimeout(() => setModalAlert(""), 4000);
      return;
    }

    setIsGenerating(true);
    setModalAlert("");

    try {
      await fetchAI(`Gerar recurso para: ${newItemForm.title}`);
      setNewItemForm(prev => ({
        ...prev,
        description: "Descrição gerada automaticamente pela IA baseada no título.",
        content: "// Código ou prompt gerado pela IA\nconsole.log('Vibe Coding!');",
        tags: ["ai", "gerado", "vibe"]
      }));
    } catch (err) {
      setModalAlert("Ocorreu um erro ao comunicar com a IA. Tenta novamente.");
    } finally {
      setIsGenerating(false);
    }
  };

  // FEATURE 2: Analisar Recurso (Explicação)
  const handleAIAnalyze = async () => {
    setIsAnalyzing(true);
    setAiAnalysis(null);

    try {
      const resultText = await fetchAI(`Analisar: ${selectedItem.title}`);
      setAiAnalysis(`**O que faz:** ${resultText}\n**Pontos Fortes:**\n* Código limpo\n* Boa tipagem\n**Dica / Aviso:** Cuidado com edge cases.`);
    } catch (err) {
      setAiAnalysis("⚠️ Erro ao tentar analisar este recurso com a IA.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // FEATURE 3: Otimizar Código/Prompt
  const handleAIOptimize = async () => {
    setIsOptimizing(true);

    try {
      const resultText = await fetchAI(`Otimizar: ${editForm.content}`);
      setEditForm((prev: any) => ({ ...prev, content: `// Conteúdo otimizado pela IA\n${prev.content}\n// ${resultText}` }));
    } catch (err) {
      console.error("Erro ao otimizar:", err);
    } finally {
      setIsOptimizing(false);
    }
  };


  // Renderizadores de Texto
  const renderMarkdown = (text: string) => {
    if (!text) return { __html: '' };
    let html = text
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') 
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
      .replace(/\*(.*?)\*/g, '<em>$1</em>') 
      .replace(/\[(.*?)\]\((.*?)\)/g, `<a href="$2" target="_blank" class="${isLightMode ? 'text-indigo-600' : 'text-indigo-400'} hover:underline">$1</a>`) 
      .replace(/`([^`]+)`/g, `<code class="${isLightMode ? 'bg-slate-200 text-indigo-600' : 'bg-zinc-800/80 text-indigo-300'} px-1.5 py-0.5 rounded-md text-[0.9em] font-mono border border-indigo-500/10">$1</code>`) 
      .replace(/\n/g, '<br/>'); 
    return { __html: html };
  };

  const renderHighlightedCode = (code: string) => {
    if (!code) return { __html: '' };
    let html = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const keywordClass = isLightMode ? 'text-indigo-600 font-semibold' : 'text-fuchsia-400 font-semibold';
    const stringClass = isLightMode ? 'text-emerald-600' : 'text-emerald-400';
    const commentClass = isLightMode ? 'text-slate-400 italic' : 'text-zinc-500 italic';
    const funcClass = isLightMode ? 'text-blue-600' : 'text-blue-400';

    html = html.replace(/(\/\/.*$)/gm, `<span class="${commentClass}">$1</span>`);
    html = html.replace(/(["'`])(?:(?=(\\?))\2.)*?\1/g, `<span class="${stringClass}">$&</span>`);
    const keywords = "import|export|default|const|let|var|function|return|if|else|for|while|switch|case|break|try|catch|async|await|from|class|interface|type";
    const keywordRegex = new RegExp(`\\b(${keywords})\\b`, 'g');
    html = html.replace(keywordRegex, `<span class="${keywordClass}">$1</span>`);
    html = html.replace(/([a-zA-Z0-9_]+)(?=\()/g, `<span class="${funcClass}">$1</span>`);
    return { __html: html };
  };

  const allTags = Array.from(new Set(items.flatMap(item => item.tags))).sort();

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const filters = ["Todos", "Prompt", "Skill", "Snippet", "Workflow"];
  const categories = ["Todas as Categorias", ...Array.from(new Set(items.map(i => i.category))).sort()];

  const filteredData = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesType = activeFilter === "Todos" || item.type === activeFilter;
    const matchesTags = selectedTags.length === 0 || selectedTags.every(t => item.tags.includes(t));
    const matchesPlaybook = !showPlaybook || bookmarks.includes(item.id);
    const matchesCategory = activeCategory === "Todas as Categorias" || item.category === activeCategory;
    
    return matchesSearch && matchesType && matchesTags && matchesPlaybook && matchesCategory;
  });

  const handleCopy = (content: string, id: any, e?: React.MouseEvent) => {
    e?.stopPropagation(); 
    navigator.clipboard.writeText(content).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 3000);
    });
  };

  const handleExportJSON = () => {
    const dataToExport = JSON.stringify(filteredData, null, 2);
    const blob = new Blob([dataToExport], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "vibe-coding-pack.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadZip = async () => {
    try {
      const zip = new JSZip();
      
      // Fetch all relevant source files using Vite's import.meta.glob
      const files = import.meta.glob([
        '/**/*'
      ], { query: '?raw', import: 'default' });

      for (const path in files) {
        // Exclude node_modules, dist, .git, and zip files
        if (
          path.includes('/node_modules/') || 
          path.includes('/dist/') || 
          path.includes('/.git/') ||
          path.endsWith('.zip')
        ) {
          continue;
        }

        try {
          const content = await files[path]();
          const relativePath = path.startsWith('/') ? path.slice(1) : path;
          zip.file(relativePath, content as string);
        } catch (err) {
          console.error(`Failed to load file: ${path}`, err);
        }
      }

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "vibe-project.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating ZIP:", error);
      alert("Ocorreu um erro ao gerar o arquivo ZIP.");
    }
  };

  const handleFork = () => {
    setNewItemForm({
      title: `${selectedItem.title} (Fork)`,
      type: selectedItem.type,
      category: selectedItem.category,
      description: selectedItem.description,
      content: selectedItem.content,
      tags: selectedItem.tags.join(', ')
    });
    setSelectedItem(null);
    setDescMode('edit');
    setContentMode('edit');
    setIsAddModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-indigo-500/30 transition-colors duration-300 ${isLightMode ? 'bg-slate-50 text-slate-800' : 'bg-[#0a0a0c] text-zinc-300'}`}>
      
      {/* Header/Nav */}
      <header className={`sticky top-0 z-10 backdrop-blur-md border-b transition-colors ${isLightMode ? 'bg-white/90 border-slate-200' : 'bg-[#0a0a0c]/90 border-zinc-800/50'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
              <Zap className="w-6 h-6 text-indigo-400" />
            </div>
            <h1 className={`text-xl font-bold tracking-tight ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
              Vibe
            </h1>
          </div>

          <div className="flex-1 max-w-xl w-full relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className={`h-5 w-5 transition-colors ${isLightMode ? 'text-slate-400 group-focus-within:text-indigo-500' : 'text-zinc-500 group-focus-within:text-indigo-400'}`} />
            </div>
            <input
              type="text"
              placeholder="Pesquisar prompts, skills, snippets..."
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-sm ${isLightMode ? 'bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-indigo-500/50' : 'bg-zinc-900/50 border-zinc-800 text-white placeholder-zinc-500 focus:border-indigo-500/50'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setShowPlaybook(!showPlaybook)}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-colors ${showPlaybook ? 'bg-indigo-500 text-white border-indigo-500 shadow-md shadow-indigo-500/20' : (isLightMode ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800')}`}
              title="Mostrar apenas os meus favoritos"
            >
              {showPlaybook ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
              <span className="text-sm font-medium hidden sm:inline">Playbook</span>
            </button>

            <button
              onClick={handleExportJSON}
              className={`p-2.5 rounded-xl border transition-colors ${isLightMode ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800'}`}
              title="Exportar Filtrados (JSON)"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className={`p-2.5 rounded-xl border transition-colors ${isLightMode ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800'}`}
              title="Alternar Tema"
            >
              {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={handleDownloadZip}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-colors ${isLightMode ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800'}`}
              title="Baixar Código do Projeto (ZIP)"
            >
              <FileCode className="w-4 h-4" />
              <span className="hidden sm:inline text-sm font-medium">Baixar ZIP</span>
            </button>

            <button 
              onClick={() => {
                setDescMode('edit');
                setContentMode('edit');
                setIsAddModalOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/20"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Novo</span>
            </button>
          </div>
        </div>

        {/* Barra de Filtros */}
        <div className="max-w-6xl mx-auto px-6 py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
            <Filter className={`w-4 h-4 self-center mr-2 shrink-0 ${isLightMode ? 'text-slate-400' : 'text-zinc-500'}`} />
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  activeFilter === filter 
                    ? (isLightMode ? 'bg-slate-800 text-white' : 'bg-zinc-100 text-zinc-900')
                    : (isLightMode ? 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900' : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200')
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg border outline-none appearance-none cursor-pointer transition-colors ${isLightMode ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800'}`}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <button 
              onClick={() => setShowTagsCloud(!showTagsCloud)}
              className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${selectedTags.length > 0 ? (isLightMode ? 'bg-indigo-50 text-indigo-600 border-indigo-200' : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30') : (isLightMode ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800')}`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Filtrar Tags</span>
              {selectedTags.length > 0 && <span>({selectedTags.length})</span>}
            </button>
            
            <button 
              onClick={() => setIsTagManagerOpen(true)}
              className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${isLightMode ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-800'}`}
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Gerir Tags</span>
            </button>
          </div>
        </div>

        {/* Nuvem de Tags */}
        {showTagsCloud && (
          <div className={`max-w-6xl mx-auto px-6 py-3 flex flex-wrap gap-2 border-t ${isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-zinc-900/30 border-zinc-800'}`}>
            {globalTags.map(tag => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all border ${
                    isSelected 
                      ? (isLightMode ? 'bg-indigo-500 border-indigo-500 text-white shadow-sm' : 'bg-indigo-600 border-indigo-500 text-white')
                      : (isLightMode ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100' : 'bg-zinc-950 border-zinc-800/80 text-zinc-400 hover:bg-zinc-800')
                  }`}
                >
                  #{tag}
                </button>
              )
            })}
          </div>
        )}
      </header>

      {/* Grid Principal */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {filteredData.length === 0 ? (
          <div className="text-center py-20">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full border mb-4 ${isLightMode ? 'bg-slate-100 border-slate-200' : 'bg-zinc-900 border-zinc-800'}`}>
              {showPlaybook ? <Bookmark className={`h-8 w-8 ${isLightMode ? 'text-slate-400' : 'text-zinc-600'}`} /> : <Search className={`h-8 w-8 ${isLightMode ? 'text-slate-400' : 'text-zinc-600'}`} />}
            </div>
            <h3 className={`text-lg font-medium ${isLightMode ? 'text-slate-800' : 'text-zinc-200'}`}>
              {showPlaybook ? 'O teu Playbook está vazio' : 'Nenhum recurso encontrado'}
            </h3>
            <p className={isLightMode ? 'text-slate-500 mt-1' : 'text-zinc-500 mt-1'}>
              {showPlaybook ? 'Guarda os teus recursos favoritos clicando no ícone do marcador.' : `Tente usar outros termos ou limpe as tags (${selectedTags.length}).`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredData.map((item) => {
              const TypeIcon = TYPE_CONFIG[item.type].icon;
              const config = TYPE_CONFIG[item.type];
              const isSaved = bookmarks.includes(item.id);
              
              return (
                <div 
                  key={item.id}
                  onClick={() => { setSelectedItem(item); setIsEditing(false); setAiAnalysis(null); }}
                  className={`group relative flex flex-col border rounded-2xl p-5 cursor-pointer transition-all hover:shadow-lg ${item.isDeprecated ? 'opacity-70 grayscale-[30%]' : ''} ${isLightMode ? 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-slate-200/50' : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-black/20'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2 items-center">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${config.bg} ${config.color} border ${config.border}`}>
                        <TypeIcon className="w-3 h-3" />
                        {item.type}
                      </span>
                      {item.isDeprecated && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-500/10 text-red-500 border border-red-500/20">
                          <AlertTriangle className="w-3 h-3" />
                          Obsoleto
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => toggleBookmark(item.id, e)}
                        className={`p-2 rounded-lg border transition-colors ${isSaved ? (isLightMode ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400') : (isLightMode ? 'bg-slate-50 border-slate-200 text-slate-400 hover:text-indigo-500 hover:bg-slate-100' : 'bg-zinc-950/50 border-zinc-800 text-zinc-500 hover:text-indigo-400 hover:bg-zinc-800')}`}
                        title={isSaved ? "Remover do Playbook" : "Guardar no Playbook"}
                      >
                        {isSaved ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                      
                      <button 
                        onClick={(e) => handleCopy(item.content, item.id, e)}
                        className={`p-2 rounded-lg border transition-colors ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100' : 'bg-zinc-950/50 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                        title="Copiar rápido"
                      >
                        {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-2 transition-colors line-clamp-1 group-hover:text-indigo-500 ${isLightMode ? 'text-slate-900' : 'text-zinc-100'}`}>
                    {item.title}
                  </h3>
                  
                  <div 
                    className={`text-sm flex-grow line-clamp-3 mb-4 ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`}
                    dangerouslySetInnerHTML={renderMarkdown(item.description)}
                  />
                  
                  <div className={`flex items-center gap-3 mb-4 text-xs border-t pt-3 mt-auto ${isLightMode ? 'border-slate-100 text-slate-500' : 'border-zinc-800/50 text-zinc-500'}`}>
                    <span className={`flex items-center gap-1 font-medium ${isLightMode ? 'text-slate-700' : 'text-zinc-400'}`}><UserCircle className="w-3.5 h-3.5" /> {item.author || "Anônimo"}</span>
                    <span className="flex items-center gap-1 ml-auto" title="Utilizações"><Activity className="w-3.5 h-3.5" /> {item.stats?.uses || 0}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map((tag: string) => (
                      <span key={tag} className={`text-[11px] px-2 py-1 rounded-md border ${isLightMode ? 'text-slate-600 bg-slate-50 border-slate-200' : 'text-zinc-400 bg-zinc-950 border-zinc-800/50'}`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Modal de Detalhes / Edição */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => { setSelectedItem(null); setIsEditing(false); setAiAnalysis(null); }}>
          <div 
            className={`w-full max-w-3xl max-h-[90vh] border rounded-2xl shadow-2xl flex flex-col overflow-hidden ${isLightMode ? 'bg-white border-slate-200 shadow-slate-300/50' : 'bg-[#0a0a0c] border-zinc-800'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`flex items-center justify-between p-5 border-b ${isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-zinc-900/30 border-zinc-800'}`}>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${TYPE_CONFIG[selectedItem.type].bg} ${TYPE_CONFIG[selectedItem.type].color}`}>
                  {React.createElement(TYPE_CONFIG[selectedItem.type].icon, { className: "w-5 h-5" })}
                </div>
                <div>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editForm.title} 
                      onChange={e => setEditForm({...editForm, title: e.target.value})}
                      className={`text-xl font-bold border px-2 py-1 rounded outline-none focus:border-indigo-500 w-full mb-1 ${isLightMode ? 'bg-white border-slate-300 text-slate-900' : 'bg-zinc-950 border-zinc-700 text-white'}`}
                    />
                  ) : (
                    <h2 className={`text-xl font-bold flex items-center gap-2 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                      {selectedItem.title}
                      {selectedItem.isDeprecated && <span className="text-xs font-bold uppercase bg-red-500/10 text-red-500 px-2 py-0.5 rounded border border-red-500/20">Descontinuado</span>}
                    </h2>
                  )}
                  <div className={`flex items-center flex-wrap gap-2 text-xs font-medium mt-1.5 ${isLightMode ? 'text-slate-500' : 'text-zinc-500'}`}>
                    {isEditing ? (
                      <input type="text" value={editForm.category} onChange={e => setEditForm({...editForm, category: e.target.value})} className={`border px-2 py-0.5 rounded outline-none w-24 text-xs ${isLightMode ? 'bg-white border-slate-300 text-slate-700' : 'bg-zinc-950 border-zinc-700 text-zinc-300'}`} />
                    ) : (
                      <span className={isLightMode ? 'text-slate-600' : 'text-zinc-400'}>{selectedItem.category}</span>
                    )}
                    <span>•</span>
                    <span className="flex items-center gap-1"><UserCircle className="w-3.5 h-3.5" /> {selectedItem.author || "Anônimo"}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-emerald-500"><Activity className="w-3.5 h-3.5" /> {selectedItem.stats?.uses || 0} usos</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {!isEditing ? (
                  <>
                    <button onClick={(e) => toggleBookmark(selectedItem.id, e)} className={`p-2 rounded-lg transition-colors ${bookmarks.includes(selectedItem.id) ? (isLightMode ? 'text-indigo-600 bg-indigo-50' : 'text-indigo-400 bg-indigo-500/10') : (isLightMode ? 'text-slate-500 hover:text-indigo-600 hover:bg-slate-200' : 'text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800')}`} title="Guardar no Playbook">
                      {bookmarks.includes(selectedItem.id) ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
                    </button>
                    <button onClick={handleFork} className={`p-2 rounded-lg transition-colors ${isLightMode ? 'text-slate-500 hover:text-indigo-600 hover:bg-slate-200' : 'text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800'}`} title="Criar Variação (Fork)">
                      <GitFork className="w-5 h-5" />
                    </button>
                    <button onClick={() => { setDescMode('edit'); setContentMode('edit'); setIsEditing(true); setEditForm(selectedItem); }} className={`p-2 rounded-lg transition-colors ${isLightMode ? 'text-slate-500 hover:text-indigo-600 hover:bg-slate-200' : 'text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800'}`} title="Editar Recurso">
                      <Edit3 className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => handleUpdateResource(selectedItem.id, { isDeprecated: !selectedItem.isDeprecated })} 
                      className={`p-2 rounded-lg transition-colors ${selectedItem.isDeprecated ? 'text-emerald-500 hover:bg-emerald-500/10' : (isLightMode ? 'text-slate-500 hover:text-red-500 hover:bg-slate-200' : 'text-zinc-400 hover:text-red-400 hover:bg-zinc-800')}`} 
                      title={selectedItem.isDeprecated ? "Reativar Recurso" : "Descontinuar Recurso"}
                    >
                      {selectedItem.isDeprecated ? <ArchiveRestore className="w-5 h-5" /> : <Archive className="w-5 h-5" />}
                    </button>
                  </>
                ) : (
                  <button onClick={() => { handleUpdateResource(selectedItem.id, editForm); setIsEditing(false); }} className="p-2 rounded-lg text-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors" title="Salvar Alterações">
                    <Save className="w-5 h-5" />
                  </button>
                )}
                
                <div className={`w-px h-6 mx-1 ${isLightMode ? 'bg-slate-200' : 'bg-zinc-800'}`}></div>
                <button 
                  onClick={() => { setSelectedItem(null); setIsEditing(false); setAiAnalysis(null); }}
                  className={`p-2 rounded-lg transition-colors ${isLightMode ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-200' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
              {selectedItem.isDeprecated && !isEditing && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3 text-red-500">
                  <AlertTriangle className="w-5 h-5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold">Aviso: Recurso Descontinuado</h4>
                    <p className="text-xs text-red-500/80 mt-1">Este conteúdo foi marcado como obsoleto ou não recomendado pelo autor/administrador. Use com cautela ou procure uma alternativa mais recente.</p>
                  </div>
                </div>
              )}

              {isEditing ? (
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className={`text-xs font-medium ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`}>Descrição</label>
                    <div className={`flex p-0.5 rounded-lg border ${isLightMode ? 'bg-slate-100 border-slate-200' : 'bg-zinc-900 border-zinc-800'}`}>
                      <button onClick={() => setDescMode('edit')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${descMode === 'edit' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Editar</button>
                      <button onClick={() => setDescMode('preview')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${descMode === 'preview' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Visualizar</button>
                      <button onClick={() => setDescMode('split')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${descMode === 'split' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Split</button>
                    </div>
                  </div>
                  {descMode === 'preview' ? (
                    <div className={`text-sm leading-relaxed p-3 border rounded-lg min-h-[60px] ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-zinc-950 border-zinc-800 text-zinc-300'}`} dangerouslySetInnerHTML={renderMarkdown(editForm.description)} />
                  ) : descMode === 'split' ? (
                    <div className="grid grid-cols-2 gap-4">
                      <MarkdownEditor value={editForm.description} onChange={val => setEditForm({...editForm, description: val})} isLightMode={isLightMode} placeholder="Descrição (suporta **negrito**, *itálico* e `código`)" rows={3} />
                      <div className={`text-sm leading-relaxed p-3 border rounded-lg overflow-y-auto ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-zinc-950 border-zinc-800 text-zinc-300'}`} dangerouslySetInnerHTML={renderMarkdown(editForm.description)} />
                    </div>
                  ) : (
                    <MarkdownEditor value={editForm.description} onChange={val => setEditForm({...editForm, description: val})} isLightMode={isLightMode} placeholder="Descrição (suporta **negrito**, *itálico* e `código`)" rows={2} />
                  )}
                </div>
              ) : (
                <div 
                  className={`mb-6 text-sm leading-relaxed ${isLightMode ? 'text-slate-700' : 'text-zinc-300'}`}
                  dangerouslySetInnerHTML={renderMarkdown(selectedItem.description)}
                />
              )}

              {/* Bloco de Análise da IA */}
              {aiAnalysis && !isEditing && (
                <div className={`mb-6 p-4 rounded-xl border flex gap-4 transition-all ${isLightMode ? 'bg-indigo-50 border-indigo-200' : 'bg-indigo-900/20 border-indigo-500/30'}`}>
                  <Sparkles className={`w-5 h-5 mt-1 shrink-0 ${isLightMode ? 'text-indigo-600' : 'text-indigo-400'}`} />
                  <div>
                    <h4 className={`text-sm font-bold mb-2 ${isLightMode ? 'text-indigo-900' : 'text-indigo-200'}`}>Análise da IA</h4>
                    <div 
                      className={`text-xs leading-relaxed ${isLightMode ? 'text-indigo-800' : 'text-indigo-300'}`}
                      dangerouslySetInnerHTML={renderMarkdown(aiAnalysis)}
                    />
                  </div>
                </div>
              )}
              
              <div className="relative group">
                {!isEditing && (
                  <div className="absolute top-0 right-0 p-3 z-10 flex gap-2">
                    <button
                      onClick={handleAIAnalyze}
                      disabled={isAnalyzing}
                      className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors shadow-lg ${isAnalyzing ? 'opacity-70 cursor-wait' : ''} ${isLightMode ? 'bg-white hover:bg-slate-50 text-indigo-600 border-slate-300' : 'bg-zinc-800 hover:bg-zinc-700 text-indigo-400 border-zinc-700'}`}
                    >
                      {isAnalyzing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                      {isAnalyzing ? 'A Analisar...' : '✨ Analisar'}
                    </button>
                    <div className="relative">
                      <button
                        onClick={() => handleCopy(selectedItem.content, 'modal')}
                        className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors shadow-lg ${isLightMode ? 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300' : 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700'}`}
                      >
                        {copiedId === 'modal' ? (
                          <><Check className="w-3.5 h-3.5 text-emerald-500" /> Copiado</>
                        ) : (
                          <><Copy className="w-3.5 h-3.5" /> Copiar Código</>
                        )}
                      </button>
                      <AnimatePresence>
                        {copiedId === 'modal' && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                            animate={{ opacity: 1, y: -40, scale: 1 }}
                            exit={{ opacity: 0, y: -30, scale: 0.8 }}
                            className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-xl whitespace-nowrap pointer-events-none flex items-center gap-1.5 z-50"
                          >
                            <Check className="w-4 h-4" />
                            Copiado com sucesso!
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                )}
                
                {isEditing ? (
                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <label className={`text-xs font-medium ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`}>Conteúdo</label>
                      <div className="flex items-center gap-2">
                        <div className={`flex p-0.5 rounded-lg border ${isLightMode ? 'bg-slate-100 border-slate-200' : 'bg-zinc-900 border-zinc-800'}`}>
                          <button onClick={() => setContentMode('edit')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${contentMode === 'edit' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Editar</button>
                          <button onClick={() => setContentMode('preview')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${contentMode === 'preview' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Visualizar</button>
                          <button onClick={() => setContentMode('split')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${contentMode === 'split' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Split</button>
                        </div>
                        <button
                          onClick={handleAIOptimize}
                          disabled={isOptimizing}
                          className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${isOptimizing ? 'opacity-70 cursor-wait' : ''} ${isLightMode ? 'bg-indigo-600 text-white border-indigo-700 hover:bg-indigo-700' : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50 hover:bg-indigo-500 hover:text-white'}`}
                        >
                          {isOptimizing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                          {isOptimizing ? 'A Otimizar...' : '✨ Otimizar'}
                        </button>
                      </div>
                    </div>
                    {contentMode === 'preview' ? (
                      <pre className={`p-5 rounded-xl border overflow-x-auto text-sm font-mono leading-relaxed min-h-[250px] ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-zinc-950 border-zinc-800/80 text-zinc-300'}`}>
                        <code dangerouslySetInnerHTML={renderHighlightedCode(editForm.content)} />
                      </pre>
                    ) : contentMode === 'split' ? (
                      <div className="grid grid-cols-2 gap-4">
                        <MarkdownEditor value={editForm.content} onChange={val => setEditForm({...editForm, content: val})} isLightMode={isLightMode} placeholder="Conteúdo" rows={10} isMono={true} />
                        <pre className={`p-5 rounded-xl border overflow-x-auto text-sm font-mono leading-relaxed min-h-[250px] ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-zinc-950 border-zinc-800/80 text-zinc-300'}`}>
                          <code dangerouslySetInnerHTML={renderHighlightedCode(editForm.content)} />
                        </pre>
                      </div>
                    ) : (
                      <MarkdownEditor value={editForm.content} onChange={val => setEditForm({...editForm, content: val})} isLightMode={isLightMode} placeholder="Conteúdo" rows={10} isMono={true} />
                    )}
                  </div>
                ) : (
                  <pre className={`p-5 pt-12 rounded-xl border overflow-x-auto text-sm font-mono leading-relaxed ${selectedItem.isDeprecated ? 'opacity-70' : ''} ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-zinc-950 border-zinc-800/80 text-zinc-300'}`}>
                    <code dangerouslySetInnerHTML={renderHighlightedCode(selectedItem.content)} />
                  </pre>
                )}
              </div>
            </div>
            
            <div className={`p-4 border-t flex justify-between items-center ${isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-zinc-900/30 border-zinc-800'}`}>
              <div className="flex gap-2 w-full sm:w-auto">
                {isEditing ? (
                  <div className="w-full sm:w-64">
                    <TagSelector 
                      selectedTags={editForm.tags} 
                      onChange={tags => setEditForm({...editForm, tags})} 
                      availableTags={globalTags} 
                      isLightMode={isLightMode} 
                    />
                  </div>
                ) : (
                  selectedItem.tags.map((tag: string) => (
                    <span key={tag} className={`text-xs ${isLightMode ? 'text-slate-500' : 'text-zinc-400'}`}>#{tag}</span>
                  ))
                )}
              </div>
              <div className="relative">
                <button 
                  onClick={(e) => {
                    if(isEditing) {
                      handleUpdateResource(selectedItem.id, editForm); 
                      setIsEditing(false);
                      return;
                    }
                    
                    setItems(items.map(i => i.id === selectedItem.id ? {...i, stats: {...i.stats, uses: (i.stats?.uses || 0) + 1}} : i));
                    setSelectedItem({...selectedItem, stats: {...selectedItem.stats, uses: (selectedItem.stats?.uses || 0) + 1}});
                    handleCopy(selectedItem.content, 'modal-footer', e);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                >
                  {copiedId === 'modal-footer' ? <Check className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
                  Usar Agora (+1 uso)
                </button>
                <AnimatePresence>
                  {copiedId === 'modal-footer' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -45, scale: 1 }}
                      exit={{ opacity: 0, y: -35, scale: 0.8 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-xl whitespace-nowrap pointer-events-none flex items-center gap-1.5 z-50"
                    >
                      <Check className="w-4 h-4" />
                      Copiado com sucesso!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Cadastro de Novo Recurso / Fork */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddModalOpen(false)}>
          <div className={`w-full max-w-2xl border rounded-2xl shadow-2xl flex flex-col overflow-hidden ${isLightMode ? 'bg-white border-slate-200' : 'bg-[#0a0a0c] border-zinc-800'}`} onClick={e => e.stopPropagation()}>
            
            <div className={`flex items-center justify-between p-5 border-b ${isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-zinc-900/30 border-zinc-800'}`}>
              <h2 className={`text-xl font-bold flex items-center gap-2 ${isLightMode ? 'text-slate-900' : 'text-white'}`}>
                {newItemForm.title.includes('(Fork)') ? <GitFork className="w-5 h-5 text-indigo-500" /> : <Plus className="w-5 h-5 text-indigo-500" />}
                {newItemForm.title.includes('(Fork)') ? 'Criar Nova Variação' : 'Cadastrar Novo Recurso'}
              </h2>
              <button onClick={() => setIsAddModalOpen(false)} className={`p-2 rounded-lg transition-colors ${isLightMode ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-200' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'}`}>
                <X className="w-5 h-5" />
              </button>
            </div>

            {modalAlert && (
              <div className="bg-red-500/10 border-b border-red-500/20 px-6 py-3 text-red-500 text-xs font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> {modalAlert}
              </div>
            )}
            
            <div className="p-6 overflow-y-auto max-h-[70vh] custom-scrollbar flex flex-col gap-4">
              
              <div className="flex items-end gap-3 w-full">
                <div className="flex-1">
                  <label className={`block text-xs font-medium mb-1 ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`}>Título</label>
                  <input type="text" value={newItemForm.title} onChange={e => setNewItemForm({...newItemForm, title: e.target.value})} className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 ${isLightMode ? 'bg-white border-slate-300 text-slate-900' : 'bg-zinc-900 border-zinc-800 text-white'}`} placeholder="Ex: Hook para detetar clique fora..." />
                </div>
                
                {/* BOTÃO DA IA INTEGRADA */}
                <button 
                  onClick={handleAIGenerate} 
                  disabled={isGenerating}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg border transition-all ${isGenerating ? 'opacity-70 cursor-not-allowed border-indigo-500/50 bg-indigo-500/10 text-indigo-400' : 'border-indigo-500 bg-indigo-500/20 text-indigo-400 hover:bg-indigo-500 hover:text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]'}`}
                  title="A IA vai preencher o resto automaticamente com base no teu título"
                >
                  {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                  {isGenerating ? 'A Pensar...' : '✨ Gerar com IA'}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`}>Tipo</label>
                  <select value={newItemForm.type} onChange={e => setNewItemForm({...newItemForm, type: e.target.value})} className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 ${isLightMode ? 'bg-white border-slate-300 text-slate-900' : 'bg-zinc-900 border-zinc-800 text-white'}`}>
                    <option value="Prompt">Prompt</option>
                    <option value="Skill">Skill</option>
                    <option value="Snippet">Snippet</option>
                    <option value="Workflow">Workflow</option>
                  </select>
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`}>Categoria</label>
                  <input type="text" value={newItemForm.category} onChange={e => setNewItemForm({...newItemForm, category: e.target.value})} className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 ${isLightMode ? 'bg-white border-slate-300 text-slate-900' : 'bg-zinc-900 border-zinc-800 text-white'}`} placeholder="Ex: Frontend" />
                </div>
              </div>
              
              <div>
                <label className={`block text-xs font-medium mb-1 ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`}>Tags</label>
                <TagSelector 
                  selectedTags={newItemForm.tags} 
                  onChange={tags => setNewItemForm({...newItemForm, tags})} 
                  availableTags={globalTags} 
                  isLightMode={isLightMode} 
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className={`text-xs font-medium flex items-center gap-2 ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`}>
                    <span>Descrição Breve</span>
                    <span className="text-[10px] opacity-70 border px-1.5 py-0.5 rounded hidden sm:inline">Suporta Markdown</span>
                  </label>
                  <div className={`flex p-0.5 rounded-lg border ${isLightMode ? 'bg-slate-100 border-slate-200' : 'bg-zinc-900 border-zinc-800'}`}>
                    <button onClick={() => setDescMode('edit')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${descMode === 'edit' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Editar</button>
                    <button onClick={() => setDescMode('preview')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${descMode === 'preview' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Visualizar</button>
                    <button onClick={() => setDescMode('split')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${descMode === 'split' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Split</button>
                  </div>
                </div>
                {descMode === 'preview' ? (
                  <div className={`text-sm leading-relaxed p-3 border rounded-lg min-h-[60px] ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-zinc-950 border-zinc-800 text-zinc-300'}`} dangerouslySetInnerHTML={renderMarkdown(newItemForm.description)} />
                ) : descMode === 'split' ? (
                  <div className="grid grid-cols-2 gap-4">
                    <MarkdownEditor value={newItemForm.description} onChange={val => setNewItemForm({...newItemForm, description: val})} isLightMode={isLightMode} placeholder="O que isso faz de forma resumida?" rows={3} />
                    <div className={`text-sm leading-relaxed p-3 border rounded-lg overflow-y-auto ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-700' : 'bg-zinc-950 border-zinc-800 text-zinc-300'}`} dangerouslySetInnerHTML={renderMarkdown(newItemForm.description)} />
                  </div>
                ) : (
                  <MarkdownEditor value={newItemForm.description} onChange={val => setNewItemForm({...newItemForm, description: val})} isLightMode={isLightMode} placeholder="O que isso faz de forma resumida?" rows={3} />
                )}
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className={`text-xs font-medium ${isLightMode ? 'text-slate-600' : 'text-zinc-400'}`}>Conteúdo (Código / Instrução)</label>
                  <div className={`flex p-0.5 rounded-lg border ${isLightMode ? 'bg-slate-100 border-slate-200' : 'bg-zinc-900 border-zinc-800'}`}>
                    <button onClick={() => setContentMode('edit')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${contentMode === 'edit' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Editar</button>
                    <button onClick={() => setContentMode('preview')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${contentMode === 'preview' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Visualizar</button>
                    <button onClick={() => setContentMode('split')} className={`px-3 py-1 text-[10px] font-medium rounded-md transition-all ${contentMode === 'split' ? (isLightMode ? 'bg-white text-slate-800 shadow-sm' : 'bg-zinc-800 text-white shadow-sm') : (isLightMode ? 'text-slate-500 hover:text-slate-700' : 'text-zinc-500 hover:text-zinc-300')}`}>Split</button>
                  </div>
                </div>
                {contentMode === 'preview' ? (
                  <pre className={`p-3 rounded-lg border overflow-x-auto text-sm font-mono leading-relaxed min-h-[150px] ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-zinc-950 border-zinc-800/80 text-zinc-300'}`}>
                    <code dangerouslySetInnerHTML={renderHighlightedCode(newItemForm.content)} />
                  </pre>
                ) : contentMode === 'split' ? (
                  <div className="grid grid-cols-2 gap-4">
                    <MarkdownEditor value={newItemForm.content} onChange={val => setNewItemForm({...newItemForm, content: val})} isLightMode={isLightMode} placeholder="Cole seu código, workflow ou prompt aqui..." rows={6} isMono={true} />
                    <pre className={`p-3 rounded-lg border overflow-x-auto text-sm font-mono leading-relaxed min-h-[150px] ${isLightMode ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-zinc-950 border-zinc-800/80 text-zinc-300'}`}>
                      <code dangerouslySetInnerHTML={renderHighlightedCode(newItemForm.content)} />
                    </pre>
                  </div>
                ) : (
                  <MarkdownEditor value={newItemForm.content} onChange={val => setNewItemForm({...newItemForm, content: val})} isLightMode={isLightMode} placeholder="Cole seu código, workflow ou prompt aqui..." rows={6} isMono={true} />
                )}
              </div>
            </div>

            <div className={`p-4 border-t flex justify-end gap-3 ${isLightMode ? 'bg-slate-50 border-slate-200' : 'bg-zinc-900/30 border-zinc-800'}`}>
              <button onClick={() => setIsAddModalOpen(false)} className={`px-4 py-2 text-sm font-medium transition-colors ${isLightMode ? 'text-slate-600 hover:text-slate-900' : 'text-zinc-400 hover:text-white'}`}>Cancelar</button>
              <button 
                onClick={() => {
                  if(!newItemForm.title || !newItemForm.content) return; 
                  
                  // Adicionar tags novas ao globalTags
                  const newTags = newItemForm.tags.filter(t => !globalTags.includes(t));
                  if (newTags.length > 0) {
                    setGlobalTags([...globalTags, ...newTags].sort());
                  }

                  const newItem = {
                    id: Date.now(),
                    ...newItemForm,
                    author: "Você (Visitante)",
                    stats: { uses: 0, likes: 0 },
                    isDeprecated: false
                  };
                  
                  setItems([newItem, ...items]); 
                  
                  setIsAddModalOpen(false);
                  setNewItemForm({ title: '', type: 'Prompt', category: 'Geral', description: '', content: '', tags: [] });
                }}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors shadow-lg shadow-indigo-500/20"
              >
                Publicar na Galeria
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
