import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full flex-col justify-center overflow-hidden shadow-lg sm:w-fit   sm:flex-row sm:rounded-3xl">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}
