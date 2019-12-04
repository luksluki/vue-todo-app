<template>
  <div class="project">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Web Skripsi",
          person: "Luki",
          due: "1st Mar 2019",
          status: "complete",
          content: "lorem ipsum"
        },
        {
          title: "Online Shop",
          person: "Luksluki",
          due: "1st May 2019",
          status: "complete",
          content: "lorem ipsum"
        },
        {
          title: "Learn Vuetify",
          person: "Luksluki",
          due: "1st Nov 2019",
          status: "ongoing",
          content: "lorem ipsum"
        },
        {
          title: "Portofolio",
          person: "Luks",
          due: "1st Aug 2019",
          status: "ongoing",
          content: "lorem ipsum"
        }
      ]
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter(projects => {
        return projects.person === "Luksluki";
      });
    }
  }
};
</script>
