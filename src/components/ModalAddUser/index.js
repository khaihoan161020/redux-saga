import { Row, Col, Button, Modal, Input, Form, Select, DatePicker } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, editdUser } from "../../redux/modules/user/action";
import { getUserByID } from "../../redux/selector";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import { modalAddUser, modalCloseUser } from "../../redux/modules/modal/action";
import { modalSelector } from "../../redux/modules/modal/selector";
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const initialValues = {
  username: "",
  address: "",
  tags: [],
};
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
function ModalAddUser() {
  const modal = useSelector(modalSelector);
  const userGetByID = useSelector(getUserByID);
  const [form] = Form.useForm();
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [tags, setTags] = useState(["Tester"]);
  const [dob, setDob] = useState("");

  const handleDobUser = (value) => {
    setDob(moment(value._d).format("DD/MM/YYYY"));
  };
  const handleInputUsername = (e) => {
    setUsername(e.target.value);
    console.log("usernmae: ", username);
  };
  const dispatch = useDispatch();
  const handleModalUser = () => {
    if (!username) return;
    if (modal.id)
      dispatch(
        editdUser({
          id: userGetByID.id,
          username: username,
          dob: dob,
          address: address,
          tags: tags,
        })
      );
    else {
      dispatch(
        addUser({
          id: uuidv4(),
          username: username,
          dob: dob,
          address: address,
          tags: tags,
        })
      );
    }

    dispatch(modalCloseUser());
    form.setFieldsValue(initialValues);
  };
  const handleOpenModal = () => {
    dispatch(modalAddUser());
  };

  useEffect(() => {
    if (modal.id) {
      console.log("======");

      console.log("toggle update ne", userGetByID);
      form.setFieldsValue({
        username: userGetByID.username,
        address: userGetByID.address,
        tags: userGetByID.tags,
        birthday: moment(userGetByID.dob, "DD/MM/YYYY"),
      });
      console.log("======");
    }
  }, [modal.id, userGetByID, form]);
  return (
    <Row style={{ margin: 5 }}>
      <Col span={16}></Col>
      <Col span={8}>
        <Button onClick={handleOpenModal} type="primary">
          Add User
        </Button>
        <Modal
          title={modal.id ? "Update User Infomation " : "Add User Infomation"}
          centered
          visible={modal.isToggle}
          onOk={() => dispatch(modalCloseUser())}
          onCancel={() => dispatch(modalCloseUser())}
          footer={[
            <Button key="back">Return</Button>,

            <Button key="submit" type="primary" onClick={handleModalUser}>
              {modal.id ? "Update" : "Add User"}
            </Button>,
          ]}
        >
          <Form {...layout} form={form} name="control-hooks">
            <Form.Item
              name="username"
              label="User name"
              rules={[{ required: true }]}
            >
              <Input onChange={handleInputUsername} />
            </Form.Item>
            <Form.Item
              name="birthday"
              label="Birth day"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <DatePicker onChange={handleDobUser} format={dateFormatList} />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={(e) => setAddress(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="tags"
              label="Tags"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                onChange={(e) => setTags(e)}
                value={tags}
              >
                <Select.Option value="Developer" label="Developer" />
                <Select.Option value="Tester" label="Tester" />
                <Select.Option value="High" label="High" />
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </Col>
    </Row>
  );
}
export default ModalAddUser;
