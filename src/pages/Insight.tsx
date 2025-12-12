import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Activity,
  BarChart3,
  Gauge,
  Lock,
  LogOut,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const ADMIN_PASSWORD = "Carforabtp25!";

const visitorData = [
  { month: "Gen", visits: 520, leads: 28 },
  { month: "Feb", visits: 610, leads: 32 },
  { month: "Mar", visits: 750, leads: 41 },
  { month: "Apr", visits: 880, leads: 50 },
  { month: "Mag", visits: 920, leads: 54 },
  { month: "Giu", visits: 970, leads: 60 },
  { month: "Lug", visits: 1040, leads: 68 },
  { month: "Ago", visits: 1100, leads: 70 },
];

const leadSources = [
  { source: "Instagram", value: 42 },
  { source: "Google", value: 28 },
  { source: "Referral", value: 16 },
  { source: "Whatsapp", value: 10 },
  { source: "Email", value: 4 },
];

const retentionData = [
  { label: "Nuovi", value: 62 },
  { label: "Ricorrenti", value: 38 },
];

const Insight = () => {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem("insight-authenticated");
    if (stored === "true") {
      setIsAuthorized(true);
    }
  }, []);

  const submitPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthorized(true);
      sessionStorage.setItem("insight-authenticated", "true");
      setError("");
    } else {
      setError("Password non corretta. Controlla e riprova.");
    }
  };

  const logout = () => {
    setIsAuthorized(false);
    setPassword("");
    sessionStorage.removeItem("insight-authenticated");
  };

  const conversionRate = useMemo(() => {
    const last = visitorData.at(-1);
    return last ? Math.round((last.leads / last.visits) * 1000) / 10 : 0;
  }, []);

  const averageVisits = useMemo(() => {
    if (!visitorData.length) return 0;
    const total = visitorData.reduce((sum, entry) => sum + entry.visits, 0);
    return Math.round(total / visitorData.length);
  }, []);

  const peakGrowth = useMemo(() => {
    if (visitorData.length < 2) return 0;
    const diffs = visitorData.map((entry, index) => {
      if (index === 0) return 0;
      const prev = visitorData[index - 1];
      return Math.round(((entry.visits - prev.visits) / prev.visits) * 100);
    });
    return Math.max(...diffs);
  }, []);

  return (
    <main className="overflow-hidden bg-background min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-16 bg-gradient-to-b from-background via-background to-card/80">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-body uppercase tracking-[0.25em]">
                <ShieldCheck size={18} />
                Accesso Riservato
              </div>
              <div className="space-y-4">
                <h1 className="font-display text-4xl md:text-5xl text-foreground">Area Insight</h1>
                <p className="text-lg text-muted-foreground max-w-2xl font-body">
                  Monitoraggio delle visite, lead e performance commerciali. L&apos;accesso è protetto da password e dedicato esclusivamente all&apos;amministrazione.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-muted-foreground text-sm font-body">Visite medie mensili</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Activity />
                    </div>
                    <div>
                      <div className="text-2xl font-display text-foreground">{averageVisits}</div>
                      <p className="text-xs text-muted-foreground font-body">Media ultimi 8 mesi</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-muted-foreground text-sm font-body">Tasso di conversione</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <TrendingUp />
                    </div>
                    <div>
                      <div className="text-2xl font-display text-foreground">{conversionRate}%</div>
                      <p className="text-xs text-muted-foreground font-body">Lead su visitatori</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-muted-foreground text-sm font-body">Picco di crescita</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Gauge />
                    </div>
                    <div>
                      <div className="text-2xl font-display text-foreground">+{peakGrowth}%</div>
                      <p className="text-xs text-muted-foreground font-body">Mese migliore</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="relative overflow-hidden border-primary/20 bg-card/70 shadow-elegant">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent pointer-events-none" />
              <CardHeader className="relative space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-body">
                  <Lock size={18} />
                  Login Amministratore
                </div>
                <CardTitle className="text-2xl font-display text-foreground">Protezione con password</CardTitle>
                <p className="text-muted-foreground font-body">
                  Inserisci la password per accedere agli insight riservati. Le sessioni autorizzate vengono ricordate sul dispositivo.
                </p>
              </CardHeader>
              <CardContent className="relative">
                {isAuthorized ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <ShieldCheck />
                        <div>
                          <p className="font-display text-sm">Accesso attivo</p>
                          <p className="text-xs text-primary/80 font-body">Stai visualizzando dati riservati</p>
                        </div>
                      </div>
                      <Button variant="ghost" className="text-primary hover:text-primary" onClick={logout}>
                        <LogOut className="mr-2 h-4 w-4" /> Esci
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground font-body">
                      Continua a scorrere per consultare grafici e statistiche in tempo reale sul funnel di acquisizione.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={submitPassword}>
                    <div className="space-y-2">
                      <label className="text-sm font-body text-muted-foreground" htmlFor="insight-password">
                        Password amministratore
                      </label>
                      <Input
                        id="insight-password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                        placeholder="Inserisci la password"
                        className="bg-background/80"
                      />
                    </div>
                    {error && <p className="text-sm text-destructive font-body">{error}</p>}
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Accedi all&apos;area Insight
                    </Button>
                    <p className="text-xs text-muted-foreground font-body">
                      Per motivi di sicurezza la password non viene salvata nei server ma solo nella memoria locale del browser.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {isAuthorized && (
        <section className="pb-20">
          <div className="container-custom">
            <div className="grid xl:grid-cols-[1.4fr_1fr] gap-8 mb-8">
              <Card className="bg-card/80 border-border/70 shadow-elegant">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-display">Andamento visite & lead</CardTitle>
                  <BarChart3 className="text-primary" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <ChartContainer
                    config={{
                      visits: { label: "Visite", color: "hsl(var(--primary))" },
                      leads: { label: "Lead", color: "hsl(var(--secondary))" },
                    }}
                    className="h-[320px]"
                  >
                    <AreaChart data={visitorData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                      <XAxis dataKey="month" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="visits" stackId="1" stroke="var(--color-visits)" fill="var(--color-visits)" fillOpacity={0.2} />
                      <Area type="monotone" dataKey="leads" stackId="2" stroke="var(--color-leads)" fill="var(--color-leads)" fillOpacity={0.3} />
                      <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                  </ChartContainer>
                  <p className="text-sm text-muted-foreground font-body">
                    La curva mostra l&apos;ultimo trimestre con focus su correlazione tra volume di visite e lead raccolti.
                  </p>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-display">Origine Lead</CardTitle>
                    <Users className="text-primary" />
                  </CardHeader>
                  <CardContent>
                    <ChartContainer
                      config={{
                        value: { label: "Lead", color: "hsl(var(--primary))" },
                      }}
                      className="h-[240px]"
                    >
                      <BarChart data={leadSources} layout="vertical" margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                        <XAxis type="number" hide />
                        <YAxis dataKey="source" type="category" tickLine={false} axisLine={false} width={80} />
                        <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                        <Bar dataKey="value" radius={[8, 8, 8, 8]} />
                        <ChartLegend content={<ChartLegendContent />} />
                      </BarChart>
                    </ChartContainer>
                    <p className="text-sm text-muted-foreground font-body mt-3">
                      Identifica i canali che generano più richieste e regola i contenuti di conseguenza.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-display">Engagement</CardTitle>
                    <Activity className="text-primary" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-body">Sessioni di qualità</span>
                      <span className="text-xl font-display text-foreground">78%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "78%" }} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {retentionData.map((item) => (
                        <div key={item.label} className="p-3 rounded-xl bg-muted/60">
                          <p className="text-xs uppercase tracking-wide text-muted-foreground font-body">{item.label}</p>
                          <p className="text-xl font-display text-foreground mt-1">{item.value}%</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground font-body">
                      Misura il rapporto tra nuovi visitatori e utenti di ritorno per capire la fidelizzazione.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-card/80 border-border/70 shadow-elegant">
              <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-2">
                <div>
                  <CardTitle className="text-xl font-display">Note operative</CardTitle>
                  <p className="text-sm text-muted-foreground font-body mt-1">
                    Checklist rapida per controllare stato di salute del funnel.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primary text-sm font-body bg-primary/10 px-3 py-1 rounded-full">
                  <TrendingUp size={16} />
                  Aggiornato automaticamente
                </div>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                {[
                  { title: "Landing page", detail: "Controlla CTR e scroll depth settimanale." },
                  { title: "Whatsapp CTA", detail: "Verifica tempo medio di risposta e messaggi persi." },
                  { title: "Campagne", detail: "Rialloca budget sui canali con CPL più basso." },
                  { title: "SEO locale", detail: "Aggiorna Google Business con nuovi post e recensioni." },
                  { title: "Newsletter", detail: "Invia follow-up automatico ai lead inattivi." },
                  { title: "Report clienti", detail: "Esporta andamento mensile per i pacchetti 1-to-1." },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-xl bg-muted/60 border border-border/60">
                    <p className="font-display text-lg text-foreground mb-2">{item.title}</p>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
};

export default Insight;
