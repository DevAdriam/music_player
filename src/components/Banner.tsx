import BannerCard from "./BannerCard";

const Banner = () => {
  const bannerList = [
    {
      title: "Get Lost",
      text: "in your music",
      background: "bg-gradient-to-b from-[#e63e80] to-[#bb2088]",
    },
    {
      title: "Mellow",
      text: "beats",
      background: "bg-gradient-to-b from-[#1ebcee] to-[#195cc9]",
    },
  ];
  return (
    <div className=" flex gap-10 ">
      {bannerList.map((item, index) => {
        return (
          <BannerCard
            background={item.background}
            text={item.text}
            title={item.title}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Banner;
