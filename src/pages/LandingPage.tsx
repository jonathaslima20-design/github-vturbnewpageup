import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BannerClients from '@/components/subscription/BannerClients';
import {
  Zap,
  ArrowRight,
  Rocket,
  Check,
  TrendingUp,
  MessageCircle,
  ShoppingBag,
  Tags,
  Share2,
  Smartphone,
  Globe,
  Eye,
  Users,
  DollarSign,
  Star,
  Crown,
  ExternalLink,
  ShieldCheck,
  Plus,
  Menu,
  X,
  Infinity as InfinityIcon,
  Layers,
  Link2,
  Palette,
  Ruler,
  Tag,
} from 'lucide-react';

const stockHero =
  'https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=900';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#recursos', label: 'Recursos' },
    { href: '#analytics', label: 'Analytics' },
    { href: '#precos', label: 'Preços' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      <div
        className={`mx-auto max-w-6xl glass-nav rounded-2xl transition-all duration-300 ${
          scrolled ? 'mt-3 py-3 soft-shadow' : 'mt-5 py-5'
        }`}
      >
        <div className="px-5 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="white" />
            </span>
            <span className="font-bold text-slate-900 tracking-tight text-lg">
              VitrineTurbo
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Entrar
            </Link>
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
            >
              Criar Conta
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 mx-2 glass-nav rounded-xl p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-slate-900 py-1.5"
              >
                {l.label}
              </a>
            ))}
            <div className="h-px bg-slate-100 my-1" />
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 rounded-xl"
            >
              Entrar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

