const StarshipCard = ({ data }) => {
    return (
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8">
            <div className="card mb-3" >
                <div className="row d-flex flex-column flex-md-row align-items-md-start g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={data?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data?.name}</h5>
                            <p className="card-text my-0"><b>Model: </b>{data?.model}</p>
                            <p className="card-text my-0"><b>Manufacturer: </b>{data?.manufacturer}</p>
                            <p className="card-text my-0"><b >Cost in Credits: </b>{data?.cost_in_credits}</p>
                            <p className="card-text my-0"><b >Length: </b>{data?.length}</p>
                            <p className="card-text my-0"><b >Max Atmosphering Speed: </b>{data?.max_atmosphering_speed}</p>
                            <p className="card-text my-0"><b >Crew: </b>{data?.crew}</p>
                            <p className="card-text my-0"><b >Passengers: </b>{data?.passengers}</p>
                            <p className="card-text my-0"><b >Cargo Capacity: </b>{data?.cargo_capacity}</p>
                            <p className="card-text my-0"><b >Consumables: </b>{data?.consumables}</p>
                            <p className="card-text my-0"><b >Hyperdrive Rating: </b>{data?.hyperdrive_rating}</p>
                            <p className="card-text my-0"><b >MGLT: </b>{data?.MGLT}</p>
                            <p className="card-text my-0"><b >Starship Class: </b>{data?.starship_class}</p>                                                   
                            <p className="card-text my-0"><small className="text-body-secondary">{data?.description}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StarshipCard;