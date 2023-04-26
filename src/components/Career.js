import React, { useState, useEffect } from 'react';
import './Career.css';
import jobsDE from './jobs/de.json';
import jobsEN from './jobs/en.json';


const Career = (props) => {
  const { language, darkMode } = props;
  const [jsonData, setJsonData] = useState({});

  let fileToFetch = language === 'en' ? jobsEN : jobsDE;

  useEffect(() => {
    fileToFetch = language === 'en' ? jobsEN : jobsDE;
    setJsonData(fileToFetch);
  }, [language])

  const [expandedJobs, setExpandedJobs] = useState([]);

  const handleToggleExpand = (index) => {
    if (expandedJobs.includes(index)) {
      setExpandedJobs(expandedJobs.filter(item => item !== index));
    } else {
      setExpandedJobs([...expandedJobs, index]);
    }
  }

  return (
    <div className={darkMode ? 'career dark-mode' : 'career'}>
      <h1>{language === 'en' ? 'Career Opportunities' : 'Karrieremöglichkeiten'}</h1>
      <ul className='job-listing'>
        {jsonData["jobs"] && jsonData["jobs"].map((job, i) => (
          <li className='job' key={i}>
            <div className="title-wrapper" onClick={() => handleToggleExpand(i)}>
              <h2>{job.title}</h2>
              <button className="expand-button">{expandedJobs.includes(i) ? '-' : '+'}</button>
            </div>
            {expandedJobs.includes(i) && (
              <>
                <p><strong>{language === 'en' ? 'Requirements:' : 'Anforderungen:'}</strong></p>
                <ul>
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
                <p><strong>{language === 'en' ? 'Your Responsibilities:' : 'Ihre Aufgaben:'}</strong></p>
                <ul>
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                <p><strong>{language === 'en' ? 'Benefits of Working with Us:' : 'Ihre Vorteile bei uns:'}</strong></p>
                <ul>
                  {job.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Career;

