import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact - FarmTech"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
          For any inquiries or support, we're here to help. Reach out 
          to us From Email, Phone Call or Toll-Free Number our dedicated 
          team will respond promptly. Let's work together to make FarmTech 
          your trusted source for fresh, locally-sourced produce.
          </p>
          <p className="mt-3">
            <BiMailSend /> : <b>www.help@FarmTech.com</b>
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : <b>0123456789</b>
          </p>
          <p className="mt-3">
            <BiSupport /> : <b>1800-1800-1800 (toll free)</b>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
