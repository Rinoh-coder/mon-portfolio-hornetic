import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">RATOMBOSON Tina Roédrino.</h1>
        <div className="space-x-6 text-sm font-medium hidden md:block">
          <a href="#about" className="hover:text-blue-600 transition">À propos</a>
          <a href="#portfolio" className="hover:text-blue-600 transition">Projets</a>
          <a href="#hornetic" className="text-orange-600 hover:text-orange-700 transition">Espace Hornetic</a>
        </div>
        <Link 
          href="/login" 
          className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-lg"
        >
          Me contacter / Connexion
        </Link>
      </nav>

      {/* --- HERO SECTION (L'intro) --- */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
           <img 
             src="/profile-placeholder.jpg" 
             alt="Tina Roédrino" 
             className="w-32 h-32 rounded-full border-4 border-white object-cover"
           />
           {/* Note : On remplacera l'image plus tard */}
        </div>
        <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
          Ingénieur Télécoms & <span className="text-blue-600">Développeur Fullstack</span>
        </h2>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          Étudiant en Master TR à l'ESP-Antsiranana. Je combine l'ingénierie réseaux 
          et le code pour créer des solutions comme <span className="font-bold text-orange-600">Hornetic</span>.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#portfolio" className="px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition">
            Voir mes projets
          </a>
          <a href="#hornetic" className="px-8 py-3 bg-white border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition">
            Mes services
          </a>
        </div>
      </section>

      {/* --- SECTION PROJETS (Résumé) --- */}
      <section id="portfolio" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Mes Réalisations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Carte Projet 1 */}
            <div className="border border-slate-200 rounded-xl p-6 hover:shadow-xl transition">
              <div className="h-40 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-500">
                [Image Projet L3]
              </div>
              <h4 className="font-bold text-xl mb-2">Gestion de Projets & IA</h4>
              <p className="text-slate-600 text-sm">Plateforme prédictive pour anticiper les retards de projets.</p>
            </div>
             {/* Carte Projet 2 */}
             <div className="border border-slate-200 rounded-xl p-6 hover:shadow-xl transition">
              <div className="h-40 bg-green-100 rounded-lg mb-4 flex items-center justify-center text-green-500">
                [Image Poubelle]
              </div>
              <h4 className="font-bold text-xl mb-2">Poubelle Intelligente</h4>
              <p className="text-slate-600 text-sm">Tri automatique via Machine Learning et systèmes embarqués.</p>
            </div>
             {/* Carte Projet 3 */}
             <div className="border border-slate-200 rounded-xl p-6 hover:shadow-xl transition">
              <div className="h-40 bg-purple-100 rounded-lg mb-4 flex items-center justify-center text-purple-500">
                [Image Réseaux]
              </div>
              <h4 className="font-bold text-xl mb-2">Sécurité Réseaux</h4>
              <p className="text-slate-600 text-sm">Détection d'intrusions et analyse de trafic (Cybersécurité).</p>
            </div>
          </div>
        </div>
      </section>
      {/* --- SECTION HORNETIC --- */}
      <section id="hornetic" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-orange-600">
            Hornetic – Solutions Digitales & Services Tech
          </h3>
          <p className="text-slate-600 max-w-3xl mx-auto mb-10">
            Plateforme de services numériques dédiée aux étudiants,
            startups et entrepreneurs souhaitant développer des solutions
            modernes et performantes.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">Développement Web</h4>
              <p className="text-sm text-slate-600">
                Applications modernes avec React, Next.js et architectures évolutives.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">Intelligence Artificielle</h4>
              <p className="text-sm text-slate-600">
                Intégration de modèles ML pour automatisation et prédiction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-lg mb-2">Réseaux & Sécurité</h4>
              <p className="text-sm text-slate-600">
                Architecture réseau, supervision et sécurisation des systèmes.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}