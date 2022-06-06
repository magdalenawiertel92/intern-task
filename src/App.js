import "./App.css"
import Dot from "./Dot"

function App() {
  return (
    <div className="dots-wrapper">
      {new Array(20).fill("#000000").map((_, i) => (
        <Dot key={i} index={i} />
      ))}
    </div>
  )
}

export default App
