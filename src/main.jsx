import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ProjectDetail from './projectDetail';



import {
  ArrowUpRight,
  Code2,
  Download,
  Github,
  Layers3,
  Mail,
  Menu,
  Moon,
  Palette,
  Send,
  Sparkles,
  Sun,
  X,
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: 'GestionMenuiserie',
    category: 'fullstack',
    image: '/projects/menuiserie/1.png',
    description: 'Application de gestion pour menuisiers — devis clients, commandes et factures en un seul outil.',
    tech: ['Laravel', 'MySQL', 'React', 'Tailwind CSS'],
  },
  {
    title: 'AnoBox',
    category: 'fullstack',
    image: '/projects/anonbox/1.jpeg',
    description: 'Messagerie anonyme — envoie et reçois des messages sans révéler ton identité.',
    tech: ['Next.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'MyAgenda',
    category: 'frontend',
    image: '/projects/myagenda/1.png',
    description: 'Gère tes rendez-vous toi-même et choisis d\'être notifiée 1h ou 24h avant chaque RDV.',
    tech: ['React', 'JavaScript', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'ShopApp',
    category: 'mobile',
    image: '/projects/shopapp/1.jpeg',
    description: 'App mobile e-commerce — connexion, inscription, ajout de produits en vente et gestion du panier.',
    tech: ['Flutter', 'Dart'],
  },
  {
    title: 'AuthApp',
    category: 'mobile',
    image: '/projects/authapp/1.jpeg',
    description: 'App mobile avec authentification complète — connexion, déconnexion, inscription et accueil personnalisé.',
    tech: ['Flutter', 'Dart'],
  },
];

const skills = [
  { name: 'HTML / CSS', value: 90 },
  { name: 'JavaScript', value: 88 },
  { name: 'Tailwind CSS', value: 75 },
  { name: 'React', value: 75 },
  { name: 'Next.js', value: 72 },
  { name: 'MySQL', value: 75 },
  { name: 'PHP / Laravel', value: 55 },
  { name: 'Flutter', value: 55 },
];

function App() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light');
  const [filter, setFilter] = useState('all');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const navItems = ['Accueil', 'Services', 'Projets', 'Competences', 'Contact'];

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Retour accueil">
          <span>AT</span>
          <strong>Aïssata Tounkara</strong>
        </a>

        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navigation principale">
          {navItems.map((item) => (
            <a key={item} href={`#${slug(item)}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button"
            type="button"
            aria-label={theme === 'dark' ? 'Activer le theme clair' : 'Activer le theme sombre'}
            title={theme === 'dark' ? 'Theme clair' : 'Theme sombre'}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label="Ouvrir le menu"
            title="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section id="accueil" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">
             <Sparkles size={16} /> Étudiante BTS Développement Web & Mobile
          </p>
          <h1>Je conçois des interfaces web et mobile modernes, propres et agréables à utiliser.</h1>
          <p className="lead">
               Passionnée par le développement web, je crée des applications avec React, 
               Next.js, Laravel et Flutter — du frontend soigné jusqu'à la base de données. 
               Disponible pour des projets, stages et collaborations.
          </p>
            <div className="hero-actions">
              <a className="button primary" href="#projets">
                Voir mes projets <ArrowUpRight size={18} />
              </a>
              <a className="button ghost" href="#contact">
                Me contacter <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual profile-visual" aria-label="Photo de profil">
            <div className="portrait-frame">
              <img
                src="/profile.jpg"
                alt="Portrait d’Aïssata Tounkara"
                onError={(event) => {
                  event.currentTarget.src = '/profile-placeholder.svg';
                }}
              />
            </div>
            <div className="floating-panel top">
              <Code2 size={20} />
              <span>React + design</span>
            </div>
          </div>
        </section>

        <section className="metrics" aria-label="Statistiques">
          <Metric value="5" label="projets réalisés" />
          <Metric value="BTS" label="en cours 2026" />
          <Metric value="Open" label="au stage" />
        </section>

        <section id="services" className="section compact">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
          <h2>Du web au mobile, je développe des solutions complètes et modernes.</h2>          </div>
          <div className="service-grid">
            <ServiceCard
              icon={<Layers3 />}
              title="Sites React"
              text="Pages rapides, composants reutilisables, navigation fluide et rendu responsive."
            />
            <ServiceCard
              icon={<Palette />}
              title="UI moderne"
              text="Design propre, hierarchie visuelle forte, couleurs equilibrees et details soignes."
            />
            <ServiceCard
              icon={<Code2 />}
              title="Integration"
              text="Transformation de maquettes en interfaces solides, maintenables et accessibles."
            />
          </div>
        </section>

        <section id="projets" className="section">
          <div className="section-heading row">
            <div>
              <p className="eyebrow">Selection</p>
              <h2>Projets recents</h2>
            </div>
            <div className="filters" aria-label="Filtrer les projets">
            {['all', 'frontend', 'fullstack', 'mobile'].map((item) => (     
             <button
                  key={item}
                  className={filter === item ? 'active' : ''}
                  type="button"
                  onClick={() => setFilter(item)}
                >
                  {labelFilter(item)}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              <button
                className="project-link"
                type="button"
                onClick={() => navigate(`/projet/${project.title.toLowerCase()}`)}
                aria-label={`Voir le projet ${project.title}`}
              >
                <img src={project.image} alt={`Aperçu de ${project.title}`} />
                <div className="project-content">
                  <div>
                    <p>{labelFilter(project.category)}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-arrow" aria-hidden="true">
                    <ArrowUpRight size={19} />
                  </span>
                  <span>{project.description}</span>
                  <div className="tech-list">
                    {project.tech.map((tech) => (
                      <small key={tech}>{tech}</small>
                    ))}
                  </div>
                </div>
              </button>
            </article>
            ))}
          </div>
        </section>

        <section id="competences" className="section split">
          <div className="section-heading">
            <p className="eyebrow">Competences</p>
          <h2>Des compétences web et mobile pour construire des apps complètes.</h2>
          <p>
              Du frontend React au backend Laravel, en passant par Flutter pour le mobile — 
              je couvre l'ensemble de la stack pour livrer des projets solides et soignés.
           </p>
          </div>
          <div className="skill-panel">
            {skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <div>
                  <strong>{skill.name}</strong>
                  <span>{skill.value}%</span>
                </div>
                <meter min="0" max="100" value={skill.value}>
                  {skill.value}%
                </meter>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Tu as un projet ? Travaillons ensemble.</h2>
          <p>
            Étudiante en BTS Développement Web & Mobile, je suis disponible 
            pour des stages, missions freelance et collaborations. 
            Que ce soit pour un projet web, mobile ou une idée à concrétiser — je suis là !
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '1.5rem 0' }}>
            
            <a href="mailto:tounkaraaissata474@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={17} /> tounkaraaissata474@gmail.com
            </a>

            <a 
              href="https://www.linkedin.com/in/aissata-tounkara-62710637a" 
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <span style={{ 
              background: '#1c1e20', 
              color: 'white', 
              borderRadius: '4px', 
              padding: '2px 6px', 
              fontSize: '12px', 
              fontWeight: 'bold' 
            }}>in</span> 
            LinkedIn — Aïssata Tounkara
            </a>

            <a 
            href="https://github.com/Aissata-Tounkara" 
            target="_blank" 
            rel="noreferrer" 
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Github size={17} /> GitHub — Aissata Tounkara
          </a>

            <a 
              href="https://wa.me/22378619780"
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Send size={17} /> WhatsApp — +22378619780
            </a>

            <a 
              href="tel:+213797592024"
              target="_blank" 
              rel="noreferrer" 
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Mail size={17} /> Appel — +213797592024
            </a>

          </div>

          <a className="download-link" href="/cv.pdf" download aria-label="Télécharger le CV">
            <Download size={18} /> Télécharger mon CV
          </a>
        </div>

        <form className="contact-form" onSubmit={(event) => {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          const subject = encodeURIComponent(`Projet portfolio — ${form.get('name')}`);
          const body = encodeURIComponent(`Nom : ${form.get('name')}\nEmail : ${form.get('email')}\n\n${form.get('message')}`);
          window.location.href = `mailto:tounkaraaissata474@gmail.com?subject=${subject}&body=${body}`;
          setSent(true);
        }}>
          <label>
            Nom
            <input name="name" type="text" placeholder="Votre nom" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="votre@email.com" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Parlez-moi de votre projet" rows="5" required />
          </label>
          <button className="button primary" type="submit">
            Envoyer <Send size={18} />
          </button>
          {sent && <p className="form-status">Votre application e-mail va s’ouvrir pour envoyer le message.</p>}
        </form>
      </section>
      </main>

      <footer>
      <span>© 2026 Aïssata Tounkara </span>
      <div>
        <a 
          href="https://github.com/Aissata-Tounkara" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="Github"
        >
          <Github size={19} />
        </a>
        <a 
          href="https://www.linkedin.com/in/aissata-tounkara-62710637a" 
          target="_blank" 
          rel="noreferrer" 
          aria-label="LinkedIn"
        >
          <span style={{ 
            background: '#0d0e10', 
            color: 'white', 
            borderRadius: '4px', 
            padding: '2px 6px', 
            fontSize: '12px', 
            fontWeight: 'bold' 
          }}>in</span>
        </a>
        <a 
          href="https://wa.me/22378619780"
          target="_blank" 
          rel="noreferrer" 
          aria-label="WhatsApp"
        >
          <Send size={19} />
        </a>
        <a 
          href="mailto:tounkaraaissata474@gmail.com"
          aria-label="Email"
        >
          <Mail size={19} />
        </a>
      </div>
    </footer>
    </>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function slug(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
}

function labelFilter(value) {
 const labels = {
  all: 'Tous',
  frontend: 'Frontend',
  fullstack: 'Fullstack',
  mobile: 'Mobile',
};
  return labels[value];
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projet/:id" element={<ProjectDetail />} />
    </Routes>
  </BrowserRouter>
);
