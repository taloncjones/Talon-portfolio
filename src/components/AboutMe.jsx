import React from "react";
import standing_pic from "../img/Talon-Redwoods.jpeg";

function AboutMe() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Software quality engineer & developer living in San Francisco
      </p>

      <div className="about-me__body">
        <p>
          I have <strong>over 9 years of QA experience</strong> in a variety of
          focuses. My early experience was Firmware (FW) focused, with
          involvement in AT&T's <em>HS17</em>, <em>BGW Modem</em>, and{" "}
          <em>SL3 & 5 Reverse-band LNBs</em>. I then transitioned to Software
          (SW), working on AT&T's Set-top Box (STB) software features - e.g.{" "}
          <em>4K Live/VOD</em> - and Disney's internal{" "}
          <em>Ad Management systems</em>. Since moving to San Francisco, I have
          been working on a variety of SW and FW projects related to{" "}
          <strong>EV Charging</strong>.
        </p>
        <p>
          Due to my interest in software development, I completed the{" "}
          <a
            href="https://confirm.udacity.com/UJGUNTA"
            className="nav__link body"
          >
            Full Stack Web Development Nanodegree
          </a>{" "}
          through Udacity in 2019 where I learned <strong>Python</strong> and{" "}
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
          grown as I gain more exposure to software development. While I have a
          personal interest in development and would be interested in expanding
          my career in that direction, I believe my current experience more
          closely aligns with a role geared towards organization and management.
          As such, I am currently{" "}
          <strong>pursuing a role in Technical Program Management</strong>.
        </p>
      </div>

      <img
        src={standing_pic}
        alt="Talon standing in the snow by a frozen lake"
        className="about-me__img"
      />
    </section>
  );
}

export default AboutMe;
