import React from 'react';
import '../css/global.css';
import '../css/index.css';
import Navbar from '../Components/Elements/Navbar/Navbar';

const Review_porto = () => {
  return (
    <>
    <Navbar />
<div className="course-latihan-interview">
    {/* <div className="navbar">
      <img className="logo-navbar-1" alt="" src="./assetz/Logo Navbar1.png" />
      <div className="menu-nav">
        <div className="text-nav-parent">
          <div className="text-nav">
            <div className="lorem-ipsum">Mentoring</div>
          </div>
          <div className="text-nav">
            <div className="lorem-ipsum">E-Learning</div>
          </div>
          <div className="text-nav">
            <div className="lorem-ipsum">Artikel Karier</div>
          </div>
        </div>
      </div>
      <img className="iconaccount-circle" alt="" src="./assetz/icon.svg" />
    </div> */}
    <div className="footer">
      <img className="logo-navbar-1" alt="" src="./assetz/Logo Navbar2.png" />
      <div className="frame-parent">
        <div className="markunread-parent">
          <img
            className="markunread-icon"
            alt=""
            src="./assetz/markunread.svg"
          />
          <div className="kontak">Kontak</div>
        </div>
        <div className="assignment-ind-parent">
          <img
            className="markunread-icon"
            alt=""
            src="./assetz/assignment_ind.svg"
          />
          <div className="kontak">Tentang Kami</div>
        </div>
        <div className="markunread-parent">
          <img
            className="markunread-icon"
            alt=""
            src="./assetz/announcement.svg"
          />
          <div className="kontak">Bantuan</div>
        </div>
      </div>
    </div>
    <div className="frame-group">
      <div className="frame-container">
        <div className="frame-wrapper">
          <div className="text-nav-group">
            <div className="text-nav">
              <div className="lorem-ipsum3">WalkView Batch 5</div>
            </div>
            <div className="text-nav4">
              <div className="bangun-kepercayaan-diri">
                Bangun Kepercayaan Diri dan Kuasai Strategi Interview Terbaik
                untuk Sukses Kariermu di Chit-Chatview Batch 5!
              </div>
            </div>
          </div>
        </div>
        <div className="frame-div">
          <div className="batch-5-dimulai-pada-parent">
            <div className="batch-5-dimulai">Batch 5 dimulai pada:</div>
            <div className="batch-date">
              <img
                className="iconcalendar-month"
                alt=""
                src="./assetz/calendar_month.svg"
              />
              <div className="november-wrapper">
                <div className="november">30-31 November</div>
              </div>
            </div>
            <button onclick="showAlert()" className="button">
              <img
                className="iconalarm-add"
                alt=""
                src="./assetz/alarm_add.svg"
              />
              <div className="label">Ingatkan saya</div>
            </button>
          </div>
          <div className="kandidat-telah-terbantu-ditaha-parent">
            <div className="kandidat-telah-terbantu">
              1000+ Kandidat telah terbantu ditahap interview berkat
              chit-chatview!
            </div>
            <div className="assignment-ind-parent">
              <img className="frame-child" alt="" src="./assetz/star.svg" />
              <img className="frame-child" alt="" src="./assetz/star.svg" />
              <img className="frame-child" alt="" src="./assetz/star.svg" />
              <img className="frame-child" alt="" src="./assetz/star.svg" />
              <img
                className="frame-child"
                alt=""
                src="./assetz/star_half.svg"
              />
              <div className="div">4,9/5</div>
            </div>
          </div>
        </div>
      </div>
      <img className="ilustarsi-icon" alt="" src="./assetz/Ilustarsi.svg" />
    </div>
    <div className="text-nav-container">
      <div className="text-nav">
        <div className="informasi-kelas">Informasi Kelas</div>
      </div>
      <div className="frame-parent1">
        <div className="text-nav-parent1">
          <div className="text-nav6">
            <div className="informasi-kelas">Link Zoom</div>
          </div>
          <div className="text-nav7">
            <div className="lorem-ipsum5">Bit.ly/Zoom</div>
          </div>
        </div>
        <div className="text-nav-parent2">
          <div className="text-nav6">
            <div className="informasi-kelas">Rekaman kelas</div>
          </div>
          <div className="text-nav7">
            <div className="lorem-ipsum5">Bit.ly/RekamanKelas</div>
          </div>
        </div>
        <div className="text-nav-parent2">
          <div className="text-nav10">
            <div className="informasi-kelas">Guideline Kelas</div>
          </div>
          <div className="text-nav7">
            <div className="lorem-ipsum5">Bit.ly/GuidlineKelas</div>
          </div>
        </div>
        <div className="text-nav-parent4">
          <div className="text-nav10">
            <div className="informasi-kelas">Materi</div>
          </div>
          <div className="text-nav7">
            <div className="lorem-ipsum5">Bit.ly/Materi</div>
          </div>
        </div>
        <div className="text-nav-parent2">
          <div className="text-nav10">
            <div className="informasi-kelas">Simulasi Interview</div>
          </div>
          <div className="text-nav7">
            <div className="lorem-ipsum5">Bit.ly/SimulasiInterview</div>
          </div>
        </div>
        <div className="text-nav-parent4">
          <div className="text-nav10">
            <div className="informasi-kelas">Evaluasi</div>
          </div>
          <div className="text-nav7">
            <div className="lorem-ipsum5">Bit.ly/Evaluasi</div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Review_porto;

