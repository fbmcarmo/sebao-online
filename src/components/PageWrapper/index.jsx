import Footer from "../Footer";
import Header from "../Header";

export default function PageWrapper({children}){
    return (
        <div className="w-full h-screen">
            <Header />
            {children}
            <Footer />
        </div>
    )
}