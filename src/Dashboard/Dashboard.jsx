import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import { useSelector } from "react-redux";
import { getCspm, getCwpp, getRegistry } from "./selectors.js";
import AddWidgetModal from "./components/AddWidgetModal.jsx";
import { PieChart } from "react-minimal-pie-chart";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const cspmData = useSelector(getCspm);
  const cwppData = useSelector(getCwpp);
  const registryData = useSelector(getRegistry);

  const onCloseModal = () => {
    setModalData(null);
    setIsModalOpen(false);
  };

  const onAddCspm = () => {
    setModalData(cspmData);
    setIsModalOpen(true);
  };
  const onAddCwpp = () => {
    setModalData(cwppData);
    setIsModalOpen(true);
  };
  const onAddRegistry = () => {
    setModalData(registryData);
    setIsModalOpen(true);
  };

  return (
    <main className="h-screen w-[100vw] bg-white">
      <Navbar />
      <section className="overflow-y-auto bg-slate-200">
        <Header />
        <div className="px-8">
          <section className="">
            <h3 className="font-semibold mb-2">{cspmData?.title}</h3>
            <div className="flex mb-4 overflow-x-auto">
              {cspmData?.tiles?.map?.(({ id, title, show, dataPoints }) => {
                if (!show) {
                  return null;
                }
                return (
                  <div
                    key={id}
                    className="flex-shrink-0 h-56 w-96 mr-4 rounded-md p-2 bg-white">
                    <h4 className="font-semibold mb-2">{title}</h4>
                    <div className="flex">
                      <div className="h-36 w-36">
                        <PieChart
                          data={dataPoints}
                          startAngle={90}
                          lineWidth={30}
                        />
                      </div>
                      <div className="flex-1 flex flex-col pl-6 justify-center">
                        {dataPoints?.map?.(({ title, value, color }) => {
                          return (
                            <div className="flex items-center">
                              <div
                                style={{ background: color }}
                                className="h-2 w-2 rounded-sm mr-2"
                              />
                              <p className="text-sm text-gray-800 mr-1">
                                {title}{" "}
                              </p>
                              <p className="text-sm text-gray-800 mr-1">
                                ({value})
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex-shrink-0 h-56 w-96 mr-4 rounded-md p-2 bg-white flex items-center justify-center">
                <button
                  className="p-1 rounded border-gray-300 text-gray-500 text-sm border-[1px]"
                  onClick={onAddCspm}>
                  + Add Widget
                </button>
              </div>
            </div>
          </section>
          <section>
            <h3 className="font-semibold mb-2">{cwppData?.title}</h3>
            <div className="flex mb-4 overflow-x-auto">
              {cwppData?.tiles?.map?.(({ id, title, show }) => {
                if (!show) {
                  return null;
                }
                return (
                  <div
                    key={id}
                    className="flex-shrink-0 h-56 w-96 mr-4 rounded-md p-2 bg-white flex flex-col">
                    <h4 className="font-semibold mb-2">{title}</h4>
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <span>
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 122.88 106.5"
                          height={40}
                          className="fill-gray-400">
                          <defs></defs>
                          <title>chart</title>
                          <path
                            class="cls-1"
                            d="M19.39,64.84v39.84a1.84,1.84,0,0,1-1.83,1.82H1.83A1.83,1.83,0,0,1,0,104.68V64.84ZM0,51.83,41.59,15.44c9.21,9,18.14,19.93,27.25,28.93L102.07,11,91.37.28,122.88,0V31.78L112.61,21.51c-7.37,7.47-24.8,23.92-32.17,31.3-9.33,9.32-13.78,9.49-23.1.17L41.59,35.46,23.13,51.83ZM114.37,38.69v66a1.84,1.84,0,0,1-1.82,1.82H96.81A1.84,1.84,0,0,1,95,104.68V57.29c3-2.91,6.5-6.29,10.07-9.73l7.45-7.17a24.16,24.16,0,0,1,1.87-1.7ZM82.71,68.34v36.34a1.84,1.84,0,0,1-1.83,1.82H65.15a1.84,1.84,0,0,1-1.83-1.82V72.22a22.48,22.48,0,0,0,5.73.63,24,24,0,0,0,13.66-4.51Zm-31.66-3v39.29a1.84,1.84,0,0,1-1.83,1.82H33.48a1.83,1.83,0,0,1-1.82-1.82V62q.48-.36.93-.75l7.86-7,6.34,7,.49.51q1.92,1.93,3.77,3.52Z"
                          />
                        </svg>
                      </span>
                      <p className="text-gray-600 mt-2 text-sm">
                        No Graph Data available
                      </p>
                    </div>
                  </div>
                );
              })}
              <div className="flex-shrink-0 h-56 w-96 mr-4 rounded-md p-2 bg-white flex items-center justify-center">
                <button
                  className="p-1 rounded border-gray-300 text-gray-500 text-sm border-[1px]"
                  onClick={onAddCwpp}>
                  + Add Widget
                </button>
              </div>
            </div>
          </section>
          <section>
            <h3 className="font-semibold mb-2">{registryData?.title}</h3>
            <div className="flex mb-4 overflow-x-auto">
              {registryData?.tiles?.map?.(({ id, title, show }) => {
                if (!show) {
                  return null;
                }
                return (
                  <div
                    key={id}
                    className="flex-shrink-0 h-56 w-96 mr-4 rounded-md p-2 bg-white">
                    <h4 className="font-semibold mb-2">{title}</h4>
                  </div>
                );
              })}
              <div className="flex-shrink-0 h-56 w-96 mr-4 rounded-md p-2 bg-white flex items-center justify-center">
                <button
                  className="p-1 rounded border-gray-300 text-gray-500 text-sm border-[1px]"
                  onClick={onAddRegistry}>
                  + Add Widget
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
      <AddWidgetModal
        isOpen={isModalOpen}
        sectionData={modalData}
        closeModal={onCloseModal}
      />
    </main>
  );
};

export default Dashboard;
