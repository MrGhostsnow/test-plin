import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function ContactFormPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header>
        <Navbar />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-24">
        <h1 className="text-5xl font-bold mb-7 border-b-4 border-orange-500 pb-2 text-black">
          Formulário de Contato
        </h1>
        <ContactForm />
      </main>
      <footer className="flex-shrink-0 h-[64px] flex flex-col bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
}
