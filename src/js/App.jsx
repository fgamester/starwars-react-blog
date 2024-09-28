import { useContext } from "react";
import { Context } from "./store/ContentContext.jsx";


function App() {
  const context = useContext(Context);

  if (context.loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga mientras se cargan los elementos
  }
  return (
    <div>
      <p>All items have finished loading</p>
    </div>
  );
}

export default App
