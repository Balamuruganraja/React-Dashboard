import './App.css';
import DashboardSidebar from './Components/DashboardSidebar';
import DashboardNavbar from './Components/DashboardNavbar';
import AdminDashboard from './Components/AdminDashboard';
function App() {
  return (
    <div id="wrapper">
      <DashboardSidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <DashboardNavbar />
          <div className="container-fluid">
            <AdminDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;