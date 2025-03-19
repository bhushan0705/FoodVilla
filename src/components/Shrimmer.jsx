const Shrimmer = () => {
  return (
    <>
      {Array(9)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="p-16 flex flex-col items-center gap-[10px]"
          >
            {/* Rectangular skeleton */}
            <div className="w-[200px] h-[150px] bg-[#222] animate-pulse rounded"></div>
            {/* First text skeleton */}
            <div className="w-[150px] h-[30px] bg-[#333] animate-pulse rounded"></div>
            {/* Second text skeleton */}
            <div className="w-[100px] h-[20px] bg-[#333] animate-pulse rounded"></div>
            {/* Rounded button skeleton */}
            <div className="w-[120px] h-[40px] bg-[#444] animate-pulse rounded-lg"></div>
          </div>
        ))}
    </>
  );
};

export default Shrimmer;
