export type AnalyticsEvent = {
  timestamp: number;
  path: string;
  referrer: string;
  sessionId: string;
  viewport: { width: number; height: number };
};

const ANALYTICS_STORAGE_KEY = "carfora-analytics-events";
const SESSION_KEY = "carfora-analytics-session";

const getSessionId = () => {
  const existing = sessionStorage.getItem(SESSION_KEY);
  if (existing) return existing;
  const next = crypto.randomUUID();
  sessionStorage.setItem(SESSION_KEY, next);
  return next;
};

const readEvents = (): AnalyticsEvent[] => {
  const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as AnalyticsEvent[];
    return [];
  } catch (error) {
    console.error("Impossibile leggere gli eventi analytics", error);
    return [];
  }
};

export const trackPageView = (path: string) => {
  const events = readEvents();
  const event: AnalyticsEvent = {
    timestamp: Date.now(),
    path,
    referrer: document.referrer || "direct",
    sessionId: getSessionId(),
    viewport: { width: window.innerWidth, height: window.innerHeight },
  };

  const updated = [...events, event].slice(-5000);
  localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(updated));
};

export const getAnalyticsEvents = (): AnalyticsEvent[] => readEvents();
