import projects from "../../data/projects";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from 'react';
import ConverterMarkdown from "../ConverterMarkdown/ConverterMarkdown";
import {Link} from 'react-router-dom';

const StudyCase = () => {
  const  {studyCaseSlug}  = useParams();
  const [currentProject, setCurrentProject] = useState(undefined);

  useEffect(() => {
    const foundProject = projects.find((project) => project.slug == studyCaseSlug);
    setCurrentProject(foundProject);
  }, [studyCaseSlug])

  return (

    <div className="info">
      <div className="content">
        {currentProject && (
          <>
          <ConverterMarkdown text={currentProject.title} />
          <ConverterMarkdown text={currentProject.description} />
          <ul>
            <li id="back"><Link to="/works"> Back </Link></li>
          </ul>
          </>
        )}
      </div>
    </div>
  )

}
export default StudyCase;

