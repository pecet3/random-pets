import { Sidebar } from "../common/Sidebar";
import { Header } from "../common/Header";
export const About: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <section className="mt-20">
        <p>Hello, this is About section</p>
      </section>
    </>
  );
};
