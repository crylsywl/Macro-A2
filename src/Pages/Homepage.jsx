import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Homepage.css';

const Homepage = () => {
  return (
    <div>
    <div className="c_homepage-frame">
      <div className="c_homepage-frame01">
        <div className="c_homepage-frame02">
          <div className="c_homepage-frame03">
            <div className="c_homepage-text">
              <p className="c_homepage-text01">
                Siapkan Dirimu untuk Karier Impian dengan Persiapan yang Tepat!
              </p>
            </div>
          </div>
          <div className="c_homepage-frame04">
            <div className="c_homepage-text02">
              <p className="c_homepage-text03">
                Mulai dari CV yang menarik, portfolio yang meyakinkan, hingga
                latihan interview yang relevan.
              </p>
            </div>
          </div>
          <div className="c_homepage-instance">
            <div className="c_homepage-text04">
              <p className="c_homepage-text05 ">Gabung Sekarang</p>
            </div>
          </div>
          <div className="c_homepage-frame05">
            <div className="c_homepage-frame06">
              <img
                src="./assets/2af4708081d75fc2e8771152df68accd.png"
                alt="ellipse"
                width={41}
                height={41}
                className="c_homepage-ellipse"
              />
              <img
                src="./assets/6f03f65e2303f165bd2e1d9f0c3e7b54.png"
                alt="ellipse"
                width={41}
                height={41}
                className="c_homepage-ellipse1"
              />
              <img
                src="./assets/e903adf5512e45d56cf2b13ac0a66be2.png"
                alt="ellipse"
                width={41}
                height={41}
                className="c_homepage-ellipse2"
              />
              <img
                src="./assets/3c0b2a75cc819b8ccb26068700184d74.png"
                alt="ellipse"
                width={41}
                height={41}
                className="c_homepage-ellipse3"
              />
            </div>
            <div className="c_homepage-frame07">
              <div className="c_homepage-text06">
                <p className="c_homepage-text07">Dipercaya oleh 100k orang</p>
              </div>
              <div className="c_homepage-frame08">
                <div className="c_homepage-frame09">
                  <img
                    src="./assets/80181bee648c72f8a066f8308927b1fb.svg"
                    alt="instance"
                    width={24}
                    height={24}
                    className="c_homepage-instance01"
                  />
                  <img
                    src="./assets/1f4eee9606763756fcf19e002721374b.svg"
                    alt="instance"
                    width={24}
                    height={24}
                    className="c_homepage-instance02"
                  />
                  <img
                    src="./assets/7dc32b64db95930496232a948a63200c.svg"
                    alt="instance"
                    width={24}
                    height={24}
                    className="c_homepage-instance03"
                  />
                  <img
                    src="./assets/730036ac34d768b5222c5870aeb6f418.svg"
                    alt="instance"
                    width={24}
                    height={24}
                    className="c_homepage-instance04"
                  />
                  <img
                    src="./assets/e5f8744aadb8c92cfcbaa754fe9b972c.svg"
                    alt="instance"
                    width={24}
                    height={24}
                    className="c_homepage-instance05"
                  />
                </div>
                <div className="c_homepage-text08">
                  <p className="c_homepage-text09"> 4.5/5 (50k Ulasan)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/b897c6e534d6a4af1462fd074cc678eb.png"
          alt="rectangle"
          width={587}
          height={997}
          className="c_homepage-rectangle"
        />
      </div>
      <div className="c_homepage-frame17">
        <div className="c_homepage-instance12">
          <Link to="/mentoring" style={{ textDecoration: "none" }}>
            <div className="c_homepage-frame18">
              <img
                src="./assets/4.png"
                alt="instance"
                width={147}
                height={147}
                z="c_homepage-instance13"
              />
              <div className="c_homepage-text30">
                <p className="c_homepage-text31">Persiapan Karier</p>
              </div>
              <div className="c_homepage-text32">
                <p className="c_homepage-text33">
                  Dapatkan panduan lengkap untuk fresh graduate, mulai dari
                  review CV, peningkatan portfolio, hingga latihan interview.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="c_homepage-instance14">
          <a href="Course.jsx" style={{ textDecoration: "none" }}>
            <div className="c_homepage-frame19">
              <img
                src="./assets/3.png"
                alt="instance"
                width={147}
                height={147}
                className="c_homepage-instance15"
              />
              <div className="c_homepage-text34">
                <p className="c_homepage-text35">Latihan Interview</p>
              </div>
              <div className="c_homepage-text36">
                <p className="c_homepage-text37">
                  Latihan interview yang dirancang untuk mempersiapkan kamu
                  menghadapi pertanyaan sulit dan tampil percaya diri.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="c_homepage-instance16">
          <div className="c_homepage-frame20">
            <img
              src="./assets/2.png"
              alt="instance"
              width={147}
              height={147}
              className="c_homepage-instance17"
            />
            <div className="c_homepage-text38">
              <p className="c_homepage-text39">Membangun Portfolio</p>
            </div>
            <div className="c_homepage-text40">
              <p className="c_homepage-text41">
                Bangun portfolio yang menonjolkan keahlianmu, membantu recruiter
                melihat potensimu sebagai fresh graduate.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
      <br /> <br /> <br />
      <div className="c_homepage-frame10">
        <div className="c_homepage-text10">
          <p
            className="c_homepage-text11"
            style={{ textDecoration: "underline" }}
          >
            Program Kami
          </p>
        </div>{" "}
        <br />
        <div className=" c_homepage-instance06">
          <div className="c_homepage-frame11">
            <img
              src="./assets/d90b046d1db20e58f20f3ced86dc2633.png"
              alt="rectangle"
              width="249.90283203125"
              height="274.0518798828125"
              className="c_homepage-rectangle01"
            />
            <img
              src="./assets/81b956e75a39a65870afa7eeedbee642.png"
              alt="rectangle"
              width="249.90283203125"
              height="274.0518798828125"
              className="c_homepage-rectangle02"
            />
            <img
              src="./assets/92840244c99fdb8a5ef886fc569cbe17.png"
              alt="rectangle"
              width={217}
              height="246.846923828125"
              className="c_homepage-rectangle03"
            />
          </div>
          <div className="c_homepage-frame12">
            <div className="c_homepage-text12">
              <p className="c_homepage-text13">Mentoring</p>
            </div>
            <div className="c_homepage-text14">
              <p className="c_homepage-text15">
                Butuh feedback langsung untuk CV, portfolio, atau interview?
                Dengan Mentoring Langsung, kamu bisa belajar dan berlatih
                bersama mentor berpengalaman melalui sesi Zoom pribadi.
                Tingkatkan peluangmu diterima bekerja dengan panduan yang tepat!
              </p>
            </div>
            <a href="mentoring.html" style={{ textDecoration: "none" }}>
              <div className="c_homepage-instance07">
                <div className="c_homepage-text16">
                  <p className="c_homepage-text17">Lihat lainnya</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="c_homepage-instance08">
          <div className="c_homepage-frame13">
            <div className="c_homepage-text18">
              <p className="c_homepage-text19">E-Learning</p>
            </div>
            <div className="c_homepage-text20">
              <p className="c_homepage-text21">
                Persiapan karier kini lebih mudah! Kelas Persiapan Kerja
                menyediakan materi lengkap dari cara membuat CV dan portfolio
                yang menarik, hingga strategi menghadapi interview. Semuanya
                disusun agar kamu siap bersaing di dunia kerja.
              </p>
            </div>
            <a href="e-learning.html" style={{ textDecoration: "none" }}>
              <div className="c_homepage-instance09">
                <div className="c_homepage-text22">
                  <p className="c_homepage-text23">Lihat lainnya</p>
                </div>
              </div>
            </a>
          </div>
          <div className="c_homepage-frame14">
            <img
              src="./assets/9b9e8d0df138fb3320e5c53103e28d91.png"
              alt="rectangle"
              width="249.90283203125"
              height="274.0518798828125"
              className="c_homepage-rectangle04"
            />
            <img
              src="./assets/626ee17e44470f0cbb92a1f834540413.png"
              alt="rectangle"
              width="249.90283203125"
              height="274.0518798828125"
              className="c_homepage-rectangle05"
            />
            <img
              src="./assets/c22225fc6853ef0dac520aeef43dbf86.png"
              alt="rectangle"
              width={217}
              height="246.846923828125"
              className="c_homepage-rectangle06"
            />
          </div>
        </div>
        <div className="c_homepage-instance10">
          <div className="c_homepage-frame15">
            <img
              src="./assets/d22c1941236c4eafc818d63d2c20363d.png"
              alt="rectangle"
              width="249.90283203125"
              height="274.0517578125"
              className="c_homepage-rectangle07"
            />
            <img
              src="./assets/0b172978907140093add454f3420eb0f.png"
              alt="rectangle"
              width="249.90283203125"
              height="274.0518798828125"
              className="c_homepage-rectangle08"
            />
            <img
              src="./assets/fc16de460fcf87e55a67c05edef17ce0.png"
              alt="rectangle"
              width={217}
              height="246.846923828125"
              className="c_homepage-rectangle09"
            />
          </div>
          <div className="c_homepage-frame16">
            <div className="c_homepage-text24">
              <p className="c_homepage-text25">Artikel Karier</p>
            </div>
            <div className="c_homepage-text26">
              <p className="c_homepage-text27">
                Ingin tahu tips dan trik terbaru dalam mencari kerja? Jelajahi
                Artikel Karier kami yang penuh dengan wawasan praktis,
                inspirasi, dan strategi khusus untuk fresh graduates. Temukan
                jawabannya dan langkah terbaik untuk karier impianmu!
              </p>
            </div>
            <a href="">
              <div className="c_homepage-instance11">
                <div className="c_homepage-text28">
                  <p className="c_homepage-text29">Lihat lainnya</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="c_homepage-frame21">
        <div className="c_homepage-text42">
          <p
            className="c_homepage-text43"
            style={{ textDecoration: "underline" }}
          >
            Mentor Kami
          </p>
        </div>
        <div className="c_homepage-instance18">
          <div className="c_homepage-instance19">
            <img
              src="./assets/9a5c3dbedd9cd150dce2fad16824e83c.png"
              alt="Tiara Dewi"
              width={223}
              height={223}
              className="c_homepage-rectangle10"
            />
            <div className="c_homepage-frame22">
              <div className="c_homepage-text44">
                <p className="c_homepage-text45">Tiara Dewi</p>
                <p className="c_homepage-text46">CV Consultant</p>
              </div>
            </div>
          </div>
          <div className="c_homepage-instance20">
            <img
              src="./assets/e2d70b489cd4059927624391005518e5.png"
              alt="Raka Nugraha"
              width={223}
              height={223}
              className="c_homepage-rectangle11"
            />
            <div className="c_homepage-frame25">
              <div className="c_homepage-text48">
                <p className="c_homepage-text49">Raka Nugraha</p>
                <p className="c_homepage-text50">Portfolio Advisor</p>
              </div>
            </div>
          </div>
          <div className="c_homepage-instance21">
            <img
              src="./assets/1a4f2588cd42888746170f2ececae9a6.png"
              alt="Nadia Kurnia"
              width={223}
              height={223}
              className="c_homepage-rectangle12"
            />
            <div className="c_homepage-frame28">
              <div className="c_homepage-text52">
                <p className="c_homepage-text53">Nadia Kurnia</p>
                <p className="c_homepage-text54">HR Specialist</p>
              </div>
            </div>
          </div>
          <div className="c_homepage-instance22">
            <img
              src="./assets/f6170352c0a5de11d997097879e1842d.png"
              alt="Maya Putri"
              width={223}
              height={223}
              className="c_homepage-rectangle13"
            />
            <div className="c_homepage-frame31">
              <div className="c_homepage-text56">
                <p className="c_homepage-text57">Maya Putri</p>
                <p className="c_homepage-text58">Portfolio Advisor</p>
              </div>
            </div>
          </div>
          {/* Gambar pemisah */}
          <img
            src="./assets/6da5e5a227a61d8fe598d452a5236a94.svg"
            alt="divider"
            className="c_homepage-instance25"
          />
        </div>
      </div>{" "}
      <br /> <br /> <br />
      <div className="c_homepage-instance26">
        <div className="c_homepage-frame40">
          <footer className="footer">
            <img className="logo-navbar" src="assets/Logo Navbar 2.svg" />
            <div className="frame-14">
              <div className="frame-15">
                <img className="img-2" src="assets/markunread.svg" />
                <div className="text-wrapper-4">Kontak</div>
              </div>
              <div className="frame-15">
                <img className="img-2" src="assets/assignment_ind.svg" />
                <div className="text-wrapper-5">Tentang Kami</div>
              </div>
              <div className="frame-15">
                <img className="img-2" src="assets/announcement.svg" />
                <div className="text-wrapper-4">Bantuan</div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div className="c_homepage-instance27">
        <div className="c_homepage-frame41">
          <div className="c_homepage-text70">
            <a href="homepage.html">
              <img src="assets/Logo Navbar 1.png" alt="" />
            </a>
          </div>
        </div>
        <div className="c_homepage-instance28">
          <div className="c_homepage-frame42">
            <div className="c_homepage-instance29">
              <div className="c_homepage-text72">
                <a
                  href="mentoring.html"
                  className="c_homepage-text73"
                  style={{ textDecoration: "none", fontSize: 16 }}
                >
                  Mentoring
                </a>
              </div>
            </div>
            <div className="c_homepage-instance30">
              <div className="c_homepage-text74">
                <a
                  href="e-learning.html"
                  className="c_homepage-text75"
                  style={{ textDecoration: "none", fontSize: 16 }}
                >
                  E-Learning
                </a>
              </div>
            </div>
            <div className="c_homepage-instance31">
              <div className="c_homepage-text76">
                <a
                  href="artikel.html"
                  className="c_homepage-text77"
                  style={{ textDecoration: "none", fontSize: 16 }}
                >
                  Artikel Karier
                </a>
              </div>
            </div>
          </div>
        </div>
        <a href="login.html">
          <img
            src="./assets/4095d9d92b3c0ef33102043dddbd26ee.svg"
            href=""
            alt="instance"
            width={36}
            height={36}
            className="c_homepage-instance32"
          />
        </a>
      </div>
    </div>
  </div>
  );
};

export default Homepage;
