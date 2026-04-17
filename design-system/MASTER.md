# Masoda — Design System Master
**Version 1.0 — Audit & Référence** | Avril 2026  
Basé sur le skin actuel (`tokens.css` + `global.css`) + audit UI/UX Pro Max  
Style archétype : **Nature Distilled × Editorial Grid × Storytelling-Driven**

---

## 1. Color System

### Palette primitive (source of truth)

| Token | Hex | Rôle |
|-------|-----|------|
| `--color-bg` | `#F6EFE7` | Background principal — ivoire chaud |
| `--color-bg-light` | `#FFF6EE` | Background alterné clair |
| `--color-bg-warm` | `#F4ECE2` | Background sections intermédiaires |
| `--color-bg-white` | `#FFFAF5` | Surfaces très claires (modals, cards) |
| `--color-accent` | `#FF9B54` | CTA principal — orange solaire |
| `--color-accent-hover` | `#E8873F` | État hover accent |
| `--color-brand` | `#4452C7` | Bleu indigo — ancrage, profondeur |
| `--color-brand-hover` | `#3741A6` | État hover brand |
| `--color-warm` | `#9A5E49` | Brun terracotta — chaleur culturelle |
| `--color-warm-light` | `#C47A55` | Terracotta clair — hover warm |
| `--color-coral` | `#E58E79` | Corail doux — accent secondaire |
| `--color-text` | `#2D3340` | Texte principal — presque noir |
| `--color-text-light` | `#5C6370` | Texte secondaire |
| `--color-text-muted` | `#8A8F99` | Texte désactivé / métadonnées |
| `--color-border` | `#E8DDD2` | Bordures douces |
| `--color-surface` | `#FFFFFF` | Surface card pure |
| `--color-surface-warm` | `#F9F3EC` | Surface card chaude |
| `--color-dark` | `#2D3340` | Sections sombres (footer, CTAs) |
| `--color-dark-surface` | `#3A4250` | Surface dans contexte sombre |

### Usage sémantique

```
Backgrounds  →  bg, bg-light, bg-warm, bg-white (alterner pour le rythme)
CTA primaire →  accent (#FF9B54) — toujours sur fond clair
CTA marque   →  brand (#4452C7) — pour l'ancrage identitaire fort
Chaleur      →  warm/coral — accents culturels, icônes, overlines
Texte        →  text, text-light, text-muted (hiérarchie stricte)
Surfaces     →  surface-warm sur bg ivoire / surface pure sur sections foncées
```

### Règles d'harmonie

- **Ne jamais** mettre `accent` et `brand` côte à côte comme CTA (conflit)
- L'orange `accent` est la seule couleur de bouton CTA sur pages de conversion
- Le `brand` (indigo) est réservé aux mots en italique héro, focus, emphases typographiques
- `warm` et `coral` = touches décoratives (overlines, icônes, accents) — pas de fond plein
- Les fonds sombres (`dark`) sont réservés aux sections CTA banner et footer

---

## 2. Typography Pairings

### Paire actuelle (conserver — excellent choix)

| Rôle | Famille | Poids |
|------|---------|-------|
| Titres & Display | `DM Serif Display` | 400 (normal + italic) |
| Corps & UI | `Manrope` | 400, 500, 600, 700 |

**Pourquoi ce duo fonctionne pour Masoda :**  
DM Serif apporte l'éditorialité et la chaleur organique (courbes humanistes).  
Manrope apporte la clarté contemporaine sans froideur — ses courbes arrondies restent douces.

### Échelle typographique (fluid)

| Classe | Token | Taille | Usage |
|--------|-------|--------|-------|
| `.heading-1` | `clamp(2.25rem, 5vw, 3.75rem)` | H1 hero | Une seule fois par page |
| `.heading-2` | `clamp(1.875rem, 4vw, 3rem)` | H2 section | Titre de section principale |
| `.heading-3` | `clamp(1.5rem, 3vw, 2.25rem)` | H3 sous-section | Nom d'atelier, titre article |
| `.heading-4` | `clamp(1.25rem, 2.5vw, 1.875rem)` | H4 composant | Titre card, CTA banner |
| `.subtitle` | `1.125rem` | Lead text | Paragraphe intro, 1 max par section |
| `.overline` | `0.875rem` | Label catégorie | UPPERCASE + tracking wide |
| body | `1rem` | Texte courant | line-height 1.6 |
| `.card__text` | `0.875rem` | Descriptions cards | line-height 1.6 |

### Règles typographiques

1. **Italique = marque** — `<em>` dans les titres H1 est réservé aux mots-clés identitaires (couleur brand)
2. **Overline avant le H** — toujours afficher une overline colorée avant chaque H2 de section
3. **Maximum 2 tailles de Manrope** dans une même zone de lecture
4. **Pas de bold sur DM Serif** — son expressivité vient de la forme, pas du poids
5. **Line-height serré** (`1.15`) sur les gros titres, `1.6` sur le corps — ne pas mélanger

