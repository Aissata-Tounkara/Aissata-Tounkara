import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Layers3,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const projectsData = {
  'gestionmenuiserie': {
    title: 'GestionMenuiserie',
    category: 'Fullstack',
    date: '2025',
    description: `Application complète de gestion pour menuisiers. 
    Permet de créer des devis clients, gérer les commandes 
    et générer des factures en un seul outil simple et rapide.`,
    features: [
      'Création et envoi de devis clients',
      'Suivi des commandes en temps réel',
      'Génération automatique de factures PDF',
      'Tableau de bord avec statistiques',
    ],
    tech: ['Laravel', 'MySQL', 'React', 'Tailwind CSS'],
    images: [
      '/projects/menuiserie/1.png',
      '/projects/menuiserie/2.png',
      '/projects/menuiserie/3.png',
      '/projects/menuiserie/4.png',
      '/projects/menuiserie/5.png',
    ],
    github: 'https://github.com/Aissata-Tounkara',
  },
  'anobox': {
    title: 'AnoBox',
    category: 'Fullstack',
    date: '2025',
    description: `Messagerie anonyme — envoie et reçois des messages 
    sans révéler ton identité.`,
    features: [
      'Envoi et réception de messages anonymes',
      'Boîte de réception personnelle',
      'Aucune inscription requise pour envoyer',
      'Interface minimaliste et intuitive',
    ],
    tech: ['Next.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    images: [
      '/projects/anonbox/1.jpeg',
      '/projects/anonbox/2.jpeg',
      '/projects/anonbox/3.jpeg',
    ],
    github: 'https://github.com/Aissata-Tounkara',
  },
  'myagenda': {
    title: 'MyAgenda',
    category: 'Frontend',
    date: '2025',
    description: `Application de gestion de rendez-vous personnelle. 
    Note tes RDV et choisis d'être notifiée 1h ou 24h avant.`,
    features: [
      'Ajout et gestion de rendez-vous',
      'Notifications 1h ou 24h avant le RDV',
      'Vue calendrier mensuelle',
      'Interface simple et rapide',
    ],
    tech: ['React', 'JavaScript', 'MySQL', 'Tailwind CSS'],
    images: [
      '/projects/myagenda/1.png',
      '/projects/myagenda/2.png',
      '/projects/myagenda/3.png',
      '/projects/myagenda/4.png',
      '/projects/myagenda/5.png',
      '/projects/myagenda/6.png',
    ],
    github: 'https://github.com/Aissata-Tounkara',
  },
  'shopapp': {
    title: 'ShopApp',
    category: 'Mobile',
    date: '2025',
    description: `Application mobile e-commerce complète. 
    Connecte-toi, inscris-toi, ajoute des produits et gère ton panier.`,
    features: [
      'Authentification complète',
      'Ajout de produits en vente',
      'Panier avec ajout et suppression',
      'Interface mobile fluide',
    ],
    tech: ['Flutter', 'Dart'],
    images: [
      '/projects/shopapp/1.jpeg',
      '/projects/shopapp/2.jpeg',
      '/projects/shopapp/3.jpeg',
    ],
    github: 'https://github.com/Aissata-Tounkara',
  },
  'authapp': {
    title: 'AuthApp',
    category: 'Mobile',
    date: '2025',
    description: `Application mobile avec système d'authentification complet.
    Connexion, déconnexion, inscription et accueil personnalisé.`,
    features: [
      'Écran de connexion sécurisé',
      'Inscription avec validation',
      'Déconnexion propre',
      "Page d'accueil personnalisée",
    ],
    tech: ['Flutter', 'Dart'],
    images: [
      '/projects/authapp/1.jpeg',
      '/projects/authapp/2.jpeg',
      '/projects/authapp/3.jpeg',
    ],
    github: 'https://github.com/Aissata-Tounkara',
  },
};

function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="project-carousel">

      {/* Image principale */}
      <div className="carousel-main">
        <img
          src={images[current]}
          alt={`capture ${current + 1}`}
          loading="lazy"
        />

        {/* Boutons précédent / suivant */}
        <button onClick={prev} className="carousel-btn prev" aria-label="Image précédente">
          <ChevronLeft size={20} />
        </button>

        <button onClick={next} className="carousel-btn next" aria-label="Image suivante">
          <ChevronRight size={20} />
        </button>

        {/* Compteur */}
        <div className="carousel-counter">
          {current + 1} / {images.length}
        </div>
      </div>

      {/* Miniatures */}
      <div className="carousel-thumbs">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`carousel-thumb${i === current ? ' active' : ''}`}
          >
            <img src={img} alt={`miniature ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData[id];

  if (!project) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2>Projet introuvable</h2>
        <button className="button ghost" onClick={() => navigate('/')}>
          <ArrowLeft size={18} /> Retour
        </button>
      </div>
    );
  }

  return (
    <div className="section" style={{ paddingTop: '40px' }}>

      {/* Bouton retour */}
      <button
        className="button ghost"
        onClick={() => navigate('/')}
        style={{ marginBottom: '2rem' }}
      >
        <ArrowLeft size={18} /> Retour aux projets
      </button>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <p className="eyebrow">
          <Layers3 size={14} /> {project.category}
        </p>
        <h1 style={{ marginBottom: '1rem' }}>{project.title}</h1>
        <p className="lead">{project.description}</p>
      </div>

      {/* Carrousel */}
      <Carousel images={project.images} />

      {/* Infos */}
      <div className="project-info-grid">

        {/* Fonctionnalités */}
        <div className="project-info-card">
          <h3 style={{ marginBottom: '1.2rem' }}>Fonctionnalités</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '12px' }}>
            {project.features.map((f, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'center',
                gap: '10px', color: 'var(--muted)', fontSize: '15px',
              }}>
                <span style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: 'var(--accent)', flexShrink: 0,
                }} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Stack & infos */}
        <div className="project-info-card">
          <h3 style={{ marginBottom: '1.2rem' }}>Stack technique</h3>
          <div className="tech-list" style={{ marginBottom: '1.5rem' }}>
            {project.tech.map((t) => (
              <small key={t}>{t}</small>
            ))}
          </div>

          <h3 style={{ marginBottom: '1rem' }}>Infos</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)' }}>
              <Calendar size={16} color="var(--accent)" />
              <span>Année : {project.date}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--muted)' }}>
              <Layers3 size={16} color="var(--accent)" />
              <span>Catégorie : {project.category}</span>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="button ghost"
            >
              <Github size={17} /> Voir sur GitHub
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
