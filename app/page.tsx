import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Code, 
  Cpu, 
  Globe, 
  Layers, 
  Layout, 
  Mail, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Terminal, 
  Wifi 
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- NAVBAR (Navigation Rapide) --- */}
      <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter">
            Tina<span className="text-blue-600">Roédrino</span>.
          </Link>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">À propos</a>
            <a href="#competences" className="hover:text-blue-600 transition">Compétences</a>
            <a href="#hornetic" className="hover:text-orange-600 transition">Hornetic Services</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>

          <div className="flex gap-4">
             {/* Lien vers la partie publique Hornetic */}
             <Link href="/hornetic" className="hidden md:block px-4 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 transition">
              Offres
            </Link>
            {/* Bouton Connexion / Dashboard */}
            <Link 
              href="/auth/login" 
              className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition shadow-lg flex items-center gap-2"
            >
              Espace Client <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Disponible pour projets & stage
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900">
            Ingénieur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Télécoms & Réseaux</span><br />
            & Créateur Digital.
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Je suis <strong>Tina Roédrino</strong>. Étudiant en Master à l'ESP-Antsiranana et fondateur d'<strong>Hornetic</strong>.
            Je conçois des architectures réseaux sécurisées et des solutions web modernes.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/portfolio" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200/50 flex items-center justify-center gap-2">
              <Code size={20} /> Voir mon Portfolio
            </Link>
            <a href="#hornetic" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 transition flex items-center justify-center gap-2">
              <Layers size={20} /> Services Hornetic
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT & STATS (Résumé CV) --- */}
      <section id="about" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Placeholder pour ta photo - A remplacer par <Image /> plus tard */}
            <div className="aspect-square rounded-2xl bg-slate-100 relative overflow-hidden border border-slate-200">
               <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                 Ta Photo Ici (600x600)
               </div>
            </div>
            {/* Carte Flottante */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Ambassadeur</p>
                  <p className="font-bold text-slate-900">Huawei ICT Academy</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Mon Parcours</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Titulaire d'une Licence en Électronique, Informatique et Technologie, je poursuis actuellement un 
              <strong> Master en Télécommunication et Réseaux</strong>. Mon objectif est d'allier cybersécurité et IA pour optimiser les infrastructures de demain.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 min-w-[4px] h-[24px] bg-blue-600 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Master 1 STIC (En cours)</h4>
                  <p className="text-sm text-slate-500">École Supérieure Polytechnique d'Antsiranana</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 min-w-[4px] h-[24px] bg-slate-300 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Responsable Com' & Graphisme</h4>
                  <p className="text-sm text-slate-500">Association Lab'Vision</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="mt-1 min-w-[4px] h-[24px] bg-slate-300 rounded-full"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Expérience Terrain</h4>
                  <p className="text-sm text-slate-500">Chef de chantier (WWF), Barman, Ouvrier...</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <span className="px-3 py-1 bg-slate-100 rounded-md text-sm font-medium text-slate-600">Python</span>
              <span className="px-3 py-1 bg-slate-100 rounded-md text-sm font-medium text-slate-600">Linux Mint</span>
              <span className="px-3 py-1 bg-slate-100 rounded-md text-sm font-medium text-slate-600">Next.js</span>
              <span className="px-3 py-1 bg-slate-100 rounded-md text-sm font-medium text-slate-600">Cisco Packet Tracer</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- HORNETIC SERVICES --- */}
      <section id="hornetic" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-2">Hornetic : Code & Craft</h2>
            <h3 className="text-4xl font-bold text-slate-900">Des solutions numériques sur mesure</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 group">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition">
                <Layout size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Web & Portfolio</h4>
              <p className="text-slate-600 text-sm mb-6">
                Création de sites vitrines, portfolios interactifs et plateformes web modernes (React/Next.js).
              </p>
              <Link href="/hornetic/offres" className="text-orange-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Commander <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
                <ShieldCheck size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Support IT & Linux</h4>
              <p className="text-slate-600 text-sm mb-6">
                Résolution de problèmes Windows/Linux, installation système, et conseils en sécurité de base.
              </p>
              <Link href="/hornetic/offres" className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Demander un devis <ArrowRight size={16} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100 group">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition">
                <Terminal size={28} />
              </div>
              <h4 className="text-xl font-bold mb-3">Graphisme & Rédaction</h4>
              <p className="text-slate-600 text-sm mb-6">
                Logos, CV structurés, Affiches, Cartes de visite et rédaction de documents professionnels.
              </p>
              <Link href="/hornetic/offres" className="text-purple-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Voir les exemples <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK (Compétences Techniques) --- */}
      <section id="competences" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
             <h2 className="text-3xl font-bold">Arsenal Technique</h2>
             <p className="text-slate-400 max-w-md mt-4 md:mt-0">
               Les outils que j'utilise pour transformer des idées complexes en solutions robustes.
             </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
             {/* Tu pourras ajouter des logos SVG ici plus tard */}
             <div className="p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
                <Code className="mx-auto mb-2 text-blue-400" />
                <span className="font-medium">TypeScript</span>
             </div>
             <div className="p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
                <Layout className="mx-auto mb-2 text-cyan-400" />
                <span className="font-medium">Next.js</span>
             </div>
             <div className="p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
                <Terminal className="mx-auto mb-2 text-yellow-400" />
                <span className="font-medium">Python / IA</span>
             </div>
             <div className="p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
                <Wifi className="mx-auto mb-2 text-green-400" />
                <span className="font-medium">Réseaux</span>
             </div>
             <div className="p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
                <Cpu className="mx-auto mb-2 text-red-400" />
                <span className="font-medium">Linux</span>
             </div>
             <div className="p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
                <Layers className="mx-auto mb-2 text-purple-400" />
                <span className="font-medium">SQL</span>
             </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-white pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-6">Tina Roédrino.</h2>
            <p className="text-slate-600 mb-6 max-w-sm">
              Étudiant passionné et entrepreneur. Je suis disponible pour échanger sur des projets de réseaux, de développement ou pour des services graphiques.
            </p>
            <div className="flex gap-4">
               {/* Liens réseaux sociaux (à compléter) */}
               <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition">Linked</a>
               <a href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition">Git</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Navigation</h4>
            <ul className="space-y-4 text-slate-600 text-sm">
              <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link></li>
              <li><Link href="/hornetic" className="hover:text-blue-600">Hornetic Services</Link></li>
              <li><Link href="/auth/login" className="hover:text-blue-600">Connexion Client</Link></li>
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
        
        <div className="max-w-7xl mx-auto px-6 text-center pt-8 border-t border-slate-100 text-slate-400 text-sm">
          © 2026 Tina Roédrino & Hornetic. Fait avec Next.js & Supabase à Madagascar.
        </div>
      </footer>
    </main>
  );
}