const DOMAIN_TITLE = "meagan waller | a blog about software development";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue"),
    meta: {
      title: `${DOMAIN_TITLE}`,
    },
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/BlogIndexView.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | blog`,
    },
  },
  {
    path: "/blog/:slug",
    name: "BlogPost",
    component: () => import("@/views/BlogShowView.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | blog`,
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/views/ProjectIndex.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | projects`,
    },
  },
  {
    path: "/projects/:slug",
    name: "Project",
    component: () => import("@/views/ProjectShow.vue"),
    meta: {
      title: `${DOMAIN_TITLE} | projects`,
    },
  },
];
