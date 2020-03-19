import React from "react";

class PhotoGallery extends React.Component {
  render(){
    return (
      <div className="photo-container">
        {this.props.photos.map((imageUrl, idx) => <div key={idx} className="image-container"><img src={imageUrl}/></div>)}
      </div>

    )
  }
}


export default PhotoGallery;
