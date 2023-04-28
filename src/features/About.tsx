import { Sidebar } from "../common/Sidebar";
import { Header } from "../common/Header";
export const About: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <section className="mt-20">
        <p>
          Welcome to site with random photos of Dogs and Cats. If you like some
          photo, you can add it to favourite list. Enjoy!
        </p>
      </section>
    </>
  );
};
