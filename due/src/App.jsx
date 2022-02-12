import './App.css';
import Navbar from './components/Navbar'
import DashHeader from './components/dashboard/dash_header'
import DashExpenses from './components/dashboard/dash_expenses'
import Dashboard from './components/dashboard/dashboard'

function App() {
  return (
    <div className="container">
      <Navbar />
      <DashHeader />
      <Dashboard />
      {/* <DashExpenses /> */}
    </div>
  );
}

export default App;
