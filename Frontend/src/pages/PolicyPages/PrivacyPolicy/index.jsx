import React from "react";
import styles from "./PrivacyPolicy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={`px-4 py-10 pt-20 md:px-20 lg:px-32 ${styles.privacyContainer}`}>
      <h2 className="text-3xl font-bold text-center text-[#1e5d8a] mb-12">Privacy Policy</h2>
      <p className="text-[12px] text-[#1e5d8a] mb-4">
        At <strong>Sfera Global (Private) Limited</strong>, we value your
        privacy and are committed to protecting your personal and business
        information. This Privacy Policy outlines how we collect, use, and
        protect your data when you visit our website or engage with our
        services.
      </p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li>
            <span className={styles.highlight}>Personal Information:</span>{" "}
            Name, email address, phone number, billing/shipping address.
          </li>
          <li>
            <span className={styles.highlight}>Business Information:</span>{" "}
            Company name, registration details, trade preferences.
          </li>
          <li>
            <span className={styles.highlight}>Technical Data:</span> IP
            address, browser type, operating system, and pages visited.
          </li>
          <li>
            <span className={styles.highlight}>Transaction Data:</span> Details
            of orders, payments, and correspondence.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li>To process inquiries, quotes, and orders.</li>
          <li>To communicate about orders, promotions, and updates.</li>
          <li>To comply with legal obligations and regulatory requirements.</li>
          <li>To improve our website and customer experience.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">3. Data Sharing</h2>
        <p className="text-[12px] text-gray-700 mb-2">
          We do <strong>not sell or trade</strong> your personal or business
          data. However, we may share it with:
        </p>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li>Shipping & logistics partners</li>
          <li>Payment gateways</li>
          <li>Government authorities (for customs, compliance, etc.)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">4. Cookies</h2>
        <p className="text-[12px] text-gray-700">
          We use cookies to enhance website performance and user experience. You
          may disable cookies in your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">5. Data Security</h2>
        <p className="text-[12px] text-gray-700">
          We implement industry-standard encryption and secure servers to
          safeguard your data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">6. Your Rights</h2>
        <ul className="list-disc pl-5 text-gray-700 text-[12px] space-y-1">
          <li>Access your data</li>
          <li>Request corrections or deletions</li>
          <li>Opt out of marketing communications</li>
        </ul>
    
        <p className="text-[12px] text-gray-700 mt-2">
          For privacy-related queries, email us at:{" "}
          <a
            href="mailto:support@sferaglobal.com.pk"
            className={styles.highlight}
          >
            support@sferaglobal.com.pk
          </a>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
