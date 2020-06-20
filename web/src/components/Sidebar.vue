<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    right
    dark
    color="primary"
  >
    <v-list>
      <div v-for="item in items"
          :key="item.title">
        <v-list-item
          :href="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    }
  },
  data: () => ({
    drawer: false,
  }),
  watch: {
    show() {
      this.drawer = this.show;
    },
    drawer() {
      if (!this.drawer) {
              this.$emit('close-drawer')
      }
    }
  },
};
</script>
