import React from 'react';
import { Layout } from 'antd';
import {
  AppstoreOutlined,
  DatabaseOutlined,
  BookOutlined,
  UsbOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SidebarLeft: React.FC = () => (
  <Sider
    width={100}
    style={{ background: 'black' }}
    className="h-screen flex flex-col items-center py-5"
  >
    {/* Company Name */}
    <div className="text-white text-2xl font-bold mb-50">XD</div>

    {/* Icons Container - Takes Full Height */}
    <div className="flex flex-col justify-center flex-grow gap-8">
      <AppstoreOutlined style={{ fontSize: '22px', color: '#ffffff' }} />
      <DatabaseOutlined style={{ fontSize: '22px', color: '#ffffff' }} />
      <BookOutlined style={{ fontSize: '22px', color: '#ffffff' }} />
      <UsbOutlined style={{ fontSize: '22px', color: '#ffffff' }} />
      <SettingOutlined style={{ fontSize: '22px', color: '#ffffff' }} />
    </div>

    {/* Logout Icon at Bottom */}
    <PoweroffOutlined
      className="mt-40"
      style={{ fontSize: '22px', color: '#ff4d4f' }}
    />
  </Sider>
);

export default SidebarLeft;
