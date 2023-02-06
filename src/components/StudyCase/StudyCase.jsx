import projects from "../../data/projects";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from 'react';
import ConverterMarkdown from "../ConverterMarkdown/ConverterMarkdown";

const StudyCase = () => {
  const  {studyCaseSlug}  = useParams();
  const [currentProject, setCurrentProject] = useState(undefined);

  useEffect(() => {
    const foundProject = projects.find((project) => project.slug == studyCaseSlug);
    setCurrentProject(foundProject);
  }, [studyCaseSlug])

  return (
    // Vérification si currentBook est défini avant de l'afficher
    <div className="info">
      {currentProject && (
        <>
        <ConverterMarkdown text={currentProject.title} />
        <ConverterMarkdown text={currentProject.description} />
        </>
      )}
    </div>
  )

}
export default StudyCase;

