const PlanetCard = ({ data }) => {
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
                            <p className="card-text my-0"><b>Diameter: </b>{data?.diameter}</p>
                            <p className="card-text my-0"><b>Gravity: </b>{data?.gravity}</p>
                            <p className="card-text my-0"><b>Terrain: </b>{data?.terrain}</p>
                            <p className="card-text my-0"><b>Surface Water: </b>{data?.surface_water}</p>
                            <p className="card-text my-0"><b>Climate: </b>{data?.climate}</p>
                            <p className="card-text my-0"><b>Population: </b>{data?.population}</p>
                            <p className="card-text my-0"><b>Rotation Period: </b>{data?.rotation_period}</p>
                            <p className="card-text my-0"><b>Orbital Period: </b>{data?.orbital_period}</p>
                            <p className="card-text my-0"><small className="text-body-secondary">{data?.description}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlanetCard;