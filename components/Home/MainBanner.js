import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import leftShape from "../../public/images/left-shape.png";
import rightShape from "../../public/images/right-shape.png";

import shape11 from "../../public/images/shape/shape11.png";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { sendQuoteForm } from "../../lib/api";
const initValues = {
  name: "",
  email: "",
  number: "",
};

const initState = { isLoading: false, error: "", values: initValues };
const MainBanner = () => {
  const toast = useToast();
  const [toggler, setToggler] = useState(false);
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
      await sendQuoteForm(values);
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
      <FsLightbox
        toggler={toggler}
        sources={["https://youtu.be/4QXCPriDMGw?si=i7BZ3mjqcxlQyehp"]}
      />

      <div className="home-banner-two">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row ">
                <div className="col-lg-8">
                  <div className="main-banner-content ">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="100"
                    >
                      Simplifying Real Estate
                    </h1>
                    <h4>Unlock The Door To Your Dream Property With Maidaan</h4>
                    <p
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="200"
                    >
                      Maidaan thoroughly fulfills the aspirations of our
                      customers and investors about real estate. We offer buy,
                      sell services to aspirants of luxury properties.
                    </p>
                    <strong>
                      Explore the gateway to luxury and innovation in one of the
                      world’s most dynamic real estate markets.
                    </strong>

                    <div
                      className="banner-btn"
                      data-aos="fade-up"
                      data-aos-duration="800"
                      data-aos-delay="300"
                    >
                      <Link href="/about-us" className="default-btn-one">
                        Learn More
                      </Link>

                      {/* <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn popup-youtube"
                      >
                        Maidaan X Future Fest{" "}
                        <i className="flaticon-play-button"></i>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="banner-form">
                    <div className="banner-form-header">
                      <h4 className="header-title">Get In Touch</h4>
                      <p className="header-desc">
                        {" "}
                        Unlock The Door To Your Dream Property
                      </p>
                    </div>
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

                    <Button
                      colorScheme="orange"
                      isLoading={isLoading}
                      disabled={!values.name || !values.email || !values.number}
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

        <div className="banner-img-wrapper">
          {/* <div className="banner-img-1">
            <Image src={leftShape} alt="image" width={597} height={1171} />
          </div> */}

          {/* <div className="banner-img-2">
            <Image src={rightShape} alt="image" width={553} height={943} />
          </div> */}
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <Image src={shape11} alt="shape" width={23} height={23} />
        </div>
        <div className="shape-img3">
          <Image src={shape11} alt="shape" width={51} height={46} />
        </div>
        <div className="shape-img5">
          <Image src={shape11} alt="shape" width={71} height={16} />
        </div>
        {/* <div className="shape-img6">
          <Image src={shape11} alt="shape" width={51} height={56} />
        </div> */}
        <div className="shape-img7">
          <Image src={shape11} alt="shape" width={23} height={23} />
        </div>
        <div className="shape-img8">
          <Image src={shape11} alt="shape" width={71} height={16} />
        </div>
        <div className="shape-img9">
          <Image src={shape11} alt="shape" width={39} height={39} />
        </div>
        <div className="shape-img10">
          <Image src={shape11} alt="shape" width={71} height={16} />
        </div>
        <div className="shape-img11">
          <Image src={shape11} alt="shape" width={202} height={202} />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
