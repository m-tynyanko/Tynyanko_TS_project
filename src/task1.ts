// Возможные роли пользователя - user/moderator/admin
// Tags: Enum, Union, Type, Interface


enum UserRoles {
    admin = 'admin',
    moderator = 'moderator',
    user = 'user'
}
interface UserInterface {
    id: number;
    login: string;
    role: UserRoles;
}
const user: UserInterface = {
    id: 1,
    login: 'test',
    role: UserRoles.user,
}

type IncludesFunc = (user: UserInterface) => boolean;

type CheckPermissionFunc = (roles: UserRoles[]) => IncludesFunc;


const checkPermissionsDecorator: CheckPermissionFunc = (roles) => {
    return (user) => {
        return roles.includes(user.role);
    }
  }
  
  const checkPermission = checkPermissionsDecorator([UserRoles.admin]);
  const hasPermissions = checkPermission(user);
  
  console.log(hasPermissions);