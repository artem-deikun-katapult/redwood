import { Link, routes } from '@redwoodjs/router'
export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }) => {
  return (
    <ul>
      {articles.map(({ id, title, body, createdAt }) => {
        return (
          <article key={id}>
            <header>
              <h2>
                <Link to={routes.article({ id: id })}>{title}</Link>
              </h2>
            </header>
            <p>{body}</p>
            <div>Posted at: {createdAt}</div>
          </article>
        )
      })}
    </ul>
  )
}
