import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { NavBar } from "./components/NavBar";

const Home = () => {
  return (
   <main className="bg-black">
<NavBar/>
<Hero/>
<Highlights/>
   </main>
  );
};
export default Home;
