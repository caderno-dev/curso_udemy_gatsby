import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/about/"
      background="red"
      category="Misc"
      date="17 de Junho de 2020"
      timeToRead="10"
      title="Diga não ao Medium"
      description="Algumas razões para você...."
    />
  </Layout>
)

export default IndexPage
