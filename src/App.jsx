import Banner from "./components/Banner";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import { useState } from "react";
import satData from "./components/satData";


function App() {
// Create the sat variable using useState and initialize it with satData
  const [sat, setSat] = useState(satData);
// Create the displaySats variable using Set to get unique orbitTypes
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

// Create the filterByType arrow function
  const filterByType = (currentType) => {
        const filteredSats = satData.filter((newSatDisplay) => {
            return newSatDisplay.orbitType === currentType;
        });
        setSat(filteredSats);
    };

    // Rest of your code...
  return (
      // JSX components
    // <div>
      <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </>
    // </div>
  );
}

export default App;
