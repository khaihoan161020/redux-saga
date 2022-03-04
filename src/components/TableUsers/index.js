import { Table, Tag, Space, Button, Popconfirm, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/modules/user/action";
import { usersSelector } from "../../redux/modules/user/selector";
import { modalEditUser } from "../../redux/modules/modal/action";

function TableUsers() {
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  const hanleBtnDeleteUser = (id) => {
    console.log(id);
    return;
    dispatch(deleteUser(id));
  };
  const confirm = (id) => {
    console.log(id);
    message.success("Delete Success");
    hanleBtnDeleteUser();
  };
  const cancel = (e) => {
    message.error("Click on No");
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "username",
      key: "username",
      render: (text) => <a href="/#">{text}</a>,
    },
    {
      title: "Day of Birth",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 6 ? "geekblue" : "green";
            if (tag === "Tester") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "id",
      dataIndex: "id",
      render: (id) => (
        <Space size="middle">
          <Button onClick={() => dispatch(modalEditUser(id))}>Edit</Button>
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button onAbort={() => hanleBtnDeleteUser(id)}   type="danger">Delete</Button>
          </Popconfirm>
          {/* onClick={() => hanleBtnDeleteUser(id)} */}
          
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={users.list} rowKey="id" />;
}
export default TableUsers;
