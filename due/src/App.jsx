import './App.css';
import Navbar from './components/Navbar'
import DashHeader from './components/dashboard/dash_header'
import DashExpenses from './components/dashboard/dash_expenses'

function App() {
  return (
    <div className="container">
      <Navbar />
      <DashHeader />
      {/* <DashExpenses /> */}
    </div>
  );
}

export default App;
