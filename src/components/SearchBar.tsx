import { ChevronRight, Search, Settings2 } from "lucide-react";
import { ArrowDownWideNarrow } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "./ui/checkbox";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export let optionsArray = [
  {
    title: "Location",
  },
  {
    title: "Program Level",
  },
  {
    title: "Discipline",
  },
  {
    title: "Tutuion fee (USD)",
  },
  {
    title: "Intakes",
  },
  {
    title: "Duration",
  },
  {
    title: "All filters",
    icon: <Settings2 className=" text-primary mr-1 group-hover:text-white" />,
  },
];
export default function Searchbar({
  setSearch,
  search,
}: {
  setSearch: (search: string) => void;
  search: string;
}) {
  const [NoOfFilters, setNoOfFilters] = useState<number>(0);
  const isMediumDevice: boolean = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  useEffect(() => {
    console.log(isMediumDevice);
    isMediumDevice && setNoOfFilters(4);
    isSmallDevice && setNoOfFilters(6);
    isLargeDevice && setNoOfFilters(0);
  }, [isMediumDevice, isSmallDevice, isLargeDevice]);
  return (
    <>
      {/* <h2>Search Bar</h2> */}
      <section className=" max-w-7xl mx-auto">
        <div>
          {/* SearchBAr SSection */}
          <div className=" flex gap-4">
            <div className=" w-full border rounded-md flex items-center pl-2 focus-within:border-primary focus-within:border-2">
              <Search />

              <Input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className=" outline-none border-none"
                type="text"
                placeholder="Search for programs, schools ,or other keywords"
              />
            </div>
            <Button>Search</Button>
          </div>
          {/* FILTER SECTION */}
          <div className=" flex justify-between mt-4">
            <div className="  flex flex-wrap gap-2">
              {optionsArray
                ?.slice(NoOfFilters, optionsArray.length)
                .map((option, index) => (
                  <div key={index}>
                    <CustomSelect title={option.title} option={option} />
                  </div>
                ))}
            </div>

            {/* SORTING */}
            <div>
              <Button className=" bg-background border hover:bg-slate-100 hover:drop-shadow-none   text-black font-normal">
                Sort <ArrowDownWideNarrow className=" ml-4" />{" "}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function CustomSelect({
  title,
  option,
}: {
  title: string;
  option: any;
}) {
  if (option?.icon) {
    return (
      <Button className=" border border-primary group hover:text-white bg-blue-100 text-primary">
        {option?.icon && option.icon} All filters
      </Button>
    );
  }

  return (
    <>
      <Select>
        <SelectTrigger className={`w-auto`}>
          <SelectValue placeholder={title} />
        </SelectTrigger>
        <SelectContent className=" h-48 overflow-y-scroll">
          <SelectGroup>
            <SelectLabel className=" flex justify-between gap-2 items-center w-full">
              {" "}
              <span className=" flex items-center gap-2">
                <Checkbox id="us" /> United States
              </span>
              <ChevronRight className=" text-gray-400   justify-end justify-items-end justify-self-end text-right" />
            </SelectLabel>
            <SelectLabel className=" flex justify-between gap-2 items-center w-full">
              {" "}
              <span className=" flex items-center gap-2">
                <Checkbox id="us" /> Canada
              </span>
              <ChevronRight className=" text-gray-400   justify-end justify-items-end justify-self-end text-right" />
            </SelectLabel>
            <SelectLabel className=" flex justify-between gap-2 items-center w-full">
              {" "}
              <span className=" flex items-center gap-2">
                <Checkbox id="us" /> United Kingdom
              </span>
              <ChevronRight className=" text-gray-400   justify-end justify-items-end justify-self-end text-right" />
            </SelectLabel>
            <SelectLabel className=" flex justify-between gap-2 items-center w-full">
              {" "}
              <span className=" flex items-center gap-2">
                <Checkbox id="us" /> Australia
              </span>
              <ChevronRight className=" text-gray-400   justify-end justify-items-end justify-self-end text-right" />
            </SelectLabel>
            <SelectLabel className=" flex justify-between gap-2 items-center w-full">
              {" "}
              <span className=" flex items-center gap-2">
                <Checkbox id="us" /> Ireland
              </span>
              <ChevronRight className=" text-gray-400   justify-end justify-items-end justify-self-end text-right" />
            </SelectLabel>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
