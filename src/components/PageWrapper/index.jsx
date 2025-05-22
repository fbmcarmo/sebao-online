import { FaBookReader } from "react-icons/fa";
import Footer from "../Footer";
import Header from "../Header";

export default function PageWrapper({
  children,
  showHeader = true,
  showFooter = true,
  showLogo = false,
}) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      {showLogo && (
        <div className="w-full flex items-center justify-center gap-2 py-4">
          <FaBookReader color="#8B4513" size={40} />
          <p
            className="text-[20px] font-bold cursor-pointer whitespace-nowrap"
            onClick={() => (window.location.href = "/")}
          >
            Sebão Online
          </p>
        </div>
      )}
      {showHeader && <Header showLogo={showLogo} />}
      <div className="w-full h-full min-h-screen bg-gradient-to-t from-[#F5F5DC] to-[#FFFFFF]">
        {children}
      </div>
      {showFooter && <Footer />}
    </div>
  );
}