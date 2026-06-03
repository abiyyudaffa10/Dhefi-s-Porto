/* FOLK People — dashboard app shell */

const TITLES = { overview: 'Overview', people: 'People', pipeline: 'Candidates', assess: 'Assessments', time: 'Timesheets' };

function App() {
  const [route, setRoute] = React.useState('overview');
  const [person, setPerson] = React.useState(null);

  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setPerson(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const screen = () => {
    switch (route) {
      case 'people': return <People openPerson={setPerson} />;
      case 'pipeline': return <Pipeline openPerson={setPerson} />;
      case 'assess': return <Placeholder title="Assessments" icon="clipboard-check" />;
      case 'time': return <Placeholder title="Timesheets" icon="clock" />;
      default: return <Overview openPerson={setPerson} />;
    }
  };

  return (
    <div className="app">
      <Sidebar route={route} setRoute={setRoute} />
      <div className="main">
        <Topbar title={TITLES[route]} />
        {screen()}
      </div>
      <ProfileDrawer person={person} onClose={() => setPerson(null)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