---

## 3. Spacing Scale

Basé sur une unité de `4px` (`0.25rem`).

| Token | Valeur | Usage typique |
|-------|--------|---------------|
| `--space-1` | `0.25rem / 4px` | Micro-gaps (icon + label) |
| `--space-2` | `0.5rem / 8px` | Gap entre tag et titre |
| `--space-3` | `0.75rem / 12px` | Interligne court (overline → H) |
| `--space-4` | `1rem / 16px` | Gap standard, margin-bottom H |
| `--space-6` | `1.5rem / 24px` | Padding card body, margin subtitle |
| `--space-8` | `2rem / 32px` | Espacement entre éléments de section |
| `--space-10` | `2.5rem / 40px` | Gap grille articles |
| `--space-12` | `3rem / 48px` | Gap hero grid colonnes |
| `--space-16` | `4rem / 64px` | Padding vertical hero mobile |
| `--space-20` | `5rem / 80px` | `section-py` mobile |
| `--space-24` | `6rem / 96px` | `section-py` tablet |
| `--space-32` | `8rem / 128px` | `section-py-lg` desktop |

**Règle clé :** Ne jamais créer de valeurs hors-token. Si une valeur manque, ajouter le token.

---

## 4. Border Radius

| Token | Valeur | Usage |
|-------|--------|-------|
| `--radius-sm` | `0.375rem / 6px` | Tags, badges, petits éléments |
| `--radius-md` | `0.75rem / 12px` | Input, small cards |
| `--radius-lg` | `1rem / 16px` | Cards standard |
| `--radius-xl` | `1.5rem / 24px` | Hero image frame, grandes cards |
| `--radius-full` | `9999px` | Boutons, pills, avatars |

**Philosophie :** L'arrondi est généreux mais pas infantile. On évite le `0px` (trop froid) et on évite `2rem+` sauf cas éditorial spécifique.

---

## 5. Shadows

| Token | Valeur | Usage |
|-------|--------|-------|
| `--shadow-sm` | `0 1px 3px rgba(45,51,64,0.06)` | Cards au repos |
| `--shadow-md` | `0 4px 12px rgba(45,51,64,0.08)` | Hover boutons, modals |
| `--shadow-lg` | `0 8px 30px rgba(45,51,64,0.10)` | Cards hover, drawers |

**Règles :**
- Toujours baser la couleur de shadow sur `--color-dark` avec faible opacité
- Aucun shadow coloré (orange/violet) — Masoda n'est pas SaaS
- Le hover card doit monter (`translateY(-4px)`) + shadow-lg simultanément
- Pas de `inset` shadows (pas de neumorphism)

---

## 6. Button Variants

| Classe | Background | Texte | Usage | Quand utiliser |
|--------|-----------|-------|-------|----------------|
| `.btn--primary` | `accent` `#FF9B54` | `text-on-accent` | CTA principal de page | Réserver un atelier, S'inscrire |
| `.btn--brand` | `brand` `#4452C7` | `text-on-accent` | CTA secondaire fort | Action de navigation forte |
| `.btn--outline` | transparent | `text` | Action secondaire | "Découvrir les ateliers" |
| `.btn--ghost` | none | `accent` | Lien contextuel | "Lire l'article →" |

**Anatomie du bouton :**
```css
padding: var(--space-3) var(--space-8)  /* 12px 32px */
font-size: var(--text-sm)               /* 14px */
font-weight: var(--weight-semibold)     /* 600 */
letter-spacing: var(--tracking-wide)    /* 0.02em */
border-radius: var(--radius-full)       /* pill */
```

**Règles CTA :**
1. **Un seul `.btn--primary`** par section visible (pas deux oranges ensemble)
2. Le ghost arrow (`→`) se déplace de `4px` au hover — ne pas supprimer
3. Les boutons ne changent jamais de couleur de fond au focus — seulement `outline`
4. Taille fixe : jamais `width: 100%` sur desktop, toujours `inline-flex`

---

## 7. Card Variants

### Card standard (articles, journal)
```css
background: --color-surface
border-radius: --radius-lg
box-shadow: --shadow-sm → --shadow-lg (hover)
transform: translateY(-4px) au hover
```
Structure : image (4:3) → body (padding space-6) → tag → titre → texte

### Card atelier (grande, éditoriale)
```css
/* Layout grid: 1fr / 1fr 1fr en desktop */
/* Alternance visuel/contenu via --reverse */
image: aspect-ratio 4:3, border-radius: --radius-xl
background: gradient accent18% → accent06% (tonal doux)
```

