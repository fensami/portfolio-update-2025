"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MainProfile from "../share/MainProfile/MainProfile";

const ContactUs = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_lplkna7", // ⚠️ Replace with your actual service ID
        "template_wsfe5w9", // ⚠️ Replace with your actual template ID
        form.current,
        {
          publicKey: "BhoG8GDuWENgPhyV8", // ⚠️ Replace with your actual public key
        }
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again later.");
          console.error("EmailJS Error:", error.text);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-5">
        <div className="md:col-span-4 col-span-12">
          <MainProfile />
        </div>

        <div className="md:col-span-8 col-span-12">
          <div className="portfolio-global-box">
            <h2 className="about-title">
              {/* Let’s 👋 <span>Work</span> Together */}
              Feel free to drop me a message anytime — I’ll get back to you
              soon.
            </h2>
            <p className="gb-text">
              I’m here to help if you are searching for a Frontend Developer to
              bring your idea to life or a partner to help take your business to
              the next level.
            </p>

            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-6">
                  <div className="form-box">
                    <label className="mb-2">Name</label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Type Your Name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="form-box">
                    <label className="mb-2">Email</label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Type Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="form-box">
                    <label className="mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="form-box">
                    <label className="mb-2">Message</label>
                    <textarea
                      name="message"
                      placeholder="Type details about your inquiry"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="portfolio-btn cursor-pointer"
                >
                  {isSending ? "Sending..." : "Send"}
                </button>

                {status && (
                  <p className="text-sm mt-3 text-green-500">{status}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
