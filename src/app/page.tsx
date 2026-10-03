"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

{/* =====================================================
    NAVBAR
===================================================== */}
<nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
  <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

    {/* Logo */}
    <a
      href="#"
      className="text-lg font-semibold tracking-tight"
      onClick={() => setMobileMenuOpen(false)}
    >
      Yasir<span className="text-blue-400">.</span>
    </a>


    {/* Desktop navigation */}
    <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">

      <a href="#about" className="transition hover:text-white">
        About
      </a>

      <a href="#experience" className="transition hover:text-white">
        Experience
      </a>

      <a href="#projects" className="transition hover:text-white">
        Projects
      </a>

      <a href="#skills" className="transition hover:text-white">
        Skills
      </a>

      <a
        href="#certifications"
        className="transition hover:text-white"
      >
        Certifications
      </a>

      <a href="#contact" className="transition hover:text-white">
        Contact
      </a>

    </div>


    {/* Desktop CTA */}
    <a
      href="#contact"
      className="hidden rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-white/30 hover:bg-white/5 md:block"
    >
      Let's Talk
    </a>


    {/* Mobile menu button */}
    <button
      type="button"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="rounded-lg p-2 text-gray-400 transition hover:bg-white/5 hover:text-white md:hidden"
      aria-label="Toggle navigation"
      aria-expanded={mobileMenuOpen}
    >
      {mobileMenuOpen ? (
        <X size={22} />
      ) : (
        <Menu size={22} />
      )}
    </button>

  </div>


  {/* Mobile menu */}
  {mobileMenuOpen && (
    <div className="border-t border-white/10 bg-[#0a0a0a]/95 px-6 py-5 md:hidden">

      <div className="flex flex-col gap-1">

        {[
          ["About", "#about"],
          ["Experience", "#experience"],
          ["Projects", "#projects"],
          ["Skills", "#skills"],
          ["Certifications", "#certifications"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a
            key={href}
            href={href}
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-xl px-4 py-3 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            {label}
          </a>
        ))}

      </div>

    </div>
  )}
