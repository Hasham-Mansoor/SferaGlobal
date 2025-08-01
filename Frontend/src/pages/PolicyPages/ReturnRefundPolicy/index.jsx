import React from 'react';
import styles from './ReturnRefund.module.css';

const RefundPolicy = () => {
  return (
    <div className={`px-4 py-10  md:px-20 lg:px-32 ${styles.policyContainer}`}>
      <h2 className="text-3xl font-bold text-center text-[#1e5d8a] mb-12">Return & Refund Policy</h2>
      <p className="text-[12px] text-gray-600 mb-4">
        Your satisfaction is our priority. If you’re not fully satisfied with your order, please review our return and
        refund terms below.
      </p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">1. Return Eligibility</h2>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li><span className={styles.highlight}>Product is damaged, defective, or incorrect.</span></li>
          <li><span className={styles.highlight}>You notify us within 7 days of delivery.</span></li>
          <li><span className={styles.highlight}>Product is unused, in original condition, and includes original packaging.</span></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">2. Non-Returnable Items</h2>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li>Custom orders and bulk manufacturing</li>
          <li>Perishable or opened consumable goods</li>
          <li>Products damaged due to misuse or poor handling</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">3. Return Process</h2>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li>Email us at <a href="mailto:returns@sferaglobal.com.pk" className={styles.highlight}>returns@sferaglobal.com.pk</a> with your order number, photos, and reason for return.</li>
          <li>Once approved, we will share return instructions and shipping details.</li>
          <li>Buyer is responsible for return shipping (unless due to our error or defective product).</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">4. Refund Policy</h2>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li>Refunds will be processed within 7–14 business days of return approval.</li>
          <li>Refunds will be issued via original payment method or bank transfer.</li>
          <li>For international orders, refunds may exclude initial shipping and customs fees.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">5. Cancellations</h2>
        <p className="text-[12px] text-gray-700">
          Orders can be cancelled within 24 hours of placement unless already processed or shipped.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;
