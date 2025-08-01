import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ContactUs.module.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

const ContactUs = () => {
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\+?[0-9\s\-]{7,15}$/, "Enter a valid phone number").required("Phone number is required")
        .nullable(),
      subject: Yup.string().nullable(),
      message: Yup.string().required("Message is required"),
    }),
    // onSubmit: (values, { resetForm }) => {
    //   setShowToast(true);
    //   resetForm();
    //   setTimeout(() => setShowToast(false), 3000);
    // },
    onSubmit: async (values, { resetForm }) => {
  try {
    const res = await fetch("http://localhost:3001/contactform", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) throw new Error("Failed to send message");

    setToast({ type: "success", message: "Message sent successfully!" });
    resetForm();
  } catch (error) {
    setToast({ type: "error", message: "Something went wrong. Please try again." });
  }

  setTimeout(() => {
    setToast({ type: "", message: "" });
  }, 5000);
},

  });
  

  return (
    <section
      id="contact"
      className="pt-20 pb-20 px-4 md:px-16 lg:px-24 bg-gradient-to-br bg-white min-h-screen"
    >
      {/* Toast */}
      {/* {setToast && (
        <div className={styles.toast}>
          <FaCheckCircle className="text-green-600 text-xl mr-2" />
          <span>Thank you! Your message was sent successfully.</span>
        </div>
      )} */}

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-[#1e5d8a] mb-12">Contact Us</h2>
      <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto text-[12px]">
      We’d love to hear from you! Whether you have a question about our products, want to discuss a potential
partnership, or need support with your import/export needs, the team at <strong>Sfera Global (Private) Limited</strong> 
 is here to help.

      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        <div className={`${styles.card} text-center`}>
          <FaMapMarkerAlt className="text-3xl text-[#1e5d8a] mx-auto mb-2" />
          <h3 className="font-semibold text-lg mb-1">Location</h3>
          <p className={`${styles.cardInnerText} text-center text-gray-600`} >
            133, Block-C, Eden City, <br /> Lahore, Pakistan
          </p>
        </div>

        <div className={`${styles.card} text-center`}>
          <FaPhoneAlt className="text-2xl text-[#1e5d8a] mx-auto mb-2" />
          <h3 className="font-semibold text-lg mb-1 ">Call / WhatsApp</h3>
          <p className="text-sm text-gray-600  mt-4.5">+92-336-4206751</p>
          <a
            href="https://wa.me/923364206751"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-7 items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-full text-sm font-medium transition duration-300"
          >
            <FaWhatsapp className="text-lg " />
            Chat on WhatsApp
          </a>
        </div>

        <div className={`${styles.card} text-center`}>
          <FaEnvelope className="text-2xl text-[#1e5d8a] mb-2 mx-auto" />
          <h3 className="font-semibold text-lg mb-2">Email Us</h3>
          <p className="text-sm text-gray-700">
            📩 <strong>General:</strong>{" "}
            <a href="mailto:info@sferaglobal.com.pk" className="text-blue-700">
              info@sferaglobal.com.pk
            </a>
          </p>
          <p className="text-sm text-gray-700">
            💼 <strong>Sales:</strong>{" "}
            <a href="mailto:sales@sferaglobal.com.pk" className="text-blue-700">
              sales@sferaglobal.com.pk
            </a>
          </p>
          <p className="text-sm text-gray-700">
            🛠 <strong>Support:</strong>{" "}
            <a href="mailto:support@sferaglobal.com.pk" className="text-blue-700">
              support@sferaglobal.com.pk
            </a>
          </p>
        </div>

        <div className={`${styles.card} text-center`}>
          <FaClock className="text-2xl text-[#1e5d8a] mb-2 mx-auto" />
          <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
          <p className="text-sm text-gray-700">
            🕒 <br /><strong>Mon–Sat:</strong>  10:00 AM – 6:00 PM
          </p>
          <p className="text-sm text-gray-700">
            💤<br /> <strong>Sunday:</strong>  Closed
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white/70 shadow-xl backdrop-blur-md p-8 rounded-2xl max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-[#1e5d8a] text-center">Send Us a Message</h3>
        <p className="text-center mb-10 text-[#1e5d8a] text-[12px]">Use the contact form below to get in touch. Our team typically replies within 24–48 hours.</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              placeholder="Name*"
              className={styles.input}
              {...formik.getFieldProps("name")}
            />
            <input
              name="email"
              type="email"
              placeholder="Email*"
              className={styles.input}
              {...formik.getFieldProps("email")}
            />
            <input
              name="phone"
              placeholder="Phone Number*"
              className={styles.input}
              {...formik.getFieldProps("phone")}
            />
            <input
              name="subject"
              placeholder="Subject"
              className={styles.input}
              {...formik.getFieldProps("subject")}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message*"
            className={`${styles.input} h-32 w-full resize-none mt-6`}
            {...formik.getFieldProps("message")}
          ></textarea>

          <button
            type="submit"
            className={`${styles.submitBtn} w-[25%] mt-6 bg-[#1e5d8a] hover:bg-[#abb6be] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300`}
          >
            Submit
          </button>
          {toast.message && (
  <div className={`${styles.toast} ${toast.type === "error" ? styles.errorToast : ""}`}>
    {toast.message}
  </div>
)}

        </form>
      </div>
    </section>
  );
};

export default ContactUs;
