import { Cross, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

async function sendEmail(toast, form) {
  console.log(import.meta.env.VITE_EMAIL_SERVICE_ID, "service id");
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID, // service id
      import.meta.env.VITE_EMAIL_TEMPLATE_ID, // template id
      {
        name: "Rahul",
        email: "rahulkakkadan98@gmail.com",
        message:
          form.name.trim() + " " + form.phone.trim() + " " + form.query.trim(),
      },
      import.meta.env.VITE_PUBLIC_KEY, // public key
    )
    .then(() => {
      toast({
        title: "Query sent!",
        description: "We'll get back to you soon.",
      });
    })
    .catch(() => {
      toast({ title: "Failed to send message", variant: "destructive" });
    });
}

const FooterSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", query: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.query.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    await sendEmail(toast, form);
    setForm({ name: "", phone: "", query: "" });
  };
  console.log(import.meta.env.VITE_EMAIL_SERVICE_ID, "service id");

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Church Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cross className="w-5 h-5 text-secondary" />
              <span className="font-display text-lg font-bold">
                CSI Vishranthi Church
              </span>
            </div>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed">
              A welcoming community of believers committed to growing in faith,
              serving one another, and sharing the love of Christ with the
              world.
            </p>
          </div>

          {/* Service Times */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">
              Service Times
            </h3>
            <ul className="space-y-3 text-primary-foreground/60 font-body text-sm">
              <li>
                <strong className="text-secondary">Sunday Worship:</strong> 8:30
                AM & 10:00 AM
              </li>
              <li>
                <strong className="text-secondary">Youth meet:</strong> 10:00
                AM. 1st Sunday of every month
              </li>
              <li>
                <strong className="text-secondary">
                  Womens Prayer Meeting:
                </strong>{" "}
                6:00 PM
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-primary-foreground/60 font-body text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                Bockapatna Mangalore 575003
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                +91 7829780587
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                For Hall booking : +91 9741629778
              </li>
            </ul>
          </div>
        </div>

        {/* Hall Booking Form */}
        <div>
          <h3 className="font-display text-lg font-bold mb-4">
            Hall Booking Enquiry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-9 text-sm"
            />
            <Input
              type="number"
              placeholder="Your Phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-9 text-sm"
            />
            <Textarea
              placeholder="Your Query"
              value={form.query}
              onChange={(e) => setForm({ ...form, query: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 min-h-[60px] text-sm resize-none"
            />
            <Button
              type="submit"
              variant="secondary"
              size="sm"
              className="w-full gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              Send Query
            </Button>
          </form>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 font-body text-sm">
            © {new Date().getFullYear()} CSI Vishranthi Church. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
