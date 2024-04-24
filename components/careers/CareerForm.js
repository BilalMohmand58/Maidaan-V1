import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
  Button,
  Textarea,
} from "@chakra-ui/react";

import { sendCareerForm } from "../../lib/api";
const initValues = {
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
  portfolio: "",
  file: null,
};

const initState = { isLoading: false, error: "", values: initValues };

const CareerForm = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");

    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dr8z1qdye/raw/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setState((prev) => ({
        ...prev,
        values: { ...prev.values, file: data.secure_url },
        isLoading: false,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: "Failed to upload ",
        isLoading: false,
      }));
    }
  };
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendCareerForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Application Submitted Successfully",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      <div className=" contact-area pt-70">
        <div className="container ">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 mt-5">
              <div className="card shadow p-4">
                <h4 className="mt-1 mb-5">Apply For This Position</h4>
                <div className="row">
                  <div className="col-lg-6 mx-auto">
                    <FormControl
                      mb={4}
                      isInvalid={touched.name && !values.name}
                    >
                      <FormLabel>Full Name</FormLabel>
                      <Input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        errorBorderColor="red.300"
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className="col-lg-6">
                    <FormControl
                      mb={4}
                      isInvalid={touched.number && !values.number}
                    >
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        type="number"
                        name="number"
                        value={values.number}
                        onChange={handleChange}
                        errorBorderColor="red.300"
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className="col-lg-12">
                    <FormControl
                      mb={4}
                      isInvalid={touched.email && !values.email}
                    >
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        errorBorderColor="red.300"
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className="col-lg-12">
                    <FormControl
                      mb={4}
                      isInvalid={touched.subject && !values.subject}
                    >
                      <FormLabel>
                        Subject (Position You are Applying For)
                      </FormLabel>
                      <Input
                        type="text"
                        name="subject"
                        value={values.subject}
                        onChange={handleChange}
                        errorBorderColor="red.300"
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className="col-lg-12">
                    <FormControl mb={4}>
                      <FormLabel>Portfolio Link (Optional)</FormLabel>
                      <Input
                        type="url"
                        name="portfolio"
                        value={values.portfolio}
                        onChange={handleChange}
                        errorBorderColor="red.300"
                        onBlur={onBlur}
                      />
                    </FormControl>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <FormControl
                      mb={4}
                      isInvalid={touched.message && !values.message}
                    >
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        type="text"
                        name="message"
                        rows={4}
                        errorBorderColor="red.300"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={onBlur}
                      />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <FormControl
                      mb={4}
                      isInvalid={touched.file && !values.file}
                    >
                      <FormLabel>Upload File (PDF File Only)</FormLabel>
                      <Input
                        type="file"
                        name="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="p-1"
                      />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="send-btn">
                      <Button
                        colorScheme="orange"
                        isLoading={isLoading}
                        disabled={
                          !values.name ||
                          !values.email ||
                          !values.number ||
                          !values.subject
                        }
                        onClick={onSubmit}
                        mt={5}
                        w="100%"
                      >
                        Submit Application
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerForm;
