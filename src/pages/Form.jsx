import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();

  const [form, setForm] = useState({
    type: "",
    quantity: "",
    snackQty: "",
    cashPrice: "",
    kpayPrice: "",
    name: "",
  });

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Optional: reset the opposite input
    if (name === "quantity" && value) {
      setForm((prev) => ({ ...prev, quantity: value, snackQty: "" }));
    } else if (name === "snackQty" && value) {
      setForm((prev) => ({ ...prev, snackQty: value, quantity: "" }));
    } else if (name === "cashPrice" && value) {
      setForm((prev) => ({ ...prev, cashPrice: value, kpayPrice: "" }));
    } else if (name === "kpayPrice" && value) {
      setForm((prev) => ({ ...prev, kpayPrice: value, cashPrice: "" }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("orders")) || [];

    const quantity = parseInt(form.quantity) || 0;
    const snackQty = parseInt(form.snackQty) || 0;
    const cashPrice = parseInt(form.cashPrice) || 0;
    const kpayPrice = parseInt(form.kpayPrice) || 0;

    data.push({
      ...form,
      cash: quantity * cashPrice || snackQty * cashPrice,
      kpay: quantity * kpayPrice || snackQty * kpayPrice,
      currentTime: formattedTime,
    });

    localStorage.setItem("orders", JSON.stringify(data));

    setForm({
      type: "",
      quantity: "",
      snackQty: "",
      cashPrice: "",
      kpayPrice: "",
      name: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f9f1e7] flex items-center justify-center">
      <form
        onSubmit={handleAdd}
        className="bg-[#cfa97d] p-8 rounded shadow-md w-full max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-[#3e2c1c]">
          Add Order
        </h2>

        {/* Type */}
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full p-2 rounded outline-none"
          required
        >
          <option value="">Select Type</option>
          <option value="Latte">Latte</option>
          <option value="Cappuccino">Cappuccino</option>
          <option value="Juice">Juice</option>
        </select>

        {/* Quantity & Snack Quantity in 2 columns */}
        <div className="flex gap-4">
          <input
            type="number"
            name="quantity"
            placeholder="Drink Quantity"
            value={form.quantity}
            onChange={handleChange}
            className="w-full p-2 rounded outline-none"
            disabled={!!form.snackQty}
          />
          <input
            type="number"
            name="snackQty"
            placeholder="Snack Quantity"
            value={form.snackQty}
            onChange={handleChange}
            className="w-full p-2 rounded outline-none"
            disabled={!!form.quantity}
          />
        </div>

        {/* Cash & Kpay (mutually exclusive) */}
        <div className="flex gap-4">
          <select
            name="cashPrice"
            value={form.cashPrice}
            onChange={handleChange}
            className="w-full p-2 rounded outline-none"
            disabled={!!form.kpayPrice}
          >
            <option value="">Cash Price</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
            <option value="2000">2000</option>
          </select>

          <select
            name="kpayPrice"
            value={form.kpayPrice}
            onChange={handleChange}
            className="w-full p-2 rounded outline-none"
            disabled={!!form.cashPrice}
          >
            <option value="">KPay Price</option>
            <option value="1000">1000</option>
            <option value="1500">1500</option>
            <option value="2000">2000</option>
          </select>
        </div>

        {/* Submitter */}
        <select
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 rounded outline-none"
          required
        >
          <option value="" disabled>
            Who Submit?
          </option>
          <option value="p1">Player 1</option>
          <option value="p2">Player 2</option>
          <option value="p3">Player 3</option>
        </select>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-[#704214] text-white px-4 py-2 rounded"
          >
            Add to Table
          </button>
          <button
            type="button"
            onClick={() => navigate("/table")}
            className="bg-[#a47148] text-white px-4 py-2 rounded"
          >
            Go to Table
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
