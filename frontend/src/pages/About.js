import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - FarmTech"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          FarmTech is more than just a marketplace—it's a bridge between 
          dedicated farmers and conscious consumers. Our platform is 
          designed to streamline the process of bringing farm-fresh 
          products directly to your table. By cutting out intermediaries, 
          we ensure that farmers receive fair compensation for their hardwork, 
          and customers get access to high-quality, locally-sourced produce. 
          We are committed to fostering a community that values transparency, 
          sustainability, and the power of local agriculture. At FarmTech, we're 
          not just selling food; we're nurturing a movement towards healthier, 
          more sustainable living.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
