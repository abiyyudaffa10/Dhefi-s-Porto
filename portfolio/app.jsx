/* FOLK Portfolio — Contact section + app assembly + interactivity */

function Contact() {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <img className="mark-bg" src="../assets/mark.svg" alt="" />
          <div className="contact-grid">
            <div>
              <div className="kicker">Let's talk</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(2rem,3.6vw,3rem)', letterSpacing: '-.02em', margin: '8px 0 0' }}>
                Looking for someone who gets people <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>and</em> process?
              </h2>
              <p className="lead">I'm taking on one new HR / people-ops role for Q2 2026. Tell me a little about your team and I'll get back to you.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28, fontFamily: 'var(--font-mono)', fontSize: '.9rem' }}>
                <a href="mailto:dhefidwi3@gmail.com" style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--on-dark)' }}><Icon name="mail" size={18} color="var(--orange)" /> dhefidwi3@gmail.com</a>
                <a href="https://linkedin.com/in/dhefi-dwicahyani-fikri-b5372721b/" target="_blank" rel="noreferrer" style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--on-dark)' }}><Icon name="external-link" size={18} color="var(--orange)" /> linkedin.com/in/dhefi-dwicahyani-fikri-b5372721b/</a>
                <span style={{ display: 'flex', gap: 10, alignItems: 'center', color: 'var(--on-dark-soft)' }}><Icon name="phone" size={18} color="var(--orange)" /> 0851-5631-3670</span>
              </div>
            </div>
            {sent ? (
              <div style={{ display: 'grid', placeItems: 'center', minHeight: 240, textAlign: 'center', gap: 12 }}>
                <Icon name="party-popper" size={44} color="var(--gold)" />
                <div className="sent">Thanks — message sent!</div>
                <p style={{ color: 'var(--on-dark-soft)', margin: 0 }}>I'll reply within a day or two.</p>
              </div>
            ) : (
              <form className="cform" onSubmit={submit}>
                <label>Your name</label>
                <input required placeholder="Jane from Acme HR" />
                <label>Email</label>
                <input required type="email" placeholder="you@company.com" />
                <label>What do you need?</label>
                <textarea rows="3" placeholder="A few lines about the role…"></textarea>
                <Button variant="primary" icon="send">Send message</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILLS_MARQUEE = ['Recruitment', 'Psychological testing', 'HR administration', 'Payroll support', 'Interviews', 'Onboarding', 'Data & reporting', 'Confidentiality'];

function App() {
  // scroll reveal
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  // (re)build lucide icons after every render
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  return (
    <>
      <Nav />
      <Hero />
      <Marquee items={SKILLS_MARQUEE} />
      <Stats />
      <WorkGrid />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
