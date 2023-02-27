import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { saveAs } from "file-saver";
import { useAlert } from 'react-alert'
import brochure from '../../images/Orchid-Nirvana-E-Brochure.pdf'

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

export default function Brochure() {

  const [showModal, setShowModal] = useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        console.log('Downloading');
        saveAs(brochure, "Orchid-Nirvana-E-Brochure.pdf");
        action.resetForm();

      },

    });

  return (
    <>
      <div className="flex items-center justify-start ">
        <button
          className="block px-4 bg-sky-900 hover:bg-transparent text-white hover:bg-gray-900 hover:border-2 mt-4 py-2 font-bold mb-2 w-48 cursor-pointer"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Get Brochure
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8 ">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex justify-center">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <form onSubmit={handleSubmit} className="bg-white py-6 ">
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

                      <div className="items-center gap-2 mt-3 sm:flex">
                        <a href="data.png" download>
                          <button
                            className="bg-slate-800 text-white rounded-md p-3 white mb-4 mt-6 py-3 w-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300"
                            type="submit"
                          >
                            Download
                          </button>
                        </a>
                        <button
                          className="bg-white border  text-gray-900 rounded-md p-3 white mb-4 mt-6 py-3 w-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-11 duration-300"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
