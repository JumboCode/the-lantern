export type EventType = {
  image: string;
  type: "Add Event" | "Edit Event";
  id: string;
  name: string;
  description: string;
  date: Date;
  time: Date;
  location: string;
  host: string;
  imageURL: string;
};

export type EventBoxProps = {
  event: EventType;
  isAdminEdit: boolean;
}