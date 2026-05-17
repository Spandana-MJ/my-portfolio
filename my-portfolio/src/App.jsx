

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaExternalLinkAlt, FaCode, FaPlay,
} from "react-icons/fa";
import { DiJava } from "react-icons/di";
import {
  SiMysql, SiMongodb, SiReact, SiNodedotjs, SiExpress, SiTailwindcss, SiEthereum,
} from "react-icons/si";

import bloghub from "./assets/bloghub.png";
import lostfound from "./assets/lostfound.png";
import certverify from "./assets/certverify.png";
import arecanutgrading from "./assets/Arecanut-grading.png";

/* ── Cursor glow ─────────────────────────────────────────── */
function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      style={{
        position: "fixed", pointerEvents: "none", zIndex: 0,
        left: pos.x - 250, top: pos.y - 250,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        transition: "left 0.15s ease, top 0.15s ease",
      }}
    />
  );
}

/* ── Animated background grid ────────────────────────────── */
function GridBackground() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none",
    }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(99,102,241,0.06)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      {/* Ambient glows */}
      <div style={{
        position: "absolute", top: "-20%", left: "-10%",
        width: "60vw", height: "60vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%)",
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", right: "-5%",
        width: "50vw", height: "50vw", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 65%)",
      }} />
    </div>
  );
}

/* ── Glass card ──────────────────────────────────────────── */
function GlassCard({ children, style = {}, className = "" }) {
  return (
    <div
      className={className}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 20,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ── Section fade-in hook ────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

/* ── Animated section wrapper ────────────────────────────── */
function FadeSection({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ── Gradient text ───────────────────────────────────────── */
function GradientText({ children, style = {} }) {
  return (
    <span style={{
      background: "linear-gradient(135deg, #818cf8 0%, #34d399 100%)",
      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      ...style,
    }}>
      {children}
    </span>
  );
}

/* ── Pill badge ──────────────────────────────────────────── */
function Pill({ children, color = "#818cf8" }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "4px 14px",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.04em",
      border: `1px solid ${color}44`,
      color: color,
      background: `${color}15`,
    }}>
      {children}
    </span>
  );
}

/* ── Tech stack data ─────────────────────────────────────── */
const techStack = [
  { icon: <DiJava />, name: "Java", color: "#E76F00" },
  { icon: <SiReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#68A063" },
  { icon: <SiExpress />, name: "Express", color: "#a5b4fc" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#4DB33D" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
  { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
  { icon: <SiEthereum />, name: "Blockchain", color: "#9b82f3" },
];

/* ── Projects data ───────────────────────────────────────── */
const projects = [
  {
    title: "Lost & Found Portal",
    img: lostfound,
    tags: ["React", "Node.js", "MongoDB"],
    desc: "A full-stack application where users can report or find lost items with real-time search, admin control, and image uploads.",
    live: "https://lost-found-gilt.vercel.app/",
    code: "https://github.com/Spandana-MJ/lost-found",
    demovideo: "https://drive.google.com/file/d/1ywxdusUf0LhL1RfEeBKUj-UMS70JCM5-/preview",
    accent: "#818cf8",
  },
  {
    title: "BlogHub",
    img: bloghub,
    tags: ["MERN Stack", "Cloudinary", "JWT"],
    desc: "A full-featured blogging platform with authentication, Cloudinary media uploads, rich text editing, and comment threads.",
    live: "https://bloghub-eight-alpha.vercel.app/",
    code: "https://github.com/Spandana-MJ/bloghub",
    demovideo: "https://drive.google.com/file/d/1_j7tahV4mfY6XK27yaB2fUy_ebk8aeGz/preview",
    accent: "#34d399",
  },
  {
    title: "Blockchain Certificate Verification",
    img: certverify,
    tags: ["Ethereum", "IPFS", "Solidity"],
    desc: "Decentralized application to issue and verify certificates on-chain using Ethereum smart contracts and IPFS storage.",
    live: "https://cert-verify-rouge.vercel.app/",
    code: "https://github.com/Spandana-MJ/CertVerify",
    demovideo: "https://drive.google.com/file/d/1s7z06F7njh0jSnfZPbr77zOytIaAHj0p/preview",
    accent: "#a78bfa",
  },
  {
    title: "Arecanut Quality Grading",
    img: arecanutgrading,
    tags: ["YOLOv8", "Python", "AI/ML"],
    desc: "AI-powered grading system using YOLOv8 for automated quality classification of arecanuts with real-time detection.",
    live: "https://arecanut-grading.vercel.app",
    code: "https://github.com/Spandana-MJ/arecanut-grading",
    demovideo: "https://drive.google.com/file/d/1IfBsHugfEk9s1ZNJzavtHgsdGg1YSA_O/preview",
    accent: "#f59e0b",
  },
];

/* ── Project card ────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView(0.1);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      {/* Accent glow on hover */}
      <div style={{
        position: "absolute", inset: -2, borderRadius: 24,
        background: `linear-gradient(135deg, ${project.accent}33, transparent)`,
        opacity: hovered ? 1 : 0, transition: "opacity 0.4s",
        pointerEvents: "none",
      }} />

      <GlassCard style={{
        overflow: "hidden",
        border: hovered ? `1px solid ${project.accent}44` : "1px solid rgba(255,255,255,0.07)",
        transition: "border 0.4s",
      }}>
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16/9", background: "#0a0a0f" }}>
          <img
            src={project.img}
            alt={project.title}
            style={{
              width: "100%", height: "100%", objectFit: "contain",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.6s ease",
            }}
          />
          {/* Number badge */}
          <div style={{
            position: "absolute", top: 16, left: 16,
            fontFamily: "'DM Mono', monospace",
            fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
            color: project.accent,
            background: `${project.accent}18`,
            border: `1px solid ${project.accent}33`,
            padding: "4px 10px", borderRadius: 6,
          }}>
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "28px 32px 32px" }}>
          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
            {project.tags.map((t) => (
              <Pill key={t} color={project.accent}>{t}</Pill>
            ))}
          </div>

          <h3 style={{
            fontSize: 24, fontWeight: 700, marginBottom: 12,
            fontFamily: "'Syne', sans-serif",
            color: "#f1f5f9",
          }}>
            {project.title}
          </h3>

          <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 28, fontSize: 15 }}>
            {project.desc}
          </p>

          {/* Links */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                background: `linear-gradient(135deg, ${project.accent}, ${project.accent}aa)`,
                color: "#0f0f1a", textDecoration: "none",
                transition: "opacity 0.2s",
              }}>
                <FaExternalLinkAlt size={12} /> Live Demo
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0", textDecoration: "none",
                transition: "background 0.2s",
              }}>
                <FaCode size={12} /> Source
              </a>
            )}
            {project.demovideo && (
              <a href={project.demovideo} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#e2e8f0", textDecoration: "none",
              }}>
                <FaPlay size={10} /> Video
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

