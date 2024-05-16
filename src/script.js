window.onload = function() {
    loadQuestions();

    // Récupérer le score du stockage local
    const savedScore = localStorage.getItem('score');

    // Si un score a été enregistré, l'afficher
    if (savedScore) {
        document.getElementById('lastScore').textContent = 'Votre dernier score était: ' + savedScore;
    }
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

function loadQuestions() {
    // Récupérer la catégorie de questions depuis les paramètres de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    // Créer un élément de titre
    const titleElement = document.createElement("h1");
    titleElement.textContent = "Catégorie : " + category;

    const displayTitle = document.getElementById("questionsContainer");

    // Ajouter le titre avant #questionsContainer
    displayTitle.before(titleElement);

    // Filtrer les questions en fonction de la catégorie et les rendre
    const filteredQuestions = data.filter(question => question.category === category);
    renderQuestions(filteredQuestions);
}

function navigateToPlayground(category) {
    // Rediriger l'utilisateur vers la page de jeu en spécifiant la catégorie
    window.location.href = 'playground.html?category=' + category;
}

function renderQuestions(questions) {
    // Rendre les questions dans le conteneur approprié sur la page de jeu
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = '';

    questions.forEach((question, index) => {
        // Créer un élément pour chaque question avec ses options
        const questionElement = document.createElement('div');
        questionElement.classList.add('questionContainer');

        // Ajouter le texte de la question
        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        questionElement.appendChild(questionText);

        // Créer une div pour les boutons d'options
        const optionsContainer = document.createElement("div");
        optionsContainer.classList.add("optionsContainer");

        // Ajouter les boutons d'options avec gestionnaire de clic
        for (let i = 1; i <= 4; i++) {
            const optionButton = document.createElement('button');
            optionButton.classList.add('option');
            optionButton.textContent = question['option' + i];
            optionButton.onclick = () => handleOptionSelect(optionButton);
            optionsContainer.appendChild(optionButton);
        }

        // Ajouter la div des options au conteneur de la question
        questionElement.appendChild(optionsContainer);

        // Ajouter la question rendue au conteneur principal des questions
        questionsContainer.appendChild(questionElement);
    });
}


let userAnswers = []
function handleOptionSelect(optionButton) {
    // Gérer la sélection d'une option en mettant à jour les styles
    const questionContainer = optionButton.closest('.questionContainer');

    // Supprimer la classe "selected" de tous les boutons d'options dans ce conteneur de question
    const optionButtons = questionContainer.querySelectorAll('.option');
    optionButtons.forEach((button, index) => {
        button.classList.remove('selected');
        // Si le bouton sélectionné est le bouton actuel, enregistrez la réponse de l'utilisateur
        if (button === optionButton) {
            userAnswers[Array.from(questionContainer.parentNode.children).indexOf(questionContainer)] = index + 1;
        }
    });

    // Ajouter la classe "selected" au bouton d'option sélectionné
    optionButton.classList.add('selected');
}

function handleSubmit() {
    // Calculer le score en comparant les réponses de l'utilisateur avec les bonnes réponses
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const filteredQuestions = data.filter(question => question.category === category);
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === filteredQuestions[index].correctOption) {
            score++;
        }
    });

    // Afficher le score dans le conteneur de résultats
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.textContent = 'Votre score est: ' + score + '/' + filteredQuestions.length;

    // Montrer le bouton "Enregistrer le score"
    document.getElementById('saveScoreButton').style.display = 'block';
}

function handleSaveScore() {
    // Obtenir le texte complet du conteneur de résultats
    const fullText = document.getElementById('resultsContainer').textContent;

    // Extraire le score du texte complet
    const score = fullText.split(': ')[1];

    // Enregistrer le score dans le stockage local
    localStorage.setItem('score', score);
}