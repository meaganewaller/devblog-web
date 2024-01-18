let lastFetch = new Date();

export async function avoidRateLimit() {
  function sleepMs(ms = 500) {
    return new Promise((res) => setTimeout(res, ms));
  }
  if (process.env.NEXT_PHASE === "phase-production-build") {
    const sinceLastFetch = new Date().getTime() - lastFetch.getTime();
    if (sinceLastFetch < 5000) {
      await sleepMs(5000);
    }
    lastFetch = new Date();
  }
}