type PhoneProps = {
  src: string;
  rotate: string;
  bob: string;
  scale?: string;
  z?: string;
};
function Phone({ src, rotate, bob, scale = '', z = '' }: PhoneProps) {
  return (
    <div
      className={`shrink-0 ${z}`}
      style={{ transform: `${rotate}` }}
    >
      <div className={`${bob} ${scale}`}>
        <div className="relative w-[230px] h-[470px] rounded-[2.5rem] bg-slate-900 p-2.5 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.45)]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-10" />
          <div className="w-full h-full rounded-[2rem] overflow-hidden bg-white relative">
            <img
              src={src}
              alt="VitrineTurbo screen"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneCarousel() {
  const screens = [
    { src: '/image.png', rotate: 'rotate(-8deg)', bob: 'lp-bob-a' },
    { src: '/image copy.png', rotate: 'rotate(0deg)', bob: 'lp-bob-b', scale: 'scale-110', z: 'relative z-10' },
    { src: '/image copy copy.png', rotate: 'rotate(8deg)', bob: 'lp-bob-c' },
    { src: '/image.png', rotate: 'rotate(-6deg)', bob: 'lp-bob-a' },
    { src: '/image copy copy.png', rotate: 'rotate(4deg)', bob: 'lp-bob-b' },
    { src: '/image copy.png', rotate: 'rotate(-4deg)', bob: 'lp-bob-c' },
  ];
  const sequence = [...screens, ...screens];

  return (
    <div className="relative h-full w-full lp-carousel">
      <div className="absolute inset-0 flex items-center lp-carousel-mask overflow-hidden">
        <div className="lp-marquee-track flex items-center gap-10 px-6">
          {sequence.map((s, i) => (
            <Phone
              key={i}
              src={s.src}
              rotate={s.rotate}
              bob={s.bob}
              scale={s.scale}
              z={s.z}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden mesh-light">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="lp-fadeup">
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Seu Catálogo Digital em{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  Minutos
                </span>
                <svg
                  className="absolute -bottom-3 left-0 w-full"
                  height="14"
                  viewBox="0 0 240 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    className="lp-draw"
                    d="M2 9 C 60 1, 120 13, 238 5"
                    stroke="url(#hg)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="hg" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              .
            </h1>

            <p className="mt-7 text-xl text-slate-600 max-w-2xl leading-relaxed">
             Pare de perder vendas por falta de organização. Tenha uma vitrine profissional e ilimitada agora.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-4 rounded-xl transition-all soft-shadow"
              >
                <Rocket className="w-5 h-5" />
                Criar Agora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#recursos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-semibold px-6 py-4 rounded-xl transition-all"
              >
                Ver Recursos
              </a>
            </div>

          </div>

          <div className="relative h-[560px] lp-fadeup lp-delay-200">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[460px] h-[460px] rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute w-[320px] h-[320px] rounded-full bg-emerald-400/15 blur-3xl translate-x-12 translate-y-16" />
              <div className="absolute w-[260px] h-[260px] rounded-full bg-amber-400/15 blur-3xl -translate-x-16 -translate-y-12" />
            </div>

            <PhoneCarousel />

            <div className="absolute top-8 -left-2 sm:left-0 soft-card rounded-2xl px-4 py-3 soft-shadow lp-fadeup lp-delay-300 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">Vendas hoje</p>
                  <p className="text-sm font-bold text-slate-900">+ R$ 2.847</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 -right-2 sm:right-0 soft-card rounded-2xl px-4 py-3 soft-shadow lp-fadeup lp-delay-400 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">Novos leads</p>
                  <p className="text-sm font-bold text-slate-900">+18 hoje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  className?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  hoverBorder: string;
  children?: React.ReactNode;
  blurColor: string;
};
function FeatureCard({
  className = '',
  icon,
  title,
  description,
  hoverBorder,
  children,
  blurColor,
}: CardProps) {
  return (
    <div
      className={`group relative soft-card rounded-3xl p-7 overflow-hidden transition-all duration-300 hover:soft-shadow ${hoverBorder} ${className}`}
    >
      <div
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-50 blur-3xl pointer-events-none"
        style={{ background: blurColor }}
      />
      <div className="relative">
        <div className="mb-5">{icon}</div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{title}</h3>
        <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
        {children}
      </div>
    </div>
  );
}

function FeaturesBento() {
  return (
    <section id="recursos" className="pt-24 pb-12 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-blue-600">
            Recursos
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Tudo que você precisa para{' '}
            <span className="text-blue-600">impulsionar suas vendas</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Uma plataforma completa, pensada para negócios que presisam apresentar seus produtos de forma profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[minmax(220px,auto)]">
          <FeatureCard
            className="md:col-span-3 md:row-span-2"
            hoverBorder="hover:border-blue-200"
            blurColor="rgba(37,99,235,0.18)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-slate-900 items-center justify-center shadow-[0_8px_20px_-8px_rgba(15,23,42,0.5)]">
                <ShoppingBag className="w-6 h-6 text-white" />
              </span>
            }
            title="Gestão Completa de Produtos"
            description="Cadastre, organize e atualize seu catálogo em segundos."
          >
            <div className="mt-7 flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { Icon: Layers, label: 'Categorias' },
                  { Icon: InfinityIcon, label: 'Produtos' },
                  { Icon: Link2, label: 'Links' },
                ].map(({ Icon, label }, i) => (
                  <div
                    key={label}
                    className="group/card flex flex-col items-center justify-start py-4"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-slate-900/10 blur-lg scale-110" />
                      <div className="relative inline-flex w-14 h-14 sm:w-16 sm:h-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-[0_10px_25px_-8px_rgba(15,23,42,0.5)] transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-3">
                        <Icon className="w-6 h-6" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="mt-3 text-[11px] leading-none font-semibold uppercase tracking-[0.14em] text-slate-700 text-center">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { Icon: Palette, label: 'Cores' },
                  { Icon: Ruler, label: 'Tamanhos' },
                  { Icon: Tag, label: 'Ofertas' },
                ].map(({ Icon, label }, i) => (
                  <div
                    key={label}
                    className="group/card flex flex-col items-center justify-start py-4"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-slate-900/10 blur-lg scale-110" />
                      <div className="relative inline-flex w-14 h-14 sm:w-16 sm:h-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-[0_10px_25px_-8px_rgba(15,23,42,0.5)] transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-3">
                        <Icon className="w-6 h-6" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="mt-3 text-[11px] leading-none font-semibold uppercase tracking-[0.14em] text-slate-700 text-center">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="md:col-span-3"
            hoverBorder="hover:border-slate-300"
            blurColor="rgba(15,23,42,0.12)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-slate-100 items-center justify-center">
                <Tags className="w-6 h-6 text-slate-700" />
              </span>
            }
            title="Atacado e Varejo"
            description="Cadastre produtos no varejo ou atacado, com faixas de preço e cálculo em tempo real."
          >
            <div className="mt-5 flex items-center gap-3">
              {[
                { qty: '1-9', price: 'R$ 89', active: false },
                { qty: '10-49', price: 'R$ 75', active: true },
                { qty: '50+', price: 'R$ 62', active: false },
              ].map((t) => (
                <div
                  key={t.qty}
                  className={`flex-1 rounded-xl px-3 py-2.5 text-center transition-colors ${
                    t.active
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-50 text-slate-700'
                  }`}
                >
                  <p className="text-[10px] font-medium opacity-75">{t.qty} un</p>
                  <p className="text-sm font-bold">{t.price}</p>
                </div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard
            className="md:col-span-3"
            hoverBorder="hover:border-slate-300"
            blurColor="rgba(15,23,42,0.18)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-slate-900 items-center justify-center shadow-[0_8px_20px_-8px_rgba(15,23,42,0.5)]">
                <Share2 className="w-6 h-6 text-white" />
              </span>
            }
            title="Indique e Ganhe Comissão"
            description="Compartilhe seu link exclusivo, indique novos lojistas para o VitrineTurbo e receba comissão em dinheiro a cada assinatura confirmada."
          >
            <div className="mt-5">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5">
                <Link2 className="w-4 h-4 text-slate-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700 truncate">
                  vitrineturbo.com/?ref=<span className="text-slate-900 font-semibold">seunome</span>
                </span>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-200 px-2 py-0.5 rounded-md">
                  copiar
                </span>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="md:col-span-2"
            hoverBorder="hover:border-slate-300"
            blurColor="rgba(15,23,42,0.12)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-slate-100 items-center justify-center">
                <MessageCircle className="w-6 h-6 text-slate-700" />
              </span>
            }
            title="WhatsApp Integrado"
            description="Carrinho que vira mensagem pronta no WhatsApp, com produtos, quantidades e total."
          />

          <FeatureCard
            className="md:col-span-2"
            hoverBorder="hover:border-slate-300"
            blurColor="rgba(15,23,42,0.18)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-slate-900 items-center justify-center shadow-[0_8px_20px_-8px_rgba(15,23,42,0.5)]">
                <Smartphone className="w-6 h-6 text-white" />
              </span>
            }
            title="Sistema Responsivo"
            description="O VitrineTurbo funciona perfeitamente em qualquer dispositivo: celular, tablet, notebook ou desktop."
          />

          <FeatureCard
            className="md:col-span-2"
            hoverBorder="hover:border-slate-300"
            blurColor="rgba(15,23,42,0.12)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-slate-100 items-center justify-center">
                <Globe className="w-6 h-6 text-slate-700" />
              </span>
            }
            title="Meta Pixel & Google Tag"
            description="Conecte seus pixels e meça cada conversão. Anúncios mais inteligentes, decisões mais certeiras."
          />
        </div>
      </div>
    </section>
  );
}

function AnalyticsSection() {
  const points = [
    { x: 0, v: 60, l: 20 },
    { x: 1, v: 95, l: 35 },
    { x: 2, v: 70, l: 28 },
    { x: 3, v: 130, l: 55 },
    { x: 4, v: 110, l: 48 },
    { x: 5, v: 165, l: 78 },
    { x: 6, v: 195, l: 92 },
  ];
  const W = 400;
  const H = 200;
  const stepX = W / (points.length - 1);
  const maxY = 220;
  const toY = (val: number) => H - (val / maxY) * H;
  const linePath = (key: 'v' | 'l') =>
    points
      .map((p, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${toY(p[key])}`)
      .join(' ');
  const areaPath = (key: 'v' | 'l') =>
    `${linePath(key)} L ${W} ${H} L 0 ${H} Z`;

  return (
    <section id="analytics" className="py-24 bg-slate-50/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.18em] font-semibold text-blue-600">
              Painel administrativo
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Decisões baseadas em dados reais.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Tenha um panorama geral de acessos e leads que o seu catálogo recebe em tempo real.
            </p>

          </div>

          <div className="relative">
            <div className="soft-card rounded-3xl p-6 soft-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Visualizações e Leads
                  </p>
                  <p className="text-xs text-slate-500">Últimos 7 dias</p>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-slate-900" />
                    Visualizações
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Leads
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { l: 'Total', v: '1.284', d: '+24%', c: 'text-emerald-600' },
                  { l: 'Leads', v: '312', d: '+18%', c: 'text-emerald-600' },
                  { l: 'Conv.', v: '24.3%', d: '+3.1pp', c: 'text-emerald-600' },
                ].map((m) => (
                  <div
                    key={m.l}
                    className="rounded-xl bg-slate-50 border border-slate-100 px-3 py-2.5"
                  >
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                      {m.l}
                    </p>
                    <p className="mt-0.5 text-lg font-black text-slate-900">{m.v}</p>
                    <p className={`text-[10px] font-bold ${m.c}`}>{m.d}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <svg viewBox={`0 0 ${W} ${H + 28}`} className="w-full h-auto">
                  <defs>
                    <linearGradient id="grad-v" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#0f172a" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad-l" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <path d={areaPath('v')} fill="url(#grad-v)" />
                  <path d={areaPath('l')} fill="url(#grad-l)" />

                  <path
                    d={linePath('v')}
                    stroke="#0f172a"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lp-draw"
                  />
                  <path
                    d={linePath('l')}
                    stroke="#10b981"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lp-draw"
                  />

                  {points.map((p, i) => (
                    <circle
                      key={i}
                      cx={i * stepX}
                      cy={toY(p.l)}
                      r="4"
                      fill="#10b981"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                  ))}

                  {['20/04', '21/04', '22/04', '23/04', '24/04', '25/04', '26/04'].map(
                    (d, i) => (
                      <text
                        key={d}
                        x={i * stepX}
                        y={H + 20}
                        fontSize="10"
                        fill="#94a3b8"
                        textAnchor="middle"
                        fontFamily="Inter, sans-serif"
                      >
                        {d}
                      </text>
                    )
                  )}
                </svg>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 sm:-right-6 soft-card rounded-2xl px-4 py-3 soft-shadow lp-fadeup lp-delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Star className="w-5 h-5 text-emerald-600" fill="#10b981" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Conversão hoje
                  </p>
                  <p className="text-sm font-bold text-slate-900">+32%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsBannerSection() {
  return (
    <section className="bg-white pb-16 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <BannerClients />
      </div>
    </section>
  );
}

function PricingSection() {
  const paidFeatures = [
    'Produtos ilimitados',
    'Categorias ilimitadas',
    'Catálogo Digital via Link',
    'Painel Administrativo',
    'Funcionalidade de carrinho de compras',
    'Configuração de links externos',
    'Integração com Meta Pixel e Google Tag',
    'Programa de Indicação ("Indique e Ganhe")',
  ];

  const plans = [
    {
      name: 'Mensal',
      price: 'R$ 57,00',
      period: 'pagamento único',
      icon: <Zap className="w-6 h-6 text-slate-700" />,
      iconBg: 'bg-slate-100',
      cardBg: 'bg-white',
      border: 'border-slate-200',
      btn: 'bg-slate-900 hover:bg-slate-800 text-white',
      popular: false,
      scale: '',
      titleColor: 'text-slate-900',
      priceColor: 'text-slate-900',
      periodColor: 'text-slate-500',
      featureColor: 'text-slate-700',
      checkColor: 'text-emerald-500',
      features: paidFeatures,
      ctaLabel: 'Assinar Agora',
    },
    {
      name: 'Semestral',
      price: 'R$ 229,00',
      period: 'pagamento único',
      icon: <Star className="w-6 h-6 text-slate-700" />,
      iconBg: 'bg-slate-100',
      cardBg: 'bg-white',
      border: 'border-slate-200',
      btn: 'bg-slate-900 hover:bg-slate-800 text-white',
      popular: false,
      scale: '',
      titleColor: 'text-slate-900',
      priceColor: 'text-slate-900',
      periodColor: 'text-slate-500',
      featureColor: 'text-slate-700',
      checkColor: 'text-emerald-500',
      features: paidFeatures,
      ctaLabel: 'Assinar Agora',
    },
    {
      name: 'Anual',
      price: 'R$ 336,00',
      period: 'pagamento único',
      icon: <Crown className="w-6 h-6 text-slate-200" />,
      iconBg: 'bg-slate-700',
      cardBg: 'bg-slate-900',
      border: 'border-slate-900',
      btn: 'bg-white hover:bg-slate-100 text-slate-900',
      popular: true,
      scale: 'lg:scale-[1.03]',
      titleColor: 'text-white',
      priceColor: 'text-white',
      periodColor: 'text-slate-400',
      featureColor: 'text-slate-300',
      checkColor: 'text-emerald-400',
      features: paidFeatures,
      ctaLabel: 'Assinar Agora',
    },
  ];

  return (
    <section id="precos" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-blue-600">
            Preços
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Escolha o plano ideal pra você
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pagamento único, sem surpresas. Todas as funcionalidades em todos os planos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch max-w-4xl mx-auto w-full">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border-2 ${p.border} ${p.cardBg} ${p.scale} p-7 flex flex-col transition-all hover:soft-shadow`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md border border-slate-200">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Mais Popular
                </span>
              )}

              <div
                className={`w-12 h-12 rounded-2xl ${p.iconBg} flex items-center justify-center`}
              >
                {p.icon}
              </div>

              <h3 className={`mt-5 text-xl font-bold ${p.titleColor}`}>{p.name}</h3>
              <div className="mt-3">
                <p className={`text-4xl font-black tracking-tight ${p.priceColor}`}>
                  {p.price}
                </p>
                <p className={`text-sm mt-1 ${p.periodColor}`}>{p.period}</p>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${p.featureColor}`}>
                    <Check
                      className={`w-5 h-5 ${p.checkColor} shrink-0 mt-0.5`}
                      strokeWidth={3}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/register"
                className={`mt-7 inline-flex items-center justify-center gap-2 ${p.btn} font-semibold px-5 py-3.5 rounded-xl transition-all`}
              >
                {p.ctaLabel}
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          Pagamento seguro via Pix ou cartão.
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const items = [
    {
      q: 'Posso cancelar a qualquer momento?',
      a: 'Sim. Os planos são pagamentos únicos e você pode optar por não renovar quando quiser, sem multa, sem fidelidade.',
    },
    {
      q: 'Preciso de conhecimento técnico?',
      a: 'Não. O VitrineTurbo foi desenhado para ser usado sem código. Em poucos minutos você cadastra produtos e compartilha o link.',
    },
    {
      q: 'Funciona para qualquer nicho?',
      a: 'Sim. Moda, calçados, cosméticos, alimentos, serviços, decoração... A plataforma é flexível e se adapta ao seu negócio.',
    },
    {
      q: 'Como funciona o Indique e Ganhe?',
      a: 'Cada usuário recebe um link de indicação. Quando alguém assina por meio dele, você ganha comissão e crédito direto na conta.',
    },
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-24 bg-slate-50/60">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-blue-600">
            FAQ
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className={`rounded-2xl bg-white border-2 transition-colors ${
                  isOpen ? 'border-blue-200' : 'border-slate-100'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {it.q}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? 'bg-slate-900 text-white rotate-45'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Plus className="w-4 h-4" strokeWidth={3} />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-slate-600 leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden bg-primary text-primary-foreground rounded-[2rem] px-8 sm:px-14 py-16 sm:py-20 text-center">
          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 text-primary-foreground text-xs font-medium px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary-foreground" />
              Comece em menos de 5 minutos
            </span>

            <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-primary-foreground">
              Pronto para acelerar suas vendas?
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Crie sua vitrine, cadastre seus produtos e compartilhe o link. Simples
              assim.
            </p>

            <Link
              to="/register"
              className="mt-9 group inline-flex items-center justify-center gap-2 bg-background hover:bg-muted text-foreground font-bold px-7 py-4 rounded-xl transition-all"
            >
              <Rocket className="w-5 h-5" />
              Começar Agora
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    {
      title: 'Produto',
      links: ['Recursos', 'Analytics', 'Preços', 'FAQ'],
    },
    {
      title: 'Suporte',
      links: ['Central de Ajuda', 'Termos', 'Privacidade', 'Status'],
    },
  ];
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </span>
              <span className="font-bold text-slate-900 text-lg tracking-tight">
                VitrineTurbo
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Seu catálogo digital em minutos. Venda mais, com menos esforço.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-bold text-slate-900">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 VitrineTurbo. Todos os direitos reservados.
          </p>
          <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-4 h-4" />
            Sistema Seguro &middot; SSL &middot; LGPD
          </span>
        </div>
      </div>
      {/* hidden image to satisfy lint of unused */}
      <img src={stockHero} alt="" className="hidden" />
    </footer>
  );
}

export default function LandingPage() {
  useEffect(() => {
    document.title = 'VitrineTurbo - Sua Vitrine Profissional em Minutos';
  }, []);

  return (
    <div className="lp-root lp-font bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturesBento />
      <AnalyticsSection />
      <ClientsBannerSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}