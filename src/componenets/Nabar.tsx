import Link from "next/link";
import React from "react";
// import { FiShoppingCart } from "react-icons/fi";
import { ShoppingCart } from "tabler-icons-react";
// import { useRecoilState } from "recoil";
// import { cartState } from "../atoms/cartState";


const Navbar = () => {
//   const [cartItem] = useRecoilState(cartState);

  return (
    <section className="shadow-xl bg-white sticky top-0">
      <div className="container mx-auto py-2 text-[24px] flex justify-between items-center">
        <div className="cursor-pointer">
          <Link href="/">Logo</Link>
        </div>

        <div className="relative cursor-pointer">
          <Link href="/cart">
            <div>
              <ShoppingCart size={48} strokeWidth={2} color={"black"} />;
              <span className="absolute -top-2 -right-2 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white">
                {/* {cartItem.length} */}0
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
