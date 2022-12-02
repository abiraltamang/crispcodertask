import React from "react";

type Props = {
  columns: any;
  data: any;
};

const CustomTable = (props: Props) => {
  const { data, columns } = props;
  return (
    <>
      <div>
        <table className="w-full">
          <thead className="text-right">
            <tr className="border-b-2 border-black">
              <th className="w-80 text-left">Description</th>
              <th>Rate(Monthly)</th>
              <th>Subtotal</th>
              {/* {columns &&
                columns.map((head: any, index: any) => (
                  <th className="text-left" key={index}>
                    {head.header}
                  </th>
                ))} */}
            </tr>
          </thead>
          <tbody className="text-right">
            <tr>
              <td className="text-left">
                <p className="font-medium">Design Services</p>
                <p>Consulting</p>
              </td>
              <td>{data[0].rate}</td>
              <td>{data[0].subtotal}</td>
            </tr>
            <tr>
              <td className="text-left">
                <p className="text-left font-medium mt-6">Expenses</p>
                {data[1].description}
              </td>
              <td colSpan={2}>{data[1].subtotal}</td>
            </tr>
            <tr>
              <td className="text-left">{data[2].description}</td>
              <td colSpan={2}>{data[2].subtotal}</td>
            </tr>
            <tr>
              <td className="text-left">{data[3].description}</td>
              <td colSpan={2}>{data[3].subtotal}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomTable;
