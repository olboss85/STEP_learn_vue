// import { collection, getDocs } from 'firebase/firestore'
// import { db } from '@/firebases'
// import { ref, onMounted } from 'vue';


// export const addReview = () => {
// const reviews = ref([]);

// onMounted(async () => {
//     try {
//         const querySnapshot = await getDocs(collection(db, 'reviews'))

//         querySnapshot.forEach((doc) => {
//             reviews.value.push({
//                 id: doc.id,
//                 ...doc.data(),
//             });
//         });
//     } catch (error) {
//         console.error('Error getting reviews:', error);
//     }
// });

// return 
// }