/* ── Social link ─────────────────────────────────────────── */
function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.96 }}
      title={label}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: 44, height: 44, borderRadius: 12,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.7)",
        fontSize: 18, textDecoration: "none",
        transition: "color 0.2s, border-color 0.2s",
      }}
    >
      {icon}
    </motion.a>
  );
}

/* ── Navbar ──────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 24px",
        background: scrolled ? "rgba(9,9,20,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s, border 0.4s",
      }}
    >
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800, fontSize: 20,
          background: "linear-gradient(135deg, #818cf8, #34d399)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          SMJ
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: "rgba(255,255,255,0.55)", textDecoration: "none",
                fontSize: 14, fontWeight: 500, padding: "8px 14px",
                borderRadius: 8, transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#fff";
                e.target.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "rgba(255,255,255,0.55)";
                e.target.style.background = "transparent";
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="/Spandana MJ.pdf"
            style={{
              marginLeft: 8, padding: "9px 20px", borderRadius: 10,
              background: "linear-gradient(135deg, #818cf8, #34d399)",
              color: "#0f0f1a", fontWeight: 700, fontSize: 13,
              textDecoration: "none", letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.target.style.opacity = "1")}
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

/* ── Hero ────────────────────────────────────────────────── */
function Hero() {
  const words = ["Full Stack Developer", "CSE Final Year"];
  const [wordIdx, setWordIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWordIdx((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "100px 24px 60px", textAlign: "center", position: "relative",
    }}>
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: "relative", marginBottom: 36 }}
      >
        {/* Ring animation */}
        <div style={{
          position: "absolute", inset: -8,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #818cf8, #34d399, #818cf8)",
          backgroundSize: "200% 200%",
          animation: "spinGrad 4s linear infinite",
          padding: 3,
        }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "#090914" }} />
        </div>
        <div style={{
          position: "absolute", inset: -8, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.25) 0%, transparent 70%)",
          filter: "blur(12px)",
        }} />
      
        <img
          src="profile1.jpg"
          alt="Spandana M J"
          style={{
            position: "relative",
            width: 220, height: 220, borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #090914",
            display: "block",
          }}
        />
      </motion.div>

      {/* Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 13, color: "#34d399",
          letterSpacing: "0.12em", marginBottom: 18,
          display: "flex", alignItems: "center", gap: 8,
        }}
      >
        <span style={{ display: "inline-block", width: 28, height: 1, background: "#34d399" }} />
        Hello, I'm
        <span style={{ display: "inline-block", width: 28, height: 1, background: "#34d399" }} />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(48px, 8vw, 88px)",
          fontWeight: 800, lineHeight: 1.05,
          color: "#f1f5f9", marginBottom: 20,
          letterSpacing: "-0.02em",
        }}
      >
        Spandana{" "}
        <GradientText>MJ</GradientText>
      </motion.h1>

      {/* Rotating subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ height: 36, overflow: "hidden", marginBottom: 36 }}
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={wordIdx}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 16, color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.04em",
            }}
          >
            {words[wordIdx]}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{ display: "flex", gap: 12, marginBottom: 44 }}
      >
        <SocialLink href="https://www.linkedin.com/in/spandana-mj/" icon={<FaLinkedin />} label="LinkedIn" />
        <SocialLink href="https://github.com/Spandana-MJ" icon={<FaGithub />} label="GitHub" />
        <SocialLink href="mailto:spandanaspandumj@gmail.com" icon={<FaEnvelope />} label="Email" />
        <SocialLink href="/Spandana MJ.pdf" icon={<FaFileAlt />} label="Resume" />
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}
      >
        <a
          href="#projects"
          style={{
            padding: "14px 32px", borderRadius: 12, fontSize: 15, fontWeight: 700,
            background: "linear-gradient(135deg, #818cf8, #34d399)",
            color: "#0f0f1a", textDecoration: "none", letterSpacing: "0.01em",
            boxShadow: "0 8px 32px rgba(129,140,248,0.25)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 12px 40px rgba(129,140,248,0.35)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 8px 32px rgba(129,140,248,0.25)";
          }}
        >
          View Projects
        </a>
        <a
          href="#contact"
          style={{
            padding: "14px 32px", borderRadius: 12, fontSize: 15, fontWeight: 600,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#e2e8f0", textDecoration: "none",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255,255,255,0.09)";
            e.target.style.borderColor = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.05)";
            e.target.style.borderColor = "rgba(255,255,255,0.1)";
          }}
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)" }}
      >
        <div style={{
          width: 24, height: 38, borderRadius: 12,
          border: "1.5px solid rgba(255,255,255,0.2)",
          display: "flex", justifyContent: "center", paddingTop: 6,
        }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 4, height: 8, borderRadius: 2, background: "rgba(255,255,255,0.4)" }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes spinGrad {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}

/* ── About / Tech section ────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 24px" }}>
      <FadeSection>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Text */}
          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: 12,
              color: "#818cf8", letterSpacing: "0.14em", marginBottom: 16,
              textTransform: "uppercase",
            }}>
              About Me
            </p>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.15,
              color: "#f1f5f9", marginBottom: 24, letterSpacing: "-0.02em",
            }}>
              Building things for the{" "}
              <GradientText>modern web</GradientText>
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.5)", lineHeight: 1.8, fontSize: 16, marginBottom: 20,
            }}>
              Final-year CSE student at Canara Engineering College, passionate about building
              scalable web applications and decentralized solutions. I love turning complex
              problems into clean, elegant interfaces.
            </p>
            <p style={{ color: "rgba(255,255,255,0.35)", lineHeight: 1.8, fontSize: 15 }}>
              Currently exploring the intersection of AI and full-stack development, while
              deepening my expertise in blockchain and decentralized architectures.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { value: "4+", label: "Projects shipped" },
              { value: "8+", label: "Technologies" },
              { value: "3", label: "Years of coding" },
              { value: "∞", label: "Lines of coffee" },
            ].map((s, i) => (
              <GlassCard key={i} style={{ padding: "28px 24px", textAlign: "center" }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800,
                  background: "linear-gradient(135deg, #818cf8, #34d399)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text", lineHeight: 1, marginBottom: 8,
                }}>
                  {s.value}
                </div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>{s.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </FadeSection>

      {/* Tech Stack */}
      <FadeSection delay={0.1}>
        <div style={{ marginTop: 80 }}>
          <p style={{
            textAlign: "center",
            fontFamily: "'DM Mono', monospace", fontSize: 12,
            color: "rgba(255,255,255,0.3)", letterSpacing: "0.14em",
            marginBottom: 40, textTransform: "uppercase",
          }}>
            Tech Stack
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            gap: 16,
          }}>
            {techStack.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.05 }}
                transition={{ duration: 0.25 }}
              >
                <GlassCard style={{
                  padding: "24px 16px", textAlign: "center",
                  cursor: "default",
                }}>
                  <div style={{ fontSize: 36, color: t.color, marginBottom: 10 }}>{t.icon}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
                    {t.name}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeSection>
    </section>
  );
}

