<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="light-blue darken-3" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title
          class="headline light-blue darken-3 white--text mb-2"
          primary-title
        >Add a New Project</v-card-title>
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
            ></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
            <v-menu v-model="menu" :close-on-content-click="false" max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="computedDateFormattedMomentjs"
                  clearable
                  label="Due Date"
                  readonly
                  v-on="on"
                  @click:clear="due = null"
                  prepend-icon="mdi-calendar-range"
                  :rules="dueRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="due" @change="menu = false"></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="light-blue darken-3" text @click="submit">Add Project</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data: () => ({
    dialog: false,
    title: "",
    content: "",
    due: new Date().toISOString().substr(0, 10),
    menu: false,
    inputRules: [
      v => !!v || "Input is required",
      v => v.length >= 3 || "Minimum length is 3 characters"
    ],
    dueRules: [v => !!v || "Due Date is required"]
  }),

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.dialog = !this.dialog;
      }
    }
  },

  computed: {
    computedDateFormattedMomentjs() {
      return this.due ? moment(this.due).format("dddd, Do MMM YYYY") : "";
    }
  }
};
</script>
