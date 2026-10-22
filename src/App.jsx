import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
  Menu,
  X,
  CheckCircle2,
  Send,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Developer Portfolio",
    category: "PERSONAL BRAND · WEB DESIGN",
    description:
      "A thoughtful home on the web to introduce a developer, showcase selected work, and make getting in touch effortless.",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
    visual: "portfolio",
    href: "https://adnan-designs-showcase.lovable.app/",
  },
  {
    number: "02",
    title: "Neighborhood Cafe Landing Page",
    category: "FRONTEND · UI DEVELOPMENT",
    description:
      "A clear, conversion-focused landing page with a strong visual hierarchy, purposeful sections, and responsive layouts.",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
    visual: "landing",
    href: "https://cozy-fern-menu.lovable.app/",
  },
  {
    number: "03",
    title: "Booking App",
    category: "WEB APP · INTERFACE DESIGN",
    description:
      "A clean booking concept that organizes key information into table format and intuitive navigation.",
    tags: ["React", "Tailwind CSS", "Responsive UI"],
    visual: "dashboard",
    href: "https://portrait-time-picker.lovable.app/",
  },
];

const skills = [
  { name: "HTML & CSS", level: "Page structure and styling" },
  { name: "JavaScript", level: "Interactive web experiences" },
  { name: "React", level: "Reusable UI components" },
  { name: "Tailwind CSS", level: "Responsive utility-first styling" },
  { name: "Git & GitHub", level: "Version control and collaboration" },
  { name: "Responsive Design", level: "Layouts for every screen" },
];


