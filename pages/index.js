import Layout from "@/components/Layout";
import Category from "@/components/Category";
import Trending from "@/components/Trending";

export default function HomePage() {
  return (
    <Layout>
      <Category />
      <Trending />
    </Layout>
  )
}