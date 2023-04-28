import { Sidebar } from "../common/Sidebar";
import { Header } from "../common/Header";
import { MainWrapper } from "../common/MainWrapper";
export const About: React.FC = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <MainWrapper>
        <p className="m-auto max-w-xl rounded-2xl p-12 pb-28 text-xl font-bold text-emerald-800 backdrop-blur">
          Welcome to the site with random photos of Dogs and Cats. If you like
          some photo, you can add it to the favourite list. Enjoy!
        </p>
      </MainWrapper>
    </>
  );
};
