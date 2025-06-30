
// Données des étudiants (à personnaliser avec les vrais noms et liens portfolio)
const students = [
    {
        id: 1,
        firstName: "Romain",
        lastName: "FRUCHON",
        portfolioUrl: "https://portfolio-romain-fruchon.web.app/",
        image: "photo/ROMAIN.png",
    },
    {
        id: 2,
        firstName: "Dawit",
        lastName: "ADAM",
        portfolioUrl: "https://sophie-dubois-portfolio.com",
        image: "photo/ADAM.png",
    },
    {
        id: 3,
        firstName: "Baptiste",
        lastName: "GABRIEL",
        portfolioUrl: "https://thomas-leroy-portfolio.com",
        image: "photo/BAPTISTE.png",
    },
    {
        id: 4,
        firstName: "Alexandre",
        lastName: "IMBERT",
        portfolioUrl: "https://emma-bernard-portfolio.com",
        image: "photo/ALEX.png",
    },
    {
        id: 5,
        firstName: "Coran",
        lastName: "LACHEVRE",
        portfolioUrl: "https://lucas-petit-portfolio.com",
        image: "photo/CORAN.png",
    },
    {
        id: 6,
        firstName: "Élina",
        lastName: "DEVAUCHELLE",
        portfolioUrl: "https://camille-robert-portfolio.com",
        image: "photo/ELINA.png",
    },
    {
        id: 7,
        firstName: "Ilan",
        lastName: "ATLAN",
        portfolioUrl: "https://antoine-richard-portfolio.com",
        image: "photo/ILAN.png",
    },
    {
        id: 8,
        firstName: "Ilyass",
        lastName: "BOUHASSOUN",
        portfolioUrl: "https://clara-moreau-portfolio.com",
        image: "photo/ILYASS.png",
    },
    {
        id: 9,
        firstName: "Jordan",
        lastName: "HUSTACHE",
        portfolioUrl: "https://maxime-simon-portfolio.com",
        image: "photo/JORDAN.png",
    },
    {
        id: 10,
        firstName: "Kevin",
        lastName: "ALBOUY",
        portfolioUrl: "https://lea-laurent-portfolio.com",
        image: "photo/KEVIN.png",
    },
    {
        id: 11,
        firstName: "Mathéo",
        lastName: "GRECH",
        portfolioUrl: "https://hugo-michel-portfolio.com",
        image: "photo/MATHEO.png",
    },
    {
        id: 12,
        firstName: "Remi",
        lastName: "SOULIER",
        portfolioUrl: "https://marine-garcia-portfolio.com",
        image: "photo/REMI.png",
    },
    {
        id: 12,
        firstName: "Menzo",
        lastName: "PLUCHET",
        portfolioUrl: "https://marine-garcia-portfolio.com",
        image: "photo/MENZO.png",
    },
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const studentsGrid = document.getElementById('studentsGrid');

// Navigation mobile
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Génération du trombinoscope avec gestion des images
function generateStudentsGrid() {
    if (!studentsGrid) return;
    
    studentsGrid.innerHTML = '';
    
    students.forEach((student, index) => {
        const studentCard = document.createElement('div');
        studentCard.className = 'student-card fade-in';
        studentCard.style.animationDelay = `${index * 0.1}s`;
        
        // Créer le contenu de l'image selon si une photo existe ou non
        const initials = student.firstName.charAt(0) + student.lastName.charAt(0);
        let imageContent;
        
        if (student.image && student.image !== null) {
            // Si une image est fournie, l'utiliser
            imageContent = `
                <img src="${student.image}" alt="${student.firstName} ${student.lastName}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div class="student-fallback" style="display: none;">
                    <div class="student-initials">${initials}</div>
                </div>
            `;
        } else {
            // Sinon, utiliser les initiales avec un gradient coloré
            const colors = [
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
                'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
            ];
            const colorIndex = student.id % colors.length;
            
            imageContent = `
                <div class="student-fallback" style="background: ${colors[colorIndex]};">
                    <div class="student-initials">${initials}</div>
                </div>
            `;
        }
        
        studentCard.innerHTML = `
            <div class="student-image">
                ${imageContent}
            </div>
            <div class="student-info">
                <h3 class="student-name">${student.firstName} ${student.lastName}</h3>
                <p class="student-status">Étudiant BTS SIO1</p>
            </div>
        `;
        
        // Ajouter l'événement de clic pour rediriger vers le portfolio
        studentCard.addEventListener('click', () => {
            console.log(`Redirection vers le portfolio de ${student.firstName} ${student.lastName}`);
            
            // Simulation d'ouverture du portfolio
            if (confirm(`Voulez-vous visiter le portfolio de ${student.firstName} ${student.lastName} ?`)) {
                // window.open(student.portfolioUrl, '_blank');
                alert(`Portfolio de ${student.firstName} ${student.lastName} - En construction`);
            }
        });
        
        studentsGrid.appendChild(studentCard);
    });
}

// Animation au scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Smooth scroll pour les liens de navigation
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animation de la navbar au scroll
function navbarScrollEffect() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Effet de typing pour le titre hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Compteurs animés pour les statistiques
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('%', ''));
        const isPercentage = counter.textContent.includes('%');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            counter.textContent = Math.floor(current) + (isPercentage ? '%' : '');
        }, 30);
    });
}

