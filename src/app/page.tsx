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


/* =========================================================
   REUSABLE SKILL COMPONENT
========================================================= */

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

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ] as const;

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

          {/* Logo */}
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-semibold tracking-tight"
          >
            Yasir Ahmed
            <span className="text-blue-400">.</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
            {navigation.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="
              hidden
              rounded-full
              border
              border-white/15
              px-4
              py-2
              text-sm
              transition
              hover:border-white/30
              hover:bg-white/5
              md:block
            "
          >
            Let's Talk
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="
              rounded-lg
              p-2
              text-gray-400
              transition
              hover:bg-white/5
              hover:text-white
              md:hidden
            "
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
              {navigation.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    text-gray-400
                    transition
                    hover:bg-white/5
                    hover:text-white
                  "
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* =================================================
          HERO
      ================================================= */}

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

        {/* Grid */}
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

            {/* Heading */}
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

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
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

            {/* Social links */}
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
                aria-label="GitHub"
                className="text-gray-500 transition hover:text-white"
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
                aria-label="LinkedIn"
                className="text-gray-500 transition hover:text-white"
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
                aria-label="Email"
                className="text-gray-500 transition hover:text-white"
              >
                <Mail size={21} />
              </a>
            </motion.div>
          </div>

          {/* Tech stack */}
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

        {/* Scroll */}
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
            transition
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
          <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
            About Me
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            Software engineer who enjoys building practical solutions.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

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

            <div className="space-y-4">

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
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              Experience
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Professional experience.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Experience working in a structured, quality-focused environment
              while contributing to client-driven technology operations.
            </p>
          </div>

          {/* Experience Card */}
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
                bg-blue-500/10
                blur-[100px]
                transition-all
                duration-500
                group-hover:bg-blue-500/15
              "
            />

            <div className="relative">
              {/* Header */}
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-400">
                      Current
                    </span>

                    <span className="text-sm text-gray-600">
                      Aug 2026 — Present
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Associate Process Executive
                  </h3>

                  <p className="mt-2 text-lg text-gray-400">
                    upGrad Education Pvt. Ltd.
                  </p>
                </div>

                <div className="shrink-0 text-left md:text-right">
                  <p className="text-sm text-gray-500">
                    Client Project
                  </p>

                  <p className="mt-1 font-medium text-white">
                    NVIDIA Graphics
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Description */}
              <p className="max-w-4xl text-base leading-8 text-gray-400 sm:text-lg">
                Working in a structured, quality-focused environment on a
                client project for NVIDIA Graphics, contributing to
                operational workflows, data-focused tasks, quality checks,
                and timely delivery of assigned work.
              </p>

              {/* Responsibilities */}
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500">
                    Responsibilities
                  </p>

                  <ul className="mt-5 space-y-4 text-gray-400">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>
                        Perform assigned data-focused tasks while maintaining
                        accuracy and quality standards.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>
                        Follow defined processes, guidelines, and project
                        requirements consistently.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>
                        Review work carefully to identify errors and maintain
                        output quality.
                      </span>
                    </li>

                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>
                        Manage assigned tasks within defined timelines and
                        productivity expectations.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500">
                    Skills Applied
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {[
                      "Data Quality",
                      "Quality Assurance",
                      "Process Management",
                      "Problem Solving",
                      "Attention to Detail",
                      "Team Collaboration",
                      "Time Management",
                      "Technical Operations",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.03]
                          px-4
                          py-2
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
                </div>
              </div>
            </div>
          </motion.article>
        </section>

        {/* =================================================
            PROJECTS
        ================================================= */}
        <section
          id="projects"
          className="mx-auto max-w-6xl px-6 py-32"
        >
          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Things I've built.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              A selection of projects spanning AI, full-stack development,
              blockchain, and modern web applications.
            </p>
          </div>

          {/* =================================================
              PROJECT GRID
          ================================================= */}
          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {/* =================================================
                REPO LENS — IN PROGRESS
            ================================================= */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-blue-400/30
                sm:p-8
                md:col-span-2
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
                  transition-all
                  duration-500
                  group-hover:bg-blue-500/15
                "
              />

              <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">

                {/* Project information */}
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        rounded-full
                        border
                        border-amber-400/20
                        bg-amber-400/5
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-amber-400
                      "
                    >
                      In Progress
                    </span>

                    <span className="text-sm text-gray-600">
                      01
                    </span>
                  </div>

                  <h3 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl">
                    RepoLens
                  </h3>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
                    AI-powered repository intelligence platform designed to
                    help developers understand GitHub repositories through
                    architecture visualization, documentation, and codebase
                    insights.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "TypeScript",
                      "React",
                      "Tailwind CSS",
                      "GitHub API",
                      "AI",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.02]
                          px-3
                          py-1.5
                          text-xs
                          text-gray-500
                          transition
                          hover:border-white/20
                          hover:text-gray-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project status */}
                <div className="flex items-end lg:justify-end">
                  <div
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-black/20
                      p-6
                      lg:max-w-xs
                    "
                  >
                    <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                      Current Status
                    </p>

                    <p className="mt-3 text-lg font-medium text-white">
                      Actively developing
                    </p>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Building the platform incrementally with a focus on
                      repository analysis, architecture visualization, and
                      developer-focused insights.
                    </p>
                  </div>
                </div>

              </div>
            </motion.article>


            {/* =================================================
                DAKSHKRISHI
            ================================================= */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-emerald-400/30
                sm:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-emerald-500/10
                  blur-[90px]
                "
              />

              <div className="relative">

                <div className="flex items-center justify-between">
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
                    Full Stack
                  </span>

                  <span className="text-sm text-gray-600">
                    02
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold">
                  DakshKrishi
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  Full-stack crop recommendation system built to provide
                  agriculture-focused recommendations through a modern web
                  application.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "React",
                    "Spring Boot",
                    "PostgreSQL",
                    "Java",
                    "REST API",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.02]
                        px-3
                        py-1.5
                        text-xs
                        text-gray-500
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://github.com/shaikyasirahmed07/DakshKrishi_frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm
                      font-medium
                      text-gray-400
                      transition
                      hover:text-white
                    "
                  >
                    Frontend ↗
                  </a>

                  <a
                    href="https://github.com/shaikyasirahmed07/DakshKrish-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm
                      font-medium
                      text-gray-400
                      transition
                      hover:text-white
                    "
                  >
                    Backend ↗
                  </a>
                </div>

              </div>
            </motion.article>


            {/* =================================================
                BRODOAK HOTELS
            ================================================= */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-purple-400/30
                sm:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-purple-500/10
                  blur-[90px]
                "
              />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <span
                    className="
                      rounded-full
                      border
                      border-purple-400/20
                      bg-purple-400/5
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-purple-400
                    "
                  >
                    Web Development
                  </span>

                  <span className="text-sm text-gray-600">
                    03
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold">
                  BRODOAK Hotels
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  Hotel web application focused on presenting hotel
                  information through a structured and responsive web
                  experience.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Web Development",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.02]
                        px-3
                        py-1.5
                        text-xs
                        text-gray-500
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="https://github.com/shaikyasirahmed07/BRODOAK-HOTELS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm
                      font-medium
                      text-gray-400
                      transition
                      hover:text-white
                    "
                  >
                    View on GitHub ↗
                  </a>
                </div>

              </div>
            </motion.article>


            {/* =================================================
                WATER BILL MANAGEMENT
            ================================================= */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-400/30
                sm:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-cyan-500/10
                  blur-[90px]
                "
              />

              <div className="relative">

                <div className="flex items-center justify-between">
                  <span
                    className="
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-400/5
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-cyan-400
                    "
                  >
                    Blockchain
                  </span>

                  <span className="text-sm text-gray-600">
                    04
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold">
                  Water Bill Management
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  Blockchain-based water billing application exploring
                  decentralized billing and payment workflows through a
                  web-based interface.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Solidity",
                    "React",
                    "Ethers.js",
                    "Blockchain",
                    "Web3",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.02]
                        px-3
                        py-1.5
                        text-xs
                        text-gray-500
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                    href="https://github.com/shaikyasirahmed07/Water-bill-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-sm
                      font-medium
                      text-gray-400
                      transition
                      hover:text-white
                    "
                  >
                    View on GitHub ↗
                  </a>
                </div>

              </div>
            </motion.article>

          </div>
        </section>

        {/* =================================================
            SKILLS
        ================================================= */}
        <section
          id="skills"
          className="mx-auto max-w-6xl px-6 py-32"
        >
          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              Skills
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Tools I work with.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              A practical technology stack built through academic work,
              personal projects, and professional experience.
            </p>
          </div>

          {/* Skills grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-300
                hover:border-blue-400/30
              "
            >
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                Languages
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Java",
                  "Python",
                  "JavaScript",
                  "C",
                  "SQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>


            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-300
                hover:border-blue-400/30
              "
            >
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                Frontend
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "React",
                  "Next.js",
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>


            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-300
                hover:border-blue-400/30
              "
            >
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                Backend
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Spring Boot",
                  "Django",
                  "Flask",
                  "Node.js",
                  "Express.js",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>


            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-300
                hover:border-blue-400/30
              "
            >
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                Databases
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "PostgreSQL",
                  "MongoDB",
                  "SQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>


            {/* Cloud & Tools */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-300
                hover:border-blue-400/30
              "
            >
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                Cloud & Tools
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Google Cloud",
                  "Azure",
                  "Git",
                  "GitHub",
                  "Jira",
                  "Linux",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>


            {/* Other */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                transition-all
                duration-300
                hover:border-blue-400/30
              "
            >
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                Other
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "REST APIs",
                  "Blockchain",
                  "Web3",
                  "TensorFlow",
                  "Problem Solving",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </section>

        {/* =================================================
            CERTIFICATIONS & EDUCATION
        ================================================= */}
        <section
          id="education"
          className="mx-auto max-w-6xl px-6 py-32"
        >
          {/* Section heading */}
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              Background
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Education & certifications.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              Academic foundation and certifications supporting my technical
              journey.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">

            {/* =================================================
                EDUCATION
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                sm:p-8
              "
            >
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                Education
              </p>

              <div className="mt-8">

                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-xl font-semibold">
                      B.Tech — Computer Science & Engineering
                    </h3>

                    <p className="mt-2 text-gray-400">
                      KL University
                    </p>
                  </div>

                  <span className="shrink-0 text-sm text-gray-600">
                    2022 — 2026
                  </span>
                </div>

                <div className="mt-6 h-px bg-white/10" />

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500">
                    Computer Science
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500">
                    Software Development
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500">
                    Full Stack Development
                  </span>
                </div>

              </div>
            </motion.div>


            {/* =================================================
                CERTIFICATIONS
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-7
                sm:p-8
              "
            >
              <p className="text-sm uppercase tracking-[0.15em] text-gray-500">
                Certifications
              </p>

              <div className="mt-8 space-y-6">

                {/* =================================================
                    GOOGLE CLOUD
                ================================================= */}
                <a
                  href="https://www.credly.com/badges/008d1182-11c8-4bc0-9a50-de89171630a3/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-medium text-white transition-colors group-hover:text-blue-400">
                        Associate Cloud Engineer
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Google Cloud
                      </p>

                      <p className="mt-2 text-xs text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                        View Credential ↗
                      </p>
                    </div>

                    <span className="text-xs text-gray-600">
                      Cloud
                    </span>

                  </div>
                </a>


                {/* =================================================
                    RED HAT
                ================================================= */}
                <a
                  href="https://www.credly.com/badges/bbefff8e-25cd-4ce0-bcc6-8a8c17d35a89/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-white/10 pt-6"
                >
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-medium text-white transition-colors group-hover:text-blue-400">
                        Certified Specialist in Enterprise Application Development
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Red Hat
                      </p>

                      <p className="mt-2 text-xs text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                        View Credential ↗
                      </p>
                    </div>

                    <span className="shrink-0 text-xs text-gray-600">
                      Java
                    </span>

                  </div>
                </a>


                {/* =================================================
                    AUTOMATION ANYWHERE
                ================================================= */}
                <a
                  href="https://certificates.automationanywhere.com/8d192d31-dde3-4dbd-a2e1-079a4b7e246d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-t border-white/10 pt-6"
                >
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-medium text-white transition-colors group-hover:text-blue-400">
                        RPA Essentials for Students
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        Automation Anywhere
                      </p>

                      <p className="mt-2 text-xs text-blue-400 opacity-0 transition-opacity group-hover:opacity-100">
                        View Credential ↗
                      </p>
                    </div>

                    <span className="text-xs text-gray-600">
                      RPA
                    </span>

                  </div>
                </a>


                {/* =================================================
                    HACKERRANK
                ================================================= */}
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-start justify-between gap-4">

                    <div>
                      <h3 className="font-medium text-white">
                        Problem Solving
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        HackerRank
                      </p>
                    </div>

                    <span className="text-xs text-gray-600">
                      Programming
                    </span>

                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* =================================================
            CONTACT
        ================================================= */}
        <section
          id="contact"
          className="mx-auto max-w-6xl px-6 py-32"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              px-7
              py-14
              sm:px-12
              sm:py-16
            "
          >
            {/* Background glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0
                h-80
                w-80
                -translate-x-1/2
                rounded-full
                bg-blue-500/10
                blur-[120px]
              "
            />

            <div className="relative mx-auto max-w-3xl text-center">

              <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
                Contact
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Let's build something
                <span className="text-gray-500"> together.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                I'm open to opportunities, collaborations, and interesting
                software projects. Feel free to reach out if you'd like to
                connect.
              </p>

              {/* Contact buttons */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">

                <a
                  href="mailto:shaikyasirahmed07@gmail.com"
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
                  Send me an email

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
                  href="https://www.linkedin.com/in/shaikyasirahmed07/"
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
                  LinkedIn ↗
                </a>

              </div>

              {/* Email */}
              <p className="mt-8 text-sm text-gray-600">
                shaikyasirahmed07@gmail.com
              </p>

            </div>
          </div>
        </section>


        {/* =================================================
            FOOTER
        ================================================= */}
        <footer className="border-t border-white/10">
          <div
            className="
              mx-auto
              flex
              max-w-6xl
              flex-col
              gap-5
              px-6
              py-8
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Copyright */}
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Shaik Yasir Ahmed.
              All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-5">

              <a
                href="https://github.com/shaikyasirahmed07"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  text-gray-500
                  transition
                  hover:text-white
                "
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shaikyasirahmed07/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-sm
                  text-gray-500
                  transition
                  hover:text-white
                "
              >
                LinkedIn
              </a>

              <a
                href="mailto:shaikyasirahmed07@gmail.com"
                className="
                  text-sm
                  text-gray-500
                  transition
                  hover:text-white
                "
              >
                Email
              </a>

            </div>

          </div>
        </footer>

    </main>
  );
}