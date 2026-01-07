import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: "",
        experience: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct email body
        const subject = `Job Application: ${formData.role} - ${formData.name}`;
        const body = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Role: ${formData.role}
Experience: ${formData.experience}

Additional Details:
${formData.message}
    `.trim();

        // Open mail client
        window.location.href = `mailto:info@lebami.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        toast({
            title: "Opening Email Client",
            description: "Please complete the submission by sending the email that just opened.",
        });
    };

    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <h1 className="section-title gradient-text mb-4">Join Our Team</h1>
                        <p className="text-muted-foreground">
                            We're always looking for talented individuals to help us build the future.
                            Send us your details and we'll get back to you.
                        </p>
                    </div>

                    <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                                        Full Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-white/5 border-white/10 focus:border-primary/50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                        Phone Number
                                    </label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        required
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="bg-white/5 border-white/10 focus:border-primary/50"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                                        Email Address
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-white/5 border-white/10 focus:border-primary/50"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="role" className="text-sm font-medium text-foreground">
                                        Role Applied For
                                    </label>
                                    <Input
                                        id="role"
                                        name="role"
                                        required
                                        placeholder="e.g. Civil Engineer"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="bg-white/5 border-white/10 focus:border-primary/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="experience" className="text-sm font-medium text-foreground">
                                    Years of Experience
                                </label>
                                <Input
                                    id="experience"
                                    name="experience"
                                    required
                                    placeholder="e.g. 2 years"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="bg-white/5 border-white/10 focus:border-primary/50"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground">
                                    Additional Details / Cover Letter
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell us about yourself..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="min-h-[120px] bg-white/5 border-white/10 focus:border-primary/50"
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg font-orbitron tracking-wider"
                            >
                                Send Application <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default Careers;
