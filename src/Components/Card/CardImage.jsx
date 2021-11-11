const CardImage = ({urlImage, altText}) => {
    return (
        <img src={urlImage} className="card-img-top" alt={altText} />
    )
}

export default CardImage
