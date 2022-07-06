
export const Loading = () => {
  return (
    <>
      <div className="loadingWrapper">
        <style jsx>{`
          .loadingWrapper {
            height: 100vh;
            width: 100vw;
            display: block;
          }
        `}</style>
        <div className="d-flex justify-content-center align-items-center h-100 w-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5 className="ms-3">Loading...</h5>
        </div>
      </div>
    </>
  );
};
