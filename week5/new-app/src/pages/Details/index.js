import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ApiService from "@/src/services/clientBlog";
import URLS from "@/src/enums/urls";
import { Descriptions, Card, PageHeader, Button } from "antd";

const Details = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const fetchUserData = () => {
    ApiService.request({
      url: "/users",
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setUser((prev) => ({ ...prev, ...res.data.data }));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card title="Profil Details" bordered={false}>
          <PageHeader
            ghost={false}
            onBack={() => window.history.back()}
            title= "Back"
          >
            <Descriptions title="User Info">
              <Descriptions.Item label="id">{user?.id}</Descriptions.Item>
              <Descriptions.Item label="name">{user?.name}</Descriptions.Item>
              <Descriptions.Item label="username">
                {user?.username}
              </Descriptions.Item>
              <Descriptions.Item label="created_at">
                {user?.created_at}
              </Descriptions.Item>
              <Descriptions.Item label="updated_at">
                {user?.updated_at}
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </Card>
      </div>
    </div>
  );
};
export default Details;
