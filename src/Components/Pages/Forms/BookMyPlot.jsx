import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

//Form schema
const formSchema = Yup.object({
  fullName: Yup.string().min(2).max(25).required("Please enter your name"),
  mobileNum: Yup.string()
    .min(10)
    .max(25)
    .required("Please enter your Mobile Number"),
});

const initialValues = {
  fullName: "",
  mobileNum: "",
};

const BookMyPlot = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white py-6">
        <div className="flex items-center border-2 py-2 px-3 mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Full name"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="text-red-400 mb-2">
          {errors.fullName && touched.fullName ? (
            <p className="form-error">{errors.fullName} *</p>
          ) : null}
        </div>
        <div className="flex items-center border-2 py-2 px-3 mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name="mobileNum"
            id="mobileNum"
            placeholder="Mobile Number"
            value={values.mobileNum}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="text-red-400 mb-2">
          {errors.mobileNum && touched.mobileNum ? (
            <p className="form-error">{errors.mobileNum} *</p>
          ) : null}
        </div>
        <button
          type="submit"
          className="block bg-sky-900 hover:bg-gray-700 mt-4 py-2 text-white font-semibold mb-2 px-4"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default BookMyPlot;
