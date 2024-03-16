import { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import MagazineAdmin from "../components/magazine/MagazineAdmin";
import MagazineDisplay from "../components/magazine/MagazineDisplay";
import Header from "../components/Header";
import Buttonv2 from "../components/Buttonv2";
import { useSession } from 'next-auth/react';

export default function Magazine() {
  const headerFont = {
    fontFamily: 'coolvetica',
    fontSize: '90px',
    lineHeight: '1',
  };
  const subheaderFont = {
    fontFamily: 'nunito',
    fontSize: '30px',
    lineHeight: '1',
  };

  const [showAdminView, setShowAdminView] = useState(false);

  const handleToggleAdminView = () => {
    setShowAdminView(!showAdminView);
  };

  return (
    <div>
      <NavBar />
      <Header title='Magazine'/>
        <div>
        {showAdminView ? (
          <MagazineAdmin/>
        ) : (
          <MagazineDisplay handleToggleAdminView={handleToggleAdminView} />
        )}
        </div>
      <Footer showAdminLogin={true} />
    </div>
  );
}
