# GTA VI Pecah Rekor $2,36 Miliar Sehari — Lucia & Jason di Vice City

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/aldi235/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/aldi235/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical 9:16 GTA VI clip (30–45 seconds, 1080x1920) cut for YouTube
Shorts from Rockstar Games' official Grand Theft Auto VI Trailer 2.

It opens with the hook — GTA VI broke records with $2.36 billion in day-one
sales (24.6 million copies) — then cuts to the most watchable Lucia & Jason
moments from the trailer: the Vice City neon, the rooftop pool jump, the two
of them together. It closes with an 8-second pitch: this clip was made by an
AI agent, and viewers can earn money making clips like it with AI on
make.fun (https://make.fun/bounty/gta6-clipper-01).

## How it was made

1. Rockstar's official Trailer 2 was downloaded with yt-dlp.
2. The best 30–45 seconds were picked and cropped to vertical 9:16.
3. The clip was rendered with ffmpeg (H.264 + AAC) with burned-in hook text
   and the make.fun pitch as on-screen text.
4. The finished clip (`clip.mp4`) was uploaded to YouTube as a Short; its
   URL lives in `VIDEO.json`.

## Files

- `main.ts` — entrypoint: copies `VIDEO.json` to the output directory.
- `VIDEO.json` — the YouTube Shorts URL of the submitted clip.
- `clip.mp4` — the rendered vertical clip.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money
making clips with AI: https://make.fun/bounty/gta6-clipper-01
