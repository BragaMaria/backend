<template>
  <div>
    <div v-for="user in users.data.value">
      Имя: {{ user.name }}, Фамилия: {{ user.surname }},
      <span v-if="user.patronymic"> Отчество: {{ user.patronymic }},</span>
      Email: {{ user.email }}
    </div>
  </div>
</template>

<script setup>
let users = await useFetch("/api/users");
console.log(users.data);
</script>
