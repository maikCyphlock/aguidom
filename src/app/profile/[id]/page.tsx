import Account from "./account";
export default async function page({ params }: { params: { id: number } }) {
  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.

    <Account id={params.id} />
  );
}
