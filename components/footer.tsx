import React from "react";
import Image from "next/image";
import { Container } from "./container";

export const Footer = ({ data, icon, rawData }) => {
  return (
    <footer className={`bg-white`}>
      <Container className="flex relative" size="small">
        <p className="text-black text-xs flex-1">
          Asia Hackathon Series 2021 expects all speakers and participants to
          follow the IPFS Community Code of Conduct and Terms of Service
        </p>
        {/* <img src="/img/filecoin_ipfs_logos.png" /> */}
      </Container>
    </footer>
  );
};
