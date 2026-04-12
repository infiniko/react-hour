import React from "react";

const BtnContainer = ({ jobs, setActiveTab, activeTab }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            className={`job-btn ${activeTab === index ? "active-btn" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
