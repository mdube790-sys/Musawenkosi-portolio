import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-light/60 mb-8">
            <span>CONTACT</span>
            <span>MUSA</span>
          </div>
          <div className="font-script text-4xl md:text-6xl text-light mb-2">Let's work</div>
          <h2 className="font-serif text-5xl md:text-8xl font-black text-light">
            TOGETHER
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-light/70 text-sm font-semibold mb-2 uppercase tracking-wide">Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b-2 border-light/30 text-light py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-light/70 text-sm font-semibold mb-2 uppercase tracking-wide">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b-2 border-light/30 text-light py-3 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-light/70 text-sm font-semibold mb-2 uppercase tracking-wide">Message</label>
            <textarea 
              required
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-transparent border-b-2 border-light/30 text-light py-3 focus:outline-none focus:border-primary transition-colors resize-none"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-primary text-white py-4 font-semibold uppercase tracking-wide hover:bg-primary/90 transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-light/70">
          <div>
            <h4 className="font-semibold text-light mb-2 uppercase tracking-wide text-xs">Email</h4>
            <p>hello@musamarketing.com</p>
          </div>
          <div>
            <h4 className="font-semibold text-light mb-2 uppercase tracking-wide text-xs">Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="font-semibold text-light mb-2 uppercase tracking-wide text-xs">Location</h4>
            <p>New York, NY</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
