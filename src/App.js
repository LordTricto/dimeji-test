import './App.css';

import AppRouter from './routes/AppRouter';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="bg-white-dark w-full min-h-screen">
      <Nav />
      <AppRouter />;
    </div>
  );
}

export default App;
