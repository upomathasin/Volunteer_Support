import React from "react";
import TopBanner from "../../TopBanner/TopBanner";
import Services from "../../Services/Services";
import JoinUs from "../../JoinUs/JoinUs";
import ContactUs from "../../ContactUs/ContactUs";
export default function Home() {
  return (
    <div>
      <TopBanner></TopBanner>

      <Services></Services>
      <JoinUs></JoinUs>
      <ContactUs></ContactUs>
    </div>
  );
}
