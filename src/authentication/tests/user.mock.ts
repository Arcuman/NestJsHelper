import User from '../../users/user.entity';

const mockedUser: User = {
  id: 1,
  email: 'user@email.com',
  name: 'John',
  password: 'hash',
  address: {
    id: 1,
    street: 'streetName',
    city: 'cityName',
    country: 'countryName',
  },
  isTwoFactorAuthenticationEnabled: false,
  stripeCustomerId: '1',
  isEmailConfirmed: false,
  phoneNumber: '+375447689764',
  isPhoneNumberConfirmed: false,
};

export default mockedUser;
