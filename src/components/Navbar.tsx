import React from 'react';
import { Layout, Avatar } from 'antd';
import { BellOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar: React.FC = () => (
  <Header
    className="flex justify-between items-center px-5 py-2 shadow-lg border-b border-gray-300"
    style={{ backgroundColor: '#ffffff', zIndex: 50 }} // Explicit background and elevation
  >
    <div className="flex flex-col justify-center gap-3">
      <div className="text-lg font-bold leading-tight truncate">
        Transactions
      </div>
      <span className="text-xs text-gray-500 leading-tight">
        27 July 2024, 14:28
      </span>
    </div>
    <div className="flex items-center gap-4">
      <MessageOutlined className="text-lg text-gray-600" />
      <BellOutlined className="text-lg text-gray-600" />
      <Avatar icon={<UserOutlined />} />
      <span className="font-semibold text-gray-800 truncate">
        Tatiana Herwitz
      </span>
    </div>
  </Header>
);

export default Navbar;
