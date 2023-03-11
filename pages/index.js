import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex max-w-4xl mx-auto mt-4 gap-6 ">
      <div className="w-1/3">
        <Card>test links</Card>
      </div>
      <div className="grow">
        <Card>form here</Card>
        <Card>first post test</Card>
      </div>
    </div>
  );
}
