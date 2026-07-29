<template>
  <div class="home-page-grid">
    <ProfileSummarySection
      title="Summary"
      :intro="model.profile.intro"
      career-title="Work Experience (8-9 years)"
      :work-experience="model.profile.workExperience"
    />
    <LanguageSummarySection title="Skill Summary" :items="skillSummaryItems" />
    <GitHubActivitySection
      title="Recent GitHub Activity"
      :message="model.githubActivity.fallbackMessage ?? 'Recently updated projects'"
      :repositories="model.githubActivity.repositories"
      :contribution-graph-url="model.githubActivity.contributionGraphUrl"
      graph-alt="GitHub contributions graph"
    />
    <HomeCategoryEntrySection title="Explore" :entries="model.categoryEntries" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import ProfileSummarySection from "@/components/home/ProfileSummarySection.vue";
import LanguageSummarySection from "@/components/home/LanguageSummarySection.vue";
import GitHubActivitySection from "@/components/home/GitHubActivitySection.vue";
import HomeCategoryEntrySection from "@/components/home/HomeCategoryEntrySection.vue";
import { getHomePageModel } from "@/services/home/homePageService";
import { profileEn } from "@/data/profile/profile.en";
import { aboutEn } from "@/data/profile/about.en";
import { githubFallback } from "@/data/github/githubFallback";

const skillSummaryItems = [...new Set(aboutEn.skillGroups.flatMap((group) => group.items))];

const model = reactive({
  profile: profileEn,
  githubActivity: githubFallback,
  categoryEntries: [
    { label: "About me", description: "Resume-style overview, strengths, and project links", href: "/en/about" },
    { label: "Logs", description: "Markdown posts and updates", href: "/en/logs" },
    { label: "Learning Note", description: "Programming, database, and tool notes", href: "/en/notes" },
    { label: "Product", description: "Project summaries and links", href: "/en/products" }
  ]
});

onMounted(async () => {
  const nextModel = await getHomePageModel("en");
  Object.assign(model, nextModel);
});
</script>
