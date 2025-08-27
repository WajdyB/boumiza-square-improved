# CAHIER DES CHARGES - BOUMIZA SQUARE

## 📋 INFORMATIONS GÉNÉRALES DU PROJET

**Nom du Projet :** Boumiza Square  
**Type :** Site web commercial et institutionnel  
**Langue :** Français  
**Pays :** Tunisie  
**Client :** Boumiza Square  
**Date de création :** 2024  
**Version :** 1.0  

---

## 🎯 OBJECTIFS DU PROJET

### Objectif Principal
Créer un site web moderne et professionnel pour présenter Boumiza Square, un centre commercial et de loisirs situé à Sousse, Tunisie.

### Objectifs Spécifiques
- Présenter l'établissement et ses services
- Informer sur les enseignes et leurs horaires
- Faciliter la prise de contact
- Améliorer la visibilité en ligne
- Fournir une expérience utilisateur optimale

---

## 🏗️ ARCHITECTURE TECHNIQUE

### Stack Technologique
- **Framework Frontend :** Next.js 14 (React 19)
- **Langage :** TypeScript
- **Styling :** Tailwind CSS
- **Composants UI :** Radix UI + Composants personnalisés
- **Icônes :** Lucide React
- **Gestion d'état :** React Hooks (useState, useEffect)
- **Email :** EmailJS (intégration)
- **Responsive Design :** Mobile-first approach

### Structure du Projet
```
boumiza-square/
├── app/                    # Pages Next.js
├── components/            # Composants React
│   ├── ui/               # Composants UI de base
│   ├── sections/         # Sections de la page d'accueil
│   ├── enseignes/        # Composants des enseignes
│   ├── services/         # Composants des services
│   ├── actualites/       # Composants des actualités
│   ├── horaires/         # Composants des horaires
│   └── contact/          # Composants de contact
├── public/               # Assets statiques
└── styles/               # Styles globaux
```

---

## 🏠 PAGES ET STRUCTURE DU SITE

### 1. Page d'Accueil (`/`)
**Objectif :** Présentation générale et navigation principale

**Sections :**
- **Hero Section :** Image de fond avec titre principal
- **Services Preview :** Aperçu des 9 services principaux
- **Enseignes Preview :** Aperçu des 15 enseignes
- **Actualités Preview :** 3 dernières actualités
- **Localisation :** Carte Google Maps intégrée
- **Footer :** Informations de contact et navigation

### 2. Page Enseignes (`/enseignes`)
**Objectif :** Présentation détaillée de toutes les enseignes

**Contenu :**
- **Hero Section :** Image hero-black.jpg
- **Liste des 15 enseignes :**
  1. Underground Space (Espace de loisirs)
  2. Oboba (Boissons)
  3. Plan B (Restaurant)
  4. La Leyenda (Café)
  5. Khaznadar (Café)
  6. Peppinos (Pizzeria)
  7. Miel Boumiza (Miel)
  8. Okaya (Restaurant)
  9. Karina Cosmétique (Beauté)
  10. Chaneb Tacos (Fast-food)
  11. Mister Hachicha (Gourmandise)
  12. Ostedh (Restaurant)
  13. Terminal A (Restaurant)
  14. Crêpe & Co (Crêperie)
  15. O'Juice (Jus & Boissons)

**Fonctionnalités :**
- Cartes avec logos, descriptions et catégories
- Modals détaillés avec informations complètes
- Galeries d'images
- Vidéos intégrées (fichiers locaux)
- Horaires d'ouverture détaillés
- Localisation dans le complexe

### 3. Page Services (`/services`)
**Objectif :** Présentation des services disponibles

**Contenu :**
- **Hero Section :** Image hero-black.jpg
- **9 Services principaux :**
  1. WIFI Gratuit
  2. Espace Familial
  3. Zone de repos
  4. Bornes de recharge
  5. Espace enfants
  6. Zone gaming
  7. Snacks disponibles
  8. Accès PMR
  9. Consigne automatique

**Section "Besoin d'aide" :**
- Adresse : Rue Yasser Arafet Z4, Sousse, Sahloul 4054
- Téléphone : +216 51 648 574
- Email : contact@boumizasquare.tn
- Horaires : 07h30 - 02h00

### 4. Page Actualités (`/actualites`)
**Objectif :** Informations et actualités de l'établissement

**Contenu :**
- **Hero Section :** Image hero-black.jpg
- **3 Articles d'actualité :**
  1. "Envie d'un peu de détente ?" (05-06-2024)
  2. "Plus d'espace pour travailler" (11-02-2024)
  3. "Un espace pour apprendre, réfléchir et évoluer" (26-07-2025)

**Format :** Cartes simples avec images, titres et descriptions

