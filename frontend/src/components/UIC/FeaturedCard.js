import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturedCard(props) {

    const navigate = useNavigate();

    const visitDetails = () => {
        navigate(`/experiencedetails/${props.id}`);
    };

    return (
        <div>
            <div
                classNameName="card"
                style={{
                    marginBottom: "2%",
                    marginTop: "2%"
                }}
            >

                <div classNameName="card-header">
                    Featured
                </div>

                {/* Image Section */}
                <img
                    src={props.image}
                    alt={props.title}
                    style={{
                        width: "479px",
                        height: "360px",
                        objectFit: "cover",
                        margin: "0 auto",
                        display: "block"
                    }}
                />

                <div classNameName="card-body">

                    <h5 classNameName="card-title">
                        {props.title}
                    </h5>

                    <h6 classNameName="card-subtitle mb-2 text-body-secondary">
                        {props.tripType}
                    </h6>

                    <p classNameName="card-text">
                        {props.description}
                    </p>

                    <button
                        classNameName="btn btn-success"
                        onClick={visitDetails}
                    >
                        More Details
                    </button>

                </div>
            </div>
        </div>
    );
}
