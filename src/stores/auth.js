import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const users = ref([
    {
      id: 1,
      phoneNumber: '09123456789',
      fullname: 'reza rezaei',
      password: 'reza2000',
    },
    {
      id: 2,
      phoneNumber: '09987654321',
      fullname: 'ahmad ahmadi',
      password: 'ahmad2000',
    },
  ])
  const user = ref({
    id: 0,
    phoneNumber: '',
    fullname: '',
    password: '',
  })

  function authLogin() {
    let loggedInUser = users.value.find(
      (x) => x.phoneNumber === user.value.phoneNumber && x.password === user.value.password,
    )
    user.value.id = loggedInUser.id
    user.value.fullname = loggedInUser.fullname
  }

  function authRegister() {
    addUser(user.value.phoneNumber, user.value.fullname, user.value.password)
  }

  function addUser(phoneNumber, fullname, password) {
    const newId = Math.max(...users.value.map((x) => x.id)) + 1
    users.value.push({ id: newId, phoneNumber, fullname, password })
    console.log(users.value)
  }
  return { user, users, authRegister, authLogin }
})
