import React from 'react';
import SideBar from '@/components/sideBar';

const UserLayout = ({ children }) => {
    return (
      <div className="flex h-screen">
        <div className="w-64 bg-blue-500">
          <SideBar />
        </div>
        <div className="flex-1 p-4">
          {children}
        </div>
      </div>
    );
  };
  
  export default UserLayout;