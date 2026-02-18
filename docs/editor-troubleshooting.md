# Editor Troubleshooting (VS Code)

## Symptome: "Je ne peux plus ecrire"
Symptome typique: le clavier semble bloque pour la saisie normale, mais `Delete` fonctionne encore.

## Diagnostic en 10 secondes
1. Regarder la barre d'etat:
- si `OVR` est visible, le mode overtype est actif.
- si `NORMAL`/`VIM` est visible, Vim n'est pas en mode insertion.
2. Verifier le type d'onglet:
- si tu es dans `Diff`, `Search` ou une vue preview, l'edition peut etre limitee.

## Actions rapides
1. `Ctrl+Shift+P` -> `Developer: Reload Window`.
2. `Ctrl+Shift+P` -> `Extensions: Disable All Installed Extensions` (test isolation).
3. Fermer puis rouvrir un vrai fichier source depuis l'explorateur (`app/page.tsx`).

## Reset local non destructif
1. Recharger la fenetre VS Code.
2. Relancer VS Code sans extensions:
```bash
code --disable-extensions
```
3. Tester la saisie sur `app/page.tsx`.
4. Si ca marche, reactiver les extensions une par une pour identifier la cause.

## Cas frequents
- `OVR` active par erreur via la touche `Insert`.
- Extension Vim active en mode normal.
- Focus reste dans un panneau non-editeur.
