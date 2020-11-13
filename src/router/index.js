export const constantRouterMap = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/views/layout.vue"),
    redirect: "/editor",
    children: [
      {
        path: "/editor",
        name: "editor",
        component: () => import("@/views/editor.vue")
      }
    ]
  }
];
