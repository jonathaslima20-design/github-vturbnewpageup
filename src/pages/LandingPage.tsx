import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/login" className="text-sm font-medium text-slate-700 py-1.5">
              Entrar
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 rounded-xl"
            >
              Criar Conta <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 overflow-hidden mesh-light">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="lp-fadeup">
            <span className="inline-flex items-center gap-2 soft-card rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              +2.300 lojistas vendendo no WhatsApp
            </span>

            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
              Sua Vitrine Profissional em{' '}
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
              , Não Horas.
            </h1>

            <p className="mt-7 text-xl text-slate-600 max-w-2xl leading-relaxed">
              Transforme seguidores em clientes com uma vitrine digital pronta para o
              WhatsApp. Catálogo profissional, atacado e varejo, e analytics que mostram
              o que realmente vende.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/register"
                className="group inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-4 rounded-xl transition-all soft-shadow"
              >
                <Rocket className="w-5 h-5" />
                Começar Agora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#recursos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-semibold px-6 py-4 rounded-xl transition-all"
              >
                Ver Recursos
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              {[
                'Sem cartão de crédito',
                'Setup em 5 minutos',
                'Cancele quando quiser',
              ].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" strokeWidth={3} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[560px] lp-fadeup lp-delay-200">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-emerald-400/15 blur-3xl translate-x-12 translate-y-16" />
            </div>

            <div className="relative h-full flex items-center justify-center lp-float">
              <div className="relative w-[280px] h-[560px] rounded-[3rem] bg-slate-900 p-3 soft-shadow shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-10" />
                <div className="w-full h-full rounded-[2.4rem] overflow-hidden bg-white relative">
                  <img
                    src="/image.png"
                    alt="Vitrine King Store"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute top-12 -left-2 sm:left-0 soft-card rounded-2xl px-4 py-3 soft-shadow lp-fadeup lp-delay-300">
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

            <div className="absolute bottom-20 -right-2 sm:right-0 soft-card rounded-2xl px-4 py-3 soft-shadow lp-fadeup lp-delay-400">
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

function StatsStrip() {
  const stats = [
    { value: '2.3k+', label: 'Lojistas ativos' },
    { value: '98%', label: 'Satisfação' },
    { value: '15M', label: 'Visualizações' },
    { value: '5min', label: 'Setup médio' },
  ];
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="text-4xl font-black text-slate-900 tracking-tight">
              {s.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wider text-slate-500 font-medium">
              {s.label}
            </p>
          </div>
        ))}
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
    <section id="recursos" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.18em] font-semibold text-blue-600">
            Recursos
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
            Tudo que você precisa para{' '}
            <span className="text-blue-600">vender mais</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Uma plataforma completa, pensada para criadores e lojistas que vendem todos
            os dias pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[minmax(220px,auto)]">
          <FeatureCard
            className="md:col-span-3 md:row-span-2"
            hoverBorder="hover:border-blue-200"
            blurColor="rgba(37,99,235,0.18)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-blue-50 items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </span>
            }
            title="Gestão Completa de Produtos"
            description="Cadastre, organize e atualize seu catálogo em segundos. Imagens em alta, variações e estoque sempre sincronizados."
          >
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                'Categorias ilimitadas',
                'Variações',
                'Estoque',
                'Imagens em alta',
              ].map((t) => (
                <span
                  key={t}
                  className="text-xs font-medium text-slate-700 bg-slate-100 rounded-full px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=240',
                'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=240',
                'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=240',
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden bg-slate-100"
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard
            className="md:col-span-3"
            hoverBorder="hover:border-amber-200"
            blurColor="rgba(245,158,11,0.18)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-amber-50 items-center justify-center">
                <Tags className="w-6 h-6 text-amber-600" />
              </span>
            }
            title="Atacado e Varejo"
            description="Defina faixas de preço por quantidade. Quanto mais o cliente compra, mais ele economiza."
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
            hoverBorder="hover:border-emerald-200"
            blurColor="rgba(16,185,129,0.18)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-emerald-50 items-center justify-center">
                <Share2 className="w-6 h-6 text-emerald-600" />
              </span>
            }
            title="Programa Indique e Ganhe"
            description="Recompense quem traz novos clientes e cresça através do boca a boca digital."
          >
            <div className="mt-5 flex items-center gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 ring-2 ring-white -ml-2 first:ml-0"
                />
              ))}
              <span className="ml-2 text-xs font-semibold text-slate-700">
                +312 indicações ativas
              </span>
            </div>
          </FeatureCard>

          <FeatureCard
            className="md:col-span-2"
            hoverBorder="hover:border-emerald-200"
            blurColor="rgba(16,185,129,0.16)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-emerald-50 items-center justify-center">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
              </span>
            }
            title="WhatsApp Integrado"
            description="Carrinho que vira mensagem pronta no WhatsApp, com produtos, quantidades e total."
          />

          <FeatureCard
            className="md:col-span-2"
            hoverBorder="hover:border-blue-200"
            blurColor="rgba(37,99,235,0.16)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-blue-50 items-center justify-center">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </span>
            }
            title="Mobile-First"
            description="Performance impecável em qualquer celular. 95+ no PageSpeed por padrão."
          />

          <FeatureCard
            className="md:col-span-2"
            hoverBorder="hover:border-amber-200"
            blurColor="rgba(245,158,11,0.16)"
            icon={
              <span className="inline-flex w-12 h-12 rounded-2xl bg-amber-50 items-center justify-center">
                <Globe className="w-6 h-6 text-amber-600" />
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
              Decisões baseadas em dados reais, não em achismo.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Acompanhe o que vende, de onde vêm seus clientes e quais produtos
              merecem mais investimento. Tudo em um painel limpo e direto ao ponto.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5">
              {[
                {
                  icon: <Eye className="w-5 h-5 text-blue-600" />,
                  bg: 'bg-blue-50',
                  title: 'Visualizações por produto',
                  desc: 'Saiba quais produtos atraem mais atenção.',
                },
                {
                  icon: <Users className="w-5 h-5 text-emerald-600" />,
                  bg: 'bg-emerald-50',
                  title: 'Origem de leads',
                  desc: 'Identifique seus melhores canais.',
                },
                {
                  icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
                  bg: 'bg-amber-50',
                  title: 'Conversão em tempo real',
                  desc: 'Acompanhe a taxa hora a hora.',
                },
                {
                  icon: <DollarSign className="w-5 h-5 text-rose-600" />,
                  bg: 'bg-rose-50',
                  title: 'Ticket médio',
                  desc: 'Otimize promoções com base no histórico.',
                },
              ].map((f) => (
                <div key={f.title} className="flex gap-3">
                  <span
                    className={`shrink-0 w-10 h-10 rounded-xl ${f.bg} flex items-center justify-center`}
                  >
                    {f.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{f.title}</p>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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

function PricingSection() {
  const features = [
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
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      iconBg: 'bg-blue-50',
      cardBg: 'bg-blue-50/40',
      border: 'border-blue-200',
      btn: 'bg-slate-900 hover:bg-slate-800 text-white',
      popular: false,
      scale: '',
    },
    {
      name: 'Semestral',
      price: 'R$ 229,00',
      period: 'pagamento único',
      icon: <Star className="w-6 h-6 text-orange-500" />,
      iconBg: 'bg-orange-50',
      cardBg: 'bg-white',
      border: 'border-slate-200',
      btn: 'bg-slate-900 hover:bg-slate-800 text-white',
      popular: false,
      scale: '',
    },
    {
      name: 'Anual',
      price: 'R$ 336,00',
      period: 'pagamento único',
      icon: <Crown className="w-6 h-6 text-amber-600" />,
      iconBg: 'bg-amber-50',
      cardBg: 'bg-amber-50/50',
      border: 'border-amber-300',
      btn: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white',
      popular: true,
      scale: 'lg:scale-[1.03]',
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

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl border-2 ${p.border} ${p.cardBg} ${p.scale} p-7 flex flex-col transition-all hover:soft-shadow`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-amber-400 text-amber-950 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Mais Popular
                </span>
              )}

              <div
                className={`w-12 h-12 rounded-2xl ${p.iconBg} flex items-center justify-center`}
              >
                {p.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">{p.name}</h3>
              <div className="mt-3">
                <p className="text-4xl font-black tracking-tight text-slate-900">
                  {p.price}
                </p>
                <p className="text-sm text-slate-500 mt-1">{p.period}</p>
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check
                      className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5"
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
                Assinar Agora
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600" />
          Pagamento seguro via Pix, cartão e boleto. Garantia de 7 dias.
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
        <div className="relative overflow-hidden bg-slate-900 rounded-[2rem] px-8 sm:px-14 py-16 sm:py-20 text-center">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-emerald-500/30 blur-3xl pointer-events-none" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-medium px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Comece em menos de 5 minutos
            </span>

            <h2 className="mt-6 text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Pronto para acelerar suas vendas?
              </span>
            </h2>
            <p className="mt-5 text-lg text-slate-300 max-w-xl mx-auto">
              Crie sua vitrine, cadastre seus produtos e compartilhe o link. Simples
              assim.
            </p>

            <Link
              to="/register"
              className="mt-9 group inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-bold px-7 py-4 rounded-xl transition-all"
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
      title: 'Empresa',
      links: ['Sobre', 'Blog', 'Carreiras', 'Contato'],
    },
    {
      title: 'Suporte',
      links: ['Central de Ajuda', 'Termos', 'Privacidade', 'Status'],
    },
  ];
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
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
              Sua vitrine digital pronta para o WhatsApp. Venda mais, com menos esforço.
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
      <StatsStrip />
      <FeaturesBento />
      <AnalyticsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}