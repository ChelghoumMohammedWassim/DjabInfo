import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eo40dgb",
        "template_w2tdb5s",
        form.current,
        "ADCLz7K8SamoT_e_6"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          setError(null);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setError("An error occurred while sending the message.");
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 max-w-lg mx-auto p-6">

      {isSent && (
        <p className="text-green-40000 mb-4">Message sent successfully!</p>
      )}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label htmlFor="user_name" className="block mb-1 font-medium">
          Nom
          </label>
          <input
            autoComplete="off"
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-2 border bg-neutral-800 border-neutral-900 rounded-md focus:ring-2 focus:ring-purple-800  focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="user_email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            autoComplete="off"
            type="email"
            id="user_email"
            name="from_name"
            placeholder="Your Email"
            required
            className="w-full p-2 border bg-neutral-800 border-neutral-900 rounded-md focus:ring-2 focus:ring-purple-800  focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            autoComplete="off"
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-2 border bg-neutral-800 border-neutral-900 rounded-md focus:ring-2 focus:ring-purple-800 focus:outline-none h-28"
          ></textarea>
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            type="submit"
            className="w-1/3 bg-purple-800   py-2 px-4 rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-700 focus:ring-offset-2"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
