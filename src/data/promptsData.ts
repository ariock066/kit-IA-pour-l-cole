import { Category } from "../types";

export const categoriesData: Category[] = [
  {
    id: "lecture",
    title: "📖 Lecture",
    iconName: "BookOpen",
    color: "blue",
    exercises: [
      {
        id: "lecture-comprehension",
        title: "Lecture compréhension avec questions",
        app: "ChatGPT / Gemini",
        desc: "Génère un court texte thématique suivi de questions de compréhension adaptées au niveau de lecture choisi.",
        iconName: "BookOpen",
        template: `Agis en tant que professeur des écoles expérimenté pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Conçois un exercice de lecture compréhension autour du thème : "[THEME]".
L'objectif est de : [CONTEXTE].

Consignes de rédaction :
1. **Texte de départ :** Écris un récit court, captivant et adapté à la tranche d'âge d'élèves de [ÂGE_MIN] à [ÂGE_MAX] ans (vocabulaire simple, style imagé, phrases de longueur appropriée).
2. **Questions (3 à 4 questions) :** Rédige des questions de compréhension directe (recherche d'infos dans le texte) et fine (interprétation simple).
3. **Corrigé :** Donne les réponses attendues pour l'enseignant de manière concise.`
      },
      {
        id: "texte-a-trous",
        title: "Texte à trous",
        app: "ChatGPT / Gemini",
        desc: "Crée un texte narratif ou documentaire thématique contenant des mots à compléter avec une liste d'aide.",
        iconName: "FileText",
        template: `Agis en tant que spécialiste de la didactique du français pour enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Conçois un exercice de texte à trous portant sur : "[THEME]".
Objectif de la fiche : [CONTEXTE].

Consignes spécifiques :
1. Rédige un court paragraphe (5 à 8 lignes) expliquant ou racontant une histoire sur "[THEME]".
2. Remplace 5 à 6 mots-clés essentiels par des pointillés transparents (ex: "_______").
3. Fournis la boîte à mots d'aide (la liste des mots effacés à replacer) juste en dessous du texte.
4. Écris la solution complète avec les mots replacés en gras.`
      },
      {
        id: "vrai-faux",
        title: "Vrai / Faux",
        app: "ChatGPT / Gemini",
        desc: "Propose une série d'affirmations thématiques simples pour stimuler le débat et vérifier les acquis.",
        iconName: "HelpCircle",
        template: `Agis en tant qu'enseignant créatif. Crée un quiz de type \"Vrai ou Faux\" sur le thème "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans (Objectif : [CONTEXTE]).

Rédige 5 affirmations courtes et amusantes.
Pour chaque affirmation :
1. Indique de manière claire si c'est VRAI ou FAUX.
2. Écris une explication d'une ou deux phrases très simples et positives destinée aux enfants pour expliquer le pourquoi (Ex: \"Vrai ! Les arbres respirent aussi et purifient l'air que nous respirons !\").`
      },
      {
        id: "lecture-qcm",
        title: "QCM (questions à choix multiples)",
        app: "ChatGPT / Gemini / Claude AI",
        desc: "Un questionnaire interactif doté de retours explicatifs mignons et gratifiants pour chaque réponse possible.",
        iconName: "Code",
        template: `Agis en tant que concepteur de QCM pédagogiques d'apprentissage pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème choisi : "[THEME]". Objectif : [CONTEXTE].

Génère un questionnaire à choix multiples (QCM) de 5 questions.
Pour chaque question, fournis :
- La question rédigée de manière simple et stimulante.
- 3 choix de réponses (A, B, C), dont une seule est correcte.
- Une explication amusante et rassurante pour la réponse gagnante, ainsi qu'une phrase encourageante pour réexpliquer le piège si l'enfant s'est trompé.`
      },
      {
        id: "remettre-ordre",
        title: "Remettre les phrases dans l’ordre",
        app: "ChatGPT / Gemini",
        desc: "Un texte décousu et mélangé que l'élève doit remettre dans le bon ordre logique ou temporel.",
        iconName: "Activity",
        template: `Agis en tant que spécialiste du langage écrit pour le jeune public.
Conçois un exercice pratique de logique narrative intitulé \"Les phrases mélangées\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème de l'histoire : "[THEME]".

Instructions :
1. Rédige une histoire chronologique simple de 4 ou 5 phrases.
2. Présente les phrases dans un ordre totalement mélangé (numérotées de A à E).
3. Donne les consignes pour aider l'élève à retrouver l'ordre d'origine.
4. Ajoute la clé de correction sous forme de suite de lettres (ex: D - B - A - E - C) avec la justification chronologique.`
      },
      {
        id: "associer-texte-image",
        title: "Associer texte et image",
        app: "ChatGPT / Gemini",
        desc: "Conçoit un exercice où les enfants associent des descriptions évocatrices à des scènes à dessiner ou des vignettes.",
        iconName: "Image",
        template: `Agis comme un concepteur de matériel pédagogique pour la classe de français de [ÂGE_MIN] à [ÂGE_MAX] ans.
Crée un atelier \"Associer Texte & Dessin\" sur le thème "[THEME]" (Visant : [CONTEXTE]).

Propose un exercice composé de :
1. **3 courtes descriptions écrites** (de 2 phrases max) décrivant des concepts, personnages ou actions du thème.
2. **3 boîtes de dessin vides prévues** : Explique ce que l'enfant doit dessiner dans chaque boîte pour illustrer parfaitement la phrase qu'il vient de lire ou d'écouter.
Les descriptions doivent être drôles, faciles à imager et ancrer solidement le vocabulaire cible.`
      },
      {
        id: "reperer-informations",
        title: "Repérer des informations dans un texte",
        app: "ChatGPT / Gemini",
        desc: "Développe l'esprit d'observation en entraînant les élèves à extraire des indices précis d'un petit paragraphe.",
        iconName: "Compass",
        template: `Agis comme un professeur de lecture. Crée un jeu d'enquête textuelle intitulé \"Le Détective des Mots\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans (Thème : [THEME]).

1. Écris un court texte descriptif très riche en détails colorés d'environ 6 lignes.
2. Formule 3 questions d'enquête précises où l'élève doit surligner ou recopier un mot exact présent dans le paragraphe (Ex: de quelle couleur est le bac ? comment s'appelle le petit écureuil ?).
3. Ajoute des consignes pour encourager l'esprit d'observation et de lecture attentive.`
      },
      {
        id: "lecture-consignes",
        title: "Lecture de consignes",
        app: "ChatGPT / Gemini",
        desc: "Rédige une série de consignes créatives pas-à-pas à exécuter scrupuleusement avec des feutres.",
        iconName: "PenTool",
        template: `Agis en tant que spécialiste du suivi d'instructions verbales et écrites pour enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Conçois un jeu amusant de dessin dirigé sous forme de consignes successives sur le thème de : "[THEME]".

Rédige 4 étapes simples et consécutives que l'enfant doit exécuter sur une feuille blanche pour former une œuvre d'art thématique.
(Exemples de consignes : \"1. Dessine un grand cercle bleu au milieu de ta feuille...\", \"2. Ajoute à l'intérieur de ce cercle...\").
Chaque consigne doit tester la compréhension fine de termes logiques et d'espace (droite, gauche, au-dessus, vert, grand/petit).`
      }
    ]
  },
  {
    id: "grammaire",
    title: "✍️ Grammaire",
    iconName: "FileText",
    color: "purple",
    exercises: [
      {
        id: "identifier-classes",
        title: "Identifier les classes de mots",
        app: "ChatGPT / Gemini",
        desc: "Exercice d'identification pour discriminer les noms communs, les verbes et les déterminants.",
        iconName: "FileText",
        template: `Agis en tant qu'expert en grammaire française pour le niveau scolaire de [ÂGE_MIN] à [ÂGE_MAX] ans.
Conçois un exercice de tri de classes grammaticales inspiré de : "[THEME]".
L'objectif est d'aider les élèves à : [CONTEXTE].

Éléments requis :
1. Propose 3 à 4 phrases simples liées au thème.
2. Demande aux élèves d'identifier une classe grammaticale spécifique (les noms, les verbes d'action, ou les adjectifs qualificatifs) en utilisant un code couleur joyeux.
3. Fournis une boîte de tri récapitulative et les corrections correspondantes.`
      },
      {
        id: "entourer-constituants",
        title: "Entourer le sujet, le verbe, le complément",
        app: "ChatGPT / Gemini",
        desc: "Surlignage en couleurs des briques de base de la phrase (Sujet, Verbe, Complément d'objet).",
        iconName: "Sparkles",
        template: `Agis comme un enseignant de français centré sur l'analyse grammaticale de la phrase.
Pour un élève de [ÂGE_MIN] à [ÂGE_MAX] ans, prépare 4 phrases courtes articulées autour du thème de : "[THEME]".

Conçois l'exercice pour qu'il soit très visuel :
- Consigne d'entourer le **Groupe Sujet** en bleu.
- Consigne d'entourer le **Verbe** en rouge.
- Consigne d'entourer le **Complément** (si applicable au niveau) en vert.
Donne par ailleurs une astuce simple pour l'enfant pour retrouver le verbe (ex: l'astuce de la lunette du \"ne... pas\") et le sujet (la question \"qui est-ce qui ?\").`
      },
      {
        id: "completer-phrases",
        title: "Compléter des phrases",
        app: "ChatGPT / Gemini",
        desc: "Accords d'adjectifs et ajout de déterminants corrects dans des phrases axées sur le thème.",
        iconName: "HelpCircle",
        template: `Agis en tant que créateur d'ateliers de syntaxe pour les enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Crée un exercice pour compléter des phrases autour de : "[THEME]".
Le but de l'exercice est de travailler : [CONTEXTE].

Fournis :
1. Une liste de 4 phrases dont il manque un constituant essentiel (un adjectif de couleur à accorder, ou un déterminant singulier/pluriel).
2. Des indices entre parenthèses au bout de chaque ligne pour guider la réflexion logique de l'enfant.
3. Les réponses justes écrites de manière encourageante.`
      },
      {
        id: "transformer-phrases",
        title: "Transformer des phrases (affirmative, négative, interrogative)",
        app: "ChatGPT / Gemini",
        desc: "Manipulation de types et de formes de phrases simples avec changement d'intonation.",
        iconName: "Activity",
        template: `Agis en tant que didacticien du langage. Conçois un atelier de transformation de phrase de forme joyeuse sur le thème "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.

Propose 3 phrases de départ à la forme affirmative.
Indique aux enfants comment les transformer :
- En phrases négatives (avec le petit monstre \"ne ... pas\" qui attrape le verbe).
- En phrases interrogatives (en ajoutant un point d'interrogation et \"Est-ce que\").
Adapte la complexité de l'exercice au niveau exact correspondant à l'âge saisi.`
      },
      {
        id: "relier-elements",
        title: "Relier les éléments correspondants",
        app: "ChatGPT / Gemini",
        desc: "Associer des têtes de phrases à leur queue logique en prenant garde aux accords grammaticaux.",
        iconName: "Compass",
        template: `Agis en tant que professeur d'école créatif. Conçois un jeu d'association grammaticale à relier avec des flèches pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème de l'atelier : "[THEME]" (Objectif : [CONTEXTE]).

1. Crée deux colonnes de 4 blocs chacune.
   - Colonne A : Groupes nominaux sujets (ex. "Le grand robot vert", "Les petites boîtes").
   - Colonne B : Groupes verbaux et compléments mélangés (ex. "mangent de l'herbe", "trie les papiers").
2. Les accords en nombre (singulier/pluriel) doivent servir d'indices logiques majeurs pour aider l'enfant à relier correctement.
3. Propose une solution claire dessinée avec des flèches textuelles.`
      },
      {
        id: "trier-mots",
        title: "Trier des mots par catégorie",
        app: "ChatGPT / Gemini",
        desc: "Une liste de mots mélangés à trier selon leur genre, leur nombre ou leur classe de mots.",
        iconName: "Layout",
        template: `Agis en tant qu'instituteur de français. Prépare un atelier de tri de mots thématique pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème choisi : "[THEME]".

Propose une liste de 10 mots amusants tirés du thème et demande de les ranger dans un tableau à deux colonnes de tri :
- Option de tri 1 : Masculin (Le / Un) contre Féminin (La / Une).
- Option de tri 2 : Singulier contre Pluriel.
Utilise l'option la plus adaptée à l'âge de [ÂGE_MIN] ans. Fournis le tableau vide, la liste de mots et le corrigé complet.`
      }
    ]
  },
  {
    id: "conjugaison",
    title: "⏳ Conjugaison",
    iconName: "Activity",
    color: "lime",
    exercises: [
      {
        id: "completer-verbes",
        title: "Compléter les verbes conjugués",
        app: "ChatGPT / Gemini",
        desc: "Insérer les terminaisons correctes ou le verbe conjugué au temps indiqué dans une courte histoire.",
        iconName: "PenTool",
        template: `Agis en tant que spécialiste de la conjugaison française pour enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Crée un exercice de conjugaison thématique axé sur : "[THEME]".
Le temps ciblé (Présent, Futur ou Imparfait) doit être parfaitement adapté à l'âge.

Détails de l'exercice :
1. Rédige un court paragraphe sur le thème.
2. Écris 4 verbes d'action entre parenthèses à leur forme infinitive.
3. L'élève doit réécrire ces verbes correctement conjugués selon le pronom sujet placé devant.
4. Explique l'astuce de mémorisation de la terminaison pour ce groupe de verbes spécifiques.`
      },
      {
        id: "choisir-bon-temps",
        title: "Choisir le bon temps",
        app: "ChatGPT / Gemini",
        desc: "Discriminer l'usage du passé, du présent et du futur grâce à des mots repères temporels.",
        iconName: "HelpCircle",
        template: `Agis en tant que professeur spécialiste de l'évolution du temps.
Conçois un exercice pratique de grammaire temporelle intitulé \"La machine à voyager dans le temps\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème de base : "[THEME]".

Propose 3 phrases décrivant une action thématisée. Dans chaque phrase, insère un adverbe temporel clair (ex: \"Hier\", \"Aujourd'hui\", \"Demain\") et offre 2 options de verbes conjugués à cocher.
L'enfant doit choisir le verbe qui colle au bon repère temporel. Donne le corrigé avec une explication logique rédigée avec simplicité.`
      },
      {
        id: "transformer-temps",
        title: "Transformer un texte d’un temps à un autre",
        app: "ChatGPT / Gemini",
        desc: "Réécrire un paragraphe entier en le transposant dans un autre plan temporel.",
        iconName: "Activity",
        template: `Agis en tant que conseiller d'écriture scolaire pour le niveau de français de [ÂGE_MIN] à [ÂGE_MAX] ans.
Formule un exercice de transposition de texte à partir du thème : "[THEME]".

1. Propose un joli texte de 4 lignes écrit entièrement au présent de l'indicatif.
2. Demande à l'élève de réécrire cette même histoire au Futur simple (ou à l'imparfait, selon le niveau scolaire de l'âge).
3. Donne les clés de réussite à l’enfant (Ex: \"Regarde, le 'je' se transforme en 'je chanter-ai' !\").`
      },
      {
        id: "tableaux-conjugaison",
        title: "Tableaux de conjugaison à compléter",
        app: "ChatGPT / Gemini",
        desc: "Modèle de tableau classique à grilles pour s'entraîner aux différentes personnes de conjugaison.",
        iconName: "Layout",
        template: `Agis en tant que professeur de méthode de français. Conçois un tableau de conjugaison classique à grilles thématiques pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème d'ancrage des mots : "[THEME]".

Sélectionne 2 verbes d'action primordiaux de l'atelier (ex: trier, planter, dessiner, chanter...).
Génère une grille d'exercice à compléter contenant les pronoms personnels (Je, Tu, Il/Elle, Nous, Vous, Ils/Elles) avec des cases vides pour les terminaisons du temps visé. Propose un corrigé étiqueté en rouge.`
      }
    ]
  },
  {
    id: "orthographe",
    title: "✏️ Orthographe",
    iconName: "PenTool",
    color: "orange",
    exercises: [
      {
        id: "dictees-a-trous",
        title: "Dictées à trous",
        app: "ChatGPT / Gemini",
        desc: "Dictée thématisée progressive préparée pour cibler les pièges de sons ou d'accords.",
        iconName: "FileText",
        template: `Agis en tant qu'instituteur de primaire spécialisé en orthographe.
Rédige un atelier de \"Dictée préparée à trous\" portant sur le thème de : "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.

Consignes pédagogiques :
1. Écris la dictée complète (3 lignes d'un texte rythmé).
2. Fournis le texte à imprimer avec des trous ciblant des sons difficiles du thème (ex: sons om/on, s/ss, ou les accords pluriels).
3. Propose une mini-leçon préparatoire (3 règles d'or à lire avant de faire dicter le texte par le parent ou l'enseignant).`
      },
      {
        id: "mots-meles",
        title: "Mots mêlés",
        app: "ChatGPT / Gemini",
        desc: "Une grille de lettres contenant des mots thématiques dissimulés pour améliorer la reconnaissance visuelle.",
        iconName: "Compass",
        template: `Agis en tant que concepteur de jeux de lettres imprimables pour l'école.
Génère une grille de mots mêlés simplifiée d'une taille de 6x6 ou 8x8 lettres, thématiquement liée à : "[THEME]".
Public visé : [ÂGE_MIN] à [ÂGE_MAX] ans.

Instructions à produire :
1. Liste de 4 à 5 mots à rechercher en rapport avec le recyclage, la science ou la nature.
2. Crée la grille de lettres en texte formaté monospace, bien lisible et espacée.
3. Donne la solution détaillée de la grille en indiquant par exemple \"Ligne 2, de gauche à droite...\" pour aider l'enseignant ou le parent à corriger de façon sereine.`
      },
      {
        id: "correction-erreurs",
        title: "Correction d’erreurs",
        app: "ChatGPT / Gemini",
        desc: "Un défi d'orthographe où l'élève se transforme en détective pour corriger les fautes volontaires.",
        iconName: "Sparkles",
        template: `Agis comme un détective de l'orthographe ! Prépare un exercice intitulé \"La chasse aux fautes cachées\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans (Thème : [THEME]).

1. Écris 3 courtes phrases thématiques contenant chacune exactement une erreur d'orthographe d'usage ou d'accord simple (Ex: \"Le grand arbre à des jolies feuilles\" ou \"Le pti oiseau\").
2. Explique aux enfants que des fautes d'orthographe se sont faufilées dans les phrases et qu'ils doivent les encercler.
3. Propose la correction détaillée avec l'explication finale de la règle d'usage.`
      },
      {
        id: "classement-mots",
        title: "Classement de mots",
        app: "ChatGPT / Gemini",
        desc: "Trier des mots selon la phonétique ou la graphie d'une lettre à multiples phonèmes.",
        iconName: "Layout",
        template: `Agis en tant que spécialiste d'orthographe phonétique.
Pour un niveau scolaire correspondant à un âge de [ÂGE_MIN] à [ÂGE_MAX] ans, crée une activité de tri phonique autour du thème de : "[THEME]".

Rédige une liste de 8 mots contenant une lettre cible (par exemple la lettre \"C\" ou \"G\").
Demande aux enfants de ranger ces mots dans deux valises à dessins :
- Valise 1 : J’entends le son dur (ex: comme dans café ou gare).
- Valise 2 : J’entends le son doux (ex: comme dans cerise ou girafe).
Fournis la correction claire pour accompagner le travail.`
      },
      {
        id: "accords-completer",
        title: "Accords à compléter",
        app: "ChatGPT / Gemini",
        desc: "S'entraîner aux règles de pluriel et de féminin dans des groupes nominaux thématiques.",
        iconName: "PenTool",
        template: `Agis en tant que professeur d'école élémentaire.
Conçois un atelier ciblant la maîtrise des accords en genre (masculin/féminin) et en nombre (singulier/pluriel) pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Sujet d'exercice : "[THEME]" (Objectif : [CONTEXTE]).

Propose :
1. 4 groupes nominaux à accorder au pluriel (ex. \"un carton vert ➔ des ...\").
2. 4 groupes nominaux à accorder au féminin.
3. Rappelle en 1 phrase simple la grande règle de grammaire d'accord (le petit \"s\" ou le \"e\" de l'accord).`
      },
      {
        id: "exercices-copie",
        title: "Exercices de copie",
        app: "ChatGPT / Gemini",
        desc: "Texte poétique ou instructif soigné à recopier sans aucune faute pour former une belle écriture.",
        iconName: "BookOpen",
        template: `Agis en tant que tuteur en écriture appliqué.
Rédige un court et joli paragraphe de copie d'environ 3 lignes, inspiré poétiquement du thème "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans (Objectif : [CONTEXTE]).

Cet exercice vise à développer la motricité fine et l'attention orthographique :
1. Donne des conseils visuels d'installation d'écriture (position du cahier, tenue du crayon).
2. Écris le texte modèle en caractère propre et bien détaché.
3. Donne un petit défi amusant pour vérifier la réussite (ex: \"Vérifie que tu as bien mis les 2 majuscules et les 3 points du texte !\").`
      }
    ]
  },
  {
    id: "vocabulaire",
    title: "💬 Vocabulaire",
    iconName: "MessageSquare",
    color: "blue",
    exercises: [
      {
        id: "synonymes-antonymes",
        title: "Synonymes et antonymes",
        app: "ChatGPT / Gemini",
        desc: "Associer, découvrir ou lister des mots de sens équivalents ou contraires du thème.",
        iconName: "MessageSquare",
        template: `Agis en tant qu'animateur du vocabulaire.
Conçois une série d'exercices sur les synonymes (mots jumeaux de même sens) et les antonymes (mots contraires de sens opposé) sur le thème "[THEME]".
Public cible : [ÂGE_MIN] à [ÂGE_MAX] ans.

Activités requises :
1. **Trouve l'antonyme :** Donne 3 mots thématiques très faciles et demande leur contraire (ex: grand / propre / trier).
2. **Trouve le synonyme :** Donne 3 qualificatifs et demande leur mot de même sens (ex: joyeux / rapide / joli).
3. Fournis une boîte de réponses claires avec des dessins indicatifs si possible.`
      },
      {
        id: "familles-mots",
        title: "Familles de mots",
        app: "ChatGPT / Gemini",
        desc: "Regrouper des mots partageant un même radical ou repérer l'intrus d'une famille.",
        iconName: "Sparkles",
        template: `Agis en tant que linguiste amusant pour l'école.
Prépare un exercice sur la structure des mots et les familles lexicales pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème central : "[THEME]".

Exercice à produire :
- Donne 3 familles de mots incomplètes à compléter avec un mot mystère (ex: Terre, terrain, terrestre, et ...).
- Propose un jeu amusant du \"Chasseur d'Intrus\" où l'élève doit barrer un mot qui ressemble visuellement à la famille mais n'a pas le même radical ou sens (ex: terre, terrier, terreur).
Fournis le corrigé expliqué.`
      },
      {
        id: "mots-croises",
        title: "Mots croisés",
        app: "ChatGPT / Gemini",
        desc: "Définitions simples sous forme de devinettes pour compléter des mots s'entrecroisant du dictionnaire.",
        iconName: "HelpCircle",
        template: `Agis comme un auteur de mots croisés scolaires pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Crée une grille de mots croisés simpliste contenant exactement 4 mots clés du thème : "[THEME]".

Donne :
1. Les 4 définitions sous forme de devinettes drôles (2 horizontales et 2 verticales).
2. Le schéma de disposition des mots (nombre de lettres, lettres d'intersection communes).
3. La grille résolue pour aider l'enseignant dans son atelier.`
      },
      {
        id: "mots-caches",
        title: "Mots cachés",
        app: "ChatGPT / Gemini",
        desc: "Retrouver des termes dissimulés ou décrypter des mots ordonnés à l'aide de rébus légers.",
        iconName: "Compass",
        template: `Agis en tant que spécialiste d'énigmes verbales.
Conçois un jeu d'anagrammes ou de mystères de mots cachés destiné à des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans sur le thème de : "[THEME]".

Choisis 4 mots-clés de l'activité.
- Présente ces mots avec les lettres mélangées de façon drôle (ex: \"S-A-C-I-O\" ➔ \"OASIS\").
- Ajoute une devinette logique pour éclairer le sens de chaque mot à reconstituer.
- Donne la solution pour encourager l'esprit créatif.`
      },
      {
        id: "association-definition",
        title: "Association mot-définition",
        app: "ChatGPT / Gemini",
        desc: "Faire correspondre des mots rigoureux du thème avec leurs définitions expliquées simplement.",
        iconName: "BookOpen",
        template: `Agis en tant que dictionnaire enfantin portatif !
Prépare un exercice d'association de vocabulaire pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème d'apprentissage : "[THEME]". Objectif : [CONTEXTE].

1. Liste 3 mots précis mais parfois flous pour le jeune public liés au thème.
2. Crée 3 définitions magnifiques et simplifiées rédigées de façon accessible à l'aide de métaphores charmantes.
3. Organise l'exercice pour qu'on puisse relier le mot à sa définition correspondante à l'aide d'un fil magique dessiné.`
      },
      {
        id: "champ-lexical",
        title: "Champ lexical",
        app: "ChatGPT / Gemini",
        desc: "Découvrir un univers sémantique et s'en servir pour composer une phrase d'expression écrite.",
        iconName: "Activity",
        template: `Agis en tant que conseiller d'expression écrite créative.
Élabore un atelier d'écriture centré sur le \"Champ lexical\" du thème : "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.

Instructions de l'exercice :
1. Crée un nuage de mots thématique contenant 8 mots du champ lexical de l'atelier (noms, verbes, adjectifs).
2. Demande à l'élève de choisir 3 mots de ce nuage pour rédiger une phrase qui raconte une idée ou une action de son choix.
3. Propose 2 exemples de phrases inspirantes et adaptées pour donner des idées d'écriture.`
      }
    ]
  },
  {
    id: "numeration",
    title: "🔢 Numération",
    iconName: "FileText",
    color: "teal",
    exercises: [
      {
        id: "num-chiffres-lettres",
        title: "Écrire les nombres en chiffres ou en lettres",
        app: "ChatGPT / Gemini",
        desc: "Génère un atelier d'écriture de nombres en toutes lettres ou en chiffres pour affermir la lecture correcte des nombres.",
        iconName: "PenTool",
        template: `Agis en tant que professeur des écoles expérimenté. Conçois un exercice de Numération thématique axé sur \"l'écriture des nombres en chiffres ou en lettres\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Le thème d'apprentissage est : "[THEME]".
L'objectif de cette séance est de : [CONTEXTE].

Consignes pour la génération :
1. Propose une série d'exercices où l'élève doit transformer des nombres écrits en lettres en écriture chiffrée, et inversement (ex: transformer "quarante-deux" en 42).
2. Adapte la taille des nombres en fonction de l'âge des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans (de petits nombres pour la maternelle/début CP, jusqu'à des milliers/millions pour les plus grands).
3. Intègre harmonieusement le thème "[THEME]" dans les consignes ou les exemples (ex: "cinq planètes", "trois mille arbres", etc.).
4. Fournis une section de correction complète pour l'enseignant.`
      },
      {
        id: "num-comparer-ranger",
        title: "Comparer et ranger des nombres",
        app: "ChatGPT / Gemini",
        desc: "Conçoit un exercice pour comparer des nombres (<, >, =) et les ordonner de manière croissante ou décroissante.",
        iconName: "Layout",
        template: `Agis en tant que spécialiste en didactique des mathématiques. Prépare un atelier de Numération intitulé \"Comparer et ranger des nombres\" sur le thème "[THEME]" pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif poursuivi est de : [CONTEXTE].

Consignes de l'exercice :
1. Propose des exercices de comparaison directe entre deux nombres en demandant aux élèves de placer le bon symbole (<, > ou =).
2. Conçois une suite de nobles à ranger dans l'ordre croissant (du plus petit au plus grand) ou décroissant.
3. Utilise des grandeurs numériques bien ajustées à la tranche d'âge [ÂGE_MIN] à [ÂGE_MAX] ans.
4. Intègre du vocabulaire et des objets thématiques liés à "[THEME]".
5. Donne la solution complète.`
      },
      {
        id: "num-decomposer",
        title: "Décomposer un nombre",
        app: "ChatGPT / Gemini",
        desc: "Entraîne les élèves à décomposer les troupes ou nombres en unités, dizaines, centaines (ex: 135 = 100 + 30 + 5).",
        iconName: "Activity",
        template: `Agis en tant qu'instituteur. Prépare un exercice sur la structure des nombres intitulé \"Décomposition de nombres\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans (Thème : "[THEME]").
L'objectif est de : [CONTEXTE].

Consignes spécifiques :
1. Crée un exercice demandant de décomposer des nombres sous forme additive (ex: 247 = 200 + 40 + 7) ou sous forme de classes (ex: 2 centaines, 4 dizaines et 7 unités).
2. Adapte judicieusement la taille et la complexité des nombres au niveau des enfants.
3. Relie le contexte des nombres aux éléments du thème de "[THEME]".
4. Fournis le corrigé étape par étape pour guider l'enseignant ou le parent.`
      },
      {
        id: "num-suite-numerique",
        title: "Compléter une suite numérique",
        app: "ChatGPT / Gemini",
        desc: "Génère des chenilles ou suites de nombres à trous avec un pas logique (de 1 en 1, de 2 en 2, de 10 en 10).",
        iconName: "Compass",
        template: `Agis en tant que concepteur d'activités logiques de mathématiques. Conçois un jeu amusant \"La suite de nombres\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans sur le thème de : "[THEME]".
L'objectif de l'atelier est de : [CONTEXTE].

Rédige un exercice comportant des chenilles numériques ou des listes à puces où plusieurs nombres sont manquants (marqués par des pointillés ou cases vides).
L'élève doit découvrir la logique de la suite (compter de 2 en 2, de 5 en 5, à l'endroit ou à rebours) et compléter les trous.
Ajuste le pas et l'intervalle numérique selon l'âge et la difficulté. Fournis la clé de correction.`
      }
    ]
  },
  {
    id: "calcul",
    title: "🧮 Calcul",
    iconName: "Activity",
    color: "emerald",
    exercises: [
      {
        id: "calcul-additions",
        title: "Additions",
        app: "ChatGPT / Gemini",
        desc: "Entraînement aux additions simples, en ligne ou posées, ancrées dans des environnements ludiques.",
        iconName: "Sparkles",
        template: `Agis en tant que spécialiste du calcul à l'école élémentaire.
Conçois une série d'additions amusantes sur le thème de "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif de la séance est de : [CONTEXTE].

Exigences :
1. Formule des calculs d'additions (additions imagées pour les petits, additions simples en ligne, ou opérations posées avec retenues pour les plus âgés).
2. Enrobe les opérations dans une petite histoire introductive liée au sujet : "[THEME]".
3. Donne les résultats exacts avec l'explication des retenues éventuelles pour le corrigé.`
      },
      {
        id: "calcul-soustractions",
        title: "Soustractions",
        app: "ChatGPT / Gemini",
        desc: "Opérations de soustraction adaptées au niveau de l'élève (calcul à rebours, différences ou techniques posées).",
        iconName: "Activity",
        template: `Agis en tant que pédagogue spécialiste du calcul.
Conçois un atelier de soustractions thématiques sur "[THEME]" adapté au niveau exact de [ÂGE_MIN] à [ÂGE_MAX] ans (Objectif : [CONTEXTE]).

Détails de l'exercice :
- Crée une liste de soustractions (retrait concret d'objets dessinés pour les petits, soustractions en ligne, ou soustractions posées avec technique du prêt/de la retenue pour les plus grands).
- Utilise des situations colorées en rapport avec "[THEME]" pour donner du sens à la soustraction.
- Propose un corrigé clair et encourageant.`
      },
      {
        id: "calcul-multiplications",
        title: "Multiplications",
        app: "ChatGPT / Gemini",
        desc: "Entraînement des tables de multiplication, d'additions réitérées ou de multiplications posées scolaires.",
        iconName: "Layout",
        template: `Agis comme un guide de calcul créatif. Crée un atelier thématique sur les multiplications portant sur "[THEME]" destiné à des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif de cette séance est de : [CONTEXTE].

Instructions :
1. Propose des exercices pour manipuler les multiplications (additions répétées sous forme de groupes d'objets pour les débutants, calculs de tables, ou multiplications posées complexes selon le niveau).
2. Utilise le thème "[THEME]" pour contextualiser les calculs (ex: 3 rangées de 5 bacs de recyclage).
3. Inclus la grille de correction complète.`
      },
      {
        id: "calcul-divisions",
        title: "Divisions",
        app: "ChatGPT / Gemini",
        desc: "Introduction simple au partage équitable ou exercices de divisions posées selon le niveau de classe.",
        iconName: "Scissors",
        template: `Agis en tant qu'instituteur de mathématiques. Conçois un exercice de division et partage équitable sur le thème de : "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans (Objectif : [CONTEXTE]).

Rédige un atelier qui propose :
- Pour les débutants : une situation de partage équitable concret de trésors ou d'objets du thème (distribuer équitablement X éléments à Y camarades).
- Pour les plus avancés : des divisions en ligne ou posées simples (division avec ou sans reste).
- Inclus les calculs, les consignes et la correction détaillée avec le reste.`
      },
      {
        id: "calcul-mental",
        title: "Calcul mental",
        app: "ChatGPT / Gemini",
        desc: "Une série d'exercices d'agilité mentale rapide (doubles, compléments à 10, additions rapides).",
        iconName: "Brain",
        template: `Agis comme un entraîneur de calcul mental d'école primaire.
Prépare une série de questions flash de calcul mental sur le thème de : "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Objectif : [CONTEXTE].

Consignes :
1. Formule un entraînement de rapidité à réaliser oralement ou sur ardoise (retrouver des compléments à 10, calculer des doubles/moitiés, ou additionner de petites dizaines).
2. Fournis un petit cartouche récapitulatif avec des cercles ou des cases pour que l'élève y inscrive directement ses réponses.
3. Ajoute la clé de correction rapide.`
      },
      {
        id: "calcul-pose",
        title: "Calcul posé",
        app: "ChatGPT / Gemini",
        desc: "Génère des opérations en colonnes bien présentées pour apprendre à aligner les chiffres.",
        iconName: "FileText",
        template: `Agis en tant que spécialiste d'arithmétique scolaire.
Conçois un exercice de \"Calcul Posé en Colonnes\" pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans sur le thème : "[THEME]".
L'objectif est d'aider les élèves à : [CONTEXTE].

Fournis précisément :
1. Une liste d'opérations écrites horizontalement que l'élève doit poser lui-même verticalement en colonnes (unités sous unités, dizaines sous dizaines...).
2. Une grille de présentation d'arêtes ou de carreaux imitant le cahier d'école pour guider le tracé.
3. Un corrigé montrant les opérations entièrement posées avec les retenues en évidence.`
      },
      {
        id: "calcul-completer-operations",
        title: "Compléter des opérations",
        app: "ChatGPT / Gemini",
        desc: "Opérations à trous à reconstituer en devinant les nombres ou opérateurs absents.",
        iconName: "PenTool",
        template: `Agis comme un détective des calculs ! Prépare un exercice stimulant d'opérations à trous pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans (Dans le cadre de : "[THEME]").
L'objectif est de : [CONTEXTE].

Rédige des calculs (additions, soustractions ou multiplications) où certains chiffres, signes opératoires (+, - ou x) ou résultats sont effacés et remplacés par des points d'interrogation ou de petits carrés gris.
L'élève doit utiliser sa logique arithmétique pour retrouver la valeur cachée. Fournis les solutions justes.`
      }
    ]
  },
  {
    id: "problemes",
    title: "🧩 Problèmes",
    iconName: "HelpCircle",
    color: "amber",
    exercises: [
      {
        id: "problemes-resolution",
        title: "Résolution de problèmes",
        app: "ChatGPT / Gemini",
        desc: "Situations-problèmes concrètes adaptées au réel pour exercer le sens logique et le raisonnement.",
        iconName: "HelpCircle",
        template: `Agis en tant que concepteur de problèmes d'apprentissage pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème choisi : "[THEME]". Objectif : [CONTEXTE].

Élabore des énoncés de problèmes mathématiques concrets et amusants axés sur la vie quotidienne ou des aventures imaginaires autour du recyclage, de la science ou de la nature.
Structure chaque problème avec :
1. L'énoncé narratif clair et adapté à l'âge.
2. Une question finale explicite.
3. Une zone dégagée "Mon raisonnement / Mes calculs" et "Ma phrase réponse".
4. Le corrigé détaillé illustrant l'opération intermédiaire.`
      },
      {
        id: "problemes-choisir-operation",
        title: "Choisir la bonne opération",
        app: "ChatGPT / Gemini",
        desc: "Aide l'élève à comprendre le sens des opérations en choisissant s'il faut additionner ou soustraire.",
        iconName: "Compass",
        template: `Agis en tant que professeur spécialiste de la compréhension de problèmes.
Conçois un atelier intitulé \"À la recherche du bon signe\" destiné à des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans, sur le thème "[THEME]".
Objectif de séance : [CONTEXTE].

Écris de courtes situations narratives simples. L'élève ne doit pas forcément calculer les grands nombres, mais il doit repérer s'il s'agit d'un problème d'addition (réunir, ajouter), de soustraction (perdre, retirer) ou de multiplication (répéter).
L'élève coche le bon symbole (+, -, x) ou la bonne opération formulée. Inclus les corrections.`
      },
      {
        id: "problemes-etapes",
        title: "Problèmes à étapes",
        app: "ChatGPT / Gemini",
        desc: "Défis mathématiques nécessitant d'effectuer plusieurs calculs successifs pour triompher.",
        iconName: "Activity",
        template: `Agis en tant qu'enseignant de français et de mathématiques.
Prépare un exercice d'enquête \"Problèmes complexes à étapes\" lié à : "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.

Conçois des énigmes qui nécessitent de trouver d'abord une information cachée ou une première sous-étape (ex: calculer d'abord le nombre total de bouteilles collectées, puis soustraire celles qui ont été transformées).
Détaille les étapes (Étape 1 et Étape 2) de manière très guidée pour rassurer le jeune élève. Inclus le corrigé complet.`
      },
      {
        id: "problemes-illustres",
        title: "Problèmes illustrés",
        app: "ChatGPT / Gemini",
        desc: "Problèmes basés sur un document visuel simplifié (un menu, un plan, une affiche de prix).",
        iconName: "Image",
        template: `Agis en tant que créateur d'ateliers mathématiques amusants.
Conçois un problème illustré pour enfants de [ÂGE_MIN] à [ÂGE_MAX] ans sur le thème "[THEME]" (Visant : [CONTEXTE]).

Instructions :
1. Conçois de petites fiches visuelles textuelles (ex: l'affiche d'un magasin thématique avec les prix de 3 objets du recyclage, ou un panier avec plusieurs types de plantes).
2. Rédige des questions mathématiques s'appuyant uniquement sur ces visuels (combien coûtent le pot de fleur et la graine réunis ?).
3. Adapte le niveau de calcul à l'âge des enfants et propose la clé de décodage.`
      }
    ]
  },
  {
    id: "geometrie",
    title: "📐 Géométrie",
    iconName: "Compass",
    color: "purple",
    exercises: [
      {
        id: "geometrie-reproduire",
        title: "Reproduire une figure",
        app: "ChatGPT / Gemini",
        desc: "Exercices de dessin de figures ou de tracés sur quadrillage d'après un modèle.",
        iconName: "Layout",
        template: `Agis en tant que professeur d'école expert en arts géométriques.
Conçois une fiche de géométrie intitulée \"Le dessinateur précis\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans, sur le thème : "[THEME]".
L'objectif est d'aider les élèves à : [CONTEXTE].

Propose des consignes pour dessiner ou recopier pas-à-pas une forme géométrique thématique (un sapin sur quadrillage, une maison écologique...) en reliant des points numérotés ou en reproduisant un modèle réduit.
Spécifie le type de support requis (quadrillage de 1 cm, points de repère).`
      },
      {
        id: "geometrie-tracer",
        title: "Tracer avec règle ou équerre",
        app: "ChatGPT / Gemini",
        desc: "Entraîne l'utilisation des instruments d'école pour tracer des segments droits ou des angles droits.",
        iconName: "PenTool",
        template: `Agis en tant que tuteur de motricité et de tracé géométrique pour le primaire.
Crée un exercice de tracé thématique axé sur \"Tracer avec la règle et l'équerre\" sur "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif est de : [CONTEXTE].

Donne aux élèves des instructions pas-à-pas drôles et ultra-claires pour :
- Aligner correctement leur règle avec deux points sur "[THEME]".
- Tracer des segments de longueurs exactes (ex: 5 cm pour représenter un contenant).
- Chercher ou vérifier des angles droits à l'aide d'un gabarit ou d'une équerre.
Inclus les conseils pratiques de manipulation physique de l'outil pour l'élève.`
      },
      {
        id: "geometrie-formes",
        title: "Identifier des formes géométriques",
        app: "ChatGPT / Gemini",
        desc: "Reconnaissance et dénombrement des formes planes (carrés, triangles, cercles, rectangles).",
        iconName: "Brain",
        template: `Agis comme un enseignant de géométrie ludique.
Conçois un exercice pratique d'identification et de coloriage intitulé \"La chasse aux formes planes\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème choisi : "[THEME]". Objectif : [CONTEXTE].

Génère une scène composée de figures imbriquées les unes dans les autres formant un objet du thème (ex: une fusée spatiale, un robot trieur).
Demande aux enfants d'identifier, de compter et de colorier :
- Les triangles en vert.
- Les rectangles en bleu.
- Les carrés en jaune et les cercles en rouge.
Fournis un tableau récapitulatif pour inscrire le nombre de formes trouvées, avec le corrigé.`
      },
      {
        id: "geometrie-symetrie",
        title: "Symétrie",
        app: "ChatGPT / Gemini",
        desc: "Comprendre et compléter des dessins de formes symétriques par rapport à un axe.",
        iconName: "Sparkles",
        template: `Agis en tant que spécialiste de la symétrie axiale pour enfants.
Conçois une activité d'éveil géométrique sur la symétrie pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans sur le thème de : "[THEME]".
Objectif de la fiche : [CONTEXTE].

Instructions à produire :
1. Propose un défi de dessin où l'axe de symétrie (la ligne rouge verticale) coupe l'objet thématique en deux (ex: un joli papillon, une feuille d'arbre).
2. Explique de manière simple et limpide l'idée d'effet miroir pour reproduire le dessin du côté droit à l'identique.
3. Donne les conseils de repérage (compter les carreaux à partir de la ligne rouge).`
      },
      {
        id: "geometrie-quadrillage",
        title: "Repérage sur quadrillage",
        app: "ChatGPT / Gemini",
        desc: "Se repérer, coder et décoder des déplacements (ex: de type (A, 3) ou par flèches de direction).",
        iconName: "Compass",
        template: `Agis en tant que professeur de méthode de géographie et mathématiques.
Prépare un atelier de repérage spatial \"Mon petit plan quadrillé\" thématiquement lié à : "[THEME]".
Public visé : [ÂGE_MIN] à [ÂGE_MAX] ans. L'objectif est de : [CONTEXTE].

Génère une grille d'école (par exemple 4x4 ou 5x5) avec des coordonnées horizontales (de A à E) et verticales (de 1 à 5).
- Place quelques éléments thématiques d'éveil dans certaines cases (ex: une corbeille en B3, un sachet compostable en D2...).
- Propose des exercices où le jeune élève doit coder sa position (trouver les coordonnées d'un objet) ou tracer un itinéraire fléché.
- Fournis le schéma textuel de correction.`
      },
      {
        id: "geometrie-pavages",
        title: "Pavages",
        app: "ChatGPT / Gemini",
        desc: "Atelier de logique spatiale visant à poursuivre des rythmes géométriques de dallages colorés.",
        iconName: "Layout",
        template: `Agis en tant que concepteur de pavages et d'algorithmes géométriques.
Conçois un exercice de pavage thématique et de coloriage de motifs reproductibles pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans.
Thème d'ancrage : "[THEME]" (Visant : [CONTEXTE]).

Propose :
1. Une frise ou une mosaïque géométrique répétitive (patterns réguliers de triangles et carrés) déjà commencée.
2. La consigne d'observer attentivement l'ordre des couleurs ou des formes pour prolonger et colorier le reste du pavage proprement.
3. Inclus des clés d'explication de l'algorithme répété.`
      }
    ]
  },
  {
    id: "mesures",
    title: "⚖️ Grandeurs et mesures",
    iconName: "Activity",
    color: "blue",
    exercises: [
      {
        id: "mesures-heure",
        title: "Lire l’heure",
        app: "ChatGPT / Gemini",
        desc: "Entraînement de lecture de l'heure sur des horloges rondes ou conversion d'heures et de minutes.",
        iconName: "Activity",
        template: `Agis en tant que spécialiste du temps scolaire.
Conçois une fiche pédagogique intitulée \"Je lis l'heure\" thématiquement adaptée autour de "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif est de : [CONTEXTE].

Rédige un atelier comportant :
1. Un exercice demandant d'observer des horloges à aiguilles rondes et d'y lire l'heure correspondante (heures pleines pour les débutants, demi-heures ou minutes précises pour les élèves avancés).
2. Un exercice pour dessiner les aiguilles (la petite pour l'heure, la grande pour les minutes) d'après une heure numérique donnée.
3. Le corrigé complet des heures affichées.`
      },
      {
        id: "mesures-convertir",
        title: "Convertir des unités",
        app: "ChatGPT / Gemini",
        desc: "Pratiquer les tableaux de conversion simples pour les mètres, grammes ou litres.",
        iconName: "FileText",
        template: `Agis en tant que spécialiste de métrologie scolaire.
Prépare un atelier de conversion d'unités de mesures (longueurs - m, masses - g, ou contenances - l) lié à : "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif de cette séance est de : [CONTEXTE].

Propose :
1. Une petite histoire thématique mettant en scène des objets à mesurer (ex: la longueur d'une feuille d'arbre, la contenance d'une bouteille de tri).
2. Des calculs de conversions de mesures simples (ex: 2 m = ... cm, ou 5 kg = ... g).
3. Des explications courtes et un tableau de conversion dessiné en caractères simples.`
      },
      {
        id: "mesures-comparer-lmc",
        title: "La comparaison de grandeurs",
        app: "ChatGPT / Gemini",
        desc: "Classer des objets du plus lourd au plus léger, ou du plus grand au plus petit.",
        iconName: "Compass",
        template: `Agis en tant qu'instituteur d'école primaire. Conçois un atelier de comparaison intitulé \"Plus grand, plus lourd, plus volumineux !\" sur le thème "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif est de : [CONTEXTE].

Consignes de la leçon :
- Propose 3 à 4 paires ou listes d'objets courants sur le thème à classer du plus léger au plus lourd, ou du plus court au plus long (ex: comparer le poids d'un sac de pommes avec celui d'une plume d'oiseau).
- Formule des questions de sens physique ("Lequel contient le plus d'eau ?"). Inclus les solutions.`
      },
      {
        id: "mesures-perimetre-aire",
        title: "Calculer un périmètre ou une aire",
        app: "ChatGPT / Gemini",
        desc: "Découvrir la formule du contour (périmètre) ou du remplissage (aire) de carrés ou rectangles.",
        iconName: "Layout",
        template: `Agis en tant que professeur de mathématiques.
Élabore un atelier de mesure d'aire ou de périmètre adapté à des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans, autour du thème "[THEME]".
L'objectif est de : [CONTEXTE].

Conçois :
1. Un exercice demandant de mesurer le tour (périmètre) ou la surface (aire en carreaux) d'un jardin, d'une feuille de dessin ou d'un bac de tri thématique.
2. Rappelle de manière pédagogique et simple l'astuce de la formule (périmètre = la somme des côtés, ou aire = longueur x largeur).
3. Fournis le tracé logique et la correction arithmétique rigoureuse.`
      }
    ]
  },
  {
    id: "logique",
    title: "🧠 Logique",
    iconName: "Brain",
    color: "orange",
    exercises: [
      {
        id: "logique-suites",
        title: "Suites logiques",
        app: "ChatGPT / Gemini",
        desc: "Trouver l'objet ou la couleur suivante d'une séquence répétitive organisée.",
        iconName: "Brain",
        template: `Agis en tant que spécialiste d'éveil logique.
Prépare un exercice de suite logique intitulé \"Les algorithmes colorés\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans sur le thème de : "[THEME]".
Objectif : [CONTEXTE].

Produis :
- Des séries logiques de symboles textuels répétés (ex: "🌳, 🌸, 🌳, 🌸, ..." ou "⚪, ⚫, ⚪, ⚫, ...") à prolonger.
- Des devinettes sur l'intrus d'une séquence établie.
- Le corrigé expliquant la raison logique du choix.`
      },
      {
        id: "logique-sudoku",
        title: "Sudoku enfant",
        app: "ChatGPT / Gemini",
        desc: "Grilles de sudoku très simples (4x4) utilisant des chiffres ou petits symboles mignons.",
        iconName: "Layout",
        template: `Agis en tant que concepteur de puzzles de logique.
Conçois un Sudoku pour enfants d'une dimension 4x4 (facile et guidé) sur le thème "[THEME]" destiné à des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.

Instructions de génération :
1. Crée la grille en texte monospace espacé, comportant des lignes et colonnes où les chiffres (de 1 à 4) ou des émojis du thème ne doivent apparaître qu'une seule fois par ligne, colonne et grand carré d'angle.
2. Laisse de nombreuses cases pré-remplies (sudoku facile de découverte).
3. Fournis la grille solution entièrement résolue pour la vérification.`
      },
      {
        id: "logique-labyrinthes",
        title: "Labyrinthes",
        app: "ChatGPT / Gemini",
        desc: "Aide un petit personnage à traverser une structure d'obstacles pour trier son déchet.",
        iconName: "Compass",
        template: `Agis comme un concepteur de jeux d'orientation. Conçois l'exercice d'évitement thématique \"Le chemin secret\" pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans (Thème : "[THEME]").
L'objectif est de : [CONTEXTE].

Formule les consignes :
1. Met en scène une petite histoire (ex: un oisillon qui veut retrouver son nid de branches sans traverser la fumée).
2. Propose des instructions logiques de type labyrinthe ou grille de déplacements pas-à-pas (ex: "Avance de 2 cases, tourne à droite...").
3. Fournis la solution graphique sous forme textuelle ou la suite de directions clés.`
      },
      {
        id: "logique-enigmes",
        title: "Énigmes mathématiques",
        app: "ChatGPT / Gemini",
        desc: "Riddles amusants et calculs mystères à base d'indices de déduction.",
        iconName: "HelpCircle",
        template: `Agis en tant que maître des devinettes mathématiques d'école.
Prépare 3 énigmes de déduction et d'arithmétique joyeuses pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans sur "[THEME]".
Objectif de réflexion : [CONTEXTE].

Rédige des énigmes du type : \"Je suis un nombre plus grand que 5, plus petit que 10, ma moitié est un nombre impair... Qui suis-je ?\" ou en rapport amusant avec les objets de "[THEME]".
Détaille les indices et donne la clé de réflexion ainsi que la réponse attendue.`
      },
      {
        id: "logique-codes-secrets",
        title: "Codes secrets",
        app: "ChatGPT / Gemini",
        desc: "Décrypter un message thématique mystère en replaçant les lettres d'après une grille d'indices ou des calculs.",
        iconName: "Sparkles",
        template: `Agis en tant que grand décrypteur d'énigmes d'école.
Conçois un atelier amusant \"Le Grand Décodeur Mystère\" sur le thème de : "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
Objectif de la fiche : [CONTEXTE].

Instructions de l'activité :
1. Rédige un court message mystérieux en rapport direct avec "[THEME]".
2. Associe chaque lettre de l'alphabet à un symbole (émoji, petite forme, ou résultat d'un petit calcul arithmétique simple).
3. Présente le message chiffré sous forme de symboles à décoder.
4. Donne la phrase résolue en clair dans la correction.`
      }
    ]
  },
  {
    id: "sciences",
    title: "🔬 Sciences",
    iconName: "Atom",
    color: "rose",
    exercises: [
      {
        id: "science-schema",
        title: "Légender un schéma",
        app: "ChatGPT / Gemini",
        desc: "Propose d'associer des flèches numérotées sur une description ou une structure textuelle à légender.",
        iconName: "Image",
        template: `Agis en tant que professeur de SVT / sciences d'école primaire. Conçois une activité de type \"Légender un schéma\" sur le thème de : "[THEME]".
Public visé : enfants de [ÂGE_MIN] à [ÂGE_MAX] ans (Objectif : [CONTEXTE]).

Consignes de conception :
1. Crée un schéma textuel original ou décris une illustration à l'aide de caractères simples, de lignes ou d'une représentation organisée (ex: les parties d'une fleur, les couches de la Terre, les organes de la respiration) avec des numéros de (1) à (5) pointant sur les différentes parties.
2. Crée une liste à puces à trous pour l'élève correspondant aux numéros, par exemple :
   (1) : ________________________
   (2) : ________________________
3. Fournis la liste des mots d'aide (ex: racines, tige, feuille, pétale) thématiques pour guider l'élève.
4. Crée le corrigé détaillé.`
      },
      {
        id: "science-cycle",
        title: "Compléter un cycle (eau, plante, etc.)",
        app: "ChatGPT / Gemini",
        desc: "Fait ordonner les étapes chronologiques d'un phénomène scientifique (cycle de l'eau, de la plante...).",
        iconName: "Activity",
        template: `Agis en tant que pédagogue expert en sciences de la vie et de la Terre.
Conçois un exercice pratique interactif intitulé \"Compléter un cycle naturel\" sur ou intégrant le thème "[THEME]" pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif est d'assimiler les étapes clés de : [CONTEXTE].

Consignes de l'exercice :
1. Présente les différentes étapes du cycle scientifique (par exemple : le cycle de l'eau, développement d'un haricot, le cycle de vie de la grenouille, ou de la matière organique) de façon désordonnée.
2. Demande à l'élève de remettre dans le bon ordre chronologique les étapes (Étape A, Étape B, Étape C...) en inscrivant des numéros de 1 à 4 dans des cases ou des parenthèses.
3. Conserve un langage d'éveil, ludique, adapté à l'âge [ÂGE_MIN]-[ÂGE_MAX] ans.
4. Complète par la correction détaillée avec explication.`
      },
      {
        id: "science-associer",
        title: "Associer images et mots",
        app: "ChatGPT / Gemini",
        desc: "Jeu de correspondance entre des définitions scientifiques simples ou des objets d'observation et leur dénomination.",
        iconName: "Activity",
        template: `Agis en tant que créateur de supports éducatifs en sciences.
Prépare un atelier de vocabulaire scientifique d'association de mots pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans, sur le thème de : "[THEME]".
L'objectif est de : [CONTEXTE].

Rédige un exercice de type « Relie chaque mot à sa définition ou son rôle ». Un côté propose des objets d'observation, des notions ou phénomènes scientifiques liés au recyclage ou aux sciences naturelles, et l'autre côté propose de brèves explications/fonctions désordonnées.
Formate avec élégance et de manière lisible pour un tirage sur papier (pointillés de liaison). Fournis le corrigé des paires correctes.`
      },
      {
        id: "science-vrai-faux",
        title: "Vrai / Faux",
        app: "ChatGPT / Gemini",
        desc: "Série d'affirmations scientifiques à valider pour déconstruire les idées reçues de manière ludique.",
        iconName: "HelpCircle",
        template: `Agis en tant que vulgarisateur scientifique pour enfants.
Crée une feuille de route \"Vrai ou Faux Scientifique\" sur le thème "[THEME]" pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans.
Objectif : [CONTEXTE].

Formule 5 affirmations scientifiques surprenantes ou rigolotes mais vraies ou fausses (ex: "Les plantes dorment la nuit", "L'eau douce tombe du ciel déjà salée").
Pour chaque affirmation :
- Laisse un espace de réponse à cocher [  ] VRAI   [  ] FAUX.
- Rédige l'explication scientifique simple et magique que le parent ou l'instituteur lira à voix haute pour expliquer le phénomène.
- Inclus les réponses clés.`
      },
      {
        id: "science-qcm",
        title: "QCM",
        app: "ChatGPT / Gemini",
        desc: "Questions à choix multiples avec indices botaniques, géologiques ou physiques pour tester la curiosité de l'élève.",
        iconName: "FileText",
        template: `Agis en tant que concepteur d'évaluations scientifiques bienveillantes.
Conçois un questionnaire à choix multiples (QCM) sur le thème "[THEME]" destiné à des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans (Objectif de séance : [CONTEXTE]).

Rédige une série de questions scientifiques amusantes. Pour chaque question :
- Propose 3 choix de réponses possibles (A, B ou C).
- Assure-toi qu'une seule réponse est scientifiquement exacte.
- Ajoute un commentaire pédagogique mignon (ex: "Le savais-tu ?") pour étendre les connaissances de l'élève.
- Fournis la clé de correction finale.`
      },
      {
        id: "science-experiences",
        title: "Expériences à observer",
        app: "ChatGPT / Gemini",
        desc: "Protocole expérimental ultra-simple, sécurisé, réalisable en classe ou à la maison (démarche d'investigation).",
        iconName: "Activity",
        template: `Agis en tant que maître de sciences expérimentales en école primaire.
Conçois un atelier de démarche d'investigation \"L'expérience curieuse du jour\" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans sur le thème de : "[THEME]".
L'objectif poursuivi est de : [CONTEXTE].

Structure le document avec les rubriques claires et amusantes suivies de questions d'observation :
1. **Le Défi :** La question de départ (Ex: \"La lumière peut-elle traverser l'eau ?\").
2. **La boîte à outils :** Ustensiles domestiques ou scolaires ultra-simples, sans aucun danger.
3. **Le protocole pas-à-pas :** Ce qu'il faut faire en 3 étapes.
4. **Mes observations :** Une zone de texte à remplir pour que l'enfant écrive ce qu'il a constaté ou dessine le résultat.
5. **Le secret scientifique :** L'explication du phénomène adapté à l'âge.`
      },
      {
        id: "science-classements",
        title: "Classements d’animaux ou d’objets",
        app: "ChatGPT / Gemini",
        desc: "Atelier de tri et catégorisation d'animaux (vertébrés/invertébrés, carnivores...) ou de matières (verre/plastique).",
        iconName: "Layout",
        template: `Agis en tant que spécialiste en classification biologique et en sciences appliquées pour le primaire.
Prépare un atelier de tri intitulé "Le grand classement de la nature" portant sur l'environnement de "[THEME]" pour des enfants de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif est d'apprendre à classer : [CONTEXTE].

Consignes spécifiques :
1. Donne une liste de 6 à 8 éléments (animaux, plantes, matières, types de déchets) en rapport avec le thème "[THEME]".
2. Propose deux catégories de classification très nettes (ex: Vivant / Non-vivant, Herbivore / Carnivore, Recyclable / Non-recyclable, Solide / Liquide).
3. Dessine un tableau simple à deux colonnes où l'élève recopie les mots de départ au bon endroit.
4. Inclus la solution complète.`
      }
    ]
  },
  {
    id: "hist-geo",
    title: "🗺️ Histoire / Géo",
    iconName: "Globe",
    color: "amber",
    exercises: [
      {
        id: "hist-frise",
        title: "Frises chronologiques",
        app: "ChatGPT / Gemini",
        desc: "Permet d'ordonner chronologiquement des événements majeurs sur une frise temporelle graduée.",
        iconName: "Activity",
        template: `Agis en tant que professeur d'Histoire passionné pour l'école primaire. Conçois une fiche pédagogique "Ma première frise chronologique" sur le thème : "[THEME]".
Public ciblé : enfants de [ÂGE_MIN] à [ÂGE_MAX] ans. L'objectif est de : [CONTEXTE].

Consignes pour l'exercice :
1. Représente graphiquement une ligne temporelle linaire simple en caractères textuels (ex : [Événement A] ➔ [Événement B] ➔ ...).
2. Propose 3 à 5 événements historiques majeurs ou étapes thématiques liés à "[THEME]" présentés de manière désordonnée avec leurs dates ou siècles.
3. Demande à l'élève de les replacer dans le bon ordre chronologique sur les pointillés ou dans les cases de la frise.
4. Fournis un corrigé clair expliquant la chronologie de manière simple.`
      },
      {
        id: "geo-carte",
        title: "Cartes à compléter",
        app: "ChatGPT / Gemini",
        desc: "Atelier d'identification de continents, pays, fleuves ou régions sur des cartes ou schémas légendés.",
        iconName: "Layout",
        template: `Agis en tant que professeur de Géographie pour des élèves du primaire. Conçois un atelier intitulé "Compléter ma carte" thématiquement axé sur "[THEME]".
Niveau : [ÂGE_MIN] à [ÂGE_MAX] ans. L'objectif est de : [CONTEXTE].

Consignes de conception :
1. Conçois une carte ou un plan simplifié représenté en caractères ASCII (ex : continents, océans ou zones géographiques représentés par des formes ou espaces textuels) avec des flèches numérotées de (1) à (4).
2. Fournis une boîte d'aide contenant les termes géographiques thématiques à placer (ex: Océan Atlantique, Europe, Fleuve...).
3. Demande à l'élève de remplir le tableau de correspondances numéro-légende.
4. Inclus le corrigé étape par étape.`
      },
      {
        id: "hist-relier-date",
        title: "Relier événement et date",
        app: "ChatGPT / Gemini",
        desc: "Exercice d'association reliant les grands moments ou découvertes à leurs dates clés.",
        iconName: "Activity",
        template: `Agis en tant qu'historien didacticien. Prépare un jeu de correspondance "Les dates de l'histoire" lié au thème de "[THEME]" pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif est d'aider les élèves à : [CONTEXTE].

Consignes de l'exercice :
1. Propose deux colonnes alignées à relier par des flèches ou pointillés.
   - Colonne de gauche : 4 événements ou moments forts en rapport avec "[THEME]".
   - Colonne de droite : 4 dates ou périodes clés mélangées.
2. Formule une consigne d'introduction ludique.
3. Donne la solution exacte de chaque association.`
      },
      {
        id: "hist-personnages",
        title: "Associer personnages et faits",
        app: "ChatGPT / Gemini",
        desc: "Met en relation des figures historiques renommées avec leurs actions ou accomplissements marquants.",
        iconName: "Brain",
        template: `Agis en tant que professeur d'Histoire. Prépare un atelier "Les grands personnages et leurs exploits" centré ou intégrant le thème de "[THEME]" pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans.
L'objectif est de : [CONTEXTE].

Instructions de l'exercice :
1. Présente une liste de 3 à 4 figures historiques importantes (ex: explorateurs, inventeurs, rois, scientifiques célèbres).
2. Propose en face une liste de descriptions ou faits marquants de manière mélangée.
3. Demande à l'élève d'associer le personnage au fait qui lui correspond (ex: en écrivant la lettre correspondante).
4. Fournis une anecdote mignonne pour chaque personnage pour enrichir la culture générale de l'élève.
5. Inclus le corrigé complet.`
      },
      {
        id: "geo-reperage",
        title: "Repérage géographique",
        app: "ChatGPT / Gemini",
        desc: "Entraînement de lecture de cartes, orientations (Nord, Sud, Est, Ouest) ou plans d'éveil.",
        iconName: "Compass",
        template: `Agis en tant que géographe spécialisé dans la pédagogie de l'orientation spatiale.
Prépare un exercice "Savoir s'orienter sur la Terre" pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans sur le thème de "[THEME]" (Visant : [CONTEXTE]).

Consignes de la leçon :
1. Crée un repère de rose des vents simplifié (Nord, Sud, Est, Ouest) et une petite carte ou grille textuelle.
2. Pose 3 à 4 énigmes de déplacement thématiques (ex : "Si tu pars de la forêt et que tu te diriges vers le Sud, quel élément de [THEME] rencontres-tu ?").
3. Demande d'utiliser les termes de direction cardinaux pour répondre.
4. Intègre de jolies explications et le corrigé complet.`
      },
      {
        id: "hist-geo-questions",
        title: "Questions de compréhension",
        app: "ChatGPT / Gemini",
        desc: "Série de questions courtes d'analyse documentaires ou de récits historiques/géographiques courts.",
        iconName: "FileText",
        template: `Agis en tant que professeur d'Histoire-Géographie du primaire.
Conçois une fiche pédagogique "Mon dossier documentaire d'Histoire-Géo" sur le thème de "[THEME]".
Public cible : [ÂGE_MIN] à [ÂGE_MAX] ans. L'objectif est de : [CONTEXTE].

Consignes de génération :
1. Rédige un court texte documentaire narratif et passionnant de 5 à 10 lignes sur un fait d'histoire ou de géographie relié à "[THEME]".
2. Formule 3 questions de compréhension à choix multiples ou à réponses courtes pour vérifier que l'élève a bien repéré les informations clés du texte.
3. Propose un mini-lexique des mots difficiles.
4. Rédige les réponses attendues détaillées.`
      }
    ]
  },
  {
    id: "langues",
    title: "🗣️ Langues étrangères",
    iconName: "Languages",
    color: "indigo",
    exercises: [
      {
        id: "langues-associer",
        title: "Associer image et mot",
        app: "ChatGPT / Gemini",
        desc: "Jeu d'association pour relier des notions illustrées ou des descriptions de dessins simples à leurs noms en langue étrangère.",
        iconName: "Image",
        template: `Agis en tant que professeur de langues étrangères passionné. Conçois une activité d'association "Mots et Images" thématiquement axée sur "[THEME]" (langue cible spécifiée par le thème ou contexte, par exemple Anglais, Espagnol, Allemand, sinon Anglais par défaut).
Public ciblé : enfants de [ÂGE_MIN] à [ÂGE_MAX] ans. L'objectif est de : [CONTEXTE].

Consignes de conception de la fiche :
1. Crée 4 à 5 descriptions imagées d'objets entre crochets ou de petits dessins textuels simples (ex : [🍎 Dessin d'une pomme rouge ], [🐶 Dessin d'un petit chien ], etc.).
2. À côté, propose les noms correspondants dans la langue étrangère cible, de manière désordonnée (ex : a dog, an apple...).
3. Demande à l'élève de relier chaque image à sa bonne traduction en écrivant le bon chiffre ou en traçant une ligne.
4. Fournis le corrigé des paires exactes.`
      },
      {
        id: "langues-vocabulaire",
        title: "Exercices de vocabulaire",
        app: "ChatGPT / Gemini",
        desc: "Fiches de vocabulaire thématiques ludiques avec des petits défis d'écriture en langue étrangère.",
        iconName: "BookOpen",
        template: `Agis en tant qu'expert en didactique des langues vivantes. Conçois une fiche de vocabulaire thématique ludique centrée sur "[THEME]" (langue cible par défaut : Anglais, ou celle demandée).
Niveau de l'élève : [ÂGE_MIN] à [ÂGE_MAX] ans. Objectif de séance : [CONTEXTE].

Consignes :
1. Présente un mini-répertoire de 4 à 6 mots clés indispensables traduits et illustrés par une phrase d'exemple simple.
2. Formule deux exercices courts et interactifs :
   - Exercice A : Un mini-quiz pour deviner le mot d'après sa définition simple en français.
   - Exercice B : Traduire de courtes phrases vers la langue cible ou inversement.
3. Ajoute un bonus d'astuce de prononciation rigolo.
4. Rédige le corrigé complet pour l'enseignant ou le parent.`
      },
      {
        id: "langues-trous",
        title: "Textes à trous",
        app: "ChatGPT / Gemini",
        desc: "Récit court ou phrases à compléter avec des mots de vocabulaire cibles pour asseoir la compréhension.",
        iconName: "FileText",
        template: `Agis en tant que professeur de langues étrangères. Conçois un exercice de type "Texte à trous" dans la langue cible du thème "[THEME]" pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans (Objectif : [CONTEXTE]).

Consignes :
1. Rédige un paragraphe de 4 à 6 phrases simples et claires dans la langue étrangère étudiée, où plusieurs mots clés de vocabulaire liés au thème sont judicieusement remplacés par des pointillés : "__________".
2. Fournis une boîte d'aide thématique contenant les mots manquants à replacer.
3. Rédige la traduction en français du texte complet juste en dessous pour aider à la compréhension globale.
4. Ajoute le corrigé complet.`
      },
      {
        id: "langues-croises",
        title: "Mots croisés",
        app: "ChatGPT / Gemini",
        desc: "Une grille textuelle simplifiée de mots croisés ou fléchés thématiques dans la langue étrangère cible.",
        iconName: "Activity",
        template: `Agis au mieux pour élaborer un jeu d'esprit pédagogique. Conçois des "Mots Croisés thématiques" en langue étrangère sur le thème de "[THEME]".
Public visé : élèves de [ÂGE_MIN] à [ÂGE_MAX] ans. L'objectif est : [CONTEXTE].

Consignes de l'exercice :
1. Élabore une liste de 4 à 5 définitions simples (soit en français pour faire traduire, soit dans la langue cible pour les plus grands).
2. Fournis une grille de placement simplifiée représentée en caractères textuels ou donnez un tableau d'aide à la répartition (cases horizontales et verticales).
3. Ajoute une boîte d'aide facultative avec les mots mélangés si la difficulté demandée le requiert.
4. Donne la liste des mots à remplir et les réponses dans le corrigé de l'enseignant.`
      },
      {
        id: "langues-dialogues",
        title: "Dialogues à compléter",
        app: "ChatGPT / Gemini",
        desc: "Une petite conversation théâtrale ou bande dessinée textuelle à phrases alternées avec des bulles de répliques à remplir.",
        iconName: "MessageSquare",
        template: `Agis en tant que dramaturge éducatif en langues vivantes. Conçois un "Dialogue à compléter" mettant en scène une situation du quotidien liée à "[THEME]".
Public : Enfants de [ÂGE_MIN] à [ÂGE_MAX] ans. Objectif communicatif : [CONTEXTE].

Consignes d'élaboration :
1. Rédige une conversation courte et amusante à deux personnages (ex: Tom et Lucy) dans la langue cible.
2. Laisse 4 répliques avec des trous ou des phrases entières à compléter à l'aide de propositions ou d'expressions usuelles (ex: salutations, formule de politesse).
3. Donne des indices en français entre parenthèses pour guider l'élève (ex: "Tom: Hello, how are you? / Lucy: (Répondre que ça va bien, et toi ?) _________________").
4. Rédige un corrigé type idéal.`
      }
    ]
  },
  {
    id: "arts-motricite",
    title: "🎨 Arts & Motricité",
    iconName: "Palette",
    color: "purple",
    exercises: [
      {
        id: "arts-coloriages",
        title: "Coloriages éducatifs",
        app: "ChatGPT / Gemini",
        desc: "Description de scène imagée à colorier intégrant des consignes d'observation créatives ou des associations d'exploration.",
        iconName: "Palette",
        template: `Agis en tant que professeur d'arts plastiques pour les tout-petits. Conçois une fiche d'activité "Coloriage Éducatif" sur le thème : "[THEME]".
Public visé : [ÂGE_MIN] à [ÂGE_MAX] ans (Objectif : [CONTEXTE]).

Consignes de conception :
1. Crée une description vivante et détaillée d'une grande scène imaginaire à colorier (ex: une forêt magique, un fond marin propre) en rapport avec "[THEME]".
2. Propose des instructions de coloriage basées sur l'observation ou des défis mignons (ex: "Colorie en vert chaque petite grenouille cachée", "Dessine 3 papillons autour du thème").
3. Ajoute des consignes créatives supplémentaires adaptées à l'âge (ex: décorer les marges, inventer une suite au dessin).
4. Fournis un exemple de guide de couleurs suggéré et des critères d'évaluation de la motricité fine (tenue du crayon, respect des contours).`
      },
      {
        id: "arts-coloriages-codes",
        title: "Coloriages codés",
        app: "ChatGPT / Gemini",
        desc: "Colorier des zones désignées par des codes de calculs, formes ou lettres pour former un modèle d'éveil.",
        iconName: "Wand2",
        template: `Agis en tant que pédagogue expert en motricité fine et calcul de base. Conçois un atelier de "Coloriage Codé" (Magic Coloring) lié à "[THEME]".
Public ciblé : enfants de [ÂGE_MIN] à [ÂGE_MAX] ans (Objectif : [CONTEXTE]).

Consignes de conception :
1. Crée une légende d'association entre des codes et des couleurs (ex: Code 1 ou Forme Triangle = Bleu ciel, Code 2 ou Carré = Jaune d'or...).
2. Propose une grille de dessin simplifiée en caractères textuels (ASCII art ou tableau numéroté) où chaque zone contient un code (Triangle, Carré, Rond...) ou une opération/lettre simple.
3. Demande à l'élève de colorier chaque compartiment selon le guide fourni pour révéler la scène finale liée à "[THEME]".
4. Indique ce que le dessin mystère représente et fournis la clé de décodage complète.`
      },
      {
        id: "arts-pixel-art",
        title: "Pixel art",
        app: "ChatGPT / Gemini",
        desc: "Grille de pixels en caractères ou carrés à reproduire ou à remplir selon un modèle géométrique amusant.",
        iconName: "Layout",
        template: `Agis en tant que créateur de ressources pixel art pédagogiques. Conçois une grille d'activité "Mon Premier Pixel Art" sur le thème : "[THEME]".
Niveau : [ÂGE_MIN] à [ÂGE_MAX] ans. L'objectif est de : [CONTEXTE].

Consignes de l'exercice :
1. Crée une boîte de guide étape par étape expliquant comment remplir une grille (ex : de 8x8 ou 10x10 carreaux).
2. Présente la grille textuelle dessinable à reproduire (représentée par des coordonnées de lignes A à H et colonnes 1 à 8) avec des indications de remplissage précises (ex: "Ligne A, colonnes 3, 4 et 5 en noir...").
3. Décris l'objet thématique qui va apparaître (ex: une fleur, une fusée, une feuille d'arbre).
4. Donne la vue résolue en caractères.`
      },
      {
        id: "arts-decoupage",
        title: "Découpage",
        app: "ChatGPT / Gemini",
        desc: "Atelier de découpage de formes géométriques ou contours pour assembler des objets ou des éléments thématiques.",
        iconName: "Scissors",
        template: `Agis en tant qu'instituteur spécialisé en motricité fine. Conçois une fiche pédagogique "Atelier Découpage & Collage" liée à "[THEME]".
Niveau ciblé : enfants de [ÂGE_MIN] à [ÂGE_MAX] ans. L'objectif est : [CONTEXTE].

Consignes de conception de la fiche :
1. Décris 3 à 4 formes de pièces ou de contours dessinés représentés de manière imagée (ex: "Pièce A : Le tronc solide de l'arbre - pointillés longs de découpe", "Pièce B : La couronne de feuilles...").
2. Explique le protocole sécurisé pas à pas : comment tenir ses ciseaux, comment découper le long des pointillés tracés avec soin "✂️ - - - -".
3. Donne les consignes de collage final sur la feuille support (ex: "Colle la Pièce B juste au-dessus de la Pièce A pour assembler ton paysage de [THEME]").
4. Inclus des recommandations pour la sécurité (surveillance d'un adulte, ciseaux à bouts ronds) et des critères d'évaluation.`
      },
      {
        id: "arts-pliage",
        title: "Pliage (Origami)",
        app: "ChatGPT / Gemini",
        desc: "Instructions pas à pas très claires pour réaliser un pliage thématique d'origami ou d'éveil manuel.",
        iconName: "Activity",
        template: `Agis en tant que maître en art du pliage (Origami) adapté au primaire. Rédige un guide de pliage "Mon premier Origami en papier" sur le thème ou intégrant la forme de : "[THEME]".
Pour des élèves de [ÂGE_MIN] à [ÂGE_MAX] ans. L'objectif est de : [CONTEXTE].

Consignes de rédaction :
1. Indique la forme du papier de départ nécessaire (ex : une feuille carrée de 15x15 cm).
2. Divise la réalisation en 5 étapes extrêmement simples à comprendre, décrites avec un vocabulaire adapté (ex: "Plie le coin du haut vers le bas comme un chapeau", "Amène la pointe droite sur la pointe gauche...").
3. Ajoute des petits dessins de repères textuels d'étapes (ex : ◸, ▭, ▽) s'il y a lieu.
4. Encourage l'enfant à colorier et personnaliser son origami une fois terminé.`
      },
      {
        id: "arts-dessin-guide",
        title: "Dessin guidé",
        app: "ChatGPT / Gemini",
         desc: "Dessiner étape par étape (Step-by-step) des formes simples pour apprendre à dessiner un animal ou un élément du thème.",
        iconName: "PenTool",
        template: `Agis en tant qu'illustrateur jeunesse et enseignant de dessin. Conçois un support de "Dessin Guidé Pas-à-Pas" pour dessiner un élément emblématique de "[THEME]" !
Groupe d'âge : [ÂGE_MIN] à [ÂGE_MAX] ans. Objectif de motricité fine : [CONTEXTE].

Consignes de la leçon :
1. Propose un défi de dessin rigolo (ex: "Comment dessiner un petit renard géométrique" ou "un château fort").
2. Divise la leçon en 4 étapes de tracés élémentaires :
   - Étape 1 : On commence par dessiner la forme de base (ex: un grand cercle en haut au milieu de la feuille).
   - Étape 2 : On ajoute des formes de détails simples (ex: deux petits triangles pour les oreilles).
   - Étape 3 : On structure les contours des lignes intérieures.
   - Étape 4 : On dessine les détails finaux (yeux, sourires, texture).
3. Laisse un grand espace blanc d'auto-entraînement à l'élève avec des encouragements ludiques.`
      },
      {
        id: "arts-graphisme",
        title: "Graphisme",
        app: "ChatGPT / Gemini",
        desc: "Lignes, boucles, vagues, ponts ou spirales à tracer pour s'exercer au geste de l'écriture (pré-écriture créative).",
        iconName: "Activity",
        template: `Agis en tant que spécialiste en graphisme de maternelle / primaire. Prépare un atelier d'écriture créative "Mes jolis tracés graphiques" centré sur "[THEME]".
Public : Enfants de [ÂGE_MIN] à [ÂGE_MAX] ans. Objectif physique : [CONTEXTE].

Consignes rigoureuses :
1. Crée des motifs répétitifs de tracés de pré-écriture à compléter (ex : des vagues d'eau ~~~~ , des boucles serrées eeee, des créneaux de châteaux ┌┐┌┐, des ponts sauteurs ⌒⌒⌒).
2. Lie ces tracés à une histoire liée à "[THEME]" (ex : "Aide les petits poissons à nager en traçant de jolies vagues régulières").
3. Présente des lignes de pointillés prêtes à être tracées ou poursuivies par les enfants, par exemple :
   ⌒⌒⌒⌒⌒⌒⌒⌒⌒ ... . . .
   ~~~~~~~~~~~~~~~~ ... . . .
4. Propose d'évaluer la fluidité, le contrôle de la direction du tracé (de gauche à droite) et la régularité.`
      }
    ]
  }
];
