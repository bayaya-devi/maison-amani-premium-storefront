# Maison Amani — maquette commerce premium

Maquette fonctionnelle d’une boutique d’électroménager, cuisine, vaisselle et maison. Le projet est conçu pour évoluer vers une application fullstack sans refaire l’interface.

## Lancer localement

```bash
npm install
npm run dev
```

Pour vérifier la version de production :

```bash
npm run build
npm run preview
```

## Pages

- Boutique : accueil, catalogue filtrable, fiche produit, panier, commande simulée et confirmation.
- Espace client : dashboard, profil, commandes, adresses, favoris, SAV et notifications (simulation).
- Administration : dashboard, produits, catégories, marques, commandes, stock et mouvements, employés, clients, fournisseurs, achats et apparence.

## Architecture

- `src/types` : contrats métier partagés (`Product`, `Order`, `Customer`, etc.).
- `src/data` : données réalistes de démonstration uniquement.
- `src/services` : façade de données ; elle isole localStorage et les mocks des écrans.
- `src/services/api/endpoints.ts` : contrats des futurs endpoints REST.
- `src/App.tsx` : routes et écrans de démonstration, organisés pour un découpage ultérieur par domaine.

Les services actuels (`productService`, `orderService`, `employeeService`, etc.) peuvent être remplacés progressivement par `fetch`, Supabase ou une API sans modifier les composants de page.

## Évolution fullstack prévue

Les futurs domaines API sont préparés : produits, catégories, marques, commandes, clients, employés, inventaire, fournisseurs, achats et paramètres du magasin. Les modifications de catalogue et d’apparence sont persistées dans `localStorage` pour la présentation client.

## Déploiement SPA

Pour Cloudflare Pages ou Vercel, configurer :

- commande de build : `npm run build`
- répertoire de publication : `dist`
- réécriture SPA : toutes les routes vers `index.html` (déjà géré automatiquement par Vercel ; ajouter une règle de fallback sur Cloudflare Pages).
