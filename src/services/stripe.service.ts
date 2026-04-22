import Stripe from "stripe";

// Initialize Stripe (placeholder for client's keys)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-02-24-preview",
});

export const StripeService = {
  /**
   * Create a checkout session for a retreat registration
   */
  async createRetreatCheckoutSession({
    retreatId,
    retreatTitle,
    ticketTypeId,
    ticketTypeName,
    price,
    customerEmail,
    customerName,
  }: {
    retreatId: string;
    retreatTitle: string;
    ticketTypeId: string;
    ticketTypeName: string;
    price: number;
    customerEmail: string;
    customerName: string;
  }) {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${retreatTitle} - ${ticketTypeName}`,
              metadata: {
                retreatId,
                ticketTypeId,
              },
            },
            unit_amount: Math.round(price * 100), // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/register/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/retreats/${retreatId}`,
      customer_email: customerEmail,
      metadata: {
        type: "retreat_registration",
        retreatId,
        ticketTypeId,
        customerName,
      },
    });

    return session;
  },

  /**
   * Create a checkout session for a merch purchase
   */
  async createMerchCheckoutSession({
    items,
    customerEmail,
  }: {
    items: { name: string; price: number; quantity: number; variantName?: string }[];
    customerEmail?: string;
  }) {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.variantName ? `${item.name} (${item.variantName})` : item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/merch/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      customer_email: customerEmail,
      metadata: {
        type: "merch_purchase",
      },
    });

    return session;
  },

  /**
   * Validate a webhook signature
   */
  verifyWebhook(body: string, sig: string) {
    try {
      return stripe.webhooks.constructEvent(
        body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET || ""
      );
    } catch (err) {
      console.error("Webhook signature verification failed:", err);
      return null;
    }
  },
};
