"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { 
  ArrowRight, 
  BookOpen,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Code, 
  Cpu, 
  Download,
  FileDown,
  Facebook,
  FolderKanban,
  Globe, 
  Github,
  Handshake,
  Layout, 
  Mail, 
  Map,
  Menu,
  MapPin, 
  Phone, 
  PhoneCall,
  ShieldCheck, 
  Sparkles,
  SunMoon,
  Terminal, 
  UserRound,
  Wrench,
  Wifi 
} from "lucide-react";

export default function Home() {
  const [showFullParcours, setShowFullParcours] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedSkillGroups, setExpandedSkillGroups] = useState({
    web: false,
    support: false,
    design: false,
  });

  // Galerie: ajoute/supprime simplement les chemins ici.
  const galleryImages = [
    "/galerie1.png",
    "/galerie2.png",
    "/galerie3.jpg",
    "/galerie4.jpg",
    "/galerie5.jpeg",
    "/galerie6.jpg",
    "/galerie7.png",
    "/galerie8.jpg",
    "/galerie9.jpg",
    "/galerie10.jpg",
    "/galerie11.png",
    "/galerie12.jpg",
    "/galerie13.jpg",
    "/galerie14.jpg",
    "/galerie15.jpg",
    "/galerie16.jpg",
    "/galerie17.jpg",
  ];

  const shuffledGallery = useMemo(() => {
    const images = [...galleryImages];
    for (let i = images.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images;
  }, []);

  const [galleryIndex, setGalleryIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isGalleryTransitioning, setIsGalleryTransitioning] = useState(false);
  const galleryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getGalleryImage = (offset: number) => {
    const total = shuffledGallery.length;
    return shuffledGallery[(galleryIndex + offset + total) % total];
  };

  const changeGalleryImage = (direction: "prev" | "next") => {
    if (isGalleryTransitioning || shuffledGallery.length < 2) return;
    setIsGalleryTransitioning(true);

    galleryTimeoutRef.current = setTimeout(() => {
      setGalleryIndex((prev) =>
        direction === "prev"
          ? (prev - 1 + shuffledGallery.length) % shuffledGallery.length
          : (prev + 1) % shuffledGallery.length
      );
      setIsGalleryTransitioning(false);
    }, 160);
  };

  const goToPreviousGalleryImage = () => changeGalleryImage("prev");
  const goToNextGalleryImage = () => changeGalleryImage("next");

  useEffect(() => {
    return () => {
      if (galleryTimeoutRef.current) clearTimeout(galleryTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      return;
    }
    if (storedTheme === "light") {
      setIsDarkMode(false);
      return;
    }
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  type MasteryLevel = "Basique" | "Intermédiaire" | "Avancé" | "Expert" | "Maternelle";
  type SkillItem = { name: string; level: MasteryLevel };

  const masteryConfig: Record<MasteryLevel, { width: string; chip: string }> = {
    Basique: { width: "w-1/4", chip: "bg-slate-700 text-slate-200" },
    "Intermédiaire": { width: "w-1/2", chip: "bg-blue-900/50 text-blue-200" },
    "Avancé": { width: "w-3/4", chip: "bg-blue-800/60 text-blue-100" },
    Expert: { width: "w-full", chip: "bg-blue-700/70 text-white" },
    Maternelle: { width: "w-full", chip: "bg-slate-600 text-white" },
  };

  const webDataSkills: SkillItem[] = [
    { name: "HTML/CSS", level: "Expert" },
    { name: "JavaScript", level: "Avancé" },
    { name: "TypeScript", level: "Avancé" },
    { name: "React", level: "Avancé" },
    { name: "Next.js", level: "Avancé" },
    { name: "Tailwind", level: "Avancé" },
    { name: "NestJS", level: "Avancé" },
    { name: "Node.js", level: "Avancé" },
    { name: "Express.js", level: "Avancé" },
    { name: "Python", level: "Avancé" },
    { name: "ML", level: "Basique" },
    { name: "MySQL", level: "Avancé" },
    { name: "PostgreSQL", level: "Avancé" },
    { name: "Supabase", level: "Intermédiaire" },
    { name: "VSCode", level: "Avancé" },
    { name: "Git/GitHub", level: "Intermédiaire" },
    { name: "Docker", level: "Intermédiaire" },
    { name: "XAMPP", level: "Avancé" },
  ];

  const supportItSkills: SkillItem[] = [
    { name: "Linux", level: "Intermédiaire" },
    { name: "Terminal", level: "Intermédiaire" },
    { name: "GNU/Linux", level: "Intermédiaire" },
    { name: "Cisco Packet Tracer", level: "Intermédiaire" },
    { name: "Wireshark", level: "Basique" },
    { name: "Virtual Machine", level: "Intermédiaire" },
    { name: "Xcos", level: "Intermédiaire" },
  ];

  const designSkills: SkillItem[] = [
    { name: "Adobe Illustrator", level: "Intermédiaire" },
    { name: "Adobe Photoshop", level: "Intermédiaire" },
    { name: "Adobe Premiere Pro", level: "Basique" },
    { name: "CapCut", level: "Intermédiaire" },
    { name: "Canva", level: "Avancé" },
    { name: "Figma", level: "Intermédiaire" },
    { name: "Lunacy", level: "Intermédiaire" },
    { name: "draw.io", level: "Expert" },
    { name: "Meta Business Suite", level: "Avancé" },
    { name: "Google Workspace", level: "Avancé" },
    { name: "Audacity", level: "Intermédiaire" },
    { name: "LaTeX", level: "Intermédiaire" },
  ];

  const languageSkills: SkillItem[] = [
    { name: "Malagasy", level: "Maternelle" },
    { name: "Français", level: "Avancé" },
    { name: "Anglais", level: "Intermédiaire" },
    { name: "Italien", level: "Basique" },
  ];

  const visibleWebSkills = expandedSkillGroups.web ? webDataSkills : webDataSkills.slice(0, 3);
  const visibleSupportSkills = expandedSkillGroups.support ? supportItSkills : supportItSkills.slice(0, 3);
  const visibleDesignSkills = expandedSkillGroups.design ? designSkills : designSkills.slice(0, 3);

  const toggleSkillGroup = (group: "web" | "support" | "design") => {
    setExpandedSkillGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  return (
    <main
      className={`min-h-screen font-sans selection:bg-blue-100 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-slate-100"
          : "bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900"
      }`}
    >
      <div
        className={`pointer-events-none fixed inset-0 -z-10 transition-opacity duration-500 ${
          isDarkMode
            ? "bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(148,163,184,0.10),transparent_28%)]"
            : "bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(148,163,184,0.12),transparent_30%)]"
        }`}
      />
      
      {/* --- NAVBAR (Navigation Rapide) --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDarkMode ? "bg-slate-900/70 border-b border-slate-700/80 backdrop-blur-xl" : "glass-nav"}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Rinoh~<span className="text-blue-600">Roédrino</span>
          </Link>
          
          <div className={`hidden md:flex gap-8 text-sm font-medium ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
            <a href="#about" className="hover:text-blue-600 transition">À propos</a>
            <a href="#competences" className="hover:text-blue-600 transition">Compétences</a>
            <a href="#experiences" className="hover:text-blue-600 transition">Expériences</a>
            <a href="#portfolio" className="hover:text-blue-600 transition">Mon Portfolio</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contacts</a>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <details className="relative md:hidden">
              <summary className={`list-none w-10 h-10 rounded-full border flex items-center justify-center cursor-pointer transition ${isDarkMode ? "border-slate-700 bg-slate-900 text-slate-200 hover:border-blue-500 hover:text-blue-300" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-600"}`}>
                <Menu size={18} />
              </summary>
              <div className={`absolute right-0 mt-2 w-64 rounded-2xl border p-3 shadow-xl ${isDarkMode ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"}`}>
                <a href="#about" className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50"}`}>
                  <BookOpen size={16} /> À propos
                </a>
                <a href="#competences" className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50"}`}>
                  <Sparkles size={16} /> Compétences
                </a>
                <a href="#experiences" className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50"}`}>
                  <BriefcaseBusiness size={16} /> Expériences
                </a>
                <a href="#portfolio" className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50"}`}>
                  <FolderKanban size={16} /> Mon Portfolio
                </a>
                <a href="#hornetic" className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50"}`}>
                  <Handshake size={16} /> Hornetic Services
                </a>
                <a href="#contact" className={`flex items-center gap-2 px-3 py-2 rounded-lg ${isDarkMode ? "text-slate-200 hover:bg-slate-800" : "text-slate-700 hover:bg-slate-50"}`}>
                  <PhoneCall size={16} /> Contacts
                </a>
              </div>
            </details>

             {/* Lien vers la partie publique Hornetic */}
             <Link href="/hornetic" className={`hidden md:block px-4 py-2 text-sm font-semibold transition ${isDarkMode ? "text-slate-300 hover:text-blue-400" : "text-slate-700 hover:text-blue-600"}`}>
              Supporter Hornetic $
            </Link>
            <Link
              href="/hornetic"
              aria-label="Supporter Hornetic"
              className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition ${isDarkMode ? "border border-slate-700 bg-slate-900 text-blue-300 hover:bg-slate-800" : "border border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100"}`}
            >
              <Handshake size={18} />
            </Link>
            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label="Basculer mode clair/sombre"
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition ${isDarkMode ? "border-slate-700 bg-slate-900 text-blue-300 hover:bg-slate-800" : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-600"}`}
            >
              <SunMoon size={18} />
            </button>
            {/* Bouton Connexion / Dashboard */}
            <Link 
              href="/auth/login" 
              className="hidden md:flex bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition shadow-lg items-center gap-2"
            >
              Espace Client <ArrowRight size={16} />
            </Link>
            <Link
              href="/auth/login"
              aria-label="Espace Client"
              className="md:hidden w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition shadow-lg"
            >
              <UserRound size={18} />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className={`pt-32 pb-20 px-6 ${isDarkMode ? "[&_h1]:text-slate-100 [&_p]:text-slate-300 [&_.hero-pill]:bg-blue-900/40 [&_.hero-pill]:text-blue-200" : ""}`}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="hero-pill inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Disponible pour projets et stage
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
            Étudiant &quot;Futur Ingénieur&quot; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">Télécoms & Réseaux</span><br />
            ET Créateur Digital.
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Je suis <strong>RATOMBOSON Tina Roédrino</strong>. Étudiant en Master 1 à l&apos;ESP-Antsiranana, 
            mention STIC parcours Télécommunications et Réseaux; aussi fondateur d&apos;<strong>Hornetic:Code&Craft</strong>.
            <br/>
            <br />Mes Qualités ?
                <ul className="list-disc list-inside mt-4 text-left max-w-md mx-auto">
                  <li><em>Curiosité</em></li>
                  <li><em>Esprit d&apos;analyse</em></li>
                  <li><em>Travail en équipe</em></li>
                  <li><em>Autonomie</em></li>
                  <li><em>Capacité d&apos;adaptation</em></li>
                </ul>
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/portfolio" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200/50 flex items-center justify-center gap-2">
              <Code size={20} /> Voir mon Portfolio
            </Link>
            <a href="#hornetic" className={`px-8 py-4 border rounded-xl font-bold transition flex items-center justify-center gap-2 ${isDarkMode ? "bg-slate-900 border-slate-700 text-slate-200 hover:border-blue-500 hover:text-blue-300" : "bg-white border-slate-200 text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"}`}>
              <Wrench size={20} /> Services Hornetic
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT & STATS (Résumé CV) --- */}
      <section id="about" className={`py-20 border-y ${isDarkMode ? "bg-slate-900/70 border-slate-700 [&_.text-slate-900]:text-slate-100 [&_.text-slate-600]:text-slate-300 [&_.text-slate-500]:text-slate-400 [&_.bg-slate-100]:bg-slate-700 [&_.bg-white]:bg-slate-800/90 [&_.border-slate-200]:border-slate-600 [&_.border-slate-100]:border-slate-600" : "bg-white/90 border-slate-100"}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Photo de profil depuis /public/profil.png */}
            <div className={`aspect-square rounded-2xl relative overflow-hidden border ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-100 border-slate-200"}`}>
               <div className="absolute inset-0 p-4 sm:p-6 md:p-8">
                 <Image
                   src="/profil.png"
                   alt="Photo de profil"
                   fill
                   sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 32rem"
                   className="object-contain"
                 />
               </div>
            </div>
            {/* Carte Flottante */}
            <a
              href="/cv.pdf"
              download
              className={`absolute -bottom-6 -right-6 p-6 rounded-xl shadow-xl max-w-xs block hover:shadow-2xl hover:-translate-y-1 transition ${isDarkMode ? "bg-slate-900 border border-slate-700" : "bg-white border border-slate-100"}`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <FileDown size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Rinoh</p>
                  <p className="font-bold text-slate-900">Obtenir mon CV</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 flex items-center gap-2">
                Télécharger en PDF <Download size={16} />
              </p>
            </a>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Mon Parcours</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Titulaire d&apos;une Licence en Électronique, Informatique et Technologie, je poursuis actuellement un 
              <strong> Master en Télécommunication et Réseaux</strong>. Mon objectif est d&apos;allier cybersécurité et IA pour optimiser les infrastructures de demain.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 min-w-[4px] h-[24px] bg-blue-600 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Master 1 en Télécommunication et Réseaux </h4>
                  <p className="text-sm text-slate-500">En 2026, au sein de l&apos;École Supérieure Polytechnique d&apos;Antsiranana</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 min-w-[4px] h-[24px] bg-slate-300 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Vice-Président de l&apos;AEOM</h4>
                  <p className="text-sm text-slate-500">Désigné vice-président de l&apos;association AEOM(Association 
                    des Étudiants Originaire de la Mahavavy) pour l&apos;année scolaire 2025-2026, au sein de l&apos;université UNA
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 min-w-[4px] h-[24px] bg-slate-300 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Responsable Com&apos; & Graphisme</h4>
                  <p className="text-sm text-slate-500">Depuis 2024 au sein de l&apos;Association Lab&apos;Vision</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 min-w-[4px] h-[24px] bg-slate-300 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Ambassadeur ICT Academy Huawei</h4>
                  <p className="text-sm text-slate-500">Depuis 2024 au sein du Club Huawei de l&apos;
                     École Supérieure Polytechnique d&apos;Antsiranana</p>
                </div>
              </div>

              {showFullParcours && (
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 min-w-[4px] h-[24px] bg-slate-300 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Hackaton RedShalk</h4>
                      <p className="text-sm text-slate-500">2nd place lors de l&apos;Hackaton en groupe,
                         RedShalk 2025 à Antsiranana co-organisé par Orange Madagascar </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 min-w-[4px] h-[24px] bg-slate-300 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Responsable Designer</h4>
                      <p className="text-sm text-slate-500">Designer du club WebRed en 2024</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 min-w-[4px] h-[24px] bg-slate-300 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Vice-président des étudiants STICiens</h4>
                      <p className="text-sm text-slate-500">Vice-présidents des étudiants au sein de la mention STIC de l&apos;ESP-Antsiranana en 2024</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 min-w-[4px] h-[24px] bg-slate-300 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-slate-900">Stagiaire ouvrier</h4>
                      <p className="text-sm text-slate-500">Stage pour la gestion des données des étudiants de l&apos;ESP-Antsiranana de janvier à février 2024</p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setShowFullParcours((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm font-semibold hover:bg-slate-200 transition"
              >
                {showFullParcours ? "Voir moins" : "Voir plus"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPÉRIENCES PROFESSIONNELLES --- */}
      <section id="experiences" className={`py-20 px-6 border-y ${isDarkMode ? "bg-slate-800/70 border-slate-700 [&_.text-slate-900]:text-slate-100 [&_.text-slate-600]:text-slate-300 [&_.text-slate-500]:text-slate-400 [&_.bg-slate-50]:bg-slate-800/90 [&_.border-slate-200]:border-slate-600 [&_article:hover]:border-blue-500/50" : "bg-white/90 border-slate-100 [&_article:hover]:border-blue-200"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Expériences Professionnelles</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Rome ne s&apos;est pas faite en un jour....
            </p>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2">
            {/* Carte expérience - copier ce bloc pour ajouter une nouvelle expérience */}
            <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition min-w-[280px] sm:min-w-[320px] md:min-w-0 shrink-0 snap-start">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <BriefcaseBusiness size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Barman et Serveur</h3>
              <p className="text-sm text-slate-500 mt-1">Beach Club, Nosy-Be 2024</p>
              <p className="text-slate-600 text-sm mt-4">
                A travaillé en tant que barman et serveur dans un environnement dynamique, développant des compétences en service client, gestion du stress et travail d&apos;équipe.
              </p>
            </article>

            {/* Carte expérience - copier ce bloc pour ajouter une nouvelle expérience */}
            <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition min-w-[280px] sm:min-w-[320px] md:min-w-0 shrink-0 snap-start">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <MapPin size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Enquêteur et chef de chantier de reboisement</h3>
              <p className="text-sm text-slate-500 mt-1">ROSEDA-WWF, Ambilobe décembre 2023</p>
              <p className="text-slate-600 text-sm mt-4">
                Enquêteur dans des sites de mangroves et chef de chantier pour des projets de reboisement, démontrant une capacité d&apos;adaptation rapide et un sens des responsabilités dans des environnements variés.
              </p>
            </article>

            {/* Carte expérience - copier ce bloc pour ajouter une nouvelle expérience */}
            <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition min-w-[280px] sm:min-w-[320px] md:min-w-0 shrink-0 snap-start">
              <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center mb-4">
                <Map size={22} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Assistant menuisier</h3>
              <p className="text-sm text-slate-500 mt-1">Atelier de menuiserie à Ambilobe</p>
              <p className="text-slate-600 text-sm mt-4">
                Travaillant en tant qu&apos;assistant menuisier pendant plusieurs vacances et pause scolaire, a acquis des compétences pratiques en fabrication et assemblage de meubles, tout en développant une attention aux détails et une compréhension des matériaux.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* --- APERÇU PORTFOLIO --- */}
      <section
        id="portfolio"
        className={`py-20 px-6 ${isDarkMode ? "bg-slate-900/60 [&_.text-slate-900]:text-slate-100 [&_.text-slate-600]:text-slate-300 [&_.bg-white]:bg-slate-800/90 [&_.border-slate-200]:border-slate-700 [&_.group:hover]:border-blue-500/60 [&_.group:hover]:shadow-blue-900/30" : "bg-slate-50/90 [&_.group:hover]:border-blue-200"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Aperçu de mon Portfolio</h2>
              <p className="text-slate-600 mt-3 max-w-2xl">
                Petit à petit l&apos;oiseau fait son nid...
              </p>
            </div>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              Ouvrir le portfolio complet <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            <Link href="/portfolio" className="group rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lg transition">
              <Code className="text-blue-600 mb-4" size={24} />
              <h3 className="font-bold text-slate-900">Code</h3>
              <p className="text-sm text-slate-600 mt-2">Apps web, automatisation et scripts utiles.</p>
            </Link>

            <Link href="/portfolio" className="group rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lg transition">
              <Cpu className="text-rose-600 mb-4" size={24} />
              <h3 className="font-bold text-slate-900">Électronique</h3>
              <p className="text-sm text-slate-600 mt-2">Prototypes, capteurs et montages appliqués.</p>
            </Link>

            <Link href="/portfolio" className="group rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lg transition">
              <Wifi className="text-cyan-600 mb-4" size={24} />
              <h3 className="font-bold text-slate-900">Lab Réseaux</h3>
              <p className="text-sm text-slate-600 mt-2">Topologies, routage, sécurité et troubleshooting.</p>
            </Link>

            <Link href="/portfolio" className="group rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lg transition">
              <Layout className="text-violet-600 mb-4" size={24} />
              <h3 className="font-bold text-slate-900">Infographisme</h3>
              <p className="text-sm text-slate-600 mt-2">Logos, affiches, identités visuelles et mockups.</p>
            </Link>

            <Link href="/portfolio" className="group rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-lg transition">
              <Globe className="text-emerald-600 mb-4" size={24} />
              <h3 className="font-bold text-slate-900">Community Manager</h3>
              <p className="text-sm text-slate-600 mt-2">Stratégie de contenu et animation de communautés.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* --- HORNETIC SERVICES --- */}
      <section
        id="hornetic"
        className={`py-24 px-6 ${isDarkMode ? "bg-slate-800/70 [&_.text-slate-900]:text-slate-100 [&_.text-slate-600]:text-slate-300 [&_.bg-white]:bg-slate-800/90 [&_.border-slate-100]:border-slate-700 [&_.group:hover]:border-blue-500/60 [&_.group:hover]:shadow-blue-900/30" : "bg-slate-50/90 [&_.group:hover]:border-blue-200"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-violet-500 font-bold tracking-widest uppercase text-sm mb-2">Hornetic : Code & Craft</h2>
            <h3 className="text-4xl font-bold text-slate-900">Des solutions numériques sur mesure</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 group">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition">
                <Layout size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Web & Portfolio</h4>
              <p className="text-slate-600 text-sm mb-6">
                Création de sites vitrines, portfolios interactifs, plateformes web modernes, logiciels windows et applications mobiles.
              </p>
              <Link href="/hornetic/offres" className="text-indigo-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Commander <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 group">
              <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Support IT & Digital</h4>
              <p className="text-slate-600 text-sm mb-6">
                Résolution de problèmes Windows/Linux, installation système, et conseils en sécurité de base, boost page, boost de publication, gestion de page et groupes sur les réseaux sociaux.
              </p>
              <Link href="/hornetic/offres" className="text-cyan-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Demander un devis <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 group">
              <div className="w-14 h-14 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 group-hover:text-white transition">
                <Terminal size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Graphisme & Rédaction</h4>
              <p className="text-slate-600 text-sm mb-6">
                Logos, CV structurés, Affiches, Cartes de visite et rédaction de documents professionnels.
              </p>
              <Link href="/hornetic/offres" className="text-violet-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Commencer <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALERIE (CENTRES D'INTÉRÊTS & HOBBIES) --- */}
      <section id="galerie" className={`py-20 px-6 border-y ${isDarkMode ? "bg-slate-900/70 border-slate-700 [&_.text-slate-900]:text-slate-100" : "bg-white/90 border-slate-100"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Moi en quelques Images</h2>
          </div>

          <div
            className={`relative mx-auto max-w-5xl h-[270px] sm:h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden rounded-[2rem] border px-8 sm:px-16 md:px-20 ${isDarkMode ? "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 border-slate-700" : "bg-gradient-to-br from-slate-100 via-white to-slate-50 border-slate-200"}`}
            onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchStartX === null) return;
              const endX = event.changedTouches[0].clientX;
              const deltaX = endX - touchStartX;
              if (Math.abs(deltaX) > 40) {
                if (deltaX > 0) goToPreviousGalleryImage();
                else goToNextGalleryImage();
              }
              setTouchStartX(null);
            }}
          >
            <div
              className={`absolute left-0 sm:left-1 md:left-2 w-[18%] sm:w-[16%] md:w-[15%] h-[52%] rounded-2xl overflow-hidden border shadow-md blur-[1px] transition-all duration-700 ease-out ${isDarkMode ? "border-slate-700" : "border-slate-200"} ${
                isGalleryTransitioning ? "opacity-20 scale-90" : "opacity-45 scale-95"
              }`}
            >
              <Image
                src={getGalleryImage(-1)}
                alt="Galerie précédente"
                fill
                sizes="(max-width: 768px) 35vw, 25vw"
                className="object-cover"
              />
            </div>

            <div
              className={`relative z-10 w-[42%] sm:w-[36%] md:w-[34%] h-[84%] rounded-3xl overflow-hidden border shadow-2xl transition-all duration-700 ease-out ${isDarkMode ? "border-slate-700 ring-1 ring-slate-700" : "border-slate-200 ring-1 ring-slate-100"} ${
                isGalleryTransitioning ? "opacity-80 scale-[0.965]" : "opacity-100 scale-100"
              }`}
            >
              <Image
                src={getGalleryImage(0)}
                alt="Image de galerie"
                fill
                priority
                sizes="(max-width: 768px) 42vw, 34vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
            </div>

            <div
              className={`absolute right-0 sm:right-1 md:right-2 w-[18%] sm:w-[16%] md:w-[15%] h-[52%] rounded-2xl overflow-hidden border shadow-md blur-[1px] transition-all duration-700 ease-out ${isDarkMode ? "border-slate-700" : "border-slate-200"} ${
                isGalleryTransitioning ? "opacity-20 scale-90" : "opacity-45 scale-95"
              }`}
            >
              <Image
                src={getGalleryImage(1)}
                alt="Galerie suivante"
                fill
                sizes="(max-width: 768px) 35vw, 25vw"
                className="object-cover"
              />
            </div>

            <button
              type="button"
              onClick={goToPreviousGalleryImage}
              aria-label="Image précédente"
              className={`absolute left-3 sm:left-5 z-20 w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center shadow-md hover:scale-105 transition ${isDarkMode ? "bg-slate-800/95 border-slate-600 text-slate-100 hover:bg-slate-700" : "bg-white/95 border-slate-200 text-slate-700 hover:bg-white"}`}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={goToNextGalleryImage}
              aria-label="Image suivante"
              className={`absolute right-3 sm:right-5 z-20 w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center shadow-md hover:scale-105 transition ${isDarkMode ? "bg-slate-800/95 border-slate-600 text-slate-100 hover:bg-slate-700" : "bg-white/95 border-slate-200 text-slate-700 hover:bg-white"}`}
            >
              <ChevronRight size={18} />
            </button>

            <div className={`pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 ${isDarkMode ? "bg-gradient-to-r from-slate-900 to-transparent" : "bg-gradient-to-r from-white/95 to-transparent"}`} />
            <div className={`pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 ${isDarkMode ? "bg-gradient-to-l from-slate-900 to-transparent" : "bg-gradient-to-l from-white/95 to-transparent"}`} />
          </div>
        </div>
      </section>

      {/* --- TECH STACK (Compétences Techniques) --- */}
      <section id="competences" className={`py-20 ${isDarkMode ? "bg-slate-900/80 text-white" : "bg-slate-900 text-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
             <h2 className="text-3xl font-bold">Arsenal Technique</h2>
             <p className="text-slate-400 max-w-md mt-4 md:mt-0">
               Les outils que j&apos;utilise pour transformer des idées complexes en solutions robustes.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
             <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 transition">
                <h3 className="font-bold mb-5 text-cyan-300">Développement Web & Data</h3>
                <div className="space-y-3">
                  {visibleWebSkills.map((skill) => (
                    <div key={skill.name} className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${masteryConfig[skill.level].chip}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full bg-cyan-300 ${masteryConfig[skill.level].width}`} />
                      </div>
                    </div>
                  ))}
                  {webDataSkills.length > 3 && (
                    <button
                      type="button"
                      onClick={() => toggleSkillGroup("web")}
                      className="w-full text-sm font-semibold px-3 py-2 rounded-lg border border-slate-600 text-cyan-200 hover:bg-slate-700 transition"
                    >
                      {expandedSkillGroups.web ? "Voir moins" : "Voir plus"}
                    </button>
                  )}
                </div>
             </div>

             <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 transition">
                <h3 className="font-bold mb-5 text-emerald-300">Support IT & Réseaux</h3>
                <div className="space-y-3">
                  {visibleSupportSkills.map((skill) => (
                    <div key={skill.name} className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${masteryConfig[skill.level].chip}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full bg-emerald-300 ${masteryConfig[skill.level].width}`} />
                      </div>
                    </div>
                  ))}
                  {supportItSkills.length > 3 && (
                    <button
                      type="button"
                      onClick={() => toggleSkillGroup("support")}
                      className="w-full text-sm font-semibold px-3 py-2 rounded-lg border border-slate-600 text-emerald-200 hover:bg-slate-700 transition"
                    >
                      {expandedSkillGroups.support ? "Voir moins" : "Voir plus"}
                    </button>
                  )}
                </div>
             </div>

             <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 transition">
                <h3 className="font-bold mb-5 text-violet-300">Design, Montage & Productivité</h3>
                <div className="space-y-3">
                  {visibleDesignSkills.map((skill) => (
                    <div key={skill.name} className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${masteryConfig[skill.level].chip}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full bg-violet-300 ${masteryConfig[skill.level].width}`} />
                      </div>
                    </div>
                  ))}
                  {designSkills.length > 3 && (
                    <button
                      type="button"
                      onClick={() => toggleSkillGroup("design")}
                      className="w-full text-sm font-semibold px-3 py-2 rounded-lg border border-slate-600 text-violet-200 hover:bg-slate-700 transition"
                    >
                      {expandedSkillGroups.design ? "Voir moins" : "Voir plus"}
                    </button>
                  )}
                </div>
             </div>

             <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/40 transition">
                <h3 className="font-bold mb-5 text-amber-300">Langues</h3>
                <div className="space-y-3">
                  {languageSkills.map((skill) => (
                    <div key={skill.name} className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${masteryConfig[skill.level].chip}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full bg-amber-300 ${masteryConfig[skill.level].width}`} />
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className={`pt-20 pb-10 border-t ${isDarkMode ? "bg-slate-800 border-slate-700 [&_.text-slate-600]:text-slate-300 [&_.text-slate-400]:text-slate-500 [&_h4]:text-slate-100" : "bg-white border-slate-200"}`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">RATOMBOSON Tina Roédrino.</h2>
            <p className="text-slate-600 mb-6 max-w-sm">
              Étudiant passionné et entrepreneur. Je suis disponible pour échanger sur des projets de réseaux, de développement ou pour des services graphiques.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Réseaux sociaux</h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-center gap-3">
                <Github size={18} className="text-slate-700" />
                GitHub : Rinoh-coder
              </li>
              <li className="flex items-center gap-3">
                <Facebook size={18} className="text-blue-600" />
                Facebook (compte) : Rinoh Roédrino RT
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-emerald-600" />
                Facebook (page) : Hornetic:Code&amp;Craft
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contacts</h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-600" /> 
                Atsiranana 201, Morafeno 69 MC
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600" /> 
                9965rinoh@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600" /> 
                +261 32 29 921 75
              </li>
            </ul>
          </div>
        </div>
        
        <div className={`max-w-7xl mx-auto px-6 text-center pt-8 text-sm ${isDarkMode ? "border-t border-slate-700 text-slate-500" : "border-t border-slate-100 text-slate-400"}`}>
          © 2026 RATOMBOSON Tina Roédrino - Hornetic. Fait à Antsiranana, Madagascar.
        </div>
      </footer>
    </main>
  );
}
