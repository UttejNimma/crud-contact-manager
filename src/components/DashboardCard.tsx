import React from "react";

interface DashboardCardProps {
  title: string;
  numbers: number;
}

// function to provide color based on provided title
const color = (title: string): string => {
  if (title === "total cases") {
    return "text-green-500";
  } else if (title === "deaths") {
    return "text-red-500";
  } else if (title === "active") {
    return "text-purple-500";
  } else {
    return "text-yellow-500";
  }
};

const DashboardCard: React.FC<DashboardCardProps> = ({ title, numbers }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-md transition-all delay-150 duration-300 ease-in-out hover:scale-110 hover:cursor-pointer">
      <div className="text-xl font-bold capitalize">{title}</div>
      <div className={`text-4xl  font-bold  md:text-2xl ${color(title)}`}>
        {numbers}
      </div>
    </div>
  );
};

export default DashboardCard;
