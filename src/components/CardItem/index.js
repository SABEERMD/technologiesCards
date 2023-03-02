// Write your code here.
import './index.css'

const CardItem = (props) => {
    const {technolyDetails} = props 
    const {title, description, imgUrl, className} = technologyDetails
    
    return (
        <li className = {`${className} technology-card-item`}>
        <div className = "matter-container">
            <h1 className = "title">{title}</h1>
            <p className = "description">{description}</p>
        </div>
        <div className = "image-container">
            <img src = "{imgUrl}" className = "imageUrl" alt = "title" />
        </div>
        </li>
    )
}

export default CardItem