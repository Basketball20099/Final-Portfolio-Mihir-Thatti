import React, { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Award,
} from "lucide-react";

import portraitImg from "./assets/mihir.jpg";
import nbaAppImg from "./assets/nba-app.png";
import foodmapImg from "./assets/foodmap.png";

/* ──────────────────────────────────────────────────────────────────────────
   EDIT EVERYTHING HERE. Search the file for "EDIT" to find every placeholder.
   Anything in [brackets] is a placeholder waiting for real content.
   ────────────────────────────────────────────────────────────────────────── */
const profile = {
  name: "Mihir Thatti",
  photo: portraitImg, // EDIT — change the import at the top of this file to swap the photo
  role: "High School Student · Aspiring Bioengineer & Entrepreneur",
  location: "Dublin, California",
  email: "thatti5716@mydusd.org",
  linkedin: "#", // EDIT — add a full https URL to show this tile, or leave "#" to hide it
  github: "#", // EDIT — add a full https URL to show this tile, or leave "#" to hide it

  heroLine:
    "Turning clinical data into insight, and insight into ideas worth pitching.",

  about: [
    "I'm a high school junior in Dublin, California, drawn to the place where biology meets data. My focus is bioinformatics — using clinical data to find patterns that matter — and I've spent the last two years interning at Praan.health, a healthtech startup, doing exactly that.",
    "Outside the lab, I'm chasing entrepreneurship: I've pitched to angel investors on more than one occasion and trained through an entrepreneurship bootcamp coached by Naeem Zafar. When I'm not building or pitching, you'll find me at the piano, on the basketball court, or in the gym.",
  ],

  // OPTIONAL strip. Delete this whole `stats` array to hide it.
  stats: [
    { value: "4.22", label: "weighted GPA" },
    { value: "2 yrs", label: "healthtech internship" },
    { value: "6", label: "languages & tools" },
    { value: "2027", label: "graduating" },
  ],

  resumeSummary:
    "A high school junior focused on bioinformatics and entrepreneurship — with two years of hands-on experience working with clinical data at a healthtech startup, and a habit of pitching original ideas to investors.",

  experience: [
    {
      role: "Data Science Intern", // EDIT if you had a different title
      org: "Praan.health",
      dates: "[start–end dates] · 2 years", // EDIT exact dates
      place: "Healthtech startup",
      bullets: [
        "Completed two consecutive years of internship at a clinical-data healthtech startup.",
        "Worked directly with clinical datasets, applying data science techniques to surface patterns and support the team's work.",
        "[Add one specific win — a tool you built, an analysis you ran, or an outcome you contributed to.]", // EDIT
      ],
    },
  ],

  skillGroups: [
    { title: "Data & Analysis", items: ["Python", "R"] },
    { title: "Web & Software", items: ["JavaScript", "HTML"] },
    { title: "Game Development", items: ["Unity", "C#"] },
  ],

  education: [
    {
      degree: "High School Diploma",
      school: "[Your High School], Dublin, CA", // EDIT — add your school name
      dates: "Class of 2027 · Weighted GPA 4.22",
    },
    {
      degree: "Data Science (pre-college)",
      school: "UC Berkeley ATDP",
      dates: "[year]", // EDIT
    },
    {
      degree: "Entrepreneurship Bootcamp",
      school: "Coached by Naeem Zafar",
      dates: "[year]", // EDIT
    },
  ],

  // Rendered under the "Activities & awards" heading.
  certifications: [
    "Lead MC — Emerald Summit (Grade 11)",
    "Business Track Lead — Emerald Summit",
    "Member — Emerald Academic Foundation (nonprofit)",
    "Pitched ventures to angel investors",
  ],

  projects: [
    {
      title: "Inside the NBA — Interactive Stats Explorer",
      context: "Personal Project", // not a school project, so no course line
      dates: "2025",
      image: nbaAppImg, // real screenshot (imported at top); delete this line to fall back to the placeholder graphic
      cover: "a",
      tagline:
        "An R + Shiny dashboard that turns decades of NBA box scores into interactive, statistically grounded answers.",
      objective:
        "Take a cleaned NBA dataset spanning many seasons and let anyone explore it interactively — comparing teams and players across points, assists, rebounds, and defensive metrics, and testing whether the patterns they see are statistically significant.",
      responsibilities:
        "A solo project, built end to end by me: the data cleaning and wrangling, every calculation, the statistical models, and the full Shiny front end.",
      learned:
        "How to make statistical analysis genuinely interactive — letting a user pick a team, player, or model and watch the inference update live — and how much of a data app is the cleaning and reshaping that happens before anything ever gets plotted.", // EDIT to your own voice
      skills: ["R", "Shiny + bslib", "ggplot2 + Plotly", "Bootstrapping", "Linear regression", "tidyverse"],
      docLabel: "View on GitHub",
      docHref: "https://github.com/Basketball20099/NBADataScienceProj",
      liveLabel: "Live demo",
      liveHref: "https://basketball20099.shinyapps.io/Statistics_ShinyFinal/",
    },
    {
      title: "Foodmap — AI Nutrition Assistant for Indian Food",
      context: "Personal Project", // EDIT if this was for a course
      dates: "2026",
      image: foodmapImg,
      cover: "b",
      note: "Note: this is a static demo of the interface — the live version runs on my own OpenAI API key.",
      tagline:
        "A RAG chatbot that recommends Indian foods for a specific health goal — more protein, more fiber, better sleep, pregnancy-friendly, and more.",
      objective:
        "Help people find healthy Indian food options matched to a goal — high protein, high fiber, pregnancy-supporting, sleep-supporting, and so on — by asking a question in plain language and getting answers grounded in a real nutrition dataset.",
      responsibilities:
        "A solo project, built end to end: I cleaned an Indian nutrition dataset, wrote a Python/Flask API with a retrieval layer that pulls the right foods for each question, and fed that context to GPT-4 to generate grounded answers — plus the chat front end you see here.",
      learned:
        "How retrieval-augmented generation actually works in practice — that answer quality depends far more on retrieving the right context than on the model itself, and how a tight system prompt keeps the model grounded in your data instead of inventing facts.", // EDIT to your own voice
      skills: ["Python", "Flask API", "RAG", "OpenAI GPT-4", "Prompt engineering", "pandas"],
      docLabel: "View on GitHub",
      docHref: "https://github.com/Basketball20099/Foodmap",
    },
  ],
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Résumé" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/* ──────────────────────────────────────────────────────────────────────────
   PLACEHOLDER PROJECT COVERS
   Swap each <CoverX /> for a real screenshot, e.g.:
     <img src="/project1.png" alt="Project 1 screenshot" />
   (drop the image in /public and reference it with a leading slash)
   ────────────────────────────────────────────────────────────────────────── */
function CoverA() {
  return (
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="300" fill="#1b1a12" />
      <g stroke="rgba(236,231,217,0.07)">
        {[60, 120, 180, 240].map((y) => (
          <line key={y} x1="0" y1={y} x2="480" y2={y} />
        ))}
      </g>
      <circle cx="240" cy="150" r="92" fill="none" stroke="rgba(236,231,217,0.14)" strokeWidth="2" />
      <circle cx="240" cy="150" r="60" fill="none" stroke="#c6f24e" strokeWidth="2" />
      <circle cx="240" cy="150" r="30" fill="#c6f24e" opacity="0.16" />
      <circle cx="240" cy="58" r="5" fill="#c6f24e" />
    </svg>
  );
}

function CoverB() {
  return (
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg">
      <rect width="480" height="300" fill="#1b1a12" />
      <g stroke="rgba(236,231,217,0.07)">
        {[96, 192, 288, 384].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="300" />
        ))}
      </g>
      <rect x="120" y="70" width="240" height="120" rx="12" fill="rgba(236,231,217,0.1)" />
      <rect x="150" y="100" width="240" height="120" rx="12" fill="none" stroke="#c6f24e" strokeWidth="2" />
      <rect x="90" y="120" width="64" height="64" rx="10" fill="#c6f24e" opacity="0.16" />
    </svg>
  );
}

