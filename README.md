# React 19 Feature Practice

> React 19 是自 React 18 以來的重要版本更新，帶來了多項新功能與改進，旨在簡化開發流程、提升效能，並加強對現代 Web 應用的支援。以下是 React 19 的主要更新內容：

- 根據 React 19 的更新，透過幾個小案例，來練習這些特性。
- 【React】React v19 Release Notes: https://react.dev/blog/2024/12/05/react-19
- 【Youtube】Every React 19 Change In 6 Minutes: https://www.youtube.com/watch?v=rwC7HY8_U_g

---

### 1. Actions：統一處理異步操作的全新方式

React 19 引入了 **Actions** 概念，讓開發者能更簡潔地處理表單提交、異步請求、錯誤處理與樂觀更新等情境。透過新的 Hook，如 `useActionState`、`useFormStatus` 和 `useOptimistic`，這些操作變得更直觀且易於管理 。

例如，使用 `useActionState` 可以簡化表單提交的處理：

```jsx
function ChangeName({ name, setName }) {
  const [error, submitAction, isPending] = useActionState(
    async (prevState, formData) => {
      const error = await updateName(formData.get('name'));
      if (error) return error;
      redirect('/path');
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
```

---

### 2. Server Components：伺服器端組件的穩定支援

React 19 正式支援 **Server Components**，允許開發者在伺服器端渲染部分組件，減少傳送到客戶端的 JavaScript 數量，提升初始載入速度，並改善 SEO 表現 。

---

### 3. 新的 `use()` API：簡化非同步資源的處理

新增的 `use()` API 允許在渲染期間直接讀取 Promise，React 會在 Promise 解決前暫停渲染，直到取得結果，這使得處理非同步資料變得更簡單 。

---

### 4. 原生支援 `<form>` 的 `action` 屬性

React 19 現在允許在 `<form>`、`<input>` 和 `<button>` 元素上使用函數作為 `action` 或 `formAction` 屬性，這使得表單提交與 Actions 整合更為緊密，並能自動重置表單 。

---

### 5. 改進的錯誤處理機制

React 19 引入了更精細的錯誤處理回呼，包括：

- `onCaughtError`：當錯誤被錯誤邊界捕獲時觸發。
- `onUncaughtError`：當錯誤未被捕獲時觸發。
- `onRecoverableError`：當錯誤可恢復時觸發。

此外，錯誤訊息更為清晰，避免重複日誌，提升除錯效率 。

---

### 6. 支援自訂元素（Custom Elements）

React 19 增強了對自訂元素的支援，允許在伺服器端和客戶端渲染期間正確處理 DOM 屬性與 HTML 屬性，這使得與 Web Components 的整合更加順暢 。

---

### 7. 樣式表優先順序管理

新增的 `precedence` 屬性允許開發者控制樣式表的載入順序，確保樣式正確應用，避免樣式衝突 。

---

### 8. 原生支援文件中繼資料（Document Metadata）

React 19 現在原生支援 `<title>`、`<meta>` 和 `<link>` 等標籤，這些標籤會自動提升至 `<head>`，並與伺服器端渲染和客戶端渲染兼容，簡化 SEO 與中繼資料管理 。

---

### 9. 新的指令：`'use client'` 和 `'use server'`

為了更清楚地區分組件的執行環境，React 19 引入了 `'use client'` 和 `'use server'` 指令，幫助開發者明確指定組件應在客戶端或伺服器端執行 。

---

### 10. 改進的資源預載與非同步腳本支援

React 19 加強了對資源預載（preload）與非同步腳本的支援，允許開發者更有效地控制資源的載入時機，提升應用效能 。

---

## 練習

- 表單提交
- 樂觀更新
- ...
