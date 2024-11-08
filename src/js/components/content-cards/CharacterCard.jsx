const CharacterCard = ({data}) => {
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
                            <p className="card-text my-0"><b>Gender: </b>{data.gender}</p>
                            <p className="card-text my-0"><b>Birth Year: </b>{data.birth_year}</p>
                            <p className="card-text my-0"><b >Skin Color: </b>{data.skin_color}</p>
                            <p className="card-text my-0"><b >Height: </b>{data.height}</p>
                            <p className="card-text my-0"><b >Eye Color: </b>{data.eye_color}</p>
                            <p className="card-text my-0"><b >Hair Color: </b>{data.hair_color}</p>
                            <p className="card-text my-0"><b >Mass: </b>{data.mass}</p>
                            <p className="card-text my-0"><small className="text-body-secondary">{data.description}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard;