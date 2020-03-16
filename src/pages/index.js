import React from "react"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimayLayout"
import { graphql } from "gatsby"


export default ({ data }) => {
  console.log(data)
  return (
    <PrimaryLayout>
      
      {data.allWordpressPost.nodes.map(node => (
        <Post
          image={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        />
      ))}
    </PrimaryLayout>
  )
}
export const query = graphql`
  query {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`
