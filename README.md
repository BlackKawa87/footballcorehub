# FootballCoreHub

Este projeto é uma aplicação React utilizando Tailwind CSS.

## Scripts

- `npm run dev` inicia o servidor de desenvolvimento.
- `npm run build` gera os arquivos de produção.
- `npm run preview` executa o servidor para visualizar a build.

## Deploy na Vercel

1. Copie o arquivo `.env.example` para `.env` e defina `VITE_API_FOOTBALL_KEY` com sua chave da API.
2. No painel da Vercel, crie uma variável de ambiente com o mesmo nome para que as funções serverless possam acessá-la de forma segura.
3. A pasta de saída é `dist` e já está configurada no arquivo `vercel.json`.
4. Após conectar o repositório, o deploy será realizado automaticamente a cada push.

