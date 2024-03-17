import satData from "./satData";

// Pass the props created from the App() function: filterByType, setSat, and displaySats.
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
        {displaySats.map((sat, id) => (
           <button onClick={() => filterByType(sat)} key={id}>
              {sat} Orbit
            </button>
          ))}
      <button onClick={() => setSat(satData)}>All Orbit</button>
{/* //code continues */}
    </div>
  );
};

export default Buttons;