import React from 'react'
import image from '../images/movie-img/1.jpg'
import datelogo from '../images/calendar.png'
import star from '../images/star.png'

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../images/movie-img', false, /\.(png|jpe?g|svg)$/));
console.log(images);


export default function Card(props) {
    const categories = props.data.category;
    const cats = props.data.category.map((c) => {
        return (
            <p className='category'>{c}</p>
        )
    })
    return (
        <div className="card">
            <img src={images[props.data.image]} alt="image" />
            <div className="content">
                <section className="row-1">
                    <img src={datelogo} alt="" />
                    <p>{props.data.year}</p>
                    <a href={props.data.url} target="_blank">view on IMDB</a>
                </section>
                <h1 className="title">{props.data.title}</h1>
                <section className="categories">
                    {cats}
                </section>
                <p>{props.data.description}</p>
                <section className='rating'>
                    <img src={star} alt="Rating" />
                    <p>{props.data.rating}</p>
                </section>
            </div>
        </div>
    )
}