import Layout from '../../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => {
    console.log(router);
  return (
    <Layout title={router.query.name}>
      <h1>Hi</h1>
    </Layout>
  );
};

export default withRouter(Post);
