import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
  Button,
  Textarea,
} from "@chakra-ui/react";

import { sendContactForm } from "../../lib/api";
const initValues = {
  name: "",
  email: "",
  number: "",
  subject: "",
  message: "",
};

const initState = { isLoading: false, error: "", values: initValues };

const ContactForm = () => {
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

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
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
      <div className="contact-area pt-100">
        {/* Contact Info */}
        <ContactInfo />

        <div className="container">
          <div className="row align-items-start justify-content-between">
            <div className="col-lg-5 col-md-6 ">
              <div className="contact-text">
                <h2>Get in Touch</h2>

                <p>
                  Maidaan, a trusted partner, helps you explore the unique gems
                  of real estate marketing. We are a leading real estate
                  marketing company and specializing in providing comprehensive
                  services by our dedicated real estate marketing team for
                  buying and selling properties.
                </p>

                <h3>Follow Us</h3>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/themaidaan/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/the_maidaan" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/themaidaan/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/company/maidaan"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mt-5">
              <div className="card shadow p-4">
                <div className="row">
                  <div className="col-lg-6">
                    <FormControl
                      mb={4}
                      isInvalid={touched.name && !values.name}
                    >
                      <FormLabel>Name</FormLabel>
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
                      <FormLabel>Subject</FormLabel>
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
                  <div className="col-lg-12 col-sm-12">
                    <div className="send-btn">
                      <Button
                        colorScheme="orange"
                        isLoading={isLoading}
                        disabled={
                          !values.name || !values.email || !values.number
                        }
                        onClick={onSubmit}
                        mt={5}
                        w="100%"
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-5 w-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1917.2352478530238!2d73.0605570899873!3d33.712199225383934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfc4d6e85d3d%3A0x9354aafce8605d7!2sMaidaan%20Head%20Office!5e0!3m2!1sen!2sus!4v1709104028652!5m2!1sen!2sus"
              width="100%"
              height="400px"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
