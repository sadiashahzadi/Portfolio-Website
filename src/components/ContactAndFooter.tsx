import {
  Check,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import {type FormEvent, useState} from 'react';
import {portfolioContent} from '../data/content';
import {ScrollReveal} from './ScrollReveal';

export function ContactAndFooter() {
  const {contact, contactInfo, navigation} = portfolioContent;
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formNotice, setFormNotice] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const currentYear = new Date().getFullYear();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = senderEmail.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFormNotice('Please complete your name, email address, and message.');
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${trimmedName}`,
    );
    const body = encodeURIComponent(
      `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
    );

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    setFormNotice(
      'Your email application has been opened with your message pre-filled.',
    );
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="border-t border-slate-200/80 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold text-[#0F766E]">Contact</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
                  {contact.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {contact.intro}
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex min-w-0 items-center gap-3 text-sm font-medium text-slate-800 hover:text-[#0F766E]"
                    >
                      <Mail
                        className="h-4 w-4 shrink-0 text-[#0F766E]"
                        aria-hidden="true"
                      />
                      <span className="truncate">{contactInfo.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-slate-200 px-2.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#0F766E]" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-800 transition-colors hover:border-slate-300 hover:text-[#0F766E]"
                  >
                    <Phone
                      className="h-4 w-4 shrink-0 text-[#0F766E]"
                      aria-hidden="true"
                    />
                    <span className="tabular-nums">{contactInfo.phone}</span>
                  </a>

                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-slate-700">
                    <MapPin
                      className="h-4 w-4 shrink-0 text-[#0F766E]"
                      aria-hidden="true"
                    />
                    <span>{contactInfo.location}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#0F766E] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#115E59] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>WhatsApp me</span>
                  </a>
                </div>
              </div>

              {/* Mailto Contact Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
                  noValidate
                >
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Send a Message
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Fill out the fields below to compose an email directly in
                    your mail app.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-slate-800"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-slate-800"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about the role or project..."
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20"
                    />
                  </div>

                  {formNotice && (
                    <p
                      role="status"
                      className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-700"
                    >
                      {formNotice}
                    </p>
                  )}

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      <span>Open Email App</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-sm font-bold text-slate-900">
              Sadia Shahzadi
            </p>
            <p className="mt-1 text-xs text-slate-500">
              © {currentYear} Sadia Shahzadi. All rights reserved.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600"
          >
            {navigation.links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-[#0F766E]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-medium text-slate-800 transition-colors hover:text-[#0F766E]"
            >
              {contactInfo.email}
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
