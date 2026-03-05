import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CustomerTricket from "./Components/CustomerTricket/CustomerTricket";
import Header from "./Components/Header/Header";
import TaskStatus from "./Components/TaskStatus/TaskStatus";

const tricketPromise = fetch("/customerTricket.json").then((res) => res.json());

function App() {
  const [tricketstatus, setTricketStatus] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  return (
    <>
      <Header />
      <Banner tricketstatus={tricketstatus} resolved={resolved}/>

      <section className="lg:container w-full mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#334155] border-b-2 border-blue-400 pb-2 mb-6 inline-block w-full">
            Customer Tickets
          </h2>

          <Suspense
            fallback={<span className="loading loading-dots loading-xl"></span>}
          >
            <CustomerTricket
              tricketPromise={tricketPromise}
              tricketstatus={tricketstatus}
              setTricketStatus={setTricketStatus}
              inProgress={inProgress}
              setInProgress={setInProgress}
              resolved={resolved}
              setResolved={setResolved}
            />
          </Suspense>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-bold text-[#334155] mb-2">Task Status</h3>
          <TaskStatus
            tricketstatus={tricketstatus}
            setTricketStatus={setTricketStatus}
            inProgress={inProgress}
            setInProgress={setInProgress}
            resolved={resolved}
            setResolved={setResolved}
          />
                    <h3 className="text-xl font-bold text-[#334155] mb-2">Resolve Status</h3>


        </div>
      </section>
    </>
  );
}

export default App;
