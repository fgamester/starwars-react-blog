const FilmCard = ({data}) => {
    return (
        <div className="col-12 col-md-10 col-lg-9 col-xxl-8">
            <div className="card mb-3" >
                <div className="row d-flex flex-column flex-md-row align-items-md-start g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={data?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{data?.title}</h5>
                            <p className="card-text my-0"><b>Episode: </b>{data?.episode}</p>
                            <p className="card-text my-0"><b>Release Date: </b>{data?.release_date}</p>
                            <p className="card-text my-0"><b >Director: </b>{data?.director}</p>
                            <p className="card-text my-0"><b >Producers: </b>{data?.producer}</p>
                            <p className="card-text my-0"><small className="text-body-secondary">{data?.opening_crawl}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilmCard;