/* FOLK Portfolio — page sections, populated with Dhefi's real CV */

const THUMB_COLORS = ['var(--teal)', 'var(--orange)', 'var(--gold)', 'var(--pink)', 'var(--teal-deep)', 'var(--ink-bg)'];

const WORK = [
  { tag: 'RECRUITMENT · ATS', title: 'Self-built ATS — Candidate Tracker', org: 'MagangHub', year: '2025–26',
    desc: 'Built my own ATS (Applicant Tracking System) to manage 100+ candidates — tracking fit, pipeline stage, and progress so screening reports came together far faster.',
    detail: 'During my internship I was screening 100+ resumes manually, so I built a simple internal platform — essentially my own ATS (Applicant Tracking System) — to track which candidates were progressing, who fit the role, and where each one sat in the pipeline. It replaced scattered notes with one organised view and made my screening reports much faster and more accurate to put together. Most HR teams pay for tools like this; I understood the need well enough to build one myself.' },
  { tag: 'PAYROLL · DATA', title: 'Timesheet & overtime for 61', org: 'PT. Santai Berkualitas', year: '2025–26',
    desc: 'Compiled monthly timesheet and overtime cost data for 61 employees to keep payroll accurate and on time.' },
  { tag: 'FIELD RESEARCH', title: 'Community interviews, Sindanglaut', org: 'PT. Kharisma Sejahtera', year: '2025',
    desc: 'Structured interviews with 25 residents on the sugar factory\u2019s environmental impact — records digitised ~60% faster.' },
  { tag: 'ASSESSMENT', title: 'Online psychological testing', org: 'PRDC UNJANI', year: '2024',
    desc: 'Administered standardised online assessments for 30–40 participants as a certified psychological tester.' },
  { tag: 'RECRUITMENT', title: '2026 contracts rollout', org: 'PT. Santai Berkualitas', year: '2026',
    desc: 'Prepared and distributed 2026 employment contracts for 50 employees with complete, timely documentation.' },
  { tag: 'COMPLIANCE', title: 'Licensing & training digitisation', org: 'PT. Combiphar', year: '2024',
    desc: 'Organised pharmaceutical licensing records and digitised training materials for internal record control.' },
];

const STATS = [
  { n: '100+', l: 'Resumes screened' },
  { n: '61', l: 'Employees · payroll' },
  { n: '30–40', l: 'Test participants' },
  { n: '3.73', l: 'GPA · cum laude' },
];

const EXPERIENCE = [
  { when: 'Aug 2025 — Present', role: 'Freelance Interviewer', org: 'PT. Kharisma Sejahtera Lestari',
    points: ['Structured field interviews with 25 Sindanglaut residents on environmental impact.',
      'Converted physical records into validated Excel datasets — ~60% faster documentation.',
      'Maintained accuracy and confidentiality of all respondent information.'] },
  { when: 'Oct 2025 — Apr 2026', role: 'Human Resource Staff Intern', org: 'MagangHub · PT. Santai Berkualitas Syberindo',
    points: ['Screened 100+ candidate resumes and prepared candidate progress reports.',
      'Compiled timesheet & overtime cost data for 61 employees; distributed 2026 contracts for 50.',
      'Ran experience interviews with 10 new hires; helped build the HR Intervention System.'] },
  { when: 'Feb 2024 — Jun 2024', role: 'Human Capital Officer Intern', org: 'MSIB Batch 6 · PT. Combiphar',
    points: ['Organised licensing documents for compliance and internal record control.',
      'Supported training digitisation and conducted initial candidate interviews.',
      'Interviewed 6 outsourced employees for a performance-productivity project.'] },
  { when: 'Feb 2024 — Aug 2024', role: 'Associate Psychological Tester Intern', org: 'PRDC UNJANI',
    points: ['Completed certification training as a psychological tester.',
      'Administered online testing for 30–40 participants with standardised procedures.'] },
];

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="reveal">
          <div className="kicker">I/O Psychology · HR · Bandung, ID</div>
          <h1>I help companies hire, support &amp; <em>understand</em> their people.</h1>
          <p className="lead">Psychology graduate specialising in recruitment, HR administration, and psychological testing — turning messy people-data into clear, human decisions.</p>
          <div className="hero-cta">
            <Button variant="primary" href="#work" icon="arrow-down">See my work</Button>
            <Button variant="secondary" href="#contact" icon="mail">Get in touch</Button>
          </div>
        </div>
        <div className="hero-photo reveal">
          <div className="frame"><img src="../assets/Dhefiberdiri.jpg" alt="Dhefi Dwicahyani" /></div>
          <div className="badge badge-status"><span className="d">●</span> Available · Q2 2026</div>
          <div className="badge badge-loc"><Icon name="map-pin" size={14} /> Padalarang</div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <div className="stats">
      <div className="wrap row">
        {STATS.map((s, i) => (
          <div className="stat reveal" key={i}>
            <div className="n">{s.n}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkModal({ item, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close"><Icon name="x" size={20} /></button>
        <span className="modal-tag">{item.tag}</span>
        <h3>{item.title}</h3>
        <div className="modal-meta">{item.org} · {item.year}</div>
        <p>{item.detail || item.desc}</p>
      </div>
    </div>
  );
}

function WorkGrid() {
  const [active, setActive] = React.useState(null);
  return (
    <section id="work">
      <div className="wrap">
        <SectionHead kicker="Selected work · 2024–2026" title="Things I've shipped for people teams"
          action={<Button variant="ghost" href="#contact" icon="arrow-up-right">Full CV</Button>} />
        <div className="work-grid">
          {WORK.map((w, i) => (
            <article className="work-card reveal" key={i} onClick={() => setActive(w)}>
              <div className="work-thumb" style={{ background: THUMB_COLORS[i % THUMB_COLORS.length] }}>
                <span className="tag">{w.tag}</span>
              </div>
              <div className="work-body">
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <div className="work-foot">
                  <span>{w.org} · {w.year}</span>
                  <span className="arrow"><Icon name="arrow-up-right" size={18} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {active && <WorkModal item={active} onClose={() => setActive(null)} />}
    </section>
  );
}

function About() {
  const chips = ['Resume screening', 'Initial interviews', 'Psychological testing', 'Contract prep', 'Timesheet & payroll', 'Excel & Workspace', 'Behavioral observation', 'Confidentiality'];
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div className="about-photo reveal"><img src="../assets/Dhefiduduk.jpg" alt="Dhefi Dwicahyani" /></div>
        <div className="about-body reveal">
          <div className="kicker">About</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.9rem,3.2vw,2.7rem)', letterSpacing: '-.02em', margin: '8px 0 18px' }}>
            Hi, I'm Dhefi.
          </h2>
          <p>I'm an Industrial &amp; Organizational Psychology graduate from Universitas Jenderal Achmad Yani — graduating <strong>Best Graduate Student</strong> with a 3.73 GPA.</p>
          <p>I've spent my internships and freelance work close to the heart of people operations: screening over a hundred resumes, running interviews, handling payroll data for dozens of employees, and administering psychological assessments. I like the careful, human parts of HR — the parts where accuracy and empathy both matter.</p>
          <div className="chips">
            {chips.map(c => <span className="chip" key={c}>{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS = [
  { group: 'HR & Recruitment', icon: 'users', items: ['Resume screening', 'Candidate tracking (ATS)', 'Initial & experience interviews', 'Contract preparation', 'Onboarding', 'HR administration'] },
  { group: 'Assessment', icon: 'clipboard-check', items: ['Psychological testing', 'Online test administration', 'Behavioral observation', 'Interview documentation'] },
  { group: 'Tools & Software', icon: 'wrench', items: ['Microsoft Excel', 'Google Workspace', 'Microsoft Office', 'Self-built ATS', 'Data entry & reporting', 'Document control'] },
];

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <SectionHead kicker="Capabilities" title="Skills & tools I work with" />
        <div className="skills-grid">
          {SKILLS.map((s, i) => (
            <div className="skill-card reveal" key={i}>
              <div className="ico"><Icon name={s.icon} size={22} /></div>
              <h3>{s.group}</h3>
              <ul>
                {s.items.map(it => <li key={it}><Icon name="check" size={15} />{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--card)', borderTop: '1.5px solid var(--hairline)', borderBottom: '1.5px solid var(--hairline)' }}>
      <div className="wrap">
        <SectionHead kicker="Experience" title="Where I've worked" />
        <div className="timeline">
          {EXPERIENCE.map((e, i) => (
            <div className="tl-item reveal" key={i}>
              <div className="tl-when">{e.when}</div>
              <div>
                <div className="tl-role">{e.role}</div>
                <div className="tl-org">{e.org}</div>
                <ul className="tl-points">
                  {e.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section>
      <div className="wrap">
        <SectionHead kicker="Recognition" title="A couple of proud moments" />
        <div className="ach-grid">
          <div className="ach reveal">
            <div className="ico" style={{ background: 'var(--gold-soft)' }}><Icon name="award" size={24} /></div>
            <h3>Best Graduate Student</h3>
            <p>Lulusan Terbaik S-1 Psikologi, 2025 — top of the Bachelor of Psychology cohort at Universitas Jenderal Achmad Yani.</p>
          </div>
          <div className="ach reveal">
            <div className="ico" style={{ background: 'var(--teal-soft)' }}><Icon name="book-open" size={24} /></div>
            <h3>Published research</h3>
            <p><em>Gaya Kepemimpinan Terhadap Perilaku Inovatif Karyawan di PT. X</em> (2024) — leadership style and innovative employee behaviour.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Stats, WorkGrid, About, Skills, Experience, Achievements });
