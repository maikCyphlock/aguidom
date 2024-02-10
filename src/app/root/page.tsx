import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

// import { TablePayments } from "./TablePayments";
export interface Payments {
  id: number;
  created_at: Date;
  reference: string;
  phone_number: string;
  bank_id: null;
  profile_id: string;
  dni: string;
  payment_is_verified: string;
}

async function page() {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
  const { data, error }: { data: Payments[]; error: any } = await supabase
    .from("payments")
    .select("*");

  return (
    <div className="container mx-auto ">
      <table className="table-auto border-separate border-spacing-5 border ">
        <thead className="bg-zinc-800">
          <tr>
            <th className="">id</th>
            <th>created_at</th>
            <th>reference</th>
            <th>phone_number</th>
            <th>dni</th>
            <th>payment_is_verified</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{new Date(data.created_at).toLocaleDateString()}</td>
              <td>{data.reference}</td>
              <td>{data.phone_number}</td>
              <td>{data.dni}</td>
              <td>
                <button>{data.payment_is_verified}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default page;
