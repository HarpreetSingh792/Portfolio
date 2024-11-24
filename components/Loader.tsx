import { ImSpinner9 } from "react-icons/im";
export const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ImSpinner9
        fill="white"
        width={150}
        height={150}
        className=" animate-spin duration-75"
      />
    </div>
  );
};
