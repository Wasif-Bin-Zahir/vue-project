import { ref } from 'vue';
import axios from 'axios';

export default function useStudent() {
	const url = 'http://localhost:3333/students/';
	const studentData = ref([]);
	const error = ref(null);
	const statusCode = ref(null);

	//Get All Students Data
	const getAllStudent = async () => {
		studentData.value = []; //for reset state before fetching
		error.value = null;
		try {
			const res = await axios(url);
			//console.log(res.data);
			studentData.value = res.data;
		} catch (err) {
			//console.log(err);
			error.value = err;
		}
	};

	//Get single Student Data
	const getSingleStudent = async (id) => {
		studentData.value = [];
		error.value = null;
		try {
			const res = await axios(url + id);
			studentData.value = res.data;
		} catch (err) {
			error.value = err;
		}
	};

	//Add Student Data
	const createStudent = async (formData) => {
		studentData.value = [];
		error.value = null;
		try {
			const config = {
				method: 'POST',
				url: url,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(formData),
			};
			const res = await axios(config);
			studentData.value = res.data;
		} catch (err) {
			error.value = err;
		}
	};

	//Update Student Data

	const updateStudent = async (id, data) => {
		studentData.value = [];
		error.value = null;
		try {
			const config = {
				method: 'PUT',
				url: url + id,
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(data),
			};
			const res = await axios(config);
			studentData.value = res.data;
		} catch (err) {
			error.value = err;
		}
	};

	//Delete Student Data

	const destroyStudent = async (id) => {
		studentData.value = [];
		error.value = null;
		try {
			const config = {
				method: 'DELETE',
				url: url + id,
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const res = await axios(config);
			statusCode.value = res.status;
		} catch (err) {
			error.value = err;
		}
	};

	return {
		studentData,
		error,
		statusCode,
		getAllStudent,
		getSingleStudent,
		createStudent,
		updateStudent,
		destroyStudent,
	};
}
