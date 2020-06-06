<template>
  <v-form>
    <v-card>
      <v-row
        class="px-8 py-2"
      >
        <v-col>
          <v-row>
            <v-text-field
              label="Title"
              outlined
            />
            <v-text-field
              label="First Name"
              outlined
            />
            <v-text-field
              label="Middle Name"
              outlined
            />
            <v-text-field
              label="Last Name"
              outlined
            />
          </v-row>
          <v-text-field
            label="Email"
            outlined
          />
          <v-row>
            <v-text-field
              label="Job Title"
              outlined
            />
            <v-text-field
              label="Company"
              outlined
            />
          </v-row>
          <v-row>
            <v-text-field
              label="City"
              outlined
            />
            <v-text-field
              label="Prefecture"
              outlined
            />
          </v-row>
          <v-textarea
            label="Speaker Bio"
            hint="A brief description of the nominee"
            outlined
          />
          <v-row>
            <v-text-field
              label="Submitter Name"
              outlined
            />
            <v-text-field
              label="Submitter Email"
              outlined
            />
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
export default {

};
</script>
