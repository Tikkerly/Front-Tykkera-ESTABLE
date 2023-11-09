import React from 'react';
import Profile from '@/components/profile';
import UserLayout from './layout';

const UserProfile = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

UserProfile.getLayout = function getLayout(page) {
  return <UserLayout>{page}</UserLayout>;
};


export default UserProfile;