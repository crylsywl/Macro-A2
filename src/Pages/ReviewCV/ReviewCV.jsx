import React from 'react';
import './ReviewCV1.css';
import './ReviewCV2.css';
import Navbar from '../../Components/Elements/Navbar/Navbar';

import { Link } from 'react-router-dom';
const ReviewCV  = () => {
    return(
    <>
    <Navbar/>
    <div className="course-review-porto">
    {/* <div className="navbar">
      <div className="logo-wrapper">
        <img
          src="./assets/d4f1dbf6ca01e9d803f4eff91fefbe42.png"
          alt="rectangle"
          width={177}
          height={44}
          className="c_course-review-cv-rectangle1"
        />
      </div>
      <div className="menu-nav">
        <div className="text-nav-parent">
          <div className="logo-wrapper">
            <div className="lorem-ipsum">Mentoring</div>
          </div>
          <div className="logo-wrapper">
            <div className="lorem-ipsum">E-Learning</div>
          </div>
          <div className="logo-wrapper">
            <div className="lorem-ipsum">Artikel Karier</div>
          </div>
        </div>
      </div>
      <div className="iconaccount-circle-wrapper">
        <img
          src="./assets/cf3a2d100aef31edaffb014339c96adf.svg"
          alt="instance"
          width={36}
          height={36}
          className="c_course-review-cv-instance21"
        />
      </div>
    </div> */}
    <div className="footer">
      <img
        src="./assets/8171440d4adf4fef703fa31066f5c202.png"
        alt="rectangle"
        width={177}
        height={44}
        className="c_course-review-cv-rectangle"
      />
      <div className="frame-parent">
        <div className="markunread-parent">
          <img className="markunread-icon" alt="" src="./assets/kontak.png" />
        </div>
        <div className="assignment-ind0-parent">
          <img
            className="markunread-icon"
            alt=""
            src="./assets/tentang kami.png"
          />
        </div>
        <div className="markunread-parent">
          <img className="markunread-icon" alt="" src="./assets/bantuan.png" />
        </div>
      </div>
    </div>
    <div className="text-nav-group">
      <div className="logo-wrapper">
        <div className="informasi-kelas">Informasi Kelas</div>
      </div>
      <div className="frame-group">
        <div className="text-nav-container">
          <div className="text-nav4">
            <div className="informasi-kelas">Link Zoom</div>
          </div>
          <div className="text-nav5">
            <div className="lorem-ipsum4">Bit.ly/Zoom</div>
          </div>
        </div>
        <div className="frame-div">
          <div className="text-nav4">
            <div className="informasi-kelas">Rekaman kelas</div>
          </div>
          <div className="text-nav5">
            <div className="lorem-ipsum4">Bit.ly/RekamanKelas</div>
          </div>
        </div>
        <div className="frame-div">
          <div className="text-nav8">
            <div className="informasi-kelas">Guideline Kelas</div>
          </div>
          <div className="text-nav5">
            <div className="lorem-ipsum4">Bit.ly/GuidlineKelas</div>
          </div>
        </div>
        <div className="text-nav-parent2">
          <div className="text-nav8">
            <div className="informasi-kelas">Materi</div>
          </div>
          <div className="text-nav5">
            <div className="lorem-ipsum4">Bit.ly/Materi</div>
          </div>
        </div>
        <div className="frame-div">
          <div className="text-nav8">
            <div className="informasi-kelas">Tamplate CV</div>
          </div>
          <div className="text-nav5">
            <div className="lorem-ipsum4">Bit.ly/TamplateCV</div>
          </div>
        </div>
        <div className="text-nav-parent2">
          <div className="text-nav8">
            <div className="informasi-kelas">Evaluasi</div>
          </div>
          <div className="text-nav5">
            <div className="lorem-ipsum4">Bit.ly/Evaluasi</div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-nav-parent5">
      <div className="text-nav16">
        <div className="optimalkan-portofolio-kamu">JobReady CV Batch 5</div>
      </div>
      <div className="text-nav17">
        <div className="tingkatkan-portofolio-kamu">
          Review CV dilakukan oleh HRD Profesional yang akan membantu kamu
          berpeluang mendapatkan pekerjaan!
        </div>
      </div>
      <div className="frame-container">
        <div className="batch-5-dimulai-pada-parent">
          <div className="batch-5-dimulai">Batch 5 dimulai pada:</div>
          <div className="batch-date">
            <img
              src="./assets/4a6dd7108388c6a1237538785f86d187.svg"
              alt="instance"
              width={24}
              height={24}
              className="c_course-review-cv-instance"
            />
            <div className="november-wrapper">
              <div className="november">30-31 November</div>
            </div>
          </div>
          <div className="button">
            <img
              src="./assets/bcc3571a14d18f3c0e58db453be8abaf.svg"
              alt="instance"
              width="11.25"
              height="11.25"
              className="c_course-review-cv-instance02"
            />
            <div className="label">Ingatkan saya</div>
          </div>
        </div>
        <div className="portopolish-telah-membantu-ban-parent">
          <div className="portopolish-telah-membantu">
            1000+ CV telah direview dan mendapatkan pekerjaan pertama mereka!
          </div>
          <div className="assignment-ind-parent">
            <img className="frame-child" alt="" src="./assets/bintang.svg" />
            <div className="div">4,9/5</div>
          </div>
        </div>
      </div>
      <img
        className="ilustrasi-icon"
        alt=""
        src="./assets/8784d33a1c0fd4e6f26e32577e14f836.svg"
      />
    </div>
  </div>
  </>
    );
};

export default ReviewCV;
  
