import { useState } from "react";

export function AgeCategoryChecker() {

    const [age, setAge] = useState("");
    const [result, setResult] = useState("");

    function checkAge() {

        let value = Number(age);

        if (value < 13) {
            setResult("Child");
        }
        else if (value < 20) {
            setResult("Teenager");
        }
        else if (value < 60) {
            setResult("Adult");
        }
        else {
            setResult("Senior Citizen");
        }

    }

    return (

        <div className="container mt-4">

            <h2>Age Category Checker</h2>

            <input
                type="number"
                className="form-control"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <button
                className="btn btn-primary mt-3"
                onClick={checkAge}
            >
                Check Category
            </button>

            <h3 className="mt-3">
                {result}
            </h3>

        </div>

    );
}