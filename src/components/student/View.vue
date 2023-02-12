<script setup>
import useStudent from "../../composables/studentApi";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const{studentData,error,getSingleStudent} =useStudent();
const route = useRoute();
onMounted(() =>{
   getSingleStudent(route.params.id);
});

</script>


<template>
 
   <div class="shadow-md pb-6">
   <table class="table-auto w-full">
   <thead class="bg-slate-600 text-white">
   <tr>
   <th class="py-1">ID</th>
   <th class="py-1">Name</th>
   <th class="py-1">Email</th>
   </tr>
   </thead>

   <tbody class="text-center">
   <tr>
   <td class="py-2">{{ studentData.id }}</td>
   <td class="py-2">{{ studentData.stuname }}</td>
   <td class="py-2">{{ studentData.email }}</td>
   </tr>
   </tbody>
   </table>

   <div class="m-8 flex justify-center">
    <RouterLink :to="{name:'list'}">
  <button
  type="button"
  class="bg-emerald-700 text-white font-medium py-2
  rounded-md px-6 hover:bg-emarald-800 "
  >
  Back to Home
  </button>
</RouterLink>     
   
   </div>
   
   </div>
</template>

<style scoped>

</style>
