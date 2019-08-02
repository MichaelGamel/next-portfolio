import Link from 'next/link';
import Layout from '../components/Layout';
const Index = () => (
  <Layout title="Home">
    <Link href="/">
      <a>Got to About</a>
    </Link>
    <p>Hello World!</p>
  </Layout>
);

export default Index;
