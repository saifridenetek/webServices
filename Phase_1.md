# PHASE 1 : ANALYSE & PLANIFICATION

## 🔹 1.1. Analyse du Problème

**Contexte :**
Une entreprise technologique reçoit de nombreuses candidatures pour des stages et emplois. Elle souhaite centraliser et rationaliser la gestion de ces candidatures via un service web.

**Objectifs du Service Web :**
- Permettre la soumission de candidatures par ou pour le compte des candidats
- Permettre le suivi des statuts de candidature (ex : Soumis → En Revue → Accepté/Rejeté)
- Enregistrer et consulter l'historique des décisions pour chaque candidature

## 🔹 1.2. Identification des Entités & Relations

### 📦 Entités

| Entité           | Attributs                                                                 |
|------------------|--------------------------------------------------------------------------|
| Candidate        | id, firstName, lastName, email, phone, cvUrl                             |
| Application      | id, candidateId, positionId, status, submissionDate                      |
| Position         | id, title, description, type (internship/job)                            |
| DecisionHistory  | id, applicationId, status, comment, date                                |

*Optionnel :*
- Recruiter → pour l'authentification ou le suivi des décisions (peut être omis pour le MVP)

### 🔄 Relations
- Un Candidat peut avoir plusieurs candidatures (1:N)
- Un Poste peut recevoir plusieurs candidatures (1:N)
- Une Candidature a un historique de décisions (1:N)

## 🔹 1.3. Liste des Fonctionnalités (Opérations du Service Web)

### 🟢 Requêtes (Queries)
- `getAllCandidates()`: Liste de tous les candidats
- `getAllApplications()`: Liste de toutes les candidatures
- `getApplicationById(id)`: Détails d'une candidature spécifique
- `getAllPositions()`: Liste de toutes les offres d'emploi/stage
- `getDecisionHistory(applicationId)`: Historique des décisions pour une candidature
- `filterApplicationsByStatus(status)`: Filtrage des candidatures par statut

### 🟠 Mutations
- `createCandidate(input)`: Créer un nouveau candidat
- `createPosition(input)`: Créer une nouvelle offre d'emploi/stage
- `submitApplication(candidateId, positionId)`: Soumettre une candidature
- `updateApplicationStatus(applicationId, newStatus)`: Mettre à jour le statut actuel
- `addDecision(applicationId, status, comment)`: Ajouter une entrée à l'historique des décisions



