import React from 'react';

import Content from '../components/Content';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout title="Not Found">
    <SEO title="404: Not found" />
    <Content>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content>
  </Layout>
);

export default NotFoundPage;
