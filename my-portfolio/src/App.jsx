
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import {
  SiMysql,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiEthereum,
} from "react-icons/si";
import { motion } from "framer-motion";
import bloghub from "./assets/bloghub.png";
import lostfound from "./assets/lostfound.png";
import certverify from "./assets/certverify.png";

export default function App() {
  const techStack = [
    { icon: <DiJava />, name: "Java", color: "#E76F00" },
    { icon: <SiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "#68A063" },
    { icon: <SiExpress />, name: "Express.js", color: "#FFFFFF" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#4DB33D" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#38BDF8" },
    { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
    { icon: <SiEthereum />, name: "Blockchain", color: "#627EEA" },
  ];

  const projects = [
    {
      title: "Lost & Found Portal",
      img: lostfound,
      desc: "A full-stack application where users can report or find lost items with real-time search and admin control.",
      live: "https://lost-found-gilt.vercel.app/",
      code: "https://github.com/Spandana-MJ/lost-found",
      demovideo: "https://drive.google.com/file/d/1ywxdusUf0LhL1RfEeBKUj-UMS70JCM5-/preview",
    },
    {
      title: "BlogHub",
      img: bloghub,
      desc: "A MERN-based blogging platform with user authentication, Cloudinary image uploads, and commenting system.",
      live: "https://bloghub-eight-alpha.vercel.app/",
      code: "https://github.com/Spandana-MJ/bloghub",
      demovideo: "https://drive.google.com/file/d/1_j7tahV4mfY6XK27yaB2fUy_ebk8aeGz/preview",
    },
    {
      title: "Blockchain Certificate Verification",
      img: certverify,
      desc: "Decentralized app to verify educational certificates using Ethereum blockchain and IPFS.",
      code: "https://github.com/Spandana-MJ/CertVerify",
      demovideo: "https://drive.google.com/file/d/1s7z06F7njh0jSnfZPbr77zOytIaAHj0p/preview",
    },
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f766e] text-gray-100 font-sans scroll-smooth">

      {/* Navbar */}
      <nav className="bg-[#0f172a]/70 backdrop-blur-lg fixed top-0 w-full z-50 border-b border-indigo-900/30 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
            Spandana M J
          </h1>
          <div className="hidden sm:flex space-x-6 font-medium">
            <a href="#about" className="hover:text-teal-300 transition">About</a>
            <a href="#projects" className="hover:text-teal-300 transition">Projects</a>
            <a href="#contact" className="hover:text-teal-300 transition">Contact</a>
            <a
              href="/4CB22CS134_Spandana M J.pdf"
              className="bg-gradient-to-r from-indigo-400 to-teal-400 text-gray-900 px-4 py-2 rounded-lg hover:scale-105 transition-transform font-semibold"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-48 h-48 mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-400 blur-3xl opacity-40 animate-pulse"></div>
          <img
            src="profile1.jpg"
            alt="Profile"
            className="relative w-48 h-48 rounded-full border-4 border-indigo-400 object-cover shadow-2xl"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl font-extrabold mb-3"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
            Spandana
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl mb-6 text-gray-300"
        >
          CSE Student | Full Stack Enthusiast
        </motion.p>

        <div className="flex gap-5 text-2xl mb-8">
          <a href="https://www.linkedin.com/in/spandana-mj/" target="_blank" className="hover:text-blue-400"><FaLinkedin /></a>
          <a href="https://github.com/Spandana-MJ" target="_blank" className="hover:text-gray-200"><FaGithub /></a>
          <a href="mailto:spandana@example.com" className="hover:text-red-400"><FaEnvelope /></a>
          <a href="/4CB22CS134_Spandana M J.pdf" className="hover:text-indigo-300"><FaFileAlt /></a>
        </div>

        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-indigo-400 to-teal-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          View Projects
        </a>
      </section>

      {/* About / Tech Stack */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed">
          I’m a final-year Computer Science student at Canara Engineering College, Mangalore.  
          I love building scalable full-stack web applications and exploring next-gen tech like blockchain & AI.
        </p>

        <h3 className="text-2xl font-semibold mb-10 text-teal-300">Tech Stack</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-12 justify-items-center">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="text-9xl hover:scale-110 transition-transform" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <p className="text-lg font-medium text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

    
      {/* Projects */}
<section id="projects" className="py-24 px-6 text-center">
  <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
    Projects
  </h2>

  <div className="flex flex-col items-center gap-24 max-w-4xl mx-auto">
    {projects.map((p, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.3, duration: 0.8 }}
        className="w-full bg-gradient-to-r from-indigo-800 to-teal-700 rounded-3xl shadow-2xl overflow-hidden hover:scale-[1.03] transition-transform"
      >
        {p.img ? (
          <img src={p.img} alt={p.title} className="w-full h-[500px] object-cover" />
        ) : (
          <div className="w-full h-[500px] flex items-center justify-center bg-slate-600 text-gray-300 text-xl">
            No Image Available
          </div>
        )}

        <div className="p-10 text-left">
          <h3 className="text-3xl font-semibold text-indigo-300 mb-4">{p.title}</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">{p.desc}</p>

          <div className="flex gap-6 flex-wrap mb-4">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                className="px-4 py-2 bg-teal-400 text-gray-900 rounded-lg hover:scale-105 transition-transform"
              >
                Live
              </a>
            )}
            {p.code && (
              <a
                href={p.code}
                target="_blank"
                className="px-4 py-2 bg-indigo-400 text-gray-100 rounded-lg hover:scale-105 transition-transform"
              >
                Code
              </a>
            )}
            {p.demovideo && (
              <a
                href={p.demovideo}
                target="_blank"
                className="px-4 py-2 bg-purple-400 text-gray-100 rounded-lg hover:scale-105 transition-transform"
              >
                Demo Video
              </a>
            )}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="py-20 text-center bg-gradient-to-t from-[#0f172a] via-[#1e1b4b] to-[#0f766e]">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <p className="text-lg mb-10 text-gray-300">
          Let’s connect and create something amazing together!
        </p>
        <div className="flex justify-center gap-6 text-3xl text-indigo-400">
          <a href="mailto:spandana@example.com" className="hover:text-teal-300"><FaEnvelope /></a>
          <a href="https://github.com/Spandana-MJ" className="hover:text-teal-300"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/spandana-mj/" className="hover:text-teal-300"><FaLinkedin /></a>
        </div>
      </section>

      <footer className="bg-slate-800/80 py-6 text-center text-gray-400 border-t border-slate-700">
        © {new Date().getFullYear()} Spandana M J | Built with 💙 React & TailwindCSS
      </footer>

    </div>
  );
}
