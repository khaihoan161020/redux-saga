import { Row, Col, Typography, Menu, Dropdown, Avatar  } from "antd";
import { DownOutlined, UserOutlined  } from '@ant-design/icons';
import { useSelector } from "react-redux";
import { adminSelector } from "../../redux/modules/admin/selector";
const { Title } = Typography;
const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/#">Item 1</a>
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );
function Header() {
  const admin = useSelector(adminSelector);
  return (
    <div
      style={{
        backgroundColor: "#1890ff",
        color: "#fff",
        padding: "10px 0"
      }}
      className="header"
    >
      <Row>
        <Col span={8}>
          <Title
            style={{
              textAlign: "center",
              color: "#fff",
              margin: 0,
            }}
            level={4}
          >
            Dashboard
          </Title>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
            <Avatar  icon={<UserOutlined />} />
            <Dropdown   Dropdown overlay={menu} trigger={['click']}>
                    <a  href="/#" style={{color: "#fff", margin: 4}} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {admin.adminName} <DownOutlined />
                    </a>
            </Dropdown>,
        </Col>
      </Row>
    </div>
  );
}
export default Header;
