import React from "react";
import Collapsible from "react-collapsible";
import TitleSection from "./TitleSection";

function QuestionsSection() {
  return (
    <div className="container mb-20">
      <TitleSection title="FAQ" />
      {/* --Question-- */}
      <div className="bg-primary text-white p-5 text-md md:text-2xl">
        <Collapsible trigger="+ What kind of rewards holders will get? ">
          <p className="text-white ml-5 ">
            This is the collapsible content. It can be any element or React
            component you like. This is the collapsible content. It can be any
            element or React component you like.
          </p>
        </Collapsible>
      </div>
      {/* --Question-- */}
      <div className="bg-primary text-white p-5 text-md md:text-2xl">
        <Collapsible trigger="+ What kind of rewards holders will get? ">
          <p className="text-white ml-5 ">
            This is the collapsible content. It can be any element or React
            component you like. This is the collapsible content. It can be any
            element or React component you like.
          </p>
        </Collapsible>
      </div>
      {/* --Question-- */}
      <div className="bg-primary text-white p-5 text-md md:text-2xl">
        <Collapsible trigger="+ What kind of rewards holders will get? ">
          <p className="text-white ml-5 ">
            This is the collapsible content. It can be any element or React
            component you like. This is the collapsible content. It can be any
            element or React component you like.
          </p>
        </Collapsible>
      </div>
      {/* --Question-- */}
      <div className="bg-primary text-white p-5 text-md md:text-2xl">
        <Collapsible trigger="+ What kind of rewards holders will get? ">
          <p className="text-white ml-5 ">
            This is the collapsible content. It can be any element or React
            component you like. This is the collapsible content. It can be any
            element or React component you like.
          </p>
        </Collapsible>
      </div>
    </div>
  );
}

export default QuestionsSection;
