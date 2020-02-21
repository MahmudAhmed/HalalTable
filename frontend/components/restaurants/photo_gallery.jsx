import React from "react";



class PhotoGallery extends React.Component {


  render(){
    return (
      <div className="photo-container">
        {photos.map( (photo, idx) => <div key={idx} className="image-container"><img src={photo.src}/></div>)}
      </div>

    )
  }
}






export default PhotoGallery;

const photos = [{
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    caption: "Boats (Jeshu John - designerspics.com)"
  },
]













// // class PhotoGallery extends React.Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = { currentImage: 0, viewerIsOpen: false };
// //     this.handleClick = this.handleClick.bind(this)
// //     this.handleClose = this.handleClose.bind(this);

// //   }

// //   handleClick(e, { index }) {
// //     this.setState({ currentImage: index, viewerIsOpen: true });
// //   }

// //   handleClose() {
// //     this.setState({ currentImage: 0, viewerIsOpen: false });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <Gallery photos={PHOTO_SET} onClick={this.handleClick} />
// //         <ModalGateway>
// //           {this.state.viewerIsOpen ? (
// //             <Modal>
// //               <Carousel
// //                 currentIndex={this.state.currentImage}
// //                 views={PHOTO_SET.map(x => ({
// //                   ...x,
// //                   srcset: x.srcSet,
// //                   caption: x.title
// //                 }))}
// //               />
// //             </Modal>
// //           ) : null}
// //         </ModalGateway>
// //       </div>
// //     );
// //   }
// // }

// // class PhotoGallery extends React.Component {

// //   constructor(props) {
// //     super(props);
// //     this.state = { modalIsOpen: false };
// //     this.toggleModal = this.toggleModal.bind(this);

// //   }

// //   toggleModal() {
// //     this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
// //   };

// //   render() {
// //     const { modalIsOpen } = this.state;

// //     return (
// //       <ModalGateway>
// //         {modalIsOpen ? (
// //           <Modal onClose={this.toggleModal}>
// //             <Carousel views={PHOTO_SET} />
// //           </Modal>
// //         ) : null}
// //       </ModalGateway>
// //     );
// //   }
// // }

// class PhotoGallery extends React.Component {

//   hideLightBox(e) {
//     e.preventDefault();
//     $(".modal-login").removeClass("is-open");
//   }

//   handleClick(e, { url }){
//     
//     // this.url = url;
//     // $(".photo-grid").addClass("is-open");
//   }

//   render() {
//     return (
//       <div>
//         <ul className="photo-grid">
//           <li className="gallery-photo-col-1">
//             <div >
//               <img src={photos[0].src}/>
//             </div>
//             <div>
//               <img src={photos[1].src} />
//             </div>
//           </li>
//           <li className="gallery-photo-col-2">
//             <div>
//               <img src={photos[2].src} />
//             </div>
//           </li>
//           <li className="gallery-photo-col-3">
//             <div>
//               <img src={photos[3].src} />
//             </div>
//             <div>
//               <img src={photos[4].src} />
//             </div>
//             <div>
//               <img src={photos[5].src} />
//             </div>
//           </li>
//           <li className="gallery-photo-col-4">
//             <div>
//               <img src={photos[6].src} />
//             </div>
//             <div>
//               <img src={photos[7].src} />
//             </div>
//             <div>
//               <img src={photos[8].src} />
//             </div>
//           </li>
//         </ul>

//         <section className="light-box">
//           <span
//             className="modal-close"
//             title="close"
//             onClick={this.hideLightBox}>
//             &times;
//           </span>

//           <div
//             className="modal-screen"
//             onClick={this.hideLightBox}>
//           </div>

//           <div>
//             <div className="photo-selected">
//               <img src={this.url} />
//             </div>
//           </div>

//         </section>
//       </div>
//     );
//   }
// }



// const photos = [{
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     caption: "After Rain (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     caption: "Boats (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     caption: "After Rain (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     caption: "Boats (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     caption: "After Rain (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     caption: "Boats (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//     caption: "After Rain (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//     caption: "Boats (Jeshu John - designerspics.com)"
//   },
//   {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//     caption: "Boats (Jeshu John - designerspics.com)"
//   }]

