import React from "react";
export const Loader = () => (
    <div className="w-100 d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
);