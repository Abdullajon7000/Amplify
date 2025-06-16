document.querySelectorAll('.rating').forEach(ratingDiv => {
  const emojiIcon = ratingDiv.querySelector('.emoji');
  if (!emojiIcon) return;

  // Reyting sonini olish
  const ratingText = ratingDiv.textContent.trim();
  // Reyting raqamini chiqarib olish (emoji va raqam orasida bo‘lishi mumkin)
  const ratingMatch = ratingText.match(/(\d+(\.\d+)?)/);
  if (!ratingMatch) return;
  const ratingValue = parseFloat(ratingMatch[1]);

  // Rangni aniqlash
  if (ratingValue > 4.5) {
    emojiIcon.style.color = 'green';  // Yashil
  } else if (ratingValue >= 3.5) {
    emojiIcon.style.color = 'orange'; // To'q sariq
  } else {
    emojiIcon.style.color = 'red';    // Qizil
  }
});