const coverFor = (id) => (id === "a" ? <CoverA /> : <CoverB />);

const initialsOf = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .filter((c) => /[a-z]/i.test(c))
    .slice(0, 2)
    .join("");

/* ──────────────────────────────────────────────────────────────────────────
   SECTIONS
   ────────────────────────────────────────────────────────────────────────── */
function Kicker({ num, children }) {
  return (
    <span className="kicker">
      <span className="num">{num}</span>
      {children}
    </span>
  );
}

function Home({ go }) {
  return (
    <div className="wrap hero reveal">
      <div className="hero-role">{profile.role}</div>
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-line">{profile.heroLine}</p>
      <div className="hero-cta">
        <button className="btn btn-primary" onClick={() => go("projects")}>
          View projects <ArrowUpRight size={15} />
        </button>
        <button className="btn" onClick={() => go("resume")}>
          Read résumé
        </button>
      </div>
      {profile.stats && profile.stats.length > 0 && (
        <div className="stats">
          {profile.stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-v">{s.value}</div>
              <div className="stat-l">{s.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <div className="wrap section reveal">
      <Kicker num="01">About</Kicker>
      <h2 className="h2">About me</h2>
      <div className="about-grid" style={{ marginTop: 48 }}>
        <div className="prose">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="portrait">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          ) : (
            <>
              <span className="initials">{initialsOf(profile.name)}</span>
              <span className="ph">add a photo here</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Resume() {
  return (
    <div className="wrap section reveal">
      <Kicker num="02">Résumé</Kicker>
      <h2 className="h2">Experience &amp; skills</h2>
      <p className="lead">{profile.resumeSummary}</p>
      <div className="resume-grid" style={{ marginTop: 52 }}>
        <div>
          <div className="block-label">Experience</div>
          {profile.experience.length === 0 && (
            <p className="lead" style={{ marginTop: 0 }}>
              {/* EDIT: add entries to profile.experience, or keep this note */}
              [Add jobs, internships, or volunteer work here.]
            </p>
          )}
          {profile.experience.map((job, i) => (
            <div className="job" key={i}>
              <div className="job-head">
                <h3 className="job-role">
                  {job.role} <span className="job-org">/ {job.org}</span>
                </h3>
                <span className="job-meta">
                  {job.dates} · {job.place}
                </span>
              </div>
              <ul>
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <aside>
          <div className="block-label">Skills</div>
          {profile.skillGroups.map((g) => (
            <div className="skill-group" key={g.title}>
              <div className="gt">{g.title}</div>
              <div className="chips">
                {g.items.map((it) => (
                  <span className="chip" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="block-label" style={{ marginTop: 40 }}>
            <GraduationCap size={13} style={{ verticalAlign: "-2px", marginRight: 6 }} />
            Education
          </div>
          {profile.education.map((e, i) => (
            <div className="mini" key={i}>
              <div className="d">{e.degree}</div>
              <div className="s">
                {e.school} · {e.dates}
              </div>
            </div>
          ))}

          {profile.certifications && profile.certifications.length > 0 && (
            <>
              <div className="block-label" style={{ marginTop: 40 }}>
                <Award size={13} style={{ verticalAlign: "-2px", marginRight: 6 }} />
                Activities &amp; awards
              </div>
              {profile.certifications.map((c, i) => (
                <div className="mini" key={i}>
                  <div className="d" style={{ fontSize: 15 }}>
                    {c}
                  </div>
                </div>
              ))}
            </>
          )}
        </aside>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="wrap section reveal">
      <Kicker num="03">Selected work</Kicker>
      <h2 className="h2">Projects</h2>
      <p className="lead">
        A solo build that shows how I work with data — from cleaning and analysis
        through to an interactive, statistically grounded interface.
      </p>
      <div style={{ marginTop: 40 }}>
        {profile.projects.map((p, i) => (
          <article className={`project${i % 2 === 1 ? " flip" : ""}`} key={i}>
            <div className="pcover">
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.title} — screenshot`}
                  style={{ display: "block", width: "100%", height: "auto" }}
                />
              ) : (
                <>
                  {coverFor(p.cover)}
                  <div className="pcap">{/* EDIT */}// placeholder — swap in a real screenshot</div>
                </>
              )}
            </div>
            <div>
              <div className="p-context">
                {p.context} · {p.dates}
              </div>
              <h3 className="p-title">{p.title}</h3>
              <p className="p-tagline">{p.tagline}</p>
              {p.note && (
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 12.5,
                    color: "var(--ink-faint)",
                    margin: "0 0 22px",
                  }}
                >
                  {p.note}
                </p>
              )}

              <div className="p-row">
                <div className="rl">Objective</div>
                <p>{p.objective}</p>
              </div>
              <div className="p-row">
                <div className="rl">My responsibilities</div>
                <p>{p.responsibilities}</p>
              </div>
              <div className="p-row">
                <div className="rl">What I learned</div>
                <p>{p.learned}</p>
              </div>

              <div className="p-foot">
                <div className="chips">
                  {p.skills.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                {(p.liveHref && p.liveHref !== "#") ||
                (p.docHref && p.docHref !== "#") ? (
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {p.liveHref && p.liveHref !== "#" && (
                      <a className="btn btn-primary" href={p.liveHref} target="_blank" rel="noreferrer">
                        {p.liveLabel || "Live demo"} <ArrowUpRight size={15} />
                      </a>
                    )}
                    {p.docHref && p.docHref !== "#" && (
                      <a className="btn" href={p.docHref} target="_blank" rel="noreferrer">
                        {p.docLabel} <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const items = [
    { icon: <Mail size={18} />, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: profile.linkedin, href: profile.linkedin },
    { icon: <Github size={18} />, label: "GitHub", value: profile.github, href: profile.github },
    { icon: <MapPin size={18} />, label: "Based in", value: profile.location, href: "#" },
  ].filter((it) => it.value && it.value !== "#"); // tiles with no real value are hidden
  return (
    <div className="wrap section reveal">
      <Kicker num="04">Contact</Kicker>
      <div className="contact-card">
        <h2 className="h2">Get in touch</h2>
        <p className="lead">
          Always happy to connect about bioinformatics, startups, or anything in
          between. The best way to reach me is email.
        </p>
        <div className="contact-grid">
          {items.map((it) => (
            <a className="contact-item" href={it.href} key={it.label}>
              {it.icon}
              <span>
                <span className="ci-l">{it.label}</span>
                <br />
                <span className="ci-v">{it.value}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   APP
   ────────────────────────────────────────────────────────────────────────── */
export default function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setActive(id);
    setMenuOpen(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = { home: Home, about: About, resume: Resume, projects: Projects, contact: Contact };
  const Active = sections[active];

  return (
    <div className="site">
      <nav className="nav">
        <div className="wrap nav-inner">
          <div className="brand" onClick={() => go("home")}>
            {profile.name}
            <span className="dot">.</span>
          </div>
          <div className="nav-links">
            {NAV.map((n) => (
              <button
                key={n.id}
                className={`nav-link${active === n.id ? " active" : ""}`}
                onClick={() => go(n.id)}
              >
                {n.label}
              </button>
            ))}
          </div>
          <button className="burger" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
          {NAV.map((n) => (
            <button
              key={n.id}
              className={`nav-link${active === n.id ? " active" : ""}`}
              onClick={() => go(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      <main key={active}>
        <Active go={go} />
      </main>

      <footer className="wrap footer">
        <div className="fb">
          {profile.name}
          <span style={{ color: "var(--accent)" }}>.</span>
        </div>
        <div className="fc">© {new Date().getFullYear()} · {profile.name}</div>
      </footer>
    </div>
  );
}
