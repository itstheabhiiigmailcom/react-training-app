import React, { useState } from 'react';
import { Layout, Card, List, Button, Avatar } from 'antd';
import { RightOutlined, TabletOutlined, UserOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const expensesData = [
  { name: 'Avaneda Inc.', amount: '+1,386.00', date: '23 Jul 2023, 14:30' },
  { name: 'Bouque Mc', amount: '-711.27', date: '21 Jul 2023, 09:15' },
  { name: 'Magesty', amount: '-392.00', date: '16 Jul 2023, 16:45' },
  { name: 'Angela Stant', amount: '-3,713.32', date: '11 Jul 2023, 12:10' },
  { name: 'TechSolve', amount: '-645.20', date: '9 Jul 2023, 18:25' },
  { name: 'FinSync', amount: '+2,020.75', date: '7 Jul 2023, 10:05' },
  { name: 'CloudCore', amount: '-2,132.10', date: '4 Jul 2023, 14:50' },
  { name: 'SwiftPay', amount: '-899.99', date: '1 Jul 2023, 08:00' },
];

const SidebarRight = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleViewAll = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Sider
      width={300}
      className="h-screen flex flex-col shadow-lg"
      style={{ background: 'white' }}
    >
      {/* Top Products Section */}
      <div className="h-2/6 p-3">
        <Card className="h-full w-full">
          <h3 className="text-lg font-semibold">Top Products</h3>
          <div className="flex justify-between mt-2 gap-3">
            <Card
              style={{
                width: '48%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                backgroundColor: '#BFDBFE', // Tailwind: bg-blue-200
                color: '#000000', // Tailwind: text-black
                height: '135px', // Tailwind: h-24
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Tailwind: shadow-md
                borderRadius: '20px', // Tailwind: rounded-md
              }}
            >
              <TabletOutlined style={{ fontSize: '40px', color: '#ffffff' }} />
              <span style={{ fontWeight: '500' }}>ZendQ</span>{' '}
              <p className="text-xs text-gray-400">Marketing</p>
              <span style={{ fontSize: '14px' }}>$375,441.00</span>{' '}
            </Card>

            <Card
              style={{
                width: '48%',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
                backgroundColor: '#BFDBFE', // Tailwind: bg-blue-200
                color: '#000000', // Tailwind: text-black
                height: '135px', // Tailwind: h-24
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Tailwind: shadow-md
                borderRadius: '20px', // Tailwind: rounded-md
              }}
            >
              <TabletOutlined style={{ fontSize: '40px', color: '#ffffff' }} />
              <span style={{ fontWeight: '500' }}>DlHunter</span>{' '}
              <p className="text-xs text-gray-400">Marketing</p>
              <span style={{ fontSize: '14px' }}>$142,665.00</span>{' '}
            </Card>
          </div>
        </Card>
      </div>

      {/* Expenses Section */}
      <div className="h-4/6 p-3 flex flex-col relative">
        <Card
          className="h-full w-full flex flex-col relative"
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffffff', // Tailwind: bg-white
            borderRadius: '8px', // Tailwind: rounded-md
          }}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Expenses</h3>
            <button onClick={toggleViewAll} className="text-blue-500 text-sm">
              {isExpanded ? 'Show Less' : 'View All'}
            </button>
          </div>

          {/* Scrollable List Container with Hidden Scrollbar */}
          <div
            className="flex-1 overflow-y-auto pr-2 h-80"
            style={{
              scrollbarWidth: 'none', // Hides scrollbar in Firefox
              msOverflowStyle: 'none', // Hides scrollbar in IE/Edge
              overflowY: 'scroll',
            }}
          >
            <List
              dataSource={expensesData}
              renderItem={(item) => (
                <List.Item
                  className="flex justify-between w-full"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Avatar
                      icon={<UserOutlined />}
                      className="bg-gray-300"
                      style={{
                        backgroundColor: '#D1D5DB', // Tailwind: bg-gray-300
                      }}
                    />
                    <div>
                      <span
                        className="block font-medium"
                        style={{ fontWeight: '500' }} // Tailwind: font-medium
                      >
                        {item.name}
                      </span>
                      <span
                        className="text-xs text-gray-500"
                        style={{ fontSize: '12px', color: '#6B7280' }} // Tailwind: text-gray-500 text-xs
                      >
                        {item.date}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      color: item.amount.includes('+') ? '#10B981' : '#EF4444', // Tailwind: text-green-500 / text-red-500
                    }}
                  >
                    {item.amount}
                  </span>
                </List.Item>
              )}
            />
          </div>

          {/* Sticky Bottom Card */}
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full z-10">
              <Card
                className="text-white flex flex-col justify-between p-4 shadow-md"
                style={{
                  background: '#000000', // Tailwind: bg-black
                  boxShadow: '0px -4px 20px rgba(0, 0, 0, 0.3)', // Tailwind: shadow-lg
                  borderRadius: '8px',
                }}
              >
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontWeight: '600', color: '#ffffff' }} // Tailwind: text-white font-semibold
                >
                  Open a new account{' '}
                  <span style={{ color: '#3B82F6' }}>at Xai.com!</span>{' '}
                  {/* Tailwind: text-blue-500 */}
                </h3>
                <Button
                  type="primary"
                  className="bg-blue-500 flex items-center"
                  style={{
                    backgroundColor: '#3B82F6', // Tailwind: bg-blue-500
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px 12px',
                    fontSize: '14px',
                  }}
                >
                  Increase your plan <RightOutlined className="ml-2" />
                </Button>
              </Card>
            </div>
          )}
        </Card>
      </div>
    </Sider>
  );
};

export default SidebarRight;
