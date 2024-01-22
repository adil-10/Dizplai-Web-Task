
import Axios from 'axios';
export const submitVotes = async (selectedOption, navigate) => {
    try {
        // Make a POST request to your backend API with the selected option
        const response = await Axios.post('http://localhost:3003/submitVote', {
            selectedOption,
        });

        // If the response is 200 success
        if (response.status === 200) {
            console.log(response);
            // Add it to the local storage where the key = id
            localStorage.setItem("id", JSON.stringify(response.data.voteData));
            // If the vote is successfully submitted, navigate to the results page
            navigate('../Results');
        }
        else {
            window.alert('Failed to submit vote: please try again');
        }
    } catch (error) {
        console.error('Error submitting vote', error);
    }
};