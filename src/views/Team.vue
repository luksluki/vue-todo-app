<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex 6 xs12 sm md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="ma-3 text-center">
            <v-responsive class="pa-2 pl-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="greyy--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Luksluki", role: "Tim Leader", avatar: "/avatar1.jpg" },
        { name: "Luks", role: "Graphic designer", avatar: "/avatar2.jpg" },
        { name: "Luki", role: "Front End Developer", avatar: "/avatar3.jpg" },
        { name: "Agung", role: "Back End Developer", avatar: "/avatar4.jpg" },
        { name: "Rahayu", role: "Social Media overick", avatar: "/avatar5.jpg" }
      ]
    };
  }
};
</script>
