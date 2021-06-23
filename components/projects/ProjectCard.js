import { getPostTagColor } from '../../shared/utils'

export default function ProjectCard({ imageName, tags }) {
  function displayTags() {
    return (
      <div className="flex flex-row my-2 mx-2">
        {tags.map((tag, index) => (
          <div key={index} className={`${getPostTagColor(tag)} px-2 py-1 mr-2 rounded-3xl text-xs`}>{tag}</div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col shadow-lg rounded-lg">
      <img src={`/images/${imageName}`} className="w-full h-full object-contain rounded-t-lg" />
      <p className="mx-2 mt-2 mb-0 leading-normal font-bold"><a href="https://www.cryptooldpunks.io/" target="_blank">CryptoOldPunks - NFT Collection</a> 🔗</p>
      {displayTags()}
    </div>
  )
}
