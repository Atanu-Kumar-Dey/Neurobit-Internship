import React from "react";
import HeaderSection from "./HeaderSection";
import ProgressBar from "./ProgressBar";
import UploadDocument from "./mainComponents/UploadDocument";
import NavigatorButton from "./NavigatorButton";
import DropDown from "./DropDown";
import DataHeader from "./mainComponents/DataHeader";
import { useSelector } from "react-redux";

const displayForm = (value) => {
  switch (value) {
    case 0:
      return <UploadDocument />;
      break;
    case 1:
      return <DropDown/>
      break;
    case 2:
      // return <PreviewSave />;
      break;
    case 3:
      // return <FinalPage />;
      break;
    default:
      break;
  }
};

const Montage = () => {
  const { value } = useSelector((state) => state.step);

  return (
    <div>
      <HeaderSection />
      <ProgressBar />
      {value > 0 ? <DataHeader /> : null}
      {displayForm(value)}
      <NavigatorButton />
    </div>
  );
};

export default Montage;
