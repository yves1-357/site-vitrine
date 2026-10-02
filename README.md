# Élyse Chauffeur — site de démonstration

Site vitrine fictif d’une entreprise de VTC et de taxi en Belgique, réalisé en Next.js (App Router) et TypeScript pour le portfolio de **Yves Web Studio**.

> Marque fictive. Aucune réservation n’est envoyée, aucun prix n’est calculé, aucune donnée n’est collectée ni stockée.

## Installer et lancer

Prérequis : Node.js 20.9 ou plus récent.

```bash
npm install
npm run dev      # développement : http://localhost:3000
npm run build    # build de production
npm run start    # sert le build de production
npm run lint     # ESLint
```

## Déployer sur Vercel

1. Poussez le dépôt sur GitHub.
2. Sur [vercel.com/new](https://vercel.com/new), importez le dépôt.
3. Laissez les réglages par défaut (framework Next.js détecté automatiquement). Aucune variable d’environnement n’est nécessaire.
4. Cliquez sur **Deploy**. Chaque `git push` sur `main` redéploie le site.

## Fonctionnalités

- Navigation avec lien de section actif, menu mobile accessible au clavier, bouton « retour en haut ».
- Sélecteur de langue FR / EN (français par défaut, choix mémorisé localement dans le navigateur).
- Section « Comment ça marche » (étapes dans `src/i18n/messages.ts`).
- Formulaire : inversion départ/destination, trajet retour optionnel, numéro de vol (transfert aéroport), options (`tripOptions`), validation détaillée.
- Récapitulatif : copier dans le presse-papiers, imprimer, export agenda `.ics` (généré dans le navigateur, rien n’est envoyé).
- Apparition progressive au défilement, désactivée si l’utilisateur préfère réduire les animations.

## Où modifier quoi

| Besoin | Fichier |
| --- | --- |
| Textes FR et EN (tous les contenus, FAQ, suggestions) | [src/i18n/messages.ts](src/i18n/messages.ts) |
| Marque, véhicules, services (structure) | [src/config/site.ts](src/config/site.ts) |
| Liens du développeur (e-mail, GitHub, LinkedIn, portfolio) | `developer` dans [src/config/site.ts](src/config/site.ts) |
| Couleurs, typographie, espacements | variables `:root` de [src/app/globals.css](src/app/globals.css) |
| Images | [public/images/](public/images) (puis `images` dans `site.ts`) |
| Règles de validation du formulaire | [src/lib/trip.ts](src/lib/trip.ts) |
| Métadonnées (titre, description) | [src/app/layout.tsx](src/app/layout.tsx) |
| Favicon | [src/app/icon.svg](src/app/icon.svg) |

Pour afficher votre portfolio, renseignez `portfolioUrl` dans `developer` : le lien apparaît automatiquement. Tant qu’une URL est vide (`""`), son lien est masqué. `linkedinUrl` fonctionne de la même façon.

## Sources des images

Photographies de Wikimedia Commons, redimensionnées pour le web et conservées dans `public/images`. Les crédits sont aussi affichés sur la page `/credits`.

| Fichier | Œuvre | Auteur | Licence |
| --- | --- | --- | --- |
| hero.jpg | [Black Mercedes-Benz S-Class on Regent Street](https://commons.wikimedia.org/wiki/File:Black_Mercedes-Benz_S-Class_on_Regent_Street_near_Piccadilly_Circus,_London_(Tripyana).jpg) | Mam16600 for Tripyana | CC BY 4.0 |
| berline.jpg | [Škoda Superb IV IMG 4524](https://commons.wikimedia.org/wiki/File:%C5%A0koda_Superb_IV_IMG_4524.jpg) | Alexander Migl | CC BY-SA 4.0 |
| berline-premium.jpg | [Mercedes-Benz E-Class 1X7A5838](https://commons.wikimedia.org/wiki/File:Mercedes-Benz_E-Class_1X7A5838.jpg) | Alexander Migl | CC BY-SA 4.0 |
| van.jpg | [Mercedes-Benz V-Class 185650](https://commons.wikimedia.org/wiki/File:Mercedes-Benz_V-Class_185650.jpg) | Trop86 | CC0 |
| aeroport.jpg | [Zaventem Brussels Airport 04](https://commons.wikimedia.org/wiki/File:Zaventem_Brussels_Airport_04.jpg) | Ad Meskens | CC BY-SA 4.0 |
| professionnel.jpg | [Mercedes-Benz V-Class interior, Belgravia](https://commons.wikimedia.org/wiki/File:Mercedes-Benz_V-Class_interior_with_cream_leather_seats,_Belgravia,_London_(Tripyana).jpg) | Mam16600 for Tripyana | CC BY 4.0 |
| prive.jpg | [Brussels-Grand Place](https://commons.wikimedia.org/wiki/File:Brussels-Grand_Place.jpg) | Romaine | CC0 |

Les images servent à l’illustration : certaines (hero, intérieur du van) ont été prises à Londres, et les véhicules ne représentent pas une flotte réelle. Remplacez-les par vos propres photos pour un vrai client. Aucun logo de compagnie existante n’est utilisé.

Licences : [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

## Limites de la démonstration

- Frontend uniquement : pas de backend, de base de données, de paiement ni d’API.
- Le formulaire valide les champs et affiche un récapitulatif ; rien n’est envoyé, enregistré ou mémorisé (ni serveur, ni `localStorage`).
- Pas d’autocomplétion d’adresses ni de carte ; les destinations proposées sont de simples suggestions.
- Aucun prix, distance ou disponibilité n’est calculé.
- Date et heure sont comparées à l’heure locale du navigateur.
- Aucun suivi publicitaire ou analytique, donc pas de bannière de cookies.
