window.onload = function() {
    loadQuestions();
};

const data = [
    {
        "question": "Quelle est la plus petite planète de notre système solaire ?",
        "option1": "Mars",
        "option2": "Venus",
        "option3": "Mercure",
        "option4": "Pluton",
        "correctOption": 3,
        "category": "science",
        "difficulty": "easy"
    },
    {
        "question": "Quel est le nom de la plus grande plateforme de réseaux sociaux ?",
        "option1": "Twitter",
        "option2": "Instagram",
        "option3": "Facebook",
        "option4": "LinkedIn",
        "correctOption": 3,
        "category": "technology",
        "difficulty": "medium"
    },
    {
        "question": "Qui détient le record du plus grand nombre de buts marqués en une seule Coupe du Monde de la FIFA ?",
        "option1": "Diego Maradona",
        "option2": "Pele",
        "option3": "Ronaldo",
        "option4": "Just Fontaine",
        "correctOption": 4,
        "category": "sports",
        "difficulty": "medium"
    },
    {
        "question": "Quel est le nom du phénomène par lequel la pleine lune apparaît plus grande et plus brillante que la normale ?",
        "option1": "Super lune",
        "option2": "Lune bleue",
        "option3": "Lune des moissons",
        "option4": "Lune de sang",
        "correctOption": 1,
        "category": "science",
        "difficulty": "hard"
    },
    {
        "question": "Quelle entreprise est le plus grand producteur de processeurs informatiques ?",
        "option1": "Intel",
        "option2": "AMD",
        "option3": "Nvidia",
        "option4": "Apple",
        "correctOption": 1,
        "category": "technology",
        "difficulty": "easy"
    },
    {
        "question": "Quel pays a remporté la première Coupe du monde de la FIFA en 1930 ?",
        "option1": "Uruguay",
        "option2": "Brésil",
        "option3": "Argentine",
        "option4": "Italie",
        "correctOption": 1,
        "category": "sports",
        "difficulty": "hard"
    },
    {
        "question": "Quel est le symbole chimique de l'or ?",
        "option1": "Ag",
        "option2": "Au",
        "option3": "Fe",
        "option4": "Cu",
        "correctOption": 2,
        "category": "science",
        "difficulty": "easy"
    },
    {
        "question": "Quel est le nom de la plus grande planète de notre système solaire ?",
        "option1": "Mars",
        "option2": "Saturn",
        "option3": "Jupiter",
        "option4": "Uranus",
        "correctOption": 3,
        "category": "science",
        "difficulty": "medium"
    },
    {
        "question": "Quel est le nom du premier site web jamais créé ?",
        "option1": "Google",
        "option2": "Yahoo",
        "option3": "Amazon",
        "option4": "CERN",
        "correctOption": 4,
        "category": "technology",
        "difficulty": "hard"
    },
    {
        "question": "Quel pays a remporté le plus grand nombre de médailles d'or olympiques de tous les temps ?",
        "option1": "États-Unis",
        "option2": "Russie",
        "option3": "Chine",
        "option4": "Allemagne",
        "correctOption": 1,
        "category": "sports",
        "difficulty": "hard"
    },
    {
        "question": "Quel est le nom du premier langage de programmation ?",
        "option1": "C",
        "option2": "Fortran",
        "option3": "Java",
        "option4": "Python",
        "correctOption": 2,
        "category": "technology",
        "difficulty": "hard"
    },
    {
        "question": "Quel pays a remporté le plus grand nombre de tournois de la Coupe du monde de la FIFA ?",
        "option1": "Brésil",
        "option2": "Allemagne",
        "option3": "Argentine",
        "option4": "Italie",
        "correctOption": 1,
        "category": "sports",
        "difficulty": "hard"
    },
    {
        "question": "Que signifie l'acronyme HTML ?",
        "option1": "Hyperlink Text Markup Language",
        "option2": "Hypertext Markup Language",
        "option3": "Hypermedia Text Markup Language",
        "option4": "Hypertext Transfer Markup Language",
        "correctOption": 2,
        "category": "technology",
        "difficulty": "medium"
    },
    {
        "question": "En quelle année Usain Bolt a-t-il battu le record du monde du 100m?",
        "option1": "2008",
        "option2": "2012",
        "option3": "2016",
        "option4": "2020",
        "correctOption": 1,
        "category": "sports",
        "difficulty": "medium"
    },
    {
        "question": "Quel est le nom du plus grand système de récifs coralliens au monde ?",
        "option1": "Récif de l'Amazone",
        "option2": "Grande Barrière de Corail",
        "option3": "Récif de la barrière de Belize",
        "option4": "Barrière de corail méso-américaine",
        "correctOption": 2,
        "category": "science",
        "difficulty": "medium"
    },
    {
        "question": "Quel est le nom du premier ordinateur personnel commercialisé ?",
        "option1": "IBM PC",
        "option2": "Apple Macintosh",
        "option3": "Compaq Portable",
        "option4": "Atari 800",
        "correctOption": 1,
        "category": "technology",
        "difficulty": "hard"
    },
    {
        "question": "Quel est le numéro atomique de l'oxygène ?",
        "option1": "6",
        "option2": "8",
        "option3": "10",
        "option4": "12",
        "correctOption": 2,
        "category": "science",
        "difficulty": "easy"
    },
    {
        "question": "Quel pays a remporté le plus grand nombre de médailles d'or olympiques (été et hiver confondus) ?",
        "option1": "États-Unis",
        "option2": "Russie",
        "option3": "Chine",
        "option4": "Allemagne",
        "correctOption": 1,
        "category": "sports",
        "difficulty": "hard"
    }
];