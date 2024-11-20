import React from 'react';
import '../css/indexartikel.css';
import '../css/globalartikel.css';
import Navbar from '../Components/Elements/Navbar/Navbar';


const Artikel = () => {
  return (
    <>
      <Navbar />
<div className="artikel" id="content">
    <img className="image-icon" alt="" src="./assets/image.png" />
    {/* <div className="navbar">
      <a href="homepage.html">
        <img
          className="logo-navbar-1"
          alt=""
          src="./assets/Logo Navbar1.png"
          id="logoNavbar1"
        />
      </a>
      <div className="menu-nav">
        <div className="text-nav-parent">
          <div className="text-nav">
            <a
              href="mentoring.html"
              style={{ color: "white", textDecoration: "none" }}
            >
              <div className="lorem-ipsum">Mentoring</div>
            </a>
          </div>
          <a
            href="e-learning.html"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div className="text-nav">
              <div className="lorem-ipsum">E-Learning</div>
            </div>
          </a>
          <a
            href="artikel.html"
            style={{ color: "white", textDecoration: "none" }}
          >
            <div className="text-nav">
              <div className="lorem-ipsum">Artikel Karier</div>
            </div>
          </a>
        </div>
      </div>
      <img
        className="iconaccount-circle"
        alt=""
        src="./assets/account_circle.svg"
      />
    </div> */}
    <div className="search-bar">
      <div className="content">
        <b className="supporting-text" />
        <input type="text" id="search-input" placeholder="Cari" />
      </div>
      <img src="/assets/search.svg" alt="" />
    </div>
    <div className="text-nav-group">
      <div className="text-nav">
        <div className="lorem-ipsum3">Kategori</div>
      </div>
      <div className="instance-parent">
        <button className="frame-wrapper">
          <div className="menu-nav">
            <b className="lorem">Science</b>
          </div>
        </button>
        <button className="frame-wrapper">
          <div className="menu-nav">
            <b className="lorem">Engineer</b>
          </div>
        </button>
        <button className="frame-wrapper">
          <div className="menu-nav">
            <b className="lorem">Industrial</b>
          </div>
        </button>
        <button className="frame-wrapper">
          <div className="menu-nav">
            <b className="lorem">Data</b>
          </div>
        </button>
        <button className="frame-wrapper">
          <div className="menu-nav">
            <b className="lorem">Designer</b>
          </div>
        </button>
        <button className="frame-wrapper">
          <div className="menu-nav">
            <b className="lorem">Developer</b>
          </div>
        </button>
        <button className="frame-wrapper">
          <div className="menu-nav">
            <b className="lorem">AI</b>
          </div>
        </button>
        <button className="frame-wrapper5">
          <div className="menu-nav">
            <b className="supporting-text">See more!</b>
          </div>
        </button>
      </div>
    </div>
    <div className="footer">
      <img className="logo-navbar-2" alt="" src="./assets/Logo Navbar2.png" />
      <div className="frame-parent">
        <div className="markunread-parent">
          <img className="markunread-icon" alt="" src="assetz/markunread.svg" />
          <div className="kontak">Kontak</div>
        </div>
        <div className="assignment-ind-parent">
          <img
            className="markunread-icon"
            alt=""
            src="assetz/assignment_ind.svg"
          />
          <div className="kontak">Tentang Kami</div>
        </div>
        <div className="markunread-parent">
          <img
            className="markunread-icon"
            alt=""
            src="assetz/announcement.svg"
          />
          <div className="kontak">Bantuan</div>
        </div>
      </div>
    </div>
    <div className="frame-group">
      <div className="card-artikel-parent">
        <div className="card-artikel">
          <img className="image-icon1" alt="" src="./assets/image1.png" />
          <div className="frame-parent1">
            <div className="mengenal-profesi-uiux-designe-parent">
              <div className="mengenal-profesi-uiux">
                Mengenal Profesi UI/UX Designer: Tugas, Skill, dan Karir
              </div>
              <div className="di-era-digital">
                Di era digital saat ini, tampilan dan pengalaman pengguna
                menjadi salah satu faktor utama kesuksesan sebuah produk
                digital, baik itu aplikasi, website, maupun software lainnya.
              </div>
            </div>
            <a
              href="artikel1.html"
              className="button"
              style={{ textDecoration: "none" }}
            >
              <div className="label">Selengkapnya</div>
            </a>
          </div>
        </div>
        <div className="card-artikel">
          <img className="image-icon1" alt="" src="./assets/image2.png" />
          <div className="frame-parent1">
            <div className="mengenal-profesi-uiux-designe-parent">
              <div className="mengenal-profesi-uiux">
                Data Analyst: Peran Penting dan Skill Wajib dalam Pengambilan
                Keputusan
              </div>
              <div className="di-era-digital">
                Profesi Data Analyst memiliki peran penting dalam membantu
                perusahaan membuat keputusan berdasarkan data yang akurat.
              </div>
            </div>
            <a
              href="artikel2.html"
              className="button"
              style={{ textDecoration: "none" }}
            >
              <div className="label">Selengkapnya</div>
            </a>
          </div>
        </div>
        <div className="card-artikel">
          <img className="image-icon1" alt="" src="./assets/image3.png" />
          <div className="frame-parent1">
            <div className="mengenal-profesi-uiux-designe-parent">
              <div className="mengenal-profesi-uiux">
                Digital Marketing Specialist: Memahami Tugas, Skill, dan Prospek
                di Era Digital
              </div>
              <div className="di-era-digital">
                Salah satu peran yang semakin penting dalam upaya bisnis untuk
                menjangkau pelanggan secara digital adalah Digital Marketing
                Specialist.
              </div>
            </div>
            <div className="button">
              <div className="label">Selengkapnya</div>
            </div>
          </div>
        </div>
      </div>
      <div className="program-artikel-parent">
        <div className="program-artikel">
          <img
            className="program-artikel-child"
            alt=""
            src="./assets/Frame 181.svg"
          />
          <div className="frame-parent4">
            <div className="apa-itu-program-jobready-cv-parent">
              <div className="apa-itu-program">
                Apa itu program JobReady CV?
              </div>
              <div className="bingung-gimana-cara">
                Bingung gimana cara bikin CV yang tepat dan sesuai sama posisi
                yang kamu lamar? JobReady CV bisa menjadi solusi dan jawaban
                kamu!
              </div>
            </div>
            <a href="mentoring.html" style={{ textDecoration: "none" }}>
              <div className="button3">
                <b className="supporting-text">Selengkapnya</b>
              </div>
            </a>
          </div>
        </div>
        <div className="frame-parent5">
          <div className="menu-nav">
            <div className="akses-e-learning-untuk">
              Akses E-learning Untuk Tingkatkan Kesiapan Karier Kamu!
            </div>
          </div>
          <div className="text-nav-wrapper">
            <div className="text-nav4">
              <div className="lihat-kumpulan-materi">
                Lihat kumpulan materi dan latihan soal yang dapat meningkatkan
                persiapan lamaran kamu supaya lebih matang dan berpeluang lebih
                besar diterima kerja!
              </div>
            </div>
          </div>
          <a href="e-learning.html" style={{ textDecoration: "none" }}>
            <div className="button4">
              <b className="supporting-text">E-Learning</b>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Artikel;
