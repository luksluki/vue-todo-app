<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      app
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar1.jpg" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Luksluki</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list shaped>
        <v-list-item-group v-model="link" color="primary">
          <v-list-item v-for="(link, i) in links" :key="i" router :to="link.route">
            <v-list-item-icon>
              <v-icon class="white--text">{{link.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat app>
      <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer" />
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="grey" text v-on="on">
              <span>Menu</span>
              <v-icon right>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn text color="grey">
          <span>Sign Out</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-footer color="white" app>
      <span class="grey--text">Copyright &copy; 2019 Todo App</span>
    </v-footer>
  </nav>
</template>

<script>
import Popup from "./Popup";
export default {
  components: { Popup },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    links: [
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-folder", text: "My Project", route: "/projects" },
      { icon: "mdi-account", text: "Team", route: "/team" }
    ]
  })
};
</script>