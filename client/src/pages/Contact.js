import React from 'react'
import Layout from '../components/layout/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus ">
        
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24X7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@skincareapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
        <div className="col-md-6 ">
          <img
            src="/images/4220713.jpg"
            alt="contactus"
            style={{ width: "85%" }}
          />
        </div>
      </div>

    
    </Layout>
  );
};

export default Contact;