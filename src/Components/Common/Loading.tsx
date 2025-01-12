const img = "https://res.cloudinary.com/dvshwrsiu/image/upload/v1725805675/name_qgig6n.svg";

const Loading = () => {
  return (
    <div className="grid">
      <div className="col-span-12 flex items-center justify-center sm:col-span-12 md:col-span-12 lg:col-span-12">
        <div className="App">
          <header className="App-header">
            <img src={img} className="App-logo" alt="logo" />
          </header>
        </div>
      </div>
    </div>
  );
};
export default Loading;
