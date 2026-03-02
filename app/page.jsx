"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/* ─────────────────────────── NAVBAR ─────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#stack", label: "Stack" },
    { href: "#process", label: "Process" },
    { href: "#book", label: "Book a Call" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pt-5 px-6 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-3xl transition-all duration-500 ${scrolled ? "pill-nav" : "bg-transparent"}`}
      >
        <nav className="flex items-center gap-2 px-4 py-3">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 mr-2">
            <Image
              src="/logo.png"
              alt="Rolltek Technologies"
              width={780}
              height={264}
              className="h-[120px] w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-3.5 py-2 text-[13px] font-medium text-white/45 hover:text-white transition-colors duration-200 rounded-xl hover:bg-white/[0.04]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary text-[13px] py-2.5 px-5 ml-2"
          >
            Hire Us
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto text-white/50 hover:text-white p-1.5 transition-colors"
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen ? (
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 5h15M2.5 10h15M2.5 15h15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="pointer-events-auto w-full max-w-3xl mt-2 pill-nav p-4 flex flex-col gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 text-[13px] font-medium text-white/60 hover:text-white hover:bg-white/[0.05] rounded-xl transition-all"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-2 justify-center"
          >
            Hire Us
          </a>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────── HERO ─────────────────────────── */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="orb-1 absolute -top-40 -left-32 w-[700px] h-[700px] rounded-full bg-violet-700/[0.12] blur-[140px]" />
        <div className="orb-2 absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full bg-cyan-600/[0.08] blur-[120px]" />
        <div className="orb-3 absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full bg-indigo-600/[0.10] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <div className="chip">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-live flex-shrink-0"
                  aria-hidden="true"
                ></span>{" "}
                Accepting Projects &middot; 2027
              </div>
            </div>

            <h1 className="font-display text-[clamp(3rem,6.5vw,5.5rem)] font-bold leading-[0.96] text-white mb-8">
              We Engineer
              <br />
              <span className="gradient-text">Digital Products</span>
              <br />
              That Ship.
            </h1>

            <p className="text-[16px] text-white/40 leading-relaxed mb-10 max-w-[420px] font-light">
              Rolltek Technologies is a next-generation software studio. We
              craft high-performance web apps, AI-powered platforms, and
              scalable cloud systems — end to end.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <a href="#services" className="btn-primary">
                Explore Services
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#about" className="btn-outline">
                About Us
              </a>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { n: "150+", l: "Projects" },
                { n: "98%", l: "Satisfaction" },
                { n: "6+", l: "Years" },
                { n: "40+", l: "Engineers" },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold gradient-text leading-tight">
                    {n}
                  </div>
                  <div className="text-[11px] text-white/25 tracking-[0.12em] uppercase font-medium mt-0.5">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Terminal card */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative">
              <div className="bento p-7 w-[430px]">
                <div className="flex items-center gap-1.5 mb-6">
                  <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  <span className="ml-3 text-[11px] text-white/[0.18] font-mono tracking-widest">
                    rolltek.project.ts
                  </span>
                </div>
                <div className="font-mono text-[13px] leading-[1.9]">
                  <p>
                    <span className="text-violet-400">const</span>
                    <span className="text-white/25"> project = await </span>
                    <span className="text-emerald-400">rolltek</span>
                    <span className="text-white/35">.ship({"{"}</span>
                  </p>
                  <p className="pl-6">
                    <span className="text-amber-300">stack</span>
                    <span className="text-white/25">: </span>
                    <span className="text-emerald-300">
                      &quot;Next.js + AI&quot;
                    </span>
                    <span className="text-white/25">,</span>
                  </p>
                  <p className="pl-6">
                    <span className="text-amber-300">scale</span>
                    <span className="text-white/25">: </span>
                    <span className="text-cyan-300">&quot;infinite&quot;</span>
                    <span className="text-white/25">,</span>
                  </p>
                  <p className="pl-6">
                    <span className="text-amber-300">timeline</span>
                    <span className="text-white/25">: </span>
                    <span className="text-emerald-300">
                      &quot;12 weeks&quot;
                    </span>
                    <span className="text-white/25">,</span>
                  </p>
                  <p className="pl-6">
                    <span className="text-amber-300">quality</span>
                    <span className="text-white/25">: </span>
                    <span className="text-violet-300">
                      &quot;enterprise&quot;
                    </span>
                  </p>
                  <p>
                    <span className="text-white/35">{"});"} </span>
                  </p>
                  <p className="pt-3 text-white/[0.18] text-[12px]">
                    {"// ✓ 150+ projects shipped this way"}
                  </p>
                  <div className="flex items-center gap-2 pt-4 text-emerald-400 text-[12px]">
                    <span
                      className="w-2 h-2 rounded-full bg-emerald-400 pulse-live"
                      aria-hidden="true"
                    ></span>{" "}
                    Status: deployed &amp; scaling
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bento px-4 py-3">
                <div className="text-[10px] text-white/35 uppercase tracking-[0.12em] mb-0.5">
                  Avg. delivery
                </div>
                <div className="font-display text-xl font-bold text-white">
                  12 Weeks
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bento px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-white/35 uppercase tracking-[0.12em] mb-0.5">
                    Client NPS
                  </div>
                  <div className="font-display text-xl font-bold text-white">
                    98 / 100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── MARQUEE ─────────────────────────── */
function Marquee() {
  const row1 = [
    "Web Apps",
    "AI Platforms",
    "Cloud Infra",
    "Mobile Apps",
    "UI/UX Design",
    "DevOps",
    "Data Engineering",
    "Blockchain",
  ];
  const row2 = [
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "AWS",
    "Kubernetes",
    "TensorFlow",
    "Flutter",
    "Go",
  ];
  const dbl = (a) => [...a, ...a];
  return (
    <div
      className="py-6 overflow-hidden border-y border-white/[0.05]"
      aria-hidden="true"
    >
      <div className="relative mb-3">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            animation: "ticker 30s linear infinite",
            width: "max-content",
          }}
        >
          {dbl(row1).map((item, i) => (
            <div
              key={`r1-${i}-${item}`}
              className="flex items-center gap-8 flex-shrink-0"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/20">
                {item}
              </span>
              <span className="text-violet-500/30 text-xs">◆</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#04040c] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#04040c] to-transparent pointer-events-none" />
      </div>
      <div className="relative">
        <div
          className="flex gap-8 whitespace-nowrap"
          style={{
            animation: "tickerReverse 35s linear infinite",
            width: "max-content",
          }}
        >
          {dbl(row2).map((item, i) => (
            <div
              key={`r2-${i}-${item}`}
              className="flex items-center gap-8 flex-shrink-0"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/[0.12]">
                {item}
              </span>
              <span className="text-cyan-500/20 text-xs">◆</span>
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#04040c] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#04040c] to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

/* ─────────────────────────── ABOUT ─────────────────────────── */
function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main text – 7 cols */}
          <div className="md:col-span-7 bento p-10 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="chip">Who We Are</div>
              <h2 className="font-display text-4xl md:text-[2.75rem] font-bold text-white leading-[1.05] mb-5">
                Engineering excellence,
                <br />
                <span className="gradient-text">delivered on time.</span>
              </h2>
              <p className="text-white/40 text-[15px] font-light leading-relaxed max-w-lg">
                A precision-focused software studio turning ambitious ideas into
                production-ready systems. Every project we take on is built to
                last, scale, and perform under real-world conditions.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-6">
              {[
                "Agile Delivery",
                "ISO-grade QA",
                "Zero-downtime deploys",
                "Post-launch support",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-[12px] font-medium text-white/45 bg-white/[0.04] border border-white/[0.07] px-3 py-1.5 rounded-lg"
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="#a78bfa"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Projects stat – 3 cols */}
          <div
            className="md:col-span-3 bento p-8 flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(135deg, rgba(109,40,217,0.12) 0%, rgba(4,4,12,0.5) 100%)",
            }}
          >
            <div className="chip">Delivered</div>
            <div>
              <div className="font-display text-7xl font-bold gradient-text leading-none mb-2">
                150+
              </div>
              <div className="text-white/35 text-[13px] font-light">
                Production-grade projects shipped worldwide
              </div>
            </div>
          </div>

          {/* Satisfaction – 2 cols */}
          <div
            className="md:col-span-2 bento p-8 flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(135deg, rgba(6,182,212,0.10) 0%, rgba(4,4,12,0.5) 100%)",
            }}
          >
            <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/25 mb-auto">
              Client NPS
            </div>
            <div>
              <div className="font-display text-5xl font-bold text-cyan-300 leading-none mb-1">
                98%
              </div>
              <div className="text-white/30 text-[12px]">Satisfaction rate</div>
            </div>
          </div>

          {/* Years – 4 cols */}
          <div className="md:col-span-4 bento p-8">
            <div className="font-display text-6xl font-bold text-white/[0.08] leading-none mb-3">
              6+
            </div>
            <div className="text-white/45 text-[14px] font-semibold mb-2">
              Years of Engineering
            </div>
            <p className="text-white/28 text-[12px] font-light leading-relaxed">
              Since 2018 we've been building products that outlast trends —
              combining deep craftsmanship with modern tooling.
            </p>
          </div>

          {/* Engineers – 3 cols */}
          <div className="md:col-span-3 bento p-8">
            <div className="font-display text-6xl font-bold gradient-text-warm leading-none mb-3">
              40+
            </div>
            <div className="text-white/45 text-[14px] font-semibold mb-2">
              Expert Engineers
            </div>
            <p className="text-white/28 text-[12px] font-light leading-relaxed">
              Senior devs, designers &amp; architects. No juniors padding your
              bill.
            </p>
          </div>

          {/* Mission – 5 cols */}
          <div className="md:col-span-5 bento p-8 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -right-10 -bottom-10 w-52 h-52 rounded-full bg-violet-600/[0.08] blur-3xl pointer-events-none"
            />
            <div className="relative z-10">
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-violet-400/50 mb-4">
                Our Mission
              </div>
              <p className="text-white text-[18px] font-medium leading-relaxed">
                &ldquo;Build software that humans love, businesses rely on, and
                engineers are proud of.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SERVICES ─────────────────────────── */
const SERVICES = [
  {
    n: "01",
    title: "Web Development",
    tag: "Core",
    color: "from-indigo-500 to-blue-500",
    desc: "High-performance websites & SaaS platforms built with modern frameworks — from marketing sites to complex enterprise systems.",
    tech: ["Next.js", "React", "Node.js", "GraphQL"],
  },
  {
    n: "02",
    title: "Mobile App Development",
    tag: "Core",
    color: "from-violet-500 to-purple-600",
    desc: "Cross-platform mobile experiences that feel native — iOS, Android, and beyond.",
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    n: "03",
    title: "AI & Machine Learning",
    tag: "Hot ✦",
    color: "from-emerald-500 to-cyan-500",
    desc: "LLM integration, computer vision, predictive analytics — AI that actually ships to production.",
    tech: ["OpenAI", "LangChain", "PyTorch", "TensorFlow"],
  },
  {
    n: "04",
    title: "Cloud Infrastructure",
    tag: "Core",
    color: "from-sky-500 to-cyan-500",
    desc: "Scalable cloud architecture on AWS, Azure & GCP. Containerization, serverless & cost optimisation.",
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    n: "05",
    title: "UI/UX Design",
    tag: "Studio",
    color: "from-rose-500 to-orange-500",
    desc: "Pixel-perfect, research-backed design that drives conversions and delights users.",
    tech: ["Figma", "Framer", "Design Systems", "WCAG 2.2"],
  },
  {
    n: "06",
    title: "DevOps & CI/CD",
    tag: "Core",
    color: "from-amber-500 to-rose-500",
    desc: "Automated pipelines, IaC, monitoring stacks — ship faster, break less.",
    tech: ["GitHub Actions", "Terraform", "Prometheus", "Datadog"],
  },
  {
    n: "07",
    title: "Cybersecurity",
    tag: "Security",
    color: "from-red-500 to-orange-600",
    desc: "Pen testing, secure code review, OWASP hardening & compliance audits.",
    tech: ["OWASP", "Burp Suite", "SOC 2", "ISO 27001"],
  },
  {
    n: "08",
    title: "API & Integrations",
    tag: "Core",
    color: "from-teal-500 to-emerald-500",
    desc: "REST & GraphQL APIs, third-party connectors, payment gateways & ERP integrations.",
    tech: ["REST", "GraphQL", "Stripe", "Webhooks"],
  },
];

function Services() {
  const [active, setActive] = useState(null);
  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sticky header */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-32">
              <div className="chip">What We Do</div>
              <h2 className="font-display text-4xl font-bold text-white leading-[1.04] mb-4">
                Our
                <br />
                <span className="gradient-text">Services</span>
              </h2>
              <p className="text-white/35 text-[14px] font-light leading-relaxed mb-8">
                End-to-end digital solutions from concept to deployment and
                beyond.
              </p>
              <a href="#contact" className="btn-primary text-[13px]">
                Discuss Project
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Accordion list */}
          <div className="flex-1">
            {SERVICES.map(({ n, title, tag, color, desc, tech }) => (
              <div
                key={n}
                role="button"
                tabIndex={0}
                onClick={() => setActive(active === n ? null : n)}
                onKeyDown={(e) =>
                  e.key === "Enter" && setActive(active === n ? null : n)
                }
                className="group border-b border-white/[0.06] py-5 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-[11px] font-bold text-white/[0.18] tracking-[0.2em] w-8 flex-shrink-0">
                    {n}
                  </span>
                  <h3 className="font-display text-[18px] md:text-[21px] font-semibold text-white/60 group-hover:text-white transition-colors duration-200 flex-1">
                    {title}
                  </h3>
                  <span
                    className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${color} text-white/80 opacity-60 group-hover:opacity-100 transition-opacity hidden sm:inline-flex`}
                  >
                    {tag}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-lg border border-white/[0.1] flex items-center justify-center transition-all duration-300 flex-shrink-0 ${active === n ? "bg-white/10 rotate-45" : ""}`}
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 2v8M2 6h8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                </div>
                {active === n && (
                  <div className="ml-12 mt-5 grid sm:grid-cols-2 gap-5">
                    <p className="text-white/40 text-[13px] font-light leading-relaxed">
                      {desc}
                    </p>
                    <div className="flex flex-wrap gap-2 content-start">
                      {tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-medium text-white/45 bg-white/[0.05] border border-white/[0.07] px-3 py-1.5 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── TECH STACK ─────────────────────────── */
const STACK_DATA = {
  Frontend: {
    color: "text-indigo-300",
    pills: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer",
      "Three.js",
    ],
  },
  Backend: {
    color: "text-violet-300",
    pills: ["Node.js", "Python", "Go", "Java", "Django", "FastAPI", "NestJS"],
  },
  Databases: {
    color: "text-cyan-300",
    pills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "MySQL",
      "Supabase",
      "Firebase",
      "PlanetScale",
    ],
  },
  "Cloud/Infra": {
    color: "text-emerald-300",
    pills: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Vercel",
    ],
  },
  Mobile: {
    color: "text-rose-300",
    pills: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
  },
  "AI / ML": {
    color: "text-amber-300",
    pills: [
      "OpenAI API",
      "LangChain",
      "PyTorch",
      "Hugging Face",
      "Pinecone",
      "Scikit-learn",
    ],
  },
};

function TechStack() {
  const cats = Object.keys(STACK_DATA);
  const [active, setActive] = useState("Frontend");
  return (
    <section id="stack" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="chip mx-auto inline-flex">Our Tools</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-white/35 text-[15px] font-light max-w-md mx-auto">
            Industry-leading tools for every layer of the stack.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-xl text-[12px] font-semibold transition-all duration-200 border ${
                active === cat
                  ? `bg-white/10 border-white/[0.14] ${STACK_DATA[cat].color}`
                  : "text-white/30 hover:text-white/55 hover:bg-white/[0.04] border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pill cloud */}
        <div className="flex flex-wrap justify-center gap-3 min-h-[80px]">
          {STACK_DATA[active].pills.map((pill) => (
            <span
              key={pill}
              className={`bento px-5 py-3 text-[13px] font-medium ${STACK_DATA[active].color}`}
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Overview grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-12 pt-12 border-t border-white/[0.05]">
          {cats.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-center py-4 rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <div
                className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-1 ${STACK_DATA[cat].color}`}
              >
                {cat}
              </div>
              <div className="text-[11px] text-white/20">
                {STACK_DATA[cat].pills.length} tools
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── PROCESS ─────────────────────────── */
const STEPS = [
  {
    n: "01",
    icon: "🔍",
    title: "Discover",
    desc: "Deep-dive into your goals, users, and tech landscape. We leave no ambiguity before a line of code is written.",
  },
  {
    n: "02",
    icon: "✏️",
    title: "Design",
    desc: "User-validated prototypes and design systems — pixel-perfect before development begins.",
  },
  {
    n: "03",
    icon: "💻",
    title: "Build",
    desc: "Two-week agile sprints with daily standups and continuous delivery. You see real progress every week.",
  },
  {
    n: "04",
    icon: "🧪",
    title: "Test",
    desc: "Automated + manual QA across all devices and edge cases. Nothing ships below our quality bar.",
  },
  {
    n: "05",
    icon: "🚀",
    title: "Launch",
    desc: "Zero-downtime deployment, monitoring, alerting, and post-launch iterations built in from day one.",
  },
];

