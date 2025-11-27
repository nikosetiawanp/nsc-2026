export type Company = {
  name: string;
  image: string;
  days: {
    date: string;
    schedules: {
      time: string;
      event: string;
    }[];
  }[];
};
