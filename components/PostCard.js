import Card from "./Card";
import Avatar from "./Avatar";

export default function PostCard() {
  return (
    <Card>
      <div className="flex gap-3">
        <div>
          <Avatar />
        </div>
        <div>
          <p>
            {" "}
            <a href="" className="font-semibold">
              John Doe
            </a>{" "}
            shared a{" "}
            <a href="" className="text-socialBlue">
              album
            </a>
          </p>
          <p className="text-gray-500 text-sm">2 hours ago</p>
        </div>
      </div>
      <div>
        <p className="my-3 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis aut
          sapiente ipsam labore, id, explicabo a iure, ex numquam unde debitis
          vero architecto? Autem cum ex, a voluptas enim provident.
        </p>
        <div className="rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </div>
    </Card>
  );
}
