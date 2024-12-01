import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ArticlesPreview extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="article-list articles-preview-list">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="article-container articles-preview">
              <article className="article-item">
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="thumbnail-image">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `náhledový obrázek ke článku ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="article-title-container">
                    <Link
                      className="article-title articles-preview-title"
                      to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span className="article-date articles-preview-date">
                      {post.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p className="article-text articles-preview-text">
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="btn" to={post.fields.slug}>
                    více
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

ArticlesPreview.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ArticlesPreviewQuery {
        allMarkdownRemark(
          limit: 4,  
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: { frontmatter: { templateKey: { eq: "article-post" } } }
        ) {
          edges {
            node {
              excerpt(
                pruneLength: 250
                format: PLAIN
                )
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "D. MMMM YYYY", locale: "cs")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 140, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ArticlesPreview data={data} count={count} />}
  />
)