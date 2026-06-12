import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Music, 
  Image as ImageIcon, 
  PenTool, 
  Activity, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  Compass, 
  Dribbble, 
  FlaskConical, 
  Presentation, 
  Code, 
  FileText,
  ChevronDown,
  ChevronRight,
  Info,
  Wand2,
  Copy,
  Check,
  RotateCcw,
  Sliders,
  Sparkle,
  ArrowRight,
  MessageSquare,
  Brain,
  Layout,
  ExternalLink,
  BookMarked,
  Printer,
  Scissors,
  Download,
  Atom,
  Globe,
  Languages,
  Palette
} from "lucide-react";
import { categoriesData } from "./data/promptsData";
import { InputVariables, Exercise, Category } from "./types";

// Dynamic Icon router to render Lucide icons by name securely
const iconMap: Record<string, any> = {
  Music,
  Image: ImageIcon,
  PenTool,
  Activity,
  BookOpen,
  Sparkles,
  HelpCircle,
  Compass,
  Dribbble,
  FlaskConical,
  Presentation,
  Code,
  FileText,
  MessageSquare,
  Brain,
  Layout,
  BookMarked,
  Printer,
  Scissors,
  Download,
  Atom,
  Globe,
  Languages,
  Palette
};

function IconRenderer({ name, className }: { name: string; className?: string }) {
  const IconComponent = iconMap[name] || Sparkles;
  return <IconComponent className={className} />;
}

