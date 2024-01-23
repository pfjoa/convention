import React from "react";
import PDFFile from "./components/Document";
import { PDFDownloadLink } from "@react-pdf/renderer";

const App = () => {
  return (
    <div>
      {/* <PDFFile /> */}
      <PDFDownloadLink document={<PDFFile />} filename="FORM">
        {({ loading }) =>
          loading ? (
            <button>Loading Document...</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default App;