function Process() {
  return (
    <section id="process" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="chip mx-auto inline-flex">How We Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-white/35 text-[15px] font-light max-w-md mx-auto">
            A structured, transparent process that keeps you in control at every
            stage.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {STEPS.map(({ n, icon, title, desc }, i) => (
            <div key={n} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+26px)] right-[-50%] h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}
              <div className="bento p-6 relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-display text-[10px] font-bold text-white/[0.14] tracking-[0.2em]">
                    {n}
                  </span>
                </div>
                <h3 className="font-display text-[15px] font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-[12px] text-white/30 leading-relaxed font-light flex-1">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── WHY US ─────────────────────────── */
const WHY = [
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "Lean processes and senior engineers means you ship faster without sacrificing quality.",
  },
  {
    icon: "🔒",
    title: "Security-First",
    desc: "Security baked into architecture and code from day one — never bolted on later.",
  },
  {
    icon: "📈",
    title: "Built to Scale",
    desc: "We architect for 10× growth from day one so your codebase grows with your business.",
  },
  {
    icon: "🤝",
    title: "True Partnership",
    desc: "Dedicated PMs, transparent reporting, and proactive communication throughout.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    desc: "Remote-native across time zones — your project always moving, always visible.",
  },
  {
    icon: "♾️",
    title: "Full Lifecycle",
    desc: "Strategy, design, build, test, launch, and maintain — all under one roof.",
  },
];

function WhyUs() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-4">
          <div
            className="md:col-span-4 bento p-10 flex flex-col justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(109,40,217,0.1), rgba(4,4,12,0.6))",
            }}
          >
            <div className="chip">Why Us</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-[1.06] mb-4">
              Built for
              <br />
              <span className="gradient-text">Ambitious Teams</span>
            </h2>
            <p className="text-white/35 text-[14px] font-light leading-relaxed">
              Whether you&rsquo;re racing to launch an MVP or modernising legacy
              systems &mdash; we bring the depth, speed, and experience to
              deliver.
            </p>
          </div>
          {WHY.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="md:col-span-4 bento p-7 group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                {icon}
              </div>
              <h4 className="font-display font-semibold text-white text-[14px] mb-2">
                {title}
              </h4>
              <p className="text-[12px] text-white/32 leading-relaxed font-light">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CTA BANNER ─────────────────────────── */
function CTABanner() {
  return (
    <section className="py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className="bento relative overflow-hidden p-14 md:p-20 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(109,40,217,0.14) 0%, rgba(4,4,12,0.7) 50%, rgba(6,182,212,0.07) 100%)",
          }}
        >
          <div
            aria-hidden
            className="absolute -top-16 left-1/4 w-80 h-80 rounded-full bg-violet-700/[0.12] blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-16 right-1/4 w-80 h-80 rounded-full bg-cyan-600/[0.08] blur-3xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
          <div className="relative z-10">
            <div className="chip mx-auto inline-flex mb-6">
              Let&rsquo;s Build Together
            </div>
            <h2 className="font-display text-4xl md:text-[3.5rem] font-bold text-white leading-[1.0] mb-6">
              Your next big product
              <br />
              <span className="gradient-text">starts with a conversation.</span>
            </h2>
            <p className="text-white/35 text-[16px] mb-10 max-w-xl mx-auto font-light leading-relaxed">
              Tell us about your idea. We&apos;ll respond within 24 hours with a
              free strategy session.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#contact" className="btn-primary text-[14px] py-4 px-10">
                Start a Project
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="mailto:support@rolltektech.com"
                className="btn-outline text-[14px] py-4 px-10"
              >
                support@rolltektech.com
              </a>
              <a
                href="#book"
                className="btn-outline text-[14px] py-4 px-10 border-violet-500/40 text-violet-300 hover:bg-violet-500/10"
              >
                📅 Book a 1:1 Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── BOOK A CALL ─────────────────────────── */
