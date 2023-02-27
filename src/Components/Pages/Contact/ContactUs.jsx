import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from "formik";
import * as Yup from "yup";
import contactus from "../../../images/contactus.png";

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


const Contactus = () => {

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
    alert("Mail Send")
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      
      onSubmit: (values, action) => {
        console.log('onsubmit alert');
        action.resetForm();
        sendEmail()
        showAlert()
        
      },
    });

  return (
    <div className="mx-auto">
      <div className="position relative">
        <div className="">
          <img className="w-full mb-5" src={contactus} />
        </div>
        <div className="px-6 absolute bottom-4 font-display font-light text-xl text-gray-100">
          Orchid Nirvana 3.0 contact
        </div>
      </div>

      <div className="mt-24">
        <h1 className="text-center m-4 font-display font-light text-2xl">
          Get in touch with Us
        </h1>
        <div>
          <div className="text-center text-xl x">
            We would be glad to hear from you
          </div>
          <div className="flex flex-wrap  justify-center p-4 lg:p-1 ">
            <div className="flex md:w-1/2 justify-center  items-center">
              <form 
              onSubmit={handleSubmit}
              // onSubmit={sendEmail}
              ref={form} 
              
              className="bg-white p-10 py-16"
             >
              <h1 className="text-gray-800 font-semibold text-xl mb-1">
                  Please fill your Details Above
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
                {errors.mobile && touched.mobile ? (
                  <p className="form-error">{errors.mobile} *</p>
                ) : null}
              </div>
              <div className="flex items-center border-2 py-2 px-3 mb-4">
                <input
                  className="pl-2 outline-none border-none"
                  type="email"
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
              <button 
                type="submit"
                className="block bg-sky-900 hover:bg-gray-700 mt-4 py-2 text-white font-semibold mb-2 px-4"
              >
                SUBMIT
              </button>
            </form>
            </div>
            <div className="flex flex-col justify-center items-start">
              <h1 className="text-gray-800 font-semibold text-xl">
                Site Address
              </h1>
              Next to NH-44 Devanahalli,Bengaluru,
              <br />
              Karnataka
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;



// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import contactus from "../../../images/contactus.png";

// //Form schema
// const formSchema = Yup.object({
//   name: Yup.string().min(2).max(25).required("Please enter your name"),
//   mobile: Yup.string()
//     .min(10)
//     .max(25)
//     .required("Please enter your Mobile Number"),
//   email: Yup.string().required("Please enter your email"),
//   message: Yup.string().required("Please enter your Requirement"),
// });

// const initialValues = {
//   name: "",
//   mobile: "",
//   email: "",
//   message: "",
// };


// const Contactus = () => {

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_ktznnus', 'template_7yfrjhg', form.current, 'jMXsgEU_60K4-MqpR')
//       .then((result) => {
//           console.log(result.text);
//           console.log("message sent");
//       }, (error) => {
//           console.log(error.text);
//       });
//       // e.target.reset()
//   };

//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues,
//       validationSchema: formSchema,
//       onSubmit: (values, action) => {
//         action.resetForm();
//       },
//     });

//   return (
//     <div className="mx-auto">
//       <div className="position relative">
//         <div className="">
//           <img className="w-full mb-5" src={contactus} />
//         </div>
//         <div className="px-6 absolute bottom-4 font-display font-light text-xl text-gray-100">
//           Orchid Nirvana 3.0 contact
//         </div>
//       </div>

//       <div className="mt-24">
//         <h1 className="text-center m-4 font-display font-light text-2xl">
//           Get in touch with Us
//         </h1>
//         <div>
//           <div className="text-center text-xl x">
//             We would be glad to hear from you
//           </div>
//           <div className="flex flex-wrap  justify-center p-4 lg:p-1 ">
//             <div className="flex md:w-1/2 justify-center  items-center">
//               <form
//               // onSubmit={handleSubmit}
//               ref={form} onSubmit={sendEmail}
//               className="bg-white p-10 py-16"
//              >
//               <h1 className="text-gray-800 font-semibold text-xl mb-1">
//                   Please fill your Details Above
//                 </h1>
//               <div className="flex items-center border-2 py-2 px-3 mb-4 mt-10">
//                 <input
//                   className="pl-2 outline-none border-none"
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Full name"
//                   value={values.name}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//               </div>
//               <div className="text-red-400 mb-2">
//                 {errors.name && touched.name ? (
//                   <p className="form-error">{errors.name} *</p>
//                 ) : null}
//               </div>
//               <div className="flex items-center border-2 py-2 px-3 mb-4">
//                 <input
//                   className="pl-2 outline-none border-none"
//                   type="text"
//                   name="mobile"
//                   id="mobile"
//                   placeholder="Mobile Number"
//                   value={values.mobile}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//               </div>
//               <div className="text-red-400 mb-2">
//                 {errors.mobile && touched.mobile ? (
//                   <p className="form-error">{errors.mobile} *</p>
//                 ) : null}
//               </div>
//               <div className="flex items-center border-2 py-2 px-3 mb-4">
//                 <input
//                   className="pl-2 outline-none border-none"
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Email Address"
//                   value={values.email}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//               </div>
//               <div className="text-red-400 mb-2">
//                 {errors.email && touched.email ? (
//                   <p className="form-error">{errors.email}</p>
//                 ) : null}
//               </div>
//               <div className="flex items-center border-2 py-2 px-3 ">
//                 <input
//                   className="pl-2 outline-none border-none"
//                   type="text"
//                   name="message"
//                   id="message"
//                   placeholder="Requirement"
//                   value={values.message}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//               </div>
//               <div className="text-red-400 mb-2">
//                 {errors.message && touched.message ? (
//                   <p className="form-error">{errors.message} *</p>
//                 ) : null}
//               </div>
//               <button
//                 type="submit" 
//                 className="block bg-sky-900 hover:bg-gray-700 mt-4 py-2 text-white font-semibold mb-2 px-4"
//               >
//                 SUBMIT
//               </button>
//             </form>
//             </div>
//             <div className="flex flex-col justify-center items-start">
//               <h1 className="text-gray-800 font-semibold text-xl">
//                 Site Address
//               </h1>
//               Next to NH-44 Devanahalli,Bengaluru,
//               <br />
//               Karnataka
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contactus;
