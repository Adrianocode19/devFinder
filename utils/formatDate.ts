import dayjs from "dayjs";

export const formatDate = (iso: string) => {
  return dayjs(iso).format("DD/MM/YYYY HH:mm");
};
