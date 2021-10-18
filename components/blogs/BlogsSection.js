import Link from 'next/link'

import DateText from '../shared/DateText'

export default function BlogsSection({ blogs }) {
  return (
    <section>
      <h2>Blog</h2>
      {blogs.map(({ id, date, title }) => (
        <div key={id}>
          <Link href={`/posts/${id}`}>
            <a className="text-xl">{title}</a>
          </Link>
          <br />
          <div className="mt-2 text-gray-500 text-base">
            <DateText dateString={date} />
          </div>
        </div>
      ))}
    </section>
  )
}
