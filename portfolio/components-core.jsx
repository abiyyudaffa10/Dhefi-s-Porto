/* FOLK Portfolio — core/shared components */

function Icon({ name, size = 18, color, strokeWidth = 2 }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, display: 'inline-flex' }} data-stroke={strokeWidth}></i>;
}

function Button({ variant = 'primary', children, icon, onClick, href }) {
  const cls = `btn btn-${variant}`;
  const inner = <>{children}{icon && <Icon name={icon} size={18} />}</>;
  if (href) return <a className={cls} href={href} onClick={onClick}>{inner}</a>;
  return <button className={cls} onClick={onClick}>{inner}</button>;
}

function Brand({ size = 30 }) {
  return (
    <a className="brand" href="#top">
      <img src="../assets/mark.svg" width={size} height={size} alt="" />
      Dhefi<span className="dot">.</span>
    </a>
  );
}

function Nav() {
  const [open, setOpen] = React.useState(false);
  const links = [
    ['Work', '#work'], ['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Contact', '#contact'],
  ];
  return (
    <nav className="nav" id="top">
      <div className="wrap nav-inner">
        <Brand />
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>
          ))}
          <Button variant="primary" href="#contact" icon="arrow-up-right" onClick={() => setOpen(false)}>Hire me</Button>
        </div>
        <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <Icon name={open ? 'x' : 'menu'} size={26} />
        </button>
      </div>
    </nav>
  );
}

function Marquee({ items }) {
  const run = (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>{it}<span className="star">✱</span></React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">{run}{run}</div>
    </div>
  );
}

function SectionHead({ kicker, title, action }) {
  return (
    <div className="sec-head">
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  );
}

function Footer() {
  return (
    <footer className="wrap">
      <div className="foot-inner">
        <Brand size={26} />
        <div className="foot-links">
          <a href="mailto:dhefidwi3@gmail.com">Email</a>
          <a href="https://linkedin.com/in/dhefidwi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#work">Work</a>
          <a href="#top">Top ↑</a>
        </div>
        <div className="foot-copy">© 2026 Dhefi Dwicahyani · Portfolio</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, Button, Brand, Nav, Marquee, SectionHead, Footer });
