import React from "react";

interface Testimonial {
  name: string; // Name of the person giving the testimonial
  quote: string; // The testimonial quote
  company?: string; // Optional company affiliation
  image?: string; // Optional image URL
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    quote:
      "This product is amazing! It has helped me improve my workflow significantly.",
    company: "ACME Inc.",
    image: "https://via.placeholder.com/150", // Replace with your image URL
  },
  {
    name: "Jane Smith",
    quote:
      "I highly recommend this service. The customer support is outstanding!",
  },
];

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  quote,
  company,
  image,
}) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image-wrapper">
        {image && <img className="testimonial-image" src={image} alt={name} />}
        <i className="fas fa-quote-left testimonial-quote-icon"></i>
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">{quote}</p>
        {company && <p className="testimonial-company">{company}</p>}
        <h5 className="testimonial-name">{name}</h5>
      </div>
    </div>
  );
};
// Break this up into smaller components
const Testimonials: React.FC = () => {
  return (
    <div
      id="carouselMultiItemExample"
      data-mdb-carousel-init="true"
      className="carousel slide carousel-dark text-center"
      data-mdb-ride="carousel"
    >
      {/* Controls */}
      <div className="d-flex justify-content-center mb-4">
        <button
          data-mdb-button-init="true"
          className="carousel-control-prev position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample"
          data-mdb-slide="prev"
        >
          <span
            className="carousel-control-prev-icon text-body"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          data-mdb-button-init="true"
          className="carousel-control-next position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample"
          data-mdb-slide="next"
        >
          <span
            className="carousel-control-next-icon text-body"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Inner */}
      <div className="carousel-inner py-4">
        {/* Single item */}
        <div className="carousel-item active">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt="avatar"
                  style={{ width: 150 }}
                />
                <h5 className="mb-3">Anna Deynah</h5>
                <p>UX Designer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i> Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Quod eos id officiis
                  hic tenetur quae quaerat ad velit ab hic tenetur.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4">
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt="avatar"
                  style={{ width: 150 }}
                />
                <h5 className="mb-3">Anna Deynah</h5>
                <p>UX Designer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i> Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Quod eos id officiis
                  hic tenetur quae quaerat ad velit ab hic tenetur.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4">
                <img
                  className="rounded-circle shadow-1-strong mb-4"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                  alt="avatar"
                  style={{ width: 150 }}
                />
                <h5 className="mb-3">Anna Deynah</h5>
                <p>UX Designer</p>
                <p className="text-muted">
                  <i className="fas fa-quote-left pe-2"></i> Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Quod eos id officiis
                  hic tenetur quae quaerat ad velit ab hic tenetur.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-dark mb-0">
                  {" "}
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                  <li>
                    <i className="fas fa-star fa-sm"></i>
                  </li>
                </ul>
              </div>

              {/* ... Repeat this structure for remaining slides ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Testimonials };
