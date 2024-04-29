import UniversityDetail from "@/components/UniversityDetail";
import { useMediaQuery } from "@uidotdev/usehooks";
import { X } from "lucide-react";

export default function UniversityWrapper({
  open,
  selectedCollege,
  uniDatas,
  setOpen,
}: {
  open: any;
  selectedCollege: any;
  uniDatas: any;
  setOpen: any;
}) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  console.log(isSmallDevice);
  console.log(open);

  return (
    <>
      <section
        className={`flex-1   overflow-y-scroll ${
          open && isSmallDevice
            ? "fixed top-0 left-0 overflow-scroll h-full "
            : "hidden md:block"
        } md:overflow-hidden`}
      >
        <div className="flex fixed z-40 top-0 left-0 w-full  items-center justify-between py-4 px-6 md:hidden bg-white">
          <span className=" text-base font-medium">Program Preview</span>
          <span
            className="  bg-white p-2 border-2 border-black rounded-lg cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <X className=" h-5 w-5" />
          </span>
        </div>
        <UniversityDetail
          isSmallDevice={isSmallDevice}
          uniDatas={uniDatas}
          selectedCollege={selectedCollege}
        />{" "}
      </section>
    </>
  );
}
