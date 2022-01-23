import React from "react";
// import { css } from 'glamor'

// let new_item = css({
//     padding: '20px',
//     boxSizing: 'border-box',
//     borderBottom: '1px solid gray',
//     ':hover':{
//         color:'red'
//     }
// })

// let item_back = css({
//     background:'grey'
// })

const NewsItem = ({item}) =>{
    return (
        <>
        <div className="news_item">
            <h1>{item.title}</h1>
            <div>{item.feed}</div>
        </div>
        </>
    )
}

export default NewsItem;