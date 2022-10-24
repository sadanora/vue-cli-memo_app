<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        <router-link :to="{ name: 'edit', params: { id: memo.id } }">
          {{ memo.content.split(/\n/)[0] }}
        </router-link>
      </li>
    </ul>
    <p v-else>メモはありません</p>
    <button @click="createMemo">+</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    hasMemos() {
      return this.$store.getters.getLengthOfMemos > 0;
    },
    memos() {
      return this.$store.getters.getAllMemos;
    },
  },
  methods: {
    createMemo() {
      this.$store.commit("incrementCount");
      const id = this.$store.getters.getCount;
      let memo = {
        id: id,
        content: "新規メモ",
      };
      this.$store.commit("saveMemo", memo);
      this.$router.push({ name: "edit", params: { id: memo.id } });
    },
  },
};
</script>
