<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const { user, users, authRegister } = useAuthStore()

function register() {
  validateFullname()
  validatePassword()
  validateConfirmPassword()
  if (
    isFullnameValid.value.valid &&
    isPasswordValid.value.valid &&
    isConfirmPasswordValid.value.valid
  ) {
    user.fullname = firstname.value.trim() + ' ' + lastname.value.trim()
    authRegister()
    router.push({ path: '/' })
  } else {
    console.log('something went wrong')
  }
}

const nameRegex = /^[\u0627-\u064A\u067E\u0686\u0698\u06AF\u06A9\u06AF\u06BE\u06CC\u200C\u200D]+$/
const firstname = ref('')
const lastname = ref('')
const isFullnameValid = ref({})
function validateFullname() {
  if (firstname.value && lastname.value) {
    if (nameRegex.test(firstname.value.trim()) && nameRegex.test(lastname.value.trim())) {
      isFullnameValid.value = { valid: true, errorMessage: '' }
    } else {
      isFullnameValid.value = {
        valid: false,
        errorMessage: 'نام و نام خانوادگی خود را به فارسی بنویسید',
      }
    }
  } else {
    isFullnameValid.value = {
      valid: false,
      errorMessage: 'نام و نام خانوادگی خود را کامل وارد کنید',
    }
  }
}

const passwordRegex = /^(?=.*[a-zA-Z]).{8,}$/
const isPasswordValid = ref({})
function validatePassword() {
  if (user.password.length > 7) {
    if (passwordRegex.test(user.password)) {
      isPasswordValid.value = { valid: true, errorMessage: '' }
    } else {
      isPasswordValid.value = {
        valid: false,
        errorMessage: 'رمز شما قدرمتند نیست از کاراکتر انگلیسی استفاده کنید',
      }
    }
  } else {
    isPasswordValid.value = { valid: false, errorMessage: 'رمز حداقل باید ۸ کاراکتر باشد' }
  }
}

const confirmPassword = ref('')
const isConfirmPasswordValid = ref({})
function validateConfirmPassword() {
  if (user.password === confirmPassword.value) {
    isConfirmPasswordValid.value = { valid: true, errorMessage: '' }
  } else {
    isConfirmPasswordValid.value = {
      valid: false,
      errorMessage: 'رمز عبور های وارد شده با هم تطابق ندارند',
    }
  }
}

onMounted(() => {
  if (!user.phoneNumber && users.includes((x) => x.phoneNumber === user.phoneNumber)) {
    router.push('/auth')
  }
})
</script>

<template>
  <base-toast v-if="isToast">You Successfully logged in!</base-toast>
  <div class="card" @keydown.enter="register">
    <div class="card-headers">
      <h2 class="card-header-one">شما هنوز در هلیوم ثبت نام نکرده اید.</h2>
      <h3 class="card-header-two">لطفا اطلاعات زیر را برای ثبت نام تکمیل کنید.</h3>
    </div>
    <BaseInput
      v-model="firstname"
      label="*نام"
      name="firstname"
      placeholder="نام خود را وارد کنید"
      :error="isFullnameValid.errorMessage"
    ></BaseInput>
    <BaseInput
      v-model="lastname"
      label="*نام خانوادگی"
      name="lastname"
      placeholder="نام خانوادگی خود را وارد کنید"
    ></BaseInput>
    <BaseInput
      v-model="user.password"
      label="*رمز عبور"
      name="password"
      placeholder="رمز عبور دلخواه را به انگلیسی وارد کنید"
      :error="isPasswordValid.errorMessage"
    ></BaseInput>
    <BaseInput
      v-model="confirmPassword"
      label="*تکرار رمز عبور"
      name="confirm-password"
      placeholder="رمز عبور خود را مجدد وارد کنید"
      :error="isConfirmPasswordValid.errorMessage"
    ></BaseInput>
    <BaseButton @click="register">تایید</BaseButton>
  </div>
</template>

<style scoped></style>
