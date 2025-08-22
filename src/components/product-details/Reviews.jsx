import React from 'react'

export default function Reviews({ reviews }) {
    const total = reviews.length;
    const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
    const getPercentage = (stars) => {
        const count = reviews.filter((r) => r.rating === stars).length;
        return ((count / total) * 100).toFixed(0);
    };

    return (
        <div className="row gap-3 d-flex justify-content-between">
            <div className="col-md-4">
                <h3 className="h5 fw-bold mb-3">Customer Reviews</h3>
                <p className="fw-semibold mb-2">
                    {avgRating.toFixed(1)} out of 5
                </p>
                {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="d-flex align-items-center gap-2 mb-2">
                        <span className="me-2 small col-1">{star} star</span>
                        <div className="progress flex-grow-1" role="progressbar" aria-label="Example 20px high" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: "13px" }}>
                            <div className="progress-bar " style={{ width: `${getPercentage(star)}%`, background: '#DE7921' }}></div>
                        </div>
                        <span className="small ms-2 col-1" style={{ color: '#1F8394' }}>{getPercentage(star)}%</span>
                    </div>
                ))}
            </div>

            <div className="col-md-7">
                <ul className="list-group list-group-flush">
                    {reviews.map((review, index) => (
                        <li key={index} className="list-group-item ps-0">
                            <p className="fw-semibold d-flex align-items-center gap-2 mb-1">
                                {review.reviewerName}
                                <span className="text-warning">
                                    {"★".repeat(review.rating)}
                                    {"☆".repeat(5 - review.rating)}
                                </span>
                            </p>
                            <p className="text-muted mb-1">{review.comment}</p>
                            <p className="small text-secondary ">
                                {new Date(review.date).toLocaleDateString()}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
