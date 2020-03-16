import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import {graphql} from 'gatsby'



const BlogpostLayout = ({data}) =>{
  const post= data.wordpressPost;
  return(
  <div>
    <Header />
    <div className="container">
    <div className="row justify-content-md-center">
    <h1 dangerouslySetInnerHTML={{__html:post.title}}/>
      <div dangerouslySetInnerHTML={{__html:post.content}}/>
      <div dangerouslySetInnerHTML={{__html}}
    </div>
    </div>
    <Footer />
  
  </div>
)
};

export default BlogpostLayout;

export const query= graphql `
query($slug: String!){
  wordpressPost(slug:{eq: $slug}){
    content
    title
  }

    
}
`