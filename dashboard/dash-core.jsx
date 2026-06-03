/* FOLK People — dashboard core: data, primitives, sidebar, topbar */

const AVATAR_TINTS = ['var(--teal-soft)', 'var(--gold-soft)', 'var(--pink-soft)', 'var(--orange-soft)', 'var(--teal-soft)'];
function tintFor(name) { let s = 0; for (const c of name) s += c.charCodeAt(0); return AVATAR_TINTS[s % AVATAR_TINTS.length]; }
function initials(name) { return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase(); }

// Logged-in HR user = Dhefi
const ME = { name: 'Dhefi Dwicahyani', role: 'HR · I/O Psychology', photo: '../assets/dhefi-circle.png' };

// Employee roster (people-ops demo data)
const PEOPLE = [
  { name: 'Rangga Saputra', role: 'Production Lead', dept: 'Operations', status: ['Active', 'b-green'], tenure: '2y 4m', type: 'Permanent' },
  { name: 'Indah Permata', role: 'QA Analyst', dept: 'Quality', status: ['Active', 'b-green'], tenure: '1y 1m', type: 'Permanent' },
  { name: 'Bayu Nugroho', role: 'Warehouse Staff', dept: 'Logistics', status: ['On leave', 'b-gold'], tenure: '3y 0m', type: 'Permanent' },
  { name: 'Sari Wulandari', role: 'Finance Officer', dept: 'Finance', status: ['Active', 'b-green'], tenure: '8m', type: 'Contract' },
  { name: 'Eko Prasetyo', role: 'Machine Operator', dept: 'Operations', status: ['Probation', 'b-orange'], tenure: '2m', type: 'Outsourced' },
  { name: 'Maya Lestari', role: 'Admin Support', dept: 'HR', status: ['Active', 'b-green'], tenure: '1y 7m', type: 'Permanent' },
  { name: 'Fajar Ramadhan', role: 'Logistics Coord.', dept: 'Logistics', status: ['Active', 'b-green'], tenure: '4y 2m', type: 'Permanent' },
  { name: 'Putri Anggraini', role: 'Lab Technician', dept: 'Quality', status: ['On leave', 'b-gold'], tenure: '11m', type: 'Contract' },
];

// Candidate pipeline
const PIPELINE = {
  Applied: [
    { name: 'Dewi Anjani', role: 'HR Generalist', tags: [['New', 'b-pink']] },
    { name: 'Reza Maulana', role: 'Recruiter', tags: [['Referral', 'b-gold']] },
    { name: 'Lina Marlina', role: 'Payroll Staff', tags: [['New', 'b-pink']] },
  ],
  Screening: [
    { name: 'Agus Salim', role: 'Ops Supervisor', tags: [['Resume ✓', 'b-green']] },
    { name: 'Nadia Putri', role: 'HR Generalist', tags: [['Resume ✓', 'b-green']] },
  ],
  Interview: [
    { name: 'Yoga Pratama', role: 'QA Lead', tags: [['Test ✓', 'b-green'], ['2nd', 'b-grey']] },
    { name: 'Citra Dewanti', role: 'Finance Officer', tags: [['Psych test', 'b-orange']] },
  ],
  Offer: [
    { name: 'Hendra Wijaya', role: 'Plant Engineer', tags: [['Offer sent', 'b-gold']] },
  ],
};

const ACTIVITY = [
  { c: 'var(--orange)', t: <><b>You</b> screened 12 resumes for <b>Recruiter</b></>, when: '20 min ago' },
  { c: 'var(--teal)', t: <><b>Yoga Pratama</b> moved to <b>Interview</b></>, when: '1 hr ago' },
  { c: 'var(--gold)', t: <>Contract generated for <b>Hendra Wijaya</b></>, when: '3 hr ago' },
  { c: 'var(--pink)', t: <>Psych test completed · <b>Citra Dewanti</b></>, when: 'Yesterday' },
  { c: 'var(--teal)', t: <><b>Bayu Nugroho</b> submitted a leave request</>, when: 'Yesterday' },
];

function Icon({ name, size = 18, color }) {
  return <i data-lucide={name} style={{ width: size, height: size, color, display: 'inline-flex' }}></i>;
}

function Avatar({ name, size = 38, photo }) {
  if (photo) return <img className="av" src={photo} style={{ width: size, height: size }} alt={name} />;
  return <div className="av" style={{ width: size, height: size, background: tintFor(name), fontSize: size * 0.34 }}>{initials(name)}</div>;
}

function Badge({ label, cls }) { return <span className={`badge ${cls}`}>{label}</span>; }

const NAV = [
  { id: 'overview', label: 'Overview', icon: 'layout-dashboard' },
  { id: 'people', label: 'People', icon: 'users' },
  { id: 'pipeline', label: 'Candidates', icon: 'user-plus' },
  { id: 'assess', label: 'Assessments', icon: 'clipboard-check' },
  { id: 'time', label: 'Timesheets', icon: 'clock' },
];

function Sidebar({ route, setRoute }) {
  return (
    <aside className="sidebar">
      <div className="sb-brand"><img src="../assets/mark.svg" alt="" />Dhefi<span className="dot">.</span></div>
      <div className="sb-sect">People Ops</div>
      {NAV.map(n => (
        <button key={n.id} className={`sb-link ${route === n.id ? 'active' : ''}`} onClick={() => setRoute(n.id)}>
          <Icon name={n.icon} size={19} />{n.label}
        </button>
      ))}
      <div className="sb-sect">Account</div>
      <button className="sb-link"><Icon name="settings" size={19} />Settings</button>
      <div className="sb-user">
        <img src={ME.photo} alt={ME.name} />
        <div><div className="nm">{ME.name}</div><div className="rl">{ME.role}</div></div>
      </div>
    </aside>
  );
}

function Topbar({ title }) {
  return (
    <div className="topbar">
      <h1>{title}</h1>
      <div className="search"><Icon name="search" size={17} /><input placeholder="Search people, candidates…" /></div>
      <div className="top-actions">
        <button className="icon-btn"><Icon name="bell" size={19} /><span className="dot"></span></button>
        <button className="icon-btn"><Icon name="plus" size={19} /></button>
      </div>
    </div>
  );
}

Object.assign(window, { Icon, Avatar, Badge, Sidebar, Topbar, PEOPLE, PIPELINE, ACTIVITY, ME, NAV, tintFor, initials });
