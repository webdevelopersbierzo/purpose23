import React from "react";
import Menu from "../components/menu";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const PurposeAddForm = () => {
  const formSchema = Yup.object({
    category: Yup.string()
      .required("Category input is required")
      .max(20, "maximum 20 characters"),
    purposeName: Yup.string()
      .required("Purpose's Name is required")
      .max(30, "Maximun 30 charaters"),
    purposeWhat: Yup.string().required("Is requered"),
    dateStar: Yup.date().required(),
    dateEnd: Yup.date().required(),
  });
  const dataPurposes = {
    category: "",
    purposeName: "",
    purposeWhat: "",
    dateStar: new Date(),
    dateEnd: new Date(),
  };

  return (
    <div className="w-full  bg-slate-900  h-screen text-white">
      <Menu />
      <div className="flex flex-col items-center ">
        <h2 className="p-6 text-5xl">Add Purpose</h2>
        <div className="flex flex-col items-center w-11/12 md:w-2/3 ">
          <Formik
            initialValues={dataPurposes}
            validationSchema={formSchema}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
              console.log(values);

              axios({
                method: "POST",
                url: "https://purpose23-production.up.railway.app/api/v1/purposes",
                data: values,
                headers: { "Content-Type": "application/json" },
              })
                .then(function (res) {
                  // console.log(res);
                  alert("Successfully signed up!");
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            {(props) => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
              } = props;
              return (
                <Form id="purposeAddForm" className="flex flex-col  w-2/3">
                  <label htmlFor="category">Category</label>
                  <Field
                    id="category"
                    name="category"
                    placeholder="category"
                    type="text"
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-400"
                  />
                  <label htmlFor="purposeName">Purpose</label>
                  <Field
                    id="purposeName"
                    name="purposeName"
                    placeholder="purposeName"
                    type="text"
                  />
                  <ErrorMessage
                    name="purposeName"
                    component="div"
                    className="text-red-400"
                  />
                  <label htmlFor="purposeWhat">How will you do it?</label>
                  <Field
                    id="purposeWhat"
                    name="purposeWhat"
                    placeholder="purposeWhat"
                    type="text-area"
                  />
                  <ErrorMessage
                    name="purposeWhat"
                    component="div"
                    className="text-red-400"
                  />
                  <label htmlFor="dateStar">Start </label>
                  <Field
                    id="dateStar"
                    name="dateStar"
                    placeholder="date Star"
                    type="date"
                  />
                  <ErrorMessage
                    name="dateStart"
                    component="div"
                    className="text-red-400"
                  />
                  <label htmlFor="dateEnd">End </label>
                  <Field
                    id="dateEnd"
                    name="dateEnd"
                    placeholder="date End"
                    type="date"
                  />
                  <ErrorMessage
                    name="dateEnd"
                    component="div"
                    className="text-red-400"
                  />
                  <button
                    className="bg-blue-500 rounded-md mt-4 mb-4"
                    type="Submit"
                  >
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PurposeAddForm;
