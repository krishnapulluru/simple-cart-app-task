import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
const Rating = (props) => {
    const { rating } = props;
    const ratingDisp = (rating) => {
        if (rating > 0) {
            let ratingStr = [];
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    ratingStr.push(
                        <li key={i}>
                            <FaStar />
                        </li>
                    );
                } else {
                    ratingStr.push(
                        <li key={i}>
                            <FaRegStar />
                        </li>
                    );
                }
            }
            ratingStr.push(
                <li key={6}>({Number.parseFloat(rating).toFixed(1)})</li>
            );
            return <ul>{ratingStr.map((elm) => elm)}</ul>;
        } else {
            return (
                <ul>
                    <li>
                        <FaRegStar />
                    </li>
                    <li>
                        <FaRegStar />
                    </li>
                    <li>
                        <FaRegStar />
                    </li>
                    <li>
                        <FaRegStar />
                    </li>
                    <li>
                        <FaRegStar />
                    </li>
                    <li>(0.0)</li>
                </ul>
            );
        }
    };
    return <div className="ratingDisp">{ratingDisp(rating)}</div>;
};

export default Rating;
