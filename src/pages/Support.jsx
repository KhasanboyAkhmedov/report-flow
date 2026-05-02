import React, { useState } from 'react';

const faqs = [
  { q: 'How do I connect a new Meta Ads account?', a: 'Go to Connections → Add Account. Enter your account name and select Meta as the platform. Your account will be connected and synced automatically.' },
  { q: 'How often is data refreshed?', a: 'Data is refreshed every hour automatically. You can also manually trigger a refresh using the refresh button in the top bar.' },
  { q: 'How do I set up CPA alerts?', a: 'In the Dashboard, use the Reporting Schedule & Alerts section to configure your CPA threshold. Toggle the Trigger Alerts switch to activate them.' },
  { q: 'Can I export reports to Google Sheets?', a: 'Yes! The Reporting page includes an Export button. Data can be exported as CSV and imported into Google Sheets manually.' },
];

const Support = () => {
  const [open, setOpen] = useState(null);
  const [form, setForm] = useState({ subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main className="flex-1 p-8 flex flex-col gap-8">
      <div>
        <h2 className="text-h1 font-h1 text-on-surface mb-1">Support</h2>
        <p className="text-body-lg text-on-surface-variant">Get help with AdPulse — FAQs and contact options.</p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: 'menu_book', title: 'Documentation', desc: 'Browse our full guides and API docs', link: '#' },
          { icon: 'chat', title: 'Live Chat', desc: 'Chat with our support team in real time', link: '#' },
          { icon: 'email', title: 'Email Support', desc: 'Send us a message and get a reply in 24h', link: '#' },
        ].map(({ icon, title, desc, link }) => (
          <a
            key={title}
            href={link}
            className="bg-surface-container-lowest rounded-xl p-6 shadow-level-1 flex flex-col items-start gap-3 hover:shadow-md transition-shadow group"
          >
            <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[22px]">{icon}</span>
            </div>
            <div>
              <p className="font-semibold text-on-surface">{title}</p>
              <p className="text-body-sm text-on-surface-variant mt-0.5">{desc}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FAQ */}
        <div className="bg-surface-container-lowest rounded-xl shadow-level-1 overflow-hidden">
          <div className="px-6 py-4 border-b border-surface-variant flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">quiz</span>
            <h3 className="text-h3 font-h3 text-on-surface">Frequently Asked Questions</h3>
          </div>
          <div className="p-4 flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-outline-variant rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-surface-container-low transition-colors"
                >
                  <span className="text-sm font-semibold text-on-surface">{faq.q}</span>
                  <span className={`material-symbols-outlined text-on-surface-variant transition-transform text-[18px] ${open === i ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {open === i && (
                  <div className="px-5 pb-4 bg-surface-container-low/50">
                    <p className="text-body-sm text-on-surface-variant">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-container-lowest rounded-xl shadow-level-1 overflow-hidden">
          <div className="px-6 py-4 border-b border-surface-variant flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary">mail</span>
            <h3 className="text-h3 font-h3 text-on-surface">Contact Us</h3>
          </div>
          <div className="p-6">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-tertiary-fixed/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <p className="font-semibold text-on-surface text-lg">Message Sent!</p>
                <p className="text-body-sm text-on-surface-variant">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Subject</label>
                  <input
                    required
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface"
                  />
                </div>
                <div>
                  <label className="block font-label-caps text-label-caps text-on-surface-variant mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your issue or question..."
                    className="w-full border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-surface resize-none"
                  />
                </div>
                <button
                  type="submit"
                  id="btn-send-support"
                  className="btn-primary-gradient text-white py-3 rounded-lg font-semibold shadow-level-1 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Support;
