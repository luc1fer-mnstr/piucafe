import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // NEW
  const navigate = useNavigate();

  const totalCash = data.reduce((sum, row) => sum + (parseFloat(row.cash) || 0), 0);
  const totalKpay = data.reduce((sum, row) => sum + (parseFloat(row.kpay) || 0), 0);

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      navigate("/");
    } else {
      const stored = JSON.parse(localStorage.getItem("orders")) || [];
      setData(stored);
    }
  }, []);

  const handleDelete = (index) => {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await Promise.all(
        data.map((row) =>
          fetch("https://sheetdb.io/api/v1/vny56f3y5cxko", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: row }),
          })
        )
      );

      console.log("✅ Responses:", response);
      setMessage("✅ All data submitted to Google Sheet!");
      localStorage.removeItem("orders");
      setData([]);
    } catch (error) {
      console.error("❌ Submission error:", error);
      setMessage("❌ Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-[#f0e5d8]">
      <h2 className="text-2xl font-bold mb-4 text-[#3e2c1c]">Orders Table</h2>
      {message && <p className="mb-4">{message}</p>}
      <table className="w-full border text-sm bg-white">
        <thead className="bg-[#a47148] text-white">
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Snack Qty</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Cash</th>
            <th className="border p-2">KPay</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Time</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td className="border p-1">{row.type}</td>
              <td className="border p-1">{row.quantity}</td>
              <td className="border p-1">{row.snackQty}</td>
              <td className="border p-1">{row.price}</td>
              <td className="border p-1">{parseInt(row.cash)}</td>
              <td className="border p-1">{parseInt(row.kpay)}</td>
              <td className="border p-1">{row.name}</td>
              <td className="border p-1">{row.currentTime}</td>
              <td className="border p-1 text-center">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                  onClick={() => handleDelete(idx)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          <tr className="font-bold bg-yellow-100 text-black">
            <td colSpan="4" className="pr-4">Total</td>
            <td>{parseInt(totalCash)}</td>
            <td>{parseInt(totalKpay)}</td>
            <td colSpan="3" />
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => navigate("/form")}
          className="mt-4 bg-[#a47148] text-white px-4 py-2 rounded"
        >
          Back to Form
        </button>

        <button
          className={`mt-4 px-4 py-2 rounded text-white ${
            isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"
          }`}
          onClick={handleSubmit}
          disabled={data.length === 0 || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit to Google Sheet"}
        </button>
      </div>
    </div>
  );
};

export default Table;
