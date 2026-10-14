import Header from "./widgets/header/Header";
import Footer from "./widgets/footer/Footer";
import HomePage from "./pages/homepage/HomePage";

export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh]">
        <HomePage />
      </main>
      <Footer />
    </>
  );
}