import { useState, useEffect } from 'react';

// ============ DATA ============

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Our Story', href: '#story' },
  { name: 'Menu', href: '#menu' },
  { name: 'Ceremony', href: '#ceremony' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const menuCategories = [
  {
    id: 'traditional',
    name: 'Traditional Ritual',
    nameAm: 'ባህላዊ ሥርዓት',
    description: 'Time-honored preparations passed down through generations',
    items: [
      { name: 'Bunna (ቡና)', description: 'Classic Ethiopian coffee roasted fresh, served in a jebena clay pot with three rounds: Abol, Tona, Baraka', price: '4.50', popular: true },
      { name: 'Jebena Coffee', description: 'Slow-brewed in traditional clay pot with cardamom and cloves', price: '5.00', popular: false },
      { name: 'Coffee with Incense', description: 'Full ceremony experience with frankincense, served with popcorn and barley', price: '7.50', popular: true },
      { name: 'Spiced Bunna', description: 'Traditional coffee infused with berbere spice and honey', price: '5.50', popular: false },
    ],
  },
  {
    id: 'espresso',
    name: 'Modern Espresso',
    nameAm: 'ዘመናዊ ኤስፕሬሶ',
    description: 'Ethiopian single-origin beans prepared with modern craft',
    items: [
      { name: 'Ethiopian Macchiato', description: 'Double shot with steamed milk — the Addis Ababa way', price: '4.00', popular: true },
      { name: 'Yirgacheffe Pour Over', description: 'Light, floral single-origin from the birthplace of coffee', price: '5.50', popular: true },
      { name: 'Sidamo Espresso', description: 'Rich, full-bodied shot with berry and chocolate notes', price: '3.50', popular: false },
      { name: 'Guji Cold Brew', description: '18-hour steeped cold brew with citrus and wine undertones', price: '5.00', popular: false },
      { name: 'Honey Latte', description: 'Espresso with raw Ethiopian honey and oat milk', price: '5.50', popular: false },
    ],
  },
  {
    id: 'bites',
    name: 'Small Bites',
    nameAm: 'ትንንሽ ምግቦች',
    description: 'Traditional snacks to accompany your coffee',
    items: [
      { name: 'Kolo (ኮሎ)', description: 'Roasted barley mix with peanuts and spiced chickpeas', price: '3.00', popular: true },
      { name: 'Himbasha', description: 'Traditional celebration bread with subtle sweet spices', price: '4.00', popular: false },
      { name: 'Dabo Kolo', description: 'Crunchy spiced bread bites, perfect with coffee', price: '3.50', popular: false },
      { name: 'Sambusa (ሳምቡሳ)', description: 'Crispy pastry filled with lentils and aromatic spices', price: '4.50', popular: true },
      { name: 'Injera Chips with Shiro', description: 'Crispy injera strips with creamy chickpea dip', price: '5.00', popular: false },
    ],
  },
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=600&h=400&fit=crop', alt: 'Ethiopian coffee ceremony with fresh popcorn' },
  { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=400&fit=crop', alt: 'Freshly roasted Ethiopian coffee beans' },
  { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop', alt: 'Latte art with Ethiopian coffee' },
  { url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop', alt: 'Traditional jebena coffee pot' },
  { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop', alt: 'Perfect cup of coffee' },
  { url: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&h=400&fit=crop', alt: 'Coffee beans close up' },
];

const ceremonySteps = [
  {
    step: '01',
    title: 'Roasting',
    titleAm: 'ማቃጠል',
    description: 'Green coffee beans are roasted by hand over an open flame, filling the room with an intoxicating aroma. Guests are invited to waft the smoke toward them.',
    icon: '🔥',
  },
  {
    step: '02',
    title: 'Grinding',
    titleAm: 'መፍጨት',
    description: 'The roasted beans are ground by hand using a traditional mortar and pestle (mukecha and zenezena), creating a fine, fragrant powder.',
    icon: '⚱️',
  },
  {
    step: '03',
    title: 'Brewing',
    titleAm: 'ማፍላት',
    description: 'The ground coffee is placed in a jebena (clay pot) with water and brought to a boil. Frankincense burns nearby, adding to the spiritual atmosphere.',
    icon: '☕',
  },
  {
    step: '04',
    title: 'Serving',
    titleAm: 'ማቅረብ',
    description: 'Three rounds are served: Abol (first), Tona (second), and Baraka (blessing). Each cup carries deeper meaning, accompanied by popcorn and fresh grass.',
    icon: '🙏',
  },
];

// ============ COMPONENTS ============

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <div>
              <span className={`font-serif text-lg md:text-xl font-bold ${scrolled ? 'text-foreground' : 'text-white'}`}>
                ጥቁር ቡና
              </span>
              <span className={`hidden sm:inline ml-2 text-xs tracking-widest uppercase ${scrolled ? 'text-muted-foreground' : 'text-white/80'}`}>
                Tikur Buna
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? 'text-foreground' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md ${scrolled ? 'text-foreground' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-foreground hover:text-accent py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=1920&h=1080&fit=crop"
          alt="Ethiopian coffee ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
            Welcome to
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
            ጥቁር ቡና
          </h1>
          <p className="text-white/90 text-xl sm:text-2xl md:text-3xl font-serif italic mb-6">
            Tikur Buna
          </p>
          <div className="ethiopian-border w-48 mx-auto mb-8 rounded-full" />
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Where every cup tells a story. Experience the birthplace of coffee through our ancient ceremony,
            where tradition, community, and the perfect brew come together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Our Menu
            </a>
            <a
              href="#ceremony"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              The Coffee Ceremony
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=750&fit=crop"
                alt="Ethiopian coffee beans being sorted"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent/10 backdrop-blur-sm rounded-xl p-6 border border-accent/20 hidden md:block">
              <p className="font-serif text-3xl font-bold text-accent">1000+</p>
              <p className="text-sm text-muted-foreground">Years of Coffee Heritage</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-3">Our Story</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              From the Highlands of <span className="text-accent">Kaffa</span>
            </h2>
            <div className="ethiopian-border w-24 mb-8 rounded-full" />
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ethiopia is the birthplace of coffee — <em>Coffea arabica</em> grows wild in the ancient forests
                of the Kaffa region. Legend tells of Kaldi, a goatherd who discovered coffee when his goats
                danced with energy after eating the bright red cherries.
              </p>
              <p>
                At <strong className="text-foreground">Tikur Buna</strong>, we honor this legacy. Our beans are sourced directly
                from small farms in Yirgacheffe, Sidamo, and Guji — each cup carrying the terroir of
                Ethiopia's most celebrated growing regions.
              </p>
              <p>
                More than a coffee shop, we are a gathering place — where the spirit of <em>buna tetu</em>
                ("come drink coffee") brings people together in conversation, celebration, and community.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground">Regions</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Arabica</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-serif text-2xl font-bold text-foreground">Daily</p>
                <p className="text-xs text-muted-foreground">Fresh Roasted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState('traditional');
  const currentCategory = menuCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="menu" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-3">Our Menu</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Taste of Ethiopia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ancient ceremonial brews to modern espresso craft, every drink is made with
            100% Ethiopian single-origin beans.
          </p>
          <div className="ethiopian-border w-24 mx-auto mt-6 rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-background text-muted-foreground hover:text-foreground border border-border'
              }`}
            >
              <span>{cat.name}</span>
              <span className="ml-2 text-xs opacity-70">{cat.nameAm}</span>
            </button>
          ))}
        </div>

        {/* Category Description */}
        <p className="text-center text-muted-foreground italic mb-8">{currentCategory.description}</p>

        {/* Menu Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {currentCategory.items.map((item) => (
            <div
              key={item.name}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {item.name}
                </h3>
                {item.popular && (
                  <span className="shrink-0 ml-2 px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
              <p className="text-lg font-bold text-accent">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ceremony() {
  return (
    <section id="ceremony" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-3">The Sacred Ritual</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ethiopian Coffee Ceremony
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The <em>buna</em> ceremony is more than making coffee — it is a spiritual practice,
            a social bond, and a celebration of Ethiopian hospitality.
          </p>
          <div className="ethiopian-border w-24 mx-auto mt-6 rounded-full" />
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {ceremonySteps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < ceremonySteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px bg-border" />
              )}
              <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all text-center relative z-10">
                <div className="text-4xl mb-4">{step.icon}</div>
                <p className="text-xs text-accent font-bold tracking-widest mb-2">STEP {step.step}</p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-accent/70 mb-3">{step.titleAm}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            Experience the Full Ceremony
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Join us for our traditional coffee ceremony every afternoon. Freshly roasted, hand-ground,
            and served with love — just as it has been for over a thousand years.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Reserve a Ceremony
          </a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-3">Gallery</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Moments at Tikur Buna
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the warmth, aroma, and beauty of our coffee house.
          </p>
          <div className="ethiopian-border w-24 mx-auto mt-6 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
              }`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <p className="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-accent text-sm tracking-[0.2em] uppercase font-semibold mb-3">Visit Us</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Come Drink Coffee
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <em>Buna tetu!</em> — Come drink coffee. We'd love to welcome you.
          </p>
          <div className="ethiopian-border w-24 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Info */}
          <div className="space-y-8">
            {/* Hours */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span>🕐</span> Opening Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday – Friday</span>
                  <span className="font-medium text-foreground">6:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-medium text-foreground">7:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-medium text-foreground">8:00 AM – 8:00 PM</span>
                </div>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="text-xs text-accent italic">☕ Daily Coffee Ceremony at 3:00 PM</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span>📍</span> Location
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bole Road, Addis Ababa<br />
                Near the African Union Headquarters<br />
                Ethiopia
              </p>
              <div className="mt-4 flex gap-4">
                <a href="tel:+251911234567" className="text-sm text-accent hover:underline flex items-center gap-1">
                  <span>📞</span> +251 911 234 567
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:text-accent hover:border-accent/30 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
            <h3 className="font-serif text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✅</div>
                <p className="font-serif text-xl font-bold text-foreground mb-2">Ameseginalehu!</p>
                <p className="text-muted-foreground">Thank you! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="ethiopian-border" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <div>
                <span className="font-serif text-xl font-bold">ጥቁር ቡና</span>
                <span className="block text-xs tracking-widest uppercase opacity-60">Tikur Buna</span>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              The birthplace of coffee awaits you. Experience the ancient art of Ethiopian coffee ceremony
              in the heart of Addis Ababa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:opacity-100 hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Mon–Fri: 6AM – 9PM</li>
              <li>Saturday: 7AM – 10PM</li>
              <li>Sunday: 8AM – 8PM</li>
              <li className="pt-2 text-accent opacity-100">☕ Ceremony daily at 3PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Bole Road, Addis Ababa</li>
              <li>Ethiopia</li>
              <li>+251 911 234 567</li>
              <li>hello@tikurbuna.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} ጥቁር ቡና Tikur Buna. All rights reserved.
          </p>
          <p className="text-xs opacity-50">
            Made with ☕ and ❤️ in Addis Ababa
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============ APP ============

function App() {
  useEffect(() => {
    // Load Google Fonts dynamically
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <Ceremony />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
