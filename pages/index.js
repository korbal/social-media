import Card from "@/components/Card";
import NavigationCard from "@/components/NavigationCard";
import PostCard from "@/components/PostCard";
import PostFormCard from "@/components/PostFormCard";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <PostFormCard />
      <PostCard />
    </Layout>
  );
}
