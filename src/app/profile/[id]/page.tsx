import Account from "./account";
export default async function page({ params }: { params: { id: number } }) {
  return <Account id={params.id} />;
}
