import React from 'react';
import { Layout } from 'antd';
import SidebarLeft from '../components/SidebarLeft';
import SidebarRight from '../components/SidebarRight';
import Navbar from '../components/Navbar';

const { Content } = Layout;

const Dashboard: React.FC = () => (
  <Layout className="h-screen w-screen flex">
    <SidebarLeft />
    <Layout>
      <Navbar />
      <Content className="bg-blue-50 flex-1 p-5"></Content>
    </Layout>
    <SidebarRight />
  </Layout>
);

export default Dashboard;
