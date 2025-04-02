import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("lt");
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "Jonas",
      message: "Puikus bendravimas ir rezultatas! Rekomenduoju."
    },
    {
      name: "Laura",
      message: "Darbas atliktas greitai ir labai estetiškai."
    }
  ]);

  const aboutText = {
    lt: `Savarankiškai išmokęs grafinio dizaino ir svetainių kūrimo pagrindus, šiuo metu dirbu su moderniausiomis technologijomis, kad padėčiau klientams perteikti jų vertę aiškiai ir estetiškai.

Mano stiprybė – kūrybos ir technologijų sintezė.`,

    en: `Self-taught in graphic design and website development, I now work with modern technologies to help clients communicate their value clearly and beautifully.

My strength lies in the fusion of creativity and technology.`
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
    <style>
      {`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}
    </style>
    <div className="min-h-screen bg-gradient-to-br from-[#f7f9fc] to-[#e4e7ec] text-gray-900 px-6 py-12 font-sans">
      <div className="flex justify-end max-w-6xl mx-auto mb-4 gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-sm px-3 py-1 border rounded shadow bg-white text-gray-700 dark:bg-gray-800 dark:text-white"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button
          onClick={() => setLang(lang === 'lt' ? 'en' : 'lt')}
          className="text-sm px-3 py-1 border rounded shadow bg-white text-gray-700 dark:bg-gray-800 dark:text-white"
        >
          {lang === 'lt' ? '🌐 EN' : '🌐 LT'}
        </button>
      </div>
      <h1 className="text-4xl font-bold text-center">{lang === 'lt' ? 'Portfolio' : 'Portfolio'}</h1>
    </div>
    </div>
  );
}
