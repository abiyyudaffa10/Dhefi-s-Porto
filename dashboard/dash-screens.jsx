/* FOLK People — dashboard screens */

function StatCard({ icon, tint, n, label, delta, dir }) {
  return (
    <div className="card stat-card">
      <div className="top">
        <div className="ico" style={{ background: tint }}><Icon name={icon} size={19} /></div>
        {delta && <span className={`delta ${dir}`}>{dir === 'up' ? '▲' : '▼'} {delta}</span>}
      </div>
      <div className="n">{n}</div>
      <div className="l">{label}</div>
    </div>
  );
}

function MiniBars() {
  const data = [['Mon', 62], ['Tue', 88], ['Wed', 74], ['Thu', 95], ['Fri', 100], ['Sat', 40]];
  const colors = ['var(--gold)', 'var(--teal)', 'var(--gold)', 'var(--orange)', 'var(--teal)', 'var(--paper-3)'];
  return (
    <div className="bars">
      {data.map(([d, h], i) => (
        <div className="col" key={d}>
          <div className="bar" style={{ height: `${h}%`, background: colors[i] }}></div>
          <div className="cl">{d}</div>
        </div>
      ))}
    </div>
  );
}

function Overview({ openPerson }) {
  return (
    <div className="content">
      <div className="stat-row">
        <StatCard icon="file-search" tint="var(--orange-soft)" n="100+" label="Resumes screened" delta="12 today" dir="up" />
        <StatCard icon="users" tint="var(--teal-soft)" n="61" label="Active employees" delta="3 this mo" dir="up" />
        <StatCard icon="user-plus" tint="var(--pink-soft)" n="8" label="In pipeline" delta="2 new" dir="up" />
        <StatCard icon="clipboard-check" tint="var(--gold-soft)" n="34" label="Tests done" delta="5 pending" dir="down" />
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-head"><h3>Recruitment this week</h3><span className="more">Screenings ↗</span></div>
          <div className="card-pad"><MiniBars /></div>
        </div>
        <div className="card">
          <div className="card-head"><h3>Recent activity</h3></div>
          <div className="activity">
            {ACTIVITY.map((a, i) => (
              <div className="act" key={i}>
                <span className="dot" style={{ background: a.c }}></span>
                <div><div className="t">{a.t}</div><div className="when">{a.when}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-head"><h3>Team directory</h3><span className="more">View all ↗</span></div>
        <div>
          {PEOPLE.slice(0, 5).map((p, i) => (
            <div className="person" key={i} onClick={() => openPerson(p)}>
              <Avatar name={p.name} />
              <div className="meta"><div className="nm">{p.name}</div><div className="rl">{p.role} · {p.dept}</div></div>
              <Badge label={p.status[0]} cls={p.status[1]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function People({ openPerson }) {
  const [seg, setSeg] = React.useState('All');
  const segs = ['All', 'Permanent', 'Contract', 'Outsourced'];
  const rows = seg === 'All' ? PEOPLE : PEOPLE.filter(p => p.type === seg);
  return (
    <div className="content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
        <div className="segs">
          {segs.map(s => <button key={s} className={`seg ${seg === s ? 'active' : ''}`} onClick={() => setSeg(s)}>{s}</button>)}
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.78rem', color: 'var(--ink-mute)' }}>{rows.length} of {PEOPLE.length} employees</span>
      </div>
      <div className="card" style={{ overflowX: 'auto' }}>
        <table className="ptable" style={{ minWidth: 620 }}>
          <thead><tr><th>Name</th><th>Department</th><th>Type</th><th>Tenure</th><th>Status</th></tr></thead>
          <tbody>
            {rows.map((p, i) => (
              <tr key={i} onClick={() => openPerson(p)}>
                <td><div className="cell-name"><Avatar name={p.name} size={34} /><div><div className="nm">{p.name}</div><div className="rl" style={{ fontFamily: 'var(--font-mono)', fontSize: '.7rem', color: 'var(--ink-mute)' }}>{p.role}</div></div></div></td>
                <td>{p.dept}</td>
                <td><Badge label={p.type} cls="b-grey" /></td>
                <td style={{ fontFamily: 'var(--font-mono)', fontSize: '.82rem' }}>{p.tenure}</td>
                <td><Badge label={p.status[0]} cls={p.status[1]} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Pipeline({ openPerson }) {
  return (
    <div className="content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.78rem', color: 'var(--ink-mute)' }}>Recruiter ‑ pipeline · 8 candidates</span>
        <div className="segs"><button className="seg active">Board</button><button className="seg">List</button></div>
      </div>
      <div className="pipe">
        {Object.entries(PIPELINE).map(([stage, cands]) => (
          <div className="pipe-col" key={stage}>
            <h4>{stage}<span className="ct">{cands.length}</span></h4>
            {cands.map((c, i) => (
              <div className="pcard" key={i} onClick={() => openPerson({ ...c, dept: 'Candidate', status: [stage, 'b-grey'], tenure: '—', type: 'Applicant' })}>
                <div className="pn"><Avatar name={c.name} size={24} />{c.name}</div>
                <div className="pr">{c.role}</div>
                <div className="pm">{c.tags.map((t, j) => <Badge key={j} label={t[0]} cls={t[1]} />)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Placeholder({ title, icon }) {
  return (
    <div className="content">
      <div className="card card-pad" style={{ display: 'grid', placeItems: 'center', minHeight: 360, textAlign: 'center', gap: 14 }}>
        <div className="ico" style={{ width: 56, height: 56, borderRadius: 16, border: '1.5px solid var(--ink)', background: 'var(--paper-2)', display: 'grid', placeItems: 'center' }}><Icon name={icon} size={26} /></div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.4rem', margin: 0 }}>{title}</h3>
        <p style={{ color: 'var(--ink-mute)', maxWidth: 380, margin: 0 }}>This screen isn't part of the kit recreation — it's left intentionally blank. Wire it up to your data when you build for real.</p>
      </div>
    </div>
  );
}

function ProfileDrawer({ person, onClose }) {
  const open = !!person;
  return (
    <>
      <div className={`scrim ${open ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`drawer ${open ? 'open' : ''}`}>
        {person && (
          <>
            <div className="dr-hero" style={{ background: tintFor(person.name) }}>
              <button className="dr-close" onClick={onClose}><Icon name="x" size={17} /></button>
              <div className="dr-av" style={{ background: 'var(--white)' }}>{initials(person.name)}</div>
            </div>
            <div className="dr-body">
              <h2>{person.name}</h2>
              <div className="dr-role">{person.role} · {person.dept}</div>
              <div style={{ marginTop: 14 }}><Badge label={person.status[0]} cls={person.status[1]} /></div>
              <div className="dr-stats">
                <div className="dr-stat"><div className="n">{person.tenure}</div><div className="l">Tenure</div></div>
                <div className="dr-stat"><div className="n">4.6</div><div className="l">Review</div></div>
                <div className="dr-stat"><div className="n">2</div><div className="l">Open tasks</div></div>
              </div>
              <div className="dr-sect">Details</div>
              <div className="dr-row"><span className="k">Employment</span><span>{person.type}</span></div>
              <div className="dr-row"><span className="k">Department</span><span>{person.dept}</span></div>
              <div className="dr-row"><span className="k">Manager</span><span>Dhefi Dwicahyani</span></div>
              <div className="dr-row"><span className="k">Location</span><span>Bandung, ID</span></div>
              <div className="dr-sect">Quick actions</div>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button className="seg active" style={{ background: 'var(--orange)' }}>Message</button>
                <button className="seg" style={{ border: '1.5px solid var(--ink)' }}>View file</button>
                <button className="seg" style={{ border: '1.5px solid var(--ink)' }}>Schedule 1:1</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

Object.assign(window, { Overview, People, Pipeline, Placeholder, ProfileDrawer });
