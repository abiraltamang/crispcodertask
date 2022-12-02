import Head from "next/head";
import InvoiceCard from "../components/InvoiceCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Crispcoder</title>
      </Head>
      <div className="m-5">
        <InvoiceCard paymentDueDays={30} />
      </div>
    </div>
  );
}
