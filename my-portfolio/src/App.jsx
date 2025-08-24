import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { DiJava } from "react-icons/di";  // ✅ Correct Java icon
import { SiMysql, SiMongodb,SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiEthereum } from "react-icons/si";



export default function App() {
  return (
    <div className="bg-slate-900 text-gray-100 font-sans">

      {/* Navbar */}
      <nav className="bg-slate-800/90 backdrop-blur-md fixed top-0 w-full z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-indigo-400">Spandana M J</h1>
          <div className="space-x-6 font-medium">
            <a href="#about" className="hover:text-teal-400 transition">About</a>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
            <a href="/4CB22CS134_Spandana M J.pdf" className="bg-indigo-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-indigo-500 transition">Resume</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-slate-900">
        <div className="relative w-44 h-44 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-400 animate-pulse blur-xl opacity-30"></div>
          <img 
            src="profile1.jpg" 
            alt="Profile" 
            className="relative w-44 h-44 rounded-full border-4 border-slate-800 object-cover shadow-xl"
          />
        </div>

        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-indigo-400">Hi, I'm Spandana</h1>
        <p className="text-xl sm:text-2xl mb-6 text-gray-300">CSE Student | Full Stack Developer</p>

        <div className="flex gap-4 text-2xl mb-6">
          <a href="https://www.linkedin.com/in/spandana-mj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FaLinkedin /></a>
          <a href="https://github.com/Spandana-MJ" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 transition"><FaGithub /></a>
          <a href="mailto:spandana@example.com" className="hover:text-red-500 transition"><FaEnvelope /></a>
          <a href="/4CB22CS134_Spandana M J.pdf" className="hover:text-indigo-200 transition"><FaFileAlt /></a>
        </div>

        <a href="#projects" className="px-6 py-3 bg-indigo-400 text-gray-900 rounded-lg shadow-lg hover:bg-indigo-500 transition transform hover:-translate-y-1">View Projects</a>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-400">About Me</h2>
        <p className="text-lg text-gray-300 mb-6">
          I am a 4th-year Computer Science Engineering student at Canara Engineering College, Mangalore with a passion for full-stack development. I have hands-on experience in these technologies:
        </p>

       


  <div className="flex flex-wrap justify-center gap-6 text-4xl text-indigo-400">
  <DiJava className="hover:text-teal-400 transition" title="Java" />
  <SiReact className="hover:text-teal-400 transition" title="React" />
  <SiNodedotjs className="hover:text-teal-400 transition" title="Node.js" />
  <SiExpress className="hover:text-teal-400 transition" title="Express.js" />
  <SiTailwindcss className="hover:text-teal-400 transition" title="Tailwind CSS" />
  <SiEthereum className="hover:text-teal-400 transition" title="Blockchain" />
  <SiMysql className="hover:text-teal-400 transition" title="Mysql" />
    <SiMongodb className="hover:text-teal-400 transition" title="Mongodb" />
</div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/90">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-400">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Lost & Found */}
          <div className="bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
            <img src="lost-found.png" alt="Lost & Found" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">Lost & Found Portal</h3>
              <p className="text-gray-300 mb-4">Web app to report and find lost items with user authentication and tracking.</p>
              <a href="https://github.com/Spandana-MJ/lost-found" className="text-teal-400 font-medium hover:underline">View on GitHub</a>
            </div>
          </div>

          {/* Blockchain Certificate Verification */}
          <div className="bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
            <img src="cert-verify.png" alt="Blockchain Certificate" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">Blockchain Certificate Verification</h3>
              <p className="text-gray-300 mb-4">Secure certificate issuance and verification using blockchain and IPFS.</p>
              <a href="https://github.com/Spandana-MJ/CertVerify" className="text-teal-400 font-medium hover:underline">View on GitHub</a>
            </div>
          </div>

          {/* Arecanut Quality Grading */}
          <div className="bg-slate-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
            {/* <img src="https://images.unsplash.com/photo-1600700113102-66e9c4a6c91b?crop=entropy&cs=tinysrgb&fit=max&w=400" alt="Arecanut Quality Grading" className="w-full h-48 object-cover"/> */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-400">Arecanut Quality Grading</h3>
              <p className="text-gray-300 mb-4">AI-powered grading system using YOLOv8 to classify two grades of arecanuts.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 text-center bg-slate-900">
        <h2 className="text-3xl font-bold mb-6 text-indigo-400">Get in Touch</h2>
        <p className="text-lg mb-6 text-gray-300">Interested in working together? Let's connect!</p>
        <div className="flex justify-center gap-6 text-2xl text-indigo-400">
          <a href="mailto:spandana@example.com"><FaEnvelope /></a>
          <a href="https://github.com/Spandana-MJ"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/spandana-mj/"><FaLinkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800/90 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} Spandana M J | Built with React & TailwindCSS
      </footer>

    </div>
  );
}
