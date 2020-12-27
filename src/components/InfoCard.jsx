import React from "react";

// 0 or 1 50%
const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: "center", padding: "0 10%" }}>
            Try Saying: <br />
            Add {isIncome ? "Income " : "Expense "}
            for {isIncome ? "$100 " : "$50 "}
            in Category {isIncome ? "Business " : "House "}
            for {isIncome ? "Monday " : "Tuesday "}...
        </div>
    );
};

export default InfoCard;
