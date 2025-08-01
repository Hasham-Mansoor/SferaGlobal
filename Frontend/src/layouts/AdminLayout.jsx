import { Outlet } from "react-router-dom";
// import AdminNavbar from "../components/AdminNavbar"; // optional

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* <AdminNavbar /> */}
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* AdminFooter if needed */}
    </div>
  );
};

export default AdminLayout;
