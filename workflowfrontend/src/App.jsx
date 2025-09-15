import './App.css';
import { Header } from './components';
import { Footer } from './components';
import { Allroutes } from './routes/Allroutes';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Allroutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
