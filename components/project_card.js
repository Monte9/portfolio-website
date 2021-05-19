import { getPostTagColor } from '../shared/utils'

export default function ProjectCard({ imageName, tags }) {
  function displayTags() {
    return (
      <div className="flex flex-row my-2">
        {tags.map((tag, index) => (
          <div key={index} className={`${getPostTagColor(tag)} px-4 py-2 mr-2 rounded-3xl text-sm`}>{tag}</div>
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <img src={`/images/${imageName}`} className="w-full h-full object-contain rounded-lg" />
      {displayTags()}
    </div>
  )
}
