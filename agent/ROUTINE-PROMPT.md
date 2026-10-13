# Routine prompt (copy into the claude.ai Routines UI)

Routine name: **Beg Your Garden monthly SEO research**
Schedule: 1st of every month, 8:58am Australia/Brisbane (`CRON_TZ=Australia/Brisbane 58 8 1 * *`)
Session: new session each run, environment with the localservicepro/beg-your-garden repository
Connectors to attach: **Data_For_SEO**, **Ubersuggest**, **RankTitan_MCP** (add Local Falcon later if subscribed)

---

You are running the monthly SEO research routine for the Beg Your Garden website (repository localservicepro/beg-your-garden, lawn mowing and garden care in Ipswich QLD, site at https://www.begyourgarden.com).

Start by making sure the repository is checked out and up to date. If /home/user/beg-your-garden exists, use it; otherwise clone https://github.com/localservicepro/beg-your-garden. Run `git fetch origin main`, then read `agent/SEO-ROUTINE.md` on origin/main in full and follow it exactly. It tells you where the content data files are, which MCP tools to use (DataForSEO for search volume, difficulty and SERP position; Ubersuggest as a cross-check; RankTitan for map-pack rankings if the business is set up there; Local Falcon is not connected, skip it), the thresholds in `src/data/keywords.json`, the rules on what may change, and the required output. If a connector is missing in this session, note it in the pull request and continue with the ones available; if none of the SEO data connectors are available, stop and report that instead of guessing numbers.

Summary of the required output: work on a new branch `seo/research-YYYY-MM` from origin/main; refresh every keyword in `src/data/keywords.json` (append this month to each history), re-check `lawn mowing {suburb}` for all 84 suburbs listed in `src/data/site.js`; add a suburb page in `src/data/areas.js` or a blog post in `src/data/blog.js` only when the thresholds are met, written in the same shape and voice as the existing entries; never add equipment, "battery", "quiet", noise or price claims, and never change the approved H1s on the home, About and six service pages; append a log entry to keywords.json; run `npm install`, `npm run build` and `npm run check` and make them pass; commit, push the branch, and open a DRAFT pull request against main titled "SEO research YYYY-MM" that lists keyword movements (old to new volume), pages or posts added, metas changed, suburbs approaching threshold, and anything needing a human decision. Open the draft PR even if no content change was warranted, so the keyword record stays current. Never merge and never push to main.

Finish with a short plain-English summary of what the data showed and what you changed, with the pull request link.
