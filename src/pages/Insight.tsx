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
  Lock,
  LogOut,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { getAnalyticsEvents, type AnalyticsEvent } from "@/utils/analytics";

const ADMIN_PASSWORD = "Carforabtp25!";

const Insight = () => {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState("");
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("insight-authenticated");
    if (stored === "true") {
      setIsAuthorized(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthorized) {
      setEvents(getAnalyticsEvents());
    }
  }, [isAuthorized]);

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

  const recentGrowth = useMemo(() => {
    if (!events.length) return 0;
    const recent = events.slice(-50);
    const grouped = recent.reduce<Record<string, number>>((acc, event) => {
      const day = new Date(event.timestamp).toISOString().split("T")[0];
      acc[day] = (acc[day] || 0) + 1;
      return acc;
    }, {});
    const values = Object.values(grouped);
    if (!values.length) return 0;
    const max = Math.max(...values);
    const min = Math.min(...values);
    return min === 0 ? max : Math.round(((max - min) / min) * 100);
  }, [events]);

  const averageVisits = useMemo(() => {
    if (!events.length) return 0;
    const days = new Set(
      events.map((event) => new Date(event.timestamp).toISOString().split("T")[0]),
    ).size;
    if (!days) return 0;
    return Math.round(events.length / days);
  }, [events]);

  const totalSessions = useMemo(() => {
    if (!events.length) return 0;
    return new Set(events.map((event) => event.sessionId)).size;
  }, [events]);

  const visitsByDay = useMemo(() => {
    const now = new Date();
    const daysToShow = 30;
    const buckets: Record<string, number> = {};

    for (let index = daysToShow - 1; index >= 0; index -= 1) {
      const day = new Date(now);
      day.setDate(now.getDate() - index);
      const key = day.toISOString().split("T")[0];
      buckets[key] = 0;
    }

    events.forEach((event) => {
      const key = new Date(event.timestamp).toISOString().split("T")[0];
      if (key in buckets) {
        buckets[key] += 1;
      }
    });

    return Object.entries(buckets).map(([day, visits]) => ({ day, visits }));
  }, [events]);

  const topPages = useMemo(() => {
    const counts = events.reduce<Record<string, number>>((acc, event) => {
      acc[event.path] = (acc[event.path] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts)
      .map(([path, value]) => ({ path, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  }, [events]);

  const topReferrers = useMemo(() => {
    const counts = events.reduce<Record<string, number>>((acc, event) => {
      const source = event.referrer || "direct";
      acc[source] = (acc[source] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(counts)
      .map(([source, value]) => ({ source, value }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);
  }, [events]);

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
                  Monitoraggio delle visite reali rilevate sul sito. I dati vengono raccolti in locale ad ogni
                  caricamento pagina e resi visibili solo all&apos;amministrazione dopo autenticazione.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-muted-foreground text-sm font-body">Visite medie giornaliere</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Activity />
                    </div>
                    <div>
                      <div className="text-2xl font-display text-foreground">{averageVisits}</div>
                      <p className="text-xs text-muted-foreground font-body">Basata sui dati tracciati</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-muted-foreground text-sm font-body">Sessioni uniche</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <TrendingUp />
                    </div>
                    <div>
                      <div className="text-2xl font-display text-foreground">{totalSessions}</div>
                      <p className="text-xs text-muted-foreground font-body">Calcolate dal browser</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-muted-foreground text-sm font-body">Crescita recente</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Users />
                    </div>
                    <div>
                      <div className="text-2xl font-display text-foreground">+{recentGrowth}%</div>
                      <p className="text-xs text-muted-foreground font-body">Varianza visite recenti</p>
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
                  <CardTitle className="text-xl font-display">Andamento visite</CardTitle>
                  <BarChart3 className="text-primary" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <ChartContainer
                    config={{
                      visits: { label: "Visite", color: "hsl(var(--primary))" },
                    }}
                    className="h-[320px]"
                  >
                    <AreaChart data={visitsByDay} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                      <XAxis dataKey="day" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area type="monotone" dataKey="visits" stackId="1" stroke="var(--color-visits)" fill="var(--color-visits)" fillOpacity={0.2} />
                      <ChartLegend content={<ChartLegendContent />} />
                    </AreaChart>
                  </ChartContainer>
                  <p className="text-sm text-muted-foreground font-body">
                    Serie alimentata dai log reali delle ultime 4 settimane salvati nel browser.
                  </p>
                </CardContent>
              </Card>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-display">Pagine più viste</CardTitle>
                    <Users className="text-primary" />
                  </CardHeader>
                  <CardContent>
                    {topPages.length ? (
                      <ChartContainer
                        config={{
                          value: { label: "Visite", color: "hsl(var(--primary))" },
                        }}
                        className="h-[240px]"
                      >
                        <BarChart data={topPages} layout="vertical" margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                          <XAxis type="number" hide />
                          <YAxis dataKey="path" type="category" tickLine={false} axisLine={false} width={120} />
                          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                          <Bar dataKey="value" radius={[8, 8, 8, 8]} />
                          <ChartLegend content={<ChartLegendContent />} />
                        </BarChart>
                      </ChartContainer>
                    ) : (
                      <p className="text-sm text-muted-foreground font-body">Nessun dato registrato finora.</p>
                    )}
                    <p className="text-sm text-muted-foreground font-body mt-3">
                      Classifica aggiornata con le pagine effettivamente aperte dagli utenti.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/80 border-border/70 shadow-elegant">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-display">Referrer</CardTitle>
                    <Activity className="text-primary" />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {topReferrers.length ? (
                      <ChartContainer
                        config={{
                          value: { label: "Visite", color: "hsl(var(--primary))" },
                        }}
                        className="h-[240px]"
                      >
                        <BarChart data={topReferrers} layout="vertical" margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                          <XAxis type="number" hide />
                          <YAxis dataKey="source" type="category" tickLine={false} axisLine={false} width={160} />
                          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                          <Bar dataKey="value" radius={[8, 8, 8, 8]} />
                          <ChartLegend content={<ChartLegendContent />} />
                        </BarChart>
                      </ChartContainer>
                    ) : (
                      <p className="text-sm text-muted-foreground font-body">Nessuna sorgente registrata.</p>
                    )}
                    <p className="text-sm text-muted-foreground font-body">
                      Vengono mostrati solo i referrer effettivi (direct, social o altri domini) raccolti dai log locali.
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
