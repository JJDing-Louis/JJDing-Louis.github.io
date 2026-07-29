<template>
  <article ref="articleRef" class="article-renderer">
    <slot />
  </article>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUpdated, ref } from "vue";
import hljs from "highlight.js/lib/core";
import csharp from "highlight.js/lib/languages/csharp";
import css from "highlight.js/lib/languages/css";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import plaintext from "highlight.js/lib/languages/plaintext";
import powershell from "highlight.js/lib/languages/powershell";
import python from "highlight.js/lib/languages/python";
import sql from "highlight.js/lib/languages/sql";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("cs", csharp);
hljs.registerLanguage("css", css);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("java", java);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("powershell", powershell);
hljs.registerLanguage("ps1", powershell);
hljs.registerLanguage("python", python);
hljs.registerLanguage("py", python);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("text", plaintext);
hljs.registerLanguage("textile", plaintext);
hljs.registerLanguage("xml", xml);

const articleRef = ref<HTMLElement | null>(null);
const copyLabel = "複製";
const copiedLabel = "已複製";

const languageLabels: Record<string, string> = {
  csharp: "C#",
  cs: "C#",
  css: "CSS",
  html: "HTML",
  java: "Java",
  javascript: "JavaScript",
  js: "JavaScript",
  plaintext: "Text",
  powershell: "PowerShell",
  ps1: "PowerShell",
  py: "Python",
  python: "Python",
  sql: "SQL",
  text: "Text",
  textile: "Text",
  xml: "XML"
};

const normalizeCodeLanguage = (codeBlock: HTMLElement): string => {
  const languageClass = Array.from(codeBlock.classList).find((className) => className.startsWith("language-"));
  const language = languageClass?.replace("language-", "").toLowerCase() ?? "plaintext";

  if (!hljs.getLanguage(language)) {
    if (languageClass) {
      codeBlock.classList.remove(languageClass);
    }
    codeBlock.classList.add("language-plaintext");
    return "plaintext";
  }

  return language;
};

const normalizeCodeText = (source: string): string => {
  const lines = source.replace(/\r\n/g, "\n").split("\n");

  while (lines.length > 0 && lines[0].trim() === "") {
    lines.shift();
  }

  while (lines.length > 0 && lines[lines.length - 1].trim() === "") {
    lines.pop();
  }

  const indentation = lines
    .filter((line) => line.trim() !== "")
    .map((line) => line.match(/^\s*/)?.[0].length ?? 0);

  const minIndent = indentation.length > 0 ? Math.min(...indentation) : 0;

  return lines
    .map((line) => line.slice(minIndent).replace(/\s+$/g, ""))
    .join("\n");
};

const escapeLineContent = (line: string): string => (line.length === 0 ? "&nbsp;" : line);

const buildLineMarkup = (html: string): string => {
  const normalized = html.replace(/\n$/, "");
  const lines = normalized.split("\n");

  return lines
    .map(
      (line, index) =>
        `<span class="code-block-card__line"><span class="code-block-card__line-number">${index + 1}</span><span class="code-block-card__line-content">${escapeLineContent(line)}</span></span>`
    )
    .join("");
};

const copyCode = async (button: HTMLButtonElement, codeBlock: HTMLElement): Promise<void> => {
  const originalLabel = button.textContent ?? copyLabel;

  try {
    await navigator.clipboard.writeText(codeBlock.textContent ?? "");
    button.textContent = copiedLabel;
  } catch {
    button.textContent = "複製失敗";
  }

  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1600);
};

const enhanceCodeBlock = (codeBlock: HTMLElement, language: string): void => {
  const preBlock = codeBlock.parentElement;
  if (!(preBlock instanceof HTMLElement) || preBlock.dataset.codeEnhanced === "true") {
    return;
  }

  const wrapper = document.createElement("section");
  wrapper.className = "code-block-card";

  const header = document.createElement("header");
  header.className = "code-block-card__header";

  const languageTag = document.createElement("span");
  languageTag.className = "code-block-card__language";
  languageTag.textContent = languageLabels[language] ?? language.toUpperCase();

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "code-block-card__copy";
  copyButton.textContent = copyLabel;
  copyButton.addEventListener("click", () => {
    void copyCode(copyButton, codeBlock);
  });

  header.append(languageTag, copyButton);
  wrapper.appendChild(header);

  preBlock.parentElement?.insertBefore(wrapper, preBlock);
  wrapper.appendChild(preBlock);

  preBlock.classList.add("code-block-card__body");
  preBlock.dataset.codeEnhanced = "true";
  codeBlock.innerHTML = buildLineMarkup(codeBlock.innerHTML);
};

