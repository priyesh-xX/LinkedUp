import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
     <div className="howitworks">
  <div className="container">
    <h3>How JobZee Works</h3>
    <div className="banner">
      <div className="card">
        <FaUserPlus />
        <p>Create Account</p>
        <p>
          Sign up to access our job portal and start your journey towards a better career or find the right candidates for your company.
        </p>
      </div>
      <div className="card">
        <MdFindInPage />
        <p>Find a Job/Post a Job</p>
        <p>
          Explore thousands of job listings to find your ideal position or post job openings to attract qualified candidates.
        </p>
      </div>
      <div className="card">
        <IoMdSend />
        <p>Apply For Job/Recruit Suitable Candidates</p>
        <p>
          Submit your application to your desired job or review applications and recruit the best candidates for your company.
        </p>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default HowItWorks;
