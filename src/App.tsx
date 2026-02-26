import './App.css';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Menu } from './sections/Menu';
import { Hours } from './sections/Hours';
import { Location } from './sections/Location';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Hours />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
