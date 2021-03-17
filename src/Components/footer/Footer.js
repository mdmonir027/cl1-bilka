import React from "react";
import FooterList from "./FooterList";
import "./style/Footer.scss";
const Footer = () => {
  const footerList1 = {
    title: "INFORMATION",
    items: [
      {
        id: 1,
        value: "Follow Bilka on YouTube",
        path: "https://www.youtube.com/channel/UCUGocTifUr5_mPNdE95tUlA",
      },
      {
        id: 2,
        value: "Follow Bilka on Facebook",
        path: "https://www.facebook.com/mdmoni027/",
      },
      {
        id: 3,
        value: "Privacy Policy",
        path: "privacy-policy",
      },
      {
        id: 4,
        value: "Follow Bilka on YouTube",
        path: "https://www.youtube.com/channel/UCUGocTifUr5_mPNdE95tUlA",
      },
      {
        id: 5,
        value: "Follow Bilka on Facebook",
        path: "https://www.facebook.com/mdmoni027/",
      },
      {
        id: 6,
        value: "Privacy Policy",
        path: "privacy-policy",
      },
      {
        id: 7,
        value: "Follow Bilka on Facebook",
        path: "https://www.facebook.com/mdmoni027/",
      },
      {
        id: 8,
        value: "Privacy Policy",
        path: "privacy-policy",
      },
    ],
  };
  const footerList2 = {
    title: "CUSTOMER SERVICE",
    items: [
      {
        id: 1,
        value: "Return",
        path: "/return",
      },
      {
        id: 2,
        value: "Complaint",
        path: "/complaint",
      },
      {
        id: 3,
        value: "Return",
        path: "/return",
      },
      {
        id: 4,
        value: "Complaint",
        path: "/complaint",
      },
    ],
  };
  const footerList3 = {
    title: "SHOPPING INSPIRATION",
    items: [
      {
        id: 1,
        value: "Brnads",
        path: "/brands",
      },
      {
        id: 2,
        value: "Cyber Monday",
        path: "/cyber-monday",
      },
      {
        id: 3,
        value: "Black Friday",
        path: "/black-friday",
      },
      {
        id: 4,
        value: "Single Day",
        path: "/single-day",
      },
      {
        id: 5,
        value: "Brnads",
        path: "/brands",
      },
      {
        id: 6,
        value: "Cyber Monday",
        path: "/cyber-monday",
      },
      {
        id: 7,
        value: "Black Friday",
        path: "/black-friday",
      },
      {
        id: 8,
        value: "Single Day",
        path: "/single-day",
      },
    ],
  };
  const footerList4 = {
    title: "OPENING HOURS",
    flexBox: true,
    items: [
      {
        id: 1,
        value: "sunday",
      },
      {
        id: 2,
        value: "Monday",
      },
      {
        id: 3,
        value: "Tuesday",
      },
      {
        id: 4,
        value: "Wednessday",
      },
      {
        id: 5,
        value: "Thurseday",
      },
      {
        id: 6,
        value: "Friday",
      },
      {
        id: 7,
        value: "Saturday",
      },
    ],
  };

  return (
    <div className="footer">
      <FooterList list={footerList1} />
      <FooterList list={footerList2} />
      <FooterList list={footerList3} />
      <FooterList list={footerList4} />
    </div>
  );
};

export default Footer;
