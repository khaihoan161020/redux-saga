import FormLogin from "../components/FormLogin";
import { Typography } from "antd";
import { adminSelector } from "../redux/modules/admin/selector";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const { Title } = Typography;

function Login() {
  const admin = useSelector(adminSelector);
  let navigate = useNavigate();
  useEffect(() => {
    console.log(admin.isLogin);
    if (admin.isLogin) navigate("/");
  }, [admin.isLogin]);
  return (
    <div
      style={{
        width: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        padding: 10,
        boxShadow: "0 0 10px 4px #bfbfbf",
        borderRadius: 5,
      }}
    >
      <Title
        style={{
          textAlign: "center",
        }}
        level={2}
      >
        Login
      </Title>
      <FormLogin />
    </div>
  );
}

export default Login;
