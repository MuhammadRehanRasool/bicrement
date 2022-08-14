import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import timeGridPlugin from "@fullcalendar/timegrid";
const TimeTable = () => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      className="w-full h-full"
      slotLabelFormat={{
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: true,
        meridiem: "short",
      }}
    />
  );
};

export default TimeTable;
