import Header from "../../components/header/Header";
import Hero from "./Hero.tsx";
import bg from "../../assets/logRegBG.svg";
const HomePage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden" >
    <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute top-0 h-screen w-screen overflow-hidden"
      ></div>
      <Header />
      <Hero />
    </div>
  );
};

export default HomePage;
