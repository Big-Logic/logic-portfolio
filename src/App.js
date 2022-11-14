import NavBar from "./Components/NavBar";
import AuthorCard from "./Components/AuthorCard";
import WorkCard from "./Components/WorkCard";
import EducationCard from "./Components/EducationCard";
import HobbieCard from "./Components/HobbieCard";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <AuthorCard />
            <WorkCard />
            <EducationCard />
            <HobbieCard />
          </div>
          {/* <!-- /End replace --> */}
        </main>
      </div>
    </>
  );
}

export default App;