// Generates high-quality contextual fill-in content for standard school worksheets printable in A4 PDF
const getExercisePlaceholderContent = (
  exerciseId: string,
  exerciseTitle: string,
  theme: string,
  contexte: string,
  ageMin: string,
  ageMax: string,
  duree: string,
  tempsConj: string = "Présent de l'indicatif",
  verbsConj: string = "trier, recycler, finir",
  nbQ: string = "5",
  longTxt: string = "Moyen",
  lvlDiff: string = "Niveau intermédiaire",
  diffOpt: string = "Avec boîte d'aide"
) => {
  const targetTheme = theme || "apprentissage créatif";
  const targetContexte = contexte || "assimiler les notions clés de manière amusante";
  
  // Math - Numération
  if (exerciseId.startsWith("num-")) {
    const qCount = parseInt(nbQ, 10) || 5;
    let items = "";
    if (exerciseId === "num-chiffres-lettres") {
      for (let i = 1; i <= qCount; i++) {
        if (i % 2 === 0) {
          items += `${i}. Écris en lettres le nombre [ ${i * 12} ] sur le thème « ${targetTheme} » :
   __________________________________________________\n\n`;
        } else {
          items += `${i}. Écris en chiffres le nombre [ ${i * 7} dizaines et ${i} unités ] :
   __________________________________________________\n\n`;
        }
      }
    } else if (exerciseId === "num-comparer-ranger") {
      items += `Range les nombres suivants du plus petit au plus grand (ordre croissant) :
   [ ${qCount * 4}, ${qCount * 2}, ${qCount * 9}, ${qCount * 5}, ${qCount * 1} ]
   Réponse : _________________________________________\n\n`;
      items += `Compare ces nombres avec < ou > ou = :\n`;
      for (let i = 1; i <= Math.min(qCount, 5); i++) {
        items += `   -  ${i * 15}  _____  ${i * 12 + 8}\n`;
      }
    } else if (exerciseId === "num-decomposer") {
      for (let i = 1; i <= qCount; i++) {
        const num = i * 115;
        items += `${i}. Décompose le nombre [ ${num} ] (Exemple : 135 = 100 + 30 + 5) :
   ${num} = __________________________________________\n\n`;
      }
    } else { // num-suite-numerique
      for (let i = 1; i <= qCount; i++) {
        const start = i * 10;
        items += `${i}. Complète la chenille magique (compte de 2 en 2) :
   [ ${start} ] ➔ [ ${start + 2} ] ➔ [  ___  ] ➔ [ ${start + 6} ] ➔ [  ___  ]\n\n`;
      }
    }

    return `[FICHE DE MATHÉMATIQUES : ${exerciseTitle.toUpperCase()}]
Thème de l'exercice : « ${targetTheme} » | Difficulté : ${lvlDiff}
Prénom de l'élève : .................... | Date : ....................

Consigne générale : Résous les petites énigmes numériques avec attention !

[NOS EXERCICES PRATIQUES]
${items}
[ZONE ENSEIGNANT - APPRÉCIATION ET CORRIGÉ TYPE]
- Niveau visé : ${ageMin}-${ageMax} ans (${duree} min).
- Corrigé rapide : Vérifier la bonne disposition des dizaines et la propreté du tracé des chiffres.`;
  }

  // Math - Calcul
  if (exerciseId.startsWith("calcul-")) {
    const qCount = parseInt(nbQ, 10) || 5;
    let operations = "";
    if (exerciseId === "calcul-additions") {
      for (let i = 1; i <= qCount; i++) {
        operations += `   ${i * 14} + ${i * 5} = ____________________\n`;
      }
    } else if (exerciseId === "calcul-soustractions") {
      for (let i = 1; i <= qCount; i++) {
        operations += `   ${i * 25} - ${i * 4} = ____________________\n`;
      }
    } else if (exerciseId === "calcul-multiplications") {
      for (let i = 1; i <= qCount; i++) {
        const factor = (i % 9) + 1;
        operations += `   ${factor} x ${i + 1} = ____________________\n`;
      }
    } else if (exerciseId === "calcul-divisions") {
      for (let i = 1; i <= qCount; i++) {
        operations += `   Partage équitablement ${i * 10} plantes de « ${targetTheme} » entre ${i === 1 ? 2 : i} enfants.
   Chaque enfant reçoit : _______ plantes. Solde restant : ______.\n\n`;
      }
    } else if (exerciseId === "calcul-mental") {
      for (let i = 1; i <= qCount; i++) {
        operations += `   Calcul flash ${i} : double de ${i * 3} ➔ ____________________\n`;
      }
    } else if (exerciseId === "calcul-pose") {
      for (let i = 1; i <= Math.min(qCount, 4); i++) {
        operations += `   Opération n°${i} à poser en colonne : [ ${i * 123} + ${i * 45} ]\n`;
        operations += `       +------+------+------+\n`;
        operations += `       |  C   |  D   |  U   |\n`;
        operations += `       +------+------+------+\n`;
        operations += `       |      |      |      |\n`;
        operations += `       |      |      |      |\n`;
        operations += `       +------+------+------+\n`;
        operations += `       |      |      |      |  ➔ Réponse : ________\n`;
        operations += `       +------+------+------+\n\n`;
      }
    } else { // complété
      for (let i = 1; i <= qCount; i++) {
        operations += `   Complète l'opération ${i} :  ${i * 5}  +  [  ___  ]  =  ${i * 5 + 10}\n`;
      }
    }

    return `[FICHE DE MATHÉMATIQUES : ${exerciseTitle.toUpperCase()}]
Thème de calcul : « ${targetTheme} » • Durée : ${duree} min
Aide et boîte d'outils : ${diffOpt}

[OPÉRATIONS PRATIQUES POUR L'ÉLÈVE]
${operations}
✂️ - - - - - - - - - - - - - - - - - - - - - - - - - - ✂️
[PARTIE ENSEIGNANT / CORRECTION CHIFFRÉE]
Toutes les opérations doivent être vérifiées à la calculatrice ou à l'aide des tables de calcul d'école. Niveau : ${lvlDiff}.`;
  }

  // Math - Problèmes
  if (exerciseId.startsWith("problemes-")) {
    const qCount = parseInt(nbQ, 10) || 3;
    let drill = "";
    for (let i = 1; i <= Math.min(qCount, 3); i++) {
      drill += `PROBLÈME N°${i} (Thème : « ${targetTheme} »)
Dans notre forêt d'étude, un petit écureuil rassemble des noisettes pour l'automne. Il en avait déjà ${i * 15} cachées sous un arbre. Il revient avec un sachet contenant ${i * 8} noisettes en plus.
Question : Combien de noisettes possède-t-il au total désormais ?

[Mon raisonnement et mes calculs] :
_______________________________________________________________________________
_______________________________________________________________________________

[Ma phrase-réponse] : L'écureuil possède ____________ noisettes.

`;
    }

    return `[RÉSOLUTION DE PROBLÈMES SUR LE THÈME : ${targetTheme.toUpperCase()}]
Fiche pour élèves de ${ageMin} à ${ageMax} ans | Validée par l'enseignant
Objectif : ${targetContexte}

${drill}
[CORRIGÉ DES PROBLÈMES]
L'opération requise est de type additionnelle :
Problème 1 : ${15} + ${8} = 23 noisettes.
Problème 2 : ${30} + ${16} = 46 noisettes.`;
  }

  // Math - Géométrie
  if (exerciseId.startsWith("geometrie-")) {
    return `[FICHE DE GÉOMÉTRIE : ${exerciseTitle.toUpperCase()}]
Thème de dessin : « ${targetTheme} » | Niveau : ${lvlDiff}

Consigne : Munis-toi de ton crayon bien taillé, de ta règle plate et de tes crayons de couleur.

[CONSIGNES ET DESCRIPTION DU DESSIN GÉOMÉTRIQUE]
1. Modèle d'étude : Dessine un rectangle de 8 cm de longueur sur 4 cm de largeur représentant le panneau de « ${targetTheme} ».
2. Axe de symétrie : Si tu en plies la moitié, les deux parties doivent exactement se superposer sans déborder.
3. Utilise ta règle graduée : Mesure chaque segment avec une précision infime de 1 mm.

[Mon espace de dessin géométrique]
_______________________________________________________________________________
|                                                                             |
|                                                                             |
|                                                                             |
|                                                                             |
|                                                                             |
|                                                                             |
_______________________________________________________________________________

[ZONE DE NOTATION DE L'ENSEIGNANT]
- Respect des dimensions données (longueur, largeur) : [  ] Excellent   [  ] À retravailler
- Utilisation propre des instruments (règle, équerre) : [  ] Très soigné  [  ] Peu soigné`;
  }

  // Math - Grandeurs et mesures
  if (exerciseId.startsWith("mesures-")) {
    return `[GRANDEURS ET MESURES : ${exerciseTitle.toUpperCase()}]
Thème ciblé : « ${targetTheme} » | Durée : ${duree} min

[EXERCICE 1 - LECTURE DES GRANDEURS]
- Écris l'unité correspondante (cm, kg, litre) :
  a) Une grande bouteille de liquide nettoyant pour « ${targetTheme} » contient 2 ________
  b) Un petit insecte forestier mesure environ 4 ________
  c) Le poids d'un sac de compost de classe est de 5 ________

[EXERCICE 2 - ESTIMATIONS RAPIDES]
Estime le contour ou le périmètre d'un carré de côté 4 cm :
Formule mathématique : Périmètre = Côté + Côté + Côté + Côté
Calcul : 4 + 4 + 4 + 4 = ________ cm.

[NOTRE CORRECTION RAPIDE]
Réponses attendues : a) litres, b) cm (ou mm), c) kg. Périmètre : 16 cm.`;
  }

  // Math - Logique
  if (exerciseId.startsWith("logique-")) {
    return `[DÉFI LOGIQUE ET CASSE-TÊTE : ${exerciseTitle.toUpperCase()}]
Thème de réflexion : « ${targetTheme} » | Niveau : ${lvlDiff}
Prénom : .................... | Date : ....................

[ÉPREUVE DE RÉFLEXION LUDIQUE]
Un message top secret circule en classe au sujet de « ${targetTheme} ».
Voici les indices pour retrouver le mot disparu :
- Indice 1 : Il commence par la première lettre de l'alphabet.
- Indice 2 : Il possède exactement 5 lettres.
- Indice 3 : Il est lié au recyclage : A _ _ _ _ .

Mini Sudoku 4x4 (Complète chaque ligne de sorte que 1, 2, 3, 4 apparaissent une fois) :
  -----------------
  | 1 | 2 | 3 | 4 |
  | 3 | 4 | 1 | 2 |
  | 2 | _ | 4 | _ |
  | 4 | _ | 2 | _ |
  -----------------

[MON ESPACE SOLUTIONS]
Réponse de l'énigme : ______________________________

[CORRIGÉ DU MAÎTRE / DE LA MAÎTRESSE]
Mots clues attendus : ARBRE ou APPUY.
Sudoku résolu : Ligne 3: [2 | 1 | 4 | 3], Ligne 4: [4 | 3 | 2 | 1].`;
  }

  // Sciences
  if (exerciseId.startsWith("science-")) {
    const qCount = parseInt(nbQ, 10) || 5;
    let mainBody = "";

    if (exerciseId === "science-schema") {
      mainBody = `[UNITÉ SCIENTIFIQUE : SCHÉMA SYNTHÉTIQUE À LÉGENDER]
Le thème d'étude est : « ${targetTheme} ».
Observe la représentation textuelle ci-dessous et complète les légendes de (1) à (4) :

              ┌───────────────────┐
              │    (1) ____________│  <-- Sommet d'observation
              └─────────┬─────────┘
                        │
              ┌─────────┴─────────┐
              │    (2) ____________│  <-- Zone intermédiaire d'absorption
              └─────────┬─────────┘
                        │
              ┌─────────┴─────────┐
              │    (3) ____________│  <-- Base stable
              └─────────┬─────────┘
                        │
                 ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
                    (4) ___________   <-- Milieu environnant externe

[Boîte d'aide des mots à replacer] :
   écorce  •  noyau  •  atmosphère  •  manteau  •  solide

Insère ta réponse ci-dessous :
(1) : ________________________________________
(2) : ________________________________________
(3) : ________________________________________
(4) : ________________________________________
`;
    } else if (exerciseId === "science-cycle") {
      mainBody = `[UNITÉ SCIENTIFIQUE : LE CYCLE DE VIE ET DE TRANSFORMATION]
Thématique d'apprentissage : « ${targetTheme} ».
L'objectif est de : ${targetContexte}.

Voici les 4 étapes clefs du cycle, présentées entièrement dans le désordre.
Consigne : Écris un numéro de 1 à 4 dans les crochets [ ] pour reconstituer l'ordre réel du cycle !

[  ] Étape A : Dispersion et enfouissement dans l'environnement.
[  ] Étape B : Germination et apparition des premières pousses fraîches.
[  ] Étape C : Croissance rapide de la plante adulte sous l'effet du soleil.
[  ] Étape D : Production de graines et de fruits pour renouveler la vie.

[Mon petit carnet de recherche scientifique]
Raconte en une phrase simple comment tu as deviné la logique de ce cycle naturel :
_______________________________________________________________________________
_______________________________________________________________________________
`;
    } else if (exerciseId === "science-associer") {
      mainBody = `[UNITÉ SCIENTIFIQUE : ASSOCIATION D'IDÉES ET DE MOTS-CLÉS]
Thématique : « ${targetTheme} ».
Consigne : Relie par une flèche plate chaque terme scientifique à sa fonction ou description exacte !

  TERME SCIENTIFIQUE                      FONCTION / DESCRIPTION
  (A) Température     •                • (1) Permet la nutrition par le soleil
  (B) Photosynthèse   •                • (2) Mesure le niveau d'énergie thermique
  (C) Écosystème      •                • (3) Milieu de vie stable et équilibré
  (D) Biodiversité    •                • (4) Richesse et variété des espèces vivantes

Réponses attendues :
  A s'associe avec : __________
  B s'associe avec : __________
  C s'associe avec : __________
  D s'associe avec : __________
`;
    } else if (exerciseId === "science-vrai-faux") {
      mainBody = `[QUIZ SCIENTIFIQUE : VRAI OU FAUX ?]
Sujet d'éveil : « ${targetTheme} » | Niveau : ${lvlDiff}

Coche l'affirmation correcte et lis les explications fantastiques :

1. Affirmation : Le phénomène de « ${targetTheme} » est indispensable à l'équilibre écologique de la Terre.
   [  ] VRAI     [  ] FAUX
   Le secret scientifique : Tout à fait vrai ! Sans cet équilibre, les espèces ne pourraient pas se nourrir et s'adapter convenablement.

2. Affirmation : La lumière du soleil n'influence pas du tout le cycle des végétaux.
   [  ] VRAI     [  ] FAUX
   Le secret scientifique : Faux ! Les plantes ont un besoin vital d'énergie lumineuse pour produire de l'oxygène.

3. Affirmation : Tous les déchets organiques mis dans la nature se décomposent à la même vitesse.
   [  ] VRAI     [  ] FAUX
   Le secret scientifique : Faux ! Certains matériaux de « ${targetTheme} » ont besoin de beaucoup plus d'années de traitement naturel.
`;
    } else if (exerciseId === "science-qcm") {
      mainBody = `[QUESTIONNAIRE SCIENTIFIQUE À CHOIX MULTIPLES - QCM]
Sujet : « ${targetTheme} » | Boîte d'aide : ${diffOpt}

Réponds aux ${Math.min(qCount, 3)} questions scientifiques suivantes :

Question 1 : Comment les scientifiques définissent-ils principalement « ${targetTheme} » ?
   [  ] A. Un phénomène éphémère sans importance
   [  ] B. Une clé de voûte de notre écosystème
   [  ] C. Un mystère totalement impossible à résoudre

Question 2 : Quelle est la source d'énergie principale qui active ce phénomène ?
   [  ] A. L'électricité produite par les usines de la ville
   [  ] B. La lumière et le rayonnement direct du Soleil
   [  ] C. Le mouvement des vagues de l'océan

Question 3 : Comment contribuer à échelle d'enfant à ce grand projet ?
   [  ] A. En évitant le tri et en polluant les jardins de l'école
   [  ] B. En observant, triant et protégeant la nature de proximité
   [  ] C. En passant l'intégralité de sa journée devant un écran d'ordinateur
`;
    } else if (exerciseId === "science-experiences") {
      mainBody = `[ATELIER D'INVESTIGATION : APPRENTI CHERCHEUR]
L'expérience du jour : Analyser « ${targetTheme} » en s'amusant.
Démarche scientifique guidée pour élèves de ${ageMin} à ${ageMax} ans.

1. LE DÉFI : Comment prouver scientifiquement l'influence ou l'existence de ce phénomène ?
2. LA RECHERCHE : Hypothèse formulée par l'élève :
   _______________________________________________________________________________

3. LE MATÉRIEL SÉCURISÉ :
   - Un récipient transparent d'eau tiède
   - Un échantillon de matière thématique lié à « ${targetTheme} »
   - Un carnet de dessin et une loupe

4. LE PROTOCOLE EXPÉRIMENTAL :
   a) Verse délicatement l'échantillon au fond du récipient.
   b) Observe pendant 10 minutes sous une lumière vive et note les changements.
   c) Relève la température finale de l'eau.

5. MES INSCRIPTIONS / CONSTATATIONS :
   Dessine ce que tu as observé et marque une conclusion simple :
   [Espace Dessin Réussite]



`;
    } else { // science-classements
      mainBody = `[ACTIVITÉ DE TAXONOMIE : CLASSER LES ÉLÉMENTS DE LA NATURE]
Tri scientifique sur le thème : « ${targetTheme} »

Consigne de l'exercice :
Voici une liste d'éléments liés à l'environnement : [ Écureuil, Bouteille en plastique, Fleur, Sachet plastique, Chenille, Verre brisé ].
Trie et recopie chacun de ces éléments au bon endroit dans le tableau d'étude ci-dessous :

+-----------------------------------------+-----------------------------------------+
|      CATÉGORIE A : LE MONDE VIVANT      |   CATÉGORIE B : ÉLÉMENTS NON-VIVANTS    |
+-----------------------------------------+-----------------------------------------+
|  1. _________________________________   |  1. _________________________________   |
|  2. _________________________________   |  2. _________________________________   |
|  3. _________________________________   |  3. _________________________________   |
+-----------------------------------------+-----------------------------------------+
`;
    }

    return `[FICHE DE SCIENCES NATURELLES & ÉVEIL SCIENTIFIQUE]
Thème : « ${targetTheme.toUpperCase()} » | Niveau : ${lvlDiff}
Prénom de l'élève : .................... | Date : ....................

Objectif poursuivi : Apprendre à observer, émettre des hypothèses et classer.

${mainBody}
      
✂️ - - - - - - - - - - - - - - - - - - - - - - - - - - ✂️
[PARTIE DE L'ENSEIGNANT - GRILLE D'ÉVALUATION ET SOLUTIONS]
- Démarche d'investigation : [ ] Acquis, [ ] En cours d'acquisition, [ ] Non-acquis.
- Corrigé type : La validation se fait sur la justesse du tri des catégories, l'apprentissage du vocabulaire et la rigueur d'observation.`;
  }

  // Langues étrangères
  if (exerciseId.startsWith("langues-")) {
    let mainBody = "";

    if (exerciseId === "langues-associer") {
      mainBody = `[UNITÉ LINGUISTIQUE : ASSOCIER WORDS AND PICTURES]
Thème d'étude : « ${targetTheme} ».

Consigne : Relie chaque illustration ou description imagée à son mot correct en langue étrangère !

  [🍎 Dessin 1 : Un beau fruit rouge croquant]    •          • (A) Dog (un chien)
  [🐶 Dessin 2 : Un petit compagnon qui aboie]   •          • (B) Apple (une pomme)
  [🚗 Dessin 3 : Un véhicule à quatre roues]      •          • (C) Cat (un chat)
  [🐱 Dessin 4 : Un petit animal qui miaule]     •          • (D) Car (une voiture)

Écris la bonne association ci-dessous (ex : 1-B) :
  1. __________   2. __________   3. __________   4. __________`;
    } else if (exerciseId === "langues-vocabulaire") {
      mainBody = `[BUILD YOUR VOCABULARY : MOTS ET TRADUCTIONS]
Thématique de la leçon : « ${targetTheme} » | Difficulté : ${lvlDiff}

1. LE MINI-DICTIONNAIRE THÉMATIQUE (Vocabulary List) :
   - Welcome! (Bienvenue !)   - Hello! (Bonjour !)
   - Thank you (Merci)         - Friend (Ami)
   - Eco-conscious (Éco-responsable)

2. ATELIER PRATIQUE (Practice Time) :
   - Traduis en français : "Thank you my friendly eco-conscious friend !"
     __________________________________________________________________
   - Traduis dans la langue étrangère : "Bonjour ami"
     __________________________________________________________________`;
    } else if (exerciseId === "langues-trous") {
      mainBody = `[READ AND COMPLETE : EXTRA TEXT WORK]
Thème d'étude : « ${targetTheme} ».

Consigne : Complète le paragraphe çi-dessous à l'aide des mots de la boîte d'aide !

TEXTE À TROUS (Gap-fill passage) :
« Today, we are learning about ___________ (1). It is our favorite ___________ (2) in class. We want to be very ___________ (3) and help protect our beautiful ___________ (4) together ! »

[BOÎTE D'AIDE - WORD BOX] :
  school  •  nature  •  careful  •  topic  •  green

Your answers (Tes réponses) :
  (1) : ____________________   (2) : ____________________
  (3) : ____________________   (4) : ____________________`;
    } else if (exerciseId === "langues-croises") {
      mainBody = `[PLAY AND LEARN : THEMATIC CROSSWORDS]
Mots croisés thématiques : « ${targetTheme} ».

Consigne : Remplis la grille en traduisant ou en devinant les définitions !

         1   2   3   4   5
      ┌───┬───┬───┬───┬───┐
     1│ G │ R │ E │ E │ N │   <-- Couleur de la nature
      ├───┼───┼───┼───┼───┤
     2│   │ U │   │   │   │
      ├───┼───┼───┼───┼───┤
     3│   │ N │   │   │   │
      └───┴───┴───┴───┴───┘

DÉFINITIONS :
- Horizontal 1 : La couleur de la nature en anglais.
- Vertical 2 : L'astre chaud de notre système solaire (Sun).

Solutions de l'élève :
- Horizontal 1 : ____________________
- Vertical 2 : ____________________`;
    } else { // langues-dialogues
      mainBody = `[COMMUNICATION PRACTICE : COMPLETE THE DIALOGUE]
Thématique d'expression : « ${targetTheme} ».

Consigne : Complète la conversation entre John et Alice avec les répliques adaptées !

John : Good morning Alice! How are you today?
Alice : (1) (Dire que ça va très bien, merci) ___________________________________.
John : Are you ready for our school project about "[ ${targetTheme} ]"?
Alice : (2) (Répondre oui avec enthousiasme) ___________________________________.

John : Terrific! Let's get started right away.
Alice : (3) (Dire merci avec politesse) ___________________________________.`;
    }

    return `[FICHE DE LANGUES ÉTRANGÈRES - FOREIGN LANGUAGES]
Thème de séance : « ${targetTheme.toUpperCase()} » | Niveau : ${lvlDiff}
Prénom de l'élève : .................... | Date : ....................

Objectif visé : Enrichir son vocabulaire et maîtriser l'expression courante.

${mainBody}
      
✂️ - - - - - - - - - - - - - - - - - - - - - - - - - - ✂️
[PARTIE DE L'ENSEIGNANT - CORRIGÉ TYPE ET CRITÈRES]
- Compétences d'expression écrite et traduction : [ ] Acquis, [ ] En cours, [ ] Non-acquis.
- Corrigé : Les réponses attendues sont évaluées sur la prononciation locale, l'orthographe correcte des mots appris et la fluidité linguistique.`;
  }

  // Arts & Motricité
  if (exerciseId.startsWith("arts-")) {
    let mainBody = "";

    if (exerciseId === "arts-coloriages") {
      mainBody = `[ATELIER D'ARTS PLASTIQUES : COLORIAGE CRÉATIF ET ÉDUCATIF]
Thème d'éveil : « ${targetTheme} » | Niveau d'aide : ${diffOpt}

PROPOSITION DE SCÈNE D'ARTS :
  Sur toute la feuille s'étend un merveilleux décor naturel illustrant « ${targetTheme} ».
  On y aperçoit des personnages joyeux et des structures d'éveil au premier plan.
  En arrière-plan, de jolies formes douces se dessinent sous des nuages légers.

CONSIGNES DE COLORIAGE ET DESSIN :
1. Colorie tous les éléments principaux en respectant les codes de la nature ou ton imagination débordante.
2. Dessine au feutre fin 3 petits éléments supplémentaires en accord avec « ${targetTheme} » dans le coin droit.
3. Décore joliment la bordure de cette fiche avec de petits motifs répétitifs de ton choix.`;
    } else if (exerciseId === "arts-coloriages-codes") {
      mainBody = `[COLORIAGE CODÉ : APPRENDRE LES FORMES ET LES NUANCES]
Sujet d'étude : « ${targetTheme} ».

GUIDE DES CODES DU DESSIN MYSTÈRE :
  [ ▲ Triangle ] ➔ Colorie en Bleu Ciel        [ ● Cercle ] ➔ Colorie en Jaune d'Or
  [ ■ Carré ]   ➔ Colorie en Vert Printemps   [ ♦ Losange ] ➔ Colorie en Rouge Vif

REPRÉSENTATION DE LA GRILLE ASCII :
       A        B        C        D
  ┌────────┬────────┬────────┬────────┐
 1│   ▲    │   ■    │   ▲    │   ●    │
  ├────────┼────────┼────────┼────────┤
 2│   ■    │   ♦    │   ●    │   ▲    │
  ├────────┼────────┼────────┼────────┤
 3│   ●    │   ▲    │   ■    │   ♦    │
  └────────┴────────┴────────┴────────┘

CONSIGNE : Observe attentivement chaque case et applique la bonne couleur pour faire apparaître l'objet de « ${targetTheme} » !`;
    } else if (exerciseId === "arts-pixel-art") {
      mainBody = `[PIXEL ART : LA GÉOMÉTRIE DU DESSIN AMUSANT]
Thème de Pixel Art : « ${targetTheme} ».

CONSIGNE : Reproduis le modèle ci-dessous sur ta grille quadrillée ou colorie les cases selon les coordonnées !

GUIDE DE COORDONNÉES DES PIXELS :
  - Couleur Noire : B3, B4, B5, C2, C6, D2, D6, E3, E4, E5 (Contours)
  - Couleur Thématique (${targetTheme}) : C3, C4, C5, D3, D4, D5 (Intérieur)

MODÈLE DE RÉFÉRENCE VISUEL :
     1  2  3  4  5  6  7
  A [ ][ ][ ][ ][ ][ ][ ]
  B [ ][ ][■][■][■][ ][ ]
  C [ ][■][x][x][x][■][ ]
  D [ ][■][x][x][x][■][ ]
  E [ ][ ][■][■][■][ ][ ]
  F [ ][ ][ ][ ][ ][ ][ ]`;
    } else if (exerciseId === "arts-decoupage") {
      mainBody = `[ATELIER DÉCOUPAGE : MOTRICITÉ ET CONTRÔLE DU CONTRE-COURANT]
Thème du projet : « ${targetTheme} » pour élèves de ${ageMin} à ${ageMax} ans.

INSTRUCTIONS POUR DÉCOUPER EN TOUTE SÉCURITÉ :
1. Utilise impérativement des ciseaux à bouts ronds.
2. Tiens le papier d'une main et fais pivoter doucement la feuille, pas les ciseaux !
3. Découpe soigneusement en suivant la ligne de pointillés "✂️ - - - - -".

LES PIÈCES À DÉCOUPER ET ASSEMBLER :
  [ Pièce N°1 ] ➔ Le support de fond (Ligne droite)
  [ Pièce N°2 ] ➔ La structure principale représentant « ${targetTheme} » (Lignes courbes)
  [ Pièce N°3 ] ➔ Deux petits ornements décoratifs (Lignes brisées)

COLLAGE : Une fois découpées, colle les pièces N°2 et N°3 sur la zone d'assemblage !`;
    } else if (exerciseId === "arts-pliage") {
      mainBody = `[ORIGAMI PÉDAGOGIQUE : LE PLIAGE PAS À PAS]
Activité manuelle : Réunir art et dextérité autour de « ${targetTheme} ».

MATÉRIEL : Une feuille de papier carrée de couleur, bien plate.

ÉTAPES DE RÉALISATION :
  Étape 1 : Plie la feuille en deux en diagonale pour former un grand triangle, puis déplie.
  Étape 2 : Ramène le coin gauche et le coin droit vers la ligne centrale (pli de l'avion).
  Étape 3 : Retourne la figurine et plie la pointe du bas vers le haut pour créer la base stable.
  Étape 4 : Replie légèrement les pointes de chaque côté pour former les contours de « ${targetTheme} ».
  Étape 5 : Dessine des yeux, des motifs ou décore ton origami selon ton inspiration !`;
    } else if (exerciseId === "arts-dessin-guide") {
      mainBody = `[DESSIN GUIDÉ : J'APPRENDS À DESSINER COMME UN ILLUSTRATEUR]
Sujet d'étude visuelle : « ${targetTheme} ».

SUIS LES 4 ÉTAPES POUR MONTRER TON TALENT :

  [ Étape 1 : Forme globale ]
    Dessine un grand ovale bien centré au milieu de ton carré d'auto-entraînement.

  [ Étape 2 : Éléments de structure ]
    Ajoute deux ronds moyens à l'intérieur pour l'équilibre et une base de support.

  [ Étape 3 : Détails thématiques ]
    Esquisse les attributs caractéristiques de « ${targetTheme} » sous forme de traits souples.

  [ Étape 4 : Finitions et mise au propre ]
    Repasse les contours essentiels au feutre noir et efface les traits de crayon gris.`;
    } else { // arts-graphisme
      mainBody = `[ATELIER DE GRAPHISME ET DE PRÉ-ÉCRITURE]
Thème d'apprentissage : « ${targetTheme} » | Difficulté : ${lvlDiff}

CONSIGNE : Repasse sur les pointillés sans trembler pour aider les éléments à rejoindre leur destination !

LIGNE 1 (Les vagues de la mer) :
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ... . . .
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ... . . .

LIGNE 2 (Les boucles d'écriture) :
  eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ... . . .
  eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee ... . . .

LIGNE 3 (Les créneaux de châteaux) :
  ┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐ ... . . .
  ┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐┌┐ ... . . .`;
    }

    return `[FICHE D'ARTS ET MOTRICITÉ FINE : CRÉATIVITÉ ET DEXTÉRITÉ]
Thème thématique : « ${targetTheme.toUpperCase()} » | Niveau : ${lvlDiff}
Prénom de l'artiste : .................... | Date : ....................

Objectif d'atelier : Développer la coordination des yeux et des mains par des tracés créatifs.

${mainBody}
      
✂️ - - - - - - - - - - - - - - - - - - - - - - - - - - ✂️
[PARTIE DE L'ENSEIGNANT - GRILLE AUTOMATIQUE DE MOTRICITÉ]
- Précision du tracé / découpage : [ ] Excellent, [ ] Satisfaisant, [ ] À encourager.
- Gestion de l'espace graphique :  [ ] Acquis, [ ] En cours d'acquisition.`;
  }

  // Histoire et Géographie
  if (exerciseId.startsWith("hist-") || exerciseId.startsWith("geo-")) {
    let mainBody = "";

    if (exerciseId === "hist-frise") {
      mainBody = `[MON CAHIER D'HISTOIRE : ORDONNER UNE FRISE CHRONOLOGIQUE]
Thème de recherche : « ${targetTheme} ».

Consigne : Voici plusieurs événements importants présentés dans le désordre. Ordonne-les du plus ancien (1) au plus récent (4) sur la frise chronologique !

ÉVÉNEMENTS À CLASSER :
- Événement [A] : L'avènement marquant de la démarche au Moyen-Âge (an 1200).
- Événement [B] : La grande révolution industrielle et les nouvelles machines (an 1850).
- Événement [C] : L'Antiquité et les premières traces de récits découverts (an -500).
- Événement [D] : Notre époque contemporaine et les défis modernes (an 2026).

--- LA FRISE DU TEMPS ---
  [ Antiquité ] ➔ [ Moyen-Âge ] ➔ [ Époque Moderne ] ➔ [ Époque Contemporaine ]
   (1) _______       (2) _______       (3) _______          (4) _______

[Zone de réflexion de l'élève] :
Pourquoi est-il crucial de comprendre le passé d'après toi ?
_______________________________________________________________________________`;
    } else if (exerciseId === "geo-carte") {
      mainBody = `[CAHIER DE GÉOGRAPHIE : COMPLÉTER MA CARTE THÉMATIQUE]
Thème ciblé : « ${targetTheme} ».

Consigne : Observe la carte simplifiée ci-dessous et replace les repères géographiques corrects !

             ┌────────────────────────────────────────────────────────┐
             │       [ Zone (1) : Nord ]                              │
             │                                                        │
             │    Continent (2) _____     ~~~~~~~~                    │
             │                            ~ Océan (3) ~               │
             │                            ~~~~~~~~                    │
             │       [ Zone (4) : Sud ]                               │
             └────────────────────────────────────────────────────────┘

[Mots à disposition dans la boîte à repères] :
  Europe  •  Atlantique  •  Asie  •  Afrique  •  Antarctique

Légende des numéros :
  (1) Zone climatique : ___________________________
  (2) Continent d'étude : ________________________
  (3) Grande étendue d'eau : ____________________
  (4) Zone du pôle : _____________________________`;
    } else if (exerciseId === "hist-relier-date") {
      mainBody = `[CAHIER D'HISTOIRE-GÉOGRAPHIE : RELIER DATE ET ÉVÉNEMENT]
Thème de l'exercice : « ${targetTheme} ».

Consigne : Relie par un trait propre chaque évènement historique à sa date correspondante !

  ÉVÉNEMENT HISTORIQUE                           ANNÉE / PÉRIODE CLÉ
  (A) Antiquité et écriture           •       • (1) Moyen-Âge (an 800)
  (B) Règne de Charlemagne            •       • (2) Époque Contemporaine
  (C) Premier pas sur la Lune         •       • (3) Antiquité (an -3000)
  (D) Révolution Française            •       • (4) Révolution (1789)

Écris tes réponses sous la forme A-3, B-1, etc. :
  _____________________________________________________________`;
    } else if (exerciseId === "hist-personnages") {
      mainBody = `[PORTRAITS D'HISTOIRE : ASSOCIER PERSONNAGES ET FAITS]
Thème : « ${targetTheme} ».

Consigne : Écris la lettre du grand personnage à côté de l'événement ou de l'action qui lui correspond.

PERSONNAGES DE RÉFÉRENCE :
  [A] Jules César                  [B] Léonard de Vinci
  [C] Marie Curie                  [D] Louis XIV

FAITS ET ACCOMPLISSEMENTS :
  [   ] Célèbre Reine ou Roi de France surnommé le Roi-Soleil, qui a fait construire le château de Versailles.
  [   ] Grand général romain de l'Antiquité ayant conquis la Gaule.
  [   ] Scientifique émérite ayant découvert le radium et reçu deux prix Nobel.
  [   ] Artiste et inventeur visionnaire de la Renaissance, peintre de la célèbre Joconde.
  
[Le savais-tu ?] : Léonard de Vinci s'est inspiré du vol des oiseaux pour dessiner des machines volantes incroyables !`;
    } else if (exerciseId === "geo-reperage") {
      mainBody = `[CAHIER DE GÉOGRAPHIE : LE JEU DE L'ORIENTATION EST / OUEST]
Thème principal : « ${targetTheme} ».

Consigne : Utilise la rose des vents ci-dessous pour répondre aux questions d'exploration.

                    ▲ NORD (N)
                    │
   ◄ OUEST (O) ─────┼─────► EST (E)
                    │
                    ▼ SUD (S)

Carte simplifiée des milieux :
  - Au NORD : La haute montagne et les sapins alpestres.
  - À l'EST : L'océan immense et ses grands navires marchands.
  - Au SUD : La plaine écologique et les installations thématiques de « ${targetTheme} ».
  - À l'OUEST : Le grand désert de sable.

RÉPONDS AUX QUESTIONS :
1. Si tu marches vers le soleil couchant (à l'Ouest), que vas-tu traverser ?
   Réponse : __________________________________________________
2. Dans quelle direction d'orientation se situe la plaine écologique ?
   Réponse : __________________________________________________`;
    } else { // hist-geo-questions
      mainBody = `[DOSSIER DOCUMENTAIRE : ANALYSE ET RECHERCHE]
Thème d'étude : « ${targetTheme} » | Niveau : ${lvlDiff}

DOCUMENT D'ÉTUDE : Récit ou témoignage d'exploration
« Depuis des millénaires, les sociétés humaines transforment leur environnement géographique pour bâtir des cités, cultiver la terre et acheminer de l'eau. Dans notre étude sur " ${targetTheme} ", nous remarquons que chaque époque a apporté des innovations précieuses : de l'invention des aqueducs par les Romains jusqu'aux parcs de éco-recyclage modernes. Apprendre l'histoire et la géographie nous aide à devenir des citoyens responsables. »

Mini Lexique :
  - Aqueduc : Canal antique construit pour transporter l'eau sur de longues distances.
  - Éco-recyclage : Action de trier pour donner une seconde vie aux matières.

QUESTIONS SUR LE TEXTE :
1. Quel grand peuple antique est à l'origine de l'invention des "aqueducs" ?
   Réponse : __________________________________________________
2. Cite une innovation moderne mentionnée à la fin du texte :
   Réponse : __________________________________________________
3. Pourquoi est-il utile d'étudier l'Histoire et la Géographie selon le document ?
   Réponse : __________________________________________________`;
    }

    return `[FICHE D'HISTOIRE / GÉOGRAPHIE & ÉVEIL DU CITOYEN]
Thème : « ${targetTheme.toUpperCase()} » | Niveau : ${lvlDiff}
Prénom de l'élève : .................... | Date : ....................

Objectif d'éveil : Acquérir des repères spatio-temporels et comprendre le monde.

${mainBody}
      
✂️ - - - - - - - - - - - - - - - - - - - - - - - - - - ✂️
[PARTIE DE L'ENSEIGNANT - GRILLE D'ÉVALUATION ET SOLUTIONS]
- Repères temporels et géographiques : [ ] Acquis, [ ] En cours d'acquisition, [ ] Non-acquis.
- Corrigé type : La validation s'effectue sur la cohérence historique, le sens de l'orientation ou la restitution documentaire exacte.`;
  }

  if (exerciseId.includes("lecture-comprehension") || exerciseId.includes("reperer-informations") || exerciseId.includes("lecture-consignes")) {
    const qCount = parseInt(nbQ, 10) || 5;
    let questionsText = "";
    for (let i = 1; i <= qCount; i++) {
       questionsText += `\nQuestion ${i} : Rédigez une question de niveau ${lvlDiff} sur le thème "${targetTheme}".\nReponse ${i} : ____________________________________________________________________\n`;
    }

    return `[TEXTE DE DÉPART : L'EXTRAORDINAIRE HISTOIRE DU DU JOUR - LONGUEUR : ${longTxt}]
Il était une fois, dans un magnifique royaume, une quête passionnante au sujet de : « ${targetTheme} ». Les enfants de la classe avaient décidé d'en faire leur grand projet de l'année. Leur objectif était clair : ${targetContexte}. Jour après jour, ils exploraient des livres, dessinaient des schémas et apprenaient à travailler ensemble dans le calme. Grâce à leurs efforts collectifs, toute l'école a pu s'émerveiller et grandir ensemble en découvrant ce beau sujet !

[COMPRÉHENSION DE L'EXERCICE]${questionsText}
[ZONE ENSEIGNANT - SOLUTIONS DU DEVOIR]
Correction type :
- Niveau ciblé : ${lvlDiff}. Explication des ${qCount} questions pour les élèves de ${ageMin} à ${ageMax} ans (Durée : ${duree} min).`;
  }

  if (exerciseId.includes("texte-a-trous") || exerciseId.includes("completer-phrases") || exerciseId.includes("accords")) {
    const qCount = parseInt(nbQ, 10) || 5;
    let drillSteps = "";
    for (let i = 1; i <= qCount; i++) {
      drillSteps += `${i}. Écris la phrase d'application n°${i} sur le sujet « ${targetTheme} » en complétant le mot : _______________.\n`;
    }
    return `Complète les pointillés ci-dessous à l'aide de la boîte à outils juste après le texte ! (${qCount} Éléments à compléter)

[EXERCICE DE FRANÇAIS PRATIQUE - DIFFICULTÉ : ${lvlDiff}]
${drillSteps}
[BOÎTE DE VOCABULAIRE DES ÉLÈVES (${diffOpt})]
mot_clé_1  •  mot_clé_2  •  mot_clé_3  •  mot_clé_4

[ZONE ENSEIGNANT - RAPPORT DE RÉUSSITE]
Le corrigé contient les explications adaptées aux élèves de ${ageMin} à ${ageMax} ans pour l'activité.`;
  }

  if (exerciseId.includes("completer-verbes") || exerciseId.includes("choisir-bon-temps") || exerciseId.includes("temps") || exerciseId.includes("conjugaison")) {
    const verbList = verbsConj.split(",").map(v => v.trim()).filter(v => v.length > 0);
    const verbsToUse = verbList.length > 0 ? verbList : ["trier", "recycler"];
    const qCount = parseInt(nbQ, 10) || 5;
    
    let drillSteps = "";
    for (let i = 1; i <= qCount; i++) {
      const verb = verbsToUse[(i - 1) % verbsToUse.length];
      drillSteps += `${i}. Nous (${verb}) ____________________ ensemble sur le thème de « ${targetTheme} ».\n`;
    }

    return `[ATELIER DE CONJUGAISON - TEMPS : ${tempsConj.toUpperCase()}]
Consigne : Conjugue les verbes entre parenthèses au **${tempsConj}** pour les ${qCount} phrases ci-dessous.

[PHRASES À COMPLÉTER (VERBES : ${verbsToUse.join(", ")})]
${drillSteps}
[ZONE ENSEIGNANT - SOLUTIONS DE CONJUGAISON]
Temps visé : ${tempsConj}.
Les élèves de ${ageMin} à ${ageMax} ans doivent appliquer les terminaisons régulières ou spécifiques pour les verbes suivants : ${verbsToUse.join(", ")}.`;
  }

  if (exerciseId.includes("vrai-faux") || exerciseId.includes("correction-erreurs")) {
    const qCount = parseInt(nbQ, 10) || 4;
    let drillSteps = "";
    for (let i = 1; i <= qCount; i++) {
      drillSteps += `${i}. Affirmation n°${i} : Travailler sur « ${targetTheme} » est excellent pour comprendre notre monde.\n   [  ] VRAI     [  ] FAUX\n   Astuce : Tout à fait ! Cela aide les élèves à : ${targetContexte}.\n\n`;
    }
    return `Observe attentivement chaque ligne, coche [ VRAI ] ou [ FAUX ], puis vérifie ton astuce ! (Option: ${lvlDiff}, ${qCount} Questions)

${drillSteps}
[ZONE ENSEIGNANT - DIRECTIVES PRATIQUES]
Relevez les cahiers et attribuez un point de participation si les ${qCount} questions sont remplies proprement.`;
  }

  if (exerciseId.includes("qcm")) {
    const qCount = parseInt(nbQ, 10) || 5;
    let questionsText = "";
    for (let i = 1; i <= qCount; i++) {
      questionsText += `\nQuestion ${i} : Exemple de question de QCM à choix multiples de niveau ${lvlDiff} ?
   [  ] A) Une proposition secondaire
   [  ] B) La réponse correcte liée au thème : ${targetTheme}
   [  ] C) Une autre proposition alternative\n`;
    }

    return `Coche au crayon l'unique case correcte pour chaque question ! (${qCount} Questions au total)

[QUESTIONNAIRE À CHOIX MULTIPLES (QCM)]${questionsText}
[ZONE ENSEIGNANT - GRILLE DE CORRECTION]
Toutes les réponses correctes renvoient à la bonne connaissance du thème : ${targetTheme}.
Vérifiez que la fiche de l'élève de ${ageMin} à ${ageMax} ans est remplie proprement.`;
  }

  if (exerciseId.includes("ordre") || exerciseId.includes("relier") || exerciseId.includes("associer") || exerciseId.includes("trier")) {
    const qCount = parseInt(nbQ, 10) || 4;
    let colA = "";
    let colB = "";
    for (let i = 1; i <= qCount; i++) {
      colA += `${String.fromCharCode(64 + i)}. Sujet ${i} pour le thème « ${targetTheme} » •\n`;
      colB += `• ${i}. Prédicat d'action ${i} lié à l'objectif de séance.\n`;
    }
    return `Relie chaque début de groupe nominal à sa fin logique ! - Niveau : ${lvlDiff} (${diffOpt}, ${qCount} paires)

[COLONNE DES SUJETS]                              [COLONNE DES GROUPES VERBAUX]
${colA}
${colB}
[CONSIGNE D'EXÉCUTION]
Relie les ${qCount} points de gauche avec ceux de droite de manière logique.

[ZONE ENSEIGNANT - SOLUTION RAPIDE]
Chemins attendus :
Accouplements de A-${String.fromCharCode(64 + qCount)} vers 1-${qCount} de manière logique pour les élèves de ${ageMin} à ${ageMax} ans.`;
  }

  // Fallback universel pour toute autre fiche d'activité (vocabulaire, grammaire, orthographe)
  const qCount = parseInt(nbQ, 10) || 5;
  let questionsText = "";
  for (let i = 1; i <= qCount; i++) {
    questionsText += `${i}. Question d'apprentissage pratique n°${i} sur le sujet « ${targetTheme} » :\n   _______________________________________________________________________________\n\n`;
  }

  return `[CONSIGNE DE L'ACTIVITÉ : ${exerciseTitle}]
Chers enfants, aujourd'hui nous travaillons de manière très ludique sur le thème suivant :
« ${targetTheme} » et nous devons répondre aux ${qCount} exercices pratiques ci-dessous.

L'objectif de cette séance d'école est de : ${targetContexte}.
Option d'aide : ${diffOpt} | Difficulté : ${lvlDiff}

[NOTRE ENQUÊTE COMMENCE !]
${questionsText}
[ZONE ENSEIGNANT - CONSEILS ET CORRIGÉ]
- Cet exercice dure approximativement ${duree} minutes.
- S'assurer que le cartouche de prénom de l'élève en haut à gauche de la feuille A4 PDF est bien rempli.
- Pour des enfants âgés de ${ageMin} à ${ageMax} ans, préférez une lecture collective des consignes de départ.`;
};

