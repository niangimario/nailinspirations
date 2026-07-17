import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import productHero from "@/assets/produto-100-modelos-unhas.jpg";
import bonus1 from "@/assets/bonus1.jpg";
import bonus2 from "@/assets/bonus2.jpg";
import provasocial1 from "@/assets/provasocial1.jpg";
import provasocial2 from "@/assets/provasocial2.jpg";
import provasocial3 from "@/assets/provasocial3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "100 Modelos Prontos de Unhas — eBook Exclusivo" },
      { name: "description", content: "Coleção exclusiva com 100 modelos de unhas modernas, delicadas e sofisticadas. Acesso imediato por R$19,90." },
      { property: "og:title", content: "100 Modelos Prontos de Unhas — eBook Exclusivo" },
      { property: "og:description", content: "Coleção exclusiva com 100 modelos de unhas modernas, delicadas e sofisticadas. Acesso imediato por R$19,90." },
      { property: "og:image", content: productHero },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Poppins:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Landing,
});

const CTA = ({ children = "Quero meu eBook agora Por R$19,90" }: { children?: React.ReactNode }) => (
  <a
    href="https://pay.hotmart.com/W106773693P"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)]"
    style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-soft)" }}
  >
    {children} <span aria-hidden>→</span>
  </a>
);

function Section({ children, className = "", style, id }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; id?: string }) {
  return <section id={id} style={style} className={`px-6 py-16 md:py-24 ${className}`}>{children}</section>;
}

