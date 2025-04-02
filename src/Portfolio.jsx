
import { useState } from "react";

export default function Portfolio() {
  const [lang, setLang] = useState("lt");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f9fc] to-[#e4e7ec] text-gray-900 px-6 py-12 font-sans">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setLang(lang === 'lt' ? 'en' : 'lt')}
          className="text-sm px-3 py-1 border rounded shadow bg-white text-gray-700"
        >
          {lang === 'lt' ? 'EN' : 'LT'}
        </button>
      </div>

      <h1 className="text-4xl font-bold text-center mb-10 text-indigo-700">
        {lang === 'lt' ? 'Apie mane' : 'About Me'}
      </h1>

      <p className="max-w-3xl mx-auto text-lg text-center bg-white p-6 rounded-2xl shadow-xl border border-gray-200 leading-relaxed whitespace-pre-line">
        {lang === 'lt'
          ? `Savarankiškai išmokęs grafinio dizaino ir svetainių kūrimo pagrindus, šiuo metu dirbu su moderniausiomis technologijomis, kad padėčiau klientams perteikti jų vertę aiškiai ir estetiškai.

Mano stiprybė – kūrybos ir technologijų sintezė.`
          : `Self-taught in graphic design and website development, I now work with modern technologies to help clients communicate their value clearly and beautifully.

My strength lies in the fusion of creativity and technology.`}
      </p>
    </div>
  );
}
