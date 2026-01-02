import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { MapPin, Phone, Mail, Send, Facebook, Youtube, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="grid-bg opacity-30" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4">
              GET IN TOUCH
            </p>
            <h1 className="section-title gradient-text mb-6">
              Let's Build Together
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready to transform your vision into reality? Reach out to our team
              and let's discuss your next project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard hover={false}>
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <h2 className="font-orbitron text-2xl font-semibold gradient-text mb-6">
                    Send Us A Message
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                      placeholder="Subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Comment or Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground resize-none"
                      placeholder="Your thoughts"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-neon w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </span>
                  </button>
                </form>
              </GlassCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Info Cards */}
              <GlassCard>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">Visit Us</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Lebami Builders And Developers,<br />
                        Upasana Arcade, Thottakkara,<br />
                        Ottapalam, Kerala
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.1}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">Give Us a Call</h3>
                      <a href="tel:+917025720002" className="text-muted-foreground hover:text-primary transition-colors block">
                        +91 70257 20002
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.2}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">Email Us</h3>
                      <a href="mailto:info@lebami.in" className="text-muted-foreground hover:text-primary transition-colors block">
                        info@lebami.in
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.3}>
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-orbitron text-lg font-semibold text-foreground mb-2">Other Locations</h3>
                      <div className="space-y-4">
                        <div>
                          <strong className="text-primary block mb-1">India</strong>
                          <p className="text-muted-foreground text-sm">
                            Lebami Builders And Developers,<br />
                            Upasana Arcade, Thottakkara,<br />
                            Ottapalam, Kerala
                          </p>
                        </div>
                        <div>
                          <strong className="text-primary block mb-1">Qatar</strong>
                          <p className="text-muted-foreground text-sm">
                            Lebami Builders And Developers,<br />
                            building 248 streetn790,<br />
                            Doha, Qatar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Social Links */}
              <GlassCard delay={0.4}>
                <div className="p-6">
                  <h3 className="font-orbitron text-lg font-semibold text-foreground mb-4">Follow us here</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Facebook, href: "#", label: "Facebook" },
                      { icon: Instagram, href: "#", label: "Instagram" },
                      { icon: Youtube, href: "#", label: "Youtube" },
                    ].map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 glass-panel flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-primary" />
                      </a>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <GlassCard hover={false}>
            <div className="p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LEBAMI Office Location"
              />
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
};

export default Contact;
