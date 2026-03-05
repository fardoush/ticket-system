import React from 'react';

const TaskStatusCard = ({status}) => {
    const {title} = status;

    const handleComplete = () => {
      console.log("Complete Btn Click")
    }
    return (
        <div className="card w-full bg-base-100 card-xs shadow-sm">
  <div className="card-body">
    <h2 className="card-title text-xl mb-6">{title}</h2>
    <div className=" card-actions">
      <button onClick={handleComplete} className="btn btn-wide btn-success">Completed</button>
    </div>
  </div>
</div>
    );
};

export default TaskStatusCard;