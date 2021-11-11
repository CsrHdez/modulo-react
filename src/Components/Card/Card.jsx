import CardImage from "./CardImage"
import CardTitle from "./CardTitle"
import CardText from "./CardText"
import PrimaryButton from "../Buttons/PrimaryButton"

const Card = ({title, textP, textButton, linkButton, urlImage, altText}) => {
    return (
    <div className="card" style={{width: '18rem'}}>
        <CardImage urlImage={urlImage} altText={altText} />
        <div className="card-body">
            <CardTitle text={title} />
            <CardText text={textP} />
            <PrimaryButton text={textButton} link={linkButton} />
        </div>
    </div>
    )
}

export default Card
