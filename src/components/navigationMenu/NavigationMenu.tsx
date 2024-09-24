export default function NavigationBar({
  navMenuContents,
  setIndex,
  index,
}: {
  navMenuContents: any[];
  setIndex: any;
  index: number;
}) {
  return (
    <div className="h-screen md:h-[86vh] md:border-black md:border-2 md:rounded-xl relative md:bg-[#ffae482b] flex flex-col space-y-2 md:pl-3 md:pr-6 px-4 md:px-0 md:mt-4 pt-4 md:pt-12">
      {navMenuContents.map((item, i) => {
        return (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
            }}
            className={`${
              index === i ? "border-black" : "border-transparent"
            } min-w-[11rem] flex flex-row space-x-2 p-2 cursor-pointer border rounded-md hover:border-black hover:bg-[#e9b166] group`}
          >
            <span className="group-hover:text-white duration-200">
              {item?.icon}
            </span>

            <h1 className="text-[#4d4e51] font-bold group-hover:text-white duration-200">
              {item?.title}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
