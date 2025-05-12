import Footer from "../Footer";
import Header from "../Header";

export default function PageWrapper({children}){
    return (
        <div className="w-full h-full min-h-screen flex flex-col">
            <Header />
            <div className="w-full h-full min-h-screen bg-gradient-to-t from-[#F5F5DC] to-[#FFFFFF]">
                {children} 
            </div>
            <Footer />
        </div>
    )
}