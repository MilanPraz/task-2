"use client";
import { useEffect, useState } from "react";
import Searchbar from "./SearchBar";
import Sidebar from "./Sidebar";
import UniversityDetail from "./UniversityDetail";
import { UniversityArray, universityData } from "@/data/UniversityData";
import UniversityWrapper from "@/common/UniversityWrapper";
import { universityType } from "@/types/university.types";

export default function Hero() {
  const [selectedCollege, setSelectedCollege] = useState<number>(0);
  const [uniDatas, setUniDatas] = useState<universityType[]>([]);
  const [search, setSearch] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setUniDatas(UniversityArray);
  }, []);
  console.log(uniDatas);

  useEffect(() => {
    let newArray = UniversityArray?.filter((data) => {
      console.log(data?.college_name);
      return data.college_name.toLowerCase().includes(search);
    });
    setUniDatas(newArray);
  }, [search]);

  console.log(search);
  return (
    <>
      <section className=" mt-8">
        <Searchbar setSearch={setSearch} search={search} />
        <div className=" mt-8 flex gap-2  w-full">
          <Sidebar
            setOpen={setOpen}
            uniDatas={uniDatas}
            setSelectedCollege={setSelectedCollege}
            selectedCollege={selectedCollege}
          />
          <UniversityWrapper
            open={open}
            setOpen={setOpen}
            uniDatas={uniDatas}
            selectedCollege={selectedCollege}
          />
        </div>
      </section>
    </>
  );
}
