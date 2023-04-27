import { MainRouter } from './Router';
import { Header, NavBar, Footer } from './temp/TemplateComponents';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <NavBar />
        <Footer />
      </div>
      <div>
        <MainRouter />
      </div>
    </div>
  );
}

export default App;
