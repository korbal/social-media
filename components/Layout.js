import Card from "@/components/Card";
import NavigationCard from "@/components/NavigationCard";

export default function Layout({ children, hideNavigation }) {
  return (
    <div className="flex max-w-4xl mx-auto mt-4 gap-6 ">
      {!hideNavigation && (
        <div className="w-3/12">
          <NavigationCard />
        </div>
      )}
      <div className={hideNavigation ? "w-full" : "w-9/12"}>{children}</div>
    </div>
  );
}
