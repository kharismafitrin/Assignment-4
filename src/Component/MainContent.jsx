import CurrencyComponent from "./CurrencyComponent";
export default function MainContent() {
  return (
    <>
      <div
        class="row justify-content-center"
        style={{ height: "100vh", backgroundColor: "#E47947" }}
      >
        <div className="my-auto">
          <CurrencyComponent />
        </div>
      </div>
      <h3 className="text-white">base currency is USD</h3>
      <h3 className="text-white">base currency is USD</h3>
    </>
  );
}