function AnimatedLogoShowcase() {
  return (
    <section className="logo-lab section-wrap" aria-labelledby="logo-lab-title">
      <div className="logo-lab-heading">
        <p className="eyebrow">IDENTITY IN MOTION · 01—03</p>
        <h2 id="logo-lab-title">A little motion.<br /><span>A lasting impression.</span></h2>
        <p>Three original animated marks exploring a more expressive visual identity for Adnan Adil.</p>
      </div>
      <div className="logo-lab-grid">
        <article className="logo-tile logo-tile-orbit">
          <div className="logo-stage">
            <div className="orbit-mark" aria-label="Animated orbit monogram logo">
              <span className="orbit-ring orbit-ring-a" /><span className="orbit-ring orbit-ring-b" />
              <span className="orbit-dot" /><b>A<span>.</span></b>
            </div>
          </div>
          <div className="logo-tile-meta"><span>01 / ORBIT</span><strong>Quiet confidence</strong><small>Monogram · Precision · Craft</small></div>
        </article>
        <article className="logo-tile logo-tile-signal">
          <div className="logo-stage">
            <div className="signal-mark" aria-label="Animated signal wordmark logo">
              <span className="signal-bars"><i /><i /><i /><i /><i /></span>
              <b>adnan<span>.dev</span></b>
            </div>
          </div>
          <div className="logo-tile-meta"><span>02 / SIGNAL</span><strong>Digital by nature</strong><small>Wordmark · Rhythm · Energy</small></div>
        </article>
        <article className="logo-tile logo-tile-prism">
          <div className="logo-stage">
            <div className="prism-mark" aria-label="Animated prism initials logo">
              <span className="prism-shape prism-shape-one" /><span className="prism-shape prism-shape-two" />
              <b>AA</b><i />
            </div>
          </div>
          <div className="logo-tile-meta"><span>03 / PRISM</span><strong>Made to stand out</strong><small>Geometry · Depth · Perspective</small></div>
        </article>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="heading-row">
        <h2>{title}</h2>
        {note && <p className="heading-note">{note}</p>}
      </div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "portfolio") {
    return (
      <div className="mock-browser visual-portfolio" aria-hidden="true">
        <div className="browser-top"><span /><span /><span /><i>adnan.dev</i></div>
        <div className="mock-content">
          <div className="mock-nav"><b>AA.</b><span>WORK&nbsp;&nbsp; ABOUT&nbsp;&nbsp; CONTACT</span></div>
          <div className="mock-kicker">WEB DEVELOPER</div>
          <div className="mock-big">Building<br />for the web<span>.</span></div>
          <div className="mock-line" />
          <div className="mock-bottom">Thoughtful design. Useful code.</div>
        </div>
      </div>
    );
  }
  if (type === "landing") {
    return (
      <div className="mock-browser visual-landing" aria-hidden="true">
        <img src="/images/cozy-fern-menu.png" />
        <div className="browser-top"><span /><span /><span /><i>studio.example</i></div>
        <div className="landing-inner">
          <div className="landing-nav"><b>forma.</b><span>Our approach&nbsp;&nbsp; Journal&nbsp;&nbsp; ↗</span></div>
          <div className="landing-label">A BETTER WAY TO WORK</div>
          <div className="landing-title">Make room<br />for good ideas.</div>
          <div className="landing-cta">Explore the studio ↗</div>
          <div className="landing-orb orb-one" /><div className="landing-orb orb-two" />
        </div>
      </div>
    );
  }
  if (type === "dashboard") {
    return (
      <div className="mock-browser visual-dashboard" aria-hidden="true">
        <img src="/images/portrait-time-picker.png" />
        <div className="browser-top"><span /><span /><span /><i>workspace.app</i></div>
        <div className="dashboard-inner">
          <aside><b>◫</b><span>⌂</span><span>▦</span><span>◷</span><span>⚙</span></aside>
          <div className="dashboard-main">
            <div className="dash-greeting">Overview <small>Monday, 14 October</small></div>
            <div className="dash-cards"><div><small>Projects</small><b>12</b><em>↗ 8.2%</em></div><div><small>Tasks done</small><b>48</b><em>↗ 12.4%</em></div></div>
            <div className="dash-chart"><small>Activity this week</small><div className="chart-bars">{[35, 56, 44, 78, 59, 90, 68].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mock-browser visual-dashboard" aria-hidden="true">
      <div className="browser-top"><span /><span /><span /><i>workspace.app</i></div>
      <div className="dashboard-inner">
        <aside><b>◫</b><span>⌂</span><span>▦</span><span>◷</span><span>⚙</span></aside>
        <div className="dashboard-main">
          <div className="dash-greeting">Overview <small>Monday, 15 October</small></div>
          <div className="dash-cards"><div><small>Projects</small><b>12</b><em>↗ 8.2%</em></div><div><small>Tasks done</small><b>48</b><em>↗ 12.4%</em></div></div>
          <div className="dash-chart"><small>Activity this week</small><div className="chart-bars">{[35, 56, 44, 78, 59, 90, 68].map((h, i) => <span key={i} style={{ height: `${h}%` }} />)}</div></div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Adnan,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    window.location.href = `mailto:adnan.adil.jah@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const navItems = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Adnan home">
          <span className="brand-mark">A.</span>
          <span>Adnan Adil<small>WEB DEVELOPER</small></span>
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
            <h1>Thoughtful websites.<br /><span>Built with purpose.</span></h1>
            <p className="hero-description">
              Hey, I’m Adnan — a web developer who enjoys turning ideas into
              clean, accessible, and useful digital experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowRight size={16} /></a>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta">
              <span><Code2 size={16} /> Frontend development</span>
              <span><Sparkles size={16} /> Detail-oriented design</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract geometric illustration">
            <div className="art-grid" />
            <div className="art-card art-card-back"><div className="art-card-line" /><div className="art-card-line short" /><div className="art-mini-grid"><i /><i /><i /><i /></div></div>
            <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
            <div className="art-core"><span>A</span><i /></div>
            <div className="art-caption"><span>DESIGN MINDFUL</span><span>DEVELOPMENT FOCUSED</span></div>
            <div className="art-index">01 / 04</div>
          </div>
          <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
        </section>

        <AnimatedLogoShowcase />
        <section className="work-section section-wrap section-block" id="work">
        <SectionHeading eyebrow="SELECTED WORK · 01—03" title="A few things I’ve made." note="A selection of concepts and projects that reflect how I approach the web." />
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a className="project-visual-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                  <ProjectVisual type={project.visual} />
                  <span className="project-open"><ArrowUpRight size={19} /></span>
                </a>
                <div className="project-info">
                  <div className="project-meta"><span>{project.number} / 03</span><span>{project.category}</span></div>
                  <h3><a href={project.href} target="_blank" rel="noreferrer">{project.title}</a></h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="work-footnote"><span>MORE PROJECTS COMING SOON</span><span>Always learning, always building.</span></div>
        </section>

        <section className="about-section section-block" id="about">
          <div className="section-wrap about-layout">
            <div className="about-label"><p className="eyebrow">A LITTLE ABOUT ME</p><div className="about-monogram">A<span>.</span></div><p className="about-side-note">CURIOUS BY NATURE.<br />BUILDER BY CHOICE.</p></div>
            <div className="about-copy">
              <h2>I care about the details that make a website <span>feel right.</span></h2>
              <p>I’m Adnan, a web developer focused on building digital experiences that feel simple, intuitive, and considered. I enjoy the mix of problem-solving and creativity that comes with making something for the web.</p>
              <p>My approach is straightforward: understand the goal, keep the experience clear, and write maintainable code. I’m always exploring new tools and finding better ways to turn ideas into reality.</p>
              <a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap section-block" id="skills">
          <SectionHeading eyebrow="THE TOOLKIT" title="Tools I work with." note="A growing set of skills for creating thoughtful, reliable web experiences." />
          <div className="skills-layout">
            <div className="skills-intro"><span className="skills-icon"><Code2 size={22} /></span><h3>Good work comes from good fundamentals.</h3><p>I value clean structure, accessible interfaces, responsive layouts, and continuous learning.</p></div>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <div className="skill-row" key={skill.name}><span className="skill-number">0{index + 1}</span><div className="skill-name">{skill.name}<small>{skill.level}</small></div><ArrowUpRight size={16} className="skill-arrow" /></div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-block" id="contact">
          <div className="section-wrap contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
              <h2>Let’s make<br /><span>it happen.</span></h2>
              <p className="contact-description">Have a project, an opportunity, or just want to say hello? My inbox is open.</p>
              <a className="contact-email" href="mailto:adnan.adil.jah@gmail.com"><Mail size={17} /> adnan.adil.jah@gmail.com <ArrowUpRight size={16} /></a>
              <a className="contact-email" href="mailto:adnan.adil.jah+chatgpt@gmail.com"><Mail size={17} /> adnan.adil.jah+chatgpt@gmail.com <ArrowUpRight size={16} /></a>
              <a className="contact-email" href="mailto:adnan.adil.jah+lovable@gmail.com"><Mail size={17} /> adnan.adil.jah+lovable@gmail.com <ArrowUpRight size={16} /></a>
              <div className="social-links">
                <a href="https://github.com/adnanadiljahcode/adnan-web-developer-portfolio" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub <ArrowUpRight size={13} /></a>
                <a href="https://chatgpt.com/" target="_blank" rel="noreferrer"><Code2 size={17} /> ChatGPT <ArrowUpRight size={13} /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-heading"><span>01 — 03</span><h3>Send a message</h3></div>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" value={form.name} onChange={updateField} placeholder="Jane Smith" required />
              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" value={form.email} onChange={updateField} placeholder="jane@example.com" required />
              <label htmlFor="message">What’s on your mind?</label>
              <textarea id="message" name="message" value={form.message} onChange={updateField} placeholder="Tell me a little about your project..." rows="4" required />
              <button className="button button-dark submit-button" type="submit">Prepare email <Send size={15} /></button>
              {submitted && <p className="form-feedback"><CheckCircle2 size={16} /> Your email app should open with the message prepared.</p>}
              <p className="form-note">This form opens your email app; it doesn’t send data to a server.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">A.</span><span>Adnan Adil<small>WEB DEVELOPER</small></span></a>
        <p>Designed with care. Built for the web.</p>
        <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
        <span className="copyright">© {new Date().getFullYear()} ADNAN ADIL</span>
      </footer>
    </div>
  );
}

export default App;
