import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import Content from '../components/Content';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "keeler_headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bio: file(relativePath: { eq: "bio.md" }) {
        childMarkdownRemark {
          html
        }
      }
    }
  `);

  return (
    <Layout title="About">
      <SEO title="About" />
      <Content>
        <div className="flex md:inline justify-center">
          <Img
            className="w-xl rounded mt-0 mb-10 md:ml-10 md:float-right"
            fluid={data.headshot.childImageSharp.fluid}
          />
        </div>
        <div
          className="markdown"
          dangerouslySetInnerHTML={{
            __html: data.bio.childMarkdownRemark.html,
          }}
        />
      </Content>
    </Layout>
  );
};

export default About;
