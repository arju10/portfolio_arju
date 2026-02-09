import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/arju10", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/arju10/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    {
      icon: Mail,
      href: "mailto:mst.tahminajerinarju@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 px-4 border-t border-tech-border bg-tech-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Arju
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building the future with secure, intelligent solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:mst.tahminajerinarju@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" /> mst.tahminajerinarju@gmail.com
              </a>
              <a
                href="tel:+8801749782201"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" /> +880 1749-782201
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Shahjadpur, Sirajgonj
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {[
                "About",
                "Experience",
                "Skills",
                "Projects",
                "Blog",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 py-6 border-t border-tech-border">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="text-center pt-4">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" />{" "}
            by Arju
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
