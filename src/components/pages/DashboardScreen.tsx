import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import MoneyCard from "../MoneyCard";
import ProfileCarousel from "../ProfileCarousel";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaChevronCircleRight } from "react-icons/fa";
import { profiles } from "../../data/profileData";
import Header from "../Header";

const DashboardScreen: React.FC = () => {
  const navigate = useNavigate();
  const [sliderPosition, setSliderPosition] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleStart = (_clientX: number): void => {
    setIsDragging(true);
  };
  // Slider movement handler
  const handleMove = (clientX: number): void => {
    if (!isDragging || !sliderRef.current) return;

    const rect: DOMRect = sliderRef.current.getBoundingClientRect();
    const maxWidth: number = rect.width - 56; //
    const newPosition: number = Math.max(
      0,
      Math.min(clientX - rect.left - 28, maxWidth)
    );
    setSliderPosition(newPosition);

    if (newPosition >= maxWidth * 0.9) {
      navigate("/top-up");
    }
  };

  const handleEnd = (): void => {
    setIsDragging(false);
    if (sliderRef.current) {
      const rect: DOMRect = sliderRef.current.getBoundingClientRect();
      const maxWidth: number = rect.width - 56;
      if (sliderPosition < maxWidth * 0.9) {
        setSliderPosition(0);
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    handleMove(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    handleMove(e.touches[0].clientX);
  };
  return (
    <div className="relative w-full min-h-screen flex flex-col overflow-x-hidden bg-white">
      <div className="relative w-full flex flex-col min-h-screen">
        <div className="relative flex-1 bg-white flex flex-col overflow-visible">
          {/* Header */}
          <div className="flex justify-end items-center px-4 sm:px-6 pt-4 sm:pt-6 pb-4">
            <Header />
          </div>
          {/* profiles */}
          <ProfileCarousel profiles={profiles} />
        </div>

        <div
          className="relative flex-1 px-4 sm:px-6 pb-8 flex flex-col justify-center -mt-24 sm:-mt-32"
          style={{
            background: "linear-gradient(180deg, #6FD48F 0%, #3A6E61 100%)",
          }}
        >
          <svg
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{ height: "140px" }}
            viewBox="0 0 500 250"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 0,0 L 500,0 L 500,100 Q 250,350 0,100 Z" fill="white" />
          </svg>

          <div className="max-w-md mx-auto w-full relative z-10 pt-28 sm:pt-36">
            <p className="text-white/80 text-sm font-medium text-center mt-4">
              Current balance
            </p>

            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a4c] mb-1">
                GHC 53.00
              </h1>
              <p className="text-white text-base font-medium mt-4">Top Up</p>
            </div>

            <div className="rounded-3xl border-t-1 border-white/80 p-2">
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6 mt-2">
                {[50, 100, 150, 200].map((amount) => (
                  <MoneyCard key={amount} amount={amount} />
                ))}
              </div>

              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <div className="w-full max-w-[290px] mx-auto">
                  <p className="text-white/80 mb-2 text-sm font-medium px-6 sm:px-2">
                    Custom Amount
                  </p>
                  <div className="bg-white flex items-center justify-center w-full rounded-xl px-6 sm:px-10 py-4 shadow-lg">
                    <input
                      type="text"
                      placeholder=""
                      className="w-full text-gray-400 text-center focus:outline-none text-base"
                    />
                  </div>
                </div>

                <div
                  className="block w-full max-w-[290px] mx-auto"
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleEnd}
                  onMouseLeave={handleEnd}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleEnd}
                >
                  <div
                    ref={sliderRef}
                    className="relative flex w-full items-center h-14 rounded-full bg-gradient-to-r from-[#AEC7BF] via-[#8BB0A3] to-[#427d68] overflow-hidden"
                  >
                    <div
                      className="absolute flex h-14 w-14 items-center justify-center flex-shrink-0 cursor-grab active:cursor-grabbing z-10"
                      style={{
                        transform: `translateX(${sliderPosition}px)`,
                        transition: isDragging
                          ? "none"
                          : "transform 0.3s ease-out",
                      }}
                      onMouseDown={handleMouseDown}
                      onTouchStart={handleTouchStart}
                    >
                      <div className="absolute h-full w-full rounded-full bg-[#5F9583]"></div>
                      <IoIosArrowRoundForward
                        size={30}
                        className="relative text-white"
                      />
                    </div>
                    <span className="text-sm sm:text-base font-semibold text-white absolute left-1/2 -translate-x-1/2">
                      {sliderPosition === 0
                        ? "Slide to Payment"
                        : "Keep sliding..."}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link to="/activity">
                <button className="text-white/90 text-sm font-medium flex items-center cursor-pointer justify-center gap-2 mx-auto hover:text-white transition-colors">
                  View activity history
                  <FaChevronCircleRight size={15} className="mt-1 text-white" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
