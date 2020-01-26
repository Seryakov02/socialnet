import React, { useState, useEffect } from "react";

const ProfileStatus = props => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const deactivateMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = event => {
    setStatus(event.currentTarget.value);
  };

  return (
    <div>
      <b>Status: </b>
      {!editMode && (
        <span
          onDoubleClick={() => {
            setEditMode(true);
          }}
        >
          {props.status || "no status"}
        </span>
      )}
      {editMode && (
        <input
          onChange={onStatusChange}
          autoFocus={false}
          value={status}
          onBlur={deactivateMode}
        />
      )}
    </div>
  );
};

export default ProfileStatus;
