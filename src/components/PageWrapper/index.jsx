import Footer from "../Footer";
import Header from "../Header";

export default function PageWrapper({children, showHeader = true, showFooter = true}){
    return (
        <div className="w-full h-full min-h-screen flex flex-col">
            {showHeader && <Header />}
            <div className="w-full h-full min-h-screen bg-gradient-to-t from-[#F5F5DC] to-[#FFFFFF]">
                {children} 
            </div>
            {showFooter && <Footer />}
        </div>
    )
}