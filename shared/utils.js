const TAG_COLORS = {
  "frontend": "bg-green-500",
  "website": "bg-yellow-500",
  "crypto": "bg-blue-500",
}

export function getPostTagColor(tag) {
  return TAG_COLORS[tag] || "bg-gray-300"
}
