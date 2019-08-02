import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Error from './_error';

const About = ({ user, statusCode }) => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/MichaelGamel')
  //     .then(res => res.json())
  //     .then(data => {
  //       setUser(data);
  //     });
  // }, []);

  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  return (
    <Layout>
      <h1>About</h1>
      <Link href="/">
        <a>Got to home</a>
      </Link>
      <p> A Javascript Developer</p>
      <img src={user.avatar_url} alt="Javascript" height="200px" />
      <img src="/static/JavaScript-logo.png" alt="Javascript" height="200px" />
    </Layout>
  );
};

About.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/MichaelGamel');
  const statusCode = res.status > 200 ? res.status : false;
  const data = await res.json();

  return { user: data, statusCode };
};

export default About;
