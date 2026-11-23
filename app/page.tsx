"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowDown,
  Sparkles,
  Code2,
  Brain,
  ChartNoAxesCombined,
  Users,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

import { projects } from "@/data/projects";

const categories = [
  "All",
  "Machine Learning",
  "Data Analysis",
  "Software Development",
  "Algorithms",
  "Web Development",
  "Engineering",
];

const skills = [
  {
    name: "Programming",
    items: ["Python", "JavaScript", "PHP", "SQL"],
  },
  {
    name: "Web",
    items: [
      "HTML5",
      "CSS3",
      "React",
      "Next.js · learning",
      "Node.js",
      "Tailwind CSS",
    ],
  },
  {
    name: "Data & AI",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "K-Means",
      "KNN",
      "PCA",
      "Linear Regression",
      "Deep Learning · learning",
    ],
  },
  {
    name: "Databases",
    items: ["MySQL", "Relational modeling", "SQL"],
  },
  {
    name: "Tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Jupyter",
      "XAMPP",
      "Excel MOS Expert",
      "Power Apps",
      "Dataverse",
      "Arduino",
    ],
  },
  {
    name: "Human",
    items: [
      "Analytical thinking",
      "Autonomous learning",
      "Perseverance",
      "Collaboration",
      "Empathy",
      "Active listening",
      "Leadership",
      "Organization",
    ],
  },
];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [openSkill, setOpenSkill] = useState("Data & AI");
  const [menu, setMenu] = useState(false);

  const shown = useMemo(
    () =>
      projects.filter(
        (p) => filter === "All" || p.category.includes(filter)
      ),
    [filter]
  );

  const nav = [
    ["About", "about"],
    ["Learning", "learning"],
    ["Community", "community"],
    ["Insights", "insights"],
    ["Projects", "projects"],
    ["Skills", "skills"],
    ["Contact", "contact"],
  ];

 const portfolioLinks = {
  name: "André Camilo Alvarado Mendoza",
  email: "andrecalvarado2704@gmail.com",
  phone: "+503 6191 8826",

  github: "https://github.com/acam2704",
  linkedin: "https://www.linkedin.com/in/andr%C3%A9-alvarado-441016446",

  ingenia: "https://github.com/acam2704/Projects",
  maze: "https://github.com/acam2704/Maze-Python",
  fedeUsefulData: "https://github.com/acam2704/FEDE-USEFUL-DATA",

  // AI Challenge
  neuralNetworks:
    "https://drive.google.com/file/d/1LMVTzuEDNsnz688WXg4BAfyxIBWomEum/view?usp=sharing",

  cnnVision:
    "https://drive.google.com/file/d/1j_fUe1IxyMus6Pyl-YtaAFNG__KohfKZ/view?usp=sharing",

  aiEthics:
    "https://drive.google.com/file/d/1rr318EotQVhPBegb8QnzdpfwTmMpK0G3/view?usp=sharing",

  // Hotspots Comerciales
  kmeansClustering:
    "https://drive.google.com/file/d/1ZX9SDOPdcOKEkG23S_eJOHCNGBWCx1_6/view?usp=sharing",

  knn:
    "https://colab.research.google.com/drive/1FPEhIQQqnQUx7e78OsRlIms-c8ty7OLZ?usp=sharing",

  // Regression
  logisticRegression:
    "https://colab.research.google.com/drive/1a-yxGpBeZ5q9rv3TZ_9GzYBjg_wZ6VR8?usp=sharing",

  wineRegression:
    "https://drive.google.com/file/d/1uWKY7SDPFaBlbUqBAbWFZzOUv5QEqjPm/view?usp=sharing",

  randomForest:
    "https://colab.research.google.com/drive/1tneZiQYjK262ssoCbhGrCdkuYFXNQvpw?usp=sharing",


  hotspotsAnalysis:
    "https://colab.research.google.com/drive/1jjX8Z8jUIOV_UkAKSEcBFzHIGYQDWGeB?usp=sharing",

  hotspotsDataCleaning:
    "https://colab.research.google.com/drive/1eziCQpo0E9mO4HELJtjuo-gB1xd8lq7L?usp=sharing",

  // Certificates
  excelExpert:
    "https://www.credly.com/badges/f6df5983-92c2-450c-8aca-299f9326a42b/public_url",

  excelAssociate:
    "https://www.credly.com/badges/125e2056-6c7e-42e6-a82a-72b857d67107/public_url",

  kodigoCertificate: "/certificates/kodigo diploma.pdf",
  telusCertificate: "/certificates/telus conversation.pdf",

  // Attendance System
  attendanceExcel: "/projects/attendance/attendance system.xlsm",
  attendancePreview: "/projects/attendance/preview.png",
};

  return (
    <main>
      {/* NAVIGATION */}

      <header className="nav">
        <Link href="/" className="brand">
          A<span>.</span> ALVARADO
        </Link>

        <nav className="navlinks">
          {nav.map(([n, id]) => (
            <a key={id} href={`#${id}`}>
              {n}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let’s connect <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-btn"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      {/* MOBILE MENU */}

      {menu && (
        <div className="mobile-menu">
          {nav.map(([n, id]) => (
            <a
              onClick={() => setMenu(false)}
              href={`#${id}`}
              key={id}
            >
              {n}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}

      <section className="hero wrap">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            PORTFOLIO · 2026
          </div>

          <h1>
            Understanding is
            <br />
            <em>the first step</em>
            <br />
            to building.
          </h1>

          <p className="hero-desc">
            Curious mind. Analytical approach. Human purpose.
            <br />
            I explore technology, data and ideas to turn complex
            problems into practical solutions.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="#projects">
              Explore my work <ArrowDown size={16} />
            </a>

            <a className="btn-secondary" href="#about">
              A little about me
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN EL SALVADOR</span>
            <span>OPEN TO LEARNING & COLLABORATION</span>
          </div>
        </div>

        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <a
            href="#about"
            className="core"
            aria-label="Discover more about me"
          >
            <span>AA</span>
            <small>IDEAS IN MOTION</small>
          </a>

          <a href="#insights" className="node node-data">
            <ChartNoAxesCombined />
            <span>INSIGHTS</span>
          </a>

          <a href="#projects" className="node node-code">
            <Code2 />
            <span>PROJECTS</span>
          </a>

          <a href="#community" className="node node-people">
            <Users />
            <span>COMMUNITY</span>
          </a>

          <a href="#learning" className="node node-science">
            <Brain />
            <span>LEARNING</span>
          </a>

          <div className="art-label">
            Curiosity → Analysis → Creation → Impact
          </div>
        </div>
      </section>

      {/* TICKER */}

      <div className="ticker">
        <span>LEARNING BY UNDERSTANDING</span>
        <b>✳</b>
        <span>BUILDING BY DOING</span>
        <b>✳</b>
        <span>DESIGNING WITH PURPOSE</span>
        <b>✳</b>
        <span>LEARNING BY UNDERSTANDING</span>
      </div>

      {/* ABOUT */}

      <section className="section wrap about" id="about">
        <div className="section-head">
          <p className="eyebrow">01 / ABOUT ME</p>

          <h2>
            More than code.
            <br />
            <em>A way of thinking.</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="lead">
              I’m a curious learner who enjoys understanding how
              things work, connecting ideas, and turning complex
              problems into practical solutions.
            </p>

            <p>
              My interests lie at the intersection of software
              development, data analysis, artificial intelligence
              and engineering. I enjoy building—but I also want
              to understand the logic behind what I build, explore
              alternatives, and make technology easier to use and
              understand.
            </p>

            <p>
              Beyond technical work, I value empathy,
              collaboration, perseverance and continuous learning.
              Knowledge becomes more meaningful when it can be
              shared and used to help others.
            </p>

            <a className="text-link" href="#journey">
              Explore my journey <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="principles">
            <div className="principle">
              <span>01</span>

              <div>
                <h3>Curiosity</h3>
                <p>
                  I don’t just want to know what works. I want to
                  understand why.
                </p>
              </div>
            </div>

            <div className="principle">
              <span>02</span>

              <div>
                <h3>Analysis</h3>
                <p>
                  Every problem has a structure worth discovering.
                </p>
              </div>
            </div>

            <div className="principle">
              <span>03</span>

              <div>
                <h3>Empathy</h3>
                <p>
                  A solution is better when people can actually use it.
                </p>
              </div>
            </div>

            <div className="principle">
              <span>04</span>

              <div>
                <h3>Perseverance</h3>
                <p>
                  Progress is built one problem at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="section section-soft" id="projects">
        <div className="wrap">
          <div className="section-head projects-head">
            <div>
              <p className="eyebrow">02 / SELECTED WORK</p>

              <h2>
                Projects, experiments
                <br />
                <em>and questions.</em>
              </h2>
            </div>

            <p className="section-note">
              A collection of things I’ve explored, built,
              learned from and continue to improve.
            </p>
          </div>

          <div className="filters">
            {categories.map((c) => (
              <button
                key={c}
                className={filter === c ? "filter active" : "filter"}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {shown.map((p) => (
              <Link
                className={`project-card ${p.accent}`}
                href={`/projects/${p.slug}`}
                key={p.slug}
              >
                <div className="project-visual">
                  <span className="project-num">
                    {p.number} / CASE
                  </span>

                  <div className={`visual-mark mark-${p.slug}`}>
                    <span>
                      {p.slug === "hotspots"
                        ? "SV"
                        : p.slug === "ai-challenge"
                        ? "K"
                        : p.slug === "regression"
                        ? "↗"
                        : p.slug === "maze"
                        ? "⌗"
                        : p.slug === "attendance"
                        ? "◷"
                        : p.slug === "garden"
                        ? "⌁"
                        : "↔"}
                    </span>
                  </div>

                  <span className="visual-type">
                    {p.category[0].toUpperCase()}
                  </span>
                </div>

                <div className="project-info">
                  <div className="project-top">
                    <span>{p.category.join(" · ")}</span>
                    <ArrowUpRight size={18} />
                  </div>

                  <h3>{p.title}</h3>

                  <p>{p.subtitle}</p>

                  <div className="tag-row">
                    {p.tools.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          
          {/* CERTIFICATES & PROJECT RESOURCES */}

          <div className="education-heading project-resources-heading">
            <p className="eyebrow">PROJECTS / CERTIFICATES / RESOURCES</p>

            <h2>
              Explore my work
              <br />
              <em>beyond the portfolio.</em>
            </h2>
          </div>

          <div className="education-cards">
            <div>
              <span className="eyebrow">MICROSOFT · CREDENTIAL</span>

              <h3>Excel Expert</h3>

              <p>
                Microsoft Office Specialist certification.
              </p>

              <a
                className="text-link"
                href={portfolioLinks.excelExpert}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify credential <ExternalLink size={16} />
              </a>
            </div>

            <div>
              <span className="eyebrow">MICROSOFT · CREDENTIAL</span>

              <h3>Excel Associate</h3>

              <p>
                Microsoft Office Specialist certification.
              </p>

              <a
                className="text-link"
                href={portfolioLinks.excelAssociate}
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify credential <ExternalLink size={16} />
              </a>
            </div>

            <div>
              <span className="eyebrow">KODIGO · CERTIFICATE</span>

              <h3>Programming Training</h3>

              <p>
                Certificate of completion from Kódigo Academy.
              </p>

              <a
                className="text-link"
                href={portfolioLinks.kodigoCertificate}
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate <ExternalLink size={16} />
              </a>
            </div>

            <div>
              <span className="eyebrow">TELUS · CERTIFICATE</span>

              <h3>English Conversations</h3>

              <p>
                Certificate related to participation in
                TELUS English conversation sessions.
              </p>

              <a
                className="text-link"
                href={portfolioLinks.telusCertificate}
                target="_blank"
                rel="noopener noreferrer"
              >
                View certificate <ExternalLink size={16} />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* INSIGHTS */}

      <section className="section wrap" id="insights">
        <div className="section-head">
          <p className="eyebrow">03 / INSIGHTS & ANALYSIS</p>

          <h2>
            Finding meaning
            <br />
            <em>within the data.</em>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="lead">
              Data is more than numbers. It can help us understand
              how people, resources and opportunities are distributed.
            </p>

            <p>
              Through data analysis, visualization and machine
              learning, I explore patterns, relationships and
              possible explanations behind real-world problems.
            </p>

            <p>
              My work on financial service accessibility in
              El Salvador introduced me to the challenges of
              combining territorial, demographic and socioeconomic
              information.
            </p>

            <a className="text-link" href="/projects/hotspots">
              Explore my research project <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="principles">
            <div className="principle">
              <span>01</span>

              <div>
                <h3>Explore</h3>
                <p>
                  Understand the data before choosing a method.
                </p>
              </div>
            </div>

            <div className="principle">
              <span>02</span>

              <div>
                <h3>Connect</h3>
                <p>
                  Identify relationships between different variables.
                </p>
              </div>
            </div>

            <div className="principle">
              <span>03</span>

              <div>
                <h3>Interpret</h3>
                <p>
                  Look beyond metrics and consider the real-world
                  context.
                </p>
              </div>
            </div>

            <div className="principle">
              <span>04</span>

              <div>
                <h3>Communicate</h3>
                <p>
                  Turn findings into understandable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY */}

      <section className="section section-soft" id="community">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">
              04 / COMMUNITY & COLLABORATION
            </p>

            <h2>
              Knowledge grows
              <br />
              <em>when it is shared.</em>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p className="lead">
                I believe learning becomes more meaningful when
                we help others understand, grow and discover what
                they are capable of.
              </p>

              <p>
                Since high school, I have supported classmates
                in mathematics and science, as well as helping
                others learn Excel, Python and programming concepts.
              </p>

              <p>
                I try to adapt my explanations to each person's
                learning needs, listen carefully and encourage
                understanding rather than simply providing answers.
              </p>
            </div>

            <div className="principles">
              <div className="principle">
                <span>01</span>

                <div>
                  <h3>Peer learning</h3>
                  <p>
                    Sharing knowledge and supporting classmates
                    through academic challenges.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>02</span>

                <div>
                  <h3>Active listening</h3>
                  <p>
                    Understanding questions and adapting
                    explanations to different needs.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>03</span>

                <div>
                  <h3>Collaboration</h3>
                  <p>
                    Learning from others and contributing
                    to shared goals.
                  </p>
                </div>
              </div>

              <div className="principle">
                <span>04</span>

                <div>
                  <h3>Empathy</h3>
                  <p>
                    Recognizing that everyone has a different
                    learning process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY & EDUCATION */}

      <section className="section wrap" id="journey">
        <div className="section-head">
          <p className="eyebrow">03 / EXPERIENCE & EDUCATION</p>

          <h2>
            Learning is a
            <br />
            <em>continuous journey.</em>
          </h2>
        </div>

        <div className="timeline">
          <article>
            <div className="timeline-date">ACADEMIC</div>

            <div>
              <h3>General High School</h3>

              <p className="timeline-place">
                Complejo Educativo Católico Monseñor Óscar
                Arnulfo Romero
              </p>

              <p>
                Academic formation with an interest in science,
                mathematics, technology and learning through projects.
              </p>
            </div>
          </article>

          <article>
            <div className="timeline-date">3-YEAR PROGRAM</div>

            <div>
              <h3>¡Supérate! Fundación Frech</h3>

              <p className="timeline-place">
                English · Informatics · Values
              </p>

              <p>
                Integral formation in English, technology,
                values and personal development, alongside
                collaborative activities and projects.
              </p>
            </div>
          </article>

          <article>
            <div className="timeline-date">COMMUNITY</div>

            <div>
              <h3>Peer learning & tutoring</h3>

              <p className="timeline-place">
                Academic support · Communication
              </p>

              <p>
                Supporting classmates in mathematics, science,
                Excel and programming by adapting explanations
                and encouraging understanding of the process.
              </p>
            </div>
          </article>

          <article>
            <div className="timeline-date">PROJECTS</div>

            <div>
              <h3>Technology & experimentation</h3>

              <p className="timeline-place">
                Software · Data · Automation
              </p>

              <p>
                Building academic and personal projects,
                exploring tools, collaborating and learning
                through practical challenges.
              </p>
            </div>
          </article>
        </div>

        {/* EDUCATION */}

        <div className="education-heading" id="learning">
          <p className="eyebrow">EDUCATION / FORMATION</p>

          <h2>
            Where I learned
            <br />
            <em>and keep learning.</em>
          </h2>
        </div>

        <div className="education-cards">
          <div>
            <span className="eyebrow">HIGH SCHOOL</span>

            <h3>
              Complejo Educativo Católico Monseñor Óscar
              Arnulfo Romero
            </h3>

            <p>Bachillerato General · El Salvador</p>
          </div>

          <div>
            <span className="eyebrow">3-YEAR PROGRAM</span>

            <h3>¡Supérate! Fundación Frech</h3>

            <p>
              English · Informatics · Values · Personal development
            </p>
          </div>

          <div>
            <span className="eyebrow">CERTIFICATION</span>

            <h3>Microsoft Office Specialist</h3>

            <p>Excel Specialist & Excel Expert</p>
          </div>

          <div>
            <span className="eyebrow">CONTINUOUS LEARNING</span>

            <h3>Programming & Data</h3>

            <p>
              Python · Web development · Databases · Machine Learning
              · Deep Learning exploration
            </p>
          </div>
        </div>
      </section>

            {/* SKILLS */}

      <section className="section section-soft" id="skills">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">04 / SKILLS & TOOLS</p>

            <h2>
              Tools I use.
              <br />
              <em>Ideas I explore.</em>
            </h2>

            <p className="section-note">
              Select a category to explore the technologies
              and skills I’ve been learning and applying.
            </p>
          </div>

          <div className="skills-layout">
            <div className="skill-tabs">
              {skills.map((s) => (
                <button
                  key={s.name}
                  onClick={() => setOpenSkill(s.name)}
                  className={
                    openSkill === s.name
                      ? "skill-tab selected"
                      : "skill-tab"
                  }
                >
                  {s.name}
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>

            <div className="skill-detail">
              <p className="eyebrow">
                {openSkill.toUpperCase()} / TOOLKIT
              </p>

              <div className="skill-pills">
                {skills
                  .find((s) => s.name === openSkill)
                  ?.items.map((it, i) => (
                    <span className="skill-pill" key={it}>
                      <i>{String(i + 1).padStart(2, "0")}</i>
                      {it}
                    </span>
                  ))}
              </div>

              <p className="skill-note">
                I focus on learning through practice, understanding
                fundamentals and applying tools to real problems.
                Skills reflect my learning and project experience—not
                a percentage score.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="section wrap contact" id="contact">
        <div className="contact-box">
          <div>
            <p className="eyebrow">05 / CONTACT</p>

            <h2>
              Let’s build something
              <br />
              <em>meaningful.</em>
            </h2>

            <p>
              Have an idea, a project, or an opportunity?
              I’d be happy to connect, learn, collaborate
              or explore new challenges.
            </p>

            <div className="socials">
              <a href={`mailto:${portfolioLinks.email}`}>
                <Mail size={17} />
                Email
                <ArrowUpRight size={15} />
              </a>

              <a
                href={portfolioLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} />
                GitHub
                <ArrowUpRight size={15} />
              </a>

              <a
                href={portfolioLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://wa.me/50361918826"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer wrap">
        <Link href="/" className="brand">
          A<span>.</span> ALVARADO
        </Link>

        <p>Always learning. Always questioning. Always building.</p>

        <a href="#top">BACK TO TOP ↑</a>

        <span>© 2026</span>
      </footer>
    </main>
  );
}

/* CONTACT FORM */

function ContactForm() {
  const [state, setState] = useState("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setState("sending");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Could not send message.");
      }

      setState("success");
      setMessage(json.message);
      form.reset();
    } catch (err) {
      setState("error");

      setMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        Name

        <input
          name="name"
          placeholder="Your name"
          required
          minLength={2}
          maxLength={80}
        />
      </label>

      <label>
        Email

        <input
          name="email"
          type="email"
          placeholder="you@email.com"
          required
          maxLength={254}
        />
      </label>

      <label>
        Message

        <textarea
          name="message"
          placeholder="Tell me what’s on your mind…"
          required
          minLength={10}
          maxLength={2000}
          rows={4}
        />
      </label>

      <button
        className="btn-primary form-submit"
        disabled={state === "sending"}
      >
        {state === "sending" ? "Sending…" : "Send message"}
        <ArrowUpRight size={16} />
      </button>

      {message && (
        <p className={`form-feedback ${state}`}>
          {message}
        </p>
      )}

      <small>
        All fields are required. Your message is validated by the server.
      </small>
    </form>
  );
}