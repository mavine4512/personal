import React from "react";
import "./index.css";

function main() {
  const qualifications = [
    {
      id: 1,
      date: "Jan 2018 - Current",
      title: "Freelancer",
      subTitle: "Full stack web developer",
      description:
        "Engaged in developing minimalist websites that are responsive and interactive, working with small and big companies on a short and long term contract."
    },
    {
      id: 2,
      date: "Aug 2018 - Nov 2018",
      title: "Madison Groups LTD",
      subTitle: "ICT Office support ( Intern )",
      description:
        "I was engaged in a proper digital record management and data keeping, ensuring the security, well-being and integrity of the company’s record are intact without any external or internal compromise."
    },
    {
      id: 3,
      date: "July 2019 - Aug 2019",
      title: "NKCC Ltd",
      subTitle: "ICT Support",
      description:
        "NKCC - New Kenya Co-operative Creameries. Collaborated closely with the IT department to maintain and fix networking problems. Worked to fix computer hardware and software issues that arose during day to day operations."
    },
    {
      id: 4,
      date: "Sept 2016 - Dec 2019",
      title: "Technical University of Kenya.",
      subTitle: "Studies Diploma in Business Information Technology.",
      description:
        "Technical University of Kenya is a public university in Nairobi, Kenya. It was chartered in January 2013 by then-president Mwai Kibaki."
    }
  ];

  const skillset = ["PHP", "JavaScript", "ReactJs", "Angular"];

  return (
    <div className="main-container">
      <div className="main-left">
        <div className="profile-image"></div>
        <div className="profile-descript">
          <p className="profile-text">
            " I am a creative and fast learning information technology
            practitioner and developer with keen attention to details."
          </p>
          <h5 className="sub-title marginTop">Skillset</h5>
          <ul className="skillset">
            {skillset.map((skill, index) => (
              <li key={index} className="skillset-list">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="main-right">
        {qualifications.map(qualify => (
          <section key={qualify.id} className="qualifications">
            <h4 className="title">
              {qualify.title} - <span className="date">{qualify.date}</span>
            </h4>
            <h5 className="sub-title">{qualify.subTitle}</h5>
            <p className="description">{qualify.description}</p>
            <div className="divider"></div>
          </section>
        ))}
      </div>
      
    </div>
  );
}

export default main;
