<script lang="ts">
  import Header from "@/components/Header.vue";
  import { useRoute } from 'vue-router'
  import { ElConfigProvider } from 'element-plus'
  import { computed } from 'vue'
  import { RouterView } from 'vue-router'

  const route = useRoute()
  const showHeaderRoute = ['posts', 'archived', 'postDetail']

  const isShowHeader = computed(() => showHeaderRoute.includes(route.name))
</script>

<template>
  <el-config-provider :locale="enLocale">
    <div id="teleport"></div>
    <el-container>
      <el-header v-show="isShowHeader">
        <RouterView name="navigation" />
      </el-header>
      <el-main :class="{ pt0: !isShowHeader }">
        <div class="flex-main" :class="{ pt60: isShowHeader }">
          <RouterView class="grow-2 main-shadow"></RouterView>
          <RouterView name="rightSide" class="grow-1"></RouterView>
        </div>
      </el-main>
    </el-container>
  </el-config-provider>
</template>
