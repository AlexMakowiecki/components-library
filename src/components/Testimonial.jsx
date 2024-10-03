import { RiDoubleQuotesL } from "react-icons/ri";

export default function Testimonial({image, logo, quote, name, role, children, ...rest}){
  const classType = (image) ? "testimonial--image" : "testimonial--no-image"
  return (
    <div className={`testimonial ${classType}`} {...rest}>
      { image && 
          <div className="testimonial__img-container">
            <img src={`${image}`} className="testimonial__img"/>
          </div>}
      <div className="testimonial__text-content">
        <div className="testimonial__head">
          { image && <RiDoubleQuotesL className="testimonial__quote-icon"/>}
          { logo &&
              <div className="testimonial__logo-container">
                { logo }
              </div> }
        </div>
        { quote &&
            <p className="testimonial__quote">
              {!image && `"`}{ quote }{!image && `"`}
            </p> }
        <div className="testimonial__footer">
          { name &&
              <p className="testimonial__name">
                { name }
              </p> }
          { !image && name && role && <p className="testimonial__divider">/</p> }
          { role &&
              <p className="testimonial__role">
                { role }
              </p> }
        </div>
        { children }
      </div>
    </div>
  )
}