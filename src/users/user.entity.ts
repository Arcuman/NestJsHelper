import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import Address from './address.entity';
import Post from '../posts/post.entity';
import PublicFile from '../files/publicFile.entity';
import PrivateFile from '../private-files/privateFile.entity';

@Entity()
class User {
  @Expose()
  @PrimaryGeneratedColumn()
  public id: number;

  @Expose()
  @Column({ unique: true })
  public email: string;

  @Expose()
  @Column()
  public name: string;

  @Column({ nullable: true })
  @Exclude()
  public password?: string;

  @OneToOne(() => Address, {
    eager: true,
    cascade: true,
  })
  @JoinColumn()
  public address?: Address;

  @OneToMany(() => Post, (post: Post) => post.author, {
    eager: false,
  })
  public posts?: Post[] | null;

  @JoinColumn()
  @OneToOne(() => PublicFile, {
    eager: true,
    nullable: true,
  })
  public avatar?: PublicFile | null;

  @OneToMany(() => PrivateFile, (file: PrivateFile) => file.owner)
  public files?: PrivateFile[];

  @Column({
    nullable: true,
  })
  @Exclude()
  public currentHashedRefreshToken?: string;

  @Exclude()
  @Column({ default: false })
  public isTwoFactorAuthenticationEnabled: boolean;

  @Exclude()
  @Column({ nullable: true })
  public twoFactorAuthenticationSecret?: string;

  @Column({ nullable: true })
  public stripeCustomerId: string;

  @Column({ default: false })
  public isEmailConfirmed: boolean;

  @Column({ default: '+375447689764' })
  public phoneNumber: string;

  @Column({ default: false })
  public isPhoneNumberConfirmed: boolean;

  @Column({ default: false })
  isRegisteredWithGoogle: boolean;
}

export default User;
