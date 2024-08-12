import React from "react";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <div className="container">
            <div className="pagination__wrapper">
                <div className="pagination__card">
                    <p className="pagination__txt">Power</p>
                    <h1 className="pagination__title-card">637 HP</h1>
                    <p className="pagination__text-card">With Boost Engaged</p>
                </div>
                <div className="pagination__card">
                    <p className="pagination__txt">Battery size</p>
                    <h1 className="pagination__title-card">93 kWh</h1>
                    <p className="pagination__text-card">Gross</p>
                </div>
                <div className="pagination__card">
                    <p className="pagination__txt">0-60 mph in</p>
                    <h1 className="pagination__title-card">3.1 sec</h1>
                    <p className="pagination__text-card">With Boost Engaged</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
