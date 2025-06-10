import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center md:left-[300px]">
      <ReactLoading type="bars" />
      <h1>Loading</h1>
    </div>
  );
}
