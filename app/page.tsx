"use client"

import { useState } from 'react';
import ReedemKey from '../components/reedemKey';
import Profile from '@/components/profile';
import Manage from '@/components/manage';
import Aside from '@/components/aside';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="flex">
      <Aside setActiveSection={setActiveSection} />
      <main className="ml-52 mr-4 w-full transition-all duration-500">
        {activeSection === 'profile' && <Profile />}
        {activeSection === 'manage' && <Manage />}
        {activeSection === 'reedemKey' && <ReedemKey />}
      </main>
    </div>
  );
}

export default Dashboard;
