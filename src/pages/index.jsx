import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/SEO';

const Button = ({ text }) => (
  <Link
    to={`/${text.toLowerCase()}/`}
    className="w-64 m-4 md:m-8 lg:ml-32 z-10 px-24 py-4 text-center font-light relative
    border-white text-white border-solid border-2 transform hover:scale-110
    transition duration-150"
  >
    {text}
  </Link>
);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      bwHeadshot: file(relativePath: { eq: "keeler_headshot_bw.png" }) {
        childImageSharp {
          fluid(maxWidth: 978) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div
      className="h-screen overflow-hidden flex items-center md:items-baseline justify-center
    flex-col"
    >
      <SEO title="Conductor, Countertenor" />
      <Img
        className="h-screen top-0 left-0 w-full z-0 fixed"
        fluid={data.bwHeadshot.childImageSharp.fluid}
        style={{ position: 'fixed' }}
        imgStyle={{
          height: 'auto',
          width: 'auto',
          minHeight: '100%',
          minWidth: '100%',
        }}
      />
      <Button text="About" />
      <Button text="Media" />
      <Button text="Contact" />
    </div>
  );
};

export default IndexPage;
