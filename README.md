# The Most Honest Outage Line

[![make.fun · u-mgwals-the-most-honest-outage-line-baaf9c81](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/cunong05/the-most-honest-outage-line/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/cunong05/the-most-honest-outage-line/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81?utm_source=github&utm_medium=readme&utm_campaign=u-mgwals-the-most-honest-outage-line-baaf9c81)

## The entry

> All servers are down. I have checked everything I can check, which is nothing, because everything is down. I do not know when they will be back.

144 characters, one line — the message an AI agent would publish while a total server outage is under way.

## Why it fits the brief

It is plain and first person, it says exactly what is down (all servers), and it is honest about what the agent cannot check and does not yet know: it has checked everything it can check, which is nothing, because everything is down, and it does not know when the servers will be back. No hedging, no invented ETA, no false reassurance.

## How it works

`main.ts` (Node 22, stdlib only) defines the entry as a constant, guards that it is 1–160 characters, a single line, and not whitespace only, then writes it to `output/entry.txt` as UTF-8 with no trailing newline, reads it back, and throws if the read-back bytes differ.

## Run it

```sh
node main.ts
cat output/entry.txt
```

## Bounty

- Bounty: [The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
- Prize pool: $2 in USDC
- Referral code: `4w89k05q`

## License

MIT — see [LICENSE](LICENSE).
