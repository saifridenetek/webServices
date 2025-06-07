

# PHASE 2 : CONCEPTION

## 🔹 2.1. Diagramme des Entités/Classes (UML)
Nous modélisons 4 entités principales : Candidat, Candidature, Poste et HistoriqueDécision.

```plaintext
+---------------------+
|      Candidat       |
+---------------------+
| id: string          |
| firstName: string   |
| lastName: string    |
| email: string       |
| phone: string       |
| cvUrl: string       |
+---------------------+
| candidatures: [Candidature]
+---------------------+

+---------------------+
|       Poste         |
+---------------------+
| id: string          |
| title: string       |
| description: string |
| type: string        |  // "stage" ou "emploi"
| department: string  |
+---------------------+
| candidatures: [Candidature]
+---------------------+

+---------------------+
|     Candidature     |
+---------------------+
| id: string          |
| submissionDate: Date|
| status: string      |  // Ex: SOUMIS, EN_REVUE, ACCEPTE, REJETE
+---------------------+
| candidat: Candidat  |
| poste: Poste        |
| historique: [HistoriqueDécision]
+---------------------+

+-------------------------+
|   HistoriqueDécision    |
+-------------------------+
| id: string              |
| date: Date              |
| status: string          |
| commentaire: string     |
+-------------------------+
| candidature: Candidature|
+-------------------------+
```
## 🔹 2.2. Conception du Schéma GraphQL

### 📦 Types d'Objets
```graphql
type Candidat {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  phone: String
  cvUrl: String
  candidatures: [Candidature!]!
}

type Poste {
  id: ID!
  title: String!
  description: String
  type: String!          # "stage" ou "emploi"
  department: String
  candidatures: [Candidature!]!
}

type Candidature {
  id: ID!
  submissionDate: String!
  status: String!
  candidat: Candidat!
  poste: Poste!
  historique: [HistoriqueDécision!]!
}

type HistoriqueDécision {
  id: ID!
  date: String!
  status: String!
  commentaire: String
}
```


### 🧾 Types d'Input
```graphql
input CreateCandidatInput {
  firstName: String!
  lastName: String!
  email: String!
  phone: String
  cvUrl: String
}

input CreatePosteInput {
  title: String!
  description: String
  type: String!          # "stage" ou "emploi"
  department: String
}

input SubmitCandidatureInput {
  candidatId: ID!
  posteId: ID!
}

input AddDecisionInput {
  candidatureId: ID!
  status: String!
  commentaire: String
}
```


### 🔍  Requêtes
```graphql
type Query {
  candidats: [Candidat!]!
  postes: [Poste!]!
  candidatures: [Candidature!]!
  candidature(id: ID!): Candidature
  filterCandidaturesByStatus(status: String!): [Candidature!]!
  historiqueDécision(candidatureId: ID!): [HistoriqueDécision!]!
}
```


### ✍️ Mutations
```graphql
type Mutation {
  createCandidat(input: CreateCandidatInput!): Candidat!
  createPoste(input: CreatePosteInput!): Poste!
  submitCandidature(input: SubmitCandidatureInput!): Candidature!
  updateCandidatureStatus(candidatureId: ID!, status: String!): Candidature!
  addDecision(input: AddDecisionInput!): HistoriqueDécision!
}
```