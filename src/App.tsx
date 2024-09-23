import { ContainedContent } from "./components/ContainedContent";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <ContainedContent>
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="text-9xl">CHRISTIAN GONZALES</p>
            <p>Software Engineer</p>
          </div>
        </div>
      </ContainedContent>
    </div>
  );
}

export default App;