### 5. Page Horaires (`/horaires`)
**Objectif :** Informations sur les horaires d'ouverture

**Contenu :**
- **Horaires généraux :**
  - Lundi - Jeudi : 07h30 - 01h00
  - Vendredi - Dimanche : 07h30 - 02h00

- **Horaires des 15 enseignes** avec logos et catégories
- **Services disponibles** avec horaires
- **Informations pratiques** (paiement, accessibilité)

### 6. Page Contact (`/contact`)
**Objectif :** Faciliter la prise de contact

**Contenu :**
- **Formulaire de contact** (EmailJS intégré)
- **Informations de contact :**
  - Téléphone : +216 51 648 574
  - Email : contact@boumizasquare.tn
  - Adresse : Rue Yasser Arafet Z4, Sousse, Sahloul 4054
- **Section "Nous trouver"** avec carte Google Maps intégrée

---

## 🎨 DESIGN ET IDENTITÉ VISUELLE

### Palette de Couleurs
- **Couleur principale :** Accent (définie dans Tailwind)
- **Arrière-plan :** Background (blanc/crème)
- **Texte :** Foreground (noir/gris foncé)
- **Cartes :** Card (blanc avec ombres)

### Typographie
- **Police principale :** Font-heading (pour les titres)
- **Police secondaire :** Police système (pour le contenu)

### Composants UI
- **Cartes :** Design moderne avec ombres et bordures arrondies
- **Boutons :** Styles cohérents avec états hover et focus
- **Modals :** Fenêtres popup élégantes pour les détails
- **Navigation :** Menu fixe avec effet de transparence

### Responsive Design
- **Mobile-first approach**
- **Breakpoints :** sm, md, lg, xl
- **Grilles adaptatives** pour tous les composants
- **Navigation mobile** avec menu hamburger

---

## 🔧 FONCTIONNALITÉS TECHNIQUES

### Navigation
- **Menu fixe** en haut de page
- **Navigation responsive** avec menu mobile
- **Indicateurs de page active**
- **Transitions fluides** entre les pages

### Formulaire de Contact
- **Validation en temps réel**
- **Intégration EmailJS** pour l'envoi d'emails
- **Gestion des erreurs** avec messages en français
- **Feedback utilisateur** (succès, erreurs, chargement)

### Intégrations
- **Google Maps** pour la localisation
- **EmailJS** pour l'envoi d'emails
- **Réseaux sociaux** (Facebook, Instagram, TikTok)

### Performance
- **Images optimisées** avec Next.js
- **Lazy loading** pour les composants
- **Code splitting** automatique
- **Optimisations SEO** de base

---

## 📱 EXPÉRIENCE UTILISATEUR

### Parcours Utilisateur
1. **Arrivée sur la page d'accueil** → Découverte des services
2. **Navigation vers les enseignes** → Choix et informations détaillées
3. **Consultation des horaires** → Planification de visite
4. **Prise de contact** → Formulaire simple et efficace

### Accessibilité
- **Contraste suffisant** pour la lisibilité
- **Navigation au clavier** supportée
- **Textes alternatifs** pour les images
- **Structure sémantique** HTML appropriée

### Interactivité
- **Hover effects** sur les cartes et boutons
- **Transitions fluides** entre les états
- **Feedback visuel** pour les actions utilisateur
- **Modals interactifs** pour les détails

---

## 🌐 INFORMATIONS DE CONTACT

### Coordonnées Principales
- **Adresse :** Rue Yasser Arafet Z4, Sousse, Sahloul 4054, Tunisie
- **Téléphone :** +216 51 648 574
- **Email :** contact@boumizasquare.tn