</nav>


      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">

        {/* Background glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-500/10
            blur-[140px]
          "
        />

        {/* Subtle grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-20">

          <div className="max-w-4xl">

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-2
                text-sm
                text-gray-400
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              Open to opportunities & collaborations
            </motion.div>


            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                text-5xl
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Hi, I'm
              <br />

              <span className="text-gray-400">
                Shaik Yasir Ahmed.
              </span>
            </motion.h1>


            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-gray-400
                sm:text-xl
              "
            >
              Computer Science Engineer focused on building
              full-stack applications, backend systems, and
              practical software solutions.
            </motion.p>


            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >

              {/* Projects */}
              <a
                href="#projects"
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  font-medium
                  text-black
                  transition
                  hover:bg-gray-200
                "
              >
                View My Work

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </a>


              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  px-6
                  py-3
                  font-medium
                  text-white
                  transition
                  hover:border-white/30
                  hover:bg-white/5
                "
              >
                Download Resume
              </a>

            </motion.div>


            {/* =================================================
                SOCIAL LINKS
            ================================================= */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex items-center gap-5"
            >

              {/* GitHub */}
              <a
                href="https://github.com/shaikyasirahmed07"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-500
                  transition-colors
                  hover:text-white
                "
                aria-label="GitHub"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.07 1.54 1.07.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.9c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shaikyasirahmed07/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-gray-500
                  transition-colors
                  hover:text-white
                "
                aria-label="LinkedIn"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45H7.12V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
                </svg>
              </a>


              {/* Email */}
              <a
                href="mailto:shaikyasirahmed07@gmail.com"
                className="
                  text-gray-500
                  transition-colors
                  hover:text-white
                "
                aria-label="Email"
              >
                <Mail size={21} />
              </a>

            </motion.div>

          </div>


          {/* =================================================
              TECH STACK
          ================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="
              absolute
              bottom-8
              left-6
              right-6
              hidden
              md:block
            "
          >
            <div
              className="
                flex
                items-center
                gap-8
                border-t
                border-white/10
                pt-5
                text-sm
                text-gray-500
              "
            >
              <span>Java</span>
              <span>Python</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Spring Boot</span>
              <span>Django</span>
              <span>SQL</span>
              <span>Git</span>
            </div>
          </motion.div>

        </div>


        {/* =================================================
            SCROLL INDICATOR
        ================================================= */}
        <a
          href="#about"
          className="
            absolute
            bottom-8
            right-6
            hidden
            items-center
            gap-2
            text-xs
            text-gray-600
            transition-colors
            hover:text-gray-400
            lg:flex
          "
        >
          Scroll to explore
          <ArrowDown size={14} />
        </a>

      </section>


      {/* =====================================================
    ABOUT
===================================================== */}
<section
  id="about"
  className="relative border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        About Me
      </p>

      <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        Turning ideas into practical software.
      </h2>
    </motion.div>


    {/* About content */}
    <div className="mt-16 grid gap-12 md:grid-cols-[1.4fr_0.6fr]">

      {/* Main description */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <p className="text-lg leading-8 text-gray-400">
          I'm a Computer Science and Engineering graduate with a
          strong interest in software development, full-stack
          applications, backend systems, and emerging technologies.
        </p>

        <p className="text-lg leading-8 text-gray-400">
          I have hands-on experience working with technologies such
          as Java, Python, JavaScript, React, Spring Boot, Django,
          SQL, and modern databases. I've also worked on projects
          involving blockchain and full-stack application development.
        </p>

        <p className="text-lg leading-8 text-gray-400">
          Currently, I'm working as an Associate Process Executive
          at upGrad Education Pvt. Ltd. on a client project for
          NVIDIA Graphics Private Limited.
        </p>

        <p className="text-lg leading-8 text-gray-400">
          I enjoy learning new technologies, solving technical
          problems, and building software that is useful beyond
          just a demo.
        </p>
      </motion.div>


      {/* Quick facts */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-4"
      >

        {/* Education */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20">
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Education
          </p>

          <p className="mt-3 font-semibold text-white">
            B.Tech — Computer Science & Engineering
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Koneru Lakshmaiah University
          </p>

          <p className="mt-3 text-sm text-blue-400">
            CGPA 9.11 / 10
          </p>
        </div>


        {/* Current role */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20">
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Current Role
          </p>

          <p className="mt-3 font-semibold text-white">
            Associate Process Executive
          </p>

          <p className="mt-1 text-sm text-gray-500">
            upGrad Education Pvt. Ltd.
          </p>

          <p className="mt-3 text-sm text-blue-400">
            Client Project — NVIDIA
          </p>
        </div>


        {/* Focus */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20">
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Focus
          </p>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Full-Stack Development · Backend Engineering ·
            Software Development
          </p>
        </div>

      </motion.div>

    </div>
  </div>
</section>

      {/* =====================================================
    EXPERIENCE
===================================================== */}
<section
  id="experience"
  className="relative border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        Experience
      </p>

      <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        Where I've worked.
      </h2>
    </motion.div>


    {/* Experience card */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="mt-16"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">

        {/* Top accent */}
        <div className="h-px w-full bg-gradient-to-r from-blue-400/70 via-blue-400/20 to-transparent" />

        <div className="p-7 sm:p-10">

          {/* Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">

            <div>
              <p className="text-sm text-blue-400">
                Aug 2026 — Present
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Associate Process Executive
              </h3>

              <p className="mt-2 text-lg text-gray-400">
                upGrad Education Pvt. Ltd.
              </p>
            </div>


            {/* Client badge */}
            <div className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
              Client Project · NVIDIA Graphics
            </div>

          </div>


          {/* Divider */}
          <div className="my-8 h-px bg-white/10" />


          {/* Content */}
          <div className="grid gap-10 md:grid-cols-[1fr_0.35fr]">

            {/* Responsibilities */}
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                Role
              </p>

              <div className="mt-5 space-y-5">

                <div className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                  <p className="leading-7 text-gray-400">
                    Working on a client project for NVIDIA Graphics
                    Private Limited as an Associate Process Executive.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                  <p className="leading-7 text-gray-400">
                    Handle assigned project responsibilities while
                    following defined processes, quality standards,
                    and timelines.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                  <p className="leading-7 text-gray-400">
                    Maintain accuracy and consistency while completing
                    assigned tasks and deliverables.
                  </p>
                </div>

                <div className="flex gap-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />

                  <p className="leading-7 text-gray-400">
                    Collaborate with team members to meet project
                    requirements and operational targets.
                  </p>
                </div>

              </div>
            </div>


            {/* Quick information */}
            <div className="space-y-6">

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                  Company
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  upGrad Education Pvt. Ltd.
                </p>
              </div>


              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                  Client
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  NVIDIA Graphics Private Limited
                </p>
              </div>


              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                  Position
                </p>

                <p className="mt-2 text-sm text-gray-300">
                  Associate Process Executive
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </motion.div>

  </div>
</section>

{/* =====================================================
    PROJECTS
===================================================== */}
<section
  id="projects"
  className="relative border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        Selected Work
      </p>

      <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        Things I've built.
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
        A selection of projects spanning full-stack development,
        blockchain, backend systems, and developer tooling.
      </p>
    </motion.div>


    {/* =================================================
        FEATURED PROJECT — REPO LENS
    ================================================= */}
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="
        group
        relative
        mt-16
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        transition-all
        duration-500
        hover:border-blue-400/30
      "
    >

      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-blue-500/10
          blur-[100px]
          transition-opacity
          duration-500
          group-hover:bg-blue-500/15
        "
      />

      <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr]">

        {/* Project information */}
        <div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1 text-xs font-medium text-blue-400">
              Featured Project
            </span>

            <span className="text-sm text-gray-600">
              01
            </span>
          </div>


          <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            RepoLens
          </h3>


          <p className="mt-4 max-w-xl text-lg leading-8 text-gray-400">
            AI-powered repository intelligence that helps developers
            understand GitHub repositories through architecture
            visualization, documentation, and codebase insights.
          </p>


          {/* Tech stack */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "GitHub API",
              "AI",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-3
                  py-1.5
                  text-xs
                  text-gray-400
                "
              >
                {tech}
              </span>
            ))}
          </div>


          {/* Links */}
          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-5
                py-2.5
                text-sm
                font-medium
                text-black
                transition
                hover:bg-gray-200
              "
            >
              View Project
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                px-5
                py-2.5
                text-sm
                font-medium
                text-gray-300
                transition
                hover:border-white/25
                hover:bg-white/5
              "
            >
              GitHub
            </a>

          </div>

        </div>


        {/* Project visual */}
        <div
          className="
            flex
            min-h-[280px]
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-[#080808]
            p-6
          "
        >

          <div className="w-full max-w-sm">

            {/* Fake application window */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl">

              {/* Window header */}
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>

              {/* Window body */}
              <div className="p-5">

                <div className="h-3 w-24 rounded bg-white/10" />

                <div className="mt-5 grid grid-cols-3 gap-3">

                  <div className="h-20 rounded-lg border border-white/10 bg-white/[0.02]" />

                  <div className="h-20 rounded-lg border border-blue-400/20 bg-blue-400/5" />

                  <div className="h-20 rounded-lg border border-white/10 bg-white/[0.02]" />

                </div>

                <div className="mt-4 space-y-2">
                  <div className="h-2 w-full rounded bg-white/5" />
                  <div className="h-2 w-4/5 rounded bg-white/5" />
                  <div className="h-2 w-3/5 rounded bg-white/5" />
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.article>


    {/* =================================================
        OTHER PROJECTS
    ================================================= */}
    <div className="mt-6 grid gap-6 md:grid-cols-2">


      {/* DAKSHKRISHI */}
      <ProjectCard
        number="02"
        title="DakshKrishi"
        description="Full-stack crop recommendation system designed to provide crop suggestions using agricultural and environmental data."
        technologies={[
          "React",
          "Spring Boot",
          "PostgreSQL",
        ]}
      />


      {/* WATER BILLING DAPP */}
      <ProjectCard
        number="03"
        title="Water Billing DApp"
        description="Blockchain-based water billing application built to explore decentralized transactions and smart contract integration."
        technologies={[
          "Solidity",
          "React",
          "Ethers.js",
        ]}
      />


      {/* BRODOAK HOTELS */}
      <ProjectCard
        number="04"
        title="Brodoak Hotels"
        description="Hotel management and booking platform focused on creating a practical full-stack web experience."
        technologies={[
          "Django",
          "Python",
          "PostgreSQL",
        ]}
      />

    </div>

  </div>
</section>

{/* =====================================================
    SKILLS
===================================================== */}
<section
  id="skills"
  className="relative border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        Technical Skills
      </p>

      <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
        Tools I use to build.
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
        A practical technology stack built through projects,
        coursework, experimentation, and professional experience.
      </p>
    </motion.div>


    {/* Skills grid */}
    <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {/* Languages */}
      <SkillGroup
        title="Languages"
        description="Core programming languages"
        skills={[
          "Java",
          "Python",
          "JavaScript",
          "C",
          "SQL",
        ]}
      />


      {/* Frontend */}
      <SkillGroup
        title="Frontend"
        description="Building modern interfaces"
        skills={[
          "React",
          "Next.js",
          "HTML",
          "CSS",
          "Tailwind CSS",
        ]}
      />


      {/* Backend */}
      <SkillGroup
        title="Backend"
        description="APIs and server-side development"
        skills={[
          "Spring Boot",
          "Django",
          "Flask",
          "Node.js",
          "Express.js",
        ]}
      />


      {/* Databases */}
      <SkillGroup
        title="Databases"
        description="Data storage and management"
        skills={[
          "PostgreSQL",
          "MongoDB",
          "MySQL",
        ]}
      />


      {/* Tools */}
      <SkillGroup
        title="Tools & Platforms"
        description="Development workflow"
        skills={[
          "Git",
          "GitHub",
          "Jira",
          "Linux",
          "REST APIs",
        ]}
      />


      {/* Other */}
      <SkillGroup
        title="Other"
        description="Additional technologies"
        skills={[
          "Solidity",
          "Ethers.js",
          "TensorFlow",
          "Machine Learning",
          "Blockchain",
        ]}
      />

    </div>

  </div>
</section>

{/* =====================================================
    CERTIFICATIONS & EDUCATION
===================================================== */}
<section
  id="certifications"
  className="relative border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
        Background
      </p>

      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Education & certifications.
      </h2>
    </motion.div>


    {/* Content */}
    <div className="mt-16 grid gap-6 lg:grid-cols-2">

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.02]
          p-8
        "
      >
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          Education
        </p>

        <h3 className="mt-6 text-2xl font-semibold">
          B.Tech in Computer Science & Engineering
        </h3>

        <p className="mt-2 text-gray-400">
          Koneru Lakshmaiah University
        </p>

        <p className="mt-1 text-sm text-gray-600">
          2022 — 2026
        </p>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-500">
            Bachelor of Technology
          </p>

          <p className="mt-2 text-lg font-medium text-blue-400">
            Computer Science & Engineering
          </p>
        </div>
      </motion.div>


      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.02]
          p-8
        "
      >
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
          Certifications
        </p>

        <div className="mt-6 space-y-5">

          <Certification
            title="Associate Cloud Engineer"
            issuer="Google Cloud"
          />

          <Certification
            title="Automation 360 RPA Essentials for Students"
            issuer="Automation Anywhere"
          />

          <Certification
            title="Problem Solving"
            issuer="HackerRank"
          />

        </div>
      </motion.div>

    </div>

  </div>
</section>

{/* =====================================================
    CONTACT
===================================================== */}
<section
  id="contact"
  className="relative border-t border-white/10 py-32"
>
  <div className="mx-auto max-w-6xl px-6">

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        p-8
        sm:p-12
        lg:p-16
      "
    >

      <div className="max-w-3xl">

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Contact
        </p>

        <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl">
          Let's build something useful.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
          I'm always interested in discussing software projects,
          engineering opportunities, and ideas worth building.
        </p>

        <a
          href="mailto:shaikyasirahmed07@gmail.com"
          className="
            mt-9
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-white
            px-6
            py-3
            font-medium
            text-black
            transition
            hover:bg-gray-200
          "
        >
          Get in touch
          <ArrowUpRight size={17} />
        </a>

      </div>

    </motion.div>

  </div>
</section>

{/* =====================================================
    FOOTER
===================================================== */}
<footer className="border-t border-white/10">
  <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

    <p className="text-sm text-gray-600">
      © {new Date().getFullYear()} Shaik Yasir Ahmed.
      All rights reserved.
    </p>

    <div className="flex items-center gap-6 text-sm text-gray-600">

      <a
        href="https://github.com/shaikyasirahmed07"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/shaikyasirahmed07/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        LinkedIn
      </a>

      <a
        href="#"
        className="transition hover:text-white"
      >
        Back to top ↑
      </a>

    </div>

  </div>
</footer>

    </main>
  );
}
function ProjectCard({
  number,
  title,
  description,
  technologies,
}: {
  number: string;
  title: string;
  description: string;
  technologies: string[];
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        p-7
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/20
        hover:bg-white/[0.035]
        sm:p-8
      "
    >

      <div className="flex items-center justify-between">

        <span className="text-sm text-gray-600">
          {number}
        </span>

        <ArrowUpRight
          size={19}
          className="
            text-gray-600
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-white
          "
        />

      </div>


      <h3 className="mt-12 text-2xl font-semibold tracking-tight">
        {title}
      </h3>


      <p className="mt-4 min-h-[96px] text-base leading-7 text-gray-500">
        {description}
      </p>


      <div className="mt-7 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-white/10
              px-3
              py-1.5
              text-xs
              text-gray-500
            "
          >
            {technology}
          </span>
        ))}
      </div>

    </motion.article>
  );
}
function SkillGroup({
  title,
  description,
  skills,
}: {
  title: string;
  description: string;
  skills: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        p-7
        transition-all
        duration-300
        hover:border-white/20
        hover:bg-white/[0.035]
      "
    >

      {/* Category */}
      <div className="flex items-start justify-between">

        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {title}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {description}
          </p>
        </div>

        <div
          className="
            h-2
            w-2
            rounded-full
            bg-blue-400/70
            transition-all
            duration-300
            group-hover:scale-150
            group-hover:bg-blue-400
          "
        />

      </div>


      {/* Technologies */}
      <div className="mt-7 flex flex-wrap gap-2">

        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-xl
              border
              border-white/10
              bg-black/20
              px-3
              py-2
              text-sm
              text-gray-400
              transition-colors
              hover:border-white/20
              hover:text-white
            "
          >
            {skill}
          </span>
        ))}

      </div>

    </motion.div>
  );
}
function Certification({
  title,
  issuer,
}: {
  title: string;
  issuer: string;
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-white/10
        bg-black/20
        p-5
        transition
        hover:border-white/20
      "
    >
      <div className="flex items-start gap-4">

        <div
          className="
            mt-1
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-lg
            border
            border-blue-400/20
            bg-blue-400/5
            text-xs
            text-blue-400
          "
        >
          ✓
        </div>

        <div>
          <h4 className="font-medium text-white">
            {title}
          </h4>

          <p className="mt-1 text-sm text-gray-500">
            {issuer}
          </p>
        </div>

      </div>
    </div>
  );
}
