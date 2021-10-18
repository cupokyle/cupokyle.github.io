import React from "react";
import PropTypes from "prop-types";
import "./project.css";

export default function Project({
  project: { id, title, projectUrl, projectImgUrl, state },
  onArchiveProject,
  onPinProject,
}) {
  return (
    <div className={`listItem ${state}`}>
      <div className="title">
        <label className="checkbox">
          <input
            type="checkbox"
            defaultChecked={state === "PROJECT_ARCHIVED"}
            disabled={true}
            name="checked"
          />
          <span
            className="checkbox-custom"
            onClick={() => onArchiveProject(id)}
          />
        </label>
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
        <div className="actions" onClick={(event) => event.stopPropagation()}>
          {state !== "PROJECT_ARCHIVED" && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a onClick={() => onPinProject(id)}>
              <span className={`icon-star`} />
            </a>
          )}
        </div>
      </div>
      <div className="projectImage">
        <a href={projectUrl}>
          <img src={projectImgUrl} alt="project thumbnail" />
        </a>
      </div>
    </div>
  );
}

Project.propTypes = {
  /** Composition of the project */
  project: PropTypes.shape({
    /** Id of the project */
    id: PropTypes.string.isRequired,
    /** Title of the project */
    title: PropTypes.string.isRequired,
    /** URL for the project */
    projectUrl: PropTypes.string.isRequired,
    /** Image for the project */
    projectImgUrl: PropTypes.string.isRequired,
    /** Current state of the project */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the project to archived */
  onArchiveProject: PropTypes.func,
  /** Event to change the project to pinned */
  onPinProject: PropTypes.func,
};
