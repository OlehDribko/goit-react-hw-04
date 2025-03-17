import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <div className="sweet-loading">
      <ClipLoader color="red" size={150} aria-label="Loading Spinner" data-testid="loader" />
    </div>
  );
}
export default Loader;
