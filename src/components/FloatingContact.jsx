import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  // WhatsApp number (no spaces, with country code)
  const whatsappNumber = "919995514001";
  const whatsappMessage = encodeURIComponent(
    "Hello Flow Dynamics, I would like to make an enquiry.",
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Call number
  const callNumber = "+914912953541";
  const callUrl = `tel:${callNumber}`;

  return (
    <div className="floating-contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fc-btn fc-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
      <a
        href={callUrl}
        className="fc-btn fc-call"
        aria-label="Call us"
        title="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
