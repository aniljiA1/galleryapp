import './index.css'

const ThumbnailItem = props => {
  const {ThumbnailDetails, isActive, updateThumbnail} = props

  const {thumbnailUrl, thumbnailAltText, id} = ThumbnailDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    updateThumbnail(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          className={thumbnailClassName}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
