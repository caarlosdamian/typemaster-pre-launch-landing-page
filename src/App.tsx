import { Buttom } from "./components/Buttom/Buttom";
import "./App.scss";
import { Header } from "./sections/header/Header";
import { Hero } from "./sections/hero/Hero";
import { Middle } from "./sections/middle/Middle";
import { Feautes } from "./sections/features/Feautes";
import { Footer } from "./sections/footer/Footer";

function App() {
  return (
    <main className="App">
      <Header />
      <Hero />
      <Middle />
      <Feautes />
      <Footer/>
    </main>
  );
}

export default App;
