import React from 'react';
import TaskStatusCard from '../TaskStatusCard/TaskStatusCard';

const TaskStatus = ({tricketstatus,setTricketStatus,resolved,setResolved }) => {
    return (
        <div>
            {
                tricketstatus.map((status) => (<TaskStatusCard status={status} key={status.id} tricketstatus={tricketstatus} setTricketStatus={setTricketStatus} resolved={resolved} setResolved={setResolved}/>))
            }
        </div>
    );
};

export default TaskStatus;