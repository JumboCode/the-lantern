import React from "react";

interface Props {
  date: Date;
}

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(date);

  // Function to add suffix to day
  const addSuffix = (day: number): string => {
    if (day > 3 && day < 21) return `${day}th`;
    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  };

  const parts = formattedDate.split(" ");
  const day = parseInt(parts[1], 10);
  parts[1] = addSuffix(day);

  return parts.join(" ");
};

export default formatDate;
