<template>
  <div class="home-page-grid">
    <ProfileSummarySection
      title="個人簡述"
      :intro="model.profile.intro"
      career-title="工作經歷(8~9年工作經歷)"
      :work-experience="model.profile.workExperience"
    />
    <LanguageSummarySection title="技能摘要" :items="skillSummaryItems" />
    <GitHubActivitySection
      title="GitHub 最近活動"
      :message="model.githubActivity.fallbackMessage ?? '最近更新的專案'"
      :repositories="model.githubActivity.repositories"
      :contribution-graph-url="model.githubActivity.contributionGraphUrl"
      graph-alt="GitHub contributions graph"
    />
    <HomeCategoryEntrySection title="分類入口" :entries="model.categoryEntries" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import ProfileSummarySection from "@/components/home/ProfileSummarySection.vue";
import LanguageSummarySection from "@/components/home/LanguageSummarySection.vue";
import GitHubActivitySection from "@/components/home/GitHubActivitySection.vue";
import HomeCategoryEntrySection from "@/components/home/HomeCategoryEntrySection.vue";
import { getHomePageModel } from "@/services/home/homePageService";
import { profileZhTw } from "@/data/profile/profile.zh-TW";
import { aboutZhTw } from "@/data/profile/about.zh-TW";
import { githubFallback } from "@/data/github/githubFallback";

const skillSummaryItems = [...new Set(aboutZhTw.skillGroups.flatMap((group) => group.items))];

const model = reactive({
  profile: profileZhTw,
  githubActivity: githubFallback,
  categoryEntries: [
    { label: "關於我", description: "履歷摘要、技術定位與作品導覽", href: "/about" },
    { label: "日誌", description: "Markdown 文章與更新紀錄", href: "/logs" },
    { label: "學習筆記", description: "程式語言、資料庫與工具筆記", href: "/notes" },
    { label: "Side Project", description: "作品摘要與連結入口", href: "/products" }
  ]
});

onMounted(async () => {
  const nextModel = await getHomePageModel("zh-TW");
  Object.assign(model, nextModel);
});
</script>
