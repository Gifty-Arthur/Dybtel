import Header from "../Header";
import { activityData } from "../../data/activityData";
import Title from "../PageTitle";

const ActivityHistoryScreen = () => {
  return (
    <div className="w-full min-h-screen font-sans overflow-x-hidden">
      <div className="relative min-h-screen pb-20">
        <div className="bg-white h-48 px-5 md:px-10 lg:px-16 pt-10">
          <Header backTo="/dashboard" backText="Back to Dashboard" />

          <Title className="mb-6 mt-8">Activity History</Title>
        </div>

        <main
          className="absolute top-28 left-0 right-0 bg-gradient-to-b from-[#2CAD51] via-[#2A7E4F] to-[#28594E] min-h-[calc(100vh-7rem)] p-5 md:p-8 md:mt-10 mt-20 pb-20"
          style={{
            borderTopLeftRadius: "50% 120px",
            borderTopRightRadius: "50% 120px",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg md:mt-20 mt-12 w-full">
              <div className="grid grid-cols-4 md:grid-cols-[0.5fr_2fr_1fr_1fr] bg-[#2C5B53] text-white/50 p-3 md:p-4 font-bold text-sm md:text-base">
                <span>ID</span>
                <span>Ward</span>
                <span>Date</span>
                <span>Amount</span>
              </div>

              <div className="text-white">
                {activityData.map((activity) => (
                  <div
                    key={activity.id}
                    className="grid grid-cols-4 md:grid-cols-[0.5fr_2fr_1fr_1fr] p-3 md:p-4 text-sm md:text-base font-medium items-center bg-[#64A78B] border-4 border-transparent hover:border-blue-500 active:border-blue-500 transition-all cursor-pointer"
                  >
                    <span>{activity.id}</span>
                    <span>{activity.ward}</span>
                    <span>{activity.date}</span>
                    <span>{activity.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ActivityHistoryScreen;
