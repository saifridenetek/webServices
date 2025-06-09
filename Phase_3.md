# 🧪 PHASE 3 : GUIDE DE LANCEMENT & TEST

## 🔹 3.1. Installation des Dépendances

Si ce n'est pas déjà fait, installez les dépendances du projet :
 npm install @nestjs/apollo @nestjs/graphql @nestjs/typeorm typeorm mysql2 graphql
npm install
`

## 🔹 3.2. Lancer l'Application NestJS

Lancez le serveur en mode développement avec rechargement automatique :

npm run start:dev

## 🔹 3.3. Accéder au Playground GraphQL

Ouvrez votre navigateur à l'adresse suivante :

http://localhost:3004/graphql

Vous y trouverez l'interface *Apollo GraphQL Playground* pour tester vos requêtes et mutations.

---

## 🔹 3.4. Exemples Complets de Tests

### ➕ Mutations

#### 1. Créer un Candidat

mutation {
  createCandidate(input: {
    firstName: "Alice",
    lastName: "Dupont",
    email: "alice@example.com",
    phone: "0600000000",
    cvUrl: "http://example.com/cv.pdf"
  }) {
    id
    firstName
    lastName
    email
  }
}

#### 2. Créer un Poste

mutation {
  createPosition(input: {
    title: "Développeur Fullstack",
    description: "Développement applications web",
    type: "emploi"
  }) {
    id
    title
    type
  }
}

#### 3. Soumettre une Candidature

mutation {
  createApplication(input: {
    candidateId: 1
    positionId: 1
    status: "submitted"
  }) {
    id
    status
    createdAt
  }
}

---

### 🔍 Requêtes

#### 1. Lister tous les Candidats

query {
  candidates {
    id
    firstName
    lastName
    email
    applications {
      id
      status
    }
  }
}

#### 2. Obtenir une Candidature spécifique

query {
  application(id: 1) {
    status
    createdAt
    candidate {
      firstName
      lastName
    }
    position {
      title
      type
    }
  }
}

#### 3. Filtrer les Candidatures par Statut

query {
  applicationsByStatus(status: "EN_REVUE") {
    id
    createdAt
    candidate {
      firstName
      lastName
    }
  }
}

#### 4. Consulter l'Historique des Décisions

query {
  decisionHistoryByApplication(applicationId: 1) {
    date
    status
    comment
  }
}

---

### 🔄 Mutations de Mise à Jour

#### 1. Mettre à jour le Statut d'une Candidature

mutation {
  updateApplication(input: {
    id: 4
    status: "ACCEPTE"
  }) {
    id
    status
  }
}

#### 2. Ajouter une Décision à l'Historique

mutation {
  createDecision(input: {
    applicationId: 2,
    status: "REJETE",
    comment: "Poste déjà pourvu",
    date: "2025-06-08T15:00:00Z"
  }) {
    id
    date
    status
  }
}