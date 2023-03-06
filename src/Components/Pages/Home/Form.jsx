import React, { useEffect,useRef } from "react";
import emailjs from '@emailjs/browser';
import AOS from "aos";
import "aos/dist/aos.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify'

import contactus from "../../../images/bg.jpg";
import BrochureDownload from "../../Modals/BrochureDownload";

//Form schema
const formSchema = Yup.object({ 
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  mobile: Yup.string()
    .min(10)
    .max(25)
    .required("Please enter your Mobile Number"),
  email: Yup.string().required("Please enter your email"),
  message: Yup.string().required("Please enter your Requirement"),
});

const initialValues = {
  name: "",
  mobile: "",
  email: "",
  message: "",
};

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    console.log('Sending email');
    // e.preventDefault();

    emailjs.sendForm('service_ktznnus', 'template_7yfrjhg', form.current, 'jMXsgEU_60K4-MqpR')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
      // e.target.reset()
  };

  const showAlert = ()=>{
    toast.success('Thank You For your Interest, We will get back to you soon')
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        sendEmail()
        showAlert()
      },
    });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="h-screen md:flex">
        <div className="md:flex w-full justify-around items-center">
          <div className="w-full">
            <img className="w-full " src={contactus} />
          </div>

          <div className="lg:absolute flex flex-col justify-start w-full px-10 flex-wrap mt-4 lg:mt-1">
            <h1
              className="text-black font-bold text-3xl lg:text-6xl font-display lg:text-white "
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              ORCHID NIRVANA 3.0
            </h1>
            <p
              className="lg:text-white text-black mt-1"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              The most popular peer to peer lending at SEA
            </p>
          </div>
          <div className='lg:absolute flex flex-col justify-start w-full px-10 mt-3 lg:mt-32'>
            <BrochureDownload/>
          </div>


          <div className="flex md:w-4/5 md:justify-end lg:justify-end items-center lg:absolute justify-center">
            <form
              onSubmit={handleSubmit}
              ref={form} 
              className="bg-white p-10 py-16 bg-opacity-95"
             >
              <h1 className="text-gray-800 font-bold text-xl mb-1">
                Special Pre Launch Offer For{" "}
              </h1>
              <h1 className="text-gray-800 font-bold text-xl mb-1 mt-2">
                The First Few Customers{" "}
              </h1>

              <div className="flex items-center border-2 py-2 px-3 mb-4 mt-10">
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="text-red-400 mb-2">
                {errors.name && touched.name ? (
                  <p className="form-error">{errors.name} *</p>
                ) : null}
              </div>
              <div className="flex items-center border-2 py-2 px-3 mb-4">
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile Number"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="text-red-400 mb-2">
                {errors.mobile&& touched.mobile ? (
                  <p className="form-error">{errors.mobile} *</p>
                ) : null}
              </div>
              <div className="flex items-center border-2 py-2 px-3 mb-4">
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="text-red-400 mb-2">
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
              </div>
              <div className="flex items-center border-2 py-2 px-3 ">
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name="message"
                  id="message"
                  placeholder="Requirement"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="text-red-400 mb-2">
                {errors.message && touched.message ? (
                  <p className="form-error">{errors.message} *</p>
                ) : null}
              </div>
              <button
                type="submit"
                className="block bg-sky-900 hover:bg-gray-700 mt-4 py-2 text-white font-semibold mb-2 px-4"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

