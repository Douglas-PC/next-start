export const metadata = {
  title: 'Contact | Douglas PC'
};

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 relative">
      <div className="pointer-events-none absolute -inset-x-40 -top-40 h-72 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.07),transparent_70%)]" />
      <h1 className="headline-md glow-text mb-6">Get In Touch</h1>
      <p className="text-white/70 leading-relaxed mb-10 max-w-2xl">Tell us briefly about your current stack, constraints, and desired outcomes. We’ll reply with next step recommendations or clarifying questions.</p>
      <form className="space-y-6 max-w-xl">
        <div>
          <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wide text-white/60 mb-2">Name</label>
          <input id="name" required name="name" className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-400/60 focus:outline-none px-4 py-2 text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wide text-white/60 mb-2">Email</label>
          <input id="email" required type="email" name="email" className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-400/60 focus:outline-none px-4 py-2 text-sm" />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wide text-white/60 mb-2">Message</label>
          <textarea id="message" required name="message" rows={5} className="w-full rounded-md bg-white/5 border border-white/10 focus:border-cyan-400/60 focus:outline-none px-4 py-2 text-sm resize-none" />
        </div>
        <button className="btn-primary px-6 py-2 text-sm" type="submit">Send Message</button>
      </form>
    </main>
  );
}
