# Contract: GitHub Activity Contract

## Purpose

定義首頁 GitHub 活動區塊對外部公開資料與內部降級狀態的消費契約。

## Runtime Data Shape

```json
{
  "username": "string",
  "repositories": [
    {
      "name": "string",
      "url": "string",
      "description": "string",
      "updatedAt": "ISO-8601"
    }
  ],
  "contributionGraphUrl": "string",
  "lastFetchedAt": "ISO-8601",
  "fetchStatus": "success | fallback | error",
  "fallbackMessage": "string | null"
}
```

## Behavioral Rules

- 頁面載入時必須優先嘗試抓取最新公開資料。
- 抓取失敗時必須回退到最近成功快取或顯示替代訊息。
- 首頁主要內容不可因 GitHub 區塊失敗而中止渲染。
- `repositories` 需依最後更新時間排序。
