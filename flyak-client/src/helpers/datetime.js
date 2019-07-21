import moment from "moment";

export const formatDate = datetime => moment(datetime).format("MMM DD YYYY");

export const formatTime = datetime => moment(datetime).format("h:mm a");

export const getDuration = (datetime1, datetime2) => {
  const start = moment(datetime1);
  const end = moment(datetime2);
  return moment.utc(end.diff(start)).format("HH:mm");
};
