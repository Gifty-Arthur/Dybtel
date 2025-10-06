import React from "react";
import map from "../../assets/map.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Header from "../Header";
import Button from "../Button";
import Title from "../PageTitle";

const TopUpScreen = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    amount: "",
    wardSerialId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Payment Successful!");
    navigate("/dashboard");
  };

  const formContent = (
    <div className="w-full rounded-3xl bg-[#eeeded] p-6 sm:p-8 shadow-lg">
      <div>
        <Header backTo="/" backText="Back to Login" showIcons={false} />{" "}
        <Title className="mb-6 mt-8">Top Up</Title>{" "}
      </div>

      {/* Top-Up form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-500"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-500"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="mb-2 block text-sm font-medium text-gray-500"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 bg-white p-3 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="wardSerialId"
            className="mb-2 block text-sm font-medium text-gray-500"
          >
            Ward serial ID
          </label>
          <div className="relative">
            <input
              type="text"
              id="wardSerialId"
              name="wardSerialId"
              value={formData.wardSerialId}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white p-3 pr-14 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              required
            />

            <button
              type="button"
              className="absolute top-0 right-0 flex h-full w-12 items-center justify-center rounded-r-lg bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300"
            >
              <FaPlus className="text-shadow-gray-300" />
            </button>
          </div>
          <Button type="submit">Proceed to Payment</Button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* mobile */}
      <div className="bg-[#eeeded] p-4 md:hidden min-h-screen">
        <div className="h-64 w-full">
          <img
            src={map}
            alt="World map"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
        <div className="relative -mt-24 flex justify-center pb-8">
          {formContent}
        </div>
      </div>
      {/* desktop */}
      <div className="hidden md:block relative min-h-screen w-full">
        <img
          src={map}
          alt="World map background"
          className="h-full w-full object-cover absolute inset-0"
        />

        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-md p-8">{formContent}</div>
        </div>
      </div>
    </div>
  );
};

export default TopUpScreen;
