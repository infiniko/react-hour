import React from "react";
import Duties from "./Duties";

const JobInfo = ({ jobs, activeTab }) => {
  const { company, dates, duties, title } = jobs[activeTab];
  return (
    <article>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};

export default JobInfo;