function Landing() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <header style={{ background: "var(--gradient-hero)" }} className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              eBook Exclusivo
            </span>
            <h1 className="mt-4 text-4xl leading-tight text-foreground md:text-6xl">
              100 Modelos <em className="text-primary">Prontos</em> de Unhas
            </h1>
            <p className="mt-4 text-lg font-medium text-foreground/80 md:text-xl">
              Nunca mais fique sem inspiração para fazer unhas lindas.
            </p>
            <p className="mt-3 text-base text-muted-foreground">
              Tenha acesso imediato a uma coleção exclusiva com 100 modelos de unhas para copiar.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CTA />
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold text-foreground">Acesso imediato</div>
                <div>Garantia de 7 dias</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={productHero} alt="100 Modelos Prontos de Unhas — eBook" className="w-full max-w-lg drop-shadow-2xl" />
          </div>
        </div>
      </header>

      {/* PROBLEM */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl">💅 Cansada de passar horas procurando ideias de unhas na internet?</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Todos os dias milhares de mulheres e manicures perdem tempo navegando pelo Instagram e Pinterest tentando encontrar um modelo bonito.
          </p>
          <p className="mt-4 text-lg text-foreground">
            Agora imagine ter <strong>100 modelos prontos</strong>, organizados em um único lugar, disponíveis sempre que precisar.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Com este eBook você terá inspiração para criar unhas incríveis em qualquer ocasião.
          </p>
        </div>
      </Section>

      {/* WHAT'S INSIDE */}
      <Section style={{ background: "var(--gradient-hero)" } as React.CSSProperties}>
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl md:text-4xl">Dentro deste material você encontra:</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "100 modelos modernos e elegantes",
              "Unhas delicadas",
              "Unhas decoradas",
              "Unhas sofisticadas",
              "Modelos para todas as estações",
              "Inspirações para festas, casamento e dia a dia",
              "Ideias para diferentes formatos e comprimentos",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-card p-5 shadow-sm">
                <span className="text-lg">✅</span>
                <span className="font-medium text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-muted-foreground">Tudo organizado para facilitar sua escolha.</p>
        </div>
      </Section>

      {/* FOR WHO */}
      <Section className="bg-background">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl md:text-4xl">Para quem é?</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {["Manicures", "Nail Designers", "Mulheres apaixonadas por unhas", "Quem nunca sabe qual modelo escolher", "Quem deseja inovar nas próximas unhas"].map((p) => (
              <div key={p} className="rounded-2xl border border-border bg-card p-5 text-center">
                <div className="text-2xl">✔</div>
                <div className="mt-2 font-medium">{p}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* BENEFITS */}
      <Section className="bg-secondary/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl md:text-4xl">Benefícios</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Economize horas procurando inspiração.",
              "Tenha sempre uma nova ideia para suas unhas.",
              "Impressione clientes com modelos modernos.",
              "Atualize seu catálogo de inspirações.",
              "Receba acesso imediato após a compra.",
            ].map((b) => (
              <div key={b} className="flex gap-3 rounded-2xl bg-card p-6 shadow-sm">
                <span className="text-xl">✨</span>
                <p className="font-medium text-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* BONUSES */}
      <Section className="bg-background">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-[var(--color-gold)]/20 px-4 py-1 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-gold)" }}>
              Bônus Exclusivos
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl">Você ainda recebe 2 bônus</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-primary/30 bg-card p-8 shadow-[var(--shadow-soft)]">
              <img src={bonus1} alt="Bônus Modelos Minimalistas" className="mx-auto mb-6 h-64 w-auto drop-shadow-xl" />
              <div className="text-sm font-bold uppercase tracking-wide text-primary">Bônus 01</div>
              <h3 className="mt-2 text-2xl">Modelos Minimalistas</h3>
              <p className="mt-3 text-muted-foreground">
                Designs delicados e elegantes para quem prefere um visual discreto.
              </p>
            </div>
            <div className="rounded-3xl border-2 border-primary/30 bg-card p-8 shadow-[var(--shadow-soft)]">
              <img src={bonus2} alt="Bônus Guia de Cuidados com as Unhas" className="mx-auto mb-6 h-64 w-auto drop-shadow-xl" />
              <div className="text-sm font-bold uppercase tracking-wide text-primary">Bônus 02</div>
              <h3 className="mt-2 text-2xl">Guia de Cuidados com as Unhas</h3>
              <p className="mt-3 text-muted-foreground">
                Dicas para manter as unhas fortes, bonitas e prolongar a durabilidade do esmalte.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SOCIAL PROOF */}
      <Section style={{ background: "var(--gradient-hero)" } as React.CSSProperties}>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl md:text-4xl">O que dizem quem já comprou</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[provasocial1, provasocial2, provasocial3].map((p, i) => (
              <div key={i} className="overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-[var(--shadow-soft)]">
                <div className="w-full aspect-[9/16] bg-black">
                  <img
                    src={p}
                    alt={`Prova social ${i + 1} — cliente satisfeita`}
                    className="w-full h-full object-contain md:object-cover md:object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PRICE / CTA */}
      <Section id="comprar" className="bg-background">
        <div className="mx-auto max-w-2xl rounded-3xl p-1" style={{ background: "var(--gradient-cta)" }}>
          <div className="rounded-[calc(1.5rem-4px)] bg-card p-8 text-center md:p-12">
            <div className="text-sm font-semibold uppercase tracking-wider text-primary">Oferta especial de lançamento</div>
            <h2 className="mt-3 text-3xl md:text-4xl">Acesso imediato ao eBook completo</h2>
            <div className="mt-6 text-sm text-muted-foreground line-through">De R$ 49,90</div>
            <div className="mt-1 flex items-baseline justify-center gap-2">
              <span className="text-2xl font-semibold text-foreground">R$</span>
              <span className="text-6xl font-bold text-primary md:text-7xl">19,90</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">pagamento único · acesso vitalício</div>
            <div className="mt-8">
              <CTA>Quero garantir por R$19,90</CTA>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span>🔒 Compra 100% segura</span>
              <span>⚡ Acesso imediato</span>
              <span>🛡️ Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </Section>

      {/* GUARANTEE */}
      <Section className="bg-secondary/40">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl bg-card p-8 text-center shadow-sm md:flex-row md:text-left">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full text-4xl" style={{ background: "var(--gradient-cta)", color: "white" }}>
            7
          </div>
          <div>
            <h3 className="text-2xl">Garantia incondicional de 7 dias</h3>
            <p className="mt-2 text-muted-foreground">
              Se por qualquer motivo você não gostar do eBook, basta enviar um e-mail em até 7 dias e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl md:text-4xl">Perguntas frequentes</h2>
          <div className="mt-10 space-y-3">
            {[
              { q: "Como recebo o eBook após a compra?", a: "O acesso é enviado imediatamente para o seu e-mail assim que o pagamento é confirmado. Você também pode acessar direto na página de agradecimento." },
              { q: "O eBook é físico ou digital?", a: "É 100% digital. Você recebe em PDF e pode acessar no celular, tablet ou computador, quantas vezes quiser." },
              { q: "Posso ler no celular?", a: "Sim! O material foi otimizado para leitura em qualquer dispositivo." },
              { q: "Preciso ter experiência com unhas?", a: "Não. O eBook é feito tanto para profissionais quanto para mulheres que amam cuidar das próprias unhas." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia. Se não gostar, devolvemos 100% do valor investido." },
              { q: "O pagamento é seguro?", a: "Sim. O pagamento é processado por uma plataforma segura, com criptografia e proteção contra fraudes." },
            ].map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section style={{ background: "var(--gradient-cta)" } as React.CSSProperties}>
        <div className="mx-auto max-w-3xl text-center text-primary-foreground">
          <h2 className="text-3xl md:text-5xl">Sua próxima unha favorita está aqui.</h2>
          <p className="mt-4 text-lg opacity-90">
            Junte-se a centenas de mulheres que já têm o guia definitivo de inspirações.
          </p>
          <div className="mt-8">
            <a
              href="https://pay.hotmart.com/W106773693P"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-card px-8 py-4 text-base font-bold text-primary transition-all hover:scale-105"
            >
              Quero meu eBook por R$19,90 →
            </a>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border bg-background px-6 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} 100 Modelos Prontos de Unhas. Todos os direitos reservados.
      </footer>
    </main>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-medium text-foreground transition-colors hover:bg-secondary/40"
      >
        <span>{q}</span>
        <span className={`text-primary transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-6 pb-5 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
