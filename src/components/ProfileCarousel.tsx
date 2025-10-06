import { useState } from "react";

interface Profile {
  id: number;
  name: string;
  image: string;
}

interface ProfileCarouselProps {
  profiles: Profile[];
}

const ProfileCarousel: React.FC<ProfileCarouselProps> = ({ profiles }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const nextProfile = (): void => {
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const prevProfile = (): void => {
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const getPrevIndex = (): number => {
    return (currentIndex - 1 + profiles.length) % profiles.length;
  };

  const getNextIndex = (): number => {
    return (currentIndex + 1) % profiles.length;
  };

  const onTouchStart = (e: React.TouchEvent): void => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent): void => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextProfile();
    } else if (isRightSwipe) {
      prevProfile();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentProfile = profiles[currentIndex];
  const prevProfileData = profiles[getPrevIndex()];
  const nextProfileData = profiles[getNextIndex()];

  return (
    <div className="flex-1 flex flex-col items-center justify-center pb-8 px-4">
      <div
        className="relative flex items-center justify-center mb-6 overflow-visible w-full max-w-md mx-auto touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="absolute -left-8 sm:-left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 opacity-40 overflow-hidden cursor-pointer transition-all hover:opacity-60"
          onClick={prevProfile}
        >
          <img
            src={prevProfileData.image}
            alt={prevProfileData.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center profile */}
        <div className="relative">
          <svg
            className="absolute -inset-2 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] overflow-visible"
            style={{ transform: "rotate(-135deg)", overflow: "visible" }}
          >
            <circle
              cx="80"
              cy="80"
              r="75"
              stroke="#EF4444"
              strokeWidth="6"
              fill="none"
              strokeDasharray="267 267"
              strokeDashoffset="200"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="sm:hidden"
            />
            <circle
              cx="90"
              cy="90"
              r="85"
              stroke="#EF4444"
              strokeWidth="6"
              fill="none"
              strokeDasharray="267 267"
              strokeDashoffset="200"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden sm:block"
            />
          </svg>

          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
            <img
              src={currentProfile.image}
              alt={currentProfile.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Right profile  */}
        <div
          className="absolute -right-8 sm:-right-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 opacity-40 overflow-hidden cursor-pointer transition-all hover:opacity-60"
          onClick={nextProfile}
        >
          <img
            src={nextProfileData.image}
            alt={nextProfileData.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h2
        key={currentProfile.id}
        className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 relative z-10 transition-all duration-300 ease-out"
      >
        {currentProfile.name}
      </h2>
    </div>
  );
};

export default ProfileCarousel;
