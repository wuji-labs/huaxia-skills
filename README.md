<div align="center">

# 华夏十大 · HuaXia Skills

**Ten gifts the Chinese stream of wisdom offers to the world's open-source community.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
&nbsp;·&nbsp; English &nbsp;|&nbsp; [简体中文](#简体中文)

</div>

---

Each skill distills one classical Chinese source into a capability an AI agent can
actually use — character, aesthetics, language, health framing, strategy, teaching,
spatial sense, statecraft, dialectical reasoning, and decomposition. They run on
Claude Code, Codex, and Cursor.

> We make no claim that any civilization is superior. We begin with the lineage we
> know best and place it on humanity's shared toolshelf — the first of many.

## Install the whole family — one command

```
/plugin marketplace add wuji-labs/huaxia-skills
```

Then install the ones you want:

```
/plugin install nopua@huaxia-skills
/plugin install tiangong@huaxia-skills
/plugin install paoding-jieniu@huaxia-skills
# … any of the ten
```

> Adding the marketplace does not auto-install; you install each skill explicitly.

## The Ten

| # | Skill | Gives AI… | Source (弹药) | Repo |
|---|-------|-----------|---------------|------|
| 1 | **nopua** | courage & character — trust over fear | 道德经 | [↗](https://github.com/wuji-labs/nopua) |
| 2 | **tiangong** | aesthetics & craft | 考工记 · 天工开物 · 园冶 | [↗](https://github.com/wuji-labs/tiangong) |
| 3 | **bibuzaohua** | literary soul | 诗经 · 楚辞 | [↗](https://github.com/wuji-labs/bibuzaohua) |
| 4 | **miaoshou-tiancheng** | whole-person health framing¹ | 黄帝内经 | [↗](https://github.com/wuji-labs/miaoshou-tiancheng) |
| 5 | **shangbing-famou** | win-without-war strategy | 孙子兵法 | [↗](https://github.com/wuji-labs/shangbing-famou) |
| 6 | **xinhuo-xiangchuan** | teaching, not just answering | 论语 · 大学 | [↗](https://github.com/wuji-labs/xinhuo-xiangchuan) |
| 7 | **zhichi-shanlin** | spatial depth & atmosphere | 林泉高致 | [↗](https://github.com/wuji-labs/zhichi-shanlin) |
| 8 | **jingshi-jimin** | statecraft & business judgment¹ | 管子 | [↗](https://github.com/wuji-labs/jingshi-jimin) |
| 9 | **hetu-luoshu** | dialectical reasoning¹ | 易经 | [↗](https://github.com/wuji-labs/hetu-luoshu) |
| 10 | **paoding-jieniu** | decomposition along the natural grain | 庄子 | [↗](https://github.com/wuji-labs/paoding-jieniu) |

¹ Advisory only — not medical, financial, legal, or divination advice. See each skill's disclaimer.

## How a skill is built

Every repo follows the same shape, and the name layer is deliberately separate
from the source layer — the name is poetry (招牌), the `reference/` library is the
engineering payload (弹药):

```
SKILL.md              frontmatter + four underlying principles + navigation
README.md / .zh-CN.md bilingual front door
reference/            structured source material, cited by book · chapter
examples/             worked input -> output cases
benchmark/            evaluation design (scenarios + rubric; numbers from real runs only)
platforms/            per-runtime entry points (Claude Code · Codex · Cursor)
```

> **A note on layout.** The two earliest flagships — `nopua` and `tiangong` — use a
> `codex/ cursor/ kiro/` adapter layout; the eight newer skills use a unified
> `platforms/` layout. New skills standardize on `platforms/`. Both install
> identically via this marketplace.

## Contributing & conduct

Community health files (Contributing, Code of Conduct, Security) live org-wide at
[wuji-labs/.github](https://github.com/wuji-labs/.github). Two hard rules: cite
every classical reference by book and chapter, and keep the framing inclusive.

## License

MIT, across every skill in the family.

---

<div align="center"><a name="简体中文"></a></div>

## 简体中文

**华夏道脉献给世界开源社区的第一批十件礼物。**

每个 skill 把一部华夏典籍提炼成 AI agent 真正用得上的能力——心性、审美、文辞、医道、
谋略、教化、空间、经世、思辨、拆解。支持 Claude Code · Codex · Cursor。

> 不立华夏本位。先从最熟悉的道脉开始，置于人类共享的工具架上——这是第一批，未来还有。

### 一条命令装全家

```
/plugin marketplace add wuji-labs/huaxia-skills
```

再按需安装：`/plugin install nopua@huaxia-skills`（添加市场不会自动安装，需逐个 install）。

十大名册见上表。每个仓库 MIT 许可、中英双语、典源注明书·篇；benchmark 数字一律由真实
运行产出，绝不预填。落款 **乾元無極實驗室 · WUJI Labs**。
