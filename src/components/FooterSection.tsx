import { Cross, Mail, MapPin, Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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
