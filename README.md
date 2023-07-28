Welcome to the main repository for my porfolio website. Please also visit the live version at [saeidradmehr.com](https://saeidradmehr.com/)

## How to run locally

First off, run the prisma migraion. Choose the database name to your liking

```bash
prisma migrate <database name> --name init
prisma generate
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

