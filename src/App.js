import './App.css';
import Welcome from "./pages/Welcome";
import PlanLayout from "./pages/Layouts/PlanLayout";

// planned layout
function App() {
  return (
    <PlanLayout>
      <Welcome />
    </PlanLayout>
  );
}

export default App;
