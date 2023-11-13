
import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meals from "./components/Meals";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import { ThemeProvider} from "./components/ThemeContext";

function App() {

  return (
    <ThemeProvider>
    <div className="App">
      <TopNav />
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meals/>
      <Categories/>
      <NewsLetter/>
    <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
