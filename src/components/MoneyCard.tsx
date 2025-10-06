interface MoneyCardProps {
  amount: number;
}

const MoneyCard = ({ amount }: MoneyCardProps) => {
  return (
    <button className="aspect-square bg-[#7EC492]  rounded-2xl flex flex-col  items-center justify-center hover:bg-white/35 transition-all active:scale-95 border-2 border-white  shadow-3xl">
      <div className="w-8 h-8 rounded-full bg-[#1e3a4c] flex items-center justify-center mb-2 mt-2">
        <span className="text-white text-xl font-bold">₵</span>
      </div>
      <div className="text-white text-lg font-semibold">{amount}</div>
    </button>
  );
};

export default MoneyCard;
