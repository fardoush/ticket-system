import React from 'react';
import { toast } from 'react-toastify';



const TaskStatusCard = ({status,tricketstatus,setTricketStatus,resolved,setResolved}) => {
    const {id,title} = status;

    const handleComplete = () => {
      toast.success("Customer Tricket Completed!");
      setResolved([...resolved, status]);
      const remainingInprogress = tricketstatus.filter(item => item.id !== id)
      setTricketStatus(remainingInprogress);
      // setResolved(resolved)
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