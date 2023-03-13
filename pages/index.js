import Card from "@/components/Card";
import NavigationCard from "@/components/NavigationCard";
import PostFormCard from "@/components/PostFormCard";

export default function Home() {
  return (
    <div className="flex max-w-4xl mx-auto mt-4 gap-6 ">
      <div className="w-1/3">
        <NavigationCard />
      </div>
      <div className="grow">
        <PostFormCard />
        <Card>first post test</Card>
      </div>
    </div>
  );
}
