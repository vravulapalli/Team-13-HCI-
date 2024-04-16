import ReactDOM from "react-dom/client";

import "./App.css";
import DarkPattern from "./screens/DarkPattern";

export default function App() {
  return (
    <div className="min-w-[50rem] min-h-[30rem]">
      <DarkPattern />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
