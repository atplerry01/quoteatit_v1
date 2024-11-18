import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HomePage from "@/components/homepage/HomePage";
import Layout from "@/components/Layout/Layout";
import Navigation from "@/components/navigation/Navigation";

export default function Home() {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <HomePage />
      </Layout>
    </div>
  );
}
