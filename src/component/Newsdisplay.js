import React from 'react'

const Newsdisplay = (props)=>{
        
    const renderList = props.newsData.map(data =>{
        return (
            <div key={data.id}>
                <h3>{data.title}</h3>
                 <p>{data.feed}</p>
            </div>
        )
    })
    console.log(props.newsData)

    return(
        <React.Fragment>
            {renderList}
        </React.Fragment>
    )
}
export default Newsdisplay;