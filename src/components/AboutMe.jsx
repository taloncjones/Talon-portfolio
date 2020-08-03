import React from "react";
import standing_pic from "../img/IMG_5992_crop.png";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Software quality engineer & developer based out of LA
      </p>

      <div className="about-me__body">
        <p>
          I have <strong>over 6 years of QA experience</strong> in a variety of
          focuses. While a majority of my experience has been with Set-top Box
          (STB) software features - e.g. <em>4K Live/VOD</em> - I have been
          invovled in a number of hardware and network based projects, notably
          the <em>HS17</em>, <em>BGW Modem</em>, and{" "}
          <em>SL3 & 5 Reverse-band LNBs</em>.
        </p>
        <p>
          Due to my interest in software development, I completed the{" "}
          <strong>Full Stack Web Development Nanodegree</strong> through Udacity{" "}
          in 2019 where I learned <strong>Python</strong> and{" "}
          <strong>SQL</strong>, and reinforced my knowledge of{" "}
          <strong>Javascript</strong>. Since then, I have been creating a
          variety of personal projects to learn new tools and frameworks - e.g.{" "}
          <strong>React</strong> and <strong>Selenium</strong> - and to
          strengthen my weakpoints. See{" "}
          <a href="#work" className="nav__link body">
            My Work
          </a>{" "}
          for some recent examples.
        </p>
        <p>
          I have always enjoyed building things, and that interest has only
          grown as I gain more exposure to software development. As such, I am{" "}
          <strong>now pursuing software development</strong> as a career and am
          looking for an opportunity to gain professional development
          experience.
        </p>
      </div>

      <img
        src={standing_pic}
        alt="Talon at a fountain"
        className="about-me__img"
      />
    </section>
  );
}

export default AboutMe;
