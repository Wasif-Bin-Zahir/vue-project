<script setup>
import{
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
}from"@heroicons/vue/24/solid";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
import useStudent from "../../composables/studentApi";

const {studentData,error,getAllStudent,destroyStudent,statusCode} = useStudent();
onMounted(getAllStudent);

const deleteStudent = async(id) =>
{
if(!window.confirm("Are you sure?"))
{return};
await destroyStudent(id);
await getAllStudent();
}

</script>

<template>
 
   <div>
   <div class="bg-green-600 p-4 grid-cols-9">
   <div class="cols-span-6 md:col-span-8">
   <h1 class="text-5xl font-bold text-center mt-3 text-white">
   Student List
   </h1>
   </div>

   <div class="text-left">

   <RouterLink :to="{ name :'add'}">
    <button class="text-white text-md bg-blue-600 hover:bg-blue-900 font-medium rounded-lg p-2 px-6 items-center  border-x-4  border-y-4 border-orange-600" >
   <UserPlusIcon/>Add
   </button>
   </RouterLink>
  
   </div>
   </div>
   </div>

   <div
   class="p-4 mb-4 text-sm text-read-700 bg-red-100 rounded-lg font-medium"
   role="alert"
   v-if="error"
   >
   Opps! Error encounted: {{ error.message }}
   </div>


   <table class="table-auto w-full" v-else-if="studentData">
   <thead class="bg-slate-600 text-white">
   <tr>
   <th class="py-1">No</th>
   <th class="py-1">Name</th>
   <th class="py-1">Email</th>
   <th class="py-1">Action</th>
   </tr>
   </thead>

   <tbody class="text-center">
   <tr v-for="({ id, stuname , email },i) in studentData" :key ="id">
   <td class="py-2">{{ ++i }}</td> 
   <td class="py-2">{{ stuname }}</td>
   <td class="py-2">{{ email }}</td>
   <td class="py-2">
   <RouterLink :to="{name : 'view' , params:{id: id}}">
   <EyeIcon class="text-blue-500 h-6 w-6 inline"/>
   </RouterLink>

   <RouterLink :to="{name : 'edit' , params:{id:id}}">
   <PencilIcon class="text-emerald-500 h-6 w-6 mx-6 inline"/>
   </RouterLink>

   <TrashIcon 
   class="text-red-500 h-6 w-6 inline cursor-pointer"
   @click="deleteStudent(id)"
   />
  
   </td>
   </tr>
   
   
   
   </tbody>
   </table>
<br>
<br>

   <div
   class="p-4 mb-4 text-sm text-read-800 bg-red-100 rounded-lg font-medium text-center"
   role="alert"
   v-if="statusCode===200"
   >
   Student Deleted Successfully
   </div>

</template>

<style scoped>

</style>
