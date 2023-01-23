import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Menu from "../components/menu";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { useParams } from "react-router";
import * as Yup from 'yup';

const PurposeEditForm = () => {

  const {id} = useParams();
  const [isReady, setIsReady] = useState(false);
  const [purposedata, setPurposedata] = useState([]);

  useEffect(() => {
    
    axios
      .get(`https://purpose23-production.up.railway.app/api/v1/purposes/3`)
      .then((response) => {
        if ((response.status = 200)) {
          setPurposedata(response.data);
          setIsReady(true);
         
        }
      })
      .catch((error) => console.log(error));
  }, []);
  
  const editFormSchema =  Yup.object({
    category: Yup.string()
      .required("Category input is required")
      .max(20, "maximum 20 characters"),
    purposeName: Yup.string()
      .required("Purpose's Name is required")
      .max(30, "Maximun 30 charaters"),
    purposeWhat: Yup.string().required("Is requered"),
    dateStar: Yup.date().required(),
    dateEnd: Yup.date().required(),
  })

  const dataForm = {
    id:`${id}`,
    category: `${purposedata.category}`,
    purposeName: `${purposedata.purposeName}`,
    purposeWhat:`${purposedata.purposeWhat}`,
    dateStar: `${purposedata.dateStar}`,
    dateEnd: `${purposedata.dateEnd}`
  };

  if (isReady) {
    return (
      <div className="w-full bg-slate-900 h-screen text-white">
        <Menu />
        <div className="flex flex-col items-center">
          <h2 className="p-6 text-5xl"> Edit purpose </h2>
          <div className="flex flex-col items-center w-11/12 md:w-2/3">
            <Formik
              initialValues={dataForm}
              enableReinitialize={true}
              validationSchema= {editFormSchema}
              onSubmit={async (values) =>{
                await new Promise((r)=> setTimeout(r,500));
                alert(JSON.stringify(values,null,2));

                axios({
                  method: "POST",
                  url: `https://purpose23-production.up.railway.app/api/v1/purposes`,
                  data: values,
                  header: {"Content-Type": "application/json"},
                })
                .then(function (res) {
                  alert("Successfully uptade up!");
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
                  <Form id="purposeEditForm" className="flex flex-col  w-2/3">
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
                      className="bg-blue-500 rounded-md mt-4 mb-4 p-2 hover:bg-blue-700"
                      type="Submit"
                      disabled
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
  }
  return (
    <div>
      Loading.....
    </div>
  )
};

PurposeEditForm.propTypes = {};

export default PurposeEditForm;
