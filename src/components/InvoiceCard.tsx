import React from "react";
import CustomTable from "./CustomTable";
import Title from "./Title";

type Props = {
  paymentDueDays?: Number;
};

const columns = ["Description", "RateMonthly", "Subtotal"];

const data = [
  { description: "Consulting", rate: "$ 12, 345.00", subtotal: "$ 12, 345.00" },
  { description: "Expense One", rate: "", subtotal: "$ 123.45" },
  { description: "Expense Two", rate: "", subtotal: "$ 135.00" },
  { description: "Expense Three", rate: "", subtotal: "$ 124.00" },
];

const InvoiceCard = (props: Props) => {
  const { paymentDueDays } = props;
  return (
    <div className="w-1/2 mx-auto border border-black">
      <div className="p-10">
        <Title title={"Invoice"} />
        <h3 className="text-xl font-medium mt-3">Client - Zap</h3>
        <div className="flex items-start justify-between">
          <div>
            <p>Date Period:June 1-30 2020 </p>
            <p>Invoice NO.: 2</p>
          </div>
          <div className="text-right mb-10">
            <p>Gabby chen</p>
            <p>102 Bayview Ave</p>
            <p>Toronto, Ontario</p>
            <p>M6p 2k6</p>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <div className="bg-[#6AB6FF] w-full px-10 py-4 mt-20 ">
        <div className="flex items-center justify-between border-b-2 border-black py-4">
          <p>Addition Information</p>
          <p>Total Dues</p>
        </div>
        <div className="flex items-center justify-between text-left py-4 border-b-2 border-black ">
          <div>
            <p>Amount #: 0000-0000</p>
            <p>Transit #: 00000</p>
            <p>Institution: 000</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold">$12,345.00</p>
            <p>Total payment due in {paymentDueDays} days</p>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <li>Thank you - yourname@gmail.com</li>
          <p>SCAD</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
