export type EventType = {
  id?: string;
  name: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  host: string;
  imageURL: string;
  isPast: boolean;
};

export type EventBoxProps = {
  event: EventType;
  isAdminEdit: boolean;
  isPast: boolean;
};
