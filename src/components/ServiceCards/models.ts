import { IconType } from "react-icons";


export interface ServiceCardData {
  name: string;
  description: string;
  icon: IconType;
  isFeatured: boolean;
  link: string;
}