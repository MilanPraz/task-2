import { universityData } from "@/data/UniversityData";

export async function getUniversityData() {
  const response = await fetch(universityData).then((res) => res.json());

  const universitys = await response;
  console.log(universitys);
  return universitys;
}

// getUniversityData();
