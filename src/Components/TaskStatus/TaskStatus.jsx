import React from 'react';
import TaskStatusCard from '../TaskStatusCard/TaskStatusCard';

const TaskStatus = ({tricketstatus}) => {
    return (
        <div>
            {
                tricketstatus.map((status) => (<TaskStatusCard status={status} key={status.id}/>))
            }
        </div>
    );
};

export default TaskStatus;