import ReactLoading from "react-loading";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading">
      <ReactLoading type="bars" />
      <h1>Loading</h1>
    </div>
  );
}
