import React from "react";
import PropTypes from "prop-types";

import Project from "./Project";

export default function ProjectList({
  loading,
  projects,
  onPinProject,
  onArchiveProject,
}) {
  const events = {
    onPinProject,
    onArchiveProject,
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (projects.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no projects</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }
  const projectsInOrder = [
    ...projects.filter((p) => p.state === "PROJECT_PINNED"),
    ...projects.filter((p) => p.state !== "PROJECT_PINNED"),
  ];

  return (
    <div className="list-items">
      {projects.map((project) => (
        <Project key={project.id} project={project} {...events} />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  /** Checks if it's in loading state */
  loading: PropTypes.bool,
  /** The list of projects */
  projects: PropTypes.arrayOf(Project.propTypes.project).isRequired,
  /** Event to change the project to pinned */
  onPinProject: PropTypes.func,
  /** Event to change the project to archived */
  onArchiveProject: PropTypes.func,
};
ProjectList.defaultProps = {
  loading: false,
};