### Réseaux Sociaux
- **Facebook :** [https://www.facebook.com/profile.php?id=61563502731837](https://www.facebook.com/profile.php?id=61563502731837)
- **Instagram :** [https://www.instagram.com/boumiza__square/?hl=fr](https://www.instagram.com/boumiza__square/?hl=fr)
- **TikTok :** [https://www.tiktok.com/@boumiza.square](https://www.tiktok.com/@boumiza.square)

### Horaires d'Ouverture
- **Lundi - Jeudi :** 07h30 - 01h00
- **Vendredi - Dimanche :** 07h30 - 02h00

---

## 📊 CONTENU ET DONNÉES

### Services Disponibles
- WiFi gratuit 24h/24
- Espaces familiaux et de repos
- Bornes de recharge
- Accès PMR
- Consigne automatique

### Catégories d'Enseignes
- **Restaurants :** Plan B, Okaya, Ostedh, Terminal A
- **Cafés :** La Leyenda, Khaznadar
- **Fast-food :** Chaneb Tacos, Crêpe & Co
- **Boissons :** Oboba, O'Juice
- **Loisirs :** Underground Space
- **Beauté :** Karina Cosmétique
- **Spécialités :** Miel Boumiza, Mister Hachicha
- **Pizzeria :** Peppinos

### Actualités
- Articles avec dates, images et descriptions
- Contenu mis à jour régulièrement
- Images expressives pour chaque actualité

---

## 🚀 FONCTIONNALITÉS AVANCÉES

### Système de Modals
- **Modals des enseignes** avec informations détaillées
- **Galerie d'images** intégrée
- **Vidéos** avec contrôles personnalisés
- **Informations complètes** (horaires, localisation, spécialités)

### Gestion des États
- **États de chargement** pour les formulaires
- **Gestion des erreurs** avec messages contextuels
- **États de succès** avec confirmations visuelles
- **Transitions fluides** entre les états

### Intégration EmailJS
- **Envoi d'emails automatique** vers contact@boumizasquare.tn
- **Template personnalisé** avec toutes les informations du formulaire
- **Validation côté client** avant envoi
- **Gestion des erreurs** de l'API

---

## 📁 STRUCTURE DES FICHIERS

### Composants Principaux
- `components/navigation.tsx` - Navigation principale
- `components/footer.tsx` - Pied de page
- `components/sections/` - Sections de la page d'accueil
- `components/enseignes/` - Composants des enseignes
- `components/services/` - Composants des services
- `components/actualites/` - Composants des actualités
- `components/horaires/` - Composants des horaires
- `components/contact/` - Composants de contact

### Pages
- `app/page.tsx` - Page d'accueil
- `app/enseignes/page.tsx` - Page des enseignes
- `app/services/page.tsx` - Page des services
- `app/actualites/page.tsx` - Page des actualités
- `app/horaires/page.tsx` - Page des horaires
- `app/contact/page.tsx` - Page de contact

### Assets
- `public/` - Images, logos, vidéos
- `public/hero-black.jpg` - Image hero pour les pages secondaires
- Logos des enseignes et images des services

---

## 🔒 SÉCURITÉ ET MAINTENANCE

### Sécurité
- **Validation côté client** pour les formulaires
- **Protection contre les injections** avec EmailJS
- **HTTPS obligatoire** en production
- **Validation des données** avant traitement

### Maintenance
- **Code modulaire** pour faciliter les mises à jour
- **Composants réutilisables** pour la cohérence
- **Documentation complète** du code
- **Structure claire** pour les développeurs

---

## 📈 ÉVOLUTIONS FUTURES

### Fonctionnalités Potentielles
- **Système de réservation** en ligne
- **Galerie photos** interactive
- **Blog d'actualités** avec CMS
- **Système de newsletter** intégré
- **Application mobile** native
- **Intégration e-commerce** pour certaines enseignes

### Optimisations Techniques
- **PWA (Progressive Web App)** pour l'expérience mobile
- **SSR (Server Side Rendering)** pour le SEO
- **Cache intelligent** pour les performances
- **Analytics avancés** pour le suivi utilisateur

---

## 📋 CHECKLIST DE VALIDATION

### Fonctionnalités
- [x] Navigation responsive
- [x] Pages principales créées
- [x] Formulaire de contact fonctionnel
- [x] Intégration Google Maps
- [x] Intégration EmailJS
- [x] Modals des enseignes
- [x] Design responsive
- [x] Intégration réseaux sociaux

### Contenu
- [x] Informations des enseignes
- [x] Services disponibles
- [x] Horaires d'ouverture
- [x] Actualités
- [x] Coordonnées de contact
- [x] Localisation

### Technique
- [x] Next.js configuré
- [x] TypeScript implémenté
- [x] Tailwind CSS configuré
- [x] Composants UI créés
- [x] Responsive design
- [x] Performance optimisée

---

## 🎯 CONCLUSION

Le site web Boumiza Square est un projet complet et professionnel qui présente efficacement l'établissement commercial et de loisirs. Avec une architecture moderne, un design élégant et des fonctionnalités avancées, il offre une expérience utilisateur optimale tout en respectant les standards web actuels.

**Points forts :**
- Design moderne et professionnel
- Navigation intuitive et responsive
- Contenu riche et bien organisé
- Fonctionnalités avancées (EmailJS, Google Maps)
- Code maintenable et évolutif

**Technologies utilisées :**
- Next.js 14 + React 19
- TypeScript pour la robustesse
- Tailwind CSS pour le styling
- EmailJS pour l'envoi d'emails
- Intégrations tierces (Google Maps, réseaux sociaux)

Le projet est prêt pour la production et peut facilement évoluer selon les besoins futurs de l'entreprise.
