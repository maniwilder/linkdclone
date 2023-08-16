import { Button, Image } from "antd";
import React from "react";
import { HiOutlinePencil } from "react-icons/hi";
import "../profileCard/Profilecard.scss";
import Mypic from '../sources/mypic.jpg'

export default function ProfileCard() {

  return (
    <>
      <div className="profile-card">
          <div className="edit-btn">
            <HiOutlinePencil className="edit-icon" />
          </div>
          
        <div className="profile-info">
          <div>
            <Image
              className="profile-image"
              src={Mypic}
              alt="profile-image"
            />
            <h3 className="userName">
              Manikandan Ashokkumar
            </h3>
            <p className="heading">
              React JS Developer
            </p>
              <p className="location">
              Chennai, TamilNadu
              </p>
              <></>
          </div>
          <div className="right-info">
            <p className="college">
              Dr. MGR university
            </p>
            <p className="company">
              Outstager consultancy services
            </p>
          </div>
        </div>
        <p className="about-me">
        <h3>About me</h3>
        Passionate React.js Developer dedicated to crafting seamless user experiences through efficient and elegant frontend solutions. With a creative mindset and strong problem-solving skills, I thrive on turning design concepts into interactive reality. Committed to continuous learning and staying up-to-date with emerging trends, I'm excited to contribute innovative ideas to any project.
        </p>
          <p className="skills">
          <h3>Skills</h3>
           HTML, CSS, SCSS, Javascript, React Js
          </p>
          <div style={{display:'flex', gap:'20px'}}>
            <Button type="primary" shape="round" color="rgb(34,94,159)">
                Open to
            </Button>
            <Button shape="round" >Add Profile section</Button>
            <Button shape="round" >More</Button>
          </div>
      </div>
    </>
  );
}