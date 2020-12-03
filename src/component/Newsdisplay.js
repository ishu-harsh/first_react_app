import React from 'react'

const Newsdisplay = (props)=>{
    // console.log(props.newsData.articles)
        
    const renderNews = props.newsData.articles.map(data =>{
        
        return (
            <div key={data.publishedAt} className="col-sm-3">
                 <div className="card" style={{ width: '18rem'}}>
                    <img className="card-img-top" src={data.urlToImage}alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <p className="card-text">{data.description}</p>
                        <a href={data.url} className="btn btn-primary">Read More</a>
                    </div>
                    </div>
            </div>
        )
    })

    return(
        <React.Fragment>
            <div className="row" > 
            {renderNews}
            </div>
        </React.Fragment>
    )
}
export default Newsdisplay;