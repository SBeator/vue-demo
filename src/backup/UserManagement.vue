<template>
  <Table :columns="columns1" :data="data1" :show-header="false"></Table>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: '用户',
          key: 'userName'
        },
        {
          title: '状态',
          key: 'state'
        },
        {
          title: '角色权限',
          key: 'role'
        },
        {
          title: '用户姓名',
          key: 'name'
        },
        {
          title: '移动电话',
          key: 'phone'
        },
        {
          title: '管辖公司',
          key: 'manageCompanyName'
        }
      ],
      data1: [
        {
          id: '163',
          role: 'dm_company',
          famliyName: '',
          firstName: '',
          email: '',
          mobile: '13683457930',
          phone: '',
          photo: '',
          userName: '帖',
          password:
            '$2a$10$S7Rq.MJ3/n/G8A5VqD4np.u72CSoIGDCCFn76Ll1fCNp9m7nR6Aua',
          state: 0,
          manageCompany: ['26'],
          manageCompanyName: ['运总'],
          enabled: true
        },
        {
          id: '144',
          role: 'dm_company',
          famliyName: '李',
          firstName: '白',
          email: '',
          mobile: '',
          phone: '',
          photo: '',
          userName: 'libai',
          password:
            '$2a$10$cBFtS4YdRQFAzjgGxSHvI.uwnkONlZUtQvRYIUymAGobPbkK7IBVi',
          state: 0,
          manageCompany: ['26'],
          manageCompanyName: ['运总'],
          enabled: true
        },
        {
          id: '133',
          role: 'app_company',
          famliyName: '',
          firstName: '',
          email: '',
          mobile: '',
          phone: '',
          photo: '',
          userName: 'appcompany',
          password:
            '$2a$10$0QEkU/NXhhXlYYM85y8sJ.a7Zki/Kd608Ntr1ynBPsTeBR3Yml.cu',
          state: 0,
          manageCompany: ['36'],
          manageCompanyName: ['智城派尔'],
          enabled: true
        },
        {
          id: '132',
          role: 'dm_company',
          famliyName: '',
          firstName: '',
          email: '',
          mobile: '',
          phone: '',
          photo: '',
          userName: 'dmcompany',
          password:
            '$2a$10$5UcwqnNDysX7e3odyRfLeu8raiWlmvMJ5ekODyXGQta2/2BcYWi5.',
          state: 0,
          manageCompany: ['27'],
          manageCompanyName: ['康福德高'],
          enabled: true
        },
        {
          id: '129',
          role: 'dm_company',
          famliyName: '小',
          firstName: '美',
          email: '',
          mobile: '',
          phone: '',
          photo: '',
          userName: 'xiaomei',
          password:
            '$2a$10$j3x7SEDN6Z75iySXWZd3XuohtXKvov5KWZVSXEus/7ZFACHjfhVnq',
          state: 1,
          manageCompany: ['27'],
          manageCompanyName: ['康福德高'],
          enabled: false
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
</style>
