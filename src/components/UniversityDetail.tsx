"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UniversityArray, universityData } from "@/data/UniversityData";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { universityType } from "@/types/university.types";
import { useEffect, useState } from "react";
import { getUniversityData } from "@/fetch/getUniversityData";

export default function UniversityDetail({
  isSmallDevice,
  selectedCollege,
  uniDatas,
}: {
  isSmallDevice: any;
  uniDatas: any;
  selectedCollege: any;
}) {
  let uni = uniDatas[selectedCollege];

  const [showMore, setShowMore] = useState(false);
  function handleShowMore() {
    setShowMore(!showMore);
  }
  console.log(uni);

  console.log(universityData);

  return (
    <>
      <section
        className={`   flex-1 rounded-full  relative top-8 bg-white md:top-0  `}
      >
        <div className=" md:rounded-lg ">
          <Image
            src={uni?.cover_pic}
            height={200}
            width={400}
            alt="cover"
            className=" w-full  h-44  object-cover object-center md:rounded-t-2xl"
          />
        </div>
        <Card className=" px-10 rounded-t-none ">
          <CardHeader>
            <div className=" flex items-center gap-4">
              <div className=" border  rounded-full w-fit">
                <Image src={uni?.img} height={70} width={70} alt="uni" />
              </div>
              <div>
                <CardTitle className=" text-xl text-primary font-medium underline">
                  {uni?.college_name} - {uni?.city}
                </CardTitle>
                <CardDescription className=" text-sm  flex items-center mt-2 gap-2">
                  <MapPin />
                  {uni?.city}, {uni?.state}, {uni?.country_code}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardTitle className=" text-primary underline mt-14">
              {uni?.course_level} - {uni?.course_name}
            </CardTitle>
            <Button className="  capitalize text-base  tracking-wide mt-14">
              check eligibility now
            </Button>

            <CardTitle className=" text-base font-medium mt-12">
              Program Summary
            </CardTitle>
            {/* <CardContent> */}
            <CardDescription
              className="   max-w-4xl text-wrap  text-base  truncate  overflow-hidden  "
              dangerouslySetInnerHTML={{
                __html: showMore
                  ? uni?.description
                  : uni?.description.substring(0, 230) + "...",
              }}
            ></CardDescription>
            {/* </CardContent> */}

            <CardContent className=" w-full   flex   items-center mt-4">
              <Button
                onClick={handleShowMore}
                className=" mx-auto  bg-transparent hover:bg-slate-200 focus-within:ring  text-black "
              >
                Show {showMore ? "Less" : "More"}
                {showMore ? (
                  <ChevronUp className=" ml-4" />
                ) : (
                  <ChevronDown className=" ml-4" />
                )}
              </Button>
            </CardContent>
            {/* <div> */}

            <Card className="  flex flex-col lg:grid  lg:grid-cols-2 mt-8 ">
              {[
                "Program level",
                "Program Length",
                "Tuition",
                "Application Fee",
                "Cost of Living",
              ].map((title, index) => {
                return (
                  <div key={index}>
                    <CourseDetail title={title} index={index} uni={uni} />
                  </div>
                );
              })}
              {/* </div> */}
            </Card>
          </CardContent>
          <CardContent className=" mt-8">
            <CardTitle className="  font-normal">
              Admission Requirements
            </CardTitle>
            <CardDescription className=" text-sm font-medium tracking-wide mt-8">
              Academic Background
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button className=" text-primary bg-blue-100 mx-auto mt-8 text-base">
              Log in to View All Requirements
            </Button>
          </CardFooter>
        </Card>
      </section>
    </>
  );
}

export function CourseDetail({
  index,
  title,
  uni,
}: {
  title: string;
  index: number;
  uni: universityType;
}) {
  return (
    <>
      <Card className=" border-none shadow-none">
        <CardContent className=" flex  gap-4">
          <Image
            src={`/svg${index + 1}.svg`}
            className=" "
            height={40}
            width={40}
            alt="logo"
          />
          <div>
            <CardTitle className=" text-base font-medium tracking-wide">
              {(index == 0 && uni?.course_level) ||
                (index == 1 && uni?.period) ||
                (index == 2 && `$${uni?.amount} USD / Year`) ||
                (index == 3 && `$${uni?.application_fee} CAD`) ||
                (index == 4 && `$${uni?.cost_of_living} CAD / Year`)}
            </CardTitle>
            <CardDescription className=" text-sm">{title}</CardDescription>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
