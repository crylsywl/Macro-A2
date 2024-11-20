import React from 'react';
import './Navbar.css'; // Tambahkan file CSS jika diperlukan

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <img 
        src="./assets/logo-navbar.png" 
        alt="Logo" 
        className="c_soal-rectangle" 
      />

      {/* Link navigasi */}
      <div className="c_soal-frame17">
        <a href="/mentoring" className="c_soal-instance21">Mentoring</a>
        <a href="/elearning" className="c_soal-instance22">E-Learning</a>
        <a href="/artikel" className="c_soal-instance23">Artikel Karier</a>
      </div>

      {/* Ikon pengguna */}
      <img 
        src="./assets/icon.svg" 
        alt="User" 
        className="c_soal-instance24" 
      />
    </nav>
  );
};

export default Navbar;
