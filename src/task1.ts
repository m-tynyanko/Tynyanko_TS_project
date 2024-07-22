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
type CheckFunction = (user: userInterface) => boolean;

  const checkPermissionsDecorator = (roles: UserRoles[]): CheckFunction => {
    
    return (user: userInterface): boolean => {
        return roles.includes(user.role);
    }
  }
  
  const checkPermission = checkPermissionsDecorator([UserRoles.admin]);
  const hasPermissions = checkPermission(user);
  
  console.log(hasPermissions);