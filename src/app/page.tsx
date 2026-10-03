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
      Yasir Ahmed Shaik<span className="text-blue-400">.</span>
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
                href="/Resume.pdf"
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


{/* =================================================
    ABOUT
================================================= */}
<section
  id="about"
  className="mx-auto max-w-6xl px-6 py-32"
>
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >

    {/* Section label */}
    <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
      About Me
    </p>

    {/* Heading */}
    <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
      Software engineer who enjoys building practical solutions.
    </h2>

    {/* Main content */}
    <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

      {/* About text */}
      <div className="space-y-6 text-lg leading-8 text-gray-400">

        <p>
          I'm a Computer Science and Engineering graduate with
          professional experience as an Associate Process Executive
          at upGrad Education Pvt. Ltd., working on a client project
          for NVIDIA Graphics Private Limited.
        </p>

        <p>
          My technical interests are centered around full-stack
          development, backend systems, databases, and building
          software that solves practical problems.
        </p>

        <p>
          I enjoy working across the stack—from designing user
          interfaces and developing APIs to working with databases,
          application logic, and deployment workflows.
        </p>

      </div>


      {/* Quick facts */}
      <div className="space-y-4">

        {/* Education */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
            Education
          </p>

          <p className="mt-2 font-medium text-gray-200">
            B.Tech — Computer Science & Engineering
          </p>

          <p className="mt-1 text-sm text-gray-500">
            KL University
          </p>
        </div>


        {/* Current role */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
            Currently
          </p>

          <p className="mt-2 font-medium text-gray-200">
            Associate Process Executive
          </p>

          <p className="mt-1 text-sm text-gray-500">
            upGrad Education Pvt. Ltd.
          </p>
        </div>


        {/* Focus */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
            Focus
          </p>

          <p className="mt-2 font-medium text-gray-200">
            Full-Stack Development
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Backend Systems · APIs · Databases
          </p>
        </div>

      </div>

    </div>

  </motion.div>
</section>

{/* =================================================
    EXPERIENCE
================================================= */}
<section
  id="experience"
  className="mx-auto max-w-6xl px-6 py-32"
>
  {/* Section heading */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
      Experience
    </p>

    <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
      Professional experience.
    </h2>

    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
      Experience working in a structured, quality-focused
      professional environment while contributing to
      technology-driven client operations.
    </p>
  </motion.div>


  {/* Experience card */}
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
      p-7
      transition-all
      duration-500
      hover:border-blue-400/30
      sm:p-10
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
        bg-blue-500/5
        blur-[100px]
        transition-all
        duration-500
        group-hover:bg-blue-500/10
      "
    />

    <div className="relative">

      {/* Company + date */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

        <div>

          <div className="flex flex-wrap items-center gap-3">

            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Associate Process Executive
            </h3>

            <span
              className="
                rounded-full
                border
                border-emerald-400/20
                bg-emerald-400/5
                px-3
                py-1
                text-xs
                font-medium
                text-emerald-400
              "
            >
              Current
            </span>

          </div>

          <p className="mt-2 text-lg text-blue-400">
            upGrad Education Pvt. Ltd.
          </p>

        </div>


        <div className="text-sm text-gray-500 sm:text-right">
          <p>2026 — Present</p>
          <p className="mt-1">
            Remote
          </p>
        </div>

      </div>


      {/* Client */}
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-5
        "
      >
        <p className="text-xs uppercase tracking-[0.18em] text-gray-600">
          Client Project
        </p>

        <p className="mt-2 text-lg font-medium text-gray-200">
          NVIDIA Graphics Private Limited
        </p>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Working on a client project in a structured,
          quality-focused professional environment.
        </p>
      </div>


      {/* Responsibilities */}
      <div className="mt-10">

        <p className="text-sm uppercase tracking-[0.18em] text-gray-600">
          Responsibilities
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h4 className="font-medium text-gray-200">
              Quality-focused operations
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Performing structured tasks with attention to
              accuracy, consistency, and quality requirements.
            </p>
          </div>


          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h4 className="font-medium text-gray-200">
              Data & visual processing
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Working with visual data and following defined
              guidelines to produce reliable and consistent
              results.
            </p>
          </div>


          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h4 className="font-medium text-gray-200">
              Process adherence
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Following established workflows, instructions,
              quality standards, and project requirements.
            </p>
          </div>


          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <h4 className="font-medium text-gray-200">
              Team collaboration
            </h4>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Collaborating within a professional project
              environment while meeting assigned timelines
              and operational requirements.
            </p>
          </div>

        </div>

      </div>


      {/* Skills gained */}
      <div className="mt-10">

        <p className="text-sm uppercase tracking-[0.18em] text-gray-600">
          Professional strengths
        </p>

        <div className="mt-5 flex flex-wrap gap-2">

          {[
            "Attention to Detail",
            "Quality Assurance",
            "Data Processing",
            "Problem Solving",
            "Process Discipline",
            "Team Collaboration",
            "Time Management",
          ].map((skill) => (
            <span
              key={skill}
              className="
                rounded-lg
                border
                border-white/10
                bg-white/[0.03]
                px-3
                py-1.5
                text-xs
                text-gray-400
              "
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

    </div>
  </motion.article>
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
  className="group relative mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-blue-400/30"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px] transition-all duration-500 group-hover:bg-blue-500/15" />

  <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

    {/* PROJECT INFORMATION */}
    <div>

      {/* Status */}
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-blue-400/20 bg-blue-400/5 px-3 py-1 text-xs font-medium text-blue-400">
          Currently in development
        </span>

        <span className="text-sm text-gray-600">
          01
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
        RepoLens
      </h3>

      {/* Description */}
      <p className="mt-4 max-w-xl text-lg leading-8 text-gray-400">
        A developer-focused platform for analyzing GitHub
        repositories and turning complex codebases into
        easier-to-understand project insights.
      </p>

      {/* Technologies */}
      <div className="mt-7 flex flex-wrap gap-2">
        {[
          "Next.js",
          "TypeScript",
          "React",
          "GitHub API",
          "AI",
          "Tailwind CSS",
        ].map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-white/20 hover:text-white"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Development status */}
      <div className="mt-9 flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
        </span>

        <span className="text-sm text-gray-500">
          Active development
        </span>
      </div>

    </div>

    {/* PROJECT PREVIEW */}
    <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">

      {/* Browser header */}
      <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />

        <div className="ml-3 flex-1 rounded-md border border-white/5 bg-white/[0.03] px-3 py-1 text-[10px] text-gray-600">
          repolens
        </div>
      </div>

      {/* Mock interface */}
      <div className="p-5">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <div className="h-3 w-24 rounded bg-white/10" />
            <div className="mt-2 h-2 w-36 rounded bg-white/5" />
          </div>

          <div className="h-7 w-20 rounded-lg bg-blue-500/10" />
        </div>

        {/* Main interface */}
        <div className="mt-6 grid grid-cols-[0.35fr_0.65fr] gap-3">

          {/* File tree */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">
            <div className="h-2 w-16 rounded bg-white/10" />

            <div className="mt-4 space-y-3">
              <div className="h-2 w-20 rounded bg-white/5" />
              <div className="ml-3 h-2 w-16 rounded bg-white/5" />
              <div className="ml-3 h-2 w-20 rounded bg-blue-400/20" />
              <div className="ml-3 h-2 w-14 rounded bg-white/5" />
              <div className="h-2 w-24 rounded bg-white/5" />
            </div>
          </div>

          {/* Architecture preview */}
          <div className="relative min-h-[150px] rounded-xl border border-white/5 bg-white/[0.02] p-4">

            <div className="h-2 w-20 rounded bg-white/10" />

            {/* Architecture nodes */}
            <div className="absolute left-5 top-16 h-8 w-16 rounded-lg border border-blue-400/20 bg-blue-400/5" />

            <div className="absolute left-1/2 top-10 h-8 w-16 -translate-x-1/2 rounded-lg border border-white/10 bg-white/[0.03]" />

            <div className="absolute right-5 top-16 h-8 w-16 rounded-lg border border-white/10 bg-white/[0.03]" />

            <div className="absolute bottom-6 left-1/2 h-8 w-16 -translate-x-1/2 rounded-lg border border-white/10 bg-white/[0.03]" />

            {/* Connections */}
            <div className="absolute left-[27%] top-[75px] h-px w-[25%] bg-white/10" />

            <div className="absolute right-[27%] top-[75px] h-px w-[25%] bg-white/10" />

            <div className="absolute left-1/2 top-[75px] h-[55px] w-px bg-white/10" />

          </div>

        </div>
      </div>

      {/* Preview glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />

    </div>
  </div>
</motion.article>

{/* =================================================
    OTHER PROJECTS
================================================= */}
    <div className="mt-6 grid gap-6 md:grid-cols-2">


      {/* =================================================
    PROJECT — DAKSHKRISHI
================================================= */}
<motion.article
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-emerald-400/30 sm:p-10"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-emerald-500/5 blur-[100px] transition-all duration-500 group-hover:bg-emerald-500/10" />

  <div className="relative">

    {/* Header */}
    <div className="flex items-center justify-between gap-4">
      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-400">
        Full-Stack Project
      </span>

      <span className="text-sm text-gray-600">
        02
      </span>
    </div>

    {/* Title */}
    <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
      DakshKrishi
    </h3>

    {/* Description */}
    <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
      A full-stack crop recommendation platform designed to help
      farmers make better crop decisions using agricultural data
      and recommendation-based insights.
    </p>

    {/* Tech stack */}
    <div className="mt-7 flex flex-wrap gap-2">
      {[
        "React",
        "Spring Boot",
        "PostgreSQL",
        "REST API",
        "Java",
      ].map((technology) => (
        <span
          key={technology}
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-white/20 hover:text-white"
        >
          {technology}
        </span>
      ))}
    </div>

    {/* Project visual */}
    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">

      {/* Mock dashboard header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <div className="h-3 w-28 rounded bg-white/10" />
          <div className="mt-2 h-2 w-40 rounded bg-white/5" />
        </div>

        <div className="h-7 w-24 rounded-lg bg-emerald-400/10" />
      </div>

      {/* Dashboard */}
      <div className="grid gap-4 p-5 sm:grid-cols-3">

        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <div className="h-2 w-20 rounded bg-white/10" />
          <div className="mt-5 h-10 w-16 rounded bg-emerald-400/10" />
        </div>

        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <div className="h-2 w-24 rounded bg-white/10" />
          <div className="mt-5 h-10 w-20 rounded bg-white/5" />
        </div>

        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
          <div className="h-2 w-16 rounded bg-white/10" />
          <div className="mt-5 h-10 w-24 rounded bg-white/5" />
        </div>

      </div>

      {/* Recommendation panel */}
      <div className="mx-5 mb-5 rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] p-5">
        <div className="h-2 w-28 rounded bg-emerald-400/20" />

        <div className="mt-4 flex flex-wrap gap-3">
          <span className="rounded-lg bg-white/[0.04] px-4 py-2 text-xs text-gray-500">
            Crop Recommendation
          </span>

          <span className="rounded-lg bg-white/[0.04] px-4 py-2 text-xs text-gray-500">
            Soil Analysis
          </span>

          <span className="rounded-lg bg-white/[0.04] px-4 py-2 text-xs text-gray-500">
            Agricultural Insights
          </span>
        </div>
      </div>

    </div>

    {/* Project links */}
    <div className="mt-8 flex flex-wrap gap-4">

      <a
        href="#"
        className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
      >
        GitHub
      </a>

      <span className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-600">
        Live demo coming soon
      </span>

    </div>

  </div>
</motion.article>

{/* =================================================
    PROJECT — WATER BILLING DAPP
================================================= */}
<motion.article
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-purple-400/30 sm:p-10"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-500/5 blur-[100px] transition-all duration-500 group-hover:bg-purple-500/10" />

  <div className="relative">

    {/* Header */}
    <div className="flex items-center justify-between gap-4">
      <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1 text-xs font-medium text-purple-400">
        Blockchain + Full-Stack
      </span>

      <span className="text-sm text-gray-600">
        03
      </span>
    </div>

    {/* Title */}
    <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
      Water Billing DApp
    </h3>

    {/* Description */}
    <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
      A decentralized water billing application that combines
      blockchain technology with a modern web interface to
      provide transparent and reliable billing transactions.
    </p>

    {/* Technology stack */}
    <div className="mt-7 flex flex-wrap gap-2">
      {[
        "Solidity",
        "React",
        "Ethers.js",
        "Blockchain",
        "Smart Contracts",
      ].map((technology) => (
        <span
          key={technology}
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-white/20 hover:text-white"
        >
          {technology}
        </span>
      ))}
    </div>

    {/* Project visual */}
    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">

      {/* Application header */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <div className="h-3 w-32 rounded bg-white/10" />
          <div className="mt-2 h-2 w-44 rounded bg-white/5" />
        </div>

        <div className="rounded-lg border border-purple-400/10 bg-purple-400/5 px-3 py-2">
          <div className="h-2 w-16 rounded bg-purple-400/20" />
        </div>
      </div>

      {/* Billing dashboard */}
      <div className="grid gap-4 p-5 sm:grid-cols-2">

        {/* Customer information */}
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">

          <div className="h-2 w-28 rounded bg-white/10" />

          <div className="mt-5 space-y-3">
            <div className="h-2 w-36 rounded bg-white/5" />
            <div className="h-2 w-28 rounded bg-white/5" />
            <div className="h-2 w-40 rounded bg-white/5" />
          </div>

        </div>

        {/* Bill information */}
        <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">

          <div className="h-2 w-20 rounded bg-white/10" />

          <div className="mt-5 flex items-end justify-between">

            <div>
              <div className="h-2 w-16 rounded bg-white/5" />
              <div className="mt-3 h-8 w-24 rounded bg-purple-400/10" />
            </div>

            <div className="rounded-lg bg-purple-400/10 px-3 py-2">
              <div className="h-2 w-12 rounded bg-purple-400/20" />
            </div>

          </div>

        </div>

      </div>

      {/* Blockchain transaction */}
      <div className="mx-5 mb-5 rounded-xl border border-purple-400/10 bg-purple-400/[0.03] p-5">

        <div className="flex items-center justify-between gap-4">

          <div>
            <div className="h-2 w-32 rounded bg-purple-400/20" />
            <div className="mt-3 h-2 w-48 rounded bg-white/5" />
          </div>

          <span className="rounded-full border border-purple-400/10 px-3 py-1 text-[10px] text-purple-400">
            Verified
          </span>

        </div>

      </div>

    </div>

    {/* Project links */}
    <div className="mt-8 flex flex-wrap gap-4">

      <a
        href="#"
        className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
      >
        GitHub
      </a>

      <span className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-600">
        Blockchain project
      </span>

    </div>

  </div>
</motion.article>

{/* =================================================
    PROJECT — BRODOAK HOTELS
================================================= */}
<motion.article
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-500 hover:border-orange-400/30 sm:p-10"
>
  {/* Background glow */}
  <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-500/5 blur-[100px] transition-all duration-500 group-hover:bg-orange-500/10" />

  <div className="relative">

    {/* Header */}
    <div className="flex items-center justify-between gap-4">
      <span className="rounded-full border border-orange-400/20 bg-orange-400/5 px-3 py-1 text-xs font-medium text-orange-400">
        Web Development
      </span>

      <span className="text-sm text-gray-600">
        04
      </span>
    </div>

    {/* Title */}
    <h3 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
      Brodoak Hotels
    </h3>

    {/* Description */}
    <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
      A modern hotel booking and hospitality website focused on
      providing a clean browsing experience for discovering rooms,
      exploring hotel information, and managing reservations.
    </p>

    {/* Technology stack */}
    <div className="mt-7 flex flex-wrap gap-2">
      {[
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Web Development",
      ].map((technology) => (
        <span
          key={technology}
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-white/20 hover:text-white"
        >
          {technology}
        </span>
      ))}
    </div>

    {/* Website preview */}
    <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">

      {/* Browser header */}
      <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">

        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/10" />

        <div className="ml-3 flex-1 rounded-md border border-white/5 bg-white/[0.03] px-3 py-1 text-[10px] text-gray-600">
          brodoak hotels
        </div>

      </div>

      {/* Website interface */}
      <div className="p-5">

        {/* Navigation */}
        <div className="flex items-center justify-between">

          <div className="h-3 w-24 rounded bg-orange-400/10" />

          <div className="hidden gap-4 sm:flex">
            <span className="h-2 w-10 rounded bg-white/5" />
            <span className="h-2 w-10 rounded bg-white/5" />
            <span className="h-2 w-10 rounded bg-white/5" />
          </div>

        </div>

        {/* Hero */}
        <div className="mt-6 overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">

          <div className="relative h-40 bg-gradient-to-br from-orange-400/10 via-white/[0.02] to-transparent">

            <div className="absolute inset-x-6 bottom-6">

              <div className="h-3 w-40 rounded bg-white/10" />

              <div className="mt-3 h-2 w-56 rounded bg-white/5" />

              <div className="mt-5 h-8 w-28 rounded-lg bg-orange-400/10" />

            </div>

          </div>

        </div>

        {/* Hotel cards */}
        <div className="mt-4 grid gap-3 sm:grid-cols-3">

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">

            <div className="h-16 rounded-lg bg-white/[0.03]" />

            <div className="mt-3 h-2 w-20 rounded bg-white/10" />

            <div className="mt-2 h-2 w-14 rounded bg-white/5" />

          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">

            <div className="h-16 rounded-lg bg-white/[0.03]" />

            <div className="mt-3 h-2 w-24 rounded bg-white/10" />

            <div className="mt-2 h-2 w-16 rounded bg-white/5" />

          </div>

          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3">

            <div className="h-16 rounded-lg bg-white/[0.03]" />

            <div className="mt-3 h-2 w-20 rounded bg-white/10" />

            <div className="mt-2 h-2 w-12 rounded bg-white/5" />

          </div>

        </div>

      </div>

    </div>

    {/* Project links */}
    <div className="mt-8 flex flex-wrap gap-4">

      <a
        href="#"
        className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
      >
        GitHub
      </a>

      <span className="inline-flex items-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-gray-600">
        Web Project
      </span>

    </div>

  </div>
</motion.article>

    </div>

  </div>
</section>

{/* =================================================
    SKILLS
================================================= */}
<section
  id="skills"
  className="mx-auto max-w-6xl px-6 py-32"
>
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* Section heading */}
    <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
      Skills
    </p>

    <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
      Tools I use to build.
    </h2>

    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
      A combination of programming languages, frameworks,
      databases, and development tools I've worked with across
      academic, personal, and professional projects.
    </p>


    {/* Skill categories */}
    <div className="mt-16 grid gap-5 md:grid-cols-2">

      {/* Languages */}
      <SkillGroup
        title="Languages"
        skills={[
          "Java",
          "Python",
          "JavaScript",
          "TypeScript",
          "C",
          "SQL",
        ]}
      />

      {/* Frontend */}
      <SkillGroup
        title="Frontend"
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
        skills={[
          "Spring Boot",
          "Node.js",
          "Express.js",
          "Django",
          "Flask",
          "REST APIs",
        ]}
      />

      {/* Databases */}
      <SkillGroup
        title="Databases"
        skills={[
          "PostgreSQL",
          "MongoDB",
          "SQL",
        ]}
      />

      {/* Blockchain & AI */}
      <SkillGroup
        title="Other Technologies"
        skills={[
          "Solidity",
          "Ethers.js",
          "Git",
          "GitHub",
          "TensorFlow",
          "Linux",
        ]}
      />

      {/* Tools */}
      <SkillGroup
        title="Tools & Platforms"
        skills={[
          "Jira",
          "Git",
          "GitHub",
          "Google Cloud",
          "Microsoft Azure",
        ]}
      />

    </div>
  </motion.div>
</section>

{/* =================================================
    CERTIFICATIONS
================================================= */}
<section
  id="certifications"
  className="mx-auto max-w-6xl px-6 py-32"
>
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    {/* Heading */}
    <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
      Certifications
    </p>

    <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
      Continuous learning.
    </h2>

    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
      Certifications and credentials that complement my
      software engineering and cloud technology skills.
    </p>

    {/* Certification cards */}
    <div className="mt-16 grid gap-5 md:grid-cols-2">

      {/* Google Cloud */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-6
          transition-all
          duration-300
          hover:border-blue-400/30
          hover:bg-white/[0.03]
        "
      >
        <div className="flex items-start justify-between gap-5">

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
              Google Cloud
            </p>

            <h3 className="mt-3 text-xl font-semibold text-gray-200">
              Associate Cloud Engineer
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Google Cloud certification focused on cloud
              infrastructure, deployment, and application
              management.
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/5 text-blue-400">
            GCP
          </div>

        </div>
      </motion.article>


      {/* HackerRank */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-6
          transition-all
          duration-300
          hover:border-green-400/30
          hover:bg-white/[0.03]
        "
      >
        <div className="flex items-start justify-between gap-5">

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
              HackerRank
            </p>

            <h3 className="mt-3 text-xl font-semibold text-gray-200">
              Problem Solving
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Demonstrates problem-solving and programming
              skills through algorithmic challenges.
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/5 text-sm font-semibold text-green-400">
            HR
          </div>

        </div>
      </motion.article>


      {/* Automation Anywhere */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-6
          transition-all
          duration-300
          hover:border-purple-400/30
          hover:bg-white/[0.03]
        "
      >
        <div className="flex items-start justify-between gap-5">

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
              Automation Anywhere
            </p>

            <h3 className="mt-3 text-xl font-semibold text-gray-200">
              RPA Essentials for Students
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Credential covering foundational robotic process
              automation concepts and Automation 360.
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/5 text-xs font-semibold text-purple-400">
            RPA
          </div>

        </div>
      </motion.article>


      {/* Microsoft Azure */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="
          group
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-6
          transition-all
          duration-300
          hover:border-cyan-400/30
          hover:bg-white/[0.03]
        "
      >
        <div className="flex items-start justify-between gap-5">

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
              Microsoft
            </p>

            <h3 className="mt-3 text-xl font-semibold text-gray-200">
              Microsoft Azure
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Cloud technology credential covering Microsoft
              Azure fundamentals and services.
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-xs font-semibold text-cyan-400">
            AZ
          </div>

        </div>
      </motion.article>

    </div>
  </motion.div>
</section>

{/* =================================================
    CONTACT
================================================= */}
<section
  id="contact"
  className="mx-auto max-w-6xl px-6 py-32"
>
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="
      relative
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
    {/* Background glow */}
    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-96
        w-96
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-blue-500/10
        blur-[120px]
      "
    />

    <div className="relative text-center">

      {/* Label */}
      <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
        Contact
      </p>

      {/* Heading */}
      <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        Let's build something useful.
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
        I'm open to software engineering opportunities,
        interesting projects, and conversations around
        technology and development.
      </p>

      {/* Email button */}
      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <a
          href="mailto:shaikyasirahmed07@gmail.com"
          className="
            group
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

          <ArrowUpRight
            size={17}
            className="
              transition-transform
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>

        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
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
          View Resume
        </a>

      </div>

      {/* Contact details */}
      <div className="mt-10 flex flex-col items-center gap-3 text-sm text-gray-500">

        <a
          href="mailto:shaikyasirahmed07@gmail.com"
          className="transition hover:text-white"
        >
          shaikyasirahmed07@gmail.com
        </a>

        <span>
          India
        </span>

      </div>

    </div>
  </motion.div>
</section>


{/* =================================================
    FOOTER
================================================= */}
<footer className="border-t border-white/10">

  <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">

    {/* Copyright */}
    <div>
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} Shaik Yasir Ahmed.
      </p>

      <p className="mt-1 text-xs text-gray-700">
        Built with Next.js, React & Tailwind CSS.
      </p>
    </div>


    {/* Social links */}
    <div className="flex items-center gap-5">

      {/* GitHub */}
      <a
        href="https://github.com/shaikyasirahmed07"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-gray-500 transition hover:text-white"
      >
        GitHub
      </a>


      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shaikyasirahmed07/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-gray-500 transition hover:text-white"
      >
        LinkedIn
      </a>


      {/* Email */}
      <a
        href="mailto:shaikyasirahmed07@gmail.com"
        aria-label="Email"
        className="text-gray-500 transition hover:text-white"
      >
        Email
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
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.02]
        p-6
        transition-all
        duration-300
        hover:border-white/20
        hover:bg-white/[0.03]
      "
    >
      <h3 className="text-lg font-semibold text-gray-200">
        {title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              rounded-lg
              border
              border-white/10
              bg-black/20
              px-3
              py-1.5
              text-sm
              text-gray-400
              transition
              hover:border-blue-400/30
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
