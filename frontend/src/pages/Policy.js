import React from "react";
import Layout from "./../components/Layout/Layout";


const Policy = () => {
  return (
    <Layout title={"Policy - Efarm app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p><b>Privacy Policy : </b>
           At FarmTech, we prioritize your privacy and are committed to protecting your personal 
          information. We only collect essential data needed to facilitate transactions, 
          enhance user experience, and improve our services. Your information will never be 
          shared with third parties without your consent, except as required by law.</p>
          <p><b>Shipping Policy : </b>
           We strive to deliver your orders as quickly and efficiently as possible. Our standard 
          shipping times are 3-5 business days, depending on your location. We partner with trusted 
          logistics providers to ensure that your products arrive fresh and in excellent condition. </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
