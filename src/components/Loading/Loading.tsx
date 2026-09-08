import ReactLoading from "react-loading";

export default function Loading() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:left-[300px] bg-background">
      <ReactLoading type="bars" color="hsl(var(--primary))" />
      <p className="text-sm text-muted-foreground">Loading</p>
    </div>
  );
}