### Card dark (boutique, CTA banner)
```css
background: --color-dark
color: --color-text-on-dark
/* Utiliser surface-warm pour inner surfaces */
```

**Anti-patterns cards :**
- Pas de `overflow: visible` sur les cards avec images
- Pas de texte sur fond image sans overlay
- Pas de border colorée (sauf cas éditorial justifié)

---

## 8. Section Rhythm

Séquence recommandée pour la page home (rythme éditorial) :

```
BG ivoire    → Hero          (padding-block: space-16/space-24)
BG ivoire    → Ateliers      (section padding standard)
BG bg-warm   → Wellbeing     (alternance fond)
BG bg-light  → Credibilité   (alternance fond)
BG ivoire    → Journal       (retour fond principal)
BG dark      → Social        (rupture sombre)
BG accent    → CTA Banner    (rupture couleur)
BG dark      → Footer        (clôture sombre)
```

**Règle de rythme :**
- Toujours alterner les fonds entre sections adjacentes
- Maximum 2 sections consécutives avec le même fond
- La section sombre (`dark`) ne doit pas être la première section après le hero
- Un seul fond `dark` consécutif maximum

---

## 9. Image Treatment Rules

**Format et rapport :**
- Hero image frame : `4:5` portrait (focus sur le sujet)
- Cards ateliers : `4:3` paysage
- Journal cards : `4:3` paysage
- Social feed : `1:1` carré

**Style photographique attendu :**
- Lumière naturelle chaude (pas de studio froid)
- Sujets: femmes, mains qui créent, matières naturelles, moments de groupe
- Palette dominante: ocres, tawny, corail, vert olive, matières textiles
- Éviter: images stock génériques, corps parfaits stylisés, blanc clinique

**Traitement technique :**
```css
border-radius: var(--radius-xl)   /* toujours arrondi */
object-fit: cover                  /* pas de distorsion */
/* Optionnel : filtre très léger pour cohérence */
filter: saturate(0.95) brightness(1.02)
```

**Placeholder (état sans image) :**
- Background: `gradient(surface-warm → bg-warm)` 
- Icône: `✦` en `color-accent` à 40% d'opacité
- Jamais de fond gris neutre — rester dans la palette chaude

---

## 10. Iconography Rules

**Système actuel :** Symbols Unicode (`✦`, `✎`, `→`, `✓`, `+`)

**Philosophie :** Masoda n'utilise pas de librairie d'icônes conventionnelle.  
Les symboles Unicode éditoriaux renforcent l'identité artisanale.

**Symboles validés et leur usage :**

| Symbole | Usage | Couleur |
|---------|-------|---------|
| `✦` | Placeholder image, étoile déco | `color-accent` @ 40% |
| `✎` | Journal, écriture | `color-warm` @ 30% |
| `→` | Ghost button, liens | hérite couleur bouton |
| `✓` | Checklist détails atelier | `color-accent` bold |
| `+` / `×` | FAQ toggle (open/close) | `color-accent` |

**Règles :**
1. Ne pas mélanger des icônes SVG d'une librairie avec les symbols Unicode
2. Si des SVG sont introduits, créer un sprite Masoda (style `stroke`, `1.5px`, arrondi)
3. Taille icônes UI : toujours 16px ou 20px (jamais entre les deux)
4. Les icônes décoratives restent à `opacity: 0.3–0.5` — jamais opaques

---

## 11. CTA Hierarchy

```
NIVEAU 1 — Principal (orange, pill)
  → .btn--primary
  → "Réserver un atelier" / "Réserver maintenant"
  → Une seule fois par vue visible
  → Toujours lié à billetweb.fr

NIVEAU 2 — Secondaire (outline, pill)
  → .btn--outline  
  → "Découvrir les ateliers" / "En savoir plus"
  → Accompagne toujours un btn--primary, jamais seul comme CTA principal

NIVEAU 3 — Lien contextuel (ghost + arrow)
  → .btn--ghost
  → "Lire l'article →" / "Voir tous les ateliers →"
  → Dans les cards et sections éditoriales

NIVEAU 4 — Lien navigation (texte)
  → Simple <a> inherit
  → Dans le footer, FAQ, mentions légales
```

**Règle de non-dilution :** Si une section a déjà un `.btn--primary`, ne pas ajouter de `.btn--brand`. Le `brand` (indigo) n'apparaît que si le primary n'est pas présent dans la même zone.

---

## 12. Anti-Patterns à éviter

### Design

