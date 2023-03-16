import Card from "@/components/Card";
import NavigationCard from "@/components/NavigationCard";

export default function Layout({ children, hideNavigation }) {
  let rigthColumnClasses = "";

  if (hideNavigation) {
    rigthColumnClasses += "w-full";
  } else {
    rigthColumnClasses += "mx-4 md:mx-0 md:w-9/12";
  }

  return (
    // left column
    <div className="md:flex max-w-4xl mx-auto mt-4 gap-6 ">
      {!hideNavigation && (
        <div className="fixed md:static w-full bottom-0 md:w-3/12 -mb-5">
          <NavigationCard />
        </div>
      )}
      {/* right column */}
      <div className={rigthColumnClasses}>{children}</div>
    </div>
  );
}
