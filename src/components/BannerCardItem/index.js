// Write your code here.
import './index.css'
const Banner = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList

  return (
    <li className={`${className} banner-card-item`}>
      <div className="card1">
        <h1 className="head"> {headerText}</h1>
        <p className="para"> {description}</p>
        <button className="show-more" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default Banner