| Anti-pattern | Pourquoi | Alternative |
|-------------|---------|-------------|
| Glassmorphism | Trop SaaS, froid, détruit la chaleur | Surfaces chaudes solides avec shadow-sm |
| Brutalism / angles 0px | Contre-identité complète | Maintenir radius-lg / radius-full |
| Gradients SaaS (bleu→violet) | Perd l'identité organique | Gradients mono-teinte ou warm uniquement |
| Typography system-ui / monospace | Tue l'éditorialité | Maintenir DM Serif + Manrope strictement |
| Ombres colorées (glow orange/purple) | Trop tech, trop gaming | Shadows neutres à base dark |
| Fond blanc pur `#FFFFFF` comme bg page | Perd la chaleur ivoire | Garder `--color-bg: #F6EFE7` |
| Photos stock blanches cliniques | Contredit la charte culturelle | Photos authentiques ton chaud |
| Deux boutons primary côte à côte | Dilue l'action principale | Primary + Outline ou Primary seul |
| Overline sans couleur accent | Perd la hiérarchie visuelle | Toujours `color: var(--color-accent)` |
| Font-weight 700+ sur DM Serif | DM Serif n'a qu'un poids — ne pas forcer | Utiliser l'italique pour l'emphase |

### Code

| Anti-pattern | Règle |
|-------------|-------|
| Valeurs hex hardcodées dans les composants | Toujours `var(--token)` |
| `!important` pour corriger un conflit | Réexaminer la spécificité CSS |
| `px` pour les espacements | Utiliser les tokens `--space-*` |
| Media queries avec des valeurs hors-breakpoints | `640px`, `768px`, `1024px` uniquement |

---

## Page Overrides

### HOME — Affinage recommandé

**Hero :**
- Le halo radial (`rgba(255,155,84,0.15)`) est subtil et juste — conserver
- Quand des vraies photos arrivent : image frame doit avoir `overflow: hidden` + `border: 1px solid color-border`
- Ajouter un second halo en `color-brand` à `5%` opacité, positionné en bas-gauche, pour plus de profondeur

**Section ateliers (AteliersSection.astro) :**
- Vérifier que chaque card utilise `.btn--primary` une seule fois par card
- Préférer un fond `bg-warm` pour cette section (alternance)

**Section journal (JournalSection.astro) :**
- Cards journal : le fond placeholder actuel (`linear-gradient(surface-warm → bg-warm)`) est correct
- Dès qu'il y a de vraies images : ajouter `filter: saturate(0.95)` pour l'homogénéité

**CtaBanner :**
- Vérifier que le fond est bien `color-dark` ou `color-accent` (pas d'autre couleur)

---

### ATELIERS — Pas d'override nécessaire

Le rythme actuel (alternance reverse gauche/droite) est excellent éditorialement.  
**Seul point de vigilance :** Quand les photos arrivent, maintenir le `aspect-ratio: 4/3` et `border-radius: var(--radius-xl)`.

**FAQ :** La summary `::after` avec `+` → `×` (rotate 45deg) est un bon pattern — conserver.

---

### JOURNAL — Override éditorial

**Grid actuelle :** `1fr → 2fr → 3fr` — correct pour la density.  
**Override recommandé pour quand le journal sera vivant :**

```css
/* Premier article = featured, prend toute la largeur */
.journal-grid .card:first-child {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

/* Sur mobile : toutes les cards normal */
@media (max-width: 639px) {
  .journal-grid .card:first-child {
    grid-column: auto;
    display: block;
  }
}
```

**CTA newsletter (à introduire) :**
- Avant la section CTA Instagram, prévoir une zone de capture email
- Style : fond `bg-warm`, champ input avec `border: 1px solid color-border` + `border-radius: radius-md`
- Bouton : `.btn--primary` inline

---

## Appendix : Token Quick-Reference

```css
/* Couleurs les plus utilisées */
var(--color-accent)       /* #FF9B54 — CTA */
var(--color-brand)        /* #4452C7 — italique titre, focus */
var(--color-warm)         /* #9A5E49 — overlines culturelles */
var(--color-bg)           /* #F6EFE7 — fond principal */
var(--color-surface-warm) /* #F9F3EC — fond card */
var(--color-text)         /* #2D3340 — texte principal */
var(--color-text-light)   /* #5C6370 — texte secondaire */

/* Espacements les plus utilisés */
var(--space-4)   /* 16px — gap standard */
var(--space-6)   /* 24px — padding card */
var(--space-8)   /* 32px — gap éléments */
var(--space-20)  /* 80px — section mobile */
var(--space-24)  /* 96px — section tablet */

/* Radius les plus utilisés */
var(--radius-lg)   /* 16px — cards */
var(--radius-xl)   /* 24px — images, grandes cards */
var(--radius-full) /* pill — boutons */
```

---

*Design System généré par audit UI/UX Pro Max × identité Masoda existante.*  
*Ne pas modifier la direction stylistique sans valider avec la brand owner.*
