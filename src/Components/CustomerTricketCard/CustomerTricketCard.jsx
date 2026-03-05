import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

const CustomerTricketCard = ({tricket, setTricketStatus}) => {
    const {id,title,description,customer,priority,status,createdAt} = tricket;
    
      const handleTricketCard = () => {
        console.log("click tricket")
            setTricketStatus(prev => [...prev, tricket]);
    }
    return (
        <div onClick={handleTricketCard} className="card card-border bg-base-100 w-full">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{title}</h2>
          <div className={`badge badge-soft ${status === "Open" ? "badge-success" : "badge-warning"} gap-1"`}><GoDotFill/>{status}</div>
        </div>
        <p>
          {description}
        </p>
        <div className="card-actions flex justify-between items-center">
          <div className="flex gap-4">
            <span className="text-gray-300">#{id}</span>
            <span className={`${priority === "High" ? "text-green-600" : priority === "Medium" ? "text-yellow-500" : "text-red-500" }`}>{priority} Priority</span>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-300">{customer}</span>
            <div className="flex items-center gap-1 text-gray-300">
              <FaRegCalendar/>{createdAt}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CustomerTricketCard;