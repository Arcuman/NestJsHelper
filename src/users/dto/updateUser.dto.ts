import PublicFile from '../../files/publicFile.entity';
import Address from '../address.entity';

export class UpdateUserDto {
  id?: number;
  email?: string;
  name?: string;
  password?: string;
  address?: Address;
  avatar?: PublicFile;
}

export default UpdateUserDto;
