<template>
  <div class="login-form">
    <ElForm
      :model='formData'
      :rules='rules'
      >
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
          <ElInput v-model="formData.password" type='password'/>
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
    rules: {
      email: [
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: 'blur',
        },
      ],
      password: {
        required: true,
        message: 'Please input password',
        trigger: 'blur',
      },
    },
  }),
};
</script>

<style scoped>

</style>
