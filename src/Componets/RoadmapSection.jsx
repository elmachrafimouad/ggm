import React from "react";
import TitleSection from "./TitleSection";

function RoadmapSection() {
  return (
    <div className="container mb-20">
        <div className="relative h-full">
      <TitleSection title="ROADMAP" />
      {/* ---rodamap details- */}
      <div className="flex justify-between items-center flex-wrap w-full md:w-1/2 m-auto">
        <ul className="roadmap-after w-1/2 relative p-3">
          <li>ShibaPlayer NFTs collection design</li>
          <li>ShibaPlayer present on Social media</li>
          <li>Build a strong community on Telegram</li>
          <li>ShibaPlayer website launch</li>
          <li>Smart Contract development</li>
          <li>Contract audit</li>
          {/* --phase title-- */}
          <span className="absolute bg-primary rounded-[50%] w-14 h-14 text-center z-10 top-0 -right-10 md:-right-4 p-1 font-light capitalize">
            phase one
          </span>
        </ul>
        <div className="w-1/2" />
        <div className="w-1/2 roadmap-after h-[250px] " />
        <ul className=" w-1/2 pl-10 text-white relative">
          <li>Aggressive marketing Plan</li>
          <li>Influencers, AMAs, banners, sponsorship</li>
          <li>KYC & Audit badge Launchpad</li>
          <li>Launch on PCS</li>
          {/* --phase title-- */}
          <span className="absolute bg-primary rounded-[50%] w-14 h-14 text-center z-10 top-0 -left-4 md:-left-10 p-1 font-light capitalize">
            phase Two
          </span>
        </ul>
        <ul className="roadmap-after w-1/2 relative p-3">
          <li>Giveaways</li>
          <li>Influencers, AMAs, banners, sponsorship 1M$ MC</li>
          <li>ShibaPlayer Collection Mint 1500+ holders</li>
          <li>Listing on CMC & CG</li>
          <li>Smart Contract development</li>
          <li>Contract audit</li>
          {/* --phase title-- */}
          <span className="absolute bg-primary rounded-[50%] w-14 h-14 text-center z-10 top-0 -right-10 md:-right-4 p-1 font-light capitalize">
            phase three
          </span>
        </ul>
        <div className="w-1/2" />
        <div className="w-1/2 roadmap-after h-[300px] " />
        <ul className=" w-1/2 pl-10 text-white relative">
          <li>Celebrities & big influencers</li>
          <li>NFTs collection listing</li>
          <li>
            Development of P2E game Influencer marketing push P2E game beta
            launch Further development
          </li>
          {/* --phase title-- */}
          <span className="absolute bg-primary rounded-[50%] w-14 h-14 text-center z-10 top-0 -left-4 md:-left-10 p-1 font-light capitalize">
            phase four
          </span>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default RoadmapSection;
