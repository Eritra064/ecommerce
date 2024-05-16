const NotFound = () => {
  return (
    <div style={{padding: "200px"}} className="container d-flex flex-column justify-content-center align-items-center mx-auto">
      <p className="font-weight-bold" style={{fontSize: "70px"}}>404 Not Found</p>
      <p>Your visited page not found. You may go home page.</p>
      <button
        className="border-0 p-3 rounded"
        style={{
          width: "200px",
          backgroundColor: "rgb(184, 43, 43)",
          color: "white",
        }}
      >
        Back to home page
      </button>
    </div>
  );
};

export default NotFound;
