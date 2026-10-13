import Header from "./widgets/header/Header.jsx";
import Footer from "./widgets/footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh]">
        {/* сюда друг и ты будете добавлять секции */}
      </main>
      <Footer />
    </>
  );
}