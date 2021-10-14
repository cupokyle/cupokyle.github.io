import React from "react";
import PropTypes from "prop-types";

export default function Project({
  project: { id, title, state },
  onArchiveProject,
  onPinProject,
}) {
  return (
    <div className={`list-item ${state}`}>
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
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "PROJECT_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinProject(id)}>
            <span className={`icon-star`} />
          </a>
        )}
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
    /** Current state of the project */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the project to archived */
  onArchiveProject: PropTypes.func,
  /** Event to change the project to pinned */
  onPinProject: PropTypes.func,
};
