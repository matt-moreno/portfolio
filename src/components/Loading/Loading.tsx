import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center md:left-[300px] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <ReactLoading type="bars" />
      <h1>Loading</h1>
    </div>
  );
}
