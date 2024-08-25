import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { addCspmTile, addCwppTile, addRegistryTile } from "../actions";

const portalWrapper = (jsx) => createPortal(jsx, document.body);

const getActionForKeys = (key) => {
  if (key === "registry") {
    return addRegistryTile;
  }
  if (key === "cwpp") {
    return addCwppTile;
  }
  if (key == "cspm") {
    return addCspmTile;
  }
  return () => ({});
};

const AddWidgetModal = ({ isOpen, sectionData, closeModal }) => {
  const dispatch = useDispatch();
  const [newData, setNewData] = useState(sectionData);

  useEffect(() => {
    setNewData(sectionData);
  }, [sectionData]);

  const onFormSubmit = (event) => {
    event?.preventDefault?.();
    const updateAction = getActionForKeys(sectionData.key);
    dispatch(updateAction(newData));
    closeModal();
  };

  const onChange = (event) => {
    let newTileData = newData?.tiles || [];
    const key = event.target.name;
    const isChecked = event.target.checked;
    newTileData[key].show = isChecked;
    setNewData((st) => ({ ...st, tiles: newTileData }));
  };

  if (!isOpen && !newData) {
    return null;
  }
  return portalWrapper(
    <div className="bg-[rgba(0,0,0,0.5)] h-svh w-[100vw] absolute top-0 left-0 flex">
      <button className="flex-1" onClick={closeModal}></button>
      <div className="w-[500px] bg-white h-full flex flex-col">
        <h4 className="bg-blue-800 text-white px-3 py-2">Add Widget</h4>
        <h5 className="px-3 my-2">
          Personalise Your Dashboard by Adding following widget
        </h5>
        <div>
          <h5 className="border-b-2 border-blue-800 inline-block mx-3">
            {sectionData?.title}
          </h5>
        </div>
        <form
          className="px-4 flex-1 flex flex-col mb-6"
          onSubmit={onFormSubmit}>
          <div className="flex-1">
            {sectionData?.tiles?.map?.(({ id, title, show }) => {
              return (
                <div
                  className="flex gap-2 my-2 rounded border-[1px] border-gray-400 px-2 py-1"
                  key={id}>
                  <input
                    type="checkbox"
                    id={id}
                    name={id}
                    defaultChecked={show}
                    onChange={onChange}
                  />
                  <label htmlFor={id}>{title}</label>
                </div>
              );
            })}
          </div>
          <div className="ml-auto">
            <button
              className="border-blue-800 border-2 box-border w-24 rounded-md py-[1px] mr-2"
              type="button"
              role="none"
              onClick={closeModal}>
              Cancel
            </button>
            <button
              className="bg-blue-800 w-24 rounded-md py-1 text-white"
              type="submit"
              role="button">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddWidgetModal;
