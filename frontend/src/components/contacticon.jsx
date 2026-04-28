import { FaPhoneAlt } from "react-icons/fa";

 function CallButton() {
  return (
    <a
      href="tel:+918957239847"
      className="fixed bottom-6 right-6 z-50 
      bg-green-500 hover:bg-green-600 text-white 
      p-4 rounded-full shadow-lg 
      transition duration-300 animate-bounce"
    >
      <FaPhoneAlt size={20} />
    </a>
  );
}
export default CallButton;