# Contract: Content Schema

## Purpose

定義文章、分類、首頁摘要與產品資料的最小發布契約，確保內容可被共用元件與
雙語路由一致消費。

## Article Front Matter Contract

```yaml
id: string
locale: zh-TW | en
title: string
summary: string
slug: string
categoryIds:
  - string
tags:
  - string
publishedAt: YYYY-MM-DD
updatedAt: YYYY-MM-DD
author: string
status: draft | published | archived
legacyPaths:
  - string
```

## Navigation Data Contract

```yaml
id: string
parentId: string | null
order: number
labels:
  zh-TW: string
  en: string
itemType: internal-page | external-link | group
targetPageId: string | null
targetPath: string | null
visible: boolean
```

## Product Entry Contract

```yaml
id: string
names:
  zh-TW: string
  en: string
summary:
  zh-TW: string
  en: string
primaryLink: string
linkType: internal | external
hasDetailPage: boolean
sortOrder: number
status: draft | published
```
