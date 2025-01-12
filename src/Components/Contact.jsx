import React, { useState } from "react";
import "../CSS/All.css";
import "../CSS/Contact.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validation: Ensure all fields are filled
    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    // API request to Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "d4552cae-9eb3-4a34-91c5-25da7445ac93", // Your Web3Forms access key
          name,
          email,
          message
        })
      });

      const result = await response.json();

      if (response.ok) {
        // setStatus("Message sent successfully!");
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container contactus-form-container" id="contactme">
      <div className="container1">
        <div className="contactus-heading">Contact Me</div>

        <div className="contactus-form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="formfield-container">
              <input
                className="formfield"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="formfield"
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                className="formfield formfield-textarea"
                name="message"
                cols="30"
                rows="10"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Feedback message */}
            {status && <div className="status-message">{status}</div>}

            <div className="btn-div">
              <button type="submit" className="btn-pink" id="submit-btn">
                Send Message
                <i className="submit-icon fa-solid fa-paper-plane">
                  {" "}
                  <FontAwesomeIcon icon={faPaperPlane} />
                </i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
