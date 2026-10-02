"use client";

type CheckoutButtonProps = {
  className?: string;
  size?: "default" | "lg";
};

export default function CheckoutButton({
  className = "",
  size = "default",
}: CheckoutButtonProps) {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();
  const sizeClass = size === "lg" ? "text-lg px-8 py-4" : "";

  if (!checkoutUrl) {
    return (
      <button
        type="button"
        disabled
        className={`btn-primary ${sizeClass} ${className}`}
        aria-disabled="true"
      >
        Checkout coming soon
      </button>
    );
  }

  return (
    <a
      href={checkoutUrl}
      className={`btn-primary ${sizeClass} ${className}`}
      rel="noopener noreferrer"
    >
      Buy for $199
    </a>
  );
}
