import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-gray-800 px-6 py-12 font-sans">
      <header className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left border-b pb-10">
        <div>
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Patrikas
          </h1>
          <p className="text-2xl text-gray-600">Graphic & Website Designer</p>
        </div>
        <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-[#d1c4e9] to-[#ede7f6] shadow-xl border-4 border-white"></div>
      </header>
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-purple-700">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700 bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
          I'm a self-taught graphic designer and website creator with a passion for clean, effective design. I combine creativity with AI tools to craft digital experiences that stand out visually and functionally.
        </p>
      </section>
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-purple-700">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {["C#", "Graphic Design", "Website Design", "AI Tools"].map(skill => (
            <div
              key={skill}
              className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl text-center shadow-md border border-purple-100 hover:scale-105 transition-transform"
            >
              <p className="text-lg font-semibold text-purple-800">{skill}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-purple-700">Projects</h2>
        <div className="bg-gradient-to-tr from-white to-purple-50 p-10 rounded-2xl text-center text-gray-600 shadow-lg border border-dashed border-purple-200">
          <p className="italic text-lg">Projects coming soon. Stay tuned!</p>
        </div>
      </section>
      <section className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-purple-700">Contact</h2>
        <p className="text-md text-gray-600 mb-6">Let's work together or just say hi 👋</p>
        <div className="flex justify-center gap-10 mt-4">
          <a href="mailto:patrikas@example.com" aria-label="Email" className="hover:text-purple-600 transition transform hover:scale-110">
            <Mail className="w-7 h-7" />
          </a>
          <a href="https://github.com/patrikas" aria-label="GitHub" className="hover:text-purple-600 transition transform hover:scale-110">
            <Github className="w-7 h-7" />
          </a>
          <a href="https://linkedin.com/in/patrikas" aria-label="LinkedIn" className="hover:text-purple-600 transition transform hover:scale-110">
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
      </section>
      <footer className="mt-24 text-center text-sm text-gray-400 border-t pt-8">
        © {new Date().getFullYear()} Patrikas. All rights reserved.
      </footer>
    </div>
  );
}
