const ImageCard = ({imag}) => {
if(imag.length === 0){
  return
}

const urlImg = imag.urls
console.log(imag.urls.small);
    return (<div>
        <img src={imag.urls.small} alt={imag.alt_description} />
      </div>
      )
}
export default ImageCard