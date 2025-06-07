# 🎯 Système de Suivi de Candidatures – Backend (NestJS + GraphQL + MySQL)

Ce projet est une API backend développée avec **NestJS**, utilisant **GraphQL** pour les requêtes et mutations, et une base de données **MySQL** pour stocker les données. Elle permet de gérer les candidatures à des offres d'emploi ou de stage dans une entreprise tech.

## 📦 Fonctionnalités principales

- 📄 Soumission de candidatures
- ✅ Suivi de l’état d’une candidature (En attente, Acceptée, Refusée, etc.)
- 🕒 Historique des décisions pour chaque candidature
- 🔍 Consultation des candidatures par offre ou par candidat

## 🚀 Démarrage rapide

### 1. Installer les dépendances

```bash
pnpm install
```

### 2. Configurer la base de données

le fichier `app.module.ts`:

```node
      type: 'mysql',
      host: 'localhost',
      port: 55555,
      username: 'root',
      password: '',
      database: 'candidate_tracking',
```

Assure-toi que la base de données `candidate_tracking` existe dans ton MySQL.

### 4. Lancer le serveur

```bash
pnpm start:dev
```

Le serveur sera accessible à : [http://localhost:3000/graphql](http://localhost:3000/graphql)

## 🧪 Exemple de requête GraphQL

```graphql
mutation {
  submitApplication(input: {
    fullName: "Jean Dupont",
    email: "jean@example.com",
    jobId: "1234",
    resumeLink: "https://moncv.com/jean"
  }) {
    id
    status
  }
}
```

## 🛠️ Stack technique

* ⚙️ NestJS
* 🔗 GraphQL (via Apollo Server)
* 🗄️ MySQL (via TypeORM)

