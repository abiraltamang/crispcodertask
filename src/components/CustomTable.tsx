import React from "react";

type Props = {
  columns: Array<"string">;
  data: Array<{ description: string; rate: string; subtotal: string }>;
};

const CustomTable = (props: Props) => {
  const { data, columns } = props;
  return (
    <>
      <div>
        <table className="w-full">
          <thead className="text-right">
            <tr className="border-b-2 border-black">
              <th className="w-80 text-left">{columns[0]}</th>
              <th>{columns[1]}</th>
              <th>{columns[2]}</th>
            </tr>
          </thead>
          <tbody className="text-right">
            <tr className="text-left font-medium">
              <td colSpan={3}>Design Services</td>
            </tr>
            <tr>
              <td className="text-left">
                <p>{data[0].description}</p>
              </td>
              <td>{data[0].rate}</td>
              <td>{data[0].subtotal}</td>
            </tr>
            <tr className="text-left font-medium ">
              <td colSpan={3}>Expenses</td>
            </tr>
            {data &&
              data
                .slice(1)
                .map((item: Props["data"][number], index: number) => (
                  <tr key={index}>
                    <td className="text-left">{item.description}</td>
                    <td colSpan={2}>{item.subtotal}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomTable;
