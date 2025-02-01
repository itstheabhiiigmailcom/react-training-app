import React from 'react';
import { Button } from 'antd';

interface LoginButtonProps {
  text: string;
  onClick: () => void;
  icon?: JSX.Element; // ✅ Added icon as optional prop
}

const LoginButton: React.FC<LoginButtonProps> = ({ text, onClick, icon }) => {
  return (
    <Button
      type="primary"
      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
      onClick={onClick}
    >
      {icon} {/* ✅ Render icon if provided */}
      {text}
    </Button>
  );
};

export default LoginButton;
