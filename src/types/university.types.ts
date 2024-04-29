import { StaticImageData } from "next/image";

export type universityType = {
  img: StaticImageData | string;
  college_name: string;
  city: string;
  state: string;
  country_code: string;
  course_name: string;
  degree: string;
  period: string;
  amount: number;
  cover_pic: StaticImageData | string;
  description: string;
  course_level: string;
  application_fee: number;
  cost_of_living: number;
};