/* ── Projects section ────────────────────────────────────── */
function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 24px 120px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <FadeSection>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: 12,
              color: "#34d399", letterSpacing: "0.14em", marginBottom: 16,
              textTransform: "uppercase",
            }}>
              Selected Work
            </p>
            <h2 style={{
              fontFamily: "'Syne', sans-serif", fontWeight: 800,
              fontSize: "clamp(32px, 5vw, 52px)", color: "#f1f5f9",
              letterSpacing: "-0.02em", lineHeight: 1.1,
            }}>
              Projects I've{" "}
              <GradientText>built</GradientText>
            </h2>
          </div>
        </FadeSection>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact section ─────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 24px 120px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <FadeSection>
          <p style={{
            fontFamily: "'DM Mono', monospace", fontSize: 12,
            color: "#818cf8", letterSpacing: "0.14em", marginBottom: 16,
            textTransform: "uppercase",
          }}>
            Contact
          </p>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 52px)", color: "#f1f5f9",
            letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 20,
          }}>
            Let's{" "}
            <GradientText>work together</GradientText>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.45)", lineHeight: 1.8, fontSize: 16, marginBottom: 48,
          }}>
            I'm currently open to new opportunities. Whether you have a project in mind,
            want to collaborate, or just want to say hi — my inbox is always open.
          </p>

          <GlassCard style={{ padding: "40px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
              <a href="mailto:spandanaspandumj@gmail.com" style={{
                display: "flex", alignItems: "center", gap: 12,
                width: "100%", padding: "16px 24px", borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#e2e8f0", textDecoration: "none", fontSize: 15,
                transition: "background 0.2s, border-color 0.2s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
              >
                <FaEnvelope style={{ color: "#818cf8", fontSize: 18, flexShrink: 0 }} />
                <span>spandanaspandumj@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/spandana-mj/" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 12,
                width: "100%", padding: "16px 24px", borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#e2e8f0", textDecoration: "none", fontSize: 15,
                transition: "background 0.2s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
              >
                <FaLinkedin style={{ color: "#34d399", fontSize: 18, flexShrink: 0 }} />
                <span>linkedin.com/in/spandana-mj</span>
              </a>
              <a href="https://github.com/Spandana-MJ" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", gap: 12,
                width: "100%", padding: "16px 24px", borderRadius: 12,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#e2e8f0", textDecoration: "none", fontSize: 15,
                transition: "background 0.2s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.04)"}
              >
                <FaGithub style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, flexShrink: 0 }} />
                <span>github.com/Spandana-MJ</span>
              </a>
            </div>
          </GlassCard>
        </FadeSection>
      </div>
    </section>
  );
}

/* ── Footer ──────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{
      textAlign: "center", padding: "28px 24px",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      color: "rgba(255,255,255,0.2)", fontSize: 13,
      fontFamily: "'DM Mono', monospace",
    }}>
      © {new Date().getFullYear()} Spandana M J · Built with React
    </footer>
  );
}

/* ── Root ────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #090914;
          color: #f1f5f9;
          font-family: 'DM Sans', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #090914; }
        ::-webkit-scrollbar-thumb { background: rgba(129,140,248,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(129,140,248,0.5); }
        ::selection { background: rgba(129,140,248,0.35); color: #fff; }
        a { transition: opacity 0.2s; }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <GridBackground />
      <CursorGlow />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}



