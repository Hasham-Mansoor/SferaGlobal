import React from 'react';
import styles from './Shipping.module.css';

const ShippingPolicy = () => {
  return (
    <div className={`px-4 pt-20 py-10 md:px-20 lg:px-32 ${styles.policyContainer}`}>
      <h1 className="text-3xl font-bold text-center text-[#1e5d8a] mb-12">Shipping Policy</h1>
      <p className="text-[12px] text-gray-600 mb-4">
        Sfera Global (Private) Limited ships both domestically within Pakistan and internationally. We work
        with reputed logistics partners to ensure safe and timely delivery of goods.
      </p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">1. Order Processing</h2>
        <p className="text-[12px] text-gray-700">
          Orders are processed within 1–3 business days after payment confirmation. <br />
          <span className={styles.highlight}>Custom/bulk orders</span> may require additional processing time (based on product type).
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">2. Shipping Methods</h2>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li><span className={styles.highlight}>Domestic Shipping:</span> TCS, Leopard Courier, Daewoo, etc.</li>
          <li><span className={styles.highlight}>International Shipping:</span> DHL, FedEx, UPS, or via freight forwarders.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">3. Shipping Charges</h2>
        <p className="text-[12px] text-gray-700">
          Shipping costs are calculated based on weight, volume, and destination. Final charges will be
          provided during order confirmation.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">4. Delivery Timeframes</h2>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li><span className={styles.highlight}>Domestic:</span> 2–5 business days</li>
          <li><span className={styles.highlight}>International:</span> 7–20 business days (subject to customs clearance)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">5. Tracking</h2>
        <p className="text-[12px] text-gray-700">
          Tracking numbers will be shared via email or WhatsApp once the shipment is dispatched.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">6. Duties & Taxes</h2>
        <p className="text-[12px] text-gray-700">
          International buyers are responsible for any applicable customs duties, import taxes, or brokerage fees
          imposed by their country.
        </p>
        <p className="text-[12px] text-gray-700 mt-2">
          For shipping support, email:{" "}
          <a href="mailto:logistics@sferaglobal.com.pk" className={styles.highlight}>
            logistics@sferaglobal.com.pk
          </a>
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
