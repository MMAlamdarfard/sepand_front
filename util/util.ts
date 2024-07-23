export const englishToPersianNumber = (num: string | number): string => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    const englishDigits = '0123456789';
  
    return num
      .toString()
      .split('')
      .map((digit) => (englishDigits.includes(digit) ? persianDigits[englishDigits.indexOf(digit)] : digit))
      .join('');
  };
  export const dayofWeek = (num:number) :string=>{
   switch(num) {
    case 0:
      return 'شنبه'
    case 1:
      return 'یکشنبه'
    case 2:
      return 'دوشنبه'
    case 3:
      return 'سه شنبه'
    case 4:
      return 'چهارشنبه'
    case 5:
      return 'پنجشنبه'
    case 6:
      return 'جمعه'
    default:
      return 'نامشخص'
   }
   
    return ''
  }