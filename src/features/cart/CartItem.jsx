import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UptadeItemQuantity from "./UptadeItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1.5 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-10">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UptadeItemQuantity pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
