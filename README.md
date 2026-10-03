# Electro Rachid — maquette commerce premium

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
- Espace employé : connexion par rôle, commandes affectées, stock, caisse, SAV, messagerie et tâches.
- Administration : `/pro/admin` — tableau de bord, commandes et affectations, catalogue, stock, ventes caisse, SAV, employés, messagerie, site public, fournisseurs, achats, salaires, rapports imprimables, notifications, journal d’activité, corbeille, paramètres et profil.

### Accès de démonstration administrateur

Depuis `/pro`, choisir **Administrateur**, puis utiliser `Rachid Admin` avec le mot de passe `ER-ADMIN-2026`. Les changements de démonstration sont sauvegardés dans le navigateur via `localStorage`.

## Architecture

- `src/types` : contrats métier partagés (`Product`, `Order`, `Customer`, etc.).
- `src/data` : données réalistes de démonstration uniquement.
- `src/services` : façade de données ; elle isole localStorage et les mocks des écrans. `admin.ts` expose les services d’administration, chacun remplaçable par une future API.
- `src/admin` : shell, écrans et styles strictement dédiés au back-office.
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
