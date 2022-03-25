<template>
  <form @submit.prevent="formSubmit">
    <label for="email">Email</label>
    <input type="email" name="email" v-model="email" required />
    <label for="email">Passsword</label>
    <input type="password" name="password" v-model="password" required />
    <label for="role">Job Role</label>
    <select v-model="role">
      <option value="web_developer">Web Developer</option>
      <option value="web_designer">Designer</option>
    </select>
    <label for="skills">Skill</label>

    <input
      type="text"
      name="skill"
      id="skill"
      v-model="skill"
      @keyup.alt="addSkill"
    />
    <div
      @click="deleteSkill(item)"
      v-for="item in skills"
      :key="item"
      class="pill"
    >
      {{ item }}
    </div>
    <div class="terms">
      <input type="checkbox" name="terms" id="terms" v-model="terms" />
      <label for="terms">ACCEPT TERM & AGREEMENTS</label>
    </div>
    <div class="submit">
      <button type="submit">Create an Account</button>
    </div>
  </form>
</template>

<script>
import "./form.css";
export default {
  name: "Form",
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      skill: "",
      skills: [],
    };
  },
  methods: {
    addSkill(e) {
      const skill = this.skill;
      if (e.key === "," && skill) {
        if (this.skills.includes(skill)) {
          return false;
        }
        this.skills = [...this.skills, skill];
        this.skill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills?.filter((item) => item !== skill);
    },
    formSubmit() {
      alert(
        this.email +
          " " +
          this.password +
          " " +
          this.role +
          " agree: " +
          this.terms +
          " " +
          this.skills
      );
    },
  },
};
</script>