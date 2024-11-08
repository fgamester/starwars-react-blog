import React from "react";

const SpecieCard = ({ data }) => {
    return (
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8">
            <div className="card mb-3" >
                <div className="row d-flex flex-column flex-md-row align-items-md-start g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={data.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text my-0"><b >Average Height: </b>{data.average_height}</p>
                            <p className="card-text my-0"><b >Average Lifespan: </b>{data.average_lifespan}</p>
                            <p className="card-text my-0"><b >Classification: </b>{data.classification}</p>
                            <p className="card-text my-0"><b >Designation: </b>{data.designation}</p>
                            <p className="card-text my-0"><b >Eye Colors: </b>{data.eye_colors}</p>
                            <p className="card-text my-0"><b >Hair Colors: </b>{data.hair_colors}</p>
                            <p className="card-text my-0"><b >Language: </b>{data.language}</p>
                            <p className="card-text my-0"><small className="text-body-secondary">{data.description}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecieCard;