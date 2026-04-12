import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  const fetchJobs = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const newJobs = await response.json();

    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer
        jobs={jobs}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <JobInfo jobs={jobs} activeTab={activeTab} />
    </section>
  );
};
export default App;
