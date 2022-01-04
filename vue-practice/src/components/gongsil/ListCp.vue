<template>
  <div class="list-wrapper">
    <table class="table" v-if="lists.success">
      <tbody>
        <tr v-for="v in lists.lists" :key="v.id">
          <td>{{ v.id }}</td>
          <td>{{ v.user_id }}</td>
          <td>{{ v.writer }}</td>
          <td>{{ v.content }}</td>
          <td>{{ v.createdAt }}</td>
        </tr>
      </tbody>
    </table>
    <form action="http://127.0.0.1:3000/api/form" method="POST" class="mt-5">
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
    </form>
  </div>
</template>

<script>
export default {
  name: 'ListCp',
  props: ['lists'],
  methods: {
    onClick() {},
  },
};
</script>

<style></style>
