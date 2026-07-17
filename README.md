# nailinspirations

Projeto: site de divulgação do eBook "100 Modelos Prontos de Unhas".

Deploy (local):

```bash
npm install
npm run build
npx vite preview --port 8080
```

Deploy na Vercel (passos):

1. Criar repositório no GitHub e adicionar remote (exemplo):

```bash
git remote add origin https://github.com/niangimario/nailinspirations.git
git branch -M main
git add .
git commit -m "Prepare project for Vercel: add vercel.json and static build config"
git push -u origin main
```

2. No Vercel, conectar o repositório GitHub e usar as configurações padrão.
   - Build command: `npm run build`
   - Output directory: `.output/public` (configurado automaticamente via `vercel.json`)

Observações:
- O projeto é construído como site estático usando a pasta `.output/public` gerada pelo build.
- Se quiser suporte completo a SSR no Vercel, podemos ajustar a build para usar o preset do Nitro para Vercel e configurar funções server-side.
