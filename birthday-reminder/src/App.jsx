import "./App.css";
import Data from "./data.jsx";
import Listitem from "./Listitem.jsx";
function App() {
  console.log(Data);
  return (
    <div className="list">
      <div className="header">{Data.length} Birthdays Today</div>
      <div className="list-body">
        {Data.map((item) => (
          <Listitem key={item.id} item={item} />
        ))}
      </div>
      <div className="btn">Clear All</div>
    </div>
  );
}

export default App;
