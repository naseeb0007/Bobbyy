import React from "react";

const UpperNavbar = () => {
  return (
    <div className="bg-gray-200 z-50">
      <div className="overflow-hidden">
        <h1 className="text-red-600 font-bold my-2 items-center text-md whitespace-nowrap animate-marquee">
          Inviting all Nurses and doctors for our Ongoing Weekly Virtual interview
          for UK/Ireland/Kuwait/UAE/Oman/Germany/France and many other locations |
          <span className="text-green-600"> Hurry Enroll in IELTS/TOEF/Prometric classes today Call On 9335920991</span>
        </h1>
      </div>
      {/* Black line after the navbar */}
      <div className="border-b-2 border-black"></div>
    </div>
  );
};

export default UpperNavbar;
