<template>
  <div class="gongsilCp-wrapper">
    <table class="table">
      <tbody v-if="this.gongsil.lists">
        <tr v-for="v in gongsil.lists" :key="v.id">
          <td>{{ v.id }}</td>
          <td>{{ v.user_id }}</td>
          <td>{{ v.writer }}</td>
          <td>{{ v.content }}</td>
          <td>{{ v.createdAt }}</td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr v-for="v in gongsil2.lists" :key="v.id">
          <td>{{ v.id }}</td>
          <td>{{ v.user_id }}</td>
          <td>{{ v.writer }}</td>
          <td>{{ v.content }}</td>
          <td>{{ v.createdAt }}</td>
        </tr>
      </tbody>
    </table>
    <input type="hidden" name="url" value="http://localhost:8080/gongsil" />
    <table class="table table-striped text-center">
      <tbody>
        <tr>
          <td>작성자</td>
          <input type="text" name="writer" />
        </tr>
        <tr>
          <td>내용</td>
          <input type="text" name="content" />
        </tr>
        <tr>
          <td colspan="2" class="text-center">
            <button class="btn btn-primary" @click="onClick">저장</button>
          </td>
        </tr>
      </tbody>
    </table>
    <YouTubeCp />
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import YouTubeCp from './gongsil/YouTubeCp.vue';
import gongsilApi from '../api/gongsil-api';

export default {
  name: 'GongsilCp',
  components: { YouTubeCp },
  data() {
    return {
      gongsil: [],
    };
  },
  methods: {
    async onClick() {
      let url = document.querySelector('input[name="url"]').value;
      let writer = document.querySelector('input[name="writer"]').value;
      let content = document.querySelector('input[name="content"]').value;
      await axios({
        method: 'post',
        url: 'http://127.0.0.1:3000/api/form',
        data: {
          url,
          writer,
          content,
        },
      });
      let { data } = await gongsilApi();
      this.gongsil = data;
    },
  },
  computed: {
    ...mapGetters(['GET_GONGSIL']),
    gongsil2: function () {
      return this.GET_GONGSIL;
    },
  },
  created() {
    this.$store.dispatch('ACT_GONGSIL');
  },
};
</script>

<style></style>
