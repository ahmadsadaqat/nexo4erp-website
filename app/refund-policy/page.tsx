
"use client"

import { motion } from "framer-motion"

export default function RefundPolicyPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background py-24">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-background to-background pointer-events-none" />

      <div className="container mx-auto px-5 max-w-[1150px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">Refund & Return Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p className="mb-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">1. Overview</h2>
            <p>
              At Nexo4 ERP, we are committed to ensuring your complete satisfaction with our products and services.
              This Refund & Return Policy outlines the terms and conditions under which refunds and returns are processed
              for our Enterprise Resource Planning (ERP) software solutions and related services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">2. Subscription Services</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-white">2.1 Trial Period</h3>
            <p>
              We offer a trial period for new customers to evaluate our ERP solution. During this trial period,
              you may cancel your subscription at any time without any charges. The trial period duration will be
              clearly specified at the time of sign-up.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-white">2.2 Monthly Subscriptions</h3>
            <p>
              For monthly subscription plans:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>You may cancel your subscription at any time through your account dashboard or by contacting our support team.</li>
              <li>Cancellations will take effect at the end of the current billing cycle.</li>
              <li>No partial refunds will be provided for unused portions of the monthly subscription.</li>
              <li>If you cancel within the first 14 days of your initial subscription, you may be eligible for a full refund, subject to our review and approval.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-white">2.3 Annual Subscriptions</h3>
            <p>
              For annual subscription plans:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>A full refund may be requested within 30 days of the initial purchase date if you are not satisfied with the service.</li>
              <li>After the 30-day period, refunds will be prorated based on the unused portion of your subscription, minus a 15% administrative fee.</li>
              <li>Refund requests after 6 months from the purchase date are not eligible for refunds.</li>
              <li>To request a refund, please contact our support team with your account details and reason for cancellation.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">3. Professional Services & Customization</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-white">3.1 Implementation Services</h3>
            <p>
              For professional implementation, consulting, and customization services:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>All professional services are billed based on hours worked or project milestones achieved.</li>
              <li>Refunds for professional services will be considered on a case-by-case basis.</li>
              <li>If you are unsatisfied with the work delivered, please contact us within 7 days of service completion to discuss resolution options.</li>
              <li>Work already completed and delivered cannot be refunded, but we will work with you to address any concerns or issues.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-white">3.2 Custom Development</h3>
            <p>
              Custom development projects require advance payment or milestone-based payments. Refunds are handled as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>If the project is cancelled before work begins, a full refund will be issued minus a 10% administrative fee.</li>
              <li>Once development work has commenced, completed milestones are non-refundable.</li>
              <li>Partial refunds for incomplete milestones will be evaluated based on work completed to date.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">4. Add-ons and Features</h2>
            <p>
              Additional modules, features, or add-ons purchased separately:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>May be refunded within 14 days of purchase if not used or activated.</li>
              <li>Once activated or integrated into your system, add-ons are non-refundable.</li>
              <li>We recommend using our demo or trial versions when available before purchasing add-ons.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">5. Training Services</h2>
            <p>
              For training sessions and educational services:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Cancellations made 48 hours or more before a scheduled training session are eligible for a full refund or rescheduling.</li>
              <li>Cancellations made less than 48 hours before a session will not be refunded but may be rescheduled subject to availability.</li>
              <li>No-shows without prior notice are not eligible for refunds or rescheduling.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">6. Refund Process</h2>
            <p>
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Contact our customer support team at <a href="mailto:support@nexo4erp.com" className="text-teal-600 hover:underline">support@nexo4erp.com</a> with your account information and refund request details.</li>
              <li>Provide a clear explanation of the reason for your refund request.</li>
              <li>Our team will review your request within 3-5 business days.</li>
              <li>If approved, refunds will be processed to the original payment method within 7-10 business days.</li>
              <li>You will receive a confirmation email once the refund has been processed.</li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">7. Non-Refundable Items</h2>
            <p>
              The following items and services are non-refundable:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>One-time setup fees</li>
              <li>Data migration services that have been completed</li>
              <li>Third-party licenses or services purchased through Nexo4 ERP</li>
              <li>Subscriptions that have been active for more than 6 months (for annual plans)</li>
              <li>Services rendered and accepted as complete</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">8. Chargebacks</h2>
            <p>
              We encourage you to contact us directly to resolve any billing concerns before initiating a chargeback.
              Initiating a chargeback without first attempting to resolve the issue with our team may result in:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Immediate suspension of your account and services</li>
              <li>Loss of access to your data (please ensure you have proper backups)</li>
              <li>Additional administrative fees if the chargeback is found to be invalid</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">9. Service Level Agreements (SLA)</h2>
            <p>
              If we fail to meet our Service Level Agreements as outlined in your subscription terms, you may be
              eligible for service credits or partial refunds. Please refer to your specific SLA documentation or
              contact our support team for details.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">10. Exceptional Circumstances</h2>
            <p>
              We understand that exceptional circumstances may arise. If you have a situation that does not fit
              within the standard refund policy outlined above, please contact our customer success team. We will
              review each case individually and work with you to find a fair resolution.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">11. Changes to This Policy</h2>
            <p>
              We reserve the right to modify this Refund & Return Policy at any time. Changes will be effective
              immediately upon posting to our website. Your continued use of our services after any changes
              indicates your acceptance of the updated policy. We recommend reviewing this policy periodically.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white">12. Contact Information</h2>
            <p>
              If you have any questions about this Refund & Return Policy or need assistance with a refund request,
              please contact us:
            </p>
            <ul className="list-none pl-0 mb-4 space-y-2">
              <li><strong>Email:</strong> <a href="mailto:support@nexo4erp.com" className="text-teal-600 hover:underline">support@nexo4erp.com</a></li>
              <li><strong>Phone:</strong> Available on our contact page</li>
              <li><strong>Support Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (Your Time Zone)</li>
            </ul>

            <p className="mt-8 text-sm italic">
              This refund policy is designed to ensure fair treatment for both our customers and our business.
              We are committed to providing excellent service and products, and we appreciate your business.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

