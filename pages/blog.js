import Layout from '../components/Layout';
import Link from 'next/link';
const Blog = () => {
  const PostLink = ({ title, slug }) => (
    <li>
      <Link as={`/post/${slug}`} href={`/post/[name]=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );

  return (
    <Layout title="My Blog">
      <ul>
        <PostLink slug="react" title="React Post" />
        <PostLink slug="angular" title="Angular Post" />
        <PostLink slug="vue" title="Vue Post" />
      </ul>
    </Layout>
  );
};

export default Blog;
