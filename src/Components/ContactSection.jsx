import {
  Instagram,
  Linkedin,
  Mail,
  MailOpenIcon,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/toast.css";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error("Please fill in all fields.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_gxm1kje',
        'template_ne3ggo8',
        e.target,
        '_eXmRtKxHh8CoRGwS'
      );
      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setFormData({
        from_name: '',
        from_email: '',
        message: ''
      });
      e.target.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error("Failed to send message. Please try again or email me directly.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-14 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. If you have a
          project in mind or just want to say hello, feel free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 justify-center items-center">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="text-primary" size={24} />
                </div>
                <div className="">
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a
                    href="mailto:Pujaraworkk@gmail.com"
                    className=" hover:text-primary text-muted-foreground transition-colors "
                  >
                    Pujaraworkk@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="text-primary" size={24} />
                </div>
                <div className="">
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <a
                    href="tel:+917973987282"
                    className=" hover:text-primary text-muted-foreground transition-colors "
                  >
                    +91 7973987282
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div className="">
                  <h4 className="text-lg font-semibold">Location</h4>
                  <a className=" hover:text-primary text-muted-foreground transition-colors ">
                    Panchkula, Haryana, India
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 ">
                <a
                  href="https://www.linkedin.com/in/shreyas-pujara-b170b8286/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin />
                </a>
                <a
                  href=""
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/pujarashreyas/?igsh=OGxlODk4bmI4em5x&utm_source=qr#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            <form onSubmit={handleSend} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="SP codes...."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-muted-foreground"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md resize-none border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                  isSubmitting && "opacity-50 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={true}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
