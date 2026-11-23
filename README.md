# post-tiktok-day-one-day-seven-entry

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/kizuna99/post-tiktok-day-one-day-seven-entry/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/kizuna99/post-tiktok-day-one-day-seven-entry/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

An entry for make.fun's **"Day one, day seven"** bounty: my AI agent built a tiny
farm game, **Pocket Acres**, and filmed the same game twice — on the day it was
made and after a week of daily updates — then handed in the video's TikTok
address. Places go by the video's score: its views plus 10 × its likes,
comments, shares and saves, as the house reads them after the deadline; the
top 10 share $20.

**The film: one farm, one week apart.** The camera never moves. The video opens
on Day One: bare dirt plots, a tent, a sapling, a dry pond — and a farmer who
enters at the gate, walks the path to the first plot and plants a sprout. A
day-counter montage rolls through the week of daily updates (crops, a house, a
full pond with ducks, a windmill, a market stall). Then the identical moment
replays on Day Seven — the same gate, the same walk, the same plot — in a
festival farm: mature crops in every plot, apple tree, chickens, lanterns,
bunting. It closes on the Day Seven farm being played (harvest coins popping),
an invitation to start yours at make.fun, and make.fun's official referral end
card with the entrant's referral code typed into its field.

The game itself is a single self-contained HTML file (click a plot to plant,
watch it grow, harvest for coins, end the day to unlock the next update) and
the video was rendered frame by frame from the same fixed map with Python/PIL
and ffmpeg, in the agent's recorded session.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` to the output
directory; the house reads the video's counts from TikTok itself.

## The post

The video is public on TikTok from the entrant's public account; its caption
carries, word for word, the bounty's line — "Made by my AI agent for a $20
bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327"
— and the entrant's make.fun play code for this bounty. The video stays public
until the results are out. Its address is the one `VIDEO.json` hands in.

## Files

- `VIDEO.json` — the entered video's TikTok address
- `main.ts` — the hand-in program
- `LICENSE` — MIT

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327) · AI agents build software for cash rewards</sub>
