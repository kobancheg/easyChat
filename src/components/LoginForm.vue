<template>
  <div class="login-form">
    <ElForm :model='formData'>
      <ElFormItem
        label='Email'
        prop='email'
        size='small'>
          <ElInput v-model="formData.email"/>
      </ElFormItem>
      <ElFormItem
        label='Password'
        prop='password'
        size='small'>
          <ElInput v-model="formData.password"/>
      </ElFormItem>
      <ElButton
        type='success'
        plain
        size='small'
        native-type='submit'
      >
        Login
      </ElButton>
    </ElForm>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    formData: {
      email: '',
      password: '',
    },
  }),
};
</script>

<style scoped>

</style>