function BookCall() {
  // Replace the URL below with your actual Calendly link
  const CALENDLY_URL =
    "https://calendly.com/rolltektechnologies/one-to-one-call";

  return (
    <section id="book" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: info */}
          <div className="flex flex-col justify-center lg:sticky lg:top-32">
            <div className="chip">Free Strategy Session</div>
            <h2 className="font-display text-4xl md:text-[2.75rem] font-bold text-white leading-tight mb-5">
              Book a <span className="gradient-text">1:1 Call</span>
            </h2>
            <p className="text-white/38 text-[15px] font-light leading-relaxed mb-8 max-w-sm">
              Schedule a free 30-minute strategy call with our team. We&apos;ll
              listen to your goals, ask the right questions, and map out exactly
              how we can help.
            </p>
            <div className="space-y-4 mb-8">
              {[
                { icon: "⏱", text: "30 minutes, no obligation" },
                { icon: "🎯", text: "Tailored advice for your project" },
                { icon: "🔒", text: "100% confidential" },
                { icon: "🌍", text: "Available across all time zones" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.07] flex items-center justify-center text-base flex-shrink-0">
                    {icon}
                  </div>
                  <span className="text-[13px] text-white/45 font-light">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calendly inline embed */}
          <div className="bento overflow-hidden" style={{ minHeight: "660px" }}>
            <iframe
              src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&background_color=04040c&text_color=ffffff&primary_color=7c3aed`}
              width="100%"
              height="660"
              frameBorder="0"
              title="Book a 1:1 Call with Rolltek Technologies"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── CONTACT ─────────────────────────── */
function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = () => {
    const name = document.getElementById("c-name")?.value.trim();
    const email = document.getElementById("c-email")?.value.trim();
    const message = document.getElementById("c-message")?.value.trim();
    if (!name || !email || !message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
      return;
    }
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      ["c-name", "c-email", "c-message", "c-service"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = "";
      });
    }, 3000);
  };

  const inputCls =
    "w-full bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3.5 text-[13px] text-white placeholder-white/20 focus:outline-none focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/20 transition-all duration-200";

  return (
    <section id="contact" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left info */}
          <div
            className="bento p-10 relative overflow-hidden flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(135deg, rgba(109,40,217,0.1) 0%, rgba(4,4,12,0.65) 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-violet-600/[0.08] blur-3xl pointer-events-none"
            />
            <div className="relative z-10">
              <div className="chip">Get in Touch</div>
              <h2 className="font-display text-4xl md:text-[2.75rem] font-bold text-white leading-tight mb-5">
                Let&rsquo;s <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-white/38 text-[15px] font-light leading-relaxed mb-10 max-w-sm">
                Reach out and we&apos;ll get back within one business day with
                ideas on how we can work together.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "support@rolltektech.com",
                    href: "mailto:support@rolltektech.com",
                  },
                  {
                    icon: "📍",
                    label: "Location",
                    value: "Chennai, India · Remote Worldwide",
                    href: null,
                  },
                  {
                    icon: "🕐",
                    label: "Response time",
                    value: "Within 1 business day",
                    href: null,
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-lg flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/22 mb-0.5">
                        {label}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-[13px] font-medium text-white/55 hover:text-white transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <span className="text-[13px] font-medium text-white/55">
                          {value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                {[
                  ["LinkedIn", "💼"],
                  ["Twitter", "𝕏"],
                  ["GitHub", "⚙️"],
                  ["Dribbble", "🏀"],
                ].map(([l, i]) => (
                  <button
                    key={l}
                    aria-label={l}
                    className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-lg hover:-translate-y-1 hover:bg-white/[0.08] transition-all duration-200"
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bento p-10">
            <h3 className="font-display text-2xl font-semibold text-white mb-8">
              Send Us a Message
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="c-name"
                  className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/22 mb-2"
                >
                  Full Name
                </label>
                <input
                  id="c-name"
                  type="text"
                  placeholder="Jane Smith"
                  className={inputCls}
                />
              </div>
              <div>
                <label
                  htmlFor="c-email"
                  className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/22 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="c-email"
                  type="email"
                  placeholder="jane@company.com"
                  className={inputCls}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="c-service"
                className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/22 mb-2"
              >
                Service Interested In
              </label>
              <select id="c-service" className={inputCls}>
                <option value="">Select a service...</option>
                {SERVICES.map((s) => (
                  <option key={s.n}>{s.title}</option>
                ))}
                <option>Other / General Inquiry</option>
              </select>
            </div>
            <div className="mb-7">
              <label
                htmlFor="c-message"
                className="block text-[10px] font-bold uppercase tracking-[0.15em] text-white/22 mb-2"
              >
                Project Details
              </label>
              <textarea
                id="c-message"
                rows={5}
                placeholder="Tell us about your project, timeline, and goals..."
                className={inputCls}
              />
            </div>
            {(() => {
              const btnCls =
                status === "success"
                  ? "bg-emerald-500 text-white"
                  : status === "error"
                    ? "bg-rose-500 text-white"
                    : "btn-primary";
              const btnLabel =
                status === "success" ? (
                  "✓ Message Sent!"
                ) : status === "error" ? (
                  "Please fill required fields"
                ) : (
                  <>
                    Send Message
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M2 8h12M10 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                );
              return (
                <button
                  onClick={handleSubmit}
                  className={`w-full py-4 rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2 transition-all duration-300 ${btnCls}`}
                >
                  {btnLabel}
                </button>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-white/[0.05] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="inline-flex mb-5">
              <Image
                src="/logo.png"
                alt="Rolltek Technologies"
                width={1260}
                height={432}
                className="h-48 w-auto object-contain hover:opacity-80 transition-opacity duration-200"
              />
            </a>
            <p className="text-[13px] text-white/22 leading-relaxed font-light max-w-xs mb-6">
              A next-generation software studio engineering digital products
              that scale.
            </p>
            <div className="flex gap-2.5">
              {[
                ["💼", "LinkedIn"],
                ["𝕏", "Twitter"],
                ["⚙️", "GitHub"],
                ["🏀", "Dribbble"],
              ].map(([icon, label]) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-sm hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all duration-200"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>
          {[
            {
              title: "Services",
              links: [
                ["Web Development", "#services"],
                ["Mobile Apps", "#services"],
                ["AI & ML", "#services"],
                ["Cloud Infra", "#services"],
                ["UI/UX Design", "#services"],
              ],
            },
            {
              title: "Company",
              links: [
                ["About Us", "#about"],
                ["Our Process", "#process"],
                ["Tech Stack", "#stack"],
                ["Careers", "#contact"],
                ["Contact", "#contact"],
              ],
            },
            {
              title: "Legal",
              links: [
                ["Privacy Policy", "#"],
                ["Terms of Service", "#"],
                ["Cookie Policy", "#"],
                ["Security", "#"],
              ],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/22 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[13px] text-white/28 hover:text-white/55 transition-colors font-light"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="divider mb-7" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/[0.18] font-light">
          <span>&copy; 2027 Rolltek Technologies. All rights reserved.</span>
          <span>Engineered with precision &amp; passion.</span>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <TechStack />
        <Process />
        <WhyUs />
        <BookCall />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
