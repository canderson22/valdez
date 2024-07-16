import React from "react";

const ShopPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="embed-responsive col">
          <iframe
            src="https://www.youtube.com/embed/5U0iGqM-4Vc"
            title="Jimmy Valdez Prison war official video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.{" "}
        </div>
      </div>
    </div>
  );
};

export { ShopPage };
