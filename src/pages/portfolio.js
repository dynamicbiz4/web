import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Grid from "../components/Grid";
import Navbar from "../components/Navbar";
import { projects } from "../data/projects";

const ECommerce = () => (
  <>
    <Head>
      <title>Dynamic E-Cart Solutions</title>
    </Head>

    <header>
      <Navbar />
    </header>

    <Grid data={projects.ecommerce} title={"Dynamic E-Cart Solutions"} />
    <Grid
      data={projects.business}
      title={"Dynamic Web Solutions For Businesses"}
    />
    <Grid
      data={projects.education}
      title={"Dynamic Web Solutions For Education"}
    />
    <Grid data={projects.other} title={"Other Web Solutions"} />
  </>
);

export default ECommerce;
