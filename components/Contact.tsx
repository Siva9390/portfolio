"use client";

import emailjs from "@emailjs/browser";

export default function Contact() {

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6rg2s0q",   // replace with your service ID
      "template_y43t9a8",  // replace with your template ID
      e.currentTarget,
      "Bed5mQaWixcNE8CPU"       // replace with your public key
    ).then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message");
        console.log(error);
      }
    );

    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Get in Touch</h3>

          <p className="text-gray-400">
            I am open to job opportunities and collaborations.
          </p>

          <p>📍 Hyderabad, India</p>

          <p>
            📧{" "}
            <a
              href="mailto:munnellisivanarayana@gmail.com"
              className="text-purple-400"
            >
              munnellisivanarayana@gmail.com
            </a>
          </p>

          <p>
            📞{" "}
            <a href="tel:+919390803515" className="text-purple-400">
              +91 9390803515
            </a>
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/Siva9390"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/munnelli-sivanarayana-408ba8271"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-lg bg-gray-800"
            required
          />

          <button
            type="submit"
            className="bg-purple-600 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}