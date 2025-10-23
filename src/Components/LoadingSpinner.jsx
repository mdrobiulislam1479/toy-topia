import { FadeLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="min-h-dvh flex justify-center items-center">
      <FadeLoader color="skyblue" />
    </div>
  );
};

export default LoadingSpinner;
