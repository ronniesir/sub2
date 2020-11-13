<template>
  <div class="components-container">
    <editor v-model="content" />
  </div>
</template>

<script>
import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";
export default {
  name: "WangEditor",
  components: {
    Editor
  },
  data() {
    return {
      content: ""
    };
  }
};
</script>

<style scoped>
.components-container {
  text-align: left;
  width: 50%;
  padding: 20px;
}
</style>
