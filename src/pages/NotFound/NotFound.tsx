import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium text-primary mb-3">404</p>
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6 max-w-md">
        Sorry, we couldn't find the page you were looking for.
      </h1>
      <Button asChild>
        <Link to="/">Return home</Link>
      </Button>
    </div>
  );
}
