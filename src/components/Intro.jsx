import React from "react";
import profile_pic from "../img/IMG_6184_sq-crop.png";

function Intro() {
  return (
    <section className="intro">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Talon Jones</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Software Developer
      </p>
      <img src={profile_pic} alt="Talon Jones" className="intro__img" />
    </section>
  );
}

export default Intro;
