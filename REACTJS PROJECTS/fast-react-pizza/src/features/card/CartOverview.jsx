import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCarQuantity = useSelector(getTotalCartQuantity);
  const TotalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCarQuantity) return null;
  return (
    <div className=" flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200 sm:px-6">
      <p className=" space-x-4 text-sm font-semibold text-stone-300 sm:space-x-6 sm:text-base">
        <span>{totalCarQuantity} pizzas</span>
        <span>{formatCurrency(TotalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
