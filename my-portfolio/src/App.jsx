
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
      desc: "A MERN-based blogging platform with authentication, Cloudinary uploads, and comments.",
      live: "https://bloghub-eight-alpha.vercel.app/",
      code: "https://github.com/Spandana-MJ/bloghub",
      demovideo: "https://drive.google.com/file/d/1_j7tahV4mfY6XK27yaB2fUy_ebk8aeGz/preview",
    },
    {
      title: "Blockchain Certificate Verification",
      img: certverify,
      desc: "Decentralized app to verify certificates using Ethereum and IPFS.",
      code: "https://github.com/Spandana-MJ/CertVerify",
      demovideo: "https://drive.google.com/file/d/1s7z06F7njh0jSnfZPbr77zOytIaAHj0p/preview",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f766e] text-gray-100 scroll-smooth">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#0f172a]/80 backdrop-blur-lg z-50 border-b border-indigo-900/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
            Spandana M J
          </h1>

          <div className="hidden sm:flex gap-6">
            <a href="#about" className="hover:text-teal-300">About</a>
            <a href="#projects" className="hover:text-teal-300">Projects</a>
            <a href="#contact" className="hover:text-teal-300">Contact</a>
            <a
              href="/4CB22CS134_Spandana M J.pdf"
              className="bg-gradient-to-r from-indigo-400 to-teal-400 text-gray-900 px-4 py-2 rounded-lg font-semibold"
            >
              Resume
            </a>
          </div>

          <a
            href="/4CB22CS134_Spandana M J.pdf"
            className="sm:hidden bg-indigo-400 text-gray-900 px-3 py-1 rounded-md text-sm"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-teal-400 blur-3xl opacity-40"></div>
          <img
            src="profile1.jpg"
            alt="Profile"
            className="relative w-full h-full rounded-full border-4 border-indigo-400 object-cover shadow-xl"
          />
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
          Hi, I’m <span className="bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">Spandana</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-300 mb-6">
          CSE Student | Full Stack Developer | Blockchain Enthusiast
        </p>

        <div className="flex gap-5 text-2xl mb-8">
          <a href="https://www.linkedin.com/in/spandana-mj/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/Spandana-MJ" target="_blank"><FaGithub /></a>
          <a href="mailto:spandana@example.com"><FaEnvelope /></a>
          <a href="/4CB22CS134_Spandana M J.pdf"><FaFileAlt /></a>
        </div>

        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-indigo-400 to-teal-400 text-gray-900 rounded-lg font-semibold"
        >
          View Projects
        </a>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-300 mb-12">
          Final-year CSE student at Canara Engineering College. Passionate about building scalable web apps and blockchain solutions.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-10">
          {techStack.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="text-5xl sm:text-6xl md:text-7xl" style={{ color: t.color }}>
                {t.icon}
              </div>
              <p className="text-sm sm:text-base">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
          Projects
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-20">
          {projects.map((p, i) => (
            <div key={i} className="bg-gradient-to-r from-indigo-800 to-teal-700 rounded-3xl overflow-hidden shadow-xl">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover"
              />

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-3">{p.title}</h3>
                <p className="text-gray-300 mb-6">{p.desc}</p>

                <div className="flex flex-wrap gap-4">
                  {p.live && <a href={p.live} target="_blank" className="px-4 py-2 bg-teal-400 text-gray-900 rounded-lg">Live</a>}
                  {p.code && <a href={p.code} target="_blank" className="px-4 py-2 bg-indigo-400 rounded-lg">Code</a>}
                  {p.demovideo && <a href={p.demovideo} target="_blank" className="px-4 py-2 bg-purple-400 rounded-lg">Demo</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="mailto:spandana@example.com"><FaEnvelope /></a>
          <a href="https://github.com/Spandana-MJ"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/spandana-mj/"><FaLinkedin /></a>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-400">
        © {new Date().getFullYear()} Spandana M J
      </footer>
    </div>
  );
}
