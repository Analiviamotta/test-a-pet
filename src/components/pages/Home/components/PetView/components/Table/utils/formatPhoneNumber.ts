export function formatPhoneNumber(phoneNumber: string) {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  // eslint-disable-next-line no-magic-numbers
  if (cleaned.length === 11) {

    return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    
  // eslint-disable-next-line no-magic-numbers
  } else if (cleaned.length === 10) {

    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else {

    return phoneNumber;
  }
}
