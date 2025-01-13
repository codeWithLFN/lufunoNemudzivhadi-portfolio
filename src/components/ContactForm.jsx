import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("https://formspree.io/f/mzzzozze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setFormStatus("There was an error sending your message. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        className="container mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto mt-4"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8 p-8 bg-white rounded-2xl shadow-xl"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="prose lg:prose-xl">
              <p className="text-gray-600 leading-relaxed">
                Ready to discuss your next project? Feel free to reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-medium">lufuno.nemudzivhadi26@outlook.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full">
                  <FiPhone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium">+27 69 534 1208</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-xl space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 mt-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full p-4 mt-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>
            </div>

            {formStatus && (
              <motion.div
                className={`p-4 rounded-lg text-center ${
                  formStatus.includes("success") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p>{formStatus}</p>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-medium rounded-lg 
                       flex items-center justify-center space-x-2 hover:from-teal-700 hover:to-blue-700 
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 
                       transform transition-all duration-300 hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiSend className="w-5 h-5" />
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