export default function App() {
  // Input fields state
  const [inputVariables, setInputVariables] = useState<InputVariables>({
    ageMin: "3",
    ageMax: "6",
    duree: "45",
    theme: "Le tri sélectif et le recyclage des déchets",
    contexte: "sensibiliser les enfants à la protection de l'environnement de façon ludique"
  });

  // Dynamic exercise-specific states
  const [tempsConjugaison, setTempsConjugaison] = useState<string>("Présent de l'indicatif");
  const [verbesConjuguer, setVerbesConjuguer] = useState<string>("trier, recycler, finir");
  const [nbQuestions, setNbQuestions] = useState<string>("5");
  const [longueurTexte, setLongueurTexte] = useState<string>("Moyen (approx. 10 lignes)");
  const [niveauDifficulte, setNiveauDifficulte] = useState<string>("Niveau intermédiaire");
  const [difficulteOption, setDifficulteOption] = useState<string>("Avec boîte d'aide / vocabulaire");
  const [printBlockedError, setPrintBlockedError] = useState<boolean>(false);

  // Navigation states
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);
  const [isFrenchExpanded, setIsFrenchExpanded] = useState<boolean>(false);
  const [isMathExpanded, setIsMathExpanded] = useState<boolean>(false);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

  // UI States
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeTab, setActiveTab] = useState<"text" | "highlight">("text");
  
  // Printable states
  const [workspaceTab, setWorkspaceTab] = useState<"prompt" | "pdf">("prompt");
  const [customExerciseText, setCustomExerciseText] = useState<string>("");
  const [userHasEdited, setUserHasEdited] = useState<boolean>(false);

  // Laisse la partie Texte de l'Exercice vide par défaut à la sélection d'un nouvel exercice
  useEffect(() => {
    if (selectedExercise) {
      setCustomExerciseText("");
      setUserHasEdited(false);
    }
  }, [selectedExercise]);

  // Reset helper
  const handleReset = () => {
    setInputVariables({
      ageMin: "3",
      ageMax: "6",
      duree: "45",
      theme: "Le tri sélectif et le recyclage des déchets",
      contexte: "sensibiliser les enfants à la protection de l'environnement de façon ludique"
    });
    setTempsConjugaison("Présent de l'indicatif");
    setVerbesConjuguer("trier, recycler, finir");
    setNbQuestions("5");
    setLongueurTexte("Moyen (approx. 10 lignes)");
    setNiveauDifficulte("Niveau intermédiaire");
    setDifficulteOption("Avec boîte d'aide / vocabulaire");
    setPrintBlockedError(false);
    setUserHasEdited(false);
  };

  // Handle PDF printed outputs safely, managing iframe security limits
  const handlePrintPDF = () => {
    try {
      window.print();
    } catch (err) {
      console.warn("L'impression directe par l'iFrame a été restreinte", err);
      setPrintBlockedError(true);
    }
  };

  // Construct a beautifully formatted Microsoft Word/Google Docs compliant .doc asset directly
  const handleExportDocs = () => {
    if (!selectedExercise) return;
    const isMath = selectedExercise.id.startsWith("num-") ||
                   selectedExercise.id.startsWith("calcul-") ||
                   selectedExercise.id.startsWith("problemes-") ||
                   selectedExercise.id.startsWith("geometrie-") ||
                   selectedExercise.id.startsWith("mesures-") ||
                   selectedExercise.id.startsWith("logique-");
    const isScience = selectedExercise.id.startsWith("science-");
    const isHistGeo = selectedExercise.id.startsWith("hist-") || selectedExercise.id.startsWith("geo-");
    const isLangues = selectedExercise.id.startsWith("langues-");
    const isArts = selectedExercise.id.startsWith("arts-");
    const subjectLabel = isMath ? "Mathématiques" : isScience ? "Sciences" : isHistGeo ? "Histoire-Géographie" : isLangues ? "Langues Étrangères" : isArts ? "Arts et Motricité" : "Français";

    const contentHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <title>${selectedExercise.title}</title>
        <style>
          @page Section1 { size: 595.3pt 841.9pt; margin: 72.0pt 72.0pt 72.0pt 72.0pt; mso-header-margin: 36.0pt; mso-footer-margin: 36.0pt; }
          div.Section1 { page: Section1; }
          body { font-family: "Arial", sans-serif; font-size: 11pt; line-height: 1.6; color: #1e293b; }
          h1 { font-size: 20pt; font-weight: bold; color: #1e3a8a; margin-bottom: 5px; text-transform: uppercase; }
          .header-sub { font-size: 10pt; color: #64748b; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
          .student-box { border: 2px solid #0f172a; padding: 15px; margin-bottom: 25px; font-size: 10pt; background-color: #f8fafc; font-weight: bold; }
          .content-pre { white-space: pre-wrap; font-size: 11pt; line-height: 1.6; font-family: "Arial", sans-serif; }
          .footer { border-top: 1px solid #e2e8f0; padding-top: 10px; margin-top: 40px; font-size: 8pt; color: #94a3b8; text-align: right; }
        </style>
      </head>
      <body>
        <div class="Section1">
          <div class="student-box">
             PRÉNOM : .................... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; NOM : .................... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DATE : .................... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CLASSE : ....................
          </div>
          <h1>${selectedExercise.title}</h1>
          <div class="header-sub">
            <strong>Thème :</strong> ${inputVariables.theme || "Sujet personnalisé"} | 
            <strong>Objectif :</strong> ${inputVariables.contexte || "S'exercer de manière autonome"} | 
            <strong>Durée :</strong> ${inputVariables.duree} min | 
            <strong>Niveau :</strong> ${inputVariables.ageMin}-${inputVariables.ageMax} ans
          </div>
          <div class="content-pre">${customExerciseText.replace(/\n/g, '<br/>')}</div>
          <div class="footer">Fiche scolaire A4 de ${subjectLabel}. Réf: ${selectedExercise.id.substring(0, 5).toUpperCase()} - Généré via l'IA</div>
        </div>
      </body>
      </html>
    `;
    const blob = new Blob(['\ufeff' + contentHtml], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${selectedExercise.title.replace(/\s+/g, "_")}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Supports layout instructions specifying document print and export compatibility (PDF, Word, Docs, Writer)
  const getCompleteTemplate = (rawTemplate: string) => {
    let optionDirectives = "";

    // Append exercise-specific options if an exercise is loaded
    if (selectedExercise) {
      optionDirectives += `\n- **STRUCTURE ET NOMBRE DE QUESTIONS :** L'exercice principal doit concevoir exactement **"${nbQuestions} questions"** (ou phrases/consignes distinctes/exercices pratiques) pour tester l'élève de manière approfondie et claire.`;

      if (selectedExercise.id.includes("conjugaison") || selectedExercise.id.includes("verbe") || selectedExercise.id.includes("temps")) {
        optionDirectives += `\n- **ZONES DE CONJUGAISON :** L'exercice de conjugaison doit se focaliser sur le temps : **"${tempsConjugaison}"**. De plus, veille à y faire figurer prioritairement les verbes à conjuguer suivants : **"${verbesConjuguer}"**.`;
      }
      
      if (selectedExercise.id.includes("qcm") || selectedExercise.id.includes("comprehension") || selectedExercise.id.includes("vrai") || selectedExercise.id.includes("lecture") || selectedExercise.id.includes("info") || selectedExercise.id.includes("questions")) {
        optionDirectives += `\n- **LONGUEUR DU TEXTE :** Le texte d'accompagnement de lecture pour la compréhension doit être de longueur **"${longueurTexte}"**.`;
      }

      if (
        selectedExercise.id.includes("grammaire") || 
        selectedExercise.id.includes("orthographe") || 
        selectedExercise.id.includes("vocabulaire") ||
        selectedExercise.id.startsWith("num-") ||
        selectedExercise.id.startsWith("calcul-") ||
        selectedExercise.id.startsWith("problemes-") ||
        selectedExercise.id.startsWith("geometrie-") ||
        selectedExercise.id.startsWith("mesures-") ||
        selectedExercise.id.startsWith("logique-") ||
        selectedExercise.id.startsWith("science-") ||
        selectedExercise.id.startsWith("hist-") ||
        selectedExercise.id.startsWith("geo-") ||
        selectedExercise.id.startsWith("langues-") ||
        selectedExercise.id.startsWith("arts-")
      ) {
        optionDirectives += `\n- **NIVEAU ET COMPOSITION :** L'exercice doit correspondre à une difficulté de type **"${niveauDifficulte}"** (avec le niveau d'aide : **"${difficulteOption}"**).`;
      }
    }

    return `${rawTemplate}${optionDirectives}

---
⚠️ EXIGENCE DE FORMAT ET D'IMPRESSION (PDF, GOOGLE DOCS, WORD / DOCX) :
Pour que cet exercice soit directement propre, professionnel et exploitable à l'impression physique A4 ou à l'exportation (écolier PDF, Google Docs ou Microsoft Word / .docx) :
1. Ajoute un cartouche d'école soigné au tout début pour que l'élève puisse inscrire ses informations en classe :
   Prénom : ....................  Nom : ....................  Date : ....................  Classe : ....................
2. Indique un grand titre principal clair pour l'exercice, incluant le thème d’étude ainsi que la durée estimée de l'activité.
3. Structure la mise en page de manière très aérée en insérant des lignes de pointillés bien visibles (ex: pour que les élèves écrivent leurs réponses : "__________________________________________________").
4. Formate le texte pour qu'il s'intègre parfaitement dans les dimensions d'une feuille A4 classique sans débordement de page inutile.
5. Sépare de façon distincte la fiche de travail de l'élève et la zone de correction destinée à l'enseignant. Utilise une ligne de séparation avec un pictogramme de ciseaux pour indiquer la découpe (ex : "✂️ - - - - - - - - - - - - - - - - - - - - - - - - - - ✂️"). Le corrigé doit se situer à la fin pour pouvoir être retiré à l'impression.
6. Utilise un formatage Markdown standard simple et épuré (puces, tirets, séparateurs), garantissant une copie parfaite et sans perte de style lors du transfert ou du copier-coller sur un document de traitement de texte (Word, Docs, Writer).`;
  };

  // Dynamically replaces variables in the raw prompt text
  const getRenderedTemplate = (template: string) => {
    const fullTemplate = getCompleteTemplate(template);
    return fullTemplate
      .replace(/\[ÂGE_MIN\]/g, inputVariables.ageMin || "3")
      .replace(/\[ÂGE_MAX\]/g, inputVariables.ageMax || "6")
      .replace(/\[DUREE\]/g, inputVariables.duree || "45")
      .replace(/\[THEME\]/g, inputVariables.theme || "le thème souhaité")
      .replace(/\[CONTEXTE\]/g, inputVariables.contexte || "l'apprentissage de manière ludique");
  };

  // Helper to highlight variables in beautiful colored bubbles inside the visual preview text
  const getHighlightedPreview = (template: string) => {
    const fullTemplate = getCompleteTemplate(template);
    const parts = fullTemplate.split(/(\[ÂGE_MIN\]|\[ÂGE_MAX\]|\[DUREE\]|\[THEME\]|\[CONTEXTE\])/g);
    return parts.map((part, index) => {
      if (part === "[ÂGE_MIN]") {
        return (
          <span key={index} className="inline-block px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-800 font-bold border border-slate-200">
            {inputVariables.ageMin || "3"}
          </span>
        );
      }
      if (part === "[ÂGE_MAX]") {
        return (
          <span key={index} className="inline-block px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-800 font-bold border border-slate-200">
            {inputVariables.ageMax || "6"}
          </span>
        );
      }
      if (part === "[DUREE]") {
        return (
          <span key={index} className="inline-block px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold border border-emerald-100">
            {inputVariables.duree || "45"} min
          </span>
        );
      }
      if (part === "[THEME]") {
        return (
          <span key={index} className="inline-block px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-bold border border-indigo-100">
            {inputVariables.theme || "le thème souhaité"}
          </span>
        );
      }
      if (part === "[CONTEXTE]") {
        return (
          <span key={index} className="inline-block px-1.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 font-bold border border-indigo-100">
            {inputVariables.contexte || "l'apprentissage de manière ludique"}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Copy handler
  const handleCopy = () => {
    if (!selectedExercise) return;
    const finalPrompt = getRenderedTemplate(selectedExercise.template);
    
    // Fallback copy to clipboard
    const textArea = document.createElement("textarea");
    textArea.value = finalPrompt;
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
      setShowToast(true);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error("Failed to copy text", err);
    }
    document.body.removeChild(textArea);
  };

  const isFrenchSubcategory = (catId: string) => {
    return ["lecture", "grammaire", "conjugaison", "orthographe", "vocabulaire"].includes(catId);
  };

  const isMathSubcategory = (catId: string) => {
    return ["num", "calcul", "problemes", "geometrie", "mesures", "logique"].includes(catId);
  };

  // Auto-expand category containing the selected exercise if it gets clicked
  const handleSelectExercise = (exercise: Exercise, catId: string) => {
    setSelectedExercise(exercise);
    if (isFrenchSubcategory(catId)) {
      setIsFrenchExpanded(true);
      setExpandedCategoryId(catId);
    } else if (isMathSubcategory(catId)) {
      setIsMathExpanded(true);
      setExpandedCategoryId(catId);
    } else {
      setExpandedCategoryId(catId);
    }
  };

  const toggleCategory = (catId: string) => {
    if (expandedCategoryId === catId) {
      setExpandedCategoryId(null); // Accordion collapse
    } else {
      setExpandedCategoryId(catId); // Accordion expand
    }
  };

  return (
    <>
      <div className="print:hidden w-full min-h-screen bg-[#F8FAFC] py-6 px-4 md:px-8 flex flex-col items-center justify-start text-slate-800 font-sans antialiased">
      
      {/* Container Principal */}
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col min-h-[85vh]">
        
        {/* En-tête de l'application - Clean Minimalism */}
        <header className="bg-white border-b border-slate-200 p-6 md:p-8 text-slate-900 relative">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest block">
                CONCEPTEUR PÉDAGOGIQUE
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 font-comfortaa">
                Générateur d'Ateliers Éducatifs
              </h1>
              <p className="text-sm text-slate-500 max-w-2xl leading-relaxed mt-1">
                Configurez vos paramètres fondamentaux de cours. Sélectionnez ensuite une catégorie à gauche pour charger les prompts IA associés.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-xl text-left md:text-right shadow-2xs shrink-0 self-start md:self-auto">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Capacité IA</span>
              <span className="text-xs font-bold text-slate-700 mt-0.5 block flex items-center gap-1.5 justify-end">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span> 14 Modèles actifs
              </span>
            </div>
          </div>
        </header>

        {/* Section 1 : Formulaire de Personnalisation (Auto-remplissage) */}
        <section className="bg-slate-50/50 border-b border-slate-200 p-6 md:p-8 relative">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shadow-xs">1</div>
              <div>
                <h2 className="text-sm md:text-base font-bold text-slate-800 font-comfortaa">Paramètres Généraux de l'Atelier</h2>
                <p className="text-xs text-slate-500">Ces valeurs s'injectent automatiquement et en temps réel dans tous les prompts.</p>
              </div>
            </div>
            <button 
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-all shadow-2xs hover:shadow-xs active:scale-95 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Réinitialiser</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Âge Minimum */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Âge Minimum</label>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  min="2" 
                  max="18" 
                  value={inputVariables.ageMin} 
                  onChange={(e) => setInputVariables({ ...inputVariables, ageMin: e.target.value })}
                  className="w-full bg-transparent font-bold text-sm text-slate-800 outline-none focus:ring-0 select-all cursor-pointer"
                />
                <span className="text-xs font-semibold text-slate-400">ans</span>
              </div>
            </div>

            {/* Âge Maximum */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Âge Maximum</label>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  min="2" 
                  max="18" 
                  value={inputVariables.ageMax} 
                  onChange={(e) => setInputVariables({ ...inputVariables, ageMax: e.target.value })}
                  className="w-full bg-transparent font-bold text-sm text-slate-800 outline-none focus:ring-0 select-all cursor-pointer"
                />
                <span className="text-xs font-semibold text-slate-400">ans</span>
              </div>
            </div>

            {/* Durée de l'activité */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Durée Prévue</label>
              <div className="flex items-center gap-2">
                <input 
                  type="number" 
                  min="5" 
                  max="300" 
                  step="5"
                  value={inputVariables.duree} 
                  onChange={(e) => setInputVariables({ ...inputVariables, duree: e.target.value })}
                  className="w-full bg-transparent font-bold text-sm text-slate-800 outline-none focus:ring-0 select-all cursor-pointer"
                />
                <span className="text-xs font-semibold text-slate-400">minutes</span>
              </div>
            </div>

            {/* Thème principal */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between sm:col-span-1">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Sujet / Thème principal</label>
              <input 
                type="text" 
                value={inputVariables.theme} 
                onChange={(e) => setInputVariables({ ...inputVariables, theme: e.target.value })}
                placeholder="Ex. Le système solaire"
                className="w-full bg-transparent font-semibold text-xs text-slate-800 outline-none focus:ring-0"
              />
            </div>

            {/* Objectif principal */}
            <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between sm:col-span-1">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Objectif de l'atelier</label>
              <input 
                type="text" 
                value={inputVariables.contexte} 
                onChange={(e) => setInputVariables({ ...inputVariables, contexte: e.target.value })}
                placeholder="Ex. sensibiliser au recyclage"
                className="w-full bg-transparent font-semibold text-xs text-slate-800 outline-none focus:ring-0"
              />
            </div>

          </div>

          {/* Options contextuels spécifiques à l'exercice */}
          {selectedExercise && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-6 border-t border-slate-200"
            >
              <span className="text-[11px] font-extrabold text-indigo-600 uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Sparkle className="h-3.5 w-3.5 animate-pulse text-indigo-500" />
                Options spécifiques : {selectedExercise.title}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Nombre de questions: visible pour ABSOLUMENT TOUS les types d'exercices */}
                <div className="bg-white p-3 rounded-xl border border-[#EEF2FF] shadow-2xs flex flex-col justify-between">
                  <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Nombre de questions</label>
                  <select 
                    value={nbQuestions}
                    onChange={(e) => setNbQuestions(e.target.value)}
                    className="w-full bg-transparent font-semibold text-xs text-slate-700 outline-none border-none py-1 cursor-pointer focus:ring-0"
                  >
                    <option value="3">3 questions / paires</option>
                    <option value="4">4 questions / paires</option>
                    <option value="5">5 questions / paires</option>
                    <option value="8">8 questions / paires</option>
                    <option value="10">10 questions / paires</option>
                  </select>
                </div>

                {/* Option Set A: Conjugaison specific */}
                {(selectedExercise.id.includes("conjugaison") || selectedExercise.id.includes("verbe") || selectedExercise.id.includes("temps")) && (
                  <>
                    <div className="bg-white p-3 rounded-xl border border-[#EEF2FF] shadow-2xs flex flex-col justify-between">
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Temps à travailler</label>
                      <select 
                        value={tempsConjugaison}
                        onChange={(e) => setTempsConjugaison(e.target.value)}
                        className="w-full bg-transparent font-semibold text-xs text-slate-700 outline-none border-none py-1 cursor-pointer focus:ring-0"
                      >
                        <option value="Présent de l'indicatif">Présent de l'indicatif</option>
                        <option value="Futur simple">Futur simple</option>
                        <option value="Imparfait">Imparfait</option>
                        <option value="Passé composé">Passé composé</option>
                        <option value="Passé simple">Passé simple</option>
                        <option value="Conditionnel présent">Conditionnel présent</option>
                      </select>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-[#EEF2FF] shadow-2xs flex flex-col justify-between sm:col-span-2">
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Verbes ciblés (séparés par des virgules)</label>
                      <input 
                        type="text"
                        value={verbesConjuguer}
                        onChange={(e) => setVerbesConjuguer(e.target.value)}
                        placeholder="ex: trier, recycler, chanter, grandir"
                        className="w-full bg-transparent font-semibold text-xs text-slate-700 outline-none py-1 focus:ring-[#EEF2FF] focus:border-indigo-500"
                      />
                    </div>
                  </>
                )}

                {/* Option Set B: QCM, Questionnaire, or Reading-comprehension specific */}
                {(selectedExercise.id.includes("qcm") || selectedExercise.id.includes("comprehension") || selectedExercise.id.includes("vrai") || selectedExercise.id.includes("lecture") || selectedExercise.id.includes("info") || selectedExercise.id.includes("questions")) && (
                  <>
                    <div className="bg-white p-3 rounded-xl border border-[#EEF2FF] shadow-2xs flex flex-col justify-between">
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Longueur du texte de départ</label>
                      <select 
                        value={longueurTexte}
                        onChange={(e) => setLongueurTexte(e.target.value)}
                        className="w-full bg-transparent font-semibold text-xs text-slate-700 outline-none border-none py-1 cursor-pointer focus:ring-0"
                      >
                        <option value="Court (approx. 5 lignes)">Court (approx. 5 lignes)</option>
                        <option value="Moyen (approx. 10 lignes)">Moyen (approx. 10 lignes)</option>
                        <option value="Détaillé (approx. 15 lignes)">Détaillé (approx. 15 lignes)</option>
                      </select>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-[#EEF2FF] shadow-2xs flex flex-col justify-between sm:col-span-2">
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Difficulté / Type d’évaluation</label>
                      <select 
                        value={niveauDifficulte}
                        onChange={(e) => setNiveauDifficulte(e.target.value)}
                        className="w-full bg-transparent font-semibold text-xs text-slate-700 outline-none border-none py-1 cursor-pointer focus:ring-0"
                      >
                        <option value="Niveau débutant/guidé">Compréhension globale (Explicite)</option>
                        <option value="Niveau intermédiaire">Analyse fine (Implicite / Interprétation)</option>
                        <option value="Niveau avancé / défi">Mixte (Explicite & Implicite)</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Option Set C: Orthographe, Grammaire, Vocabulaire, or Other exercises */}
                {!(selectedExercise.id.includes("conjugaison") || selectedExercise.id.includes("verbe") || selectedExercise.id.includes("temps")) &&
                  !(selectedExercise.id.includes("qcm") || selectedExercise.id.includes("comprehension") || selectedExercise.id.includes("vrai") || selectedExercise.id.includes("lecture") || selectedExercise.id.includes("info") || selectedExercise.id.includes("questions")) && (
                  <>
                    <div className="bg-white p-3 rounded-xl border border-[#EEF2FF] shadow-2xs flex flex-col justify-between">
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-sans">Difficulté générale</label>
                      <select 
                        value={niveauDifficulte}
                        onChange={(e) => setNiveauDifficulte(e.target.value)}
                        className="w-full bg-transparent font-semibold text-xs text-slate-700 outline-none border-none py-1 cursor-pointer focus:ring-0"
                      >
                        <option value="Niveau débutant/guidé font-sans">Facile / Guidé</option>
                        <option value="Niveau intermédiaire font-sans">Intermédiaire</option>
                        <option value="Niveau avancé / défi font-sans">Avancé (Défi autonome)</option>
                      </select>
                    </div>

                    <div className="bg-white p-3 rounded-xl border border-[#EEF2FF] shadow-2xs flex flex-col justify-between sm:col-span-2">
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-1">Niveau d'aide & Boîte à outils</label>
                      <select 
                        value={difficulteOption}
                        onChange={(e) => setDifficulteOption(e.target.value)}
                        className="w-full bg-transparent font-semibold text-xs text-slate-700 outline-none border-none py-1 cursor-pointer"
                      >
                        <option value="Avec boîte d'aide / vocabulaire">Avec boîte de vocabulaire d'aide complète</option>
                        <option value="Avec indices légers">Avec simples indices d'application (règles)</option>
                        <option value="Sans aide">Sans aucune aide (Évaluation classique)</option>
                      </select>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </section>

        {/* Section 2 : Menu Latéral Catégorisé & Affichage Workspace */}
        <div className="flex flex-col lg:flex-row flex-grow">
          
          {/* Sidebar Menu - Accordions */}
          <nav className="w-full lg:w-80 bg-slate-50/35 border-r border-slate-200 flex flex-col p-4 md:p-6 shrink-0 gap-3">
            
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-1">
              <Sliders className="h-3 w-3 text-indigo-500" />
              <span>Menu des Catégories</span>
            </div>

            {/* 1. Grande Catégorie : Français */}
            {(() => {
              const frenchCats = categoriesData.filter(cat => 
                ["lecture", "grammaire", "conjugaison", "orthographe", "vocabulaire"].includes(cat.id)
              );
              // Total exercises in French for display
              const totalFrenchExs = frenchCats.reduce((acc, cat) => acc + cat.exercises.length, 0);

              return (
                <div className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition-all duration-200">
                  {/* French Great Header */}
                  <button
                    onClick={() => setIsFrenchExpanded(!isFrenchExpanded)}
                    className={`w-full px-4 py-3.5 flex items-center justify-between text-left transition-colors hover:bg-slate-50/80 active:bg-slate-50 relative group cursor-pointer ${
                      isFrenchExpanded ? "border-b border-slate-100 bg-indigo-50/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl shrink-0 select-none">🇫🇷</span>
                      <div className="flex flex-col">
                        <span className="font-extrabold text-xs text-indigo-950 font-comfortaa leading-none">
                          Français
                        </span>
                        <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                          {frenchCats.length} sous-catégories · {totalFrenchExs} exercices
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 ml-2">
                      {isFrenchExpanded ? (
                        <ChevronDown className="h-4 w-4 text-indigo-500 group-hover:text-indigo-600 transition-transform" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-transform" />
                      )}
                    </div>
                  </button>

                  {/* French Subcategories Accordion with Animation */}
                  <AnimatePresence initial={false}>
                    {isFrenchExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="bg-slate-50/10 overflow-hidden"
                      >
                        <div className="p-2 flex flex-col gap-2 bg-slate-50/30">
                          {frenchCats.map((subCategory) => {
                            const isSubExpanded = expandedCategoryId === subCategory.id;
                            
                            return (
                              <div key={subCategory.id} className="flex flex-col rounded-lg border border-slate-100 bg-white shadow-3xs overflow-hidden transition-all duration-200">
                                
                                {/* Subcategory Header */}
                                <button
                                  onClick={() => toggleCategory(subCategory.id)}
                                  className={`w-full px-3 py-2 flex items-center justify-between text-left transition-colors hover:bg-slate-50/80 active:bg-slate-50 cursor-pointer ${
                                    isSubExpanded ? "border-b border-slate-100 bg-slate-50/50" : ""
                                  }`}
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span className="text-sm shrink-0 select-none">
                                      {subCategory.title.split(" ")[0]}
                                    </span>
                                    <span className="font-bold text-[11px] text-slate-700 font-comfortaa leading-none truncate">
                                      {subCategory.title.substring(subCategory.title.indexOf(" ") + 1)}
                                    </span>
                                  </div>
                                  
                                  <div className="flex items-center gap-1 ml-2 shrink-0">
                                    <span className="text-[9px] text-slate-400 font-semibold bg-slate-100 px-1.5 py-0.5 rounded-full">
                                      {subCategory.exercises.length}
                                    </span>
                                    {isSubExpanded ? (
                                      <ChevronDown className="h-3 w-3 text-slate-400" />
                                    ) : (
                                      <ChevronRight className="h-3 w-3 text-slate-400" />
                                    )}
                                  </div>
                                </button>

                                {/* Exercises List under Subcategory */}
                                <AnimatePresence initial={false}>
                                  {isSubExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="bg-slate-50/40 overflow-hidden"
                                    >
                                      <div className="p-1 flex flex-col gap-0.5">
                                        {subCategory.exercises.map((exercise) => {
                                          const isSelected = selectedExercise?.id === exercise.id;
                                          return (
                                            <button
                                              key={exercise.id}
                                              onClick={() => handleSelectExercise(exercise, subCategory.id)}
                                              className={`w-full text-left px-2.5 py-2 transition-all text-xs font-semibold flex items-center justify-between gap-2 group/item cursor-pointer ${
                                                isSelected
                                                  ? "bg-[#EEF2FF] border-l-4 border-[#4F46E5] text-[#4F46E5] rounded-r-md rounded-l-none font-bold shadow-3xs"
                                                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/60 border-l-4 border-transparent hover:border-slate-300 rounded-md"
                                              }`}
                                            >
                                              <div className="flex items-center gap-2 min-w-0">
                                                <div className={`p-0.5 rounded-md shrink-0 ${isSelected ? "text-[#4F46E5]" : "text-slate-400"}`}>
                                                  <IconRenderer name={exercise.iconName} className="h-3.5 w-3.5" />
                                                </div>
                                                <span className="truncate">{exercise.title}</span>
                                              </div>
                                            </button>
                                          );
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })()}

            {/* 2. Grande Catégorie : Mathématiques */}
            {(() => {
              const mathCats = categoriesData.filter(cat => 
                ["num", "calcul", "problemes", "geometrie", "mesures", "logique"].includes(cat.id)
              );
              // Total exercises in Math for display
              const totalMathExs = mathCats.reduce((acc, cat) => acc + cat.exercises.length, 0);

              return (
                <div className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition-all duration-200">
                  {/* Math Great Header */}
                  <button
                    onClick={() => setIsMathExpanded(!isMathExpanded)}
                    className={`w-full px-4 py-3.5 flex items-center justify-between text-left transition-colors hover:bg-slate-50/80 active:bg-slate-50 relative group cursor-pointer ${
                      isMathExpanded ? "border-b border-slate-100 bg-indigo-50/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl shrink-0 select-none">🧮</span>
                      <div className="flex flex-col">
                        <span className="font-extrabold text-xs text-indigo-950 font-comfortaa leading-none">
                          Mathématiques
                        </span>
                        <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                          {mathCats.length} sous-catégories · {totalMathExs} exercices
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 ml-2">
                      {isMathExpanded ? (
                        <ChevronDown className="h-4 w-4 text-indigo-500 group-hover:text-indigo-600 transition-transform" />
                       ) : (
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-transform" />
                      )}
                    </div>
                  </button>

                  {/* Math Subcategories Accordion with Animation */}
                  <AnimatePresence initial={false}>
                    {isMathExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="bg-slate-50/10 overflow-hidden"
                      >
                        <div className="p-2 flex flex-col gap-2 bg-slate-50/30">
                          {mathCats.map((subCategory) => {
                            const isSubExpanded = expandedCategoryId === subCategory.id;
                            
                            return (
                              <div key={subCategory.id} className="flex flex-col rounded-lg border border-slate-100 bg-white shadow-3xs overflow-hidden transition-all duration-200">
                                
                                {/* Subcategory Header */}
                                <button
                                  onClick={() => toggleCategory(subCategory.id)}
                                  className={`w-full px-3 py-2 flex items-center justify-between text-left transition-colors hover:bg-slate-50/80 active:bg-slate-50 cursor-pointer ${
                                    isSubExpanded ? "border-b border-slate-100 bg-slate-50/50" : ""
                                  }`}
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <span className="text-sm shrink-0 select-none">
                                      {subCategory.title.split(" ")[0]}
                                    </span>
                                    <span className="font-bold text-[11px] text-slate-700 font-comfortaa leading-none truncate">
                                      {subCategory.title.substring(subCategory.title.indexOf(" ") + 1)}
                                    </span>
                                  </div>
                                  
                                  <div className="flex items-center gap-1 ml-2 shrink-0">
                                    <span className="text-[9px] text-slate-400 font-semibold bg-slate-100 px-1.5 py-0.5 rounded-full">
                                      {subCategory.exercises.length}
                                    </span>
                                    {isSubExpanded ? (
                                      <ChevronDown className="h-3 w-3 text-slate-400" />
                                    ) : (
                                      <ChevronRight className="h-3 w-3 text-slate-400" />
                                    )}
                                  </div>
                                </button>

                                {/* Exercises List under Subcategory */}
                                <AnimatePresence initial={false}>
                                  {isSubExpanded && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2, ease: "easeInOut" }}
                                      className="bg-slate-50/40 overflow-hidden"
                                    >
                                      <div className="p-1 flex flex-col gap-0.5">
                                        {subCategory.exercises.map((exercise) => {
                                          const isSelected = selectedExercise?.id === exercise.id;
                                          return (
                                            <button
                                              key={exercise.id}
                                              onClick={() => handleSelectExercise(exercise, subCategory.id)}
                                              className={`w-full text-left px-2.5 py-2 transition-all text-xs font-semibold flex items-center justify-between gap-2 group/item cursor-pointer ${
                                                isSelected
                                                  ? "bg-[#EEF2FF] border-l-4 border-[#4F46E5] text-[#4F46E5] rounded-r-md rounded-l-none font-bold shadow-3xs"
                                                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-100/60 border-l-4 border-transparent hover:border-slate-300 rounded-md"
                                              }`}
                                            >
                                              <div className="flex items-center gap-2 min-w-0">
                                                <div className={`p-0.5 rounded-md shrink-0 ${isSelected ? "text-[#4F46E5]" : "text-slate-400"}`}>
                                                  <IconRenderer name={exercise.iconName} className="h-3.5 w-3.5" />
                                                </div>
                                                <span className="truncate">{exercise.title}</span>
                                              </div>
                                            </button>
                                          );
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })()}

            {/* 3. Autres Catégories */}
            {categoriesData
              .filter(cat => !["lecture", "grammaire", "conjugaison", "orthographe", "vocabulaire", "num", "calcul", "problemes", "geometrie", "mesures", "logique"].includes(cat.id))
              .map((category) => {
                const isExpanded = expandedCategoryId === category.id;
                
                return (
                  <div key={category.id} className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition-all duration-200">
                    
                    {/* Category Header (Click triggers expand/collapse accordion) */}
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className={`w-full px-4 py-3.5 flex items-center justify-between text-left transition-colors hover:bg-slate-50/80 active:bg-slate-50 relative group cursor-pointer ${
                        isExpanded ? "border-b border-slate-100" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg shrink-0 select-none">
                          {category.title.split(" ")[0]}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-bold text-xs text-slate-800 font-comfortaa leading-none">
                            {category.title.substring(category.title.indexOf(" ") + 1)}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                            {category.exercises.length} types d'exercices
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1.5 ml-2">
                        {isExpanded ? (
                          <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-transform" />
                        ) : (
                          <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 transition-transform" />
                        )}
                      </div>
                    </button>

                    {/* Accordeon expand content with Animation */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="bg-slate-50/40 overflow-hidden"
                        >
                          <div className="p-1.5 flex flex-col gap-1">
                            {category.exercises.map((exercise) => {
                              const isSelected = selectedExercise?.id === exercise.id;
                              return (
                                <button
                                  key={exercise.id}
                                  onClick={() => handleSelectExercise(exercise, category.id)}
                                  className={`w-full text-left px-3 py-2.5 transition-all text-xs font-medium flex items-center justify-between gap-3 group/item cursor-pointer ${
                                    isSelected
                                      ? "bg-[#EEF2FF] border-l-4 border-[#4F46E5] text-[#4F46E5] font-semibold rounded-r-lg rounded-l-none"
                                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 border-l-4 border-transparent hover:border-slate-300 rounded-lg"
                                  }`}
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <div className={`p-1 rounded-md shrink-0 ${isSelected ? "text-[#4F46E5]" : "text-slate-400"}`}>
                                      <IconRenderer name={exercise.iconName} className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="truncate">{exercise.title}</span>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

            {/* Quick Helper badge info */}
            <div className="mt-auto bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 flex flex-col gap-1.5 shadow-2xs">
              <div className="flex items-center gap-1.5 font-bold">
                <Info className="h-4 w-4 text-indigo-600 shrink-0" />
                <span className="font-comfortaa text-slate-800">Comment démarrer</span>
              </div>
              <p className="leading-relaxed text-slate-500">
                1. Ajustez les variables d'âge et thèmes généraux.<br/>
                2. Déroulez un groupe d'ateliers à gauche et cliquez sur un type d'exercice.<br/>
                3. Copiez le prompt généré et soumettez-le à votre IA.
              </p>
            </div>
          </nav>

          {/* Workspace - Prompt display and customization review */}
          <section className="flex-grow p-6 md:p-8 min-w-0 flex flex-col justify-between bg-white border-l border-slate-200">
            
            {selectedExercise ? (
              <div className="flex-grow flex flex-col justify-between h-full">
                
                {/* Information Header of Exercise with Multi-Stage Selector */}
                <div>
                  <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 rounded-md border border-indigo-100">
                          {selectedExercise.app}
                        </span>
                        <div className="h-1 w-1 rounded-full bg-slate-300"></div>
                        <span className="text-xs font-semibold text-slate-400">Atelier Formateur</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-comfortaa flex items-center gap-2">
                        <IconRenderer name={selectedExercise.iconName} className="h-6 w-6 text-indigo-600 animate-pulse" />
                        {selectedExercise.title}
                      </h3>
                    </div>

                    {/* Master Workspace Tabs: Choose step 1 (prompt) or step 2 (print-ready PDF) */}
                    <div className="flex bg-slate-100 p-1 rounded-xl self-start xl:self-auto border border-slate-200/50 shadow-2xs">
                      <button
                        onClick={() => setWorkspaceTab("prompt")}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                          workspaceTab === "prompt"
                            ? "bg-white text-indigo-600 shadow-xs"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        <FileText className="h-3.5 w-3.5" />
                        <span>1. Copier le Prompt</span>
                      </button>
                      <button
                        onClick={() => setWorkspaceTab("pdf")}
                        className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                          workspaceTab === "pdf"
                            ? "bg-white text-indigo-600 shadow-xs"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        <Printer className="h-3.5 w-3.5" />
                        <span>générer la fiche imprimable</span>
                      </button>
                    </div>
                  </div>

                  {workspaceTab === "prompt" ? (
                    /* STAGE 1: THE PROMPT GENERATOR */
                    <div>
                      <p className="text-sm text-slate-500 mb-6 font-medium bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-start gap-2.5">
                        <Info className="h-5 w-5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{selectedExercise.desc}</span>
                      </p>

                      {/* Tabs Selector between "Texte Brut" and "Aperçu Surligné" */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex bg-slate-100 p-1 rounded-xl">
                          <button 
                            onClick={() => setActiveTab("text")}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              activeTab === "text"
                                ? "bg-white text-slate-900 shadow-xs"
                                : "text-slate-500 hover:text-slate-900"
                            }`}
                          >
                            Texte Brut
                          </button>
                          <button 
                            onClick={() => setActiveTab("highlight")}
                            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                              activeTab === "highlight"
                                  ? "bg-white text-slate-900 shadow-xs"
                                : "text-slate-500 hover:text-slate-900"
                            }`}
                          >
                            <Wand2 className="h-3 w-3 text-indigo-600" />
                            Visualiser Variables
                          </button>
                        </div>

                        <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 font-mono">
                          {getRenderedTemplate(selectedExercise.template).length} caractères
                        </span>
                      </div>
                      
                      {/* Prompt Text Box Viewports */}
                      <div className="relative rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col h-[320px] md:h-[380px] bg-slate-950">
                        {/* Shell Top-Bar styling */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-700"></span>
                            <span className="text-[10px] font-mono text-slate-400 font-semibold ml-2">PROMPT DYNAMIQUE</span>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span> Remplacement en temps réel
                          </span>
                        </div>

                        {activeTab === "text" ? (
                          <textarea 
                            id="prompt-playground"
                            readOnly 
                            value={getRenderedTemplate(selectedExercise.template)}
                            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                            className="w-full flex-grow bg-slate-950 text-slate-200 font-mono text-[11px] md:text-xs p-5 md:p-6 outline-none resize-none leading-relaxed overflow-y-auto select-all cursor-text focus:ring-0 focus:border-transparent"
                          />
                        ) : (
                          <div className="w-full flex-grow bg-slate-950 text-slate-300 font-sans text-xs md:text-sm p-6 overflow-y-auto leading-relaxed select-none whitespace-pre-wrap">
                            {getHighlightedPreview(selectedExercise.template)}
                          </div>
                        )}
                      </div>

                      {/* Bottom Action bar */}
                      <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-slate-100 pt-6">
                        <div className="flex items-center gap-2.5 text-xs text-slate-400">
                          <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                            <Info className="h-4 w-4" />
                          </div>
                          <span>Copiez le prompt ci-contre, collez-le dans votre IA et récupérez l'exercice généré !</span>
                        </div>

                        <button 
                          onClick={handleCopy}
                          className="w-full sm:w-auto shrink-0 flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold px-7 py-3 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <Check className="h-4 w-4 text-white stroke-[3]" />
                              <span>Prompt Copié !</span>
                            </>
                          ) : (
                            <>
                              <Copy className="h-4 w-4 text-white" />
                              <span>Copier le prompt</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* STAGE 2: CUSTOMIZABLE & PRINT-READY PDF WORKSHEET */
                    <div className="space-y-6">
                      
                      {/* Explanatory and editing instructions block */}
                      <div className="bg-amber-50/70 border border-amber-200/70 rounded-2xl p-4 text-xs text-slate-700">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                          <span className="font-extrabold text-amber-800 flex items-center gap-1.5 uppercase tracking-wide">
                            <Scissors className="h-3.5 w-3.5 text-amber-600" />
                            Générer & personnaliser votre PDF de classe
                          </span>
                          <button
                            onClick={() => {
                              setUserHasEdited(false);
                              const text = getExercisePlaceholderContent(
                                selectedExercise.id,
                                selectedExercise.title,
                                inputVariables.theme,
                                inputVariables.contexte,
                                inputVariables.ageMin,
                                inputVariables.ageMax,
                                inputVariables.duree,
                                tempsConjugaison,
                                verbesConjuguer,
                                nbQuestions,
                                longueurTexte,
                                niveauDifficulte,
                                difficulteOption
                              );
                              setCustomExerciseText(text);
                            }}
                            className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200 hover:border-indigo-200 transition-all cursor-pointer shadow-2xs"
                          >
                            <RotateCcw className="h-2.5 w-2.5" />
                            Charger l'exemple type
                          </button>
                        </div>
                        <p className="leading-relaxed text-slate-600">
                          <strong>Comment faire ?</strong> Collez ci-dessous le texte rédigé par votre IA (ChatGPT / Gemini), ou cliquez sur <strong>"Charger l'exemple type"</strong> pour afficher un modèle pré-généré adapté à vos filtres, puis personnalisez-le librement.
                        </p>
                      </div>

                      {/* Interactive Text Editor for Printable layout */}
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col gap-2.5">
                        <div className="flex items-center justify-between">
                          <label className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                            Texte de l'Exercice (Modifiable)
                          </label>
                          {userHasEdited && (
                            <span className="text-[9px] text-[#4F46E5] font-semibold bg-[#EEF2FF] px-2 py-0.5 rounded-full">
                              Modifié par vos soins
                            </span>
                          )}
                        </div>
                        <textarea
                          value={customExerciseText}
                          onChange={(e) => {
                            setCustomExerciseText(e.target.value);
                            setUserHasEdited(true);
                          }}
                          placeholder="Collez le texte généré par l'IA ici pour l'imprimer..."
                          className="w-full h-44 bg-white border border-slate-200 p-4 rounded-xl text-xs font-mono leading-relaxed text-slate-800 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 shadow-inner"
                        />
                      </div>

                      {/* Screen Live WYSIWYG A4 Preview box */}
                      <div className="space-y-2">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block px-1">
                          Aperçu de la page imprimée (A4)
                        </span>
                        
                        <div className="bg-slate-100 p-6 md:p-10 rounded-2xl border border-slate-200/60 shadow-inner flex justify-center overflow-x-auto max-h-[500px] overflow-y-auto">
                          
                          {/* A4 Sheet Card Mockup */}
                          <div className="bg-white text-slate-900 border border-slate-200 w-full max-w-[21cm] min-h-[29.7cm] p-6 md:p-8 shadow-md rounded-lg flex flex-col text-left font-sans">
                            
                            {/* Student Header school info */}
                            <div className="border border-slate-300 p-3.5 rounded-xl mb-5 flex justify-between items-center text-[10px] bg-slate-50/50">
                              <div className="space-y-2">
                                <div><span className="font-extrabold uppercase text-[9px] text-slate-400">PRÉNOM :</span> <span className="border-b border-slate-300 inline-block w-32 ml-1"></span></div>
                                <div><span className="font-extrabold uppercase text-[9px] text-slate-400">NOM :</span> <span className="border-b border-slate-300 inline-block w-32 ml-5"></span></div>
                              </div>
                              <div className="text-right space-y-2">
                                <div><span className="font-extrabold uppercase text-[9px] text-slate-400">DATE :</span> <span className="border-b border-slate-300 inline-block w-24 ml-1">____/____/________</span></div>
                                <div><span className="font-extrabold uppercase text-[9px] text-slate-400">CLASSE :</span> <span className="border-b border-slate-300 inline-block w-24 ml-1">___________</span></div>
                              </div>
                            </div>

                            {/* Title banner */}
                            <div className="text-center mb-6 pb-4 border-b border-dashed border-slate-200">
                              <span className="text-[9px] font-extrabold tracking-widest text-[#4F46E5] uppercase bg-[#EEF2FF] px-2 py-0.5 rounded inline-block mb-1">
                                ATELIER DE FRANÇAIS LUDIQUE
                              </span>
                              <h2 className="text-lg font-black text-slate-900 uppercase">
                                {selectedExercise.title}
                              </h2>
                              <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                                Thème : {inputVariables.theme || "Sujet personnalisé"}
                              </p>
                              <p className="text-[9px] text-slate-400 italic font-medium">
                                Objectif pédagogique : {inputVariables.contexte || "Acquisition linguistique"}
                              </p>
                            </div>

                            {/* Worksheet text body */}
                            <div className="whitespace-pre-wrap font-sans text-xs text-slate-800 leading-relaxed flex-grow">
                              {customExerciseText || "Aucun texte d'exercice défini. Collez ou tapez votre texte ci-dessus !"}
                            </div>

                            {/* Bottom Footer line */}
                            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center text-[8px] text-slate-400 font-semibold">
                              <span>Fiche élève conçue avec l'aide d'I.A.</span>
                              <span>Tranche d'âge : {inputVariables.ageMin} à {inputVariables.ageMax} ans • {inputVariables.duree} min</span>
                              <span>Réf : {selectedExercise.id.substring(0, 4).toUpperCase()}</span>
                            </div>

                          </div>

                        </div>
                      </div>

                      {/* Bottom Action print bar */}
                      <div className="mt-6 border-t border-slate-100 pt-6">
                        {printBlockedError && (
                          <div className="mb-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-850 text-xs leading-relaxed space-y-2">
                            <p className="font-bold flex items-center gap-1.5 text-amber-900">
                              <Info className="h-4 w-4 text-amber-600 shrink-0" />
                              Contraintes de l'iframe de l'éditeur détectées :
                            </p>
                            <p>
                              Les navigateurs limitent le comportement d'impression native (`window.print()`) lorsque l'application s'exécute à l'intérieur de l'aperçu encapsulé. Privilégiez l'une des méthodes de contournement instantanées ci-dessous :
                            </p>
                            <div className="flex flex-wrap gap-2 pt-1">
                              <button 
                                onClick={handleExportDocs}
                                className="bg-white hover:bg-slate-50 border border-amber-300 px-3 py-1.5 rounded-lg text-amber-900 text-[11px] font-bold transition-all flex items-center gap-1 cursor-pointer"
                              >
                                <Download className="h-3 w-3" />
                                Exporter en document Word (.doc)
                              </button>
                              <a 
                                href={window.location.href} 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 inline-flex"
                              >
                                <ExternalLink className="h-3 w-3" />
                                Ouvrir l'application en plein écran
                              </a>
                            </div>
                          </div>
                        )}

                        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
                          <div className="flex items-center gap-2.5 text-xs text-slate-400">
                            <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                              <Download className="h-4 w-4" />
                            </div>
                            <span>Télécharger pour l'ouvrir dans Microsoft Word, Google Docs ou LibreOffice.</span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2.5">
                            {/* Option 1 : Word/Docs (.doc) Download */}
                            <button 
                              onClick={handleExportDocs}
                              className="grow sm:grow-0 flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-extrabold px-6 py-3 rounded-lg transition-all shadow-xs hover:shadow-md text-xs cursor-pointer"
                              title="Télécharger un document compatible avec Microsoft Word, Google Docs et Writer"
                            >
                              <Download className="h-4 w-4 text-white" />
                              <span>Télécharger la fiche (.doc)</span>
                            </button>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                </div>

              </div>
            ) : (
              /* Onboarding/Placeholder State when no exercise selected */
              <div className="h-full flex flex-col items-center justify-center py-20 text-center max-w-lg mx-auto">
                <div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl mb-5">
                  <Wand2 className="h-6 w-6 stroke-[1.8]" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-800 mb-2 font-comfortaa">
                  Sélectionnez un type d'exercice
                </h3>
                <p className="text-xs text-slate-500 mb-6 font-medium leading-relaxed">
                  Déroulez l'une des catégories à gauche pour révéler les formats pédagogiques disponibles. Cliquez sur un exercice pour générer son prompt interactif à utiliser immédiatement.
                </p>

                {/* Helpful shortcut cards */}
                <div className="grid grid-cols-2 gap-3 w-full mt-4">
                  <button 
                    onClick={() => {
                      setExpandedCategoryId("musique-artistique");
                      const exercise = categoriesData[0].exercises[0]; // Suno
                      setSelectedExercise(exercise);
                    }}
                    className="p-4 bg-slate-50 hover:bg-slate-100/85 border border-slate-200/60 rounded-xl transition text-left cursor-pointer active:scale-95 group"
                  >
                    <Music className="h-5 w-5 text-indigo-600 mb-2 group-hover:scale-105 transition-transform" />
                    <span className="block text-xs font-bold text-slate-700">Paroles Suno AI</span>
                    <span className="text-[10px] text-slate-400">Éveil musical & poésie</span>
                  </button>

                  <button 
                    onClick={() => {
                      setExpandedCategoryId("preparation-supports");
                      const exercise = categoriesData[3].exercises[1]; // QCM
                      setSelectedExercise(exercise);
                    }}
                    className="p-4 bg-slate-50 hover:bg-slate-100/85 border border-slate-200/60 rounded-xl transition text-left cursor-pointer active:scale-95 group"
                  >
                    <Code className="h-5 w-5 text-indigo-600 mb-2 group-hover:scale-105 transition-transform" />
                    <span className="block text-xs font-bold text-slate-700">Générateur QCM</span>
                    <span className="text-[10px] text-slate-400">Quiz interactif HTML</span>
                  </button>
                </div>
              </div>
            )}

          </section>
        </div>

      </div>

      {/* Footer Info */}
      <footer className="mt-6 text-center text-xs text-slate-400 flex items-center justify-center gap-2 font-medium">
        <span>© 2026 Générateur d'Ateliers Éducatifs</span>
        <span>•</span>
        <span>Intégrable directement en mode iframe dans vos supports ou Google Sites</span>
      </footer>

      {/* Elegant Toast Notifications */}
      <div 
        className={`fixed bottom-6 right-6 bg-slate-900 border border-slate-800 text-white px-5 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 transition-all duration-300 transform z-50 ${
          showToast ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-xs text-white">
          <Check className="h-3.5 w-3.5 stroke-[3]" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-extrabold">Succès !</span>
          <span className="text-[11px] text-slate-400 font-medium">Le prompt a été copié dans votre presse-papiers.</span>
        </div>
      </div>

    </div>

    {/* Section dédiée uniquement à l'impression physique A4 en PDF sous format scolaire */}
    {selectedExercise && (
      <div className="hidden print:block bg-white text-slate-950 p-12 font-sans leading-relaxed text-sm w-[21cm] min-h-[29.7cm] mx-auto">
        
        {/* Cartouche élève d'école très soigné */}
        <div className="border-2 border-slate-950 p-5 rounded-2xl mb-8 flex justify-between items-center bg-slate-50/40">
          <div className="space-y-3">
            <div><span className="font-extrabold uppercase text-[11px] tracking-wider text-slate-700">PRÉNOM :</span> <span className="border-b border-dashed border-slate-500 inline-block w-52 ml-2 h-4"></span></div>
            <div><span className="font-extrabold uppercase text-[11px] tracking-wider text-slate-700">NOM :</span> <span className="border-b border-dashed border-slate-500 inline-block w-52 ml-8 h-4"></span></div>
          </div>
          <div className="text-right space-y-3">
            <div><span className="font-extrabold uppercase text-[11px] tracking-wider text-slate-700">DATE :</span> <span className="border-b border-dashed border-slate-500 inline-block w-36 ml-2 h-4">____ / ____ / ________</span></div>
            <div><span className="font-extrabold uppercase text-[11px] tracking-wider text-slate-700">CLASSE :</span> <span className="border-b border-dashed border-slate-500 inline-block w-36 ml-2 h-4">__________________</span></div>
          </div>
        </div>

        {/* En-tête / Titre */}
        <div className="text-center mb-8 pb-6 border-b border-dashed border-slate-300">
          <span className="text-[10px] font-extrabold tracking-widest text-[#4F46E5] uppercase bg-[#EEF2FF] px-3 py-1 rounded inline-block mb-3">
            FICHE D'EXERCICE SCOLAIRE · FRANÇAIS
          </span>
          <h1 className="text-2xl font-black text-slate-900 leading-tight uppercase font-comfortaa">
            {selectedExercise.title}
          </h1>
          <div className="flex justify-center items-center gap-3 text-xs text-slate-500 font-semibold mt-2">
            <span>Thème : {inputVariables.theme || "Sujet de cours"}</span>
            <span>•</span>
            <span>Durée conseillée : {inputVariables.duree} min</span>
            <span>•</span>
            <span>Niveau : {inputVariables.ageMin}-{inputVariables.ageMax} ans</span>
          </div>
          <p className="text-xs text-slate-400 font-medium italic mt-1 max-w-lg mx-auto">
            Objectif pédagogique : {inputVariables.contexte || "S'exercer de manière autonome"}
          </p>
        </div>

        {/* Contenu principal de la fiche d'exercice */}
        <div className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-slate-900 leading-relaxed min-h-[16cm] mb-10 pr-2">
          {customExerciseText}
        </div>

        {/* Pied de page d'impression */}
        <div className="pt-6 border-t border-slate-300 flex justify-between items-center text-[9px] text-slate-400 font-semibold uppercase tracking-wider">
          <span>Atelier pratique de français</span>
          <span>Fiche prête à l'emploi (Générateur PDF)</span>
          <span>Réf classe : {selectedExercise.id.substring(0, 5).toUpperCase()}</span>
        </div>

      </div>
    )}
  </>
);
}
