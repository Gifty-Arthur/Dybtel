import ActivityHistoryScreen from "./components/pages/ActivityHistoryScreen";
import DashboardScreen from "./components/pages/DashboardScreen";
import LoginScreen from "./components/pages/LoginScreen";
import { Routes, Route } from "react-router-dom";
import TopUpScreen from "./components/pages/TopUpScreeen";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />
      <Route path="/activity" element={<ActivityHistoryScreen />} />
      <Route path="top-up" element={<TopUpScreen />} />
    </Routes>
  );
};

export default App;
