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
    setFormNotice(null);
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
        className="relative overflow-hidden border-t border-[#E6E8EF] bg-white py-20 sm:py-24"
      >
        {/* Subtle Ambient Background Decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#EEE9FF]/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#0F8178]/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Side: Heading, Invitation, Contact Cards, WhatsApp CTA */}
              <div className="lg:col-span-5">
                <p className="text-sm font-semibold tracking-wide text-[#7657E8]">
                  Contact
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                  {contact.heading}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {contact.intro}
                </p>

                <div className="mt-8 space-y-3.5">
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-[#E6E8EF] bg-[#FAFAFC] px-4 py-3.5 transition-colors hover:border-[#7657E8]/35">
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="flex min-w-0 items-center gap-3 text-sm font-medium text-[#111827] hover:text-[#7657E8]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEE9FF] text-[#7657E8]">
                        <Mail className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="truncate">{contactInfo.email}</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-[#E6E8EF] bg-white px-2.5 text-xs font-medium text-slate-600 transition-colors hover:border-[#7657E8]/40 hover:text-[#7657E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7657E8]"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#0F8178]" />
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
                    className="flex items-center gap-3 rounded-xl border border-[#E6E8EF] bg-[#FAFAFC] px-4 py-3.5 text-sm font-medium text-[#111827] transition-colors hover:border-[#7657E8]/35 hover:text-[#7657E8]"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEE9FF] text-[#7657E8]">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="tabular-nums">{contactInfo.phone}</span>
                  </a>

                  <div className="flex items-center gap-3 rounded-xl border border-[#E6E8EF] bg-[#FAFAFC] px-4 py-3.5 text-sm font-medium text-slate-700">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F8178]/10 text-[#0F8178]">
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span>{contactInfo.location}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#0F8178] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(15,129,120,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0D6E66] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F8178]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>WhatsApp me</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Elevated Contact Form Card */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-[#E6E8EF] bg-white p-6 shadow-[0_18px_46px_-18px_rgba(17,24,39,0.1)] sm:p-8 lg:p-9"
                  noValidate
                >
                  <h3 className="font-display text-2xl font-bold text-[#111827]">
                    Send a Message
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600">
                    Complete the form below to open a pre-filled draft in your
                    default email client.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#111827]"
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
                        className="mt-2 block w-full rounded-xl border border-[#E6E8EF] bg-[#FAFAFC] px-4 py-3 text-sm text-[#111827] placeholder:text-slate-400 transition-colors focus:border-[#7657E8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7657E8]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-[#111827]"
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
                        className="mt-2 block w-full rounded-xl border border-[#E6E8EF] bg-[#FAFAFC] px-4 py-3 text-sm text-[#111827] placeholder:text-slate-400 transition-colors focus:border-[#7657E8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7657E8]/20"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#111827]"
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
                      placeholder="Share details about the opportunity or project..."
                      className="mt-2 block w-full rounded-xl border border-[#E6E8EF] bg-[#FAFAFC] px-4 py-3 text-sm text-[#111827] placeholder:text-slate-400 transition-colors focus:border-[#7657E8] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7657E8]/20"
                    />
                  </div>

                  {formNotice && (
                    <p
                      role="alert"
                      className="mt-4 rounded-xl border border-[#7657E8]/30 bg-[#EEE9FF]/50 px-4 py-2.5 text-sm font-medium text-[#111827]"
                    >
                      {formNotice}
                    </p>
                  )}

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#111827] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7657E8] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7657E8]"
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
      <footer className="border-t border-[#E6E8EF] bg-[#FAFAFC] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <p className="font-display text-sm font-bold text-[#111827]">
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
                className="transition-colors hover:text-[#7657E8]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-medium text-[#111827] transition-colors hover:text-[#7657E8]"
            >
              {contactInfo.email}
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
