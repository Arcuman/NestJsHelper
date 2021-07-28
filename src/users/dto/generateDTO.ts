import UpdateUserDto from './updateUser.dto';
import User from '../user.entity';

export const generateDTO = (user: User): UpdateUserDto => {
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    password: user.password,
    address: user.address,
    avatar: user.avatar,
  };
};
