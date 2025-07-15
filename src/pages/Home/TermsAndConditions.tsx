import React, { useState } from 'react';

const TermsAndConditions: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 py-8">
      <div className="w-full max-w-3xl bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Terms and Conditions
        </h1>
        <div className="h-[320px] overflow-y-auto p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded text-sm leading-6">
          <p className="text-gray-800 dark:text-gray-200 mb-3">
            Welcome to our e-commerce platform. By using this website, you agree to comply with the following terms and conditions. These terms apply to all visitors, customers, and users.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">1. Account Creation</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            To place orders, you may be required to register an account. You are responsible for maintaining the confidentiality of your credentials. We reserve the right to suspend accounts suspected of misuse or fraudulent behavior.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">2. Product Descriptions & Pricing</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            We make every effort to ensure that the information on our website is accurate. However, errors may occur. If a product is listed at an incorrect price or with incorrect information, we reserve the right to cancel or refuse the order.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">3. Order Processing</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Orders are subject to acceptance and availability. We may cancel orders for various reasons including payment failure, incorrect details, or stock issues. Once confirmed, you will receive an email with your order details.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">4. Payment</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            All payments are processed securely via trusted third-party gateways. We do not store your card details. The final price includes applicable taxes unless stated otherwise.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">5. Shipping & Delivery</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Delivery timelines are estimated and may vary based on location and external factors. We are not liable for delays caused by logistics partners, weather, or public holidays. Tracking information will be provided where available.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">6. Returns & Refunds</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You may return eligible items within 7 days of delivery. Products must be unused, undamaged, and returned in original packaging with invoice. Refunds will be processed after inspection, typically within 7 business days.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">7. Cancellations</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            Orders can be cancelled before shipment. Once shipped, cancellation is not possible and you must request a return post-delivery.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">8. User Conduct</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            You agree not to misuse our website. This includes attempting to gain unauthorized access, transmitting malware, or interfering with normal functionality. We reserve the right to block such users and report activity.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">9. Intellectual Property</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            All content including text, graphics, logos, and code are the property of the company. Unauthorized copying, reuse, or modification is strictly prohibited.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">10. Limitation of Liability</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            We are not liable for any indirect, incidental, or consequential damages arising from the use of our platform or services. Use our services at your own risk.
          </p>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-1">11. Governing Law</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            These terms are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes shall be resolved under the jurisdiction of its courts.
          </p>
          <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">Last updated: July 15, 2025</p>
        </div>
        <div className="flex items-start mt-4 text-sm">
          <input id="accept" type="checkbox" checked={isAccepted} onChange={(e) => setIsAccepted(e.target.checked)} className="w-4 h-4 accent-blue-600 mr-2 mt-1" />
          <label htmlFor="accept" className="text-gray-800 dark:text-gray-200">I have read and agree to the Terms and Conditions.</label>
        </div>
        <button
          type="button"
          disabled={!isAccepted}
          className={`mt-4 w-full py-2 px-4 text-white font-medium rounded-lg text-sm ${
            isAccepted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
