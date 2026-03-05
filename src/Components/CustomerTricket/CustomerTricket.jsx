import React, { use } from "react";
import CustomerTricketCard from "../CustomerTricketCard/CustomerTricketCard";

const CustomerTricket = ({tricketPromise,tricketstatus,setTricketStatus}) => {
    const tricketData = use(tricketPromise);
    // console.log(tricketData);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {
            tricketData.map((tricket) => <CustomerTricketCard tricket={tricket} key={tricket.id} tricketstatus={tricketstatus} setTricketStatus={setTricketStatus}></CustomerTricketCard>)
        }

    </div>
  );
};

export default CustomerTricket;
