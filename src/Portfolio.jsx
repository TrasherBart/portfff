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
      <div className="flex justify-end max-w-6xl mx-auto mb-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-sm px-3 py-1 border rounded shadow bg-white text-gray-700 dark:bg-gray-800 dark:text-white"
        >
          {darkMode ? 'Šviesi tema' : 'Tamsi tema'}
        </button>
      </div>

      <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left border-b pb-10">
        <div>
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 text-transparent bg-clip-text">
            Patrikas
          </h1>
          <p className="text-2xl text-gray-700">Graphic & Website Designer</p>
        </div>
        <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-[#cdddfc] to-[#f4e7ff] shadow-xl border-4 border-white"></div>
      </header>

      <section className="mt-20 max-w-5xl mx-auto fade-in">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-indigo-700">{lang === 'lt' ? 'Apie mane' : 'About Me'}</h2>
          <button
            onClick={() => setLang(lang === "lt" ? "en" : "lt")}
            className="text-sm text-indigo-600 border px-3 py-1 rounded hover:bg-indigo-50"
          >
            {lang === "lt" ? "EN" : "LT"}
          </button>
        </div>
        <p className="text-lg leading-relaxed text-gray-800 bg-white p-6 rounded-2xl shadow-xl border border-gray-200 whitespace-pre-line">
          {aboutText[lang]}
        </p>
      </section>

      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700">{lang === 'lt' ? 'Įgūdžiai' : 'Skills'}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["🧠 C#", "🎨 Graphic Design", "💻 Website Design", "🤖 AI Tools"].map(skill => (
            <div
              key={skill}
              className="bg-white p-6 rounded-xl text-center shadow-lg border border-indigo-100 hover:scale-105 transition-transform hover:shadow-xl"
            >
              <p className="text-lg font-semibold text-indigo-800">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700">{lang === 'lt' ? 'Projektai' : 'Projects'}</h2>
        <div className="bg-gradient-to-tr from-white to-blue-50 p-10 rounded-2xl text-center text-gray-700 shadow-lg border border-dashed border-indigo-200">
          <p className="italic text-lg">Projects coming soon. Stay tuned!</p>
        </div>
      </section>

      <section className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700">{lang === 'lt' ? 'Kontaktai' : 'Contact'}</h2>
        <p className="text-md text-gray-600 mb-6">{lang === 'lt' ? 'Dirbkime kartu arba tiesiog pasisveikink 👋' : "Let's work together or just say hi 👋"}</p>
        <div className="flex justify-center gap-10 mt-4">
          <a href="mailto:patrikas@example.com" aria-label="Email" className="hover:text-indigo-600 transition transform hover:scale-110">
            <Mail className="w-7 h-7" />
          </a>
          <a href="https://github.com/patrikas" aria-label="GitHub" className="hover:text-indigo-600 transition transform hover:scale-110">
            <Github className="w-7 h-7" />
          </a>
          <a href="https://linkedin.com/in/patrikas" aria-label="LinkedIn" className="hover:text-indigo-600 transition transform hover:scale-110">
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
      </section>

      <section className="mt-20 max-w-3xl mx-auto fade-in">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 text-center">{lang === 'lt' ? 'Palik atsiliepimą' : 'Leave a testimonial'}</h2>
        <form
          action="https://formsubmit.io/send/patrikasbartanovicius@gmail.com"
          method="POST"
          className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200 mb-10"
        >
          <input type="hidden" name="_redirect" value="https://portfff.vercel.app" />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{lang === 'lt' ? 'Vardas' : 'Name'}</label>
            <input name="name" type="text" required placeholder="{lang === 'lt' ? 'Tavo vardas' : 'Your name'}" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">{lang === 'lt' ? 'Atsiliepimas' : 'Testimonial'}</label>
            <textarea name="message" rows="4" required placeholder="{lang === 'lt' ? 'Parašyk atsiliepimą...' : 'Write your testimonial...'}" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
          </div>
          <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            {lang === 'lt' ? 'Siųsti' : 'Send'}
          </button>
        </form>

        <div className="space-y-6">
          {feedbacks.map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow border border-gray-100">
              <p className="font-semibold text-indigo-700">{item.name}</p>
              <p className="text-gray-700 mt-1">{item.message}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-24 text-center text-sm text-gray-400 border-t pt-8">
        © {new Date().getFullYear()} Patrikas. All rights reserved.
      </footer>
    </div>
  );
}
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
