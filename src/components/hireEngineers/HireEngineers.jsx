import { useState } from "react";
import { motion } from "framer-motion";
import "./hireEngineers.scss";
import emailjs from "@emailjs/browser";

import ProgressBar from "./ProgressBar";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Navbar from "../navbar/Navbar";

import Footer from "../../components/Footer/Footer";


export default function HireEngineers() {
  const [step, setStep] = useState(1);
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    technologies: [],
    engineers: "",
    hireType: "",
    timeline: "",
    notes: "",
  });

  // ---------------------------
  // Navigation
  // ---------------------------

 const nextStep = () => {
  if (step === 1) {
    if (!formData.fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!formData.company.trim()) {
      alert("Please enter your company / organization.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Please enter your contact number.");
      return;
    }

    if (step < 3) setStep((prev) => prev + 1);
    return;
  }

  if (step === 2) {
    if (formData.technologies.length === 0) {
      alert("Please select at least one technology.");
      return;
    }

    if (step < 3) setStep((prev) => prev + 1);
    return;
  }

  if (step < 3) {
    setStep((prev) => prev + 1);
  }
};

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  // ---------------------------
  // Input Change
  // ---------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ---------------------------
  // Technology Selection
  // ---------------------------

  const toggleTechnology = (technology) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.includes(technology)
        ? prev.technologies.filter((item) => item !== technology)
        : [...prev.technologies, technology],
    }));
  };

  // ---------------------------
  // Select Option
  // ---------------------------

  const selectOption = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // ---------------------------
  // Submit
  // ---------------------------
const submitForm = async () => {
  // Validation

  if (!formData.fullName.trim()) {
    alert("Please enter your full name.");
    return;
  }

  if (!formData.email.trim()) {
    alert("Please enter your email.");
    return;
  }

  if (!formData.phone.trim()) {
    alert("Please enter your phone number.");
    return;
  }

  if (formData.technologies.length === 0) {
    alert("Please select at least one technology.");
    return;
  }

  if (!formData.engineers) {
    alert("Please select number of engineers.");
    return;
  }

  if (!formData.hireType) {
    alert("Please select hire type.");
    return;
  }

  if (!formData.timeline) {
    alert("Please select timeline.");
    return;
  }

  setLoading(true);
  setError(false);

  const templateParams = {
    form_type: "Hire Engineers",

    name: formData.fullName,
    email: formData.email,
    company: formData.company,
    phone: formData.phone,

    technologies: formData.technologies.join(", "),

    engineers: formData.engineers,
    hire_type: formData.hireType,
    timeline: formData.timeline,

    message: formData.notes,
  };

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setLoading(false);
    setSuccess(true);

    setStep(1);

    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      technologies: [],
      engineers: "",
      hireType: "",
      timeline: "",
      notes: "",
    });

  } catch (err) {
    console.error(err);
    setLoading(false);
    setError(true);
  }
};

  return (
    <>
    <Navbar className="nv"/>
    <section className="hireEngineers">

      <div className="background-circle one"></div>
      <div className="background-circle two"></div>

      <div className="container">
        <motion.div
          className="heading"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>
            Let's <span>Build Together.</span> Ideas Into Reality!
          </h1>

          <p>
           Tell us what you're building, what success looks like, and when you'd like to launch. We'll take it from there.

          </p>
        </motion.div>

        {/* Progress */}

        <ProgressBar step={step} />

        {/* Form Card */}

        <motion.div
          className="card"
          key={step}
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          {step === 1 && (
            <StepOne
              formData={formData}
              handleChange={handleChange}
              nextStep={nextStep}
            />
          )}

          {step === 2 && (
            <StepTwo
              formData={formData}
              toggleTechnology={toggleTechnology}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 3 && (
            <StepThree
 formData={formData}
  handleChange={handleChange}
  selectOption={selectOption}
  prevStep={prevStep}
  submitForm={submitForm}
  loading={loading}
            />
          )}
        </motion.div>
          {/* Add these here */}
  {success && (
    <p
      style={{
        color: "#35d07f",
        marginTop: 20,
        textAlign: "center",
        fontSize: "18px",
      }}
    >
      ✅ Your hiring request has been submitted successfully.
    </p>
  )}

  {error && (
    <p
      style={{
        color: "#ff4d4f",
        marginTop: 20,
        textAlign: "center",
        fontSize: "18px",
      }}
    >
      ❌ Something went wrong. Please try again.
    </p>
  )}
      </div>
    </section>
    <Footer/>
    </>
  );
}