const highlightCodeBlocks = async (): Promise<void> => {
  await nextTick();

  articleRef.value?.querySelectorAll("pre code").forEach((block) => {
    const codeBlock = block as HTMLElement;
    if (codeBlock.dataset.codeEnhanced === "true") {
      return;
    }

    const language = normalizeCodeLanguage(codeBlock);
    codeBlock.textContent = normalizeCodeText(codeBlock.textContent ?? "");
    hljs.highlightElement(codeBlock);
    enhanceCodeBlock(codeBlock, language);
    codeBlock.dataset.codeEnhanced = "true";
  });
};

onMounted(() => {
  void highlightCodeBlocks();
});

onUpdated(() => {
  void highlightCodeBlocks();
});
</script>

<style scoped>
.article-renderer {
  display: grid;
  gap: 1rem;
  line-height: 1.8;
}

.article-renderer :deep(pre) {
  overflow-x: auto;
  margin: 0;
}

.article-renderer :deep(.code-block-card) {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  border: 1px solid rgba(71, 85, 105, 0.55);
  border-radius: 1.2rem;
  background:
    linear-gradient(180deg, rgba(30, 41, 59, 0.96) 0%, rgba(15, 23, 42, 0.98) 100%);
  box-shadow:
    0 24px 48px rgba(15, 23, 42, 0.2),
    inset 0 1px 0 rgba(148, 163, 184, 0.12);
}

.article-renderer :deep(.code-block-card__header) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1rem 0;
}

.article-renderer :deep(.code-block-card__language) {
  display: inline-flex;
  align-items: center;
  min-width: 5rem;
  padding: 0.45rem 0.85rem;
  border-radius: 0.8rem 0.8rem 0 0;
  background: linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 100%);
  color: #dbeafe;
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.04em;
}

.article-renderer :deep(.code-block-card__copy) {
  border: 1px solid rgba(148, 163, 184, 0.28);
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.4);
  color: #e2e8f0;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.article-renderer :deep(.code-block-card__copy:hover) {
  background: rgba(30, 41, 59, 0.9);
  border-color: rgba(96, 165, 250, 0.55);
  transform: translateY(-1px);
}

.article-renderer :deep(.code-block-card__body) {
  box-sizing: border-box;
  width: 100%;
  padding: 0.75rem 1rem 0.9rem;
  background: transparent;
}

.article-renderer :deep(.code-block-card__body code) {
  display: grid;
  width: 100%;
  min-width: 0;
  white-space: normal;
}

.article-renderer :deep(.code-block-card__line) {
  display: grid;
  grid-template-columns: 2.5rem minmax(0, 1fr);
  gap: 0.5rem;
  align-items: baseline;
}

.article-renderer :deep(.code-block-card__line-number) {
  user-select: none;
  text-align: right;
  color: rgba(148, 163, 184, 0.55);
}

.article-renderer :deep(.code-block-card__line-content) {
  white-space: pre-wrap;
  word-break: break-word;
  color: #e5eefc;
}

.article-renderer :deep(code) {
  font-family: "Consolas", "Courier New", monospace;
  font-size: 0.98rem;
  line-height: 1.2;
}

.article-renderer :deep(.hljs) {
  background: transparent;
  color: #e5eefc;
}

.article-renderer :deep(.hljs-comment),
.article-renderer :deep(.hljs-quote) {
  color: #94a3b8;
  font-style: italic;
}

.article-renderer :deep(.hljs-keyword),
.article-renderer :deep(.hljs-selector-tag),
.article-renderer :deep(.hljs-literal) {
  color: #f472b6;
}

.article-renderer :deep(.hljs-string),
.article-renderer :deep(.hljs-title),
.article-renderer :deep(.hljs-section),
.article-renderer :deep(.hljs-attribute) {
  color: #93c5fd;
}

.article-renderer :deep(.hljs-number),
.article-renderer :deep(.hljs-symbol),
.article-renderer :deep(.hljs-bullet) {
  color: #f59e0b;
}

.article-renderer :deep(.hljs-function),
.article-renderer :deep(.hljs-built_in),
.article-renderer :deep(.hljs-title.function_) {
  color: #22d3ee;
}

.article-renderer :deep(.hljs-variable),
.article-renderer :deep(.hljs-params) {
  color: #f8fafc;
}

@media (max-width: 720px) {
  .article-renderer :deep(.code-block-card__header) {
    padding: 0.8rem 0.8rem 0;
  }

  .article-renderer :deep(.code-block-card__body) {
    padding: 0.7rem 0.8rem 0.85rem;
  }

  .article-renderer :deep(.code-block-card__line) {
    grid-template-columns: 2.25rem minmax(0, 1fr);
    gap: 0.45rem;
  }
}
</style>