// Observateur d'intersection pour les animations
function setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animation spéciale pour les compteurs
                if (entry.target.classList.contains('classe-stats')) {
                    animateCounters();
                }
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observer tous les éléments avec fade-in
    document.querySelectorAll('.fade-in, .classe-stats').forEach(el => {
        observer.observe(el);
    });
}

// Gestion des cookies et consentement RGPD
function setupGDPRConsent() {
    // Vérifier si le consentement a déjà été donné
    if (!localStorage.getItem('gdpr-consent')) {
        showGDPRBanner();
    }
}

function showGDPRBanner() {
    const banner = document.createElement('div');
    banner.id = 'gdpr-banner';
    banner.style.cssText = `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #1e293b;
        color: white;
        padding: 1rem;
        z-index: 1001;
        transform: translateY(100%);
        transition: transform 0.3s ease;
    `;
    
    banner.innerHTML = `
        <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <p>Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre politique de confidentialité conforme au RGPD.</p>
            <div style="display: flex; gap: 1rem;">
                <button id="accept-cookies" style="background: #2563eb; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">Accepter</button>
                <button id="decline-cookies" style="background: transparent; color: white; border: 1px solid white; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer;">Refuser</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
    
    // Animation d'entrée
    setTimeout(() => {
        banner.style.transform = 'translateY(0)';
    }, 100);
    
    // Gestion des boutons
    document.getElementById('accept-cookies').addEventListener('click', () => {
        localStorage.setItem('gdpr-consent', 'accepted');
        hideBanner(banner);
    });
    
    document.getElementById('decline-cookies').addEventListener('click', () => {
        localStorage.setItem('gdpr-consent', 'declined');
        hideBanner(banner);
    });
}

function hideBanner(banner) {
    banner.style.transform = 'translateY(100%)';
    setTimeout(() => {
        banner.remove();
    }, 300);
}

// Fonction principale d'initialisation
function init() {
    // Générer le trombinoscope
    generateStudentsGrid();
    
    // Configurer les animations
    setupIntersectionObserver();
    
    // Smooth scroll
    smoothScroll();
    
    // Effet navbar
    navbarScrollEffect();
    
    // RGPD
    setupGDPRConsent();
    
    // Animation au scroll (fallback)
    window.addEventListener('scroll', animateOnScroll);
    
    console.log('BTS SIO1 ESICAD - Site initialisé');
    console.log(`${students.length} étudiants chargés dans le trombinoscope`);
}

// Attendre que le DOM soit chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Fonction utilitaire pour ajouter un nouvel étudiant (pour les développeurs)
function addStudent(firstName, lastName, portfolioUrl, image = null) {
    const newStudent = {
        id: students.length + 1,
        firstName,
        lastName,
        portfolioUrl,
        image
    };
    
    students.push(newStudent);
    generateStudentsGrid();
    
    console.log(`Étudiant ${firstName} ${lastName} ajouté avec succès`);
}

// Fonction utilitaire pour mettre à jour un portfolio
function updateStudentPortfolio(studentId, newPortfolioUrl) {
    const student = students.find(s => s.id === studentId);
    if (student) {
        student.portfolioUrl = newPortfolioUrl;
        console.log(`Portfolio mis à jour pour ${student.firstName} ${student.lastName}`);
    } else {
        console.error(`Étudiant avec l'ID ${studentId} non trouvé`);
    }
}

// Fonction utilitaire pour ajouter une image à un étudiant
function updateStudentImage(studentId, imagePath) {
    const student = students.find(s => s.id === studentId);
    if (student) {
        student.image = imagePath;
        generateStudentsGrid();
        console.log(`Image mise à jour pour ${student.firstName} ${student.lastName}`);
    } else {
        console.error(`Étudiant avec l'ID ${studentId} non trouvé`);
    }
}

// Exposer les fonctions utilitaires globalement pour les développeurs
window.BTS_SIO1 = {
    addStudent,
    updateStudentPortfolio,
    updateStudentImage,
    students,
    generateStudentsGrid
};
