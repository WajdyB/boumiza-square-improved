# 🏢 Boumiza Square - Site Web Officiel

Site web moderne et professionnel pour Boumiza Square, un centre commercial et de loisirs situé à Sousse, Tunisie.

## ✨ Fonctionnalités

- **🏠 Page d'accueil** avec aperçu des services et enseignes
- **🏪 15 enseignes** présentées avec détails complets
- **🛠️ Services disponibles** (WiFi, espaces familiaux, etc.)
- **📰 Actualités** de l'établissement
- **⏰ Horaires d'ouverture** pour toutes les enseignes
- **📞 Formulaire de contact** fonctionnel avec EmailJS
- **🗺️ Intégration Google Maps** pour la localisation
- **📱 Design responsive** optimisé mobile et desktop

## 🚀 Technologies Utilisées

- **Next.js 14** + React 19
- **TypeScript** pour la robustesse
- **Tailwind CSS** pour le styling
- **Radix UI** pour les composants
- **EmailJS** pour l'envoi d'emails
- **Lucide React** pour les icônes

## 🏃‍♂️ Démarrage Rapide

```bash
# Installation des dépendances
npm install

# Démarrage du serveur de développement
npm run dev

# Build pour la production
npm run build
```

## 📁 Structure du Projet

```
boumiza-square/
├── app/                    # Pages Next.js
├── components/            # Composants React
│   ├── ui/               # Composants UI de base
│   ├── sections/         # Sections page d'accueil
│   ├── enseignes/        # Composants des enseignes
│   ├── services/         # Composants des services
│   ├── actualites/       # Composants des actualités
│   ├── horaires/         # Composants des horaires
│   └── contact/          # Composants de contact
├── public/               # Assets statiques
└── styles/               # Styles globaux
```

## 🌐 Pages Disponibles

- `/` - Page d'accueil
- `/enseignes` - Liste des enseignes
- `/services` - Services disponibles
- `/actualites` - Actualités
- `/horaires` - Horaires d'ouverture
- `/contact` - Contact et localisation

## 📧 Configuration EmailJS

Le formulaire de contact utilise EmailJS. Configurez vos identifiants dans `components/contact/contact-form.tsx` :

```typescript
emailjs.init("YOUR_PUBLIC_KEY")
// Remplacez YOUR_SERVICE_ID et YOUR_TEMPLATE_ID
```

## 🎨 Personnalisation

- **Couleurs :** Modifiez les variables CSS dans `tailwind.config.js`
- **Contenu :** Mettez à jour les données dans les composants correspondants
- **Images :** Remplacez les assets dans le dossier `public/`

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints :** sm, md, lg, xl
- **Navigation mobile** avec menu hamburger
- **Grilles adaptatives** pour tous les composants

## 🚀 Déploiement

```bash
# Build pour la production
npm run build

# Démarrage en production
npm start
```

## 📋 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Démarrage en production
- `npm run lint` - Vérification du code

## 🤝 Contribution

1. Fork le projet
2. Créez une branche pour votre fonctionnalité
3. Committez vos changements
4. Poussez vers la branche
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est propriétaire de Boumiza Square.

## 📞 Contact

- **Site web :** [Boumiza Square](https://boumizasquare.tn)
- **Email :** contact@boumizasquare.tn
- **Téléphone :** +216 51 648 574
- **Adresse :** Rue Yasser Arafet Z4, Sousse, Sahloul 4054, Tunisie

---

**Développé avec ❤️ pour Boumiza Square**
