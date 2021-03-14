import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import React from "react";

type Props = {
  allPostsData: { id: string; date: string; title: string }[];
};

const Home: React.FC<Props> = (props: Props) => {
  const { allPostsData } = props;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.center}>
          Software Engineer at&nbsp;
          <Link href="https://corp.funds.jp/">Funds, inc.</Link>
        </p>
        <ul>
          <li>
            Mail:&nbsp;
            <Link href={"mailto:maikiilion@gmail.com"}>
              maikiilion@gmail.com
            </Link>
          </li>
          <li>
            Github:&nbsp;
            <Link href="https://github.com/fumita">github.com/fumita</Link>
          </li>
          <li>
            Twitter:&nbsp;
            <Link href="https://twitter.com/maikii_chan">@maikii_chan</Link>
          </li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
