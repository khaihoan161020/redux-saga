import Header from "../components/Header";
import TableUsers from "../components/TableUsers";
import ModalAddUser from "../components/ModalAddUser";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminSelector } from "../redux/modules/admin/selector";
function Dashboard() {
 
  const admin = useSelector(adminSelector);
  let navigate = useNavigate();
  useEffect(() => {
    if (!admin.isLogin) navigate("/login");
  }, [admin.isLogin]);
  return (
    <div className="Dashboard">
      <Header />
      <ModalAddUser />
      <TableUsers  />
    </div>
  );
}

export default Dashboard;
