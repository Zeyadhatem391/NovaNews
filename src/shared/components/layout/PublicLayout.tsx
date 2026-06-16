import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

interface Props {
  children: React.ReactNode;
}
export default function PublicLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
