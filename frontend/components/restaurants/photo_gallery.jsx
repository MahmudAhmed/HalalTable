import React from "react";

class PhotoGallery extends React.Component {
  render(){
    console.log(this.props.main_photo);
    console.log(this.props.photos);
    return (
      <div className="photo-container">
        {this.props.photos.map((imageUrl, idx) => <div key={idx} className="image-container"><img src={imageUrl}/></div>)}
      </div>

    )
  }
}


export default PhotoGallery;
