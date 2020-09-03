import React from 'react';
import { graphql } from 'gatsby';

const Template = ({ data }) => {
  const {
    markdownRemark: { html }
  } = data;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;

export default Template;
