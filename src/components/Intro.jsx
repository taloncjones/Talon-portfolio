import React from "react";
import profile_pic from "../img/Talon-Profile-cropped.jpeg";

function Intro() {
  return (
    <section className="intro">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Talon Jones</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">QA, Dev, TPM</p>
      <img src={profile_pic} alt="Talon Jones" className="intro__img" />
    </section>
  );
}

export default Intro;
