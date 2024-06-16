const Shimmer = () => {
    return new Array(20).fill(0).map(() => (
        <div className="custom-card mb-4 ">
          <div className="image">
            <div className="shimmer-img"></div>
          </div>
          <div>
          <div className="content">
              <h4 className="shimmerline mb-2 mt-2"></h4>
              <div className="d-flex mb-2 justify-content-between">
                <span className="shimmerline" style={{width:"50px"}}></span> 
                <span className="shimmerline" style={{width:"50px"}}></span>
                </div>
              <div className="cuisines shimmerline mb-2"></div>
              <p className="shimmerline mb-2"></p>
          </div>
      </div>  
      </div>
 )); 
};

export default Shimmer;