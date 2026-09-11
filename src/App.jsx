import StatusBadge from './components/StatusBadge';

const name = 'Bunna Sothcheat';
const goal =
  'My goal with this course is to be able to create functional, interactive and dynamic websites with React and Tailwind.';

function App() {
  const isOpenToWork = true;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          {name}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate-600">{goal}</p>

        <div className="mt-6">
          <StatusBadge isOpen={isOpenToWork} />
        </div>
      </div>
    </main>
  );
}

export default App;
