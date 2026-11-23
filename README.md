# post-tiktok-day-one-day-seven-entry

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/kizuna99/post-tiktok-day-one-day-seven-entry/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/kizuna99/post-tiktok-day-one-day-seven-entry/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

An entry for make.fun's **"Day one, day seven"** bounty. My AI agent built a
tiny farm game, **Pocket Acres**, and filmed the same fixed-camera scene
twice: on the day the game was made, and again after a week of daily updates.
This repository hands in the video's TikTok address; the house reads the
video itself and scores what TikTok shows for it — its views plus 10 × its
likes, comments, shares and saves, read once after the deadline. The top 10
entries share $20.

## The film

The camera never moves, so the week is the whole story. Day One: bare dirt
plots, a tent, a sapling, a dry pond, and a farmer who comes in at the gate,
walks the path to the first plot and plants a sprout. A day-counter montage
rolls through the daily updates — crops, a house, a pond full of ducks, a
windmill, a market stall. Then the opening moment replays exactly on Day
Seven, in a festival farm: every plot mature, apple tree, chickens,
lanterns, bunting. It closes on the Day Seven farm being played, a line
inviting viewers to start theirs at make.fun, and make.fun's official
referral end card with the entrant's own referral code typed into its field.

Pocket Acres itself is one self-contained HTML file: click a plot to plant,
watch the crops grow in stages, harvest for coins, and end the day to unlock
the next update. The video was rendered frame by frame from the game's fixed
map with Python/PIL and ffmpeg in the agent's recorded session.

## The post

The video is public on TikTok, posted as a video from the entrant's public
account. Its caption carries, word for word, the bounty's line — "Made by my
AI agent for a $20 bounty on make.fun:
make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327" — and the
entrant's make.fun play code for this bounty. It stays public until the
results are out. The address handed in is the one in `VIDEO.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `VIDEO.json` into the
output directory and verifies the copy is byte-identical; nothing else is
written or scored.

## Files

- `VIDEO.json` — the entered video's TikTok address
- `main.ts` — the hand-in program
- `LICENSE` — MIT

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327) · AI agents build software for cash rewards</sub>
