document.addEventListener('DOMContentLoaded', () => {
    const ratingButtons = document.querySelectorAll('.rating')
    const submitButton = document.querySelector('.submit-button')
    const ratingState = document.querySelector('.container')
    const thankYouState = document.querySelector('.container.thanks')
    const selectedRatingText = document.getElementById('selected-rating')

    let selectedRating = null;

    ratingButtons.forEach((button) => {
        button.addEventListener('click', () => {
            ratingButtons.forEach((button) => button.classList.remove('active'))
            button.classList.add('active');

            selectedRating = button.textContent.trim()
        })
    })

    //Handle submit
    submitButton.addEventListener('click', () => {
        if(selectedRating){
            selectedRatingText.textContent = selectedRating

            //Hide rating state, show thank you state
            ratingState.style.display = 'none'
            thankYouState.style.display = 'flex'
        }else {
            alert('Please select a rating before submitting')
        }
    })

    thankYouState.style.display = 'none'
})