import React from 'react'

const Newsdisplay = (props)=>{
        
    const renderList = props.newsData.articles.map(data =>{
        return (
            <div key={data.publishedAt} className="col-sm-3">
                 <div class="card" style={{ width: '18rem'}}>
                    <img class="card-img-top" src={data.urlToImage}alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text">{data.description}</p>
                        <a href={data.url} class="btn btn-primary">Read More</a>
                    </div>
                    </div>
            </div>
        )
    })
    console.log(props.newsData)

    return(
        <React.Fragment>
            <div className="row" > 
            {renderList}

            </div>
        </React.Fragment>
    )
}
export default Newsdisplay;