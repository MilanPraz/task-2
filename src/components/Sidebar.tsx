import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UniversityArray } from "@/data/UniversityData";
import { universityType } from "@/types/university.types";
import Image from "next/image";

export default function Sidebar({
  uniDatas,
  setOpen,
  selectedCollege,
  setSelectedCollege,
}: {
  uniDatas: universityType[];
  setOpen: (open: boolean) => void;
  setSelectedCollege: (selectedCollege: number) => void;
  selectedCollege: number;
}) {
  return (
    <>
      <section className=" flex flex-col gap-4  w-full  md:w-auto   h-screen   pr-4  overflow-y-scroll">
        <div>
          <h4 className="  font-semibold text-lg">10,000 programs</h4>
        </div>
        {uniDatas?.map((uni, index: number) => (
          <div
            onClick={() => {
              setOpen(true);
              setSelectedCollege(index);
            }}
            key={index}
            className={`cursor-pointer`}
          >
            <CustomCard
              uni={uni}
              index={index}
              selectedCollege={selectedCollege}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export function CustomCard({
  uni,
  index,
  selectedCollege,
}: {
  uni: universityType;
  index: any;
  selectedCollege: any;
}) {
  return (
    <>
      <Card
        className={`  ${
          index == selectedCollege && "border border-primary"
        }  w-full md:w-[300px]`}
      >
        <CardHeader>
          <div className=" flex items-center gap-2">
            <div className=" border  rounded-full w-fit">
              <Image src={uni.img} height={40} width={40} alt="uni" />
            </div>
            <div>
              <CardTitle className=" text-xs font-semibold ">
                {uni.college_name} - {uni.city}
              </CardTitle>
              <CardDescription className=" text-xs">
                {uni.city}, {uni.state}, {uni.country_code}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className=" text-sm  my-2 font-medium">
            {uni.course_name}
          </CardTitle>
          <div className=" flex  items-center gap-1">
            <CardDescription className=" text-xs">{uni.degree}</CardDescription>
            <span className="  text-foreground font-thin ">|</span>
            <CardDescription className=" text-xs">{uni.period}</CardDescription>
          </div>
        </CardContent>
        <CardFooter>
          <CardTitle className=" mt-2 text-sm font-medium">
            $ 10,457 USD / Year
          </CardTitle>
        </CardFooter>
      </Card>
    </>
  );
}
