import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Send, User, MessageSquare } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

    setIsSubmitting(false);

    // You can add actual form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Let's Connect
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with
                passionate people. Whether you have a question, a project idea,
                or just want to say hello, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg">
                  <Mail className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    Email
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    morenomatthew83@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg">
                  <User className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    Response Time
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Usually within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-lg">
                  <MessageSquare className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    Preferred Contact
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Email or LinkedIn
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <Card className="bg-white/80 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 shadow-2xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-900 dark:text-white">
                Send a Message
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-400">
                Fill out the form below and I'll get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-slate-700 dark:text-slate-200"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-slate-700 dark:text-slate-200"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-slate-700 dark:text-slate-200"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-slate-700 dark:text-slate-200"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-slate-50 dark:bg-slate-700/50 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 h-auto transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
