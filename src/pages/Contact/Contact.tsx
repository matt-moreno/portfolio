import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { BsArrowUpRight, BsEnvelope, BsLinkedin, BsSend } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const emptyForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const directLinks = [
  {
    icon: BsEnvelope,
    label: "morenomatthew83@gmail.com",
    href: "mailto:morenomatthew83@gmail.com",
    external: false,
  },
  {
    icon: BsLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matthew-moreno-76b58880/",
    external: true,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const reduce = useReducedMotion();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpqdedpb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit message");
      }
    } catch (error) {
      console.error("API submission error:", error);
      setIsSubmitting(false);
      toast({
        title: "Message not sent",
        description:
          "Something went wrong. Try again, or email me directly instead.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(false);
    setFormData(emptyForm);
    toast({
      title: "Message sent",
      description: "Thanks for reaching out. I'll reply by email soon.",
      variant: "success",
    });
  };

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const fieldClass = "rounded-lg h-11";

  return (
    <div className="flex-1 flex items-center px-6 md:px-12 lg:px-16 pt-24 pb-16">
      {/* Intro left, form right; stacks under lg */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-20 items-start">
        <motion.div {...enter(0)}>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Get in touch
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-[42ch]">
            Questions, opportunities, or just want to say hello? Send a note
            and I'll usually reply within a day.
          </p>

          <ul className="mt-10 space-y-3">
            {directLinks.map(({ icon: Icon, label, href, external }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group inline-flex items-center gap-3 font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Icon aria-hidden="true" className="text-muted-foreground group-hover:text-primary transition-colors" />
                  {label}
                  {external && (
                    <BsArrowUpRight
                      aria-hidden="true"
                      className="text-xs text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          {...enter(0.1)}
          onSubmit={handleSubmit}
          className="space-y-5"
          aria-label="Contact form"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className={fieldClass}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className={fieldClass}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={fieldClass}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="rounded-lg resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto rounded-lg h-11 active:scale-[0.98] transition-[background-color,transform]"
          >
            {isSubmitting ? (
              <>
                <span
                  aria-hidden="true"
                  className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                />
                Sending
              </>
            ) : (
              <>
                <BsSend aria-hidden="true" />
                Send message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
