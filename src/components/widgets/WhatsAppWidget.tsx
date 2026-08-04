import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppWidgetProps {
  phoneNumber: string; 
  message?: string;
}

const WhatsAppWidget = ({
  phoneNumber,
  message = "Hi, I'd like to know more about your services.",
}: WhatsAppWidgetProps) => {
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
     className="
         fixed
         bottom-6
         right-6
         z-50
         w-14 h-14
         flex items-center justify-center
         rounded-full
         bg-green-500
         hover:bg-green-600
         shadow-lg
         hover:shadow-xl
         transition-all
         duration-300
         hover:-translate-y-1
         cursor-pointer">
      <FaWhatsapp className="text-white text-3xl" />
    </button>
  );
};

export default WhatsAppWidget;