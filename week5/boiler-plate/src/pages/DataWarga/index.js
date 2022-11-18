import React, { useEffect, useState } from "react";
import ApiService from "@/src/services/client";
import {
  Space,
  Table,
  Button,
  message,
  Popconfirm,
  Form,
  Input,
  Row,
  Col,
  Card,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const DataWarga = () => {
  const [dataWarga, setdataWarga] = useState([]);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [inputData, setinputData] = useState({
    nama: "",
    nik: "",
    alamat: "",
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const fetchDataWarga = () => {
    ApiService.request({
      method: "get",
      url: "/person",
    }).then((res) => {
      // console.log('dari ep person', res)
      setdataWarga(res.data.data);
    });
  };

  const postDataWarga = () => {
    setLoading(true);
    const { nik, nama, alamat } = form.getFieldsValue();
    ApiService.request({
      method: "post",
      url: "/person",
      data: {
        nik: nik,
        nama: nama,
        alamat: alamat,
      },
    }).then((res) => {
      fetchDataWarga(res.data.data);
    });
  };

  const handleDataInput = (e) => {
    // console.log(e.target.value)
    setinputData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    postDataWarga();
    e.preventDefault();
  };
  useEffect(() => {
    fetchDataWarga();
  }, []);

  const confirm = (e) => {
    console.log(e);
    message.success("Data Berhasil di Hapus");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Terimakasih");
  };
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      render: (value, data, i) => i + 1,
    },
    {
      title: "NIK",
      dataIndex: "nik",
      key: "nik",
    },
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      key: "alamat",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="dashed" icon={<EditOutlined />}>
            Edit
          </Button>
          <Popconfirm
            title="Apakah anda yakin untuk menghapus ?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger" icon={<DeleteOutlined />}>
              Hapus
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Row justify={"center"} gutter={[40, 40]}>
        <Col
          style={{
            backgroundColor: "violet",
          }}
          span={20}
        >
          <Card
            title="Data Warga Kongoria"
            style={{
              width: "100%",
            }}
            // extra={<a href="#">More</a>}
          >
            <Form
              form={form}
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "3rem",
              }}
              name="basic"
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 18,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="NIK"
                name="nik"
                rules={[
                  {
                    required: true,
                    message: "Masukan NIK sesuai KTP",
                  },
                ]}
              >
                <Input
                  type="number"
                  value={inputData.nik}
                  placeholder="masukan nik sesuai KTP"
                  onChange={handleDataInput}
                />
              </Form.Item>
              <Form.Item
                label="Nama"
                name="nama"
                rules={[
                  {
                    required: true,
                    message: "Masukan nama anda!",
                  },
                ]}
              >
                <Input
                  type="text"
                  value={inputData.nama}
                  placeholder="masukan nama anda"
                  onChange={handleDataInput}
                />
              </Form.Item>
              <Form.Item
                label="Alamat"
                name="alamat"
                rules={[
                  {
                    required: true,
                    message: "Masukan Alamat yang benerr!",
                  },
                ]}
              >
                <Input
                  type="text"
                  value={inputData.alamat}
                  onChange={handleDataInput}
                  placeholder="masukan alamat jangan alamat palsu"
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 4,
                }}
              >
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={22}>
          <Table columns={columns} dataSource={dataWarga} />;
        </Col>
      </Row>
    </div>
  );
};

export default DataWarga;
