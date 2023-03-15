import Layout from "../components/Layout";
import Card from "../components/Card";

export default function ProfilePage() {
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="h-24 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="p-4"> John Doe</div>
      </Card>
    </Layout>
  );
}
