const RandomID = () => {
    const randomSixDigitNumber = Math.floor(1000000000 + Math.random() * 900000);
    return randomSixDigitNumber;
}
  
export default RandomID