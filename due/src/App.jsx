import './App.css';
import Navbar from './components/Navbar'
import DashHeader from './components/dashboard/dash_header'
import DashExpenses from './components/dashboard/dash_expenses'
import Dashboard from './components/dashboard/dashboard'
// import LoginForm from './components/session/login_form'
// import SignupForm from './components/session/signup_form'

function App() {
  return (
    <div className="container">
      <Navbar />
      <DashHeader />
      <Dashboard />
      {/* < LoginForm />
      <SignupForm /> */}
      {/* <DashExpenses /> */}
    </div>
  );
}

export default App;
