import React from "react"
import Thumbnail from './Thumbnail.js';

function Social(props) {
  return (
    <div>
      <h1>Social</h1>
      <Thumbnail
  link="/github"
  image="https://www.google.com/search?q=github&sxsrf=ALeKk01T8l7eiW1Ax8Pbhe-NB6L0HAEnnA:1583533226566&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjzmNb78IboAhUSeKwKHeqFBdMQ_AUoA3oECBkQBQ&biw=848&bih=583#imgrc=Xzv1iHqOYgmzNM"
  title="GitHub"
  category="Website"
/>
 
<Thumbnail
  link="/airbnb"
  image="http://airbnb-image-url.jpg>"
  title="Airbnb Experiences"
  category="Website"
/>
 
<Thumbnail
  link="/photoshop"
  image="http://photoshop-image-url.jpg"
  title="Photoshop Redesign"
  category="Desktop App"
/>
    </div>
  )
}
 
export default Social;