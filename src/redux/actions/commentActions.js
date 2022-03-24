import axios from 'axios'

const commentActions = {
    addComment: (commentObj, itineraryId) => {
        return async () => {

        try{
            const token = localStorage.getItem('token')
            await axios.post(`http://localhost:4000/api/comments/${itineraryId}`,
            {...commentObj},
            {headers: {"Authorization": `Bearer ${token}` }}
            )
            return{success:true}
        }
        catch(error){
            console.log({success: false, response: error.message})
        } 
    }
    },
//     getCommentByItinerary: (itineraryId) => {
//         return async () => {
//         try {
            
//         } catch (error) {
            
//         }
//     }
// }
}

export default commentActions;