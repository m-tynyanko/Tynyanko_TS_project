// Возможные роли пользователя - user/moderator/admin
// Tags: Enum, Union, Type, Interface


enum UserRoles {
    admin = 'admin',
    moderator = 'moderator',
    user = 'user'
}
interface userInterface {
    id: number;
    login: string;
    role: UserRoles;
}
const user: userInterface = {
    id: 1,
    login: 'test',
    role: UserRoles.user,
}

type T1 = (user: userInterface) => boolean;

type T2 = (roles: UserRoles[]) => T1;


const checkPermissionsDecorator: T2 = (roles) => {
    
    return (user) => {
        return roles.includes(user.role);
    }
  }
  
  const checkPermission = checkPermissionsDecorator([UserRoles.admin, UserRoles.user]);
  const hasPermissions = checkPermission(user);
  
  console.log(hasPermissions);