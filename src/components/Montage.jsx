import React from "react";
import HeaderSection from "./HeaderSection";
import ProgressBar from "./ProgressBar";
import UploadDocument from "./mainComponents/UploadDocument";
import NavigatorButton from "./NavigatorButton";
import DataHeader from "./mainComponents/DataHeader";
import { useSelector } from "react-redux";
import Additional from "./mainComponents/Additional";
import MapChannel from "./mainComponents/MapChannel";
import FinalTable from "./mainComponents/FinalTable"
import EditChannels from "./mainComponents/EditChannels";
import GoToBottom from "./GoToBottom";

const displayForm = (value) => {
  switch (value) {
    case 0:
      return <UploadDocument />;
      break;
    case 1:
      return (
        <>
          <MapChannel />
          <Additional />
        </>
      );
      break;
    case 2:
      return (
        <>
          <EditChannels />
          <Additional />
        </>
      );
      break;
    case 3:
      return (
        <>
          <FinalTable />
          <Additional />
        </>
      );
      break;
    default:
      break;
  }
};

const Montage = () => {
  const { value } = useSelector((state) => state.step);

  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "rgba(245, 246, 250, 1)",
        }}>
        <HeaderSection />
        <ProgressBar />
        {value > 0 ? (
          <>
            <DataHeader />
            <GoToBottom />
          </>
        ) : null}
      </div>
      {displayForm(value)}
      <div style={{ bottom: 0 }}>
        <NavigatorButton />
      </div>
    </div>
  );
};

export default Montage